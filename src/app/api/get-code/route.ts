import Imap from "imap";
import { simpleParser } from "mailparser";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  const imap = new Imap({
    user: process.env.EMAIL_FROM1!,
    password: process.env.EMAIL_PASSWORD1!,
    host: "imap.hostinger.com",
    port: 993,
    tls: true,
    authTimeout: 30000,
  });

  const openInbox = (cb: (error: Error | null, mailbox?: Imap.Box) => void) => {
    imap.openBox("INBOX", true, cb);
  };

  try {
    // Wrap the logic in a Promise to handle asynchronous flow
    const result = await new Promise<string | null>((resolve, reject) => {
      imap.once("ready", () => {
        openInbox((err, box) => {
          if (err) return reject(err);

          const searchCriteria = ["ALL"];
          imap.search(searchCriteria, (err, results) => {
            if (err) return reject(err);

            if (!results || results.length === 0) {
              imap.end();
              return resolve(null);
            }

            const latestEmail = Math.max(...results); // Get the latest email
            const fetch = imap.fetch(latestEmail, { bodies: "" });

            fetch.on("message", (msg) => {
              msg.on("body", (stream) => {
                simpleParser(stream as any, (err, parsed) => {
                  if (err) return reject(err);

                  imap.end();
                  const codeF = parsed.subject?.slice(3, 8); // Extract desired part of subject
                  resolve(codeF || null);
                });
              });
            });

            fetch.once("end", () => {});
          });
        });
      });

      imap.once("error", (err: Error) => {
        reject(err);
      });

      imap.connect();
    });

    // Return the response with the extracted code or an appropriate message
    if (result) {
      return NextResponse.json({ code: result });
    } else {
      return NextResponse.json({ success: false, message: "No emails found." });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: JSON.stringify(error) });
  }
}

import Image from "next/image";
import { BlogContent } from "@/types";

export const BlogFormatter = ({ content }: { content: BlogContent }) => {
  return (
    <div className="prose w-full max-w-full sm:max-w-[95%] blog-styles my-6 ">
      {content.blocks.map((b: any, index) => {
        switch (b.type) {
          case "paragraph":
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: b.data.text }}
              />
            );
          case "image":
            return (
              <Image
                width={750}
                height={750}
                src={b.data.file.url}
                alt={b.id}
                key={index}
                style={{ objectFit: "contain" }}
              />
            );
          case "header":
            switch (b.data.level) {
              case 1:
                return (
                  <h1
                    key={index}
                    id={b.id}
                    dangerouslySetInnerHTML={{ __html: b.data.text }}
                  />
                );
              case 2:
                return (
                  <h2
                    key={index}
                    id={b.id}
                    dangerouslySetInnerHTML={{ __html: b.data.text }}
                  />
                );
              case 3:
                return (
                  <h3
                    key={index}
                    id={b.id}
                    dangerouslySetInnerHTML={{ __html: b.data.text }}
                  />
                );
              case 4:
                return (
                  <h4
                    key={index}
                    id={b.id}
                    dangerouslySetInnerHTML={{ __html: b.data.text }}
                  />
                );
              case 5:
                return (
                  <h6
                    key={index}
                    id={b.id}
                    dangerouslySetInnerHTML={{ __html: b.data.text }}
                  />
                );
              default:
                return (
                  <h6
                    key={index}
                    id={b.id}
                    dangerouslySetInnerHTML={{ __html: b.data.text }}
                  />
                );
            }
          case "list":
            if (b.data.style === "unordered") {
              return (
                <ul key={index}>
                  {b.data.items.map((list: any, listIndex: any) => (
                    <li
                      key={listIndex}
                      dangerouslySetInnerHTML={{ __html: list.content }}
                    />
                  ))}
                </ul>
              );
            } else {
              return (
                <ol key={index}>
                  {b.data.items.map((list: any, listIndex: any) => (
                    <li
                      key={listIndex}
                      dangerouslySetInnerHTML={{ __html: list.content }}
                    />
                  ))}
                </ol>
              );
            }
          case "ad":
            return <b.data key={index} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

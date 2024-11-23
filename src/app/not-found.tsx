import Logo from "@/components/Logo";
import SearchForm from "@/features/ads/search-form";

const NotFoundPage = () => {
  return (
    <main className="w-full min-h-screen">
      <header className="w-full flex items-center justify-between gap-x-4 my-6 max-w-screen-xl mx-auto px-4 sm:px-2 md:px-0">
        <SearchForm />
        <Logo />
      </header>
      <div className="w-full space-y-4  my-6 max-w-screen-xl mx-auto px-4 sm:px-2 md:px-0">
        <p className="text-muted-foreground">Page not Found...</p>
        <p>Requested Page was not found.</p>
      </div>
    </main>
  );
};

export default NotFoundPage;

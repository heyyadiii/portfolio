export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aditya Sisodiya. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

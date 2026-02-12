export default function Footer() {
  return (
    <footer className="relative py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold tracking-wider text-primary">
            CYBERTHON 26
          </div>
          <p className="font-body text-sm text-muted-foreground">
            © 2026 Cyberthon. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Discord", "GitHub"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

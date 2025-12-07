import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold gradient-text mb-4">
              AdvancingTechnology
            </div>
            <p className="text-gray-400">
              AI-powered business solutions for the modern world
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Projects</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/projects/life-coach-ai" className="hover:text-[var(--accent-purple)] transition-colors">
                  Life-Coach-Ai
                </Link>
              </li>
              <li>
                <Link href="/projects/personal-dashboard" className="hover:text-[var(--accent-purple)] transition-colors">
                  Personal Dashboard
                </Link>
              </li>
              <li>
                <Link href="/projects/mycrashapp" className="hover:text-[var(--accent-purple)] transition-colors">
                  MyCrashApp
                </Link>
              </li>
              <li>
                <Link href="/projects/aj-agi" className="hover:text-[var(--accent-purple)] transition-colors">
                  AJ-AGI System
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://github.com/AdvancingTechnology"
                  className="hover:text-[var(--accent-purple)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://advancingtechnology.dev"
                  className="hover:text-[var(--accent-purple)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technical Showcase
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@advancingtechnology.online"
                  className="hover:text-[var(--accent-purple)] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-gray-400">
          <p>&copy; {currentYear} AdvancingTechnology. Building the future with AI.</p>
        </div>
      </div>
    </footer>
  );
}

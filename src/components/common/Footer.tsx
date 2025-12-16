import Link from 'next/link';
import { FooterProps } from '@/types/landing-page';

/**
 * Glassmorphic Footer Component
 * 
 * Modern footer with glassmorphism design featuring:
 * - Elegant frosted glass effect
 * - Soft neutral color palette
 * - Smooth hover animations
 * - Responsive multi-column layout
 * - Social media icons with glow effects
 * 
 * Requirements: 5.3, 5.4, 5.5, 10.5
 */
export default function Footer({ companyInfo, links, socialMedia }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const renderSocialIcon = (platform: string) => {
    const iconClass = "w-5 h-5";
    
    switch (platform.toLowerCase()) {
      case 'facebook':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        );
      case 'twitter':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      case 'pinterest':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer
      className="w-full relative mt-20"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50 to-slate-100" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main glass container */}
        <div className="backdrop-blur-2xl bg-white/70 rounded-3xl shadow-2xl border border-white/60 p-8 md:p-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info Section */}
            <div className="lg:col-span-1">
              <h3 className="text-slate-900 text-2xl font-bold mb-4">
                {companyInfo.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {companyInfo.description}
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                Shop
              </h4>
              <ul className="space-y-3">
                {links.shop.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm flex items-center focus:outline-none focus:ring-2 focus:ring-slate-400/50 rounded"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                Company
              </h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm flex items-center focus:outline-none focus:ring-2 focus:ring-slate-400/50 rounded"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                Support
              </h4>
              <ul className="space-y-3">
                {links.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm flex items-center focus:outline-none focus:ring-2 focus:ring-slate-400/50 rounded"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                Legal
              </h4>
              <ul className="space-y-3">
                {links.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm flex items-center focus:outline-none focus:ring-2 focus:ring-slate-400/50 rounded"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-900 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright Notice */}
            <p className="text-slate-600 text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {socialMedia.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 rounded-xl text-slate-600 hover:text-slate-900 backdrop-blur-sm bg-white/40 hover:bg-white/60 border border-white/40 transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400/50"
                  aria-label={`Visit our ${social.platform} page`}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg bg-slate-400" />
                  
                  <div className="relative">
                    {renderSocialIcon(social.platform)}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-slate-200/30 rounded-full blur-3xl -z-10" />
      </div>
    </footer>
  );
}

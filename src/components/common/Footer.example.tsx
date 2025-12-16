/**
 * Example usage of the Footer component
 * 
 * This file demonstrates how to use the Footer component with mock data.
 * To test this component, create a test page and import this example.
 */

import Footer from './Footer';
import { mockCompanyInfo, mockFooterLinks, mockSocialLinks } from '@/data/mock-footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page content would go here */}
      <div className="flex-1 bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Footer Component Example
        </h1>
        <p className="text-gray-600">
          Scroll down to see the footer component with all link groups and social media icons.
        </p>
      </div>

      {/* Footer Component */}
      <Footer
        companyInfo={mockCompanyInfo}
        links={mockFooterLinks}
        socialMedia={mockSocialLinks}
      />
    </div>
  );
}

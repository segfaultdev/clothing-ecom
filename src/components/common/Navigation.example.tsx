/**
 * Navigation Component Example
 * 
 * This file demonstrates the Navigation component usage.
 * The Navigation component is already integrated into the root layout
 * and will appear on all pages automatically.
 * 
 * Features demonstrated:
 * - Desktop navigation with horizontal links
 * - Mobile hamburger menu
 * - Accessibility attributes
 * - Responsive design
 * - Smooth transitions
 */

import Navigation from './Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation component */}
      <Navigation />
      
      {/* Example content to show navigation in context */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Navigation Component Example
          </h1>
          
          <div className="space-y-4 text-gray-700">
            <p>
              The Navigation component is now integrated into the root layout and appears
              on all pages of the application.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h2 className="font-semibold text-blue-900 mb-2">Desktop View</h2>
              <p className="text-blue-800">
                On desktop screens (≥768px), the navigation displays as a horizontal bar
                with all links visible: Products, Categories, Cart, and Account.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h2 className="font-semibold text-green-900 mb-2">Mobile View</h2>
              <p className="text-green-800">
                On mobile screens (&lt;768px), the navigation shows a hamburger menu icon.
                Clicking it reveals a slide-down menu with all navigation links.
              </p>
            </div>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h2 className="font-semibold text-purple-900 mb-2">Accessibility</h2>
              <ul className="list-disc list-inside text-purple-800 space-y-1">
                <li>ARIA labels for screen readers</li>
                <li>Keyboard navigation support</li>
                <li>Focus indicators on interactive elements</li>
                <li>Semantic HTML with proper nav and role attributes</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

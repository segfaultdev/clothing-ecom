'use client';

import { useState, FormEvent } from 'react';
import { NewsletterSubscriptionProps } from '@/types/landing-page';

/**
 * Email validation function
 * Validates email format using a standard regex pattern
 * 
 * @param email - Email string to validate
 * @returns true if email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * NewsletterSubscription Component
 * 
 * Client component for newsletter email capture with validation.
 * Displays success/error messages based on submission result.
 * 
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 10.5
 */
export default function NewsletterSubscription({
  title = 'Stay Updated',
  subtitle = 'Subscribe to our newsletter for the latest products and exclusive offers',
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    // Validate email format
    if (!validateEmail(email)) {
      setMessage({
        type: 'error',
        text: 'Please enter a valid email address',
      });
      return;
    }

    // Set loading state
    setIsLoading(true);

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Success
      setMessage({
        type: 'success',
        text: 'Thank you for subscribing! Check your email for confirmation.',
      });
      setEmail('');
    } catch {
      // Error handling
      setMessage({
        type: 'error',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2
          id="newsletter-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          {title}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {subtitle}
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          noValidate
        >
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Email Input */}
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                aria-label="Email address for newsletter subscription"
                aria-required="true"
                aria-invalid={message?.type === 'error'}
                aria-describedby={message ? 'newsletter-message' : undefined}
                disabled={isLoading}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Subscribe to newsletter"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {/* Success/Error Message */}
          {message && (
            <div
              id="newsletter-message"
              role="alert"
              aria-live="polite"
              className={`mt-4 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {message.text}
            </div>
          )}
        </form>

        {/* Privacy Notice */}
        <p className="mt-6 text-sm text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

/**
 * Product Detail Page - Placeholder
 */
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Product: {params.slug}</h1>
      <p className="mt-4 text-gray-600">Product details coming soon...</p>
    </div>
  );
}

/**
 * Category Page - Placeholder
 */
export default function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Category: {params.category}</h1>
      <p className="mt-4 text-gray-600">Category products coming soon...</p>
    </div>
  );
}

/**
 * Order Detail Page - Placeholder
 */
export default function OrderDetailPage({ params }: { params: { orderId: string } }) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Order #{params.orderId}</h1>
      <p className="mt-4 text-gray-600">Order details coming soon...</p>
    </div>
  );
}

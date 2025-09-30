export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-pulse space-y-4">
        <div className="h-12 w-48 bg-gray-200 rounded mx-auto" />
        <div className="h-64 w-96 bg-gray-100 rounded" />
        <div className="h-4 w-64 bg-gray-200 rounded mx-auto" />
      </div>
    </div>
  );
}

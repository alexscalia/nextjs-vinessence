export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-wine-light">
      <div className="text-center">
        {/* Wine glass loading animation */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-wine-burgundy/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-wine-burgundy rounded-full animate-spin"></div>
        </div>
        
        <h2 className="text-lg font-medium font-playfair text-wine-burgundy mb-2">
          Loading Wine Import Thailand
        </h2>
        
        <p className="text-sm text-gray-600">
          Preparing your wine import experience...
        </p>
      </div>
    </div>
  );
} 
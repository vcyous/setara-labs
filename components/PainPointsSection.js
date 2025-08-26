export default function PainPointsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Common Pain</span> We Solved
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the essence of our services, designed to elevate your
            experience and meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 card-hover">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Lack Of User Retention
            </h3>
            <p className="text-gray-600">
              Our backend solutions ensure robust performance and scalability.
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-8 card-hover">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Inconsistent Product Branding
            </h3>
            <p className="text-gray-600">
              Our backend solutions ensure robust performance and scalability.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-8 card-hover">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold">⚙️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Business-Tech Misalignment
            </h3>
            <p className="text-gray-600">
              We create engaging and responsive interfaces for a better user
              journey.
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-8 card-hover">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white font-bold">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Inefficient MVP Development
            </h3>
            <p className="text-gray-600">
              Our fullstack services cover everything from front to back,
              ensuring a cohesive product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

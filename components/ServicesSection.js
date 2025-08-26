export default function ServicesSection() {
  return (
    <section className="py-20 services-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem, sed
            diam et magna tempus lorem ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl p-6 card-hover">
            <div className="h-32 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">BRANDING</h3>
            <p className="text-gray-600 text-sm mb-4">
              Distinctive brand identity solutions that you should trust better
              than yourself.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 card-hover">
            <div className="h-32 bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-green-400 font-mono text-xs">&lt;/&gt;</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              FRONTEND DEVELOPMENT
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Responsive, performant, user interfaces and User Experience.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 card-hover">
            <div className="h-32 bg-gray-100 rounded-lg mb-6 flex items-center justify-center relative">
              <div className="w-12 h-12 bg-pink-400 rounded-lg absolute top-4 left-4"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-lg absolute bottom-4 right-4"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              UI/UX DESIGN
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Creative design that converts business into User experience.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 card-hover">
            <div className="h-32 bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-600 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              BACKEND DEVELOPMENT
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Scalable, secure and efficient APIs and servers Database.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 card-hover">
            <div className="h-32 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              FULLSTACK DEVELOPMENT
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              End to End development from concept to deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

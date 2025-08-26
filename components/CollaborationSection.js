export default function CollaborationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Collaboration Story</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build digital solution that serve both your business goals and
            your users' needs—creating win-win outcomes that drive sustainable
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-hover bg-gray-100 rounded-xl overflow-hidden">
            <div className="h-48 bg-gray-300 relative">
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                UI/UX DESIGN
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">
                Property Development Portfolio
              </h3>
            </div>
          </div>

          <div className="card-hover bg-red-100 rounded-xl overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-red-400 to-pink-500 relative">
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                UI/UX DESIGN
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="w-12 h-12 bg-white rounded-lg"></div>
                  <div className="w-12 h-12 bg-yellow-300 rounded-lg"></div>
                  <div className="w-12 h-12 bg-green-300 rounded-lg"></div>
                  <div className="w-12 h-12 bg-blue-300 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Asri Living</h3>
            </div>
          </div>

          <div className="card-hover bg-green-100 rounded-xl overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative">
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                UI/UX DESIGN
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-white text-xs">Mobile App</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Forestle</h3>
            </div>
          </div>

          <div className="card-hover bg-yellow-100 rounded-xl overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 relative">
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                UI/UX DESIGN
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-32 bg-gray-800 rounded-lg relative">
                  <div className="absolute inset-2 bg-yellow-400 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-2">Sales Force App</h3>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
            See all of Our Works
          </button>
        </div>
      </div>
    </section>
  );
}

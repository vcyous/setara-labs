export default function ProcessSection() {
  return (
    <section className="py-20 hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit lorem, sed
            diam ut magna tempus ut aliquas sit est tellus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
              01
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit lorem, sed
              diam ut magna tempus lorem auctor.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
              02
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit lorem, sed
              diam ut magna tempus lorem auctor.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
              03
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Build</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit lorem, sed
              diam ut magna tempus lorem auctor.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
              04
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Launch</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit lorem, sed
              diam ut magna tempus lorem auctor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

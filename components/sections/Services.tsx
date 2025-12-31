const services = [
  {
    title: "Digital Transformation",
    desc: "Modernizing systems and workflows to improve efficiency and scalability."
  },
  {
    title: "Web & App Development",
    desc: "Building responsive, high-performance applications using modern stacks."
  },
  {
    title: "AI & Data Solutions",
    desc: "Leveraging data and AI to unlock insights and smarter decision-making."
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold">
            What We Do
          </h2>
          <p className="mt-4 text-gray-600">
            Our services are designed to deliver real impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border hover:shadow-md transition"
            >
              <h3 className="text-xl font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

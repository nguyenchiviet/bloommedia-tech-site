export default function AboutPage({ params }: { params: { locale: string } }) {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">About Our Company</h1>
      
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl text-white">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-6">
          Founded in 2010, our company has grown from a small startup to a global leader in innovative solutions.
          We've been dedicated to excellence and cutting-edge technology from day one.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to provide exceptional products and services that improve the lives of our customers
          while maintaining the highest standards of quality and sustainability.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Innovation: We continuously seek new and better ways to serve our customers</li>
          <li>Integrity: We are honest, transparent, and ethical in all our dealings</li>
          <li>Excellence: We strive for the highest quality in everything we do</li>
          <li>Sustainability: We are committed to environmentally responsible practices</li>
          <li>Inclusivity: We value diversity and create an inclusive environment for all</li>
        </ul>
      </div>
    </div>
  );
}

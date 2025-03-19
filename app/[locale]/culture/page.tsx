export default function CulturePage({ params }: { params: { locale: string } }) {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Culture</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl text-white mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <p className="mb-6">
            Our culture is built on a foundation of shared values that guide everything we do.
            These principles help us create an environment where innovation thrives and people can do their best work.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 border border-white/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>We encourage creative thinking and bold ideas that challenge the status quo.</p>
            </div>
            <div className="p-4 border border-white/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p>We believe the best results come from diverse teams working together.</p>
            </div>
            <div className="p-4 border border-white/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p>We're committed to honesty, transparency, and doing what's right.</p>
            </div>
            <div className="p-4 border border-white/20 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p>We strive for exceptional quality in everything we do.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl text-white mb-12">
          <h2 className="text-2xl font-semibold mb-4">Life at Our Company</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Team Building</h3>
              <p className="mb-4">
                We regularly organize team-building activities and events to strengthen relationships 
                and create a sense of belonging among our team members.
              </p>
              <div className="h-64 bg-purple-800/30 rounded-lg flex items-center justify-center">
                <span className="text-white/50">Team Building Image</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Learning & Development</h3>
              <p className="mb-4">
                We invest in our people through continuous learning opportunities, 
                professional development programs, and mentorship.
              </p>
              <div className="h-64 bg-purple-800/30 rounded-lg flex items-center justify-center">
                <span className="text-white/50">Learning & Development Image</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Work-Life Balance</h3>
              <p className="mb-4">
                We understand the importance of maintaining a healthy balance between work and personal life, 
                and offer flexible work arrangements to support our team's wellbeing.
              </p>
              <div className="h-64 bg-purple-800/30 rounded-lg flex items-center justify-center">
                <span className="text-white/50">Work-Life Balance Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

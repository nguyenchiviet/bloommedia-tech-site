'use client';

import { GlassmorphicCard } from '@/components/GlassmorphicCard';

export default function CulturePage() {
  return (
    <>
      <div className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-0"></div>
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Company Culture
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Our culture is the foundation of everything we do. It shapes how we work, how we interact with each other, and how we serve our customers.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <GlassmorphicCard className="p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
            <p className="mb-6">
              Our core values guide our actions and decisions. They define who we are as a company and what we stand for.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Innovation</h3>
                <p>We embrace change and constantly seek new and better ways to serve our customers.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Integrity</h3>
                <p>We conduct our business with honesty, transparency, and ethical behavior.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Collaboration</h3>
                <p>We believe in the power of teamwork and partnership to achieve our goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Excellence</h3>
                <p>We strive for excellence in everything we do, from product development to customer service.</p>
              </div>
            </div>
          </GlassmorphicCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <GlassmorphicCard className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Work Environment</h2>
              <p className="mb-4">
                We believe that a positive work environment is essential for creativity, productivity, and job satisfaction. That's why we've created a workspace that is:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Collaborative and open</li>
                <li>Flexible and accommodating</li>
                <li>Supportive and inclusive</li>
                <li>Fun and engaging</li>
              </ul>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Professional Development</h2>
              <p className="mb-4">
                We are committed to the professional growth and development of our employees. We offer:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Continuous learning opportunities</li>
                <li>Mentorship programs</li>
                <li>Career advancement paths</li>
                <li>Regular feedback and performance reviews</li>
              </ul>
            </GlassmorphicCard>
          </div>
          
          <GlassmorphicCard className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Community Involvement</h2>
            <p className="mb-4">
              We believe in giving back to the communities where we live and work. We are involved in various community initiatives, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Volunteer programs</li>
              <li>Charitable donations</li>
              <li>Environmental sustainability efforts</li>
              <li>Educational partnerships</li>
            </ul>
            <p className="mt-4">
              We encourage our employees to participate in these initiatives and support causes that are important to them.
            </p>
          </GlassmorphicCard>
        </div>
      </div>
    </>
  );
}

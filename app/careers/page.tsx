'use client';

import { GlassmorphicCard } from '@/components/GlassmorphicCard';
import { Button } from '@/components/ui/button';

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Ho Chi Minh City, Vietnam",
      type: "Full-time"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Ho Chi Minh City, Vietnam",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Hanoi, Vietnam",
      type: "Full-time"
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Ho Chi Minh City, Vietnam",
      type: "Full-time"
    },
    {
      title: "Customer Support Representative",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Careers</h1>
        
        <GlassmorphicCard className="p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="mb-4">
            We're always looking for talented individuals to join our team. We offer a dynamic work environment, competitive compensation, and opportunities for professional growth and development.
          </p>
          <p>
            At our company, we value diversity, creativity, and innovation. We believe that our success is driven by the passion and dedication of our employees.
          </p>
        </GlassmorphicCard>
        
        <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
        
        <div className="space-y-6 mb-12">
          {jobOpenings.map((job, index) => (
            <GlassmorphicCard key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="text-sm text-white/70 mb-4 md:mb-0">
                    <p>{job.department} • {job.location} • {job.type}</p>
                  </div>
                </div>
                <Button variant="glass">Apply Now</Button>
              </div>
            </GlassmorphicCard>
          ))}
        </div>
        
        <GlassmorphicCard className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Health & Wellness</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Comprehensive health insurance</li>
                <li>Dental and vision coverage</li>
                <li>Wellness programs</li>
                <li>Gym membership</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Work-Life Balance</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Flexible working hours</li>
                <li>Remote work options</li>
                <li>Paid time off</li>
                <li>Parental leave</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Professional Development</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Learning and development budget</li>
                <li>Conference attendance</li>
                <li>Mentorship programs</li>
                <li>Career advancement opportunities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Company Culture</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Team building activities</li>
                <li>Company retreats</li>
                <li>Recognition programs</li>
                <li>Inclusive and diverse workplace</li>
              </ul>
            </div>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  );
}

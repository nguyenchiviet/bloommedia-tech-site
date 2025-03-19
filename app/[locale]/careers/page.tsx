export default function CareersPage({ params }: { params: { locale: string } }) {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote/Hybrid",
      description: "Seeking an experienced software engineer to lead development of our core platform."
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY",
      description: "Join our creative team to craft beautiful and intuitive user experiences."
    },
    {
      id: 3,
      title: "Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA",
      description: "Drive our marketing strategy and help us reach new audiences."
    },
    {
      id: 4,
      title: "Customer Success Specialist",
      department: "Customer Support",
      location: "London, UK",
      description: "Help our customers get the most out of our products and services."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Join Our Team</h1>
      
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl text-white mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
        <p className="mb-6">
          We're building a team of passionate individuals who want to make a difference.
          Our culture promotes innovation, collaboration, and personal growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 border border-white/20 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Competitive Benefits</h3>
            <p>Comprehensive healthcare, flexible time off, retirement plans</p>
          </div>
          <div className="p-4 border border-white/20 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
            <p>Learning stipends, mentorship programs, career advancement</p>
          </div>
          <div className="p-4 border border-white/20 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Work-Life Balance</h3>
            <p>Flexible hours, remote options, wellness programs</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Open Positions</h2>
      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white">{job.title}</h3>
            <div className="flex flex-wrap gap-4 mt-2 mb-4">
              <span className="px-3 py-1 bg-purple-800/50 rounded-full text-sm text-white">{job.department}</span>
              <span className="px-3 py-1 bg-purple-800/50 rounded-full text-sm text-white">{job.location}</span>
            </div>
            <p className="text-white/80 mb-4">{job.description}</p>
            <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

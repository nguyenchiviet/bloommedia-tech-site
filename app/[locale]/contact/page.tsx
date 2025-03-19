'use client';

import { useState } from 'react';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl text-white">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          {isSubmitted ? (
            <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-lg mb-6">
              <p className="text-white font-medium">Thank you for your message! We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-white">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Support">Product Support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Careers">Careers</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-white">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 ${isSubmitting ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'} text-white rounded-lg transition-colors flex items-center justify-center`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl text-white">
          <h2 className="text-2xl font-semibold mb-6">Our Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>123 Business Avenue</p>
              <p>Tech District</p>
              <p>San Francisco, CA 94105</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p>Email: info@company.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
            
            <div className="pt-4">
              <div className="h-64 bg-purple-800/30 rounded-lg flex items-center justify-center">
                <span className="text-white/50">Map will be displayed here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

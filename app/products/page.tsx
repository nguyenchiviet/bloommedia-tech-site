'use client';

import { GlassmorphicCard } from '@/components/GlassmorphicCard';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        
        <div className="mb-12">
          <GlassmorphicCard className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Product Overview</h2>
            <p className="mb-4">
              We offer a comprehensive suite of products designed to meet the diverse needs of businesses across various industries. Our solutions are built with cutting-edge technology and are designed to be scalable, secure, and user-friendly.
            </p>
            <p>
              Whether you're looking for enterprise software, cloud solutions, or custom applications, we have the expertise and experience to deliver products that exceed your expectations.
            </p>
          </GlassmorphicCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassmorphicCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Enterprise Solutions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Enterprise Resource Planning (ERP)</li>
              <li>Customer Relationship Management (CRM)</li>
              <li>Business Intelligence (BI)</li>
              <li>Supply Chain Management</li>
            </ul>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cloud Infrastructure</li>
              <li>Software as a Service (SaaS)</li>
              <li>Platform as a Service (PaaS)</li>
              <li>Cloud Security Solutions</li>
            </ul>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Mobile Applications</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>iOS and Android Development</li>
              <li>Cross-Platform Solutions</li>
              <li>Mobile Enterprise Applications</li>
              <li>Mobile Commerce Solutions</li>
            </ul>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="p-8">
            <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Custom Software Development</li>
              <li>Legacy System Integration</li>
              <li>API Development and Integration</li>
              <li>Workflow Automation</li>
            </ul>
          </GlassmorphicCard>
        </div>
      </div>
    </div>
  );
}

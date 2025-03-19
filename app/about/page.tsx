'use client';

import { GlassmorphicCard } from '@/components/GlassmorphicCard';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  // In App Router, locale is passed as a parameter to the page component
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        
        <GlassmorphicCard className="p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2010, our company has grown from a small startup to a leading provider of innovative solutions for businesses across various industries.
          </p>
          <p>
            Our mission is to empower businesses with cutting-edge technology and exceptional service, helping them thrive in today's competitive market.
          </p>
        </GlassmorphicCard>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <GlassmorphicCard className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>
              To be the global leader in providing innovative solutions that transform businesses and improve lives.
            </p>
          </GlassmorphicCard>
          
          <GlassmorphicCard className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              To deliver exceptional products and services that exceed customer expectations and drive business growth.
            </p>
          </GlassmorphicCard>
        </div>
        
        <GlassmorphicCard className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Innovation: We constantly seek new and better ways to serve our customers.</li>
            <li>Integrity: We conduct our business with honesty and transparency.</li>
            <li>Excellence: We strive for excellence in everything we do.</li>
            <li>Collaboration: We believe in the power of teamwork and partnership.</li>
            <li>Customer Focus: Our customers are at the center of everything we do.</li>
          </ul>
        </GlassmorphicCard>
      </div>
    </div>
  );
}

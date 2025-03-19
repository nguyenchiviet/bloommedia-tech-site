'use client';

import { GlassmorphicCard } from '@/components/GlassmorphicCard';
import Image from 'next/image';

export default function ProductsPage({ params }: { params: { locale: string } }) {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product Alpha",
      description: "Our flagship product with cutting-edge features and unmatched performance.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      name: "Product Beta",
      description: "Designed for professionals who demand reliability and efficiency.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      name: "Product Gamma",
      description: "The perfect entry-level solution with great value for price.",
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 4,
      name: "Product Delta",
      description: "Our premium offering with exclusive features and priority support.",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
            <div className="relative h-48 w-full">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-white/80">{product.description}</p>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors w-full">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

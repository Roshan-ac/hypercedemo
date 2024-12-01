import React from 'react';
import { ServiceItem, SERVICES } from './_constants/services';



const ServiceCard: React.FC<ServiceItem> = ({ 
  icon: Icon, 
  title, 
  description 
}) => (
  <div className="flex space-x-6 items-start p-4 transition-all duration-300 hover:bg-gray-50 rounded-lg group">
    <Icon 
      className="w-11 h-11 text-zinc-500 group-hover:text-primary-600 transition-colors" 
      strokeWidth={1.5} 
    />
    <div>
      <h2 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
        {title}
      </h2>
      <p className="text-zinc-600 text-sm mt-3 group-hover:text-gray-800">
        {description}
      </p>
    </div>
  </div>
);

export const OurServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center md:text-left">
          Our Services
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
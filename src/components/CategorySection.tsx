
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { Button } from '@/components/ui/button';

// Define images for category cards
const categoryImages = {
  "Sports": "https://img.autocarindia.com/ExtraImages/20190422050946_Honda-CBR-650R.jpg?w=700&c=1",
  "Naked": "https://khivrajtriumph.com/wp-content/uploads/2023/10/raw.jpg",
  "Adventure": "https://www.motoroids.com/wp-content/uploads/2018/11/P90328571_highRes_bmw-r-1250-gs-advent-1200x800.jpg",
  "Cruiser": "https://www.bossrides.in/wp-content/uploads/2023/05/harley-davidson-street-750-10th-anniversary-edition-1-min.jpg",
  "Classic": "https://images.unsplash.com/photo-1643321610692-111c2f9ce702?ixlib=rb-4.0.3",
  "Sport Touring": "https://images.unsplash.com/photo-1698765319505-5782763c1f89?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF5YWJ1c2F8ZW58MHx8MHx8fDA%3D",
  "Cafe Racer": "https://images.unsplash.com/photo-1690959129531-fb446280fc77?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGluZW50YWwlMjBndCUyMDY1MHxlbnwwfHwwfHx8MA%3D%3D",
  "Hypersport": "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3"
};

const CategorySection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-racing mb-8 text-center">Explore Categories</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.slice(0, 8).map((category) => (
          <Link 
            key={category} 
            to={`/products?category=${category}`}
            className="group relative overflow-hidden rounded-lg h-48 shadow-md"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: `url('${categoryImages[category as keyof typeof categoryImages] || 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3'}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-racing text-white mb-2">{category}</h3>
              <span className="inline-block text-sm text-white/80 group-hover:text-white transition-colors">
                Explore &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button asChild>
          <Link to="/categories">View All Categories</Link>
        </Button>
      </div>
    </section>
  );
};

export default CategorySection;

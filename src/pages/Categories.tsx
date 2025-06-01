
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { categories } from '@/data/products';

// Define images for category cards
const categoryImages = {
  "Sports": "https://img.autocarindia.com/ExtraImages/20190422050946_Honda-CBR-650R.jpg?w=700&c=1",
  "Naked": "https://khivrajtriumph.com/wp-content/uploads/2023/10/raw.jpg",
  "Adventure": "https://www.motoroids.com/wp-content/uploads/2018/11/P90328571_highRes_bmw-r-1250-gs-advent-1200x800.jpg",
  "Cruiser": "https://www.bossrides.in/wp-content/uploads/2023/05/harley-davidson-street-750-10th-anniversary-edition-1-min.jpg",
  "Classic": "https://www.goodwood.com/globalassets/.road--racing/reviews/norton/commander-961-cafe-racer/norton-commander-2024-review-19.jpg?rxy=0.5,0.5",
  "Sport Touring": "https://images.unsplash.com/photo-1698765319505-5782763c1f89?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF5YWJ1c2F8ZW58MHx8MHx8fDA%3D",
  "Cafe Racer": "https://images.unsplash.com/photo-1690959129531-fb446280fc77?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGluZW50YWwlMjBndCUyMDY1MHxlbnwwfHwwfHx8MA%3D%3D",
  "Hypersport": "https://images.unsplash.com/photo-1580310614729-ccd69652491d?ixlib=rb-4.0.3",
  "Modern Classic": "https://www.tvsmotor.com/-/media/28DECBlogs/stylish-bikes-under-2-lakh1.jpg",
  "Power Cruiser": "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202103/MY21_Rocket3RBlack_HF1_resize_-x900.jpg?h6GTHowNiePmLGr82eUolQixFJ80rKxl?size=750:*",
  "Bobber": "https://d12d6l12s3d372.cloudfront.net/2024_Jawa_Perak_Socials_6f821f9232.jpg",
};

const categoryDescriptions = {
  "Sports": "Aerodynamic full fairings, aggressive riding position, and high-performance engines for maximum speed and cornering.",
  "Naked": "Stripped-down sportbikes without fairings, offering an upright riding position and raw aesthetics.",
  "Adventure": "Versatile machines designed for on and off-road riding with long travel suspension and upright ergonomics.",
  "Cruiser": "Laid-back riding position, low seat height, and torquey engines for comfortable highway cruising.",
  "Classic": "Timeless styling reminiscent of motorcycles from the past, with modern technology.",
  "Sport Touring": "Combines sportbike performance with touring comfort for long-distance riding at speed.",
  "Cafe Racer": "Minimalist, lightweight bikes with clip-on handlebars inspired by 1960s racing motorcycles.",
  "Hypersport": "Ultimate performance motorcycles with cutting-edge technology derived from racing.",
  "Modern Classic": "Contemporary bikes with retro styling but modern features and reliability.",
  "Power Cruiser": "Cruisers with high-performance engines offering more power than traditional cruiser models.",
  "Bobber": "Custom-style motorcycles with shortened or 'bobbed' fenders and minimalist design.",
};

const Categories = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-racing mb-8">Motorcycle Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category} 
              to={`/products?category=${category}`}
              className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-border hover:border-primary"
            >
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url('${categoryImages[category as keyof typeof categoryImages] || 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3'}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-racing text-white">{category}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-muted-foreground">
                  {categoryDescriptions[category as keyof typeof categoryDescriptions] || 
                    "High-performance motorcycles designed for optimum speed, handling, and rider experience."}
                </p>
                <p className="mt-4 text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  View Motorcycles <span className="ml-1">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;

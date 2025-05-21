
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/UI/SectionHeading';
import MenuItemCard from '@/components/UI/MenuItemCard';
import EventCard from '@/components/UI/EventCard';
import TestimonialCard from '@/components/UI/TestimonialCard';
import CTA from '@/components/UI/CTA';

const Homepage = () => {
  const featuredMenuItems = [
    {
      name: 'Alaskan Reindeer Dog',
      description: 'Our signature wild game dog topped with caramelized onions and cream cheese.',
      price: '$9.95',
      image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=3270',
      featured: true
    },
    {
      name: 'Rattlesnake & Pheasant',
      description: 'Exotic blend of rattlesnake and pheasant with green chilies, topped with harissa roasted cactus.',
      price: '$11.95',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      featured: true
    }
  ];
  
  const upcomingEvents = [
    {
      title: "Cherry Creek Farmers Market",
      date: new Date(2023, 5, 15),
      location: "1st Ave & University Blvd, Denver, CO",
      description: "Join us for fresh, gourmet hot dogs at this fantastic farmers market.",
      imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      title: "Food Truck Friday",
      date: new Date(2023, 5, 17),
      location: "Civic Center Park, Denver, CO",
      description: "Weekly food truck gathering with live music and local brews.",
      imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=3270')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
          }}
        />
        <div className="relative container-custom text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-display mb-4 drop-shadow-lg animate-fade-in">
            BIKER JIM'S <span className="text-bikerRed">DOGS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Rebellious gourmet wild game hot dogs crafted with attitude.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/menu" className="button-primary">
              Explore Our Menu
            </Link>
            <Link to="/catering" className="bg-white text-bikerDark hover:bg-bikerCream font-display tracking-wide py-3 px-6 rounded-md uppercase text-lg transition-all duration-200">
              Book Catering
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Biker Jim" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <SectionHeading 
                title="NOT YOUR AVERAGE DOG" 
                subtitle="From motorcycle dealer to hot dog legend, Biker Jim's journey is as unique as his menu." 
              />
              <p className="mb-6 text-bikerGray">
                What started as a small hot dog cart in downtown Denver has grown into
                a culinary phenomenon featured on Anthony Bourdain's No Reservations, 
                Food Network, and more. Our mission? To serve the most badass gourmet 
                hot dogs you'll ever taste.
              </p>
              <p className="mb-6 text-bikerGray">
                Using wild game meats like reindeer, elk, and rattlesnake, we've created
                a menu that's bold, adventurous, and unforgettable - just like our founder.
              </p>
              <Link to="/our-story" className="button-primary">
                Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="MENU HIGHLIGHTS" 
            subtitle="Wild game dogs crafted with attitude and topped with chef-inspired ingredients."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {featuredMenuItems.map((item, index) => (
              <MenuItemCard 
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                featured={item.featured}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/menu" className="button-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
      
      {/* Catering Section */}
      <section className="py-16 md:py-24 bg-bikerDark text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="CATERING WITH ATTITUDE" 
                subtitle="Elevate your event with our custom catering services." 
                light
              />
              <p className="mb-6 text-gray-300">
                Whether you're planning a corporate event, wedding, or backyard party,
                our gourmet hot dogs will make it unforgettable. We offer flexible
                packages tailored to your needs and budget.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Custom menu options</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Professional staff</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Complete setup and service</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Flexible pricing packages</span>
                </li>
              </ul>
              <Link to="/catering" className="button-primary">
                Book Catering
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Biker Jim's Catering" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Find Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="WHERE TO FIND US" 
            subtitle="Catch us at these upcoming events and locations."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/find-us" className="button-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="WHAT PEOPLE ARE SAYING" 
            subtitle="Don't just take our word for it."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Biker Jim's catered our company event, and it was a massive hit! The reindeer dogs were the talk of the office for weeks."
              author="Sarah Johnson"
              role="Event Coordinator, Tech Inc."
            />
            <TestimonialCard 
              quote="I've never had a hot dog this good. The rattlesnake & pheasant dog changed my life. Seriously."
              author="Mike Rodriguez"
              role="Food Blogger"
            />
            <TestimonialCard 
              quote="Their catering service was professional, on-time, and absolutely delicious. Will definitely book again!"
              author="Jennifer Smith"
              role="Wedding Planner"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA 
        buttonText="Book Catering Now"
        buttonLink="/catering"
      />
    </>
  );
};

export default Homepage;

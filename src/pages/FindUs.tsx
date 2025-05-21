
import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import SectionHeading from '@/components/UI/SectionHeading';
import EventCard, { EventProps } from '@/components/UI/EventCard';
import CTA from '@/components/UI/CTA';

const FindUs = () => {
  // Sample data for events
  const allEvents: EventProps[] = [
    {
      title: "Cherry Creek Farmers Market",
      date: new Date(2023, 5, 15),
      location: "1st Ave & University Blvd, Denver, CO",
      description: "Join us for fresh, gourmet hot dogs at this fantastic farmers market.",
      imageUrl: "/images/pearlstreetcrowd.jpg"
    },
    {
      title: "Food Truck Friday",
      date: new Date(2023, 5, 17),
      location: "Civic Center Park, Denver, CO",
      description: "Weekly food truck gathering with live music and local brews.",
      imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
      title: "Taste of Colorado",
      date: new Date(2023, 8, 2),
      location: "Civic Center Park, Denver, CO",
      description: "Annual food festival featuring Colorado's best culinary offerings.",
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      title: "Union Station Market",
      date: new Date(2023, 5, 24),
      location: "Denver Union Station, 1701 Wynkoop St",
      description: "Weekly artisan market at Denver's historic Union Station.",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      title: "Denver Beer Festival",
      date: new Date(2023, 9, 8),
      location: "RiNo Art District, Denver, CO",
      description: "Celebrate craft beer with perfect hot dog pairings.",
      imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      title: "South Pearl Street Farmers Market",
      date: new Date(2023, 5, 25),
      location: "1400 & 1500 blocks of South Pearl Street",
      description: "One of Denver's oldest farmers markets with over 100 vendors.",
      imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    }
  ];
  
  const locations = [
    {
      name: "Colorado Convention Center",
      address: "Denver, CO 80205",
      phone: "(720) 746-9355", 
      hours: "Mon-Thu 11am-10pm, Fri-Sat 11am-2am, Sun 11am-9pm",
      mapUrl: "https://maps.app.goo.gl/nygAKtdxhj6hQrGP7"
    },
    {
      name: "South Pearl Street",
      address: "1527 S Pearl St, Denver, CO 80210",
      phone: "(720) 865-2695",
      hours: "9am - 1pm",
      mapUrl: "https://maps.google.com/?q=2001+Blake+St,+Denver,+CO+80205"
    }
  ];
  
  // State for filtering events
  const [timeFilter, setTimeFilter] = useState<'all' | 'upcoming'>('upcoming');
  
  // Get current date for filtering
  const currentDate = new Date();
  
  // Filter events based on selected filter
  const filteredEvents = allEvents.filter((event) => {
    if (timeFilter === 'upcoming') {
      return event.date >= currentDate;
    }
    return true;
  });
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bikerDark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display mb-6">FIND US</h1>
            <p className="text-xl text-gray-300">
              Track down our legendary wild game dogs at farmers markets, events, and our brick-and-mortar locations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="PERMANENT LOCATIONS" 
            subtitle="Visit our brick-and-mortar spots for the full Biker Jim's experience."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="food-card p-6">
                <h3 className="text-2xl font-display mb-3">{location.name}</h3>
                <div className="flex items-start text-bikerGray mb-2">
                  <MapPin size={18} className="mr-2 mt-1 text-bikerRed flex-shrink-0" />
                  <div>
                    <p>{location.address}</p>
                    <a 
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bikerRed hover:underline inline-block mt-1"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                <p className="text-bikerGray mb-1"><span className="font-semibold">Phone:</span> {location.phone}</p>
                <p className="text-bikerGray"><span className="font-semibold">Hours:</span> {location.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <SectionHeading 
              title="EVENTS & MARKETS" 
              subtitle="Catch our mobile operations at these locations."
            />
            
            <div className="mt-4 md:mt-0">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setTimeFilter('upcoming')}
                  className={`px-4 py-2 text-sm font-medium ${
                    timeFilter === 'upcoming'
                      ? 'bg-bikerRed text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } border border-gray-300 rounded-l-lg focus:outline-none`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setTimeFilter('all')}
                  className={`px-4 py-2 text-sm font-medium ${
                    timeFilter === 'all'
                      ? 'bg-bikerRed text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } border border-gray-300 border-l-0 rounded-r-lg focus:outline-none`}
                >
                  All Events
                </button>
              </div>
            </div>
          </div>
          
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
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
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <Calendar size={48} className="text-bikerRed mx-auto mb-4" />
              <h3 className="text-2xl font-display mb-2">No Events Scheduled</h3>
              <p className="text-bikerGray">
                We don't have any events scheduled at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Market */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-bikerDark text-white rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-display mb-4">UNION STATION FARMERS MARKET</h2>
                <div className="flex items-center text-gray-300 mb-4">
                  <Calendar size={18} className="mr-2 text-bikerRed" />
                  <span>Every Saturday, May - October | 9am - 2pm</span>
                </div>
                <div className="flex items-start text-gray-300 mb-6">
                  <MapPin size={18} className="mr-2 mt-1 text-bikerRed flex-shrink-0" />
                  <span>Denver Union Station, 1701 Wynkoop St, Denver, CO 80202</span>
                </div>
                <p className="mb-6 text-gray-300">
                  We're proud to be a featured vendor at Denver's premier farmers market. 
                  Stop by our stand for exclusive market specials and seasonal offerings 
                  you won't find anywhere else.
                </p>
                <a 
                  href="https://maps.google.com/?q=Denver+Union+Station" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-primary"
                >
                  Get Directions
                </a>
              </div>
              <div 
                className="h-64 md:h-auto bg-center bg-cover"
                style={{ backgroundImage: "url('/images/unionstation.jpg')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="VISIT OUR FLAGSHIP LOCATION" 
            subtitle="Come experience Biker Jim's in the heart of Denver."
            centered
          />
          
          <div className="mt-8 aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.816512182769!2d-104.99290678255616!3d39.75386770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d0a2c62e9f%3A0x673f47902fc89e8c!2sBiker%20Jim&#39;s%20Gourmet%20Dogs!5e0!3m2!1sen!2sus!4v1652800723970!5m2!1sen!2sus" 
              width="600" 
              height="450" 
              style={{ border: 0, width: '100%', height: '450px' }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Biker Jim's Gourmet Dogs Location"
            ></iframe>
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

export default FindUs;

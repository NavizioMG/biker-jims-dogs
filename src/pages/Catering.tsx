
import SectionHeading from '@/components/UI/SectionHeading';
import CateringForm from '@/components/UI/CateringForm';

const Catering = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bikerDark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display mb-6">CATERING</h1>
            <p className="text-xl text-gray-300">
              Bring the bold flavors of Biker Jim's to your next event, corporate function, or celebration.
            </p>
          </div>
        </div>
      </section>
      
      {/* Catering Intro */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="NOT YOUR AVERAGE CATERING" 
                subtitle="Unforgettable food experiences for events of all sizes."
              />
              <p className="mb-6 text-bikerGray">
                Whether you're planning a corporate event, wedding reception, birthday party, or festival,
                Biker Jim's catering brings the same bold flavors and rebellious spirit that made us famous
                to your special occasion.
              </p>
              <p className="text-bikerGray">
                Our custom catering packages can be tailored to meet your specific needs, budget,
                and dietary requirements, ensuring an unforgettable culinary experience for your guests.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1721710363291-c5181c534f4d" 
                alt="Biker Jim's Catering Setup" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="OUR CATERING SERVICES" 
            subtitle="Flexible options to meet your event needs."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-bikerRed inline-flex w-16 h-16 rounded-full items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display mb-3">PRIVATE EVENTS</h3>
              <p className="text-bikerGray mb-4">
                Birthday parties, weddings, corporate gatherings, and more. We'll work with you to create the perfect menu.
              </p>
              <ul className="text-left text-bikerGray space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Custom menu planning</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Full service staffing</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Setup and cleanup</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-bikerRed inline-flex w-16 h-16 rounded-full items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-display mb-3">CORPORATE CATERING</h3>
              <p className="text-bikerGray mb-4">
                Elevate your office lunch, team building event, or client meeting with our gourmet offerings.
              </p>
              <ul className="text-left text-bikerGray space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Boxed lunches</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Buffet-style service</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Recurring order options</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-bikerRed inline-flex w-16 h-16 rounded-full items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-2xl font-display mb-3">FESTIVALS & EVENTS</h3>
              <p className="text-bikerGray mb-4">
                High-volume service for public events, festivals, concerts, and large gatherings.
              </p>
              <ul className="text-left text-bikerGray space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Mobile food cart/truck</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>High-volume capabilities</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-bikerRed mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Custom branded options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="CATERING PACKAGES" 
            subtitle="Flexible options to fit your budget and event needs."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-100 p-6">
                <h3 className="text-2xl font-display text-center">STANDARD</h3>
                <div className="text-center my-4">
                  <span className="text-4xl font-display">$18</span>
                  <span className="text-bikerGray">/person</span>
                </div>
                <p className="text-center text-bikerGray">Perfect for casual events</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Choice of 2 hot dog varieties</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Classic toppings selection</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Chips and soft drinks</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Basic setup and service</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Premium sides</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a href="#catering-form" className="button-primary w-full block text-center">Get Quote</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-bikerRed transform scale-105">
              <div className="bg-bikerRed p-6 text-white">
                <h3 className="text-2xl font-display text-center">PREMIUM</h3>
                <div className="text-center my-4">
                  <span className="text-4xl font-display">$28</span>
                  <span className="text-white/80">/person</span>
                </div>
                <p className="text-center text-white/80">Our most popular package</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Choice of 4 hot dog varieties</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>All toppings and signature sauces</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Choice of 2 premium sides</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Soft drinks and dessert option</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Full service staff and setup</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a href="#catering-form" className="button-primary w-full block text-center">Get Quote</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-100 p-6">
                <h3 className="text-2xl font-display text-center">DELUXE</h3>
                <div className="text-center my-4">
                  <span className="text-4xl font-display">$38</span>
                  <span className="text-bikerGray">/person</span>
                </div>
                <p className="text-center text-bikerGray">The ultimate experience</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>All hot dog varieties</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>All toppings and premium add-ons</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>All sides and desserts</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Open bar option available</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-bikerRed mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Chef's table and custom experience</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a href="#catering-form" className="button-primary w-full block text-center">Get Quote</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-bikerGray mb-4">
              Not finding what you're looking for? We offer custom packages tailored to your needs.
            </p>
            <a href="#catering-form" className="button-primary">Request Custom Quote</a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="WHAT CLIENTS SAY" 
            subtitle="Don't take our word for it."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg className="text-bikerRed h-8 w-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">
                "Biker Jim's catered our wedding, and it was the highlight of the evening. Our guests are still talking about those amazing elk jalapeno cheddar dogs and the wild boar. Completely different from typical wedding food, and absolutely perfect for us."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Client" className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-semibold text-bikerDark">Amanda & Chris Martinez</p>
                  <p className="text-gray-500 text-sm">Wedding, June 2023</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg className="text-bikerRed h-8 w-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic text-lg">
                "We've had Biker Jim's cater multiple corporate events, and they're always a crowd-pleaser. The staff is professional, the food is unique and delicious, and they make planning absolutely seamless. A true Denver gem!"
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" alt="Client" className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-semibold text-bikerDark">Mark Wilson</p>
                  <p className="text-gray-500 text-sm">Director of Events, TechCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="py-16" id="catering-form">
        <div className="container-custom">
          <SectionHeading 
            title="REQUEST A QUOTE" 
            subtitle="Tell us about your event, and we'll get back to you within 24 hours."
            centered
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <CateringForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Catering;

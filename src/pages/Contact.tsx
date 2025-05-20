
import SectionHeading from '@/components/UI/SectionHeading';
import ContactForm from '@/components/UI/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bikerDark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display mb-6">CONTACT US</h1>
            <p className="text-xl text-gray-300">
              Have questions? Need catering info? Just want to talk hot dogs? We're here for you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="GET IN TOUCH" />
              <p className="mb-8 text-bikerGray">
                Whether you have questions about our menu, want to book catering for your event, 
                or just want to tell us how much you enjoyed your last Alaskan Reindeer dog, we'd 
                love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-bikerRed mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-bikerGray">2148 Larimer St, Denver, CO 80205</p>
                    <a 
                      href="https://maps.google.com/?q=2148+Larimer+St,+Denver,+CO+80205" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bikerRed hover:underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-bikerRed mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-bikerGray">(720) 746-9355</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-bikerRed mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <a href="mailto:info@bikerjimsdogs.com" className="text-bikerRed hover:underline">
                      info@bikerjimsdogs.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-bikerRed mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hours</h3>
                    <ul className="text-bikerGray space-y-1">
                      <li><span className="font-medium">Monday - Thursday:</span> 11am - 10pm</li>
                      <li><span className="font-medium">Friday - Saturday:</span> 11am - 2am</li>
                      <li><span className="font-medium">Sunday:</span> 11am - 9pm</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-display mb-4">CONNECT WITH US</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-bikerDark hover:bg-bikerRed text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-bikerDark hover:bg-bikerRed text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-bikerDark hover:bg-bikerRed text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-display mb-6">SEND US A MESSAGE</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="FREQUENTLY ASKED QUESTIONS" 
            subtitle="Quick answers to common questions."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-display mb-2">What types of events do you cater?</h3>
              <p className="text-bikerGray">
                We cater all types of events, from private parties and weddings to corporate functions 
                and large festivals. Our team will work with you to create a custom package that fits your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-display mb-2">How far in advance should I book catering?</h3>
              <p className="text-bikerGray">
                We recommend booking at least 2-3 weeks in advance, but for large events or peak season dates, 
                it's best to reach out 1-2 months ahead to secure your preferred date.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-display mb-2">Do you offer vegetarian options?</h3>
              <p className="text-bikerGray">
                Yes! We offer delicious vegetarian hot dogs that can be customized with all of our unique 
                toppings and sauces. Just let us know your dietary preferences when booking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-display mb-2">Where are your hot dogs sourced from?</h3>
              <p className="text-bikerGray">
                Our wild game meats are sourced from responsible suppliers who follow ethical and sustainable practices. 
                We're proud to partner with local ranchers when possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-display mb-2">Can I make a reservation at your restaurant?</h3>
              <p className="text-bikerGray">
                Our brick-and-mortar location operates on a first-come, first-served basis. We don't take 
                reservations, but our service is quick, and tables typically turn over quickly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-display mb-2">Do you offer franchise opportunities?</h3>
              <p className="text-bikerGray">
                Currently, we're focused on our Denver operations and catering services. If you're interested 
                in potential future franchise opportunities, feel free to contact us for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="FIND US" 
            subtitle="Our flagship location in the heart of Denver."
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
    </>
  );
};

export default Contact;

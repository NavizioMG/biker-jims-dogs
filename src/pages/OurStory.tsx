
import SectionHeading from '@/components/UI/SectionHeading';
import CTA from '@/components/UI/CTA';

const OurStory = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bikerDark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display mb-6">OUR STORY</h1>
            <p className="text-xl text-gray-300">
              From ex-repo man to culinary rebel: The wild journey of Biker Jim and his legendary hot dogs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                alt="Biker Jim portrait" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <SectionHeading title="FROM REPO MAN TO HOT DOG LEGEND" />
              <p className="mb-4 text-bikerGray">
                Jim Pittenger, aka "Biker Jim," spent 28 years as an Alaskan repo man before 
                trading his tow truck for a hot dog cart in 2005. But these weren't going to be ordinary hot dogs.
              </p>
              <p className="text-bikerGray">
                Drawing on his wild Alaskan roots and rebellious spirit, Jim created a menu featuring game meats 
                like reindeer, elk, and rattlesnake - turning the humble hot dog into a gourmet experience 
                that caught the attention of chefs, food critics, and TV shows nationwide.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:grid-flow-dense">
            <div>
              <SectionHeading title="PUTTING DENVER ON THE CULINARY MAP" />
              <p className="mb-4 text-bikerGray">
                What started as a single cart on Denver's 16th Street Mall quickly grew into a cult phenomenon.
                The secret? Unique game meats, chef-inspired toppings, and Jim's larger-than-life personality.
              </p>
              <p className="text-bikerGray">
                Within years, Biker Jim's was featured on Anthony Bourdain's "No Reservations," Food Network's 
                "The Best Thing I Ever Ate," and countless other shows and publications - turning a local 
                favorite into a national sensation.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Biker Jim's food cart" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Biker Jim's restaurant" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <SectionHeading title="MORE THAN JUST A HOT DOG" />
              <p className="mb-4 text-bikerGray">
                Today, Biker Jim's has grown beyond the cart to include restaurants and an expansive catering operation.
                But the ethos remains the same: quality ingredients, bold flavors, and zero pretension.
              </p>
              <p className="text-bikerGray">
                Jim's approach to food is simple: take something familiar, make it extraordinary, 
                and serve it with a side of attitude. It's why locals and visitors alike make the 
                pilgrimage to taste what Food & Wine called "one of the 10 best hot dogs in America."
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-center text-2xl italic text-bikerGray mb-4">
              "I never set out to be a culinary icon. I just wanted to make a damn good hot dog that wasn't boring."
            </blockquote>
            <p className="text-center font-semibold">- Jim Pittenger, Founder</p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="OUR VALUES" 
            subtitle="What drives everything we do."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-bikerRed inline-flex w-16 h-16 rounded-full items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display mb-3">QUALITY COMES FIRST</h3>
              <p className="text-bikerGray">
                We source premium ingredients and wild game meats to create an experience that's far beyond the ordinary hot dog.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-bikerRed inline-flex w-16 h-16 rounded-full items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display mb-3">FEARLESS FLAVOR</h3>
              <p className="text-bikerGray">
                We're not afraid to push boundaries and create bold, unexpected flavor combinations that challenge what a hot dog can be.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-bikerRed inline-flex w-16 h-16 rounded-full items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-2xl font-display mb-3">NO PRETENSION</h3>
              <p className="text-bikerGray">
                We serve gourmet food without the stuffy attitude - great taste should be accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default OurStory;

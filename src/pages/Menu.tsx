
import SectionHeading from '@/components/UI/SectionHeading';
import MenuItemCard from '@/components/UI/MenuItemCard';
import CTA from '@/components/UI/CTA';

const Menu = () => {
  const signatureDogs = [
    {
      name: 'Alaskan Reindeer',
      description: 'Our signature wild game dog topped with caramelized onions and cream cheese.',
      price: '$9.95',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      featured: true
    },
    {
      name: 'Rattlesnake & Pheasant',
      description: 'Exotic blend of rattlesnake and pheasant with green chilies, topped with harissa roasted cactus.',
      price: '$11.95',
      featured: false
    },
    {
      name: 'Elk Jalapeno Cheddar',
      description: 'Elk sausage with jalapenos and cheddar cheese, topped with Coca-Cola caramelized onions.',
      price: '$10.95',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      featured: true
    },
    {
      name: 'Wild Boar',
      description: 'Savory wild boar sausage topped with pickled vegetables and harissa-roasted corn.',
      price: '$10.95',
      featured: false
    },
    {
      name: 'Southwest Buffalo',
      description: 'Lean buffalo sausage with southwestern spices, topped with blistered poblanos.',
      price: '$10.95',
      featured: false
    }
  ];
  
  const classicDogs = [
    {
      name: 'The Classic',
      description: 'All-beef dog with your choice of traditional toppings.',
      price: '$7.95',
      featured: false
    },
    {
      name: 'Bacon Wrapped',
      description: 'All-beef hot dog wrapped in bacon, topped with caramelized onions and mayo.',
      price: '$9.95',
      featured: false
    },
    {
      name: 'Veggie Dog',
      description: 'Plant-based dog with all the flavor, none of the meat.',
      price: '$8.95',
      featured: false
    }
  ];
  
  const sides = [
    {
      name: 'Charred Tahini Cauliflower',
      description: 'Roasted cauliflower with tahini sauce and herbs.',
      price: '$5.95',
      featured: false
    },
    {
      name: 'Biker Fries',
      description: 'Hand-cut fries with caramelized onions, bacon bits, and secret sauce.',
      price: '$6.95',
      featured: true
    },
    {
      name: 'Smoked Mac & Cheese',
      description: 'Creamy mac and cheese with smoked cheddar and crispy topping.',
      price: '$7.95',
      featured: false
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bikerDark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display mb-6">OUR MENU</h1>
            <p className="text-xl text-gray-300">
              Wild game dogs and chef-driven creations that redefine the humble hot dog.
            </p>
          </div>
        </div>
      </section>
      
      {/* Signature Dogs */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="SIGNATURE WILD GAME DOGS" 
            subtitle="Our specialty - exotic, wild game hot dogs with unique toppings."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {signatureDogs.map((item, index) => (
              <MenuItemCard 
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={index < 2 ? item.image : undefined}
                featured={item.featured}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Classic Dogs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="CLASSIC DOGS" 
            subtitle="Traditional favorites, prepared with Biker Jim's signature quality."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {classicDogs.map((item, index) => (
              <MenuItemCard 
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                featured={item.featured}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sides */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="SIDES & EXTRAS" 
            subtitle="The perfect companions to our legendary dogs."
            centered
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {sides.map((item, index) => (
              <MenuItemCard 
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                featured={item.featured}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Toppings */}
      <section className="py-16 bg-bikerDark text-white">
        <div className="container-custom">
          <SectionHeading 
            title="CUSTOM TOPPINGS" 
            subtitle="Make it your own with our selection of unique toppings."
            centered
            light
          />
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-bikerDark/50 p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-display mb-3 text-bikerRed">SIGNATURE SAUCES</h3>
              <ul className="space-y-2">
                <li>Harissa</li>
                <li>Sriracha Lime Mayo</li>
                <li>Blueberry BBQ</li>
                <li>Truffle Aioli</li>
                <li>Wasabi Mustard</li>
              </ul>
            </div>
            
            <div className="bg-bikerDark/50 p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-display mb-3 text-bikerRed">VEGETABLES</h3>
              <ul className="space-y-2">
                <li>Caramelized Onions</li>
                <li>Roasted Poblanos</li>
                <li>Pickled Vegetables</li>
                <li>Sauerkraut</li>
                <li>Fire-Roasted Corn</li>
              </ul>
            </div>
            
            <div className="bg-bikerDark/50 p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-display mb-3 text-bikerRed">CHEESES</h3>
              <ul className="space-y-2">
                <li>Cream Cheese</li>
                <li>Aged Cheddar</li>
                <li>Blue Cheese Crumbles</li>
                <li>Pepper Jack</li>
                <li>Queso Fresco</li>
              </ul>
            </div>
            
            <div className="bg-bikerDark/50 p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-display mb-3 text-bikerRed">PREMIUM ADD-ONS</h3>
              <ul className="space-y-2">
                <li>Crispy Bacon</li>
                <li>Fried Egg</li>
                <li>Avocado</li>
                <li>Crispy Onion Strings</li>
                <li>Jalapeño Chips</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Menu;

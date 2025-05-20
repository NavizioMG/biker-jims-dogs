
interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
}

const MenuItemCard = ({ name, description, price, image, featured = false }: MenuItemProps) => {
  return (
    <div className={`food-card overflow-hidden ${featured ? 'border-l-4 border-bikerRed' : ''}`}>
      <div className="flex flex-col md:flex-row">
        {image && (
          <div className="md:w-1/3">
            <img src={image} alt={name} className="w-full h-48 md:h-full object-cover" />
          </div>
        )}
        <div className={`p-5 ${image ? 'md:w-2/3' : 'w-full'}`}>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-display text-bikerDark">{name}</h3>
            <span className="text-xl font-display text-bikerRed">{price}</span>
          </div>
          <p className="text-bikerGray">{description}</p>
          {featured && (
            <div className="mt-3 inline-block bg-bikerRed/10 text-bikerRed px-2 py-1 text-sm font-semibold">
              Chef's Choice
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;

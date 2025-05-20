
import { CalendarDays, MapPin } from 'lucide-react';
import { format } from 'date-fns';

export interface EventProps {
  title: string;
  date: Date;
  location: string;
  description?: string;
  imageUrl?: string;
}

const EventCard = ({ title, date, location, description, imageUrl }: EventProps) => {
  return (
    <div className="food-card flex flex-col overflow-hidden h-full">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 flex-grow">
        <h3 className="text-2xl font-display mb-2">{title}</h3>
        <div className="flex items-center text-bikerGray mb-2">
          <CalendarDays size={18} className="mr-2 text-bikerRed" />
          <span>{format(date, 'EEEE, MMMM d, yyyy')}</span>
        </div>
        <div className="flex items-start text-bikerGray mb-3">
          <MapPin size={18} className="mr-2 mt-1 text-bikerRed flex-shrink-0" />
          <span>{location}</span>
        </div>
        {description && <p className="text-bikerGray">{description}</p>}
      </div>
    </div>
  );
};

export default EventCard;

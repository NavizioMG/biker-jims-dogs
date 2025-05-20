
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface CateringFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: string;
  venue: string;
  message: string;
}

const eventTypes = [
  'Private Party',
  'Wedding',
  'Corporate Event',
  'Festival',
  'Convention',
  'Other'
];

const CateringForm = () => {
  const [formData, setFormData] = useState<CateringFormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    venue: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Catering Request Sent",
        description: "We've received your request and will contact you shortly to discuss details.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        guestCount: '',
        venue: '',
        message: ''
      });
      
      setLoading(false);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bikerRed focus:border-transparent"
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bikerRed focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bikerRed focus:border-transparent"
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bikerRed focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bikerRed focus:border-transparent"
          >
            <option value="" disabled>Select Event Type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests
          </label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            required
            min="10"
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bikerRed focus:border-transparent"
            placeholder="Estimated Guest Count"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-1">
            Venue/Location
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bikerRed focus:border-transparent"
            placeholder="Event Location"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bikerRed focus:border-transparent"
            placeholder="Tell us more about your event..."
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="button-primary w-full flex justify-center items-center"
      >
        {loading ? 'Sending Request...' : 'Submit Catering Request'}
      </button>
    </form>
  );
};

export default CateringForm;


import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
  variant?: 'default' | 'inline';
}

const CTA = ({
  title = "Ready to Have Biker Jim's at Your Next Event?",
  subtitle = "Book our catering services for an unforgettable culinary experience.",
  buttonText = "Book Catering Now",
  buttonLink = "/catering",
  className,
  variant = 'default'
}: CTAProps) => {
  if (variant === 'inline') {
    return (
      <div className={cn("flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4", className)}>
        <div>
          <h3 className="text-2xl font-display">{title}</h3>
          {subtitle && <p className="mt-1 text-bikerGray">{subtitle}</p>}
        </div>
        <Link to={buttonLink} className="button-primary whitespace-nowrap">
          {buttonText}
        </Link>
      </div>
    );
  }
  
  return (
    <section className={cn("bg-bikerDark text-bikerCream py-16", className)}>
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-display mb-4">{title}</h2>
        {subtitle && <p className="text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        <Link to={buttonLink} className="button-primary text-xl px-8 py-4">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTA;

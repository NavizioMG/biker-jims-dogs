
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false, 
  light = false,
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      className,
      centered ? 'text-center' : 'text-left',
    )}>
      <h2 className={cn(
        'section-title',
        light ? 'text-bikerCream' : 'text-bikerDark'
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl mt-2 max-w-3xl',
          centered ? 'mx-auto' : '',
          light ? 'text-bikerCream/80' : 'text-bikerGray'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

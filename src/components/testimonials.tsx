import { testimonials } from '../common/constants';
import type { Testimonial } from '../types/type';
import { TestimonialCard } from './testimonial-card';

export const Testimonials = () => {
  return (
    <div className='flex flex-col gap-8 items-center pt-4 pb-8 relative w-[320px] md:w-[480px] mx-auto xl:flex-row xl:w-[1200px]'>
      <img className='size-6 absolute top-0 left-8' src="/images/bg-quotes.png" alt="bg quotes" />
      {
        testimonials.map((testimonial: Testimonial)=>(
          <TestimonialCard 
            key={testimonial.name} 
            {...testimonial}
          />
        ))
      }
    </div>
  )
}
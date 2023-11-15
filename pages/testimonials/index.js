import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from 'framer-motion'
import {fadeIn} from '../../variants'

const Testimonials = () => {
  return <div className="h-full bg-primary/30 py-32 text-center">
    <div className="container mx-auto h-full flex flex-col justify-center">
      <motion.h2 variants={fadeIn('down',0.2)} initial='hidden' animate='show' exit='hidden' className="h2 mb-8 xl:mb-0">What Client <span className="text-accent"> Says </span> </motion.h2>

      <motion.div variants={fadeIn('down',0.4)} initial='hidden' animate='show' exit='hidden'>
        <TestimonialSlider/>
      </motion.div>
    </div>
  </div>;
};

export default Testimonials;

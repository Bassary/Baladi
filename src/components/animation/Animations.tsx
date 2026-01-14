import { motion } from "motion/react";

// SLIDE DOWN

interface SlideDownProps {
    className?: string;
    children: React.ReactNode;

}

function SlideDown( {children, className} : SlideDownProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
        {children}
        </motion.div>
    ) 
}

// SLIDE UP

interface SlideUpProps {
    className?: string;
    children: React.ReactNode;

}

function SlideUp( {children, className} : SlideUpProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
        {children}
        </motion.div>
    ) 
}

// FADE IN SCROLL

interface FadeInScrollProps {
    className?: string;
    children: React.ReactNode;
    delay?: number;

}

function FadeInScroll( {children, className, delay} : FadeInScrollProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            viewport={{once: true}}
        >
        {children}
        </motion.div>
    ) 
}

// SLIDE DOWN NAV

interface SlideDownNavProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const SlideDownNav = ({ children, isOpen }: SlideDownNavProps) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};



export default{
    SlideDown,
    SlideUp,
    FadeInScroll,
    SlideDownNav,
} 





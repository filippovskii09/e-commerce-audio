export const sectionVariants = {
	hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const inputVariants = {
	initial: { y: 0 },
	active: { y: -20, transition: { duration: 0.3 } },
};

export const menuVariants = {
	initial: { scale: 0, y: -330, x: -180 },
	active: { scale: 1, y: 0, x: 0, transition: { duration: 0.2 } },
};

export const cartListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Час між анімацією кожного CartItem
    },
  },
};
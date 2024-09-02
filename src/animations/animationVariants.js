export const sectionVariants = {
	hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export const inputVariants = {
	initial: { y: 0 },
	active: { y: -20, transition: { duration: 0.3 } },
};

export const menuVariants = {
	initial: { scale: 0, y: -330, x: -180, rotate: -180, transition: { duration: 0.2 } },
	active: { scale: 1, y: 0, x: 0, rotate: 0, transition: { duration: 0.4 } },
};

export const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};
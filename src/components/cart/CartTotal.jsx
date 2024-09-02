"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const CartTotal = ({ cartTotal }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      color: ["#000000", "#0ACF83", "#000000"],
      y: [-10, 0],
      transition: { duration: 0.6 },
    });
  }, [cartTotal, controls]);

  return (
    <motion.p className="font-bold" animate={controls}>
      {cartTotal.toLocaleString("uk-UA", {
        style: "currency",
        currency: "UAH",
      })}
    </motion.p>
  );
};

export default CartTotal;

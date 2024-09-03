"use client";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { itemVariants, listVariants } from "@/animations/animationVariants";
import { useEffect } from "react";
import { subscribeToOrders } from "@/features/auth/thunks/subscribeToOrders";

const OrdersComponent = () => {
  const user = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();

  if (user.orders.length === 0)
    return <div className="text-xl font-semibold px-5">No one order yet</div>;

	useEffect(() => {
		if (user) dispatch(subscribeToOrders());
	
		return () => {
			if (dispatch?.extra?.unsubscribe) dispatch.extra.unsubscribe();
		};
	}, [user, dispatch]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={listVariants}
      className="flex flex-col gap-9 mt-8 px-5 pb-8">
      {user.orders.map((order) => (
        <motion.div
          className="flex flex-col gap-2.5 text-xs border p-4 rounded-xl shadow-xl"
          variants={itemVariants}
          key={order.id}>
          <div className="flex items-start justify-between gap-1">
            <p>№{order.id}</p>
            <p className="text-nowrap">
              {new Intl.DateTimeFormat("uk-UA", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(order.orderedTime))}
            </p>
          </div>
          <div className="">Кількість товарів:<span className="font-bold"> {order.products.length}</span></div>
          <div className="flex w-full justify-between gap-1 items-center">
            <p
              className={`
  						${order.status === "Очікує підтвердження" ? "text-yellow-500" : ""}
  						${order.status === "Відхилено" ? "text-red-500" : ""}
  						${order.status === "Прийнято" ? "text-green-500" : ""}
							font-semibold
						`}>
              {order.status}
            </p>
            <p className="text-sm font-bold">
              {order.total.toLocaleString("uk-UA", {
                style: "currency",
                currency: "UAH",
              })}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OrdersComponent;

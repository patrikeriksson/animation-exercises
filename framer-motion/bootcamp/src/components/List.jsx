import { motion } from "framer-motion";

const itemVariants = {
  initial: {
    opacity: 0,
    x: -150,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: index * 0.2,
    },
  }),
};

const List = () => {
  return (
    <ul>
      {[...Array(5).keys()].map((item, index) => (
        <motion.li
          key={item}
          custom={index}
          variants={itemVariants}
          initial="initial"
          animate="animate"
        >
          Item {item + 1}
        </motion.li>
      ))}
    </ul>
  );
};

export default List;

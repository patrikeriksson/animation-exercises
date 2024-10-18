import { motion } from "framer-motion";
import { useState } from "react";

const RotatingBox = () => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <motion.div
      className="square"
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      animate={{ rotate: isRotated ? 360 : 0 }}
      transition={{ duration: 1, ease: "backInOut" }}
      onClick={() => setIsRotated(!isRotated)}
    >
      Klicka på mig!
    </motion.div>
  );
};
export default RotatingBox;

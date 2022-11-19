import React from "react";
import { motion } from "framer-motion";
import "../styles/components/Icon.scss";

const Icon = ({ icon }) => {
  return (
    <div className="container-tec">
      <motion.div
        className="icon-item"
        animate={{ rotateZ: 4680, scale: [0.1, 1.2, 1] }}
        transition={{ duration: 3 }}>
        {icon.icone}
      </motion.div>

      <div className="div">
        <motion.div
          className="item-name"
          initial={icon.initial}
          animate={icon.animate}
          transition={{ duration: 3 }}>
          {icon.name}
        </motion.div>
      </div>

      <motion.p
        className="p"
        animate={{ opacity: [0, 0, 1] }}
        transition={{ duration: 3 }}>
        {icon.porc}
      </motion.p>
    </div>
  );
};

export default Icon;

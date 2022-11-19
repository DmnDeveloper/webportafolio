import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pdf from "../assets/CV-JesusDamianFront.pdf";
import "../styles/components/Buttons.scss";

export const ButtonCv = () => {
  return (
    <a
      className="links"
      href={pdf}
      target="_blank"
      rel="noreferrer"
      download="CVDamian.pdf">
      <motion.div
        className="btn"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}>
        DescargarCV
      </motion.div>
    </a>
  );
};

export function ButtonContact() {
  return (
    <Link
      className="links"
      exact="true"
      to="/Contact">
      <motion.div
        className="btn"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}>
        Contactarme
      </motion.div>
    </Link>
  );
}
export const ButtonIcon = (props) => {
  return (
    <a
      href={props.link}
      rel="noreferrer"
      target="_blank">
      {props.icon}
    </a>
  );
};

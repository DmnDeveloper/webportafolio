import React from "react";
import { useModal } from "../hooks/useModal";
import { ButtonCv, ButtonContact } from "../components/Buttons";
import { motion } from "framer-motion";
import { Modal } from "../components/Modal";
import Perfil from "../components/Perfil";
import cloe from "../assets/logoCloe.jpg";
import "../styles/pages/Portafolio.scss";
import { CalisteniaChildren, CloeChildren, PortafolioChildren } from "../components/ModalChildrens";

const Portafolio = () => {
  const [isOpenModal, openModalCloe, closeModalCloe] = useModal(false);
  const [isOpenModalCalistenia, openModalCalistenia, closeModalCalistenia] = useModal(false);
  const [isOpenModalPortafolio, openModalPortafolio, closeModalPotafolio] = useModal(false);

  const modals = [
    {
      id: 1,
      logo: ( <img src={cloe} alt=""/>),
      text: "Cuponera con inicio de sesion desarrollada con react",
      myOnClick: (e) => openModalCloe(e)
    },
    {
      id: 2,
      logo: <h1 className="txt-logo-modal">MyPortfolio</h1>,
      text: "Mi portafolio web (Actual), desarrollado con react",
      myOnClick: (e) => openModalPortafolio(e)
    },
    {
      id: 3,
      logo: <h1 className="txt-logo-modal">CalisteniaMx</h1>,
      text: "Mi primer App!, desarrollada con JavaScript Vanilla",
      myOnClick: (e) => openModalCalistenia(e)
    },
  ];

  return (
    <motion.div className="portafolio"
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <Perfil
        text={"Estos son algunos de los proyectos en los que he participado como el front-end. Proyectos como freelance, personales y colaboraciones es un poco de mi trabajo."}
        cv={<ButtonCv />}
        contact={<ButtonContact />}
      />

      <div className="portafolio-container">
        {modals.map((modal) => {
          return (
            <div
              className="individual-modal-card"
              key={modal.id}>
              <div className="img-modal-card">{modal.logo}</div>
              <div className="txt-modal-card">
                <p className="txt-modal">{modal.text}</p>
              </div>
              <div className="btn-modal-card">
                <motion.button
                  className="button"
                  onClick={modal.myOnClick}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}>
                  Ver detalles
                </motion.button>
              </div>
            </div>
          );
        })}
        <Modal isOpen={isOpenModal}closeModal={closeModalCloe}>
          <CloeChildren />
        </Modal>
        <Modal isOpen={isOpenModalPortafolio} closeModal={closeModalPotafolio}>
          <PortafolioChildren />
        </Modal>
        <Modal isOpen={isOpenModalCalistenia} closeModal={closeModalCalistenia}>
          <CalisteniaChildren />
        </Modal>
      </div>
    </motion.div>
  );
};

export default Portafolio;

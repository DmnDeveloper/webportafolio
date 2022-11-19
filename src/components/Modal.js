import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import '../styles/components/Modal.scss'

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModelContainerClick = (e) => e.stopPropagation();

  return (
    <article
      className={`modal ${isOpen && "is-open"}`}
      onClick={closeModal}>
      <div
        className="modal-container"
        onClick={handleModelContainerClick}>
        <button
          className="modal-close"
          onClick={closeModal}>
          <AiOutlineClose size="20px" />
        </button>
        {children}
      </div>
    </article>
  );
};

export const Children = (props) => {
  return (
    <>
      <p className="txt-one">{props.txtone}</p>
      <div className="img-one">
        <img
          src={props.imgone}
          alt=""
        />
      </div>
      <p className="txt-two">{props.txttwo}</p>
      <div className="img-two">
        <img
          src={props.imgtwo}
          alt=""
        />
      </div>
      <p className="txt-two">{props.txtthree}</p>
      <div className="img-two">
        <img
          src={props.imgthree}
          alt=""
        />
      </div>
      <div className="container-btns">
        {props.btncode}
        {props.btnview}
      </div>
    </>
  );
};
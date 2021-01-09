import React, { Fragment, useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancleDeleteWarningHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("deleting");
  };

  const [showMap, setShowMap] = useState(false);
  const openModalHandler = () => {
    setShowMap(true);
  };
  const closeModalHandler = () => {
    setShowMap(false);
  };
  return (
    <Fragment>
      <Modal
        show={showMap}
        onCancel={closeModalHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <Button danger onClick={closeModalHandler}>
            Close
          </Button>
        }
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      {/* delete modal */}
      <Modal
        show={showConfirmModal}
        onCancel={cancleDeleteWarningHandler}
        header="Are You Sure?"
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancleDeleteWarningHandler}>
              Close
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </React.Fragment>
        }
      >
        <div className="center">
          <h2>delete</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openModalHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;

import { useState, useEffect } from "react";
import {
  IonContent,
  IonItem,
  IonAvatar,
  IonLabel,
  IonSkeletonText,
  IonListHeader,
  IonIcon,
  IonThumbnail,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk, close } from "ionicons/icons";
import "./style.css";
interface ContainerProps {
  data: any;
}

const Modal: React.FC<{
  data: any;
  onDismiss: () => void;
}> = ({ data, onDismiss }) => {
  console.log(data);
  return (
    <div className="contianer-modal">
      <div className="modal-content">
        <p className="video-title-modal">{data.name}</p>
        {data.url && (
          <div className="iframe-contianer">
            <iframe width="420" height="315" src={data.url}></iframe>
          </div>
        )}
        <IonButton
          className="close-modal"
          expand="block"
          onClick={() => onDismiss()}
        >
          <IonIcon icon={close} />
        </IonButton>
      </div>
    </div>
  );
};

export default Modal;

import { IonIcon, IonButton } from "@ionic/react";
import { close } from "ionicons/icons";
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
            <iframe
              width="420"
              height="315"
              allowFullScreen
              src={data.url}
            ></iframe>
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

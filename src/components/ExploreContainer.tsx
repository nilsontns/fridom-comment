import { useState, useEffect } from "react";
import "./ExploreContainer.css";
import {
  IonItem,
  IonLabel,
  IonSkeletonText,
  IonThumbnail,
  IonInput,
  IonCard,
  IonCardContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  useIonModal,
} from "@ionic/react";
import Modal from "./Modal";
interface ContainerProps {
  data: any;
}

const ExploreContainer: React.FC<ContainerProps> = ({ data }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<any>({});
  const [temp, setTeamp] = useState<any>([...data]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (text && text != "") {
      const result: any = data.filter((e: any) =>
        e.name.toLowerCase().includes(text.toLowerCase())
      );
      setTeamp([...result]);
    } else {
      setTeamp([...data]);
    }
  }, [text]);

  const openModal = (item: any) => {
    console.log(item);
    setSelectItem(item);
    present({
      cssClass: "my-class",
    });
  };

  const handleDismiss = () => {
    setSelectItem({});
    dismiss();
  };

  const [present, dismiss] = useIonModal(Modal, {
    data: selectItem,
    onDismiss: handleDismiss,
  });

  return (
    <div>
      {loading && (
        <>
          {Array.from(Array(6)).map((val, i) => (
            <IonList key={`key-card-video-${i}`}>
              <IonItem>
                <IonThumbnail slot="start">
                  <IonSkeletonText animated />
                </IonThumbnail>
                <IonLabel>
                  <h3>
                    <IonSkeletonText animated style={{ width: "50%" }} />
                  </h3>
                  <p>
                    <IonSkeletonText animated style={{ width: "80%" }} />
                  </p>
                  <p>
                    <IonSkeletonText animated style={{ width: "60%" }} />
                  </p>
                </IonLabel>
              </IonItem>
            </IonList>
          ))}
        </>
      )}
      {!loading && (
        <>
          <IonItem>
            <IonInput
              value={text}
              placeholder="Buscar video"
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonInput>
          </IonItem>

          {temp.map(({ img, name, description, url }: any) => (
            <IonCard onClick={() => openModal({ name, description, url })}>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol className="container-img-col" size="2">
                      <img src={img} alt="" />
                    </IonCol>
                    <IonCol class="item-video-list" size="6">
                      <p>{name}</p>
                      <p>{description}</p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          ))}
        </>
      )}
    </div>
  );
};

export default ExploreContainer;

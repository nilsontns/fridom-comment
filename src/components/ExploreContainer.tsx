import { useState, useEffect } from "react";
import "./ExploreContainer.css";
import {
  IonItem,
  IonLabel,
  IonSkeletonText,
  IonInput,
  IonCard,
  IonCardContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonTextarea,
  IonButton,
} from "@ionic/react";
import moment from "moment";

const ExploreContainer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [temp, setTeamp] = useState<any>([]);
  const [text, setText] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dataComments, setDataComments] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (text && text !== "") {
      const result: any = temp.filter((e: any) =>
        e.name.toLowerCase().includes(text.toLowerCase())
      );
      setDataComments([...result]);
    } else {
      setDataComments([...temp]);
    }
  }, [temp, text]);

  const handlerSend = () => {
    const obj = {
      name,
      description,
      time: moment().format("DD-MM-YYYY - kk:mm"),
      timestamp: moment().unix(),
    };
    setDescription("");
    setName("");
    setTeamp([...temp, obj]);
    setDataComments([...temp, obj]);
  };

  return (
    <div className="contianer-main">
      <div className="container-comments">
        {loading && (
          <>
            {Array.from(Array(6)).map((val, i) => (
              <IonList key={`key-card-video-${i}`}>
                <IonItem>
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
            <IonCard>
              <IonCardContent>
                <IonItem>
                  <IonLabel position="floating">Nombre del Autor</IonLabel>
                  <IonInput
                    value={name}
                    onIonChange={(e) => setName(e.detail.value!)}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Comentario</IonLabel>
                  <IonTextarea
                    value={description}
                    onIonChange={(e) => setDescription(e.detail.value!)}
                  ></IonTextarea>
                </IonItem>

                <IonItem>
                  <div className="send-content" >
                  <IonButton className="btn-send" onClick={handlerSend}>
                    {" "}
                    Enviar{" "}
                  </IonButton>
                  </div>
                </IonItem>
              </IonCardContent>
            </IonCard>

            <IonItem className="search-item" >
              <div>
                <IonInput
                  value={text}
                  placeholder="Buscar Comentario"
                  onIonChange={(e) => setText(e.detail.value!)}
                ></IonInput>
              </div>
            </IonItem>

            {dataComments.length > 0 && (
              <>
                {dataComments
                  .sort((objA: any, objB: any) =>   Number(objB.timestamp) -  Number(objA.timestamp))
                  .map(({ name, description, time, timestamp }: any) => (
                    <IonCard key={`${name}-${time}`}>
                      <IonCardContent>
                        <IonGrid> 
                          <IonRow>
                            <IonCol class="item-video-list" size="10">
                              <p className="name">{name}</p>
                              <p className="description">{description}</p>
                            </IonCol>
                            <IonCol className="container-img-col" size="2">
                              <p>
                                {" "}
                                {moment(parseInt(`${timestamp}000`)).format(
                                  "DD-MM-YYYY - kk:mm:ss"
                                )}
                              </p>
                            </IonCol>
                          </IonRow>
                        </IonGrid>
                      </IonCardContent>
                    </IonCard>
                  ))}
              </>
            )}
            {!dataComments.length && (
              <IonCard>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <IonCol class="item-video-list" size="6">
                        <p>No hay comentarios</p>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreContainer;

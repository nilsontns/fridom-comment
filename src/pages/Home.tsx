import { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  const [arr, setArray] = useState<any>([]);
  const arrImg = [
    "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/06/30/09/29/monkey-3507317_1280.jpg",
  ];
  useEffect(() => {
    const data = [];
    for (let i = 0; i < 3; i++) {
      const obj = {
        id: i + 1,
        name: `video ${i + 1}`,
        description: `description video ${i + 1}`,
        url: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1",
        img: arrImg[i],
      };
      data.push(obj);
    }
    setArray(data);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Videos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Videos</IonTitle>
          </IonToolbar>
        </IonHeader>
        {!!arr.length && <ExploreContainer data={arr} />}
      </IonContent>
    </IonPage>
  );
};

export default Home;

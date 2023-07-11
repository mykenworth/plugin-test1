import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { Echo } from "echo";
import { useEffect, useState } from "react";
import React from "react";

export interface OpenMapOptions {
  latitude: number;
  longitude: number;
}

const Home: React.FC = () => {
  const [text, setText] = React.useState("Watch me change!");
  const [testData, setTestData] = useState("");
  const [testOpenMap, setTestOpenMap] = useState<any>();

  // useEffect(() => {
  //   async function apiCall() {
  //     // const apiResponse = await getEcho("I am groot");
  //     // setTestData(apiResponse.value);
  //   }
  //   apiCall();
  // }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <div> {testData}</div>
        <div> {text}</div>
        <IonButton
          id="open-toast"
          onClick={async () => {
            await onClick("Example");
          }}
        >
          Test Echo (Change Data)
        </IonButton>
        <div> {testOpenMap ? JSON.stringify(testOpenMap) : ""}</div>
        <IonButton
          id="open-toast"
          onClick={async () => {
            await onClickOpenMap("test");
          }}
        >
          Test OpenMap - No Return
        </IonButton>
        <IonToast
          trigger="open-toast"
          message={text}
          duration={5000}
        ></IonToast>
      </IonContent>
    </IonPage>
  );

  async function onClickOpenMap(message: string) {
    try {
      const response = await Echo.openMap({
        latitude: 111,
        longitude: 222,
      });
      setText(`${JSON.stringify(response)}`);
    } catch (error) {
      setText(`Something went wrong onClickOpenMap`);
    }
  }

  async function getEcho(message: string) {
    const testValue = await Echo.echo({ value: `${message}` });
    return testValue;
  }

  async function onClick(message: string) {
    try {
      const apiResponse = await getEcho("onClick is fired!");
      setText(`${apiResponse.value}`);
    } catch (error) {
      setText(`Something went wrong onClick`);
    }
  }
};

export default Home;

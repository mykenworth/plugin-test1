import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
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
  const [text, setText] = React.useState("Initial button value");
  const [testData, setTestData] = useState("");
  const [testOpenMap, setTestOpenMap] = useState<any>();

  useEffect(() => {
    async function apiCall() {
      // const apiResponse = await getEcho("I am groot");
      // setTestData(apiResponse.value);
    }
    apiCall();
  }, []);

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
          onClick={async () => {
            await onClick("Example");
          }}
        >
          Test Echo (Change Data)
        </IonButton>
        <div> {testOpenMap ? JSON.stringify(testOpenMap) : ""}</div>
        <IonButton
          onClick={async () => {
            await onClickOpenMap("test");
          }}
        >
          Test OpenMap - No Return
        </IonButton>
      </IonContent>
    </IonPage>
  );

  async function onClickOpenMap(message: string) {
    try {
      console.log(`onClickOpenMap2: ${message}`);
      debugger;
      // const xx = new OpenMapOptions(latitude: 11)
      // const newObject = new OpenMapOptions(latitude: 111, longitude: 222);

      const response = await Echo.openMap({
        latitude: 111,
        longitude: 222,
      });

      console.log(`onClickOpenMap3 response: ${JSON.stringify(response)}`);
      // testOpenMap("This is new value.");
      // setText(`${apiResponse.value}`);

      console.log(`onClick3: ${message}`);
    } catch (error) {
      console.log(`error from catch: ${error}`);
    }
  }

  async function getEcho(message: string) {
    const testValue = await Echo.echo({ value: `${message}` });
    return testValue;
  }

  async function onClick(message: string) {
    console.log(`onClick1: ${message}`);
    debugger;
    console.log(`onClick2: ${message}`);
    const apiResponse = await getEcho("This is new value.");
    setText(`${apiResponse.value}`);

    console.log(`onClick3 onClick echo: ${JSON.stringify(apiResponse)}`);
  }
};

export default Home;

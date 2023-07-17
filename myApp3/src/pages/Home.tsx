import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
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
  const [forceUpgradeInfos, setForceUpgradeInfos] = useState({
    appUpgradeRequired: undefined,
    currentAppVersion: "",
    currentOsVersion: "",
    mandatoryAppVersion: "",
    mandatoryOsVersion: "",
    osUpgradeRequired: undefined,
  });

  const [testData, setTestData] = useState("");
  const [testOpenMap, setTestOpenMap] = useState<any>();

  useIonViewDidEnter(() => {
    console.log("ionViewDidEnter event fired");
  });

  useIonViewDidLeave(() => {
    console.log("ionViewDidLeave event fired");
  });

  useIonViewWillEnter(() => {
    console.log("ionViewWillEnter event fired");
  });

  useIonViewWillLeave(() => {
    console.log("ionViewWillLeave event fired");
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sample API</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonLabel>osUpgradeRequired:</IonLabel>
            <IonInput
              type="text"
              value={convertNum(forceUpgradeInfos.osUpgradeRequired)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>CurrentAppVersion:</IonLabel>
            <IonInput type="text" value={forceUpgradeInfos.currentAppVersion} />
          </IonItem>
          <IonItem>
            <IonLabel>currentOsVersion:</IonLabel>
            <IonInput type="text" value={forceUpgradeInfos.currentOsVersion} />
          </IonItem>
          <IonItem>
            <IonLabel>mandatoryAppVersion:</IonLabel>
            <IonInput
              type="text"
              value={forceUpgradeInfos.mandatoryAppVersion}
            />
          </IonItem>
          <IonItem>
            <IonLabel>mandatoryOsVersion:</IonLabel>
            <IonInput
              type="text"
              value={forceUpgradeInfos.mandatoryOsVersion}
            />
          </IonItem>
          <IonItem>
            <IonLabel>osUpgradeRequired:</IonLabel>
            <IonInput
              type="text"
              value={convertNum(forceUpgradeInfos.osUpgradeRequired)}
            />
          </IonItem>
        </IonList>
        <IonButton
          id="open-toast"
          onClick={async () => {
            await onClickGetForceUpgrade("test");
          }}
        >
          Fetch GetForceUpgrade
        </IonButton>
      </IonContent>
    </IonPage>
  );

  async function onClickGetForceUpgrade(message: string) {
    try {
      const response = await Echo.getForceUpgrade("some filter, if any");
      console.log(`response in JS:::: ${JSON.stringify(response)}`);
      setForceUpgradeInfos((items) => ({
        ...response.results,
      }));
      console.log(`get:::: ${JSON.stringify(forceUpgradeInfos)}`);
    } catch (error) {
      setText(`Something went wrong onClickGetForceUpgrade`);
    }
  }

  async function getEcho(message: string) {
    const testValue = await Echo.echo({ value: `${message}` });
    return testValue;
  }

  function convertNum(num: number | undefined): string {
    if (num == undefined || num == null || Number.isNaN(num)) {
      return "";
    }

    return num === 1 ? "true" : "false";
  }
};

export default Home;

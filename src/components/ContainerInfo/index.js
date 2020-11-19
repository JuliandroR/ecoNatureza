import React, { useEffect, useState } from "react";
import { SpaceBetween } from "../Views";
import NumberInfo from "../NumberInfo";

import firebase from "firebase";

const ContainerInfo = () => {
  useEffect(() => {
    (async () => {
      await getNumberInfo();
    })();
  });

  async function getNumberInfo() {
    let data = [];
    await firebase
      .database()
      .ref(`/tbl_registros`)
      .once("value", async (snapshot) => {
        data.push(snapshot.numChildren());
      });

    await firebase
      .database()
      .ref(`/tbl_especies`)
      .once("value", async (snapshot) => {
        data.push(snapshot.numChildren());
      });

    await firebase
      .database()
      .ref(`/tbl_colaboradores`)
      .once("value", async (snapshot) => {
        data.push(snapshot.numChildren());
      });

    await firebase
      .database()
      .ref(`/tbl_projetos`)
      .once("value", async (snapshot) => {
        data.push(snapshot.numChildren());
      });

    setNumberInfo(data);
  }

  const [numberInfo, setNumberInfo] = useState(null);

  return (
    <SpaceBetween>
      {numberInfo && (
        <>
          <NumberInfo title="registros" value={numberInfo[0]} />
          <NumberInfo title="espécies" value={numberInfo[1]} />
          <NumberInfo title="colaboradores" value={numberInfo[2]} />
          <NumberInfo title="projetos" value={numberInfo[3]} />
        </>
      )}
    </SpaceBetween>
  );
};

export default ContainerInfo;

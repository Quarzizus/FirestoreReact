import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/firestore";
import "../styles/components/List.scss";

const List = () => {
  const db = firebase.firestore();
  const [data, setData] = useState(null);
  const getFireData = async () => {
    const response = await db.collection("task").get();
    setData(response);
  };
  useEffect(() => {
    getFireData();
  }, []);

  if (!data) {
    return <h1>Cargando...</h1>;
  } else {
    return (
      <section className="List">
        <h2>Soy la lista</h2>
        {data.docs.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.data().title}</h1>
              <p>{item.data().time} </p>
              <p></p>
            </div>
          );
        })}
      </section>
    );
  }
};

export default List;

import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MedicineData from "../products";
import Message from "../components/Message";
import Medicine from "../components/medicinepage/Medicine";
import { Row, Col } from "react-bootstrap";
const Homescreen = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [medicine, setmedicine] = useState([]);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setmedicine(MedicineData);
      seterror(null);
      setloading(false);
    }, 1500);
  }, [MedicineData]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message />
      ) : (
        <>
          <Row>
            {medicine.map((medicine) => {
              return (
                <Col md={3} lg={3}>
                  <Medicine key={medicine._id} medicine={medicine} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
};

export default Homescreen;

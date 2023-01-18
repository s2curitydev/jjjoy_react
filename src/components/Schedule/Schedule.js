import React from "react";
import { InfoSection } from "../../components";
import { scheduleObj } from "./Schedule.elements";
import { GoogleMap } from "../Schedule/Schedule.elements";

const Schedule = () => {
  return (
    <>
      <InfoSection {...scheduleObj} />
      <GoogleMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10368.404490137524!2d-119.5935597!3d49.4825968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd50fd235d5a662b4!2sJJ%20Joy(Asian%20Cuisine)!5e0!3m2!1sko!2sca!4v1658466849597!5m2!1sko!2sca"
          width="100%"
          height="40%"
          title="myFrame"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </GoogleMap>
    </>
  );
};

export default Schedule;

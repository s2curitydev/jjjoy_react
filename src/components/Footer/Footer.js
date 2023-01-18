import React, { useState } from "react";
import {
  FaFacebook,
  FaTripadvisor,
  FaEnvelope,
  FaPhone,
  FaRunning,
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import ContactForm from "../ContactForm/ContactForm";

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Email,
  SocialMediaWrap,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIcoLink,
  SocialIcon,
} from "./Footer.elements";

const Footer = () => {
  const [mode, setMode] = useState(true);
  const [showForm, setShowForm] = useState();

  function formDisplay() {
    setMode(!mode);
    setShowForm(mode ? <ContactForm /> : null);
    return;
  }

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          We support your Event! Contact us via Email for further discussion.
        </FooterSubHeading>
        <FooterSubText>
          *We are welcome to discuss in person as well!
        </FooterSubText>
        <Email>
          <a href="tel: +12364223344">
            <Button fontBig primary>
              <FaPhone /> Call
            </Button>
          </a>
          <a>
            <Button fontBig primary onClick={formDisplay}>
              <FaEnvelope /> Email
            </Button>
          </a>
          <a href="https://jjjoypenticton.dispatchninja.com/order">
            <Button fontBig primary>
              <FaRunning />
              Delivery
            </Button>
          </a>
        </Email>
        <div>{showForm}</div>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            JJ-Joy
          </SocialLogo>
          <WebsiteRights>HHStudio©2022</WebsiteRights>
          <SocialIcons>
            <SocialIcoLink
              href="https://www.facebook.com/thejjjoy"
              target="_blank"
              aria-label="Facebook">
              <FaFacebook />
            </SocialIcoLink>
            <SocialIcoLink
              href="https://www.tripadvisor.com/Restaurant_Review-g154937-d14926822-Reviews-The_Joy_Buffet-Penticton_Okanagan_Valley_British_Columbia.html"
              target="_blank"
              aria-label="Facebook">
              <FaTripadvisor />
            </SocialIcoLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;

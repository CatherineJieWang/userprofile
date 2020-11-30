import React, { useState } from "react";
import addressicon from "./icons/address.svg";
import avataricon from "./icons/avatar.svg";
import emailicon from "./icons/email.svg";
import linkicon from "./icons/link.svg";
import logo from "./icons/logo.svg";
import phoneicon from "./icons/phone.svg";
import { NormalContainer, NormalInfo } from "../common/Normal";
import { Button } from "../common/Button";
import {
  CardContainer,
  AvatarContainer,
  InfoContainer,
  LogoContainer,
} from "../common/CardContainers";

//{TODO: UPDATE USER PROFILE}
// import { updateContact } from "../actions/contactAction";
// import { useDispatch } from "react-redux";

const iconMap = {
  email: emailicon,
  address: addressicon,
  phone: phoneicon,
  link: linkicon,
};

const defaultMap = {
  name: "Lois Zemlak",
  email: "maida.Becker98@gmail.com",
  address: "Cermin Plains St,Apt.462, North Connortown, 99373",
  phone: "(293)414-8005",
  link: "marianne.org",
};

export default function Card(props) {
  const { name } = props.data;
  const index = props.index;
  // const dispatch = useDispatch();
  // function updateinfo(e, namespace, fn) {
  //   e.preventDefault();
  //   let contact = props.data;
  //   contact['email'] = e.target.value;
  //   setEmail(e.target.value);
  //   dispatch(updateContact(index, contact));
  // }
  return (
    <CardContainer>
      <Button onClick={(e) => props.removeContact(e, index)}>Remove</Button>
      <AvatarContainer>
        <img src={avataricon} alt="Avatar" />
      </AvatarContainer>
      <InfoContainer>
        <h3>{name || defaultMap["name"]}</h3>
        {Object.keys(iconMap).map((key, i) => {
          return (
            <NormalContainer key={i}>
              <img src={iconMap[key]} alt={key} />
              <NormalInfo>{props.data[key] || defaultMap[key]}</NormalInfo>
            </NormalContainer>
          );
        })}
        <LogoContainer>
          <img src={logo} alt="Logo" />
          <div>
            <h5>Mckenzie LLC</h5>
            <p>Quality-focused value-added synergy</p>
          </div>
        </LogoContainer>
      </InfoContainer>
    </CardContainer>
  );
}

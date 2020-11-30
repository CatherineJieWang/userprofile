import styled from "styled-components";
export const CardContainer = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 16px;
  filter: drop-shadow(0px 23.7736px 63.3962px rgba(0, 0, 0, 0.06));
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 15.8491px;
  }
`;

export const AvatarContainer = styled.div`
  background: linear-gradient(135deg, #f395ba 0%, #fed182 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px 0px 0px 16px;
  img {
    margin: 25px;
  }
  @media (max-width: 768px) {
    border-radius: 15.8491px 15.8491px 0px 0px;
    width: 100%;
    img {
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
`;

export const InfoContainer = styled.div`
  padding: 24px;
  h3 {
    font-size: 20px;
    line-height: 25px;
    color: #081f32;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  img {
    margin-right: 15px;
  }
  h5 {
    font-size: 12px;
    line-height: 14px;
    color: #555a66;
    margin: 0;
  }
  p {
    font-size: 12px;
    line-height: 14px;
    color: #555a66;
    margin-bottom: 0;
  }
`;

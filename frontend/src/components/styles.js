// src/components/styles.js
import styled from 'styled-components';

export const VerticalTimelineContainer = styled.div`
  position: relative;
  padding: 20px 0;
`;

export const CardContainer = styled.div`
  position: absolute;
  top: ${({ verPos }) => verPos}%;
  left: ${({ isOnLeft }) => (isOnLeft ? '10%' : '60%')};
  width: 30%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: top 0.5s ease-in-out;
`;

export const Time = styled.div`
  font-size: 0.8em;
  color: #888;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1em;
  color: #333;
`;

export const Mark = styled.div`
  position: absolute;
  top: ${({ verPos }) => verPos}%;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: #333;
  border-radius: 50%;
  transition: top 0.5s ease-in-out;
`;
export const Container = styled.div`
`;
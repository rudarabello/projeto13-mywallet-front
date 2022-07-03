import "./styles/reset.css";
import { createRoot } from 'react-dom/client';
import App from "./App";
import React from 'react'

const container = document.querySelector(".root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
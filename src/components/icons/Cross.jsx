import React from "react";
import { X } from "lucide-react";

const Cross = ({ afterTaskFunc }) => (
  <X className="icons" size={25} onClick={afterTaskFunc} />
);

export default Cross;

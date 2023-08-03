import React from "react";
import Population from "@/components/Population";
import HexadecimalColors from "@/components/HexadecimalColors";
import NumberGenaretor from "@/components/NumberGenaretor";

const react30day = () => {
  return (
    <div>
      <NumberGenaretor></NumberGenaretor>
      <Population></Population>
      <HexadecimalColors></HexadecimalColors>
    </div>
  );
};

export default react30day;

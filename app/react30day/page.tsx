import React from "react";
import Population from "@/components/Population";
import HexadecimalColors from "@/components/HexadecimalColors";
import NumberGenaretor from "@/components/NumberGenaretor";
import State from "@/components/State";
import Countires from "@/components/Countires";

const react30day = () => {
  return (
    <div>
      <NumberGenaretor></NumberGenaretor>
      <Population></Population>
      <HexadecimalColors></HexadecimalColors>
      <State></State>
      <Countires></Countires>
    </div>
  );
};

export default react30day;

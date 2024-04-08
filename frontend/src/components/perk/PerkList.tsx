import { usePerkListHook } from "./hook";
import { IPerk, IPerkListProps } from "../../types/perk";
import PerkCard from "./Card";
import { useState } from "react";

const PerkList: React.FC<IPerkListProps> = ({user_id}) => {

  const {data: perks} = usePerkListHook(user_id);
  console.log("eeee", perks);
  return (
    <div style={{ width: "100%" }}>
        {
            perks && Array.isArray(perks) && perks.map((perk, index) => (
                <PerkCard perk={perk} key={index}/>
            ))
        }
    </div>
  );
};

export default PerkList;

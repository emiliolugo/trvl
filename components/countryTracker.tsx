

import { CONTINENTS_WITH_COUNTRIES } from "@/constants";
import ContinentComponent from "./continent";

export default function CountryTracker() {
  return (
    
        <div className="flex gap-x-10 justify-center">
        {
          Object.entries(CONTINENTS_WITH_COUNTRIES).map(([key, value]) => (
            <ContinentComponent
              key={key}
              continent={key}
              countries={value}
            />
          ))
        }
        </div>
  );
}

"use client";
import { Button } from "@material-tailwind/react";

export function MaterialButtons() {
  return (
    <div className="flex items-center gap-4">
    
      <Button variant="outlined" className="px-8 py-4 rounded-full bg-white text-black ">
        Join Trip
      </Button>

      <Button variant="outlined" className="px-8 py-4 rounded-full bg-white text-black">
        Host Trip
      </Button>
     
    </div>
  );
}

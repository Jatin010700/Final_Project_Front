import { dotPulse } from "ldrs";
dotPulse.register();

export const PagePreloader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex items-center flex-col">
        <h1 className="font-bold text-4xl text-B-yellow">Car Rental</h1>
        <l-dot-pulse size="55" speed="1.3" color="#febd00"></l-dot-pulse>
      </div>
    </div>
  );
};

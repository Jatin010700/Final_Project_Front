import { dotPulse } from "ldrs";
dotPulse.register();

export const Preloader = () => {
  return (
    <div>
      <l-dot-pulse size="43" speed="1.3" color="#febd00" ></l-dot-pulse>
    </div>
  );
};

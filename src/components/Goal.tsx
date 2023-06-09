import { useState } from "react";
import { clsx } from "clsx";
import { css } from "@emotion/css";
import SubGoals from "./SubGoals";
import { Goal } from "../models";

const Goal = ({
  text,
  subGoals,
  pos,
}: {
  text: string;
  subGoals?: Array<Goal>;
  pos?: {
    top: string;
    left: string;
  };
}) => {
  const [containerRef, setContainerRef] = useState(null);

  const hasPosition = !!pos;

  const centeredPosition =
    "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";

  const newPosition = css`
    top: ${pos?.top};
    left: ${pos?.left};
  `;

  return (
    <div>
      <div
        className={clsx(
          "w-[150px] h-[150px] fixed grid place-items-center rounded-full bg-red-400 text-white break-keep text-center text-sm",
          hasPosition ? newPosition : centeredPosition
        )}
        ref={(ref) => setContainerRef(ref)}
      >
        {text}
      </div>

      {subGoals && subGoals.length && (
        <SubGoals subGoals={subGoals} mainGoalRef={containerRef} />
      )}
    </div>
  );
};

export default Goal;

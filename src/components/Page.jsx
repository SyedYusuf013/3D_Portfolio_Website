import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="bg-white demoPage" ref={ref}>
      <div className="h-full">{props.children}</div>
      <p className="pb-4 pr-3 text-xs text-gray-200 text-end">
        Page number: {props.number}
      </p>
    </div>
  );
});

export default Page;

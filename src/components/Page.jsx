import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      <div className="h-full">{props.children}</div>
      <p className="text-xs text-end text-gray-200 pb-4">
        Page number: {props.number}
      </p>
    </div>
  );
});

export default Page;

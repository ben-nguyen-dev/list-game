import React, { createRef, useImperativeHandle, useState } from "react";

const screenRef: any = createRef();

export const FullScreenLoading = {
  show: () => {
    screenRef.current?.show?.();
  },
  hide: () => {
    screenRef.current?.hide?.();
  },
};

const Loading = () => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(screenRef, () => ({
    show: () => {
      setOpen(true);
    },
    hide: () => {
      setOpen(false);
    },
  }));

  if (!open) return null;
  return (
    <div className="full-screen-loading">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loading;

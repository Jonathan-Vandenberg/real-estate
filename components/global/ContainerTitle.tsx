import classNames from "classnames";
import React from "react";

export default function ContainerTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={classNames("pt-12 pb-2", `${className}`)}>{children}</div>
  );
}

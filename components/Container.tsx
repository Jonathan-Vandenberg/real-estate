import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames("max-w-[120rem] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

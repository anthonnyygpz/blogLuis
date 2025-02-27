import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, ...className }) => {
  return <div className={`${className}`}>{children}</div>;
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  ...className
}) => {
  return <div className={`${className}`}>{children}</div>;
};

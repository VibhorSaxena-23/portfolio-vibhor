// src/app/components/NavSeparatorLink.tsx
import { ReactNode } from "react";

interface NavSeparatorLinkProps {
  children: ReactNode;
  isLast: boolean;
}

export default function NavSeparatorLink({ children, isLast }: NavSeparatorLinkProps) {
  return (
    <div className="flex items-center">
      {children}
      {/* Add the pipe separator only if it is not the last link */}
      {!isLast && (
        <span className="text-gray-500 mx-2 text-sm select-none">|</span>
      )}
    </div>
  );
}
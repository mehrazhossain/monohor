import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="link-div">
      <Link
        className={
          match
            ? "bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
            : "text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;

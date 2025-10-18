"use client";

import Masonry from "react-responsive-masonry";

export default function MasonryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Masonry columnsCount={2} gutter="1rem">
      {children}
    </Masonry>
  );
}

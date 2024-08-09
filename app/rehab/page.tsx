import React from "react";

interface Props {
  searchParams: { SelectedIds: string };
}

const RehabPage = ({ searchParams: { SelectedIds } }: Props) => {
  const [hamstring, patellar, quad] = SelectedIds.split("");

  return (
    <div>
      {hamstring}
      {patellar}
      {quad}
    </div>
  );
};

export default RehabPage;

import { HomeContext } from "@/pages";
import React, { useContext } from "react";

export const EditEmployerModal = () => {
  const { dashboardModal } = useContext(HomeContext);
  return (
    <div>
      <p>Edit Employer</p>
      <p>{dashboardModal.employee?.name}</p>
      <p>{dashboardModal.employee?.id}</p>
    </div>
  );
};

import { HomeContext } from "@/pages";
import React, { useContext } from "react";

export const DeleteEmployerModal = () => {
  const { dashboardModal } = useContext(HomeContext);
  return (
    <div>
      <p>Delete Employer</p>
      <p>{dashboardModal.employee?.name}</p>
      <p>{dashboardModal.employee?.id}</p>
    </div>
  );
};

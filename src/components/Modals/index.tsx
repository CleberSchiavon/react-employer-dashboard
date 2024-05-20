import { ModalTypes } from "@/types/Modals";
import { AddEmployerModal } from "./AddEmployerModal";
import { DeleteEmployerModal } from "./DeleteEmployerModal";
import { EditEmployerModal } from "./EditEmployerModal";

export const getDashboardModal = (modalType: ModalTypes) => {
  switch (modalType) {
    case ModalTypes.ADD_EMPLOYER:
      return <AddEmployerModal />;
    case ModalTypes.EDIT_EMPLOYER:
      return <EditEmployerModal />;
    case ModalTypes.DELETE_EMPLOYER:
      return <DeleteEmployerModal />;
    default:
      return undefined;
  }
};

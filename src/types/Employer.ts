export type Employer = {
  id: number;
  name: string;
  position: string;
  departament: string;
  admissionDate?: string;
};

export type EditEmployer = Omit<Employer, "id">;

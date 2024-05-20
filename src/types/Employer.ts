export type Employer = {
  employerId: number;
  name: string;
  position: string;
  departament: string;
  admissionDate?: string;
};

export type EditEmployer = Omit<Employer, "employerId">;

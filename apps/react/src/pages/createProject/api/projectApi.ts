export interface DropdownOption {
  label: string;
  value: string;
}

const delay = (ms: number) =>
  new Promise((res) => setTimeout(res, ms));

export const getWorkflows = async (): Promise<DropdownOption[]> => {
  await delay(500);

  return [
    { label: "Standard Workflow", value: "standard" },
    { label: "React Workflow", value: "enterprise" },
  ];
};

export const getAdmins = async (): Promise<DropdownOption[]> => {
  await delay(500);

  return [
    { label: "John Carter", value: "1" },
    { label: "Sarah Lee", value: "2" },
  ];
};

export const getAssignees = async (): Promise<DropdownOption[]> => {
  await delay(500);

  return [
    { label: "Emily Stone", value: "10" },
    { label: "Michael Ross", value: "11" },
  ];
};
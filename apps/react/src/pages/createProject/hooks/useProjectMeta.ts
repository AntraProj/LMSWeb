import { useEffect, useState } from "react";
import {
  getWorkflows,
  getAdmins,
  getAssignees,
  DropdownOption,
} from "../api/projectApi";

export const useProjectMeta = () => {
  const [workflows, setWorkflows] = useState<DropdownOption[]>([]);
  const [admins, setAdmins] = useState<DropdownOption[]>([]);
  const [assignees, setAssignees] = useState<DropdownOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        setLoading(true);

        const [wf, ad, asg] = await Promise.all([
          getWorkflows(),
          getAdmins(),
          getAssignees(),
        ]);

        setWorkflows(wf);
        setAdmins(ad);
        setAssignees(asg);
      } catch (err) {
        setError("Failed to load dropdown data");
      } finally {
        setLoading(false);
      }
    };

    fetchMeta();
  }, []);

  return {
    workflows,
    admins,
    assignees,
    loading,
    error,
  };
};
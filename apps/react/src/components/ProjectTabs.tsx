import { useLocation, useNavigate } from "react-router-dom";

const tabWrap: React.CSSProperties = {
    display: "flex",
    gap: 24,
    borderBottom: "1px solid #E5E7EB",
    alignItems: "flex-end",
  };
  
  const tabBase: React.CSSProperties = {
    padding: "10px 0",
    fontSize: 14,
    fontWeight: 500,
    color: "#4B5563",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  };
  
  const tabActive: React.CSSProperties = {
    ...tabBase,
    color: "#2F3E9E",
    borderBottom: "2px solid #4F67FF",
    marginBottom: -1,
  };  

export default function ProjectTabs() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isBacklog = pathname.startsWith("/backlog");
  const isActive = pathname.startsWith("/active");

  return (
    <div style={tabWrap}>
      <button
        type="button"
        style={isBacklog ? tabActive : tabBase}
        onClick={() => navigate("/backlog")}
      >
        Backlog
      </button>

      <button
        type="button"
        style={isActive ? tabActive : tabBase}
        onClick={() => navigate("/active")}
      >
        Active
      </button>
    </div>
  );
}

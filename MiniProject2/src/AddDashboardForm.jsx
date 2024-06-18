import { useState } from "react";
function AddDashboardForm(onAddDashboard) {
  const [weightDashboard, setWeightDashboard] = useState("");
  const handleSubmitDashboard = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("weight", weightDashboard);
    const newAddWeight = {
      weightDashboard,
    };
    onAddDashboard(newAddWeight);
    setWeightDashboard("");
  };

  return (
    <div className="AddDashboardForm">
      <form onSubmit={handleSubmitDashboard}>
        <label>
          Add Weight
          <input
            name="weightDashboard"
            value={weightDashboard}
            onChange={(e) => setWeightDashboard(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
export default AddDashboardForm;

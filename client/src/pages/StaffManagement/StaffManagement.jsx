import React, { useState, useEffect } from "react";
import "./StaffManagement.css";

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [newStaff, setNewStaff] = useState({
    id: 21,
    name: "",
    days: [],
    times: [],
  });

  // Initializing the staff list with mock data
  useEffect(() => {
    const initialStaffList = [
      {
        id: 1,
        name: "John Doe",
        days: ["Monday", "Tuesday"],
        times: ["9am-5pm"],
      },
      {
        id: 2,
        name: "Jane Doe",
        days: ["Wednesday", "Thursday"],
        times: ["10am-6pm"],
      },
      {
        id: 3,
        name: "Alice Smith",
        days: ["monday", "Saturday"],
        times: ["9am-7pm"],
      },
      {
        id: 4,
        name: "Bob Johnson",
        days: ["Sunday", "Monday"],
        times: ["9am-4pm"],
      },
      {
        id: 5,
        name: "Charlie Brown",
        days: ["Tuesday", "monday"],
        times: ["9am-5pm"],
      },
      {
        id: 6,
        name: "Diana Prince",
        days: ["Thursday", "Friday"],
        times: ["10am-6pm"],
      },
      {
        id: 7,
        name: "Eve Adams",
        days: ["Saturday", "Sunday"],
        times: ["11am-7pm"],
      },
      {
        id: 8,
        name: "Frank Miller",
        days: ["Monday", "Tuesday"],
        times: ["9am-4pm"],
      },
      {
        id: 9,
        name: "Grace Lee",
        days: ["Wednesday", "monday"],
        times: ["9am-5pm"],
      },
      {
        id: 10,
        name: "Harry Potter",
        days: ["Friday", "Saturday"],
        times: ["10am-6pm"],
      },
      {
        id: 11,
        name: "Ivy Watson",
        days: ["Sunday", "Monday"],
        times: ["9am-7pm"],
      },
      {
        id: 12,
        name: "Jack White",
        days: ["Tuesday", "Wednesday"],
        times: ["8am-4pm"],
      },
      {
        id: 13,
        name: "Kate Black",
        days: ["Thursday", "Friday"],
        times: ["9am-5pm"],
      },
      {
        id: 14,
        name: "Liam Green",
        days: ["Saturday", "Sunday"],
        times: ["10am-6pm"],
      },
      {
        id: 15,
        name: "Mia Brown",
        days: ["Monday", "Tuesday"],
        times: ["9am-7pm"],
      },
      {
        id: 16,
        name: "Nick Blue",
        days: ["Wednesday", "Thursday"],
        times: ["8am-4pm"],
      },
      {
        id: 17,
        name: "Olivia Red",
        days: ["Friday", "Saturday"],
        times: ["9am-5pm"],
      },
      {
        id: 18,
        name: "Peter Yellow",
        days: ["Sunday", "Monday"],
        times: ["9am-6pm"],
      },
      {
        id: 19,
        name: "Quincy Green",
        days: ["Tuesday", "Wednesday"],
        times: ["11am-7pm"],
      },
      {
        id: 20,
        name: "Rachel Blue",
        days: ["Thursday", "Friday"],
        times: ["8am-4pm"],
      },
    ];
    setStaffList(initialStaffList);
  }, []);

  const addStaff = () => {
    if (
      newStaff.name &&
      newStaff.days.length > 0 &&
      newStaff.times.length > 0
    ) {
      setStaffList([...staffList, newStaff]);
      setNewStaff({ id: newStaff.id + 1, name: "", days: [], times: [] });
    }
  };

  const deleteStaff = (id) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  const handleInputChange = (e, field) => {
    if (field === "name") {
      setNewStaff({ ...newStaff, name: e.target.value });
    } else if (field === "days") {
      setNewStaff({ ...newStaff, days: e.target.value.split(",") });
    } else if (field === "times") {
      setNewStaff({ ...newStaff, times: e.target.value.split(",") });
    }
  };

  // Function to get available staff based on current day and time
  const getAvailableStaff = () => {
    return staffList.filter((staff) => staff.days.includes("Monday"));
  };

  const availableStaff = getAvailableStaff();

  const updateStaff = (id, updatedStaff) => {
    setStaffList(
      staffList.map((staff) => (staff.id === id ? updatedStaff : staff))
    );
  };

  return (
    <div className="staff-management">
      <h1>Staff Management</h1>
      <h2>Available Staff for Monday at 9am:</h2>
      <ul>
        {availableStaff.map((staff) => (
          <li key={staff.id}>
            {staff.name} - Available on {staff.days.join(", ")} at{" "}
            {staff.times.join(", ")}
          </li>
        ))}
      </ul>
      <h2>All Staff Members:</h2>
      <ul>
        {staffList.map((staff) => (
          <li key={staff.id}>
            {staff.name} - Available on {staff.days.join(", ")} at{" "}
            {staff.times.join(", ")}
            <div>
              <button
                className="remove"
                onClick={() => deleteStaff(staff.id)}
              >
                Remove
              </button>
              <button
                onClick={() => {
                  const newName = prompt(
                    "Enter new name for the staff member:"
                  );
                  const newDays = prompt(
                    "Enter new days (comma-separated) for the staff member:"
                  );
                  const newTimes = prompt(
                    "Enter new times (comma-separated) for the staff member:"
                  );
                  if (newName && newDays && newTimes) {
                    updateStaff(staff.id, {
                      ...staff,
                      name: newName,
                      days: newDays.split(","),
                      times: newTimes.split(","),
                    });
                  }
                }}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Add New Staff Member:</h2>
      <input
        type="text"
        placeholder="Name"
        value={newStaff.name}
        onChange={(e) => handleInputChange(e, "name")}
      />
      <input
        type="text"
        placeholder="Days (comma-separated)"
        value={newStaff.days.join(",")}
        onChange={(e) => handleInputChange(e, "days")}
      />
      <input
        type="text"
        placeholder="Times (comma-separated)"
        value={newStaff.times.join(",")}
        onChange={(e) => handleInputChange(e, "times")}
      />
      <button onClick={addStaff}>Add Staff</button>
    </div>
  );
};
export default StaffManagement;

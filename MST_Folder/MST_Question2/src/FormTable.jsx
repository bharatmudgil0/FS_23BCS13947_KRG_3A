import React, { useState } from "react";

function FormTable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.course) {
      alert("Please fill all fields");
      return;
    }

    setRecords([...records, formData]);

    // clear form
    setFormData({
      name: "",
      email: "",
      course: "",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>

      {records.length > 0 && (
        <table
          border="1"
          cellPadding="8"
          style={{ margin: "0 auto", borderCollapse: "collapse", border: "1px solid red" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FormTable;

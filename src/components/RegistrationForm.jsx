import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [course, setCourse] = useState("Diploma in IT");
  const [fullTime, setFullTime] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "") {
      setError("Username cannot be empty!");
      setSummary(false);
    } else if (password == "") {
      setError("Password cannot be empty!");
      setSummary(false);
    } else if (password != confirmPassword) {
      setError("Confirm Password is not the same as Password!");
      setSummary(false);
    } else {
      setError("");
      setSummary(true);
    }
  }

  return (
    <div>
      <h2>User Registration Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Username textbox */}
        <input
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={summary}
        />
        <br />

        {/* Password Box */}
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={summary}
        />
        <br />

        {/* Confirm Password Box */}
        <input
          type="password"
          placeholder="Enter your password again..."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={summary}
        />

        <br />

        {/* Course Dropdown List */}
        <label>
          Course:
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            disabled={summary}
          >
            <option value="Diploma in IT">Diploma in IT</option>
            <option value="Diploma in Accounting">Diploma in Accounting</option>
            <option value="Diploma in Business">Diploma in Business</option>
          </select>
        </label>
        <br />

        {/* Study Mode Radio Button */}
        <label>
          Study Mode
          <input
            type="radio"
            checked={fullTime}
            onChange={(e) => setFullTime(true)}
            disabled={summary}
          />
          Full-Time
          <input
            type="radio"
            checked={!fullTime}
            onChange={(e) => setFullTime(false)}
            disabled={summary}
          />
          Part-Time
        </label>
        <br />

        <button type="submit" disabled={summary}>
          Register
        </button>
      </form>

      {/* Displaye Summary */}
      {summary ? (
        <div>
          <h3>Registration Summary</h3>
          <p>Username: {username}</p>
          <p>Course: {course}</p>
          <p>Study Mode: {!fullTime ? "Part-Time" : "Full-Time"}</p>
        </div>
      ) : null}
    </div>
  );
}

export default RegistrationForm;

import React from "react";

const LandingPage = () => {
  return (
    <div>
      <h1>Employee details page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vijay</td>
            <td>24</td>
            <td>Male</td>
            <td>Front End Engineer</td>
          </tr>
          <tr>
            <td>Ram</td>
            <td>24</td>
            <td>Male</td>
            <td>Node JS developer</td>
          </tr>
          <tr>
            <td>Ram Reddy</td>
            <td>24</td>
            <td>Male</td>
            <td>Node JS developer</td>
          </tr>
          <tr>
            <td>Viajya Ram Reddy Nallamilli</td>
            <td>24</td>
            <td>Male</td>
            <td>Full Stack Developer(React + Node)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LandingPage;

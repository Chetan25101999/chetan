import React from "react";
import "./Idcard1.css";

const Idcard1 = () => {
  function StudentId(props) {
    return (
      <div class="id-card">
        <div class="card-header">
          <div class="university-logo">U</div>
          <h1>PUNE UNIVERSITY</h1>
          <p>OFFICIAL STUDENT IDENTIFICATION</p>
        </div>

        <div class="card-body">
          <div class="photo-container">
            <div class="photo-placeholder">STUDENT PHOTO</div>
          </div>

          <div class="student-info">
            <div class="info-row">
              <span class="info-label">Name</span>
              <span class="info-value">{props.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Roll No</span>
              <span class="info-value">{props.rollNo}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Age</span>
              <span class="info-value">{props.age}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Course</span>
              <span class="info-value">{props.studentClass}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Year:</span>
              <span class="info-value">{props.year}</span>
            </div>
            <div class="info-row">
              <span class="info-label">DOB:</span>
              <span class="info-value">{props.dob}</span>
            </div>
          </div>

          <div class="barcode"></div>

          <div class="signature">
            <div class="info-label">Authorized Signature</div>
            <div class="validity">This card is property of University Name</div>
          </div>
        </div>

        <div class="card-footer">
          If found, please return to University Administration Office
        </div>
      </div>
    );
  }

  return (
    <div>
      <StudentId
        name="Chetan Virendra Prasad"
        rollNo="1"
        year="3rd Year"
        dob="25/10/1999"
        age="26"
        studentClass="BCA"
      />

      <StudentId
        name="Chetan Virendra Prasad"
        rollNo="1"
        year="3rd Year"
        dob="25/10/1999"
        age="26"
        studentClass="BCA"
      />
    </div>
  );
};

export default Idcard1;

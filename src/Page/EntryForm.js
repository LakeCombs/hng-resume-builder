import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import firebaseApp from "../firebase";
import "./Entry.css";

const EntryForm = () => {
  const hist = useHistory();
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    telephone: "",
    LinkedIn: "",
    Location: "",
    ProfessionalSummary: "",

    company1: "",
    JobTitle1: "",
    dateStart1: "",
    dateFinish1: "",
    experienceWork11: "",
    experienceWork12: "",
    experienceWork13: "",
    experienceWork14: "",
    JobResponsibility1: "",

    company2: "",
    JobTitle2: "",
    dateStart2: "",
    dateFinish2: "",
    experienceWork21: "",
    experienceWork22: "",
    experienceWork23: "",
    experienceWork24: "",
    JobResponsibility2: "",

    company3: "",
    JobTitle3: "",
    dateStart3: "",
    dateFinish3: "",
    experienceWork31: "",
    experienceWork32: "",
    experienceWork33: "",
    experienceWork34: "",
    JobResponsibility3: "",

    Education1: "",
    dateStartEdu1: "",
    dateFinishEdu1: "",
    EduExpert1: "",

    Education2: "",
    dateStartEdu2: "",
    dateFinishEdu2: "",
    EduExpert2: "",

    Education3: "",
    dateStartEdu3: "",
    dateFinishEdu3: "",
    EduExpert3: "",

    Organization1: "",
    dateStartOrg1: "",
    dateFinishOrg1: "",
    qualification1: "",

    Organization2: "",
    dateStartOrg2: "",
    dateFinishOrg2: "",
    qualification2: "",

    Organization3: "",
    dateStartOrg3: "",
    dateFinishOrg3: "",
    qualification3: "",

    Skill1: "",
    Skill2: "",
    Skill3: "",
    Skill4: "",
    Skill5: "",
    Skill6: "",
  });

  const inputhandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    await firebaseApp.firestore().collection("resume").doc().set(inputField);
  };

  useEffect(() => {
    submit();
  }, []);

  return (
    <div className="EntryForm">
      <h2>Create your resume here</h2>
      <form className="forming">
        <div className="classInput">
          <label>Name:</label>
          <input name="name" value={inputField.name} onChange={inputhandler} />
        </div>
        <div className="classInput">
          <label>Email:</label>
          <input
            name="email"
            value={inputField.email}
            onChange={inputhandler}
          />
        </div>
        <div className="classInput">
          <label>Telephone:</label>
          <input
            name="telephone"
            value={inputField.telephone}
            onChange={inputhandler}
          />
        </div>
        <div className="classInput">
          <label>LinkedIn Profile:</label>
          <input
            name="LinkedIn"
            value={inputField.LinkedIn}
            onChange={inputhandler}
          />
        </div>
        <div className="classInput">
          <label>Location:</label>
          <input
            name="Location"
            value={inputField.Location}
            onChange={inputhandler}
          />
        </div>

        <div className="classInput">
          <label>Professional Summary:</label>
          <textarea
            name="ProfessionalSummary"
            value={inputField.ProfessionalSummary}
            onChange={inputhandler}
          ></textarea>
        </div>

        <div className="classInputWorkExperience">
          <label>Work Experience 1:</label>
          <input
            name="company1"
            placeholder="Job title"
            value={inputField.company1}
            onChange={inputhandler}
          />
          <input
            name="JobTitle1"
            placeholder="Job title"
            value={inputField.JobTitle1}
            onChange={inputhandler}
          />
          <span>Date start</span>
          <input
            type="date"
            name="dateStart1"
            value={inputField.dateStart1}
            onChange={inputhandler}
          />
          <span>Date finish:</span>
          <input
            type="date"
            name="dateFinish1"
            value={inputField.dateFinish1}
            onChange={inputhandler}
          />
          <input
            name="experienceWork11"
            value={inputField.experienceWork11}
            onChange={inputhandler}
            placeholder="work experience1"
          />
          <input
            name="experienceWork12"
            value={inputField.experienceWork12}
            onChange={inputhandler}
            placeholder="work experience2"
          />
          <input
            name="experienceWork13"
            value={inputField.experienceWork13}
            onChange={inputhandler}
            placeholder="work experience3"
          />
          <input
            name="experienceWork14"
            value={inputField.experienceWork14}
            onChange={inputhandler}
            placeholder="work experience4"
          />

          <textarea
            name="JobResponsibility1"
            value={inputField.JobResponsibility1}
            onChange={inputhandler}
            placeholder="Job responsibility"
          ></textarea>
        </div>

        <div className="classInputWorkExperience">
          <label>Work Experience 2:</label>
          {/* <span>+</span> */}
          <input
            name="company2"
            placeholder="Job title"
            value={inputField.company2}
            onChange={inputhandler}
          />
          <input
            name="JobTitle2"
            value={inputField.JobTitle2}
            onChange={inputhandler}
            placeholder="Job title"
          />
          <span>Date start</span>
          <input
            type="date"
            name="dateStart2"
            value={inputField.dateStart2}
            onChange={inputhandler}
          />
          <span>Date finish:</span>
          <input
            type="date"
            name="dateFinish2"
            value={inputField.dateFinish2}
            onChange={inputhandler}
          />
          {/* <input
            type="date"
            name="dateFinish2"
            value={inputField.dateFinish2}
          /> */}
          <input
            name="experienceWork21"
            value={inputField.experienceWork21}
            placeholder="work experience1"
            onChange={inputhandler}
          />
          <input
            name="experienceWork22"
            value={inputField.experienceWork22s}
            placeholder="work experience2"
            onChange={inputhandler}
          />
          <input
            name="experienceWork23"
            value={inputField.experienceWork23}
            placeholder="work experience3"
            onChange={inputhandler}
          />
          <input
            name="experienceWork24"
            value={inputField.experienceWork24}
            placeholder="work experience4"
            onChange={inputhandler}
          />
          <textarea
            name="JobResponsibility2"
            value={inputField.JobResponsibility2}
            placeholder="Job responsibility"
            onChange={inputhandler}
          ></textarea>
        </div>

        <div className="classInputWorkExperience">
          <label>Work Experience 3:</label>
          <input
            name="company3"
            placeholder="Job title"
            value={inputField.company3}
            onChange={inputhandler}
          />
          <input
            name="JobTitle3"
            value={inputField.JobTitle3}
            onChange={inputhandler}
            placeholder="Job title"
          />
          <span>Date start</span>

          <input
            type="date"
            onChange={inputhandler}
            name="dateStart3"
            value={inputField.dateStart3}
          />
          <span>Date finish:</span>
          <input
            type="date"
            name="dateFinish3"
            value={inputField.dateFinish3}
            onChange={inputhandler}
          />
          <input
            name="experienceWork31"
            onChange={inputhandler}
            value={inputField.experienceWork31}
            placeholder="work experience1"
          />
          <input
            name="experienceWork32"
            value={inputField.experienceWork32}
            onChange={inputhandler}
            placeholder="work experience2"
          />
          <input
            name="experienceWork33"
            value={inputField.experienceWork33}
            onChange={inputhandler}
            placeholder="work experience3"
          />
          <input
            name="experienceWork34"
            value={inputField.experienceWork33}
            onChange={inputhandler}
            placeholder="work experience4"
          />
          <textarea
            name="JobResponsibility3"
            value={inputField.JobResponsibility3}
            onChange={inputhandler}
            placeholder="Job responsibility"
          ></textarea>
        </div>

        <div className="classInputWorkExperience">
          <label>Education 1:</label>
          {/* <span>+</span> */}
          <input
            name="Education1"
            value={inputField.Education1}
            onChange={inputhandler}
            placeholder="Course of study"
          />
          <span>Date start</span>
          <input
            type="date"
            name="dateStartEdu1"
            value={inputField.dateStartEdu1}
            onChange={inputhandler}
          />
          <span>Date finish:</span>
          <input
            type="date"
            name="dateFinishEdu1"
            value={inputField.dateFinishEdu1}
            onChange={inputhandler}
          />
          <input
            name="EduExpert1"
            value={inputField.EduExpert1}
            onChange={inputhandler}
            placeholder="School"
          />
        </div>

        <div className="classInputWorkExperience">
          <label>Education 2:</label>

          <input
            name="Education2"
            value={inputField.Education2}
            onChange={inputhandler}
            placeholder="Course of study"
          />
          <span>Date start</span>
          <input
            type="date"
            name="dateStartEdu2"
            value={inputField.dateStartEdu2}
            onChange={inputhandler}
          />
          <span>Date finish:</span>
          <input
            type="date"
            name="dateFinishEdu2"
            value={inputField.dateFinishEdu2}
            onChange={inputhandler}
          />
          <input
            name="EduExpert2"
            value={inputField.EduExpert2}
            onChange={inputhandler}
            placeholder="School"
          />
        </div>

        <div className="classInputWorkExperience">
          <label>Education 3:</label>

          <input
            name="Education3"
            value={inputField.Education3}
            onChange={inputhandler}
            placeholder="Course of study"
          />
          <span>Date start</span>
          <input
            type="date"
            name="dateStartEdu3"
            value={inputField.dateStartEdu3}
            onChange={inputhandler}
          />
          <span>Date finish:</span>
          <input
            type="date"
            name="dateFinishEdu3"
            value={inputField.dateFinishEdu3}
            onChange={inputhandler}
          />
          <input
            name="EduExpert3"
            placeholder="School"
            value={inputField.EduExpert3}
            onChange={inputhandler}
          />
        </div>

        <div className="classInputWorkExperience">
          <label>Organization 1:</label>

          <input
            name="Organization1"
            value={inputField.Organization1}
            onChange={inputhandler}
            placeholder="Organization1"
          />
          <span>Date start</span>
          <input
            type="date"
            name="dateStartOrg1"
            value={inputField.dateStartOrg1}
            onChange={inputhandler}
          />
          <span>Date finish:</span>
          <input
            type="date"
            name="dateFinishOrg1"
            value={inputField.dateFinishOrg1}
            onChange={inputhandler}
          />
          <input
            name="OrgQlt1"
            value={inputField.OrgQlt1}
            onChange={inputhandler}
            placeholder="qualification1"
          />
        </div>

        <div className="classInputWorkExperience">
          <label>Organization 2:</label>

          <input
            name="Organization2"
            value={inputField.Organization2}
            onChange={inputhandler}
            placeholder="Organization2"
          />
          <span>Date start</span>
          <input
            type="date"
            name="dateStartOrg2"
            value={inputField.dateStartOrg2}
            onChange={inputhandler}
          />
          <span>Date finish:</span>
          <input
            type="date"
            name="dateFinishOrg2"
            value={inputField.dateFinishOrg2}
            onChange={inputhandler}
          />
          <input
            name="OrgQlt2"
            value={inputField.OrgQlt2}
            onChange={inputhandler}
            placeholder="qualification2"
          />
        </div>

        <div className="classInputWorkExperience">
          <label>Organization 3:</label>

          <input
            name="Organization3"
            value={inputField.Organization3}
            onChange={inputhandler}
            placeholder="Organization3"
          />
          <span>Date start</span>
          <input
            type="date"
            name="dateStartOrg3"
            value={inputField.dateStartOrg3}
            onChange={inputhandler}
          />
          <span>Date finish:</span>
          <input
            type="date"
            name="dateFinishOrg3"
            value={inputField.dateFinishOrg3}
            onChange={inputhandler}
          />
          <input
            name="OrgQlt3"
            value={inputField.OrgQlt3}
            placeholder="qualification3"
            onChange={inputhandler}
          />
        </div>

        <div className="classInputWorkExperience">
          <label>Skills:</label>
          <input
            name="Skill1"
            value={inputField.Skill1}
            placeholder="Skill 1"
            onChange={inputhandler}
          />
          <input
            name="Skill2"
            value={inputField.Skill2}
            onChange={inputhandler}
            placeholder="Skill 2"
          />
          <input
            name="Skill3"
            value={inputField.Skill3}
            placeholder="Skill 3"
            onChange={inputhandler}
          />
          <input
            name="Skill4"
            onChange={inputhandler}
            value={inputField.Skill4}
            placeholder="Skill 4"
          />
          <input
            name="Skill5"
            value={inputField.Skill5}
            placeholder="Skill 5"
            onChange={inputhandler}
          />
          <input
            name="Skill6"
            value={inputField.Skill6}
            placeholder="Skill 6"
            onChange={inputhandler}
          />
        </div>

        <button
          className="Button"
          onClick={() => {
            submit();
            hist.push("/resume");
          }}
        >
          Create Resume
        </button>
      </form>
    </div>
  );
};

export default EntryForm;

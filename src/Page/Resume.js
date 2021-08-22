import React, { useState, useEffect } from "react";
import firebaseApp from "../firebase";
import "./Resume.css";

const Resume = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await firebaseApp
      .firestore()
      .collection("resume")
      .onSnapshot((snapshot) => {
        const resume = [];
        snapshot.forEach((doc) => {
          resume.push({ ...doc.data(), key: doc.id });
        });

        setData(resume);

        console.log(setData);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data.map(
        ({
          id,
          name,
          email,
          telephone,
          LinkedIn,
          Location,
          ProfessionalSummary,

          company1,
          JobTitle1,
          dateStart1,
          dateFinish1,
          experienceWork11,
          experienceWork12,
          experienceWork13,
          experienceWork14,
          JobResponsibility1,

          company2,
          JobTitle2,
          dateStart2,
          dateFinish2,
          experienceWork21,
          experienceWork22,
          experienceWork23,
          experienceWork24,
          JobResponsibility2,

          company3,
          JobTitle3,
          dateStart3,
          dateFinish3,
          experienceWork31,
          experienceWork32,
          experienceWork33,
          experienceWork34,
          JobResponsibility3,

          Education1,
          dateStartEdu1,
          dateFinishEdu1,
          EduExpert1,

          Education2,
          dateStartEdu2,
          dateFinishEdu2,
          EduExpert2,

          Education3,
          dateStartEdu3,
          dateFinishEdu3,
          EduExpert3,

          Organization1,
          dateStartOrg1,
          dateFinishOrg1,
          qualification1,

          Organization2,
          dateStartOrg2,
          dateFinishOrg2,
          qualification2,

          Organization3,
          dateStartOrg3,
          dateFinishOrg3,
          qualification3,

          Skill1,
          Skill2,
          Skill3,
          Skill4,
          Skill5,
          Skill6,
        }) => (
          <div className="ResumeContainer" key={id}>
            <h2>Here is your resume {name}</h2>
            <div className="ResumeContent">
              <div className="leftSide">
                <div className="name">
                  <h1>{name}</h1>
                  <span>Profession</span>
                </div>

                <div className="Education">
                  <h1 className="leftSideHead">Education</h1>

                  <div className="EducationDetails">
                    <h2>{Education1}</h2>
                    <h4>{EduExpert1}</h4>
                    <h5>
                      {dateStartEdu1} - {dateFinishEdu1}
                    </h5>
                  </div>

                  <div className="EducationDetails">
                    <h2>{Education2}</h2>
                    <h4>{EduExpert2}</h4>
                    <h5>
                      {dateStartEdu2} - {dateFinishEdu2}{" "}
                    </h5>
                  </div>

                  <div className="EducationDetails">
                    <h2>{Education3}</h2>
                    <h4>{EduExpert3}</h4>
                    <h5>
                      {dateStartEdu3} - {dateFinishEdu3}
                    </h5>
                  </div>
                </div>

                <div className="Skillcollection">
                  <h1 className="leftSideHead">Skill</h1>
                  <h4>{Skill1}</h4>
                  <h4>{Skill2}</h4>

                  <h4>{Skill3}</h4>

                  <h4>{Skill4}</h4>

                  <h4>{Skill5}</h4>

                  <h4>{Skill6}</h4>
                </div>

                <div className="Skillcollection">
                  <h1 className="leftSideHead">Education</h1>

                  <div className="Educationcontainer">
                    <h4> Course</h4>
                    <div className="classnameandTime">
                      <p>School</p>
                      <span>timeStart - timmeEnd</span>
                    </div>
                  </div>

                  <div className="Educationcontainer">
                    <h4> Course</h4>
                    <div className="classnameandTime">
                      <p>School</p>
                      <span>timeStart - timmeEnd</span>
                    </div>
                  </div>
                  <div className="Educationcontainer">
                    <h4> Course</h4>
                    <div className="classnameandTime">
                      <p>School</p>
                      <span>timeStart - timmeEnd</span>
                    </div>
                  </div>
                </div>

                <div className="Skillcollection">
                  <h1 className="leftSideHead">Organization</h1>

                  <div className="Educationcontainer">
                    <h4> {Organization1}</h4>
                    <div className="classnameandTime">
                      <p>{qualification1}</p>
                      <span>
                        {dateStartOrg1} - {dateFinishOrg1}
                      </span>
                    </div>
                  </div>
                  <div className="Educationcontainer">
                    <h4> {Organization2}</h4>
                    <div className="classnameandTime">
                      <p>{qualification2}</p>
                      <span>
                        {dateStartOrg2} - {dateFinishOrg2}
                      </span>
                    </div>
                  </div>
                  <div className="Educationcontainer">
                    <h4> {Organization3}</h4>
                    <div className="classnameandTime">
                      <p>{qualification3}</p>
                      <span>
                        {dateStartOrg3} - {dateFinishOrg3}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightSide">
                <div className="ProfessionalSummay">
                  <p>{ProfessionalSummary}</p>{" "}
                </div>

                <div className="contactInfo">
                  <p>tel: {telephone}</p>
                  <p>location: {Location}</p>
                  <p>email: {email}</p>
                  <p>linkedin: {LinkedIn}</p>
                </div>

                <div className="Experience">
                  <h1>Experience</h1>
                  <div className="ExperinceSample">
                    <h3>{company1}</h3>
                    <div className="classnameandTime">
                      <p>{JobTitle1}</p>
                      <span>
                        {dateStart1} - {dateFinish1}
                      </span>
                    </div>
                    <p className="jobResponsibily">{JobResponsibility1}</p>
                    <ul className="expplist">
                      <li>{experienceWork11}</li>
                      <li>{experienceWork12}</li>
                      <li>{experienceWork13}</li>
                      <li>{experienceWork14}</li>
                    </ul>
                  </div>
                </div>
                <div className="Experience">
                  <h1>Experience</h1>
                  <div className="ExperinceSample">
                    <h3>{company2}</h3>
                    <div className="classnameandTime">
                      <p>{JobTitle2}</p>
                      <span>
                        {dateStart2} - {dateFinish2}
                      </span>
                    </div>
                    <p className="jobResponsibily">{JobResponsibility1}</p>
                    <ul className="expplist">
                      <li>{experienceWork21}</li>
                      <li>{experienceWork22}</li>
                      <li>{experienceWork23}</li>
                      <li>{experienceWork24}</li>
                    </ul>
                  </div>
                </div>
                <div className="Experience">
                  <h1>Experience</h1>
                  <div className="ExperinceSample">
                    <h3>{company3}</h3>
                    <div className="classnameandTime">
                      <p>{JobTitle3}</p>
                      <span>
                        {dateStart3} - {dateFinish3}
                      </span>
                    </div>
                    <p className="jobResponsibily">{JobResponsibility1}</p>
                    <ul className="expplist">
                      <li>{experienceWork31}</li>
                      <li>{experienceWork32}</li>
                      <li>{experienceWork33}</li>
                      <li>{experienceWork34}</li>
                    </ul>
                  </div>
                </div>

                <div className="Experience">
                  <h1>Skills</h1>

                  <ul className="expplist">
                    <li>
                      Professional Summary: Lorem ipsum dolor sit amet
                      consectetur
                    </li>
                    <li>
                      Professional Summary: Lorem ipsum dolor sit amet
                      consectetur
                    </li>
                    <li>
                      Professional Summary: Lorem ipsum dolor sit amet
                      consectetur
                    </li>
                    <li>
                      Professional Summary: Lorem ipsum dolor sit amet
                      consectetur
                    </li>

                    <li>
                      Professional Summary: Lorem ipsum dolor sit amet
                      consectetur
                    </li>
                    <li>
                      Professional Summary: Lorem ipsum dolor sit amet
                      consectetur
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Resume;

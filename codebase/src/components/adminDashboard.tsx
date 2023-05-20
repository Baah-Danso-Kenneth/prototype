/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useRef } from "react";
import heroImage from "../assets/images/Hero.png";
import { Chart } from "./barchat";
import * as Styles from "../styles/adminDashboard.styled";
import { DashboardCard } from "./dashboardCard";
import { AdminDashboardNotifications } from "./adminDashboardNotifications";
import * as Constants from "../constants/constant";
import * as Interface from "../utils/types/adminPage";
import { api } from "../utils/api";
import { Logout } from "./logout";
import { useControlPopUp } from "context/popUp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "./shared/loader";

export function AdminDashboard() {
  const [successData, setSuccesData] = useState<Interface.responseData>({
    data: {
      totalStudents: 0,
      totalLecturers: 0,
      totalAssignments: 0,
      totalSubmissions: 0,
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { logoutPopUp } = useControlPopUp();
  const errorToastDisplayed = useRef(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await api.getSystemData();
        setSuccesData(data);
      } catch (error) {
        if (!errorToastDisplayed.current) {
          toast.error(Constants.RequestError);
          errorToastDisplayed.current = true;
        }
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    Constants.cardData[0].Total = successData.data.totalLecturers;
    Constants.cardData[1].Total = successData.data.totalStudents;
    Constants.cardData[2].Total = successData.data.totalAssignments;
    Constants.cardData[3].Total = successData.data.totalSubmissions;
  }, [successData]);

  const y_axix = [1000, 750, 500, 250, 0,]
  return (
    <>
       {
        logoutPopUp && <Logout/>
       }
       {
        loading && <Loader incomingDataType="System Data"/>
       }
      {
        <Styles.DashboardPageContainer>
          {
            !loading && <>
              <div className="left">
                <div className="welcome_container">
                  <h1>Welcome back, Admin</h1>
                  <p>We are happy to have you onboard, please here are the current statistics of
                    the application 
                  </p>
                  <img src={heroImage} alt="" />
                </div>
                <div className="stats">
                  <p>Overview</p>
                  <Styles.Container>
                    <Styles.DashboardContainer>
                      {Constants.cardData.map((card, index) => (
                        <DashboardCard
                          key={index}
                          Src={`${card.src}`}
                          description={card.Text}
                          Total={card.Total}
                        />
                      ))}
                    </Styles.DashboardContainer>
                  </Styles.Container>
                </div >
                <div className="sutudent-progress">
                  <p>Student Progress</p>
                  <div className="graph">
                    <div className="y-axis">
                      {y_axix.map((value) => (
                        <div className="indictor" key={value}>
                          <span>{value}</span>
                          <span>-</span>
                        </div>
                      ))}
                    </div>
                    <div className="x-axis">
                      {y_axix.map((value, index) => (
                        <div className="indictor" key={index}>
                          <span>-</span>
                          <span>{index}</span>
                        </div>
                      ))}
                    </div>
                    <Chart />
                  </div>
                </div>
              </div>

              <div className="right">
                <AdminDashboardNotifications />
              </div>
            </>
          }
        
        </Styles.DashboardPageContainer>
      }
    </>
  );
}

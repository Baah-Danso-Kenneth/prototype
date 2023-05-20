import * as Styles from "../styles/adminNotifications.styles"

export function AdminDashboardNotifications() {

    const notifications = [
        {
            message: "you have a bug that needs to be ..",
            time: "Just now",
            image: require("../assets/images/totalLecturers.png"),
        },
        {
            message: "new user registered",
            time: "2 hours ago",
            image: require("../assets/images/totalLecturers.png"),
        },
        {
            message: "another notification message",
            time: "2 hours ago",
            image: require("../assets/images/totalLecturers.png"),

        },
        {
            message: "Emmanuel Logged into the system",
            time: "2 hours ago",
            image: require("../assets/images/totalLecturers.png"),
        },
        {
            message: "another notification message",
            time: "2 hours ago",
            image: require("../assets/images/totalLecturers.png"),
        },
    ];

    return (
        <Styles.Container>
            <Styles.notifictionContainer>
                <h3>Notifications</h3>
                {notifications.map(notification => (
                    <div key={notification.message} className="notification">
                        <img src={notification.image} alt="" />
                        <p>
                            <span>{notification.message}</span>
                            <span>{notification.time}</span>
                        </p>
                    </div>
                ))}
            </Styles.notifictionContainer>
            <Styles.assignmentsContainer>
                <h3>Assignment status</h3>
                <ul>
                    <li>
                        <p>students </p>
                        <p>Due Date</p>
                        <p>Status</p>
                    </li>
                    <li>
                        <p>John Doe </p>
                        <p>March 12, 2022</p>
                        <p>
                            <span className="progress">o</span>
                            <span>In Progress</span>
                        </p>
                    </li>
                    <li>
                        <p>Thomas Darkoh </p>
                        <p>July 20, 2022</p>
                        <p>
                            <span className="completed">o</span>
                            <span>Completed</span>
                        </p>
                    </li>
                    <li>
                        <p>Kenneth Dansoh </p>
                        <p>March 6, 2022</p>
                        <p>
                            <span className="progress">o</span>
                            <span>In Progress</span>
                        </p>
                    </li>
                    <li>
                        <p>Ernest Brayce </p>
                        <p>March 12, 2022</p>
                        <p>
                            <span className="completed">o</span>
                            <span>Completed</span>
                        </p>
                    </li>
                    <li>
                        <p>Auguast Smith </p>
                        <p>August 10, 2022</p>
                        <p>
                            <span className="progress">o</span>
                            <span>In Progress</span>
                        </p>
                    </li>
                    <li>
                        <p>Jude Kofie </p>
                        <p>July 20, 2022</p>
                        <p>
                            <span className="completed">o</span>
                            <span>Completed</span>
                        </p>
                    </li>
                </ul>
            </Styles.assignmentsContainer>
        </Styles.Container>
    )
}

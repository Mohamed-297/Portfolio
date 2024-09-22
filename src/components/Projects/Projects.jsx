import "./projects.css"
import eCommerce from "../../images/Screenshot_21-9-2024_171815_e-commerce-eight-puce.vercel.app.jpeg"
import dashboard from "../../images/Screenshot_21-9-2024_21511_basic-dashboard-55sf.vercel.app.jpeg"
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {

    return (
        <div className='project'>
            <div className="projectWrapper">
                <div  className="eCommerceContainer">
                    <a target="blank" href="https://e-commerce-eight-puce.vercel.app/"><img className="eCommerce" src={eCommerce} alt="eCommerce" /></a>
                    <div className="bottomOfeCommerce">E-Commerce</div>
                </div>
                <div  className="dashboardContainer">
                    <a target="blank" href="https://basic-dashboard-55sf.vercel.app/"><img className="dashboard" src={dashboard} alt="Sneakers" /></a>
                    <div className="bottomOfDashboard">Dashboard</div>
                </div>
            </div>
                <h3 className="moreProjects">More projects on my Github <a target="blank" href="https://github.com/Mohamed-297"><GitHubIcon className="socialMediaIcon" /></a>
                </h3>
        </div>
    )
}

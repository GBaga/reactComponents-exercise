import "./profileCard.css";
import { Button } from "../button/Button";

export const ProfileCard = (props) => {

    return (
        <div className="profile-card">
            <div className="card-avatar">
            <img src={props.avatar} alt="avatar-img" />
            </div>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
            <Button btnLabel="More"></Button>
        </div>
    );
};
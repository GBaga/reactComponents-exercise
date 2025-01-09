import "./featureBox.css"

export const FeatureBox = (props) => {
    return (
        <div className="feature-box">
            <img className="feature-icon" src={props.url}></img>
            <div className="feature-text-box">
            <h3 className="feature-title">{props.title}</h3>
            <p className="feature-description">{props.description}</p>
            </div>
         </div>
    );
};
import "./companyLogo.css"

export const CompanyLogo = (props) => {
    return (
        <div className="company-logo">
            <img src="https://cdn0.iconfinder.com/data/icons/essential-elements-2/1000/navigation___arrow_arrows_pointer_cursor_direction_turn_light-512.png" alt={props.altText} />
            <h2 className="company-name">{props.companyName}</h2>
        </div>
    )
}
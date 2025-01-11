import './button.css'

export const Button = (props) => {

  const onClick = () => {
    alert("Hello");
  }

  return <button 
  onClick = {onClick}
  style={{...props.style}}  className={`glow-on-hover `}> {props.btnLabel} 
  </button>
}


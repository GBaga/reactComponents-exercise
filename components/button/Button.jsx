import './button.css'

export const Button = (props) => {

  return <button style={{color: props.color, fontSize: props.fontSize}}  className={`glow-on-hover `}> {props.btnLabel} </button>
}


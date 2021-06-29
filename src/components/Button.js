const Button = ({func, label}) => {
    return (
        <button className='btn' onClick={func}>{label}</button>
    )
}
export default Button

const container = document.querySelector(`#container`);

const randomColor = () => {
    return `#` + Math.random().toString(16).slice(-6)
    
}
const App = () => {
    const [circleColors, setCircleColors] = React.useState([
        randomColor(),
        randomColor(),
        randomColor(),

    ])
    const generateRandomColors = () => {
        setCircleColors([randomColor(), randomColor(), randomColor()])
    }
  
    console.log(randomColor())
    const styles = {
        
        height: `100px`,
        width: `100px`,
        borderRadius: `100%`,
        padding: `10px`,
        margin: `20px`,


    }
    return (
        <>
            <div style={{...styles, backgroundColor: randomColor()}}></div>
            <div style={{...styles, backgroundColor: randomColor()}}></div>
            <div style={{...styles, backgroundColor: randomColor()}}></div>
            <button onClick={setCircleColors}>Click me</button>
        </>
    )

}


    


const root = ReactDOM.createRoot(container)
root.render(<App />)
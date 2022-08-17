//audio files from demo project
const audioBank = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

//my code starts
function App() {

    React.useEffect(() => {
        addEventListener('keypress', handleKeyPress);
    }, []);

    const [text, setText] = React.useState("");

    function handleKeyPress(e) {
        const pad = audioBank.find(
            (item) => {
                return (item.keyTrigger === e.key.toUpperCase())
            }
        );
        pad && document.getElementById(pad.id).click();
    }

    function playSound(e) {
        setText(e.target.id);
        const audio = document.getElementById(e.target.outerText);
        audio.play();
        document.getElementById("drum-machine").style.boxShadow = "0px 0px 23px 5px white";
        document.getElementById("display").style.boxShadow = "0px 0px 18px 1px white";
        setTimeout(() => {
            setText("");
            document.getElementById("drum-machine").style.boxShadow = "none";
            document.getElementById("display").style.boxShadow = "none";
        }, 200);

    }
    return (
        <>
            <header>Drum Machine</header>
            <div id="drum-machine">
                <div id="display">{text}</div>
                <div id="buttonsHolder">
                    {audioBank.map((element) => {
                        return (
                            <div
                                className="drum-pad"
                                onClick={playSound}
                                id={element.id}
                            >
                                {element.keyTrigger}
                                <audio
                                    className='clip'
                                    id={element.keyTrigger}
                                    src={element.url}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <footer>created with ♥ by Nirajan</footer>
        </>
    )
}
ReactDOM.render(<App />, document.getElementById("root"));
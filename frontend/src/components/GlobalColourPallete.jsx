const darkReddish = 'rgba(103, 60, 79, 1)';
const muddyYellow = 'rgb(189, 191, 79)';
const incorrectRed = 'rgba(112, 7, 2, 0.902)';
const correctGreen = 'rgba(32, 176, 54, 0.753)';

const greyishText = 'rgb(129, 129, 129)';
const veryLightBlue = 'rgb(224, 237, 244)';
const darkGreyishText = 'rgb(62, 62, 62)';

const soundBlack = 'rgb(32, 32, 32)';
const hoverBlack = 'rgb(64, 64, 64)';

const hoverRed = 'rgb(255, 167, 157)';
const activeRed = 'rgb(255, 40, 16)';

const textGrey = 'rgb(109, 109, 109)';
const squareBorder = 'rgb(81, 81, 81)';

const lightBlue = 'rgb(192, 254, 255)';
const cyanBlue = 'rgb(151, 253, 255)';

const Pallete = {
    "default": true,
    "font_family": 'poppins',
    "currWhite": 'white',
    "currBlack": 'black',
    "header": {
        "default": darkReddish
    },
    "footer": {
        "default": muddyYellow,
        "incorrect": incorrectRed,
        "correct": correctGreen,
        "border": darkReddish ,
        "checkButton": {
            "border_shadow": darkReddish,
            "hover_active": veryLightBlue
        }
    },
    "optionsButton": {
        "default": 'white',
        "text": greyishText,
        "border_shadow": darkReddish,
        "hover_active_bg": veryLightBlue,
        "hover_active_text": darkGreyishText,
    },
    "text": {
        "default": darkGreyishText
    },
    "border": {
        "default": 'black'
    },
    "SoundButton": {
        "default": soundBlack,
        "active": hoverBlack
    },
    "DeleteButton": {
        "default": 'white',
        "border_shadow": darkReddish,
        "hover": hoverRed,
        "active": activeRed
    },
    "SquareButton": {
        "text": textGrey,
        "default": 'white',
        "border_shadow": squareBorder,
        "hover_active": veryLightBlue,
        "text_hover": hoverBlack,
    },
    "ImageDisplay": {
        "default": 'white',
        "text": textGrey,
        "text_active": hoverBlack,
        "border_shadow": darkReddish,
        "hover": veryLightBlue,
        "active": lightBlue
    },
    "CharDisplay": {
        "border_shadow": darkReddish,
        "text": hoverBlack,
        "hover": veryLightBlue,
        "active": lightBlue
    }
}

export default Pallete;
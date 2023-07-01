import { vowels, words, words2, Consonants, VowelSoundMapped } from "./StaticData";
  
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Ex1_PromptGen = (exType) => {
    if (exType === "vowels") {
        const [correct, second, third] = shuffleArray(vowels).slice(0, 3);  
        const transliterationArray = shuffleArray([correct[1], second[1], third[1]]);
        return {
            "exercise_hint": "Notice the double letters!",
            "correct_option": correct[1],
            "displayCharacter": correct[0],
            "optionsArray": transliterationArray,
            "answer_description": `Answer is ${correct[1]}`
        };
    } else {
        const [correct, second, third] = shuffleArray(Consonants).slice(0, 3);  
        const transliterationArray = shuffleArray([correct[1], second[1], third[1]]);
        return {
            "exercise_hint": "Notice the double letters!",
            "correct_option": correct[1],
            "displayCharacter": correct[0],
            "optionsArray": transliterationArray,
            "answer_description": `Answer is ${correct[1]}`
        };
    }
}

// Image
const imageQuestions = [
    {
        "character": 'आ',
        "word": 'आकाश',
        "eng": "sky",
        "image": "https://img.freepik.com/free-photo/cloud-sky-twilight-times_74190-4017.jpg"
    },
    {
        "character": 'ई',
        "eng": "pickle",
        "word": 'ईचर',
        "image": "https://www.ticklingpalates.com/wp-content/uploads/2022/05/mango-pickle-500x500.jpg"
    },
    {
        "character": 'आ',
        "eng": "mango",
        "word": 'आम',
        "image": "https://static.vecteezy.com/system/resources/previews/011/502/022/original/an-illustration-of-cute-mango-fruit-hand-drawn-cartoon-free-png.png"
    },
]
const Ex2_PromptGen = (exType) => {
    if (exType === "vowels") {
        const imgQ = imageQuestions[Math.floor(Math.random() * imageQuestions.length)];
        const filteredVowels = vowels.filter((value) => value[0] !== imgQ.character);
        const [second, third] = shuffleArray(filteredVowels).slice(0, 2);
        const transliterationArray = shuffleArray([imgQ.character[0], second[0], third[0]]);
        return {
            "exercise_hint": "remember to pronounce the name before picking your answer",
            "correctOption": imgQ.character[0],
            "optionsArray": transliterationArray,
            "imgSrc": imgQ.image,
            "answer_description": `Answer is ${imgQ.character[0]} | ${imgQ.word} (${imgQ.eng})`
        };
    } else {
        
    }
}

const Ex4_PromptGen = (exType) => {
    if (exType === "vowels") {
        const soundSrc = false;
        const [first, second, third, fourth] = shuffleArray(vowels).slice(0, 4);
        const correctOrder = [first[0], second[0], third[0], fourth[0]];
        const optionsArray = shuffleArray([first[0], second[0], third[0], fourth[0]]);
        return {
            "exercise_hint": "listen carefully for each sound",
            "sound": soundSrc,
            "correctOrder": correctOrder,
            "optionsArray": optionsArray,
            "answer_description": `Correct Order: ${correctOrder[0]} - ${correctOrder[1]} - ${correctOrder[2]} - ${correctOrder[3]}`
        };
    }   
}

const Ex5_PromptGen = (exType) => {
    if (exType === "vowels") {
        const word_extra = words2[Math.floor(Math.random() * words2.length)]
        const word = word_extra[0];
        const correctChar = word[0];
        const incompleteText = word.slice(1);
        let second = vowels[Math.floor(Math.random() * vowels.length)];
        while (second[0] === word[0]) {
            second = vowels[Math.floor(Math.random() * vowels.length)];
        }

        let third = vowels[Math.floor(Math.random() * vowels.length)];
        while (third[0] === word[0] || third[0] === second[0]) {
            third = vowels[Math.floor(Math.random() * vowels.length)];
        }

        let fourth = vowels[Math.floor(Math.random() * vowels.length)];
        while (fourth[0] === word[0] || fourth[0] === second[0] || fourth[0] === third[0]) {
            fourth = vowels[Math.floor(Math.random() * vowels.length)];
        }
        const options = [word[0], second[0], third[0], fourth[0]];
        return {
            "exercise_hint": "try to remember if you have heard of the word in your previous exercises",
            "correctOption": correctChar,
            "incompleteText": incompleteText,
            "optionsArray": shuffleArray(options),
            "answer_description": `${word_extra[0]} (${word_extra[1]}) means '${word_extra[2]}'`
        };   
    } else {

    }
}

const Ex6_PromptGen = (exType) => {
    if (exType === "vowels") {
        const soundSrc = false;
        const [correct, second, third] = shuffleArray(vowels).slice(0, 3);  
        const transliterationArray = shuffleArray([correct[0], second[0], third[0]]);
        return {
            "exercise_hint": "be mindful of the difference in the sounds of similar characters", 
            "sound": VowelSoundMapped[correct[0]],
            "optionsArray": transliterationArray,
            "correctOption": correct[0],
            "answer_description": `Sound of ${correct[0]}`
        }   
    } else {
        
    }
}

const Ex7_PromptGen = (exType) => {
    if (exType === "vowels") {
        const character = vowels[Math.floor(Math.random() * vowels.length)][0];
        return {
            "exercise_hint": "Insert ex7 hint ./QuestionCombos.js",
            "character": character,
            "answer_description": `Correct Answer was ${character}`
        }
    } else {

    }
}

const ExerciseDataGen = {
    "Ex1": {
        "num": 1,
        "getData": Ex1_PromptGen
    },
    "Ex2": {
        "num": 2,
        "getData": Ex2_PromptGen
    },
    "Ex4": {
        "num": 4,
        "getData": Ex4_PromptGen
    },
    "Ex5": {
        "num": 5,
        "getData": Ex5_PromptGen
    },
    "Ex6": {
        "num": 6,
        "getData": Ex6_PromptGen
    },
    "Ex7": {
        "num": 7,
        "getData": Ex7_PromptGen
    }
}

// Generate data round-wise. Each round contains 10 Exercises
// export {getRandomEx};
export {ExerciseDataGen}
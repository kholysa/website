import DPM from '../Images/dpmmain.jpg';
import MMIRROR from '../Images/mmirrormain.jpg';
import reactHexagon from '../Images/react-hexagon.png';
import codejam from '../Images/codeJam.png';
import mchacks from '../Images/mchacks.png';



const hobbies = [
    {
        BoxTitle:"Magic Mirror",
        BoxBlurb: "Hands-free smart mirror",
        BoxImage: MMIRROR,
        BoxModal: "The Magic Mirror is a smart mirror, designed to be operated with hands free technology. It displays a user customisable set of stocks from international markets. Furthermore, it shows you your selected city’s weather in a high contrast, easy to view window. \n" +
        "Switching between the Stocks, Weather and DateTime View is done with a hand swipe in front of the IR sensor, placed behind the glass. This keeps your mirror clean, and easy to use. \n" +
        "Finally, the data you display (stocks, weather) is chosen by a companion Android application. Just select the tickers you want, send the settings to your Raspberry Pi through Bluetooth and voila! Your updated stocks and weather data appear on the screen."
    },
    {
        BoxTitle: "LeJos Robot Design",
        BoxBlurb: "Design, test and build a lego robot",
        BoxImage: DPM,
        BoxModal:"Tasked with implementing an autonomous robot, capable of navigation via sound and light sensors. This group project involved an extensive documentation file for tracking issues and following updates to the system code.\n" +
        "My role as Head of Testing Documentation involved testing all newly written code to its breaking point. The documentation had to be thorough and clear for the developers to understand where things went wrong. I would cross-check with our initial specifications to see if our tests had passed or failed. \n\nOur bot's name was also Rampo in case you were wondering"
    },
    {
        BoxTitle: "This website",
        BoxBlurb: "Built using ReactJS, and other node modules",
        BoxImage: reactHexagon,
        BoxModal: "Built using React 16 with big help from 'create-react-app' and the skills I learned from internship at District M. A single page application with a responsive layout is (as I'm told) the key to attracting recruiters. So let me know in the contact form in the footer if this tactic is working!"
    }
];

export const coding = [
    {
        BoxTitle: "Code.jam() ",
        BoxBlurb: "Smaller McGill hackathon, participated for 3 years and counting!",
        BoxImage: codejam,
        BoxModal: "Code.Jam() projects are diverse. From big data to course scheduling for a hypothetical student population."
    },
    {
        BoxTitle:"McHacks",
        BoxBlurb: "McGill's largest hackathon, participated once in 2017 and intend to continue",
        BoxImage: mchacks,
        BoxModal: "McHacks allowed our team to start development on an Android App. It's a picture sharing application and would be perfect for use in events and small get togethers!"
    }
];
export default hobbies;
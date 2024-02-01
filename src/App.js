import MainComponent from "./components/MaiComponent/MainComponent";
import Star from "./images/Star";

function App() {
  const data = {
    fontFamily: "'Alata', monospace",
    headerFontFamily: "'Noto', sans-serif",
    textColor: "#4D423F",
    background: "#EDE8DB",

    heading: "Class Scheduled",

    classes: [
      {
        day: "mon",
        title: "Morning Flow",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
        icon: <Star color="#B4A883" />,
      },
      {
        day: "Tue",
        title: "Power Yoga",
        info: "Lorem Ipsum is simply dummy simply dummy text of the printing and typesetting industry. ,",
        icon: <Star color="#B4A883" />,
      },
      {
        day: "Wed",
        title: "Hatha Yoga",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
        icon: <Star color="#B4A883" />,
      },
      {
        day: "Thu",
        title: "Restorative Yoga",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
        icon: <Star color="#B4A883" />,
      },
      {
        day: "Frid",
        title: "Weekend warrior flow",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
        icon: <Star color="#B4A883" />,
      },
    ],
    link: "www.reallygreatsite.com",
  };
  return (
    <div
      style={{
        "--textColor": data.textColor,
        "--background": data.background,
        fontFamily: data.fontFamily,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;

import MainComponent from "./components/MaiComponent/MainComponent";
import Star from "./images/Star";

function App() {
  const data = {
    fontFamily: "'Alata', monospace",
    headerFontFamily: "'Noto', sans-serif",
    primaryColor: "#4D423F",
    background: "#FFFBEB",
    heading: "Class Scheduled",
    icon: <Star color="#B4A883" />,
    classes: [
      {
        day: "mon",
        title: "Morning Flow",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
      },
      {
        day: "Tue",
        title: "Power Yoga",
        info: "Lorem Ipsum is simply dummy simply dummy text of the printing and typesetting industry. ,",
      },
      {
        day: "Wed",
        title: "Hatha Yoga",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
      },
      {
        day: "Thu",
        title: "Restorative Yoga",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
      },
      {
        day: "Frid",
        title: "Weekend warrior flow",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ,",
      },
    ],
    link: "www.reallygreatsite.com",
  };
  return (
    <div
      style={{
        "--primaryColor": data.primaryColor,

        fontFamily: data.fontFamily,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;

import Header from "@components/Header";
import Footer from "@components/Footer";
import Card from "@components/Card";

function App() {
  const name = "최은주";
  const birthYear = 2003;
  const birthday = "5월 22일";
  const age = 2026 - birthYear;
  const hobby = ["게임", "음악"];
  const mbti = "ENTP";

  return (
    <>
      <Header />
      <main>
        <Card
          name={name}
          age={age}
          birthday={birthday}
          hobby={hobby}
          mbti={mbti}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";

const AnimationComponent = () => {
  const [sentences, setSentences] = useState([
    "Next School Project Management",
    "Streamlines Administratives tasks",
    "Enhance Communications",
    "Makes School Works Very Easy",
  ]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContent(false);
      setTimeout(() => {
        setCurrentSentenceIndex(
          (prevIndex) => (prevIndex + 1) % sentences.length
        );
        setShowContent(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [sentences]);

  return (
    <h1
      className="font-bold text-white text-4xl text-center"
      style={{
        transition: "opacity 0.5s ease",
        opacity: showContent ? 1 : 0,
      }}
    >
      {sentences[currentSentenceIndex]}
    </h1>
  );
};
9;

export default AnimationComponent;

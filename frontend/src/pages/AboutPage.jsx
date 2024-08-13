import "../App.css";

function AboutPage() {
  return (
    <div className="full-page-container">
      <div className="cocktail-page">
        <div className="left-section">
          <p className="text-about-page">
            We love drinking so we started an app that helps bartenders get
            organized and perfect their kraft.
          </p>
        </div>
        <div className="right-section">
          <img className="image-half" src="../../public/drink2.png" />
        </div>
      </div>
      <div className="strip-container">
        <p className="strip-text">
          <span className="strip-text">POUR DECISIONS</span>
          <span className="strip-text">+++</span>
          <span className="strip-text-hand">Join the Club</span>
          <span>+++</span>
          <span className="strip-text">WE ARE COOL</span>
          <span>+++</span>
          <span className="strip-text">POUR DECISIONS</span>
          <span className="strip-text">+++</span>
          <span className="strip-text">WE ARE COOL</span>
          <span>+++</span>
          <span className="strip-text-hand">Join the Club</span>
          <span>+++</span>
          <span className="strip-text">POUR DECISIONS</span>
        </p>
      </div>
      <div className="down-container">
        <div className="line-top-container"></div>
        {/* <span className="big-logo">POUR DECISIONS</span> */}
        <div className="line-down-container"></div>
      </div>
    </div>
  );
}
export default AboutPage;

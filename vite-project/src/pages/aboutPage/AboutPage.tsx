import { Route, Routes } from "react-router-dom";
/* Add About.tsx component, which this will route to. */
const AboutPage = () => {
  return (
    <Routes>
        <Route index element = {<div>AboutPage</div>} />
    </Routes>
  );
}

export default AboutPage
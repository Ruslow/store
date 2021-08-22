import React, { useState } from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  const text = `In March of 1912, a man named John Lane purchased a box plant in Altavista, Virginia. His son, Ed Lane, was 21 at the time and had little manufacturing experience. Ed was encouraged by his father to try his hand at starting a chest factory in the newly acquired plant. The Lane family didn't know how successful their new venture was going to be, therefore, they didn't start out putting their name on it. Instead, they incorporated the little company as the Standard Red Cedar Chest Company, with John Lane as President and Ed Lane as Vice President and General Manager. From cedar chests, Lane expanded to occasional tables in 1951, casegoods in 1956, and accent pieces in 1965. In 1972, Lane bought a small reclining chair company in Tupelo, Mississippi, named Action Industries. Action sustained tremendous growth through gains in market share and product diversification through the next 20 years becoming a major force in the upholstered furniture industry. Eventually, Action changed its name to Lane Furniture. Today, Lane is owned by United Furniture Industries, one of the fastest growing and largest manufacturers of upholstery and case goods in the U.S.`;
  const [showText, setShowText] = useState(false);
  const show = () => {
    setShowText(true);
  };
  const hide = () => {
    setShowText(false);
  };
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            {showText ? (
              <p>
                {text}{" "}
                <button onClick={hide} className="btn">
                  less
                </button>
              </p>
            ) : (
              <p>
                {text.substring(0, 900)}...{" "}
                <button onClick={show} className="btn">
                  more
                </button>
              </p>
            )}
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;

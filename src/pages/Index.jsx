import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Cover } from '../components/Cover';
import { Infromation } from '../components/Information';
import { WhitePaper } from '../components/WhitePaper';
import { Councli } from '../components/Councli';
import { Roadmap } from '../components/Roadmap';
import { Team } from '../components/Team';
import { Partners } from '../components/Partners';
import { GetInvolved } from '../components/GetInvolved';
import { Ecosystem } from '../components/Ecosystem';
import { Footer } from '../components/Footer';
import { Anchor } from '../ui-components/Anchor';

function Index() {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisibility(true), 500);
  }, [])
  return (
    <div className="App" style={{ visibility: visibility ? 'visible' : 'hidden' }}>
      <Header />
      <Anchor id="cover" />
      <Cover />
      <Anchor id="information" />
      <Infromation />
      <Anchor id="whitepaper" />
      <WhitePaper />
      <Anchor id="council" />
      <Councli />
      <Anchor id="roadmap" />
      <Roadmap />
      <Anchor id="team" />
      <Team />
      <Anchor id="partners" />
      <Partners />
      <GetInvolved />
      <Anchor id="ecosystem" />
      <Ecosystem />
      <Anchor id="contact" />
      <Footer />
    </div>
  );
}

export default Index;

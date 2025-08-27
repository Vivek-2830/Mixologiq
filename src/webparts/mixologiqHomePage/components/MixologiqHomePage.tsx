import * as React from 'react';
import styles from './MixologiqHomePage.module.scss';
import { IMixologiqHomePageProps } from './IMixologiqHomePageProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import { Icon } from 'office-ui-fabric-react';


export interface IMixologiqHomePageState {

}

require("../assets/css/style.css");

export default class MixologiqHomePage extends React.Component<IMixologiqHomePageProps, IMixologiqHomePageState> {

  constructor(props: IMixologiqHomePageProps, state: IMixologiqHomePageState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IMixologiqHomePageProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className="mixologiqHomePage">
        
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="https://videocdn.cdnpk.net/videos/2e6a91da-0661-428f-8225-9fddc470790b/horizontal/previews/clear/large.mp4?token=exp=1756293118~hmac=38bb9de46607346b2242812aa690c8d8279951d2d7176dc151c40d7405c74514" type="video/mp4" />
        </video>

        <div className="hero">
          <div className="content">
            <p>Automated cocktail machine for precision, speed, and profitability.</p>
            <h1>Revolutionizing the Cocktail Experience</h1>
            <a href="#" className="btn">Book a Demo</a>
          </div>

          {/* Features */}
          <div className="features">
            <div className="feature">
              <div className="icon"><Icon iconName="LightningBolt" /></div>
              <h3>Quick</h3>
              <p>Cocktails in less than 30 seconds</p>
            </div>
            <div className="feature">
              <div className="icon"><Icon iconName="Touch" /></div>
              <h3>Effortless</h3>
              <p>Cocktail preparation in just 2 clicks</p>
            </div>
            <div className="feature">
              <div className="icon"><Icon iconName="BullseyeTarget" /></div>
              <h3>Precision</h3>
              <p>Perfectly poured cocktails every time</p>
            </div>
            <div className="feature">
              <div className="icon"><Icon iconName="Recipe" /></div>
              <h3>Variety</h3>
              <p>300+ Cocktail recipes to explore</p>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

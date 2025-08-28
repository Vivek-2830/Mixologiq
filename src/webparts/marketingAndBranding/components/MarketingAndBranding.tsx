import * as React from 'react';
import styles from './MarketingAndBranding.module.scss';
import { IMarketingAndBrandingProps } from './IMarketingAndBrandingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';


export interface IMarketingAndBrandingState {

}

require("../assets/css/style.css");

export default class MarketingAndBranding extends React.Component<IMarketingAndBrandingProps, IMarketingAndBrandingState> {

  constructor(props: IMarketingAndBrandingProps, state: IMarketingAndBrandingState) {
      super(props);

      this.state = {

      };

  }

  public render(): React.ReactElement<IMarketingAndBrandingProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className="marketingAndBranding">
     
        <div className="herosection">
          <div className="overlay"></div>
          <img className="hero-bg" src={require("../assets/Images/Banner.jpg")} alt="Cocktail Banner" />

          <div className="hero-content">
            <h1>Precision Engineering Meets Perfect Cocktails</h1>
            <p>
              Our machines combine cutting-edge technology with elegant design to deliver
              consistent, high-quality cocktails that exceed your customers' expectations every time.
            </p>

            <div className="stats">
              <div className="stat-box">
                <h2>15 sec</h2>
                <p>Average serve time</p>
              </div>
              <div className="stat-box">
                <h2>99.9%</h2>
                <p>Recipe accuracy</p>
              </div>
              <div className="stat-box">
                <h2>100+</h2>
                <p>Cocktail recipes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

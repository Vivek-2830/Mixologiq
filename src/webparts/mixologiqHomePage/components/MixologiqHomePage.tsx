import * as React from 'react';
import styles from './MixologiqHomePage.module.scss';
import { IMixologiqHomePageProps } from './IMixologiqHomePageProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import { Icon, PrimaryButton } from 'office-ui-fabric-react';


export interface IMixologiqHomePageState {

}

require("../assets/style.css");

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
      <section id="mixologiqHomePage">
        
        <div className="hero">
          <div className="hero-content">
            <p className="hero-subtitle">Partner Marketing Hub</p>
            <h1 className="hero-title">Marketing & Branding Resources</h1>
            <p className="hero-text">
              Access our complete collection of marketing materials, brand assets, and 
              promotional content. Everything you need to effectively market Mixologiq 
              products in your region.
            </p>
          </div> 
        </div>

      </section>

    );
  }
}

{/* <div className="MXHomePage">
       
          <img src={require("../assets/Images/CocktailImage.jpg")} alt="Mixologiq Hero" />

          <div className="content">
            <p>
              Automated cocktail machine for precision, speed, <br />
              and profitability.
            </p>
            <h1>
              Revolutionizing the <br />
              Cocktail Experience
            </h1>
            <PrimaryButton className="viewMore" text="Book a Demo" />
          </div>
</div> */}


{/* className="hero-section" */}
        
{/* <div className="hero-overlay"></div>

<img src={require("../assets/Images/CocktailImage.jpg")} alt="Mixologiq Hero" className="hero-background" />

<div className="hero-content">
  <p className="hero-subtitle">Partner Marketing Hub</p>
  <h1 className="hero-title">Marketing & Branding Resources</h1>
  <p className="hero-text">
    Access our complete collection of marketing materials, brand assets, and 
    promotional content. Everything you need to effectively market Mixologiq 
    products in your region.
  </p>
  
</div> */}
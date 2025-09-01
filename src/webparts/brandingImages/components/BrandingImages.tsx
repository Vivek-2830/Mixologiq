import * as React from 'react';
import styles from './BrandingImages.module.scss';
import { IBrandingImagesProps } from './IBrandingImagesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

export interface IBrandingImagesState {
}

require("../assets/css/style.css");

export default class BrandingImages extends React.Component<IBrandingImagesProps, IBrandingImagesState> {

  constructor(props: IBrandingImagesProps, state: IBrandingImagesState) {
      super(props);
        
      this.state = {
  
      }
  }

  public render(): React.ReactElement<IBrandingImagesProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="brandingImages">
        
        <div className='BrandingImages-Section'>
          <h2>Branding Image</h2>
          <p>Marketing materials and branded visual assets</p>
        </div>

        <div className='ms-Grid'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>

              <div className='Image-Section'>
                <div className='ms-Grid-col ms-sm6 ms-md3 ms-lg3'>
                  <div className='Image-Container'>
                    <img src={require("../assets/Images/barenz-14.jpg")} alt="Branding Cocktail" />
                  </div>
                </div>

                <div className='ms-Grid-col ms-sm6 ms-md3 ms-lg3'>
                  <div className='Image-Container'>
                    <img src={require("../assets/Images/man-preparing-cocktails.jpg")} alt="Branding Cocktail" />
                  </div>
                </div>

                <div className='ms-Grid-col ms-sm6 ms-md3 ms-lg3'>
                  <div className='Image-Container'>
                    <img src={require("../assets/Images/OIP.jpg")} alt="Branding Cocktail" />
                  </div>
                </div>

                <div className='ms-Grid-col ms-sm6 ms-md3 ms-lg3'>
                  <div className='Image-Container'>
                    <img src={require("../assets/Images/Ruby_Claire_Geneva_web_Bar_Nighttime-4.jpg")} alt="Branding Cocktail" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </section>
    );
  }
}

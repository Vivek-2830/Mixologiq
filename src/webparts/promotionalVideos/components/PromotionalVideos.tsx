import * as React from 'react';
import styles from './PromotionalVideos.module.scss';
import { IPromotionalVideosProps } from './IPromotionalVideosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

require("../assets/css/style.css");

export interface IPromotionalVideosState {
}

export default class PromotionalVideos extends React.Component<IPromotionalVideosProps, IPromotionalVideosState> {

  constructor(props: IPromotionalVideosProps, state: IPromotionalVideosState) {
      super(props);
  
      this.state = {
  
      };
  
  }

  public render(): React.ReactElement<IPromotionalVideosProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="promotionalVideos">
        
        <div className='promotionalVideo'>
          <h2>Promotional Videos</h2>
          <p>High-quality video content for marketing, training, and promotional purposes.</p>
        </div>

        
        <div className='ms-Grid'>
          <div className='ms-Grid-row'>
            <div className='ms-Grid-col'>
              <div className='VideosHeader'>
                <div className='video-container'>
                  <video autoPlay muted loop playsInline className="video-bg">
                    <source src="https://videocdn.cdnpk.net/videos/980110cb-af11-434b-8a0c-28b5fc117457/horizontal/previews/clear/large.mp4?token=exp=1756465592~hmac=3bfa61989c1bab8bd30583f31fe298aa675543645c98eb86d5eaa7e8499c9fe2" type="video/mp4" />
                  </video>
                  <p>Bartender serving a cocktail</p>
                </div>

                <div className='video-container'>
                  <video autoPlay muted loop playsInline className="video-bg">
                    <source src="https://videocdn.cdnpk.net/videos/611b68bc-f8e4-4463-8eb4-8851e79a18d4/horizontal/previews/clear/large.mp4?token=exp=1756466220~hmac=d6af9a203584f4c44b2ac2665eb78d3108036809bea93012f2ab524fe1f56d27" type="video/mp4" />
                  </video>
                  <p>Bartender serving a cocktail</p>
                </div>

                <div className='video-container'>
                  <video autoPlay muted loop playsInline className="video-bg">
                    <source src="https://videocdn.cdnpk.net/videos/c850127a-18f7-4786-8b97-789f76ef03e1/horizontal/previews/clear/large.mp4?token=exp=1756466262~hmac=a758ce1fb5d109f99b2a407ee8457f93bb3ee57d06c76dac11eac8249f41f2b8" type="video/mp4" />
                  </video>
                  <p>Bartender serving a cocktail</p>
                </div>

                <div className='video-container'>
                  <video autoPlay muted loop playsInline className="video-bg">
                    <source src="https://videocdn.cdnpk.net/videos/07fddfe4-3c9b-44f3-b978-75a3bf32fdb5/horizontal/previews/clear/large.mp4?token=exp=1756466307~hmac=b67698ca7bfda66b4d216acfdcc5dc9e765841f73950542b575e307ddc7d51bc" type="video/mp4" />
                  </video>
                  <p>Bartender serving a cocktail</p>
                </div>

              </div>
            </div>
          </div>

        </div> 
        
      </section>
    );
  }
}



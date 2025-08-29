import * as React from 'react';
import styles from './BrandingGuidelines.module.scss';
import { IBrandingGuidelinesProps } from './IBrandingGuidelinesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import { Icon } from 'office-ui-fabric-react';

require("../assets/css/style.css");

export interface IBrandingGuidelinesState {
}

export default class BrandingGuidelines extends React.Component<IBrandingGuidelinesProps, IBrandingGuidelinesState> {

  constructor(props: IBrandingGuidelinesProps, state: IBrandingGuidelinesState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IBrandingGuidelinesProps> {

    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="brandingGuidelines">

        <div className="Resource">
          <h2>Resource Categories</h2>
          <p>Our marketing resources are organized into three main categories for easy access.</p>
        </div>

        <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm12 ms-md12 ms-lg12'>
            <div className="categories">

              <div className="card">
                <div className="icon">
                  <Icon iconName="Color" style={{ fontSize: 28 }} />
                </div>
                <h3>Branding</h3>
                <p>Logo files, brand guidelines, and visual identity assets</p>
                <span className="resource-count">3 Resources</span>
              </div>


              <div className="card">
                <div className="icon">
                  <Icon iconName="Document" style={{ fontSize: 28 }} />
                </div>
                <h3>Marketing Materials</h3>
                <p>Brochures, flyers, presentations, and promotional content</p>
                <span className="resource-count">4 Resources</span>
              </div>


              <div className="card">
                <div className="icon">
                  <Icon iconName="Video" style={{ fontSize: 28 }} />
                </div>
                <h3>Videos</h3>
                <p>Product demos, brand videos, and promotional content</p>
                <span className="resource-count">3 Resources</span>
              </div>
              
            </div>
          </div>
        </div>

      </section>
    );
  }
}

import * as React from 'react';
import styles from './BrandingSection.module.scss';
import { IBrandingSectionProps } from './IBrandingSectionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

require("../assets/css/style.css");

export interface IBrandingSectionState {
}

export default class BrandingSection extends React.Component<IBrandingSectionProps, IBrandingSectionState> {

  constructor(props: IBrandingSectionProps, state: IBrandingSectionState) {
    super(props);

    this.state = {

    };

  }

  public render(): React.ReactElement<IBrandingSectionProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section id="brandingSection">

        <div className="branding-section">
          <h2>Brand Identity Assets</h2>
          <p>
            Official Mixologiq brand assets including logos, guidelines, and visual identity elements.
          </p>

          <div className="assets-grid">

            <div className="asset-card">
              <div className="asset-header">
                <h3>Mixologiq Logo Package</h3>
                <span className="file-type">IMAGE</span>
              </div>
              <p className="category">Branding</p>
              <p className="description">
                Complete logo package including SVG, PNG, and EPS formats in various sizes and orientations.
              </p>
        
              <div className="asset-actions">
                <button className="download-btn">⬇</button>
              </div>
            </div>

            <div className="asset-card">
              <div className="asset-header">
                <h3>Brand Guidelines Manual</h3>
                <span className="file-type">PDF</span>
              </div>
              <p className="category">Branding</p>
              <p className="description">
                Comprehensive brand guidelines covering logo usage, color palette, typography, and brand voice.
              </p>
            
              <div className="asset-actions">
                <button className="download-btn">⬇</button>
              </div>
            </div>

            <div className="asset-card">
              <div className="asset-header">
                <h3>Color Palette & Typography</h3>
                <span className="file-type">PDF</span>
              </div>
              <p className="category">Branding</p>
              <p className="description">
                Official brand colors with hex codes, RGB values, and approved typography specimens.
              </p>
              
              <div className="asset-actions">
                <button className="download-btn">⬇</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

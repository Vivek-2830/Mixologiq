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
        
      </section>
    );
  }
}

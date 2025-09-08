import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'MixologiqHomePageWebPartStrings';
import MixologiqHomePage from './components/MixologiqHomePage';
import { IMixologiqHomePageProps } from './components/IMixologiqHomePageProps';
import { sp } from "@pnp/sp/presets/all";
import {
  PropertyFieldFilePicker, IFilePickerResult
} from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";

export interface IMixologiqHomePageWebPartProps {
  propertyName: string;
  backgroundImage: string;
  description: string;
  source: string;
  filePickerResult: IFilePickerResult;
}

export default class MixologiqHomePageWebPart extends BaseClientSideWebPart<IMixologiqHomePageWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  protected onInit(): Promise<void> {
    this._environmentMessage = this._getEnvironmentMessage();

    sp.setup({
      spfxContext: this.context
    });

    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IMixologiqHomePageProps> = React.createElement(
      MixologiqHomePage,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        context : this.context,
        propertyName: this.properties.propertyName,
        backgroundImage: this.properties.filePickerResult ? this.properties.filePickerResult.fileAbsoluteUrl : null,
        source: this.properties.source,
        filePickerResult: this.properties.filePickerResult
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private _getEnvironmentMessage(): string {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams
      return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
    }

    return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;
    this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
    this.domElement.style.setProperty('--link', semanticColors.link);
    this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('propertyName', {
                  label: "Label"
                }),
                PropertyPaneTextField('source', {
                  label: "Title"
                }),
                PropertyPaneTextField('description', {
                  label: "Description"
                }),
                PropertyFieldFilePicker("filePickerResult", {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.filePickerResult = e;
                    
                    // if (e.fileAbsoluteUrl == null) {
                    //   e.downloadFileContent().then(async (result) => {
                    //     let fileUploadResult = await sp.web.getFolderByServerRelativePath(
                    //       `${this.context.pageContext.site.serverRelativeUrl}/SiteAssets/ImageHeaderWebPart`
                    //     )
                    //       .files.addUsingPath(e.fileName, result, { Overwrite: true });

                    //     console.log(fileUploadResult);
                    //     this.properties.filePickerResult = e;
                    //     this.context.propertyPane.refresh();
                    //     this.render();
                    //   });
                    // }
                    
                  },
                  onChanged: (e: IFilePickerResult) => {
                    console.log(e);
                    this.properties.filePickerResult = e;
                  },
                  buttonLabel: "Upload Image",
                  label: "Our Portfolio Image",
                  key: "FilePickerID",
                  // hideLocalUploadTab: true,
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}

// For a Image Upload are my device -----------
// 
// PropertyFieldFilePicker("filePickerResult", {
//   context: this.context,
//   filePickerResult: this.properties.filePickerResult,
//   onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
//   properties: this.properties,
//   onSave: (e: IFilePickerResult) => {
//     // console.log(e);
    
//     if (e.fileAbsoluteUrl == null) {
//       e.downloadFileContent().then(async (result) => {
//         let fileUploadResult = await sp.web.getFolderByServerRelativePath(
//           `${this.context.pageContext.site.serverRelativeUrl}/SiteAssets/ImageHeaderWebPart`
//         )
//           .files.addUsingPath(e.fileName, result, { Overwrite: true });

//         console.log(fileUploadResult);
//         this.properties.filePickerResult = e;
//         this.context.propertyPane.refresh();
//         this.render();
//       });
//     }
//     this.properties.filePickerResult = e;
//   },
//   onChanged: (e: IFilePickerResult) => {
//     console.log(e);
//     this.properties.filePickerResult = e;
//   },
//   buttonLabel: "Upload Image",
//   label: "Our Portfolio Image",
//   key: "FilePickerID",
//   // hideLocalUploadTab: true,
// }),
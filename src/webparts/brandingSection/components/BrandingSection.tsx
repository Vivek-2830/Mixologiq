import * as React from 'react';
import styles from './BrandingSection.module.scss';
import { IBrandingSectionProps } from './IBrandingSectionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';

require("../assets/css/style.css");

export interface IBrandingSectionState {
  BrandingDocs : any;
}

export default class BrandingSection extends React.Component<IBrandingSectionProps, IBrandingSectionState> {

  constructor(props: IBrandingSectionProps, state: IBrandingSectionState) {
    super(props);

    this.state = {
      BrandingDocs : ""
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
          <h2>Branding guidelines</h2>
          <p>Official Mixologiq brand assets including logos, guidelines, and visual identity elements.</p>
        </div>

        <div className="resources-container">
          <div className="resources-grid">

            {this.state.BrandingDocs.length > 0 ? (
              this.state.BrandingDocs.map((doc, index) => (
                <div key={doc.Id}>
                  <a href={doc.FileRef}
                    target="_blank"
                    data-interception="off"
                    className={`resource-card ${index % 2 === 0 ? "bg-darkblue" : "bg-blue"}`}>

                    {/* Choose file icon by extension */}
                    <img
                      src={require("../assets/Images/file.png")}
                      alt="file icon"
                      className="icon"
                    />
                    {doc.FileLeafRef}
                  </a>
                </div>
              ))
            ) : (
              <p>No documents found.</p>
            )}

            {/* <div>
              <a href="https://asytecfr.sharepoint.com/:b:/s/MixologiqPartners/Ecp8DwgAgKRHo0QAGeeWCY0BdmoAiAbCKrf03UZ6ZgxeEw?e=hqE7qH"
                target="_blank" data-interception="off" className="resource-card bg-darkblue">
                <img src={require("../assets/Images/file.png")} alt="pdf icon" className="icon" /> Mixologiq Branding Guidelines
              </a>
            </div>
            
            <div>
              <a href="https://asytecfr.sharepoint.com/:b:/s/MixologiqPartners/Ecp8DwgAgKRHo0QAGeeWCY0BdmoAiAbCKrf03UZ6ZgxeEw?e=hqE7qH"
                target="_blank" data-interception="off" className="resource-card bg-blue">
                <img src={require("../assets/Images/file.png")} alt="pdf icon" className="icon" /> Mixologiq Font, Color Palette & Logo
              </a>
            </div>

            <div>
              <a href="https://asytecfr.sharepoint.com/:b:/s/MixologiqPartners/Ecp8DwgAgKRHo0QAGeeWCY0BdmoAiAbCKrf03UZ6ZgxeEw?e=hqE7qH"
                target="_blank" data-interception="off" className="resource-card bg-darkblue">
                <img src={require("../assets/Images/file.png")} alt="doc icon" className="icon" /> Mixologiq Corporate Letterhead
              </a>
            </div>

            <div>
              <a href="https://asytecfr.sharepoint.com/:b:/s/MixologiqPartners/Ecp8DwgAgKRHo0QAGeeWCY0BdmoAiAbCKrf03UZ6ZgxeEw?e=hqE7qH"
                target="_blank" data-interception="off" className="resource-card bg-blue">
                <img src={require("../assets/Images/file.png")} alt="pdf icon" className="icon" /> Report Mixologiq
              </a>
            </div>

            <div>
              <a href="https://asytecfr.sharepoint.com/:b:/s/MixologiqPartners/Ecp8DwgAgKRHo0QAGeeWCY0BdmoAiAbCKrf03UZ6ZgxeEw?e=hqE7qH"
                target="_blank" data-interception="off" className="resource-card bg-blue">
                <img src={require("../assets/Images/file.png")} alt="pdf icon" className="icon" /> Report Asytec Mixologiq
              </a>
            </div>

            <div>
              <a href="https://asytecfr.sharepoint.com/:b:/s/MixologiqPartners/Ecp8DwgAgKRHo0QAGeeWCY0BdmoAiAbCKrf03UZ6ZgxeEw?e=hqE7qH"
                target="_blank" className="resource-card bg-darkblue" data-interception="off">
                <img src={require("../assets/Images/file.png")} alt="pdf icon" className="icon" /> Mixologiq x Flowr Agency
              </a>
            </div>

            <div>
              <a href="https://asytecfr.sharepoint.com/:b:/s/MixologiqPartners/Ecp8DwgAgKRHo0QAGeeWCY0BdmoAiAbCKrf03UZ6ZgxeEw?e=hqE7qH"
                target="_blank" data-interception="off" className="resource-card bg-blue">
                <img src={require("../assets/Images/file.png")} alt="pdf icon" className="icon" /> Mixologiq Leaflet - A5
              </a>
            </div>

            <div>
              <a href="https://asytecfr.sharepoint.com/:b:/s/MixologiqPartners/Ecp8DwgAgKRHo0QAGeeWCY0BdmoAiAbCKrf03UZ6ZgxeEw?e=hqE7qH"
                target="_blank" data-interception="off" className="resource-card bg-darkblue">
                <img src={require("../assets/Images/file.png")} alt="pdf icon" className="icon" />Mixo 8 & Mixo 20 V2
              </a>
            </div> */}

          </div>
        </div>
      </section>

    );
  }

  public async componentDidMount() {
    this.GetDocumentFiles();
  }

  public async GetDocumentFiles() {
    try {
      const items= await sp.web.lists
        .getByTitle("Branding guidelines") // 👈 library name
        .items
        .select("Id","FileLeafRef", "FileRef", "Modified","Editor/Title","File_x0020_Type")
        .expand("Editor")// latest first
        .get();

      this.setState({ BrandingDocs: items });
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  }

}


{/* <div className="assets-grid">

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

</div> */}

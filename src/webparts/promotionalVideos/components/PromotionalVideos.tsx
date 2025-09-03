import * as React from 'react';
import styles from './PromotionalVideos.module.scss';
import { IPromotionalVideosProps } from './IPromotionalVideosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';


require("../assets/css/style.css");

export interface IPromotionalVideosState {
  PromotionalVideoData : any;
}

export default class PromotionalVideos extends React.Component<IPromotionalVideosProps, IPromotionalVideosState> {

  constructor(props: IPromotionalVideosProps, state: IPromotionalVideosState) {
      super(props);
  
      this.state = {
        PromotionalVideoData : ""
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
        
        <div className='promotionalvideo-Section'>
          <h2>Promotional Videos</h2>
          <p>High-quality video content for marketing, training, and promotional purposes.</p>
        </div>

        {/* <div className='ms-Grid-col'>
          <div className='VideosHeader'>

         
            <div className="video-container">
              <a href="https://media.istockphoto.com/id/675787809/video/a-blue-martini-splashes-over-a-cherry-in-a-glass.mp4?s=mp4-640x640-is&k=20&c=rrSWOoVn7lBlgObnGJOi6G2OvJ8b1KqZcCmuffk15XY="
                target="_blank" data-interception="off" rel="noopener noreferrer">
                <video autoPlay muted loop playsInline className="video-bg">
                  <source src="https://media.istockphoto.com/id/675787809/video/a-blue-martini-splashes-over-a-cherry-in-a-glass.mp4?s=mp4-640x640-is&k=20&c=rrSWOoVn7lBlgObnGJOi6G2OvJ8b1KqZcCmuffk15XY=" type="video/mp4" />
                </video>
              </a>
              <p>Blue Martini Splashes Over a Cherry glass</p>
            </div>

            <div className='video-container'>
              <a href="https://cdn.coverr.co/videos/coverr-pouring-into-a-cocktail-shaker-3947/720p.mp4"
                target="_blank" data-interception="off" rel="noopener noreferrer">
                <video autoPlay muted loop playsInline className="video-bg">
                  <source src="https://cdn.coverr.co/videos/coverr-pouring-into-a-cocktail-shaker-3947/720p.mp4" type="video/mp4" />
                </video>
              </a>
              <p>Cover pouring into a cocktail shaker</p>
            </div>

            <div className='video-container'>
              <a href="https://cdn.coverr.co/videos/coverr-making-a-cinco-de-mayo-cocktail-5111/1080p.mp4"
                target="_blank" data-interception="off" rel="noopener noreferrer">
                <video autoPlay muted loop playsInline className="video-bg">
                  <source src="https://cdn.coverr.co/videos/coverr-making-a-cinco-de-mayo-cocktail-5111/1080p.mp4" type="video/mp4" />
                </video>
              </a>
              <p>Cover making a cinco de mayo cocktail</p>
            </div>

          </div>
        </div>  */}

        {this.state.PromotionalVideoData.length > 0 ? (
          <div className="VideosHeader">
            {this.state.PromotionalVideoData.map(file => (
              <div className="video-container" key={file.Id}>
                <a href={file.FileRef} target="_blank" data-interception="off" rel="noopener noreferrer">
                  
                  {/* <video autoPlay muted loop playsInline className="video-bg">
                      <source src={file.FileRef} type={`video/${ext}`} />
                    </video>
                 */}

                  <video className="video-bg" autoPlay muted loop playsInline crossOrigin="anonymous" src={file.FileRef} />
                </a>
                <p className="video-title">{file.Title || file.FileLeafRef}</p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

      </section>
    );
  }

  public async componentDidMount(){
    this.GetBrandingVideos();
  }

  public async GetBrandingVideos() {
    try {
      
      const items: any[] = await sp.web.lists
        .getByTitle("Promotional Video") 
        .items
        .select("Id", "Title", "FileLeafRef", "FileRef", "File_x0020_Type")
        .expand("File")();

      console.log("Fetched Files:", items);

      const videoExtensions = ["mp4", "webm", "mov", "avi", "mkv", "ogg","m4v"];

      const videos = items.filter(file => {
        const ext = file.File_x0020_Type ? file.File_x0020_Type.toLowerCase() : "";
        return videoExtensions.indexOf(ext) >= 0;
      });

      this.setState({ PromotionalVideoData: videos });

    } catch (err) {
      console.error("Error fetching files:", err);
    }
  }

}


// {this.state.PromotionalVideoData.length > 0 ? (
//   <div className="VideosHeader">
//   {this.state.PromotionalVideoData.map(file => {
//     // Normalize extension
//     const ext = file.File_x0020_Type ? file.File_x0020_Type.toLowerCase() : "";

//     // Supported video formats
//     const supportedExtensions = ["mp4", "mov", "webm", "ogg", "mkv", "avi", "m4v"];
//     const isSupported = supportedExtensions.indexOf(ext) >= 0;

//     return (
//       <div className="ms-Grid-col">
//         <div className="video-container" key={file.Id}>
//           {isSupported ? (
//             <a href={file.FileRef} target="_blank" data-interception="off" rel="noopener noreferrer">

//               {/* <video autoPlay muted loop playsInline className="video-bg">
//                 <source src={file.FileRef} type={`video/${ext}`} />
//               </video> */}
//               <video className="video-bg" autoPlay muted loop playsInline crossOrigin="anonymous"  src={file.FileRef} />

//             </a>
//           ) : (
//             <></>
//           )}
//           <p>{file.Title || file.FileLeafRef}</p>
//         </div>

//       </div>
//     );
//   })}
// </div>
// ) : (
// <p>Loading...</p>
// )}
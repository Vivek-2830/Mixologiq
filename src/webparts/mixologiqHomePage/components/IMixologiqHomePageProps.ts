import { IFilePickerResult } from "@pnp/spfx-property-controls";

export interface IMixologiqHomePageProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context : any;
  propertyName: string;
  backgroundImage: string;
  source: string;
  filePickerResult: any;
}

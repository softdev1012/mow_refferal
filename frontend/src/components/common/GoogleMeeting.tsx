import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { GOOGLE_API_CLIENT_ID } from '../../utils/constants';

const GoogleMeeting: React.FC = () => {
  const [meetingUrl, setMeetingUrl] = useState<string>('');
  const cliendId = GOOGLE_API_CLIENT_ID;
  console.log(cliendId);

  // const handleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  //   const accessToken = (response as GoogleLoginResponse).accessToken;
  
  //   try {
  //     axios.post<{ meetings: { meetingUrl: string }[] }>(
  //       'https://www.googleapis.com/calendar/v3/freeBusy',
  //       {
  //         attendees: [{ email: 'example@gmail.com' }],
  //         timeMin: new Date().toISOString(),
  //         timeMax: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     ).then(response => {
  //       const meetingUrl = response.data.meetings[0].meetingUrl;
  //       setMeetingUrl(meetingUrl);
  //     }).catch(error => {
  //       console.error('Error creating meeting:', error);
  //     });
  //   } catch (error) {
  //     console.error('Error creating meeting:', error);
  //   }
  // };

  return (
    <div>
      <GoogleOAuthProvider clientId={cliendId}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => console.error('Google login failed:')}
        />
        {meetingUrl && (
          <div>
            <h3>Meeting URL:</h3>
            <a href={meetingUrl} target="_blank" rel="noopener noreferrer">
              {meetingUrl}
            </a>
          </div>
        )}
      </GoogleOAuthProvider>
      
    </div>
  );
};

export default GoogleMeeting;

import React, { useState } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import axios from 'axios';

const GoogleMeeting: React.FC = () => {
  const [meetingUrl, setMeetingUrl] = useState<string>('');

  const handleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const accessToken = (response as GoogleLoginResponse).accessToken;
  
    try {
      axios.post<{ meetings: { meetingUrl: string }[] }>(
        'https://www.googleapis.com/calendar/v3/freeBusy',
        {
          attendees: [{ email: 'example@gmail.com' }],
          timeMin: new Date().toISOString(),
          timeMax: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      ).then(response => {
        const meetingUrl = response.data.meetings[0].meetingUrl;
        setMeetingUrl(meetingUrl);
      }).catch(error => {
        console.error('Error creating meeting:', error);
      });
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText="Login with Google and Creat Meeing"
        onSuccess={handleLoginSuccess}
        onFailure={(error: any) => console.error('Google login failed:', error)}
        cookiePolicy={'single_host_origin'}
        
      />
      {meetingUrl && (
        <div>
          <h3>Meeting URL:</h3>
          <a href={meetingUrl} target="_blank" rel="noopener noreferrer">
            {meetingUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default GoogleMeeting;

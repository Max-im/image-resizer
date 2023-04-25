import React, { FC } from 'react';
import { Typography, Box } from '@mui/material';

const About: FC = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        About Our App
      </Typography>
      <Typography variant="body1" align="justify" gutterBottom>
        Our app is a tool that allows you to easily compress images and video
        files, making them smaller and easier to share or store on your device.
        With just a few clicks, you can reduce the size of your media files
        without sacrificing quality.
      </Typography>
      <Typography variant="body1" align="justify" gutterBottom>
        We know that large media files can take up a lot of space on your
        device, making it difficult to store everything you need. Plus, it can
        be frustrating to wait for long upload or download times when sharing
        files with others. That&apos;s why we created this app - to help you
        save time and space while still being able to share and enjoy your
        favorite photos and videos.
      </Typography>
      <Typography variant="body1" align="justify" gutterBottom>
        Our app uses advanced compression algorithms to ensure that your media
        files are still high quality after compression. You can choose to
        compress individual files or multiple files at once, depending on your
        needs. And with our user-friendly interface, you don&apos;t need to be a
        tech expert to use our app.
      </Typography>
      <Typography variant="body1" align="justify" gutterBottom>
        We&apos;re passionate about making it easy for people to share and store
        their media files, and we hope our app helps you do just that. If you
        have any questions or feedback, please don&apos;t hesitate to reach out
        to our team - we&apos;re always happy to help!
      </Typography>
    </Box>
  );
};

export default About;

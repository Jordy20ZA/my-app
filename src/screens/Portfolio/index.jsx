import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header';
import MainFeaturedPost from '../../components/MainPost';
import FeaturedPost from '../../components/Post';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';


const sections = [
  { title: 'Jordan Hendricks. Who I am', url: '#' },
  { title: 'Why I wanted to become a developer', url: '#' },
  { title: 'Strengths ', url: '#' },
  { title: 'Weaknesses', url: '#' },
  { title: 'Hobbies', url: '#' },
  { title: 'Interests', url: '#' },
  { title: 'Gallery', url: '#' },
];

const mainFeaturedPost = {
  title: 'Jordan Hendricks. Who am I?',
  description:'My name is Jordan Hendricks, I was born and raised in Cape Town South Africa',
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Why I wanted to become a developer',
    description:
      'The reason I chose to become a developer was because I loved being able to see my work and how it could make a difference. I want to be part of projects and proudly say that I helped contribute to it. There is so many possibilities, and im driven to grasp these opportunities and innovative.' ,
      image: require('../../Images/picture.jpg'),
    imageLabel: 'Image Text',
  },
  {
    title: 'Strengths ',
    description:
      'Hard-Working, Resilient, Persistent, Team Player, Putting in the hours to be successfull.',
    image: require('../../Images/Picture2.jpg'),
    imageLabel: 'Image Text',
  },
  {
    title: 'More About Myself ',
    description:
      'I am a 24 year old, I enjoy watching series, playing video games.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'Socials',
  description:
    'If you would like any more information about me please free to contact me ',
  archives: [
    { title: 'Telephone', url: '#' },
    { title: 'Email', url: '#' },
    { title: 'Linkendn', url: '#' },
    { title: 'Facebook', url: '#' },
    { title: 'Discord', url: '#' },
 
  ],
  social: [
    { name: 'GitHub' },
    { name: 'Twitter' },
    { name: 'Facebook' },
  ],
};

const theme = createTheme();

export default function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Jordan" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaHive } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiCsharp, SiDotnet, SiSpringboot, SiMicrosoftsqlserver, SiFlask, SiDjango, SiR, SiTableau, SiPostman, SiJira, SiJupyter, SiApachehadoop } from 'react-icons/si';
import { BsBootstrap, BsSlack } from 'react-icons/bs';
import { DiSpark } from 'react-icons/di';
import { TbBrandFigma } from 'react-icons/tb';


const skillsData = [
  { 
    section: 'Frontend', 
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Angular', icon: <FaAngular /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Bootstrap', icon: <BsBootstrap /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
    ]
  },
  { 
    section: 'Backend', 
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    //   { name: 'C#', icon: <SiCsharp /> },
      { name: '.NET', icon: <SiDotnet /> },
    //   { name: 'ASP.NET Core', icon: <SiDotnet /> },
    //   { name: 'Java', icon: <FaJava /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'SQL Server', icon: <SiMicrosoftsqlserver /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Django', icon: <SiDjango /> },
    ]
  },
  {
    section: 'Data Science',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'R', icon: <SiR /> },
      { name: 'SQL', icon: <SiMicrosoftsqlserver /> },
      { name: 'Hadoop', icon: <SiApachehadoop /> },
      { name: 'Spark', icon: <DiSpark /> },
      { name: 'Hive', icon: <FaHive /> },
      { name: 'Tableau', icon: <SiTableau /> },
      { name: 'Power BI', icon: <SiTableau /> },
    ]
  },
  {
    section: 'Tools / Technologies',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Jira', icon: <SiJira /> },
      { name: 'Figma', icon: <TbBrandFigma /> },
      { name: 'Slack', icon: <BsSlack /> },
      { name: 'Jupyter', icon: <SiJupyter /> },
      { name: 'Postman', icon: <SiPostman /> },
    ]
  },
];

const Skills = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: 'white' }}>
      {/* <Typography variant="h3" gutterBottom sx={{ color: 'white', mb: 4 }}>Skills</Typography> */}
      <Grid container spacing={4}>
        {skillsData.map((section) => (
          <Grid item xs={12} md={6} key={section.section}>
            <Paper elevation={3} sx={{ p: 2, backgroundColor: 'white', color: '#333', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>{section.section}</Typography>
              <Grid container spacing={2}>
                {section.skills.map((skill) => (
                  <Grid item xs={4} sm={3} key={skill.name}>
                    <Paper elevation={1} sx={{ 
                      p: 2, 
                      backgroundColor: '#1e3a8a', 
                      color: 'white', 
                      borderRadius: 2, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      gap: 1,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                      }
                    }}>
                      <Box sx={{ fontSize: 40, color: '#64ffda' }}>{skill.icon}</Box>
                      <Typography variant="body2">{skill.name}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
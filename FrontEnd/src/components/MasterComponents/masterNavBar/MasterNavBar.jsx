import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';

// Material Icons
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GroupIcon from '@mui/icons-material/Group';
import WcIcon from '@mui/icons-material/Wc';
import SchoolIcon from '@mui/icons-material/School';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TimerIcon from '@mui/icons-material/Timer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MasterNavBar = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const data = [
    { name: 'Organization', path: '/admindashboard/masterorganization', icon: <BusinessIcon /> },
    { name: 'Locations', path: '/admindashboard/masterlocation', icon: <LocationOnIcon /> },
    { name: 'Job Type', path: '/admindashboard/masterjobtype', icon: <WorkIcon /> },
    { name: 'Ranks', path: '/admindashboard/masterrank', icon: <MilitaryTechIcon /> },
    { name: 'Roles', path: '/admindashboard/masterroles', icon: <GroupIcon /> },
    { name: 'Sex', path: '/admindashboard/mastergender', icon: <WcIcon /> },
    { name: 'Training Type', path: '/admindashboard/mastertrainingtype', icon: <SchoolIcon /> },
    { name: 'Components', path: '/admindashboard/mastercomponents', icon: <SettingsApplicationsIcon /> },
    { name: 'Venue', path: '/admindashboard/mastervenue', icon: <EventIcon /> },
    { name: 'Type Of Leave', path: '/admindashboard/masterTypeOfLeave', icon: <LogoutIcon /> },
    { name: 'DSR Status', path: '/admindashboard/masterdsrStatus', icon: <AssignmentTurnedInIcon /> },
    { name: 'Name Of Events & Ceremonies', path: '/admindashboard/masternameofeventsceremonies', icon: <CelebrationIcon /> },
    { name: 'Calendar Week Manager', path: '/admindashboard/masterCalendarWeekManager', icon: <CalendarMonthIcon /> },
    { name: 'Subject Manager', path: '/admindashboard/mastersubjectmanager', icon: <MenuBookIcon /> },
    { name: 'Breaks Manager', path: '/admindashboard/masterbreaksmanager', icon: <TimerIcon /> },
  ];

  return (
    <Box p={4} position="relative">
      <IconButton
        onClick={() => scroll(-700)}
        sx={{ position: 'absolute', top: '40%', left: 0, zIndex: 1, backgroundColor: '#fff' }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          scrollBehavior: 'smooth',
          p: 1,
          scrollbarWidth: 'none', // Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Chrome, Safari
          },
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{ minWidth: 100, flex: '0 0 auto'  }}
          >
            <Card
              onClick={() => navigate(item.path)}
              sx={{
                cursor: 'pointer',
                transition: '0.3s',
                backgroundColor: '#E8F9FF',
                border: '1px solid #ccc', // 👈 Add this line
                borderRadius: 2,
                '&:hover': {
                  boxShadow: 3,
                  borderColor: '#fff', // optional: changes border color on hover
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ fontSize: 10, color: '#1976d2' }}>
                  {item.icon}
                </Box>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" mt={1}>
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={() => scroll(700)}
        sx={{ position: 'absolute', top: '40%', right: 0, zIndex: 1, backgroundColor: '#fff' }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default MasterNavBar;

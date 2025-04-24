import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, useMediaQuery } from '@mui/material';
import {
  Home as HomeIcon,
  Business as BusinessIcon,
  LocationOn as LocationOnIcon,
  Work as WorkIcon,
  MilitaryTech as MilitaryTechIcon,
  Group as GroupIcon,
  Wc as WcIcon,
  School as SchoolIcon,
  SettingsApplications as SettingsApplicationsIcon,
  Event as EventIcon,
  Logout as LogoutIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  Celebration as CelebrationIcon,
  CalendarMonth as CalendarMonthIcon,
  MenuBook as MenuBookIcon,
  Timer as TimerIcon,
} from '@mui/icons-material';

const MasterNavBar = () => {
  const navigate = useNavigate();

  const data = [
    { name: 'Home', path: '/admindashboard', icon: <HomeIcon /> }, 
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

  // Use breakpoints to set dynamic width
  const isSmall = useMediaQuery('(max-width: 600px)');
  const isMedium = useMediaQuery('(max-width: 960px)');

  const getCardWidth = () => {
    if (isSmall) return '32%';      // 3 items per row
    if (isMedium) return '23%';     // 4 items per row
    return '8%';                   // 7–8 items per row
  };

  return (
    <Box p={4}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        {data.map((item, index) => (
          <Box key={index} sx={{ flex: `1 0 ${getCardWidth()}`, minWidth: 100 }}>
            <Card
              onClick={() => navigate(item.path)}
              sx={{
                cursor: 'pointer',
                transition: '0.3s',
                backgroundColor: '#E8F9FF',
                border: '1px solid #ccc',
                borderRadius: 2,
                '&:hover': {
                  boxShadow: 3,
                  borderColor: '#fff',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 1 }}>
                <Box sx={{ fontSize: 18, color: '#1976d2' }}>{item.icon}</Box>
                <Typography
                  sx={{
                    fontSize: 11,
                    color: 'text.secondary',
                    mt: 0.5,
                    lineHeight: 1.2,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'normal',
                  }}
                  align="center"
                >
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MasterNavBar;

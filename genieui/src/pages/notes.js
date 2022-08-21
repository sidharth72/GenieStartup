import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Button,
     Container,
      Grid,
       Link, 
       Card,
       CardActionArea,
       CardMedia,
       CardContent,
       TextField,
       CardHeader,
       Tooltip,
       CardActions,
        Typography,
         FormControl,
          InputLabel,
           Select, MenuItem } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NotesComponent } from 'src/pages/notes-component';
import NextLink from 'next/link';
import { DashboardNavbar } from 'src/components/dashboard-navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import CodeIcon from '@mui/icons-material/Code';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddSection from '../components/editor';
import { useRouter } from 'next/router';
import EditIcon from '@mui/icons-material/Edit';

const drawerWidth = 240;

export default function PermanentDrawerRight() {

  const router = useRouter();
  if(typeof window !== 'undefined'){
    localStorage.getItem('notesTitle');
  }
  else{
    console.log("Error in authentication")
  }

  return (
    <Box sx={{ display: 'flex', marginLeft:"50px", marginRight:"50px"}}>
      <CssBaseline />
      <DashboardNavbar/>
      {/*<AppBar
        position="absolute"
        sx={{ backgroundColor:"", height:"#fff", width: '100%', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
        <NextLink
            href="/"
            passHref
          >
            <Button  sx={{ '& button': { m: 2 } }} size="large" variant="primary"
              component="a"
              startIcon={<ArrowBackIcon fontSize="5px" />
            }
            >
              Dashboard
            </Button>
          </NextLink>
        </Toolbar>
          </AppBar> */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
          
          <div style={{boxShadow:"", marginRight:"60px", marginLeft:"60px"}}>
          
              <Typography
                color="textPrimary"
                variant="h5"
              >
                {(typeof window !== "undefined") ? localStorage.getItem('notesTitle'): console.log("Authentication error")}
              </Typography>

              <br/>

              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                {(typeof window !== "undefined") ? localStorage.getItem('notesDesc'): console.log("Authentication error")}
              </Typography>
        
        <Button
          size="small"
          color="secondary"
          onClick={()=>router.push('/edit-notes')}
          startIcon={(<EditIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Edit title and description
        </Button>

        
      <Grid container justifyContent="flex-end">
        
        
        <Box sx={{ m: 1 }}>

        <Tooltip title="Export as PDF">
          <Button
          color="secondary"
          startIcon={(<PictureAsPdfOutlinedIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
     
        </Button>
        </Tooltip>

        <Tooltip title="Export as HTML">
        <Button
          color="secondary"
          startIcon={(<CodeIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          
        </Button>
        </Tooltip>

        <Tooltip title="Export as raw text">
        <Button
          color="secondary"
          variant="text"
          startIcon={(<FormatColorTextIcon fontSize="small"/>)}
        >
        
        </Button>
        </Tooltip>

        
        <Tooltip title="Export as handwritten data(JPG)">
        <Button
          color="secondary"
          variant="text"
          startIcon={(<CreateOutlinedIcon fontSize="small"/>)}
        >
        
        </Button>
        </Tooltip>

                  </Box>

                </Grid>
            {/* SECTION NOTES ! IMPORTANT */}   
        <AddSection/>

     </div>
      </Box>
    </Box>
  );
}


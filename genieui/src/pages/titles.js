import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { TitleListToolbar } from '../components/product/title-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { NavItem } from 'src/components/nav-item';
import axiosInstance from './axios';
import { useRouter } from 'next/router'
import AddSection from 'src/components/editor';



const Titles = () => {

  const [userData, setUserData] = useState([]);

  const router = useRouter()

  useEffect(()=>{
    axiosInstance.get("notesapi/create/").then((response)=>{
      setUserData(response.data);
    })
  }, [])

    return(
      <>

      <Head>
      <title>
        Topics
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <TitleListToolbar />

  <Box 
    sx={{padding:"0px",marginTop:"30px", width: '100%', maxWidth: "100%", bgcolor: 'transparent' }}>
      <nav aria-label="">
        {
          userData.map((value, index)=>{

            return(
                <div key={index}>
                    <List>
                      <ListItem >
                        
                          <Button onClick={()=>{localStorage.setItem("notesID", value['data'].id);localStorage.setItem('notesTitle', value['title']);router.push('/notes')}} variant="text" style={{color:"#121212"}} size="large"
                          startIcon={(<AssignmentOutlinedIcon color="primary" size="large" />)}
                          >
                       
                            {value['title']}
                          </Button>
                        
                          {/*<Link
                          disabled
                            onClick={(e) => {
                            e.preventDefault();
                            }}
                          sx={{fontFamily:'Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji',fontSize:"1rem",color:"#28354D", fontWeight:600}} underline="none">
                            What is machine learning?
                          </Link>8*/}

                      </ListItem>
                    </List>

                    <Divider/>
                </div>

                )
              })
            }
      </nav>
    </Box>

      </Container>
    </Box>
  <div/>

      </>


    )
  
};



Titles.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Titles;

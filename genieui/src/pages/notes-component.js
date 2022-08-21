import { useState, useEffect } from 'react';
import { Box, Grid, Button, Card, Tooltip, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import  MUIRichTextEditor  from 'mui-rte/dist/MUIRichTextEditor'
import InvertColorsIcon from '@mui/icons-material/InvertColors'
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRef } from 'react';
import axiosInstance from 'axios';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TranslateIcon from '@mui/icons-material/Translate';
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


const baseURL = "http://localhost:8000/"

export const NotesComponent = (props) => {

  const [userData, setUserData] = useState([])
  const [data, setData] = useState({})
  const [flag, setFlag] = useState(false)

  const [open, setOpen] = useState(false);
  const [words, setWords] = useState('');


  const handleChange = (event) => {
    setWords(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  useEffect(()=>{
    axiosInstance.get(baseURL+"notesapi/").then((response)=>{
      Object.keys(response.data).map((item, index)=>{
        setUserData(response.data[item]['data'])
        //console.log(response.data[item]['data'])
      })
    })
  }, [])

  //console.log(userData)  
  /* [
    {
      
      "q":"sd", 
      "d":[
        {"f":"m","g":"h"},
        {"f":"m","g":"h"},
        {"f":"m","g":"h"}
      ]
    }
  ]  */

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      id:'',
      query: '',
      response_from_ai: ''
    },
    validationSchema: Yup.object({
      id: Yup
      .string(),
      query: Yup
        .string()
        .max(255)
        .required(
          'Just a title'),
      response_from_ai: Yup
        .string()
        
    }),
    onSubmit: values => {
        

      userData.slice(0,1).map((item, index)=>{
          if((item['query'] != values['query'])
          && (item['response_from_ai'] != values['response_from_ai'])){
            
            
          }
        })
    

    }

  });
  
  const Change = formik.handleChange;

  return (
    <form {...props}>
      <div>
        {
            
            userData.map((item, index)=>{

              return(
                <div>
              
                <Card variant="primary">
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                  <DialogTitle>Fill the form</DialogTitle>
                  <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel htmlFor="demo-dialog-native">Words</InputLabel>
                        <Select
                          native
                          value={words}
                          onChange={handleChange}
                          input={<OutlinedInput label="Words" id="demo-dialog-native" />}
                        >
                          <option aria-label="None" value="" />
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                          <option value={200}>200</option>
                          <option value={300}>300</option>
                          <option value={500}>500</option>
                        </Select>
                      </FormControl>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                  </DialogActions>
                </Dialog>
          
                <Grid container justifyContent="flex-end">
          
                  <Box sx={{ m: 1 }}>
                  
                  <Tooltip title="translate to other languages">
                  <Button
                    startIcon={(<TranslateIcon fontSize="medium" />)}
                    sx={{ mr: 1 }}
                  >
                    Translate
                  </Button>
                  
                  </Tooltip>
                  <Tooltip title="Number of words to generate">
                  <Button
                    startIcon={(<PinOutlinedIcon fontSize="medium" />)}
                    sx={{ mr: 1 }}
                    onClick={handleClickOpen}
                  >
                    Words
                  </Button>
                  </Tooltip>
          
                </Box>
          
                </Grid>
          
                  <Divider />
                  <CardContent>
                    <TextField
                      error={Boolean(formik.touched.query && formik.errors.query)}
                      fullWidth
                      helperText={formik.touched.query && formik.errors.query}
                      label="Your Title"
                      margin="normal"
                      name="query"
                      //onBlur={formik.handleBlur}
                      onChange={Change}
                      defaultValue={item['query']}//formik.values.query}
                      variant="outlined"
                    />
            
                <TextField
           
                      id="outlined-multiline-static"
                      fullWidth
                      label="Your Note will be generated here"
                      margin="normal"
                      rows={10}
                      multiline
                      name="response_from_ai"
                      onChange={formik.handleChange}
                      type="text" 
                      defaultValue={item['response_from_ai']}//formik.values.response_from_ai} 
                      
                    /> 
          
                    {/*<MUIRichTextEditor 
                        label="Your Notes will be Generated here..."
                        id="outlined-multiline-static"
                        name="note"
                        type="text"
                        onSave={Change}
          
              /> */}
          
                  </CardContent>
                 
                  <Box spacing={2}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 3
                    }}
                  >
                    <Button
                      
                      color="primary"
                      variant="text"
                          //disabled={formik.isSubmitting}
                      size="medium"
                     
                      onClick={formik.handleSubmit}                 
                    >
                      Save
                    </Button>
                  <Button
                      
                      color="secondary"
                      variant="text"
                          //disabled={formik.isSubmitting}
                      size="medium"
                     
                    >
                      New session
                    </Button>
          
                    <Button
                      color="primary"
                      variant="text"
                          //disabled={formik.isSubmitting}
                      size="medium"
                     
                      onClick={formik.handleSubmit}     
                    >
                      Continue
                    </Button>
          
                  </Box>
                </Card> 
  
                <Grid container justifyContent="center">
                        
                        <Box sx={{ m: 0 }}>
    
                        <Tooltip title="Add a new session">
                          <Button
                          color="secondary"
                          startIcon={(<LibraryAddIcon fontSize="medium"/>)}
                          sx={{ mr: 0 }}
                        >
                        </Button>
                        </Tooltip>
    
                        </Box>
    
                  </Grid>
                </div>
              )
          })

    }
          </div>
    </form>
  );
};


export default NotesComponent;

import React from 'react'
import { Box, Button, Grid, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewMentor } from '../../../redux/features/mentorCrud/mentorSlice'

const AddMentor = () => {
  const [mentor, setMentor] = useState({
    full_name: '',
    full_info: '',
    instagram: '',
    whatsapp: '',
    facebook: '',
  })
  const dispatch = useDispatch()
  const [selectFile, setSelectFile] = useState(null)
  const posts = useSelector((state) => state.mentor.mentors)

  const handleInput = (e, mentor, setMentor) => {
    let obj = {
      ...mentor,
      [e.target.name]: e.target.value,
    }
    setMentor(obj)
  }
  const handleChange = (e) => {
    setSelectFile(e.target.files[0])
  }

  function addData() {
    const formData = new FormData()
    formData.append('file', selectFile)

    const data = { mentor, formData }

    dispatch(addNewMentor(data))
  }
  const handleDeleteFile = () => {
    setSelectFile(null)
    // handleUpload()
  }

  return (
    <div>
      <Box sx={{ bgcolor: '#fff', height: '50vh', padding: '20vh' }}>
        <center variant="h6" gutterBottom>
          ДАБАВИТЬ МЕНТОРА
        </center>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            margin: '10vh auto',
            boxShadow: 3,
            borderRadius: 3,
            bgcolor: '#D0F4DE',
          }}
        >
          <form>
            <TextField
              value={mentor.full_name}
              fullWidth
              id="outlined-basic"
              label="ФИО"
              variant="outlined"
              name="full_name"
              onChange={(e) => handleInput(e, mentor, setMentor)}
            />
            <TextField
              value={mentor.full_info}
              fullWidth
              id="outlined-basic"
              label="DESCRIPTION"
              variant="outlined"
              name="full_info"
              onChange={(e) => handleInput(e, mentor, setMentor)}
            />
            <TextField
              value={mentor.instagram}
              fullWidth
              id="outlined-basic"
              label="instagram"
              variant="outlined"
              name="instagram"
              onChange={(e) => handleInput(e, mentor, setMentor)}
            />
            <TextField
              value={mentor.whatsapp}
              fullWidth
              id="outlined-basic"
              label="whatsapp номер"
              variant="outlined"
              name="whatsapp"
              onChange={(e) => handleInput(e, mentor, setMentor)}
            />
            <TextField
              value={mentor.facebook}
              fullWidth
              id="outlined-basic"
              label="facebook"
              variant="outlined"
              name="facebook"
              onChange={(e) => handleInput(e, mentor, setMentor)}
            />
            <Button
              variant="contained"
              disabled={selectFile ? 'disabled' : ''}
              component="label"
              sx={{ mb: '5px' }}
            >
              Прикрепить файл
              <input
                hidden
                type="file"
                onChange={handleChange}
                accept="image/*,.png,.jpg,"
              />
            </Button>
            {selectFile ? (
              <Button
                onClick={handleDeleteFile}
                color="primary"
                variant="contained"
                component="label"
                sx={{ bgcolor: '#FF0000', mb: '5px' }}
              >
                удалит файл
              </Button>
            ) : (
              ''
            )}
            <Stack
              direction="row"
              spacing={2}
              sx={{ borderRadius: '10px', bgcolor: '#DB66E4' }}
            >
              <Button
                id="button"
                sx={{
                  borderRadius: '10px',
                  bgcolor: '#C192EE',
                  borderColor: 'error.main',
                  fontFamily: 'Poppins',
                  color: '#000',
                  border: 'none',
                }}
                //  color="black"
                variant="outlined"
                size="large"
                fullWidth
                onClick={addData}
              >
                ADD MENTOR
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  )
}

export default AddMentor

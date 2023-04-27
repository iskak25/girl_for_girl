import React from 'react'
import { Box, Button, Grid, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMentors } from '../../../redux/features/mentorCrud/mentorSlice'

const AddMentor = () => {
  const [product, setProduct] = useState({
    photo: '',
    name: '',
    description: '',
  })
  const dispatch = useDispatch()
  const [selectFile, setSelectFile] = useState(null)
  const posts = useSelector((state) => state.mentor.mentors)

  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    }
    setProduct(obj)
  }
  const handleChange = (e) => {
    setSelectFile(e.target.files[0])
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
              value={product.photo}
              fullWidth
              id="outlined-basic"
              label="ФОТО"
              variant="outlined"
              name="photo"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.name}
              fullWidth
              id="outlined-basic"
              label="NAME"
              variant="outlined"
              name="name"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.description}
              fullWidth
              id="outlined-basic"
              label="DESCRIPTION"
              variant="outlined"
              name="description"
              onChange={(e) => handleInput(e, product, setProduct)}
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
                onClick={() => {
                  dispatch(addMentors(product))
                }}
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

import React from 'react'
import { Box, Button, Grid, Stack, TextField } from '@mui/material'
import { useState } from 'react'

const EditMentor = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    picture: '',
    type: '',
  })
  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    }
    setProduct(obj)
  }
  return (
    <div>
      <Box sx={{ bgcolor: '#fff', height: '50vh', padding: '20vh' }}>
        <center variant="h6" gutterBottom>
          EDIT MENTOR
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
            />{' '}
            <TextField
              value={product.price}
              fullWidth
              id="outlined-basic"
              label="PRICE"
              variant="outlined"
              name="price"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{' '}
            <TextField
              value={product.picture}
              fullWidth
              id="outlined-basic"
              label="PICTURE"
              variant="outlined"
              name="picture"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.type}
              fullWidth
              id="outlined-basic"
              label="TYPE"
              variant="outlined"
              name="type"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
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
                  // saveEditedProduct(product)
                  // navigate('/products')
                }}
              >
                EDIT PRODUCT
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  )
}

export default EditMentor

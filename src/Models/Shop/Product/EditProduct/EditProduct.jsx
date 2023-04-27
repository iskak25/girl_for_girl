import React from 'react'
import { Box, Button, Grid, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost } from '../../../../redux/features/product/productCrudSlice'
import { useMemo } from 'react'

const EditProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: null,
  })
  const dispatch = useDispatch()
  const { idProduct, isLoadingId, isError, isSuccess, message } = useSelector(
    (state) => state.product,
  )

  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    }
    setProduct(obj)
  }
  const [selectFile, setSelectFile] = useState(null)
  const handleChange = (e) => {
    setSelectFile(e.target.files[0])
  }

  function addData() {
    const formData = new FormData()
    formData.append('file', selectFile)

    const data = { product: { ...product, price: +product.price }, formData }

    dispatch(addNewPost(data))
  }

  const handleDeleteFile = () => {
    setSelectFile(null)
  }

  return (
    <div>
      <Box sx={{ bgcolor: '#fff', height: '50vh', padding: '20vh' }}>
        <center variant="h6" gutterBottom>
          ИЗМЕНИТ ПРОДУКТ
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
              value={idProduct?.title}
              fullWidth
              id="outlined-basic"
              label="названиe"
              variant="outlined"
              name="title"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={idProduct?.description}
              fullWidth
              id="outlined-basic"
              label="описания "
              variant="outlined"
              name="description"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={idProduct?.price}
              fullWidth
              id="outlined-basic"
              //   label="Цена"
              variant="outlined"
              name="price"
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
                value={idProduct.imageUrl}
                //  setSelectFile()
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
                  bgcolor: '#DB66E4',
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
                EDIT PRODUCT
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  )
}

export default EditProduct

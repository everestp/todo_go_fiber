import { Container, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from './components/Navbar'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


export const BASE_URL="http://localhost:5000/api"
function App() {


  return (
 <Stack h={`100vh`}>
  <Navbar/>
  <Container>
   <TodoForm/>
    <TodoList/>
  </Container>
 </Stack>
  )
}

export default App

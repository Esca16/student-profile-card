import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './container/Home'
import Student from './container/Student'
import Counter from './container/Counter'
import Header from './components/header'
// import StudentAdd from './components/StudentAdd'
// import FirstComponent from './components/counter/FirstComponent'

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "student",
  //     element: <Student />
  //   },
  //   {
  //     path: "counter",
  //     element: <Counter />
  //   },
  // ])
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {/* <StudentAdd /> */}
      {/* <FirstComponent /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/student' element={<Student />} />
          <Route path='/counter' element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

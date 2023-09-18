import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './container/Home'
import Student from './container/Student'
import Counter from './container/Counter'
// import Header from './components/header'
import StudentProfileContainer from './container/Student/StudentProfileContainer'
import AuthProvider from './context/AuthProvider'
import LayOut from './container/Layout/Index'
import { LogIn } from './container/Auth/Login'
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
      {/* <Header /> */}
      <BrowserRouter>
        <AuthProvider>
          <LayOut>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='student'>
                <Route path='' element={<Student />} />
                <Route path=':studentId' element={<StudentProfileContainer />} />
              </Route>
              <Route path='/counter' element={<Counter />} />
              <Route path='/login' element={<LogIn />} />
            </Routes>
          </LayOut>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App

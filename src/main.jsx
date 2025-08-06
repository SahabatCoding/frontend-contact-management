import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import UserRegister from './components/User/UserRegister'
import UserLogin from './components/User/UserLogin'
import DashboardLayout from './components/DashboardLayout'
import UserProfil from './components/User/UserProfil'
import UserLogout from './components/User/UserLogout'
import ContactCreate from './components/contact/ContactCreate'
import ContactList from './components/contact/ContactList'
import ContactEdit from './components/contact/ContactEdit'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          {/* Nested Route ini adlah Outlet */}
          <Route path='/register' element={<UserRegister />} />
          <Route path='/login' element={<UserLogin />} />
        </Route>

        <Route path='/dashboard' element={<DashboardLayout />} >
          <Route path='users'>
            <Route path='profile' element={<UserProfil />} />
            <Route path='logout' element={<UserLogout />} />
          </Route>
          <Route path='contacts'>
            <Route index element={<ContactList/>} />
            <Route path='create' element={<ContactCreate/>} />
            <Route path=':id/edit' element={<ContactEdit/>} />
          </Route>
        </Route>


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

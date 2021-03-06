import React, {ChangeEvent, useEffect, useState} from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {initializeAppTC, RequestStatusType} from './app-reducer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {Login} from "../features/login/Login";
import {Navigate, Route, Routes} from 'react-router'
import {Error} from "../features/error/Error";
import {CircularProgress, TextField, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";
import {logoutTC} from "../features/login/authReducer";
import {SearchField} from "../components/SearchField";

type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {
    const dispatch=useDispatch()
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    const isLogin = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)
    const [search, setSearch] = useState('');
    const onChangeSearch = (event:ChangeEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value)
    }
    useEffect(()=>{
        dispatch(initializeAppTC())
    },[dispatch])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }
    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                {isLogin?<Toolbar style={{display:'flex',justifyContent:'center'}}>
                    <Typography fontSize={'30px'} fontWeight={'bolder'} >ToDoLists.com</Typography>
                    <SearchField sx={{backgroundColor: 'white', marginLeft: '30px'}} onChange={onChangeSearch}/>
                    <IconButton sx={{marginLeft: '400px'}}>
                        <AccountCircleIcon/>
                    </IconButton>
                    <Button color="inherit" onClick={() => dispatch(logoutTC())}>Logout</Button>
                </Toolbar>:<Toolbar style={{display:'flex',justifyContent:'center'}}>
                    <Typography fontSize={'30px'} fontWeight={'bolder'} >ToDoLists.com</Typography>
                </Toolbar>}
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Routes>
                    <Route path='/' element={<TodolistsList searchValue={search}  demo={demo}/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/404' element={<Error/>}/>
                    <Route path={"*"} element={<Navigate to={'/404'}/>} />
                </Routes>
            </Container>
        </div>
    )
}

export default App

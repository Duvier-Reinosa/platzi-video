import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Login  from '../containers/Login'
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";

const App = () =>(
    <BrowserRouter>
        <Layout>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </Layout>
    </BrowserRouter>
)
 export default  App;
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import CreateProject from "../pages/create-project/CreateProject";
import ProjectDetails from "../pages/project-details/ProjectDetails";
import Layout from '../layout/Layout';





const AllRoutes = () => {


    return (
        <div>

            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/project-details' element={<ProjectDetails />} />
                        <Route path='/launch-project' element={<CreateProject/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>

        </div>
    );
};

export default AllRoutes;

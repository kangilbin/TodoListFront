import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SignUp from "./SignUp";
import { Switch } from "@material-ui/core";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

class AppRouter extends React.Component {
    render() {
        return (
            <diV>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/login" element={<Login />}>
                                <Login />
                            </Route>
                            <Route path="/signup" element={<SignUp />}>
                                <SignUp />
                            </Route>
                            <Route path="/">
                                <Route path="/" element={<App />} />
                                <App />
                            </Route>
                        </Switch>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Router>
            </diV>
        );
    }
}

export default AppRouter;
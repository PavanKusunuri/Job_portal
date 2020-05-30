import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-froms/CreateProfile";
import EditProfile from "../profile-froms/EditProfile";
import Profiles from "../profiles/Profiles";
import AddExperience from "../profile-froms/AddExperience";
import AddEducation from "../profile-froms/AddEducation";
import PrivateRoute from "../routing/PrivateRoute";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import NotFound from "../layout/NotFound";

export const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
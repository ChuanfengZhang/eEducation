import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CustomBrowserRouter from '../containers/custom-browser-router';
import ThemeContainer from '../containers/theme-container';
import Home from './home';
import DeviceTest from './device-test';
import { RoomPage } from './classroom';
import Loading from '../components/loading';
import Toast from '../components/toast';
import '../icons.scss';
import { PlatformContainer } from '../containers/platform-container';
import ReplayContainer from './replay';
import { RootProvider } from '../containers/root-container';
import SmallClass from './classroom/small-class';
import OneToOne from './classroom/one-to-one';
import BigClass from './classroom/big-class';
import EntryHome from './entry-home';
import {PageNotFound} from './404';

export default function () {
  return (
    <ThemeContainer>
      <CustomBrowserRouter>
        <PlatformContainer>
        <RootProvider>
          <Loading />
          <Toast />
          <Route exact path="/entry/:id/:role">
            <EntryHome />
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
            <Redirect to="/404" />
          </Route>
          <Route exact path="/device_test">
            <DeviceTest />
          </Route>
          <Route exact path="/classroom/one-to-one">
            <RoomPage >
              <OneToOne />
            </RoomPage>
          </Route>
          <Route exact path="/classroom/small-class">
            <RoomPage>
              <SmallClass />
            </RoomPage>
          </Route>
          <Route exact path="/classroom/big-class">
            <RoomPage>
              <BigClass />
            </RoomPage>
          </Route>
          <Route exact path="/replay/:uuid/:startTime/:endTime/:mediaUrl">
            <ReplayContainer />
          </Route>
          <Route exact path="/404">
            <PageNotFound />
          </Route>
        </RootProvider>
        </PlatformContainer>
      </CustomBrowserRouter>
    </ThemeContainer>
  )
}
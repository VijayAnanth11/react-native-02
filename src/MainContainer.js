import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EnterScreen from './screens/EnterScreen';

import Home from './login/Home';
import HomeTrainer from './login/HomeTrainer';
import HomeAdmin from './login/HomeAdmin';

import Login from './login/Login';
import LoginAdmin from './login/LoginAdmin';
import LoginTrainer from './login/LoginTrainer';

import Signup from './login/Signup';
import LoginChoose from './screens/LoginChoose';

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

import Membership from './screens/Membership';
import Schedule from './screens/Schedule';
import Payment from './screens/Payment';
import StaffManagement from './screens/StaffManagement';

import StaffRegister from './screens/StaffRegister';
import StaffSchedule from './screens/StaffSchedule';
import Report from './screens/Report';
import Setting from './screens/Setting';

import TrainInfo from './screens/TrainInfo';
import AttendanceReport from './screens/AttendanceReport';
import HealthReport from './screens/HealthReport';
import TrainerTime from './screens/TrainerTime';
import UserDetails from './screens/UserDetails';
import PayDetails from './screens/PayDetails';
import AttendanceDetails from './screens/AttendanceDetails';
import TimeTableHistory from './screens/TimeTableHistory';
import Revenue from './screens/Revenue';
import Cost from './screens/Cost';
import Usage from './screens/Usage';
import ViewUsage from './screens/ViewUsage';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name='Enter'
                    component={EnterScreen}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='Signup'
                    component={Signup}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='Choose'
                    component={LoginChoose}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='First'
                    component={FirstScreen}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='Member'
                    component={Membership}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='Schedule'
                    component={Schedule}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='Payment'
                    component={Payment}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='StaffManagement'
                    component={StaffManagement}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='StaffRegister'
                    component={StaffRegister}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='StaffSchedule'
                    component={StaffSchedule}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='Report'
                    component={Report}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='Setting'
                    component={Setting}
                    options={{ title: "CYLONFIT" }}
                />

                <Stack.Screen
                    name='HomeAdmin'
                    component={HomeAdmin}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='HomeTrainer'
                    component={HomeTrainer}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='LoginAdmin'
                    component={LoginAdmin}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='LoginTrainer'
                    component={LoginTrainer}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='SecondScreen'
                    component={SecondScreen}
                    options={{ title: "CYLONFIT" }}
                />
                <Stack.Screen
                    name='ThirdScreen'
                    component={ThirdScreen}
                    options={{ title: "CYLONFIT" }}
                />

                <Stack.Screen
                    name='TrainInfo'
                    component={TrainInfo}
                    options={{ title: "CYLONFIT" }}
                />
                 <Stack.Screen
                    name='AttendanceReport'
                    component={AttendanceReport}
                    options={{ title: "CYLONFIT" }}
                />
                 <Stack.Screen
                    name='HealthReport'
                    component={HealthReport}
                    options={{ title: "CYLONFIT" }}
                />
                 <Stack.Screen
                    name='TrainerTime'
                    component={TrainerTime}
                    options={{ title: "CYLONFIT" }}
                />
                  <Stack.Screen
                    name='UserDetails'
                    component={UserDetails}
                    options={{ title: "CYLONFIT" }}
                />
                   <Stack.Screen
                    name='PayDetails'
                    component={PayDetails}
                    options={{ title: "CYLONFIT" }}
                />
                   <Stack.Screen
                    name='AttendanceDetails'
                    component={AttendanceDetails}
                    options={{ title: "CYLONFIT" }}
                />
                   <Stack.Screen
                    name='TimeTableHistory'
                    component={TimeTableHistory}
                    options={{ title: "CYLONFIT" }}
                />
                   <Stack.Screen
                    name='Revenue'
                    component={Revenue}
                    options={{ title: "CYLONFIT" }}
                />
                   <Stack.Screen
                    name='Cost'
                    component={Cost}
                    options={{ title: "CYLONFIT" }}
                />
                 <Stack.Screen
                    name='Usage'
                    component={Usage}
                    options={{ title: "CYLONFIT" }}
                />
                 <Stack.Screen
                    name='ViewUsage'
                    component={ViewUsage}
                    options={{ title: "CYLONFIT" }}
                />

            </Stack.Navigator>
        </NavigationContainer>

    );
}
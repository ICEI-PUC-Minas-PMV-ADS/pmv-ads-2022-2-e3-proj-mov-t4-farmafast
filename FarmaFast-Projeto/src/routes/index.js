import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignInF from '../pages/SignInF'
import SignInU from '../pages/SignInU';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
           <Stack.Screen
            name= "Welcome"
            component={Welcome}
            options={{ headerShown: false}}
           /> 

           <Stack.Screen
            name= "SignInU"
            component={SignInU}
            options={{ headerShown: false}}
           /> 

           <Stack.Screen
            name= "SignInF"
            component={SignInF}
            options={{ headerShown: false}}
           /> 
        </Stack.Navigator>
)
}
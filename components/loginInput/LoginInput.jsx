import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './loginInput.style';
import { usePushToken } from '../../hooks/usePushToken';
import { useAuth } from '../../hooks/useAuth'

const LoginInput = ({ setLogStatus, setOnline, handleLogin, loginError }) => {
   const { pushToken } = usePushToken('');

   const [inputUser, setInputUser] = useState('');
   const [inputPass, setInputPass] = useState('');
   const [usernameFocused, setUsernameFocused] = useState(false);
   const [passwordFocused, setPasswordFocused] = useState(false);

   return (
       <View style={styles.container}>
           <Text style={styles.selectMessage}>Enter your login info:</Text>
           
           <View style={styles.inputContainer}>
               <Text style={styles.inputLabel}>Username</Text>
               <TextInput
                   placeholder="Enter your username"
                   value={inputUser}
                   onChangeText={text => setInputUser(text)}
                   onFocus={() => setUsernameFocused(true)}
                   onBlur={() => setUsernameFocused(false)}
                   style={[
                       styles.textInput,
                       usernameFocused && styles.textInputFocused
                   ]}
                   autoCapitalize="none"
                   autoCorrect={false}
               />
           </View>

           <View style={styles.inputContainer}>
               <Text style={styles.inputLabel}>Password</Text>
               <TextInput
                   placeholder="Enter your password"
                   value={inputPass}
                   onChangeText={text => setInputPass(text)}
                   onFocus={() => setPasswordFocused(true)}
                   onBlur={() => setPasswordFocused(false)}
                   style={[
                       styles.textInput,
                       passwordFocused && styles.textInputFocused
                   ]}
                   secureTextEntry={true}
                   autoCapitalize="none"
                   autoCorrect={false}
               />
           </View>

           {loginError && (
               <View style={styles.errorContainer}>
                   <Text style={styles.errorMessage}>{loginError}</Text>
               </View>
           )}

           <TouchableOpacity 
                style={styles.loginButton}
                onPress={() => {
                    console.log("Login button pressed with:", inputUser, inputPass);
                    handleLogin(inputUser, inputPass, pushToken)
                }}
           >
               <Text style={styles.loginText}>Confirm</Text>
           </TouchableOpacity>

           <TouchableOpacity 
               style={styles.signupButton}
               onPress={() => {
                   setLogStatus("")
               }}
           >
               <Text style={styles.signupText}>Go Back</Text>
           </TouchableOpacity>
       </View>
   )
}

export default LoginInput;
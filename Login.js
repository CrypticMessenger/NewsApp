import React,{useState,useEffect} from "react";
import { Heading,useToast,useColorMode } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,TouchableOpacity,Text,StyleSheet,Button } from 'react-native';
import Home from './Home'
import {Center,Box,VStack,FormControl,Input,Link } from 'native-base';
import { Icon } from 'react-native-vector-icons';



const Login = () => {

  const {
    colorMode,
    toggleColorMode
  } = useColorMode();
 
  const [user,setUser]=useState('')
  const [pwd,setPwd]=useState('')
  const credentials = {
    'user':'abc@gmail.com',
    'pwd':'123'
  }
  const handleChangeUser = (e)=>{
    setUser(e)
  }
  const handleChangePwd = (e)=>{
    setPwd(e)
  }
  const storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
  }
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('abc@gmail.com')
      if(value !== null) {
        setIsLoggedIn(true)
      }
      else{
        console.log('not logged in')
      }
    } catch(e) {
      // error reading value
    }
  }
  
  // useEffect(()=>{
  //   toggleColorMode()
  // },[])
  useEffect(()=>{
    getData();
  },[isLoggedIn])

  const toast = useToast();
  const handlePress = ()=>{
    if(credentials.user === user && credentials.pwd === pwd){
      storeData(user,pwd)
      getData()
      setUser('')
      setPwd('')
    }
    else{
      toast.show({
      title:"Incorrect Credentials",
      description: "Type correct credentials"
    })
    setUser('')
    setPwd('')
    }
  }


  const str = "Switch Theme"
  const handleClick = ()=>{
    toggleColorMode();
  }

  return (
    <React.Fragment>
    <Box mt={35}>
    <Button style={{borderRadius:35}} color='#6d28d9'
  title={colorMode==='dark'?'Dark Mode':'Light Mode'} onPress={toggleColorMode} />
    </Box>
    {isLoggedIn?(
       <Home/>
      
      ):
    (
      <View style={{flex:1,backgroundColor:colorMode==='dark'?'#000000':'#ffffff'}}>
      <Center flex={1} px="3">
      <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290" style={{backgroundColor:colorMode==='dark'?'#000000':'#ffffff'}}>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input type='text' value={user} onChangeText={(txt)=>handleChangeUser(txt)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" value={pwd} onChangeText={(txt)=>handleChangePwd(txt)}/>
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button  title="Sign in" color="#4338ca" onPress={handlePress}/>
            
         
        </VStack>
      </Box>
    </Center>
    </Center>
    </View>
    )
    }
    </React.Fragment>
  );
};
export default Login;
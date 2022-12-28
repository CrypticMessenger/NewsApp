import React,{useState,useEffect} from "react";
import { Heading,useToast } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text,View } from 'react-native';
import Home from './Home'
import { Container, Content,Center,Box,VStack,FormControl,Input,Link,Button,HStack } from 'native-base';
// function Login(){
//   return (
//     <Text>Hi there</Text>
//   )

// }
const Login = () => {
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






  return (
    <React.Fragment>
    {isLoggedIn?(
      <Home/>
      ):
    (<Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
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
          <Button mt="2" colorScheme="indigo" onPress={handlePress}>
            Sign in
          </Button>
         
        </VStack>
      </Box>
    </Center>)
    }
    </React.Fragment>
  );
};
export default Login;
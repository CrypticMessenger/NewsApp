import React from 'react'
import {Box,AspectRatio,Image,Text,Heading,Center,Stack,HStack,Link} from 'native-base'
import {Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Card = (props) => {
  const navigation = useNavigation();
  function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

const formattedDate = formatDate(props.publishedAt);





  return (<Box alignItems="center" m={2}>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: props.urlToImage
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {props.title}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              - {props.author}
            </Text>
          </Stack>
          <Text fontWeight="400">
           {props.description}...{"\n"}<Link isExternal _text={{
        color: "violet.400"
      }} mt={-0.5} _web={{
        mb: -2
      }} href={props.url}>Read More</Link>{"\n\n"}<Button color="#7700cc" title="Details" onPress={()=>{
        navigation.navigate('Details',{
          title:props.title,
          description:props.description,
          url:props.url,
          imageUrl:props.urlToImage,
          date:formattedDate,
          content:props.content,
          author:props.author
        });
      }}/>
        
      

          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                {formattedDate}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>);
};


export default Card;

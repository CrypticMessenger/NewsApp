import React from 'react'
import {Text,Box,AspectRatio,Image,Center,Stack,Heading,HStack,Link,View} from "native-base"
function Details({route}){
  return(
    <View style={{backgroundColor:route.params.mode==='light'?'#ffffff':'#000000'}}>
      <Box alignItems="center" p={3}>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading fontSize="2xl" ml="-1">
              {route.params.title}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              - {route.params.author} ({route.params.date})
            </Text>
          </Stack>
          <Text fontWeight="400" italic>
            {route.params.description}
          </Text>
          <Text fontWeight="500">
            {route.params.content}
          </Text>
          <Link isExternal _text={{
            color: "violet.400"
          }} mt={-0.5} _web={{
            mb: -2
          }} href={route.params.url}>Read More</Link>
          <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: route.params.imageUrl
          }} alt="image" />
          </AspectRatio>
         
        </Box>
          
        </Stack>
      </Box>
    </Box>
    </View>
  )
}


export default Details;
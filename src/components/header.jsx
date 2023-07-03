import { Box, Button, Center,  Heading } from "@chakra-ui/react";


function Header () {
    return (

   <Box
    bgImage="url('./src/assets/Fondo.jpg')"
     bgSize="cover"
      bgPosition="center"
      height="400"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Heading 
        as="h2"
      color="white"
      fontSize="4xl"
      fontFamily="Arial"
      fontWeight="lighter"
      textDecor="whitesmok">
        Domina el terreno
      </Heading>
      <Center mt="20px">
        <Button 
        variant="outline" 
        mr="10px"
        size="md"
        height="45"
        width="200px"
        border="1px"
        borderColor="white"
        color="#e7e7e8"
        borderRadius="none"
        _hover={{ bg: "#Fff",  color: "#abadaf" }}
       
        >
         VER DETALLE
        </Button>
        <Button
         variant="outline"
        color="#fff"
         _hover={{ bg: "#Fff",  color: "#abadaf" }}
         borderRadius="none"
         >VER VIDEO</Button>
      </Center>
    </Box>
    

 
   
  );
    
}

export default Header;
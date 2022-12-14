import { Box, Button, HStack, IconButton, Stack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import {FaAirbnb, FaMoon, FaSun} from "react-icons/fa"
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
    const{ isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen } = useDisclosure();
    const{ isOpen:isSignUpOpen, onClose:onSignUpClose, onOpen:onSignUpOpen } = useDisclosure();
    const {toggleColorMode} = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.200");
    const Icon = useColorModeValue(FaMoon, FaSun);
    return (
        <Stack justifyContent={"space-between"} py={5} px={40} borderBottomWidth={1} direction={{sm:"column", md:"row"}} alignItems="center" spacing={{sm:4, md:0}}>
            <Box color={logoColor}>
                <Link to={"/"}>
                    <FaAirbnb size={"38"}/>
                </Link>
            </Box>
            <HStack>
                <IconButton
                    onClick={toggleColorMode} 
                    variant={"ghost"} 
                    aria-label="Toggle dark mode" 
                    icon={<Icon/>} 
                />
                <Button onClick={onLoginOpen}>Log in</Button>
                <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
        </Stack>
    )
}
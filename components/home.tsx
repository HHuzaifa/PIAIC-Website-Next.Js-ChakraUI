import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  
  export default function Home() {
    return (
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Image
              alt=""
              src="https://www.piaic.org/static/media/Logo.fb7de414.svg"
              width="200px"
              height="200px"
            />
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "green.600",
                  zIndex: -1,
                }}
              >
                Presidential Initiative
              </Text>
              <br />{" "}
              <Text color={"green.600"} as={"span"}>
                for Artificial Intelligence & Computing (PIAIC)
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  as="a"
                  href="https://portal.piaic.org/signup"
                  rounded={"full"}
                  bg={"green.600"}
                  color={"white"}
                  _hover={{
                    bg: "black",
                  }}
                >
                  Apply Now
                </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"https://www.piaic.org/static/media/president-png.5b5f05c1.png"}
          />
        </Flex>
      </Stack>
    );
  }
  
import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  const testimonials = [
    {
      name: "Web 3.0 (Blockchain) and Metaverse Specialization",
      role: "",
      content:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      avatar:
        "https://imageio.forbes.com/specials-images/imageserve//62ac5da6dad8c4c2780ae0ff/0x0.jpg?format=jpg&width=1200",
    },
    {
      name: "Artificial Intelligence (AI) and Deep Learning Specialization",
      role: "",
      content:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      avatar:
        "https://imageio.forbes.com/specials-images/imageserve/5f278facccb6d3d3cc3c63b1/3-Important-Ways-Artificial-Intelligence-Will-Transform-Your-Business-And-Turbocharge/960x0.jpg?format=jpg&width=960",
    },
    {
      name: "Cloud-Native Computing Specialization",
      role: "",
      content:
        "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
      avatar:
        "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/cloud%20computing%20images%202_0.jpg?itok=hEDSGwR0",
    },
    {
      name: "Ambient Computing and IoT Specialization",
      role: "",
      content:
        "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
      avatar:
        "https://fortecloud.com/wp-content/uploads/2022/03/iot-blog-1-1024x536.png",
    },
    {
      name: "Genomics and Bioinformatics Specialization",
      role: "",
      content:
        "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
      avatar:
        "https://www.thoughtco.com/thmb/dj4nerFEPPv_pE3D-TRLYo_b-a0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3-D_DNA-56a09ae45f9b58eba4b20266.jpg",
    },
    {
      name: "Network Programmability and Automation Specialization",
      role: "",
      content:
        "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
      avatar:
        "https://lagrowthmachine.com/app/uploads/2022/02/Sales-Automation-1200x900.jpg",
    },
  ];
  
  
  
  interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    avatar: string;
    index: number;
  }
  
  function TestimonialCard(props: TestimonialCardProps) {
    const { name, role, content, avatar} = props;
    return (
      <Flex
        boxShadow={"lg"}
        maxW={"640px"}
        direction={{ base: "column-reverse", md: "row" }}
        width={"full"}
        rounded={"xl"}
        p={10}
        justifyContent={"space-between"}
        position={"relative"}
        bg={useColorModeValue("white", "gray.800")}
        _after={{
          content: '""',
          position: "absolute",
          height: "21px",
          width: "29px",
          left: "35px",
          top: "-10px",
          backgroundSize: "cover",
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
        }}
        _before={{
          content: '""',
          position: "absolute",
          zIndex: "-1",
          height: "full",
          maxW: "640px",
          width: "full",
          filter: "blur(40px)",
          transform: "scale(0.98)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          top: 0,
          left: 0,
        }}
      >
        <Flex
          direction={"column"}
          textAlign={"left"}
          justifyContent={"space-between"}
        >
          <chakra.p
            fontFamily={"Inter"}
            fontWeight={"medium"}
            fontSize={"15px"}
            pb={4}
          >
            {content}
          </chakra.p>
          <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14}>
            {name}
            <chakra.span
              fontFamily={"Inter"}
              fontWeight={"medium"}
              color={"gray.500"}
            >
              {" "}
            </chakra.span>
          </chakra.p>
        </Flex>
        <Avatar
          src={avatar}
          height={"80px"}
          width={"80px"}
          alignSelf={"center"}
          m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
        />
      </Flex>
    );
  }
  
  export default function Courses() {
    return (
      <Flex
        textAlign={"center"}
        pt={10}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
          <chakra.h3
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            fontSize={20}
            textTransform={"uppercase"}
            color={"green.500"}
          >
            We make leaders!
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            color={useColorModeValue("gray.700", "gray.50")}
          >
            You're in good company
          </chakra.h1>
          <chakra.h2
            margin={"auto"}
            width={"70%"}
            fontFamily={"Inter"}
            fontWeight={"medium"}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Over{" "}
            <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
              20000
            </chakra.strong>{" "}
            upcomming software engineers are enrolled!
          </chakra.h2>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
        >
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
      </Flex>
    );
  }
  
import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Outcome() {
  return (
    <div>
      <Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          The Outcome for Participants of the Program
        </Heading>
        <Text color={"gray.508"}>
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </Text>
      </Box>
    </div>
  );
}

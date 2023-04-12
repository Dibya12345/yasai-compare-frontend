import { useEffect} from "react";
import { useDispatch} from "react-redux";
import { Box, Image } from "@chakra-ui/react";
import yasai from "../../assets/yasai.png";

const LandingPage = () => {

  useEffect(() => {
    // getUserInfo();
  }, []);

  // console.log(authData);
  return (
    <Box fontSize="100">
      <Image src={yasai} />
    </Box>
  );
};

export default LandingPage;

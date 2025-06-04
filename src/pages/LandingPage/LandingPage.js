import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { YasaiLogo } from "../../assets/yasai_logo.png";
import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  Heading,
  VStack,
  HStack,
  Grid,
  Image,
  Icon,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Badge,
  Avatar,
  Card,
  CardBody,
  SimpleGrid,
  Center,
  Divider,
  Link,
  useBreakpointValue,
  keyframes,
  chakra,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  StarIcon,
  SearchIcon,
  CheckCircleIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import yasai from "../../assets/yasai.png";

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FloatingBox = chakra(Box, {
  baseStyle: {
    animation: `${float} 3s ease-in-out infinite`,
  },
});

const FadeInBox = chakra(Box, {
  baseStyle: {
    animation: `${fadeInUp} 0.8s ease-out`,
  },
});

const LandingPage = () => {
  useEffect(() => {
    // getUserInfo();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "YasaiCompare saved me ₹500 last month! The AI recommendations are spot-on.",
      avatar: "https://100k-faces.glitch.me/random-image",
    },
    {
      name: "Rajesh Kumar",
      text: "Finally, I can compare prices from all my local vendors in one place. Game changer!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Anita Patel",
      text: "The nutrition insights help me make healthier choices for my family. Love it!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const vendors = [
    {
      name: "Fresh Valley Market",
      location: "Bhubaneswar, Odisha",
      rating: 4.8,
      freshness: "Excellent",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop",
    },
    {
      name: "Green Garden Store",
      location: "Cuttack, Odisha",
      rating: 4.6,
      freshness: "Very Good",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=300&h=200&fit=crop",
    },
    {
      name: "Organic Oasis",
      location: "Puri, Odisha",
      rating: 4.9,
      freshness: "Outstanding",
      image:
        "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&h=200&fit=crop",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const NavLinks = () => (
    <>
      <Link
        href="#"
        color="gray.700"
        fontWeight="medium"
        _hover={{ color: "green.500" }}
      >
        Home
      </Link>
      <Link
        href="#features"
        color="gray.700"
        fontWeight="medium"
        _hover={{ color: "green.500" }}
      >
        Features
      </Link>
      <Link
        href="#vendors"
        color="gray.700"
        fontWeight="medium"
        _hover={{ color: "green.500" }}
      >
        Vendors
      </Link>
      <Link
        href="#about"
        color="gray.700"
        fontWeight="medium"
        _hover={{ color: "green.500" }}
      >
        About
      </Link>
      <Link
        href="#contact"
        color="gray.700"
        fontWeight="medium"
        _hover={{ color: "green.500" }}
      >
        Contact
      </Link>
    </>
  );

  // console.log(authData);
  return (
    <Box bg="gray.50" minH="100vh">
      {/* Header */}
      <Box bg="white" boxShadow="sm" position="sticky" top="0" zIndex="100">
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <Heading size="lg" color="green.600" fontWeight="bold">
              🥬 YasaiCompare
            </Heading>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <NavLinks />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Hero Section */}
      <Box
        bg="linear-gradient(135deg, #68D391 0%, #38A169 100%)"
        color="white"
        py={20}
      >
        <Container maxW="7xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={10}
            alignItems="center"
          >
            <FadeInBox>
              <VStack align="start" spacing={6}>
                <Heading size="2xl" lineHeight="shorter" fontWeight="bold">
                  Find Fresh Groceries at the Best Prices
                </Heading>
                <Text fontSize="xl" opacity={0.9}>
                  Compare prices, read reviews, and shop smart — all in one
                  place.
                </Text>
                <HStack spacing={4}>
                  <Button
                    size="lg"
                    bg="white"
                    color="green.600"
                    _hover={{ bg: "gray.100", transform: "translateY(-2px)" }}
                    transition="all 0.3s"
                    fontWeight="bold"
                  >
                    Get Started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="white"
                    color="white"
                    _hover={{ bg: "whiteAlpha.200" }}
                  >
                    View Demo
                  </Button>
                </HStack>
              </VStack>
            </FadeInBox>

            <Center>
              <FloatingBox>
                <Box
                  bg="white"
                  p={6}
                  rounded="3xl"
                  boxShadow="2xl"
                  maxW="300px"
                >
                  <VStack spacing={4}>
                    <HStack justify="space-between" w="100%">
                      <Text fontSize="lg" fontWeight="bold" color="gray.800">
                        🥕 Carrots
                      </Text>
                      <Badge colorScheme="green">Fresh</Badge>
                    </HStack>
                    <HStack justify="space-between" w="100%" fontSize="sm">
                      <VStack align="start" spacing={1}>
                        <Text color="gray.600">Market A</Text>
                        <Text fontWeight="bold" color="green.600">
                          ₹45/kg
                        </Text>
                      </VStack>
                      <VStack align="start" spacing={1}>
                        <Text color="gray.600">Market B</Text>
                        <Text fontWeight="bold" color="red.500">
                          ₹52/kg
                        </Text>
                      </VStack>
                    </HStack>
                    <Button size="sm" colorScheme="green" w="100%">
                      Choose Best Deal
                    </Button>
                  </VStack>
                </Box>
              </FloatingBox>
            </Center>
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Heading size="xl" textAlign="center" color="gray.800">
              How It Works
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Card
                variant="outline"
                borderColor="green.200"
                _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
                transition="all 0.3s"
              >
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Box bg="green.100" p={4} rounded="full">
                      <Text fontSize="2xl">🛍️</Text>
                    </Box>
                    <Heading size="md" color="green.600">
                      Browse Vendors
                    </Heading>
                    <Text color="gray.600">
                      Explore local vendors and their fresh produce offerings in
                      your area
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                variant="outline"
                borderColor="green.200"
                _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
                transition="all 0.3s"
              >
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Box bg="green.100" p={4} rounded="full">
                      <Text fontSize="2xl">📊</Text>
                    </Box>
                    <Heading size="md" color="green.600">
                      Compare Prices & Reviews
                    </Heading>
                    <Text color="gray.600">
                      Get real-time price comparisons and read authentic
                      customer reviews
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                variant="outline"
                borderColor="green.200"
                _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
                transition="all 0.3s"
              >
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Box bg="green.100" p={4} rounded="full">
                      <Text fontSize="2xl">💳</Text>
                    </Box>
                    <Heading size="md" color="green.600">
                      Checkout with Ease
                    </Heading>
                    <Text color="gray.600">
                      Complete your purchase seamlessly with secure payment
                      options
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Key Features */}
      <Box py={20} bg="gray.50" id="features">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Heading size="xl" textAlign="center" color="gray.800">
              Key Features
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              <Card
                bg="white"
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.3s"
              >
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Icon as={SearchIcon} boxSize={8} color="green.500" />
                    <Heading size="sm" color="green.600">
                      Smart AI Recommendations
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      Get personalized suggestions based on your preferences and
                      budget
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                bg="white"
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.3s"
              >
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Icon as={CheckCircleIcon} boxSize={8} color="green.500" />
                    <Heading size="sm" color="green.600">
                      Real-Time Price Updates
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      Always get the latest prices from all your favorite
                      vendors
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                bg="white"
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.3s"
              >
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Text fontSize="32px">🥗</Text>
                    <Heading size="sm" color="green.600">
                      Nutrition Insights
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      Make informed choices with detailed nutritional
                      information
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                bg="white"
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.3s"
              >
                <CardBody textAlign="center">
                  <VStack spacing={4}>
                    <Icon as={StarIcon} boxSize={8} color="green.500" />
                    <Heading size="sm" color="green.600">
                      Vendor Ratings & Photos
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      View authentic photos and ratings from verified customers
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Heading size="xl" textAlign="center" color="gray.800">
              What Our Users Say
            </Heading>

            <Box maxW="2xl" mx="auto">
              <Card bg="green.50" borderColor="green.200" borderWidth="2px">
                <CardBody>
                  <VStack spacing={6}>
                    <Avatar
                      size="lg"
                      src={testimonials[currentTestimonial].avatar}
                      name={testimonials[currentTestimonial].name}
                    />
                    <Text
                      fontSize="lg"
                      textAlign="center"
                      fontStyle="italic"
                      color="gray.700"
                    >
                      "{testimonials[currentTestimonial].text}"
                    </Text>
                    <Text fontWeight="bold" color="green.600">
                      — {testimonials[currentTestimonial].name}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>

              <HStack justify="center" mt={4} spacing={2}>
                {testimonials.map((_, index) => (
                  <Box
                    key={index}
                    w={3}
                    h={3}
                    rounded="full"
                    bg={currentTestimonial === index ? "green.500" : "gray.300"}
                    cursor="pointer"
                    onClick={() => setCurrentTestimonial(index)}
                    transition="all 0.3s"
                  />
                ))}
              </HStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Vendor Highlight */}
      <Box py={20} bg="gray.50" id="vendors">
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Heading size="xl" textAlign="center" color="gray.800">
              Featured Vendors
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {vendors.map((vendor, index) => (
                <Card
                  key={index}
                  overflow="hidden"
                  _hover={{ transform: "translateY(-5px)" }}
                  transition="all 0.3s"
                >
                  <Image
                    src={vendor.image}
                    alt={vendor.name}
                    h="200px"
                    objectFit="cover"
                  />
                  <CardBody>
                    <VStack align="start" spacing={3}>
                      <Heading size="md" color="green.600">
                        {vendor.name}
                      </Heading>
                      <Text color="gray.600">{vendor.location}</Text>
                      <HStack>
                        <HStack spacing={1}>
                          <Icon as={StarIcon} color="yellow.400" boxSize={4} />
                          <Text fontWeight="bold">{vendor.rating}</Text>
                        </HStack>
                        <Badge colorScheme="green">{vendor.freshness}</Badge>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* App Preview */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={10}
            alignItems="center"
          >
            <VStack align="start" spacing={6}>
              <Heading size="xl" color="gray.800">
                Get YasaiCompare on Your Phone
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Take smart grocery shopping with you wherever you go. Coming
                soon on iOS & Android.
              </Text>
              <HStack spacing={4}>
                <Button leftIcon={<PhoneIcon />} colorScheme="green" size="lg">
                  Notify Me
                </Button>
              </HStack>
            </VStack>

            <Center>
              <HStack spacing={4}>
                <Box
                  bg="gray.800"
                  p={4}
                  rounded="3xl"
                  transform="rotate(-10deg)"
                  boxShadow="2xl"
                >
                  <Box bg="white" p={4} rounded="2xl" w="200px" h="350px">
                    <VStack spacing={4} align="start">
                      <Text fontWeight="bold" color="green.600">
                        YasaiCompare
                      </Text>
                      <Box bg="green.100" p={3} rounded="lg" w="100%">
                        <Text fontSize="sm" fontWeight="bold">
                          🥕 Fresh Carrots
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                          3 vendors nearby
                        </Text>
                      </Box>
                      <Box bg="blue.100" p={3} rounded="lg" w="100%">
                        <Text fontSize="sm" fontWeight="bold">
                          🥬 Organic Lettuce
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                          5 vendors nearby
                        </Text>
                      </Box>
                      <Box bg="yellow.100" p={3} rounded="lg" w="100%">
                        <Text fontSize="sm" fontWeight="bold">
                          🍅 Roma Tomatoes
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                          4 vendors nearby
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </Box>

                <Box
                  bg="gray.800"
                  p={4}
                  rounded="3xl"
                  transform="rotate(10deg)"
                  boxShadow="2xl"
                >
                  <Box bg="white" p={4} rounded="2xl" w="200px" h="350px">
                    <VStack spacing={4}>
                      <Text fontWeight="bold" color="green.600">
                        Price Comparison
                      </Text>
                      <Box w="100%">
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm">Market A</Text>
                          <Text
                            fontSize="sm"
                            fontWeight="bold"
                            color="green.600"
                          >
                            ₹45/kg
                          </Text>
                        </HStack>
                        <HStack justify="space-between" mb={2}>
                          <Text fontSize="sm">Market B</Text>
                          <Text fontSize="sm" color="gray.600">
                            ₹52/kg
                          </Text>
                        </HStack>
                        <HStack justify="space-between">
                          <Text fontSize="sm">Market C</Text>
                          <Text fontSize="sm" color="gray.600">
                            ₹48/kg
                          </Text>
                        </HStack>
                      </Box>
                      <Button size="sm" colorScheme="green" w="100%">
                        Choose Best Deal
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </HStack>
            </Center>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20} bg="green.600" color="white">
        <Container maxW="7xl">
          <VStack spacing={8} textAlign="center">
            <Heading size="xl">Ready to shop smarter?</Heading>
            <Text fontSize="lg" opacity={0.9}>
              Join thousands of smart shoppers who save money and time with
              YasaiCompare
            </Text>
            <Button
              size="lg"
              bg="white"
              color="green.600"
              _hover={{ bg: "gray.100", transform: "scale(1.05)" }}
              transition="all 0.3s"
              fontWeight="bold"
            >
              Try YasaiCompare Today
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={12} id="contact">
        <Container maxW="7xl">
          <VStack spacing={8}>
            <Heading size="lg" color="green.400">
              🥬 YasaiCompare
            </Heading>

            <HStack spacing={8} flexWrap="wrap" justify="center">
              <Link _hover={{ color: "green.400" }}>Privacy Policy</Link>
              <Link _hover={{ color: "green.400" }}>Terms of Service</Link>
              <Link _hover={{ color: "green.400" }}>Contact</Link>
            </HStack>

            <HStack spacing={6}>
              <Link _hover={{ color: "green.400" }}>📱 Instagram</Link>
              <Link _hover={{ color: "green.400" }}>💬 WhatsApp</Link>
              <Link _hover={{ color: "green.400" }}>💼 LinkedIn</Link>
            </HStack>

            <Divider />

            <Text fontSize="sm" color="gray.400" textAlign="center">
              © 2025 YasaiCompare. All rights reserved.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;

import './App.css';
import * as React from 'react';
import {
    Box, Image, Text, Container, Button, Center, Menu, MenuButton, MenuList, MenuItem,
    AvatarGroup, Link, Divider
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@fontsource/poppins';
import '@fontsource/roboto';


const Homepage = () => {

    /*const BreakPoint = useBreakpointValue({ base: 'md', md: '100%' });
    const BaoDaoLogo_BP_W = useBreakpointValue({ base: '118px', md: '160px' });
    const BaoDaoLogo_BP_H = useBreakpointValue({ base: '42px', md: '58px' });
    const BaoDaoLogo_BP_pl = useBreakpointValue({ base: '9px', md: '40px' });
    const Top_BP_pr = useBreakpointValue({ base: '18px', md: '40px' });
    const Top_BP_Bc = useBreakpointValue({ base: '#FFF', md: '#F5F6F9' });
    const Whylearn_BP_FS = useBreakpointValue({ base: '20px', md: '32px' });
    const Whylearn_BP_pt = useBreakpointValue({ base: '24px', md: '48px' });
    const Whylearn_BP_pb = useBreakpointValue({ base: '24px', md: '48px' });
    const Startlearning_BP_W = useBreakpointValue({ base: '288px', md: '300px' });
    const Startlearning_BP_H = useBreakpointValue({ base: '32px', md: '48px' });
    const Startlearning_BP_FS = useBreakpointValue({ base: '13px', md: '15px' });
    const WellAndSelected_BP_FD = useBreakpointValue({ base: 'column', md: 'row' });
    const WellAndSelected_BP_MR = useBreakpointValue({ base: '0px', md: '148px' });
    const WellAndSelected_BP_JC = useBreakpointValue({ base: '', md: 'center' });
    const Whylearn_BP_boxsize = useBreakpointValue({ base: '', md: '357px' });
    const Boost_BP_pb = useBreakpointValue({ base: '24px', md: '40px' });
    const Select_BP_pb = useBreakpointValue({ base: '', md: '40px' });
    const WellAndSelected_BP_pb = useBreakpointValue({ base: '24px', md: '' });
    const Bookyour_BP_FS = useBreakpointValue({ base: '20px', md: '32px' });
    const Bookyour_BP_pt = useBreakpointValue({ base: '24px', md: '48px' });
    const Bookyour_BP_boxsize = useBreakpointValue({ base: '', md: '448px' });
    const HiTeacher_BP_W = useBreakpointValue({ base: '', md: '487px' });
    const HiTeacher_BP_H = useBreakpointValue({ base: '', md: '394px' });
    const HiTeacher_BP_MR = useBreakpointValue({ base: '0px', md: '100px' });
    const Specially_BP_TA = useBreakpointValue({ base: '', md: 'center' });
    const Specially_BP_M = useBreakpointValue({ base: '', md: '123px' });
    const Specially_BP_pl = useBreakpointValue({ base: '16px', md: '88px' });
    const AboutBaoDao_BP_bgcenter = useBreakpointValue({ base: '75% center', md: '' });
    const AboutBaoDao_BP_W = useBreakpointValue({ base: '', md: '50%' });
    const AboutBaoDao_BP_pb = useBreakpointValue({ base: '12px', md: '20px' });
    const AboutBaoDao_BP_pl = useBreakpointValue({ base: '16px', md: '32px' });
    const AboutBaoDao_BP_pl2 = useBreakpointValue({ base: '', md: '32px' });
    const AboutBaoDao_BP_wordsize = useBreakpointValue({ base: '20px', md: '32px' });
    const Bottom_BP_pt = useBreakpointValue({ base: '16px', md: '40px' });
    const Bottom_BP_pt2 = useBreakpointValue({ base: '16px', md: '' });
    const Bottom_BP_pr = useBreakpointValue({ base: '', md: '40px' });
    const Bottom_BP_pr2 = useBreakpointValue({ base: '', md: '117px' });
    const Bottom_BP_W = useBreakpointValue({ base: '', md: '318px' });
    const Bottom_BP_ML = useBreakpointValue({ base: '', md: 'auto' });*/


    return (
        <>
            {/* 頁面頂部 */}
            <Container display='flex' height='80px' maxW={{ base: 'md', md: '100%' }} padding='0px 0px 0px 0px'>

                {/* 頁面頂部BaoDaoLOGO */}
                <Box my='auto' pl={{ base: '9px', md: '40px' }}>
                    <Box>
                        <Image width={{ base: '118px', md: '160px' }} height={{ base: '42px', md: '58px' }} src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/navbar-logo.png" />
                    </Box>
                </Box>

                {/* 頁面頂部右上角三條線SVG */}
                <Box flexDirection='row' marginLeft='auto' my='auto' display='flex' pr={{ base: '18px', md: '40px' }}>

                    <Box display={{ base: 'block', md: 'none' }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <rect x="0.416992" width="17.5828" height="4" rx="2" fill="#6248B6" />
                            <rect x="0.416992" y="7.5" width="17.5828" height="4" rx="2" fill="#6248B6" />
                            <rect x="0.416992" y="15" width="17.5828" height="4" rx="2" fill="#6248B6" />
                        </svg>
                    </Box>


                    <Box display={{ base: 'none', md: 'block' }} flexDirection='row' gap='6px'>

                        <Link color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='500' fontSize='16px' pr='32px'>
                            Find tutors
                        </Link>


                        <Link color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='500' fontSize='16px' pr='14px'>
                            Become a tutor
                        </Link>

                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon w='24px' h='24px' />} bg='#FFF' >
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='500' fontSize='16px'>
                                    English
                                </Text>
                            </MenuButton>
                            <MenuList>
                                <MenuItem>繁體中文</MenuItem>
                            </MenuList>
                        </Menu>

                        <Button w='118px' h='38px' bg='#7156E5' borderRadius='4px' justifyContent='center' alignContent='center'>
                            <Text color='#FFF' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Log in
                            </Text>
                        </Button>
                    </Box>
                </Box>

            </Container>

            {/* Online Mandarin Learning至Women圖片 */}
            <Container bg={{ base: '#FFF', md: '#F5F6F9' }} maxW={{ base: 'md', md: '100%' }} display='flex' padding='0px 0px 0px 0px' justifyContent='center'>

                {/* Online Mandarin Learning文字 */}
                <Box display={{ base: 'block', md: 'none' }}>
                    <Box pt='24px' pl='16px' pb='8px' >
                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                            Online Mandarin Learning
                        </Text>
                    </Box>

                    {/* Learn Once,Use Anywhere文字 */}
                    <Box pl='16px' pb='8px' >
                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='24px'>
                            Learn Once,<br></br>Use Anywhere
                        </Text>
                    </Box>

                    {/* Join BaoDao Talk today to immerse....文字 */}
                    <Box pl='16px' pr='16px' pb='16px' >
                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px'>
                            Join BaoDao Talk today to immerse yourself in the language and culture simultaneously
                        </Text>
                    </Box>

                    {/* Get Started按鈕 */}
                    <Center pb='16px' pr='16px' pl='16px'>
                        <Button w='100%' h='32px' bg='#7156E5' borderRadius='4px' >
                            <Text color='#FFF' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='13px'>
                                Get Started
                            </Text>
                        </Button>
                    </Center>

                    <Box>
                        <Image width="100%" height="100%" src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section1_Women_Mobile.png"></Image>
                    </Box>
                </Box>


                <Box display={{ base: 'none', md: 'block' }} >
                    <Box display='flex' margin='42px' maxW='1358px' >

                        <Box width='100%' p="40px 27px" display='flex' flexDirection='column' justifyContent='center'>
                            <Box >
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='32px'>
                                    Online Mandarin Learning
                                </Text>
                            </Box>
                            <Box pt='8px' pb='12px' >
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='48px'>
                                    Learn Once, Use Anywhere
                                </Text>
                            </Box>
                            <Box pb='24px' >
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px'>
                                    Join BaoDao Talk today to immerse yourself in the language and culture simultaneously
                                </Text>
                            </Box>
                            <Box display='flex' flexDirection='row'>
                                <Box  >
                                    <Button w='150px' h='48px' bg='#7156E5' borderRadius='4px' >
                                        <Text color='#FFF' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='15px'>
                                            Get Started
                                        </Text>
                                    </Button>
                                </Box>
                                <Box pl='24px' >
                                    <Button w='174px' h='48px' bg='#F5F6F9' borderRadius='4px' border='1px'>
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px' pr='7px'>
                                            How it works
                                        </Text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                            <path d="M9 18L15 12L9 6" stroke="#313030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        <Box width='100%' >
                            <Image src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section1_Women_Desktop.png" ></Image>
                        </Box>
                    </Box>
                </Box>

            </Container>

            {/* A boead....文字 至 Find tutors按鈕 */}
            <Container maxW={{ base: 'md', md: '100%' }} padding='0px 0px 0px 0px'>

                {/* A boead....文字 */}
                <Box padding='24px 12px 24px 16px' display={{ base: 'block', md: 'none' }} >
                    <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='20px' >
                        A broad selection of<br></br> qualified tutors and topics
                    </Text>
                </Box>
                <Center>
                    <Box pb='24px' pt='48px' display={{ base: 'none', md: 'block' }} >
                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='32px' >
                            A broad selection of qualified tutors and topics
                        </Text>
                    </Box>
                </Center>

                <Center>
                    <Box display={{ base: 'none', md: 'block' }} pb='32px' >
                        <Button padding='8px 20px' bg='#313030' borderRadius='30px' margin='16px'>
                            <Text color='#FFF' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Business
                            </Text>
                        </Button>
                        <Button padding='8px 20px' bg='#F5F6F9' borderRadius='30px' margin='16px'>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Travel
                            </Text>
                        </Button>
                        <Button padding='8px 20px' bg='#F5F6F9' borderRadius='30px' margin='16px'>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                TOCFL
                            </Text>
                        </Button>
                        <Button padding='8px 20px' bg='#F5F6F9' borderRadius='30px' margin='16px'>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Kids and Teens
                            </Text>
                        </Button>
                        <Button padding='8px 20px' bg='#F5F6F9' borderRadius='30px' margin='16px'>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Advanced
                            </Text>
                        </Button>
                        <Button padding='8px 20px' bg='#F5F6F9' borderRadius='30px' margin='16px'>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Basic
                            </Text>
                        </Button>
                        <Button padding='8px 20px' bg='#F5F6F9' borderRadius='30px' margin='16px'>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Intermediate
                            </Text>
                        </Button>
                        <Button padding='8px 20px' bg='#F5F6F9' borderRadius='30px' margin='16px'>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                More
                            </Text>
                        </Button>
                    </Box>
                </Center>
            </Container>

            <Container display={{ base: 'block', md: 'none' }} >
                <Container padding='0px 40px 0px 40px' display='flex' height='400px' maxW='md'>

                    <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <Box display='flex' justifyContent='center'>
                                <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                                    <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                                    <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                        <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                            Dobby Potter
                                        </Text>
                                    </Box>

                                    {/* 哈比人下面 */}


                                    <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                                TOCEL
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Bussiness
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Business
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                    </AvatarGroup>


                                    <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                        <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                            Trial from
                                        </Text>
                                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                            33 Points
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box display='flex' justifyContent='center'>
                                <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                                    <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                                    <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                        <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                            Dobby Potter
                                        </Text>
                                    </Box>

                                    {/* 哈比人下面 */}


                                    <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                                TOCEL
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Bussiness
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Business
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                    </AvatarGroup>


                                    <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                        <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                            Trial from
                                        </Text>
                                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                            33 Points
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box display='flex' justifyContent='center'>
                                <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                                    <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                                    <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                        <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                            Dobby Potter
                                        </Text>
                                    </Box>

                                    {/* 哈比人下面 */}


                                    <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                                TOCEL
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Bussiness
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Business
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                    </AvatarGroup>


                                    <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                        <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                            Trial from
                                        </Text>
                                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                            33 Points
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box display='flex' justifyContent='center'>
                                <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                                    <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                                    <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                        <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                            Dobby Potter
                                        </Text>
                                    </Box>

                                    {/* 哈比人下面 */}


                                    <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                                TOCEL
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Bussiness
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Business
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                    </AvatarGroup>


                                    <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                        <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                            Trial from
                                        </Text>
                                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                            33 Points
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box display='flex' justifyContent='center'>
                                <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                                    <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                                    <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                        <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                            Dobby Potter
                                        </Text>
                                    </Box>

                                    {/* 哈比人下面 */}


                                    <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                                TOCEL
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Bussiness
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Business
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                    </AvatarGroup>


                                    <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                        <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                            Trial from
                                        </Text>
                                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                            33 Points
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box display='flex' justifyContent='center'>
                                <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                                    <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                                    <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                        <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                            Dobby Potter
                                        </Text>
                                    </Box>

                                    {/* 哈比人下面 */}


                                    <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                                TOCEL
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Bussiness
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Business
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                    </AvatarGroup>


                                    <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                        <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                            Trial from
                                        </Text>
                                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                            33 Points
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box display='flex' justifyContent='center'>
                                <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                                    <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                                    <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                        <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                            Dobby Potter
                                        </Text>
                                    </Box>

                                    {/* 哈比人下面 */}


                                    <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                                TOCEL
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Bussiness
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Business
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                        <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                                Travel
                                            </Text>
                                        </Box>
                                    </AvatarGroup>


                                    <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                        <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                            Trial from
                                        </Text>
                                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                            33 Points
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>


                    </Swiper>

                </Container>
            </Container>

            <Container display={{ base: 'none', md: 'block' }} pb='29px' maxW='100%' w='1500px'>
                <Container display='flex' gap='53px' flexWrap='wrap' maxW='100%' justifyContent='center'>

                    <Box display='flex' justifyContent='center'>
                        <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                            <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                            <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                    Dobby Potter
                                </Text>
                            </Box>

                            {/* 哈比人下面 */}


                            <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                        TOCEL
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Bussiness
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Business
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                            </AvatarGroup>


                            <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                    Trial from
                                </Text>
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                    33 Points
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                            <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                            <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                    Dobby Potter
                                </Text>
                            </Box>

                            {/* 哈比人下面 */}


                            <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                        TOCEL
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Bussiness
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Business
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                            </AvatarGroup>


                            <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                    Trial from
                                </Text>
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                    33 Points
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                            <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                            <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                    Dobby Potter
                                </Text>
                            </Box>

                            {/* 哈比人下面 */}


                            <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                        TOCEL
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Bussiness
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Business
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                            </AvatarGroup>


                            <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                    Trial from
                                </Text>
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                    33 Points
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                            <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                            <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                    Dobby Potter
                                </Text>
                            </Box>

                            {/* 哈比人下面 */}


                            <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                        TOCEL
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Bussiness
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Business
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                            </AvatarGroup>


                            <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                    Trial from
                                </Text>
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                    33 Points
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                            <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                            <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                    Dobby Potter
                                </Text>
                            </Box>

                            {/* 哈比人下面 */}


                            <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                        TOCEL
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Bussiness
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Business
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                            </AvatarGroup>


                            <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                    Trial from
                                </Text>
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                    33 Points
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                            <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                            <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                    Dobby Potter
                                </Text>
                            </Box>

                            {/* 哈比人下面 */}


                            <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                        TOCEL
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Bussiness
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Business
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                            </AvatarGroup>


                            <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                    Trial from
                                </Text>
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                    33 Points
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                            <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                            <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                    Dobby Potter
                                </Text>
                            </Box>

                            {/* 哈比人下面 */}


                            <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                        TOCEL
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Bussiness
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Business
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                            </AvatarGroup>


                            <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                    Trial from
                                </Text>
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                    33 Points
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='center'>
                        <Box border='1px' borderColor='#E5E5E5' borderRadius='8px' overflow='hidden' width='300px' height='100%' display='flex' flexDirection='column'>
                            <Image w='100%' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png"></Image>

                            <Box pl='12px' pt='12px' display='flex' alignItems='center'>
                                <Image pr='11.72px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png"></Image>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                    Dobby Potter
                                </Text>
                            </Box>

                            {/* 哈比人下面 */}


                            <AvatarGroup pt='12px' pl='12px' pr='12px' gap='20px' flexWrap='wrap' max={4} size='sm' color='#6F6E6E' flexDirection='row-reverse'>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px' >
                                        TOCEL
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Bussiness
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Business
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                                <Box bg='#F5F6F9' padding='4px 16px' borderRadius='4px'>
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                        Travel
                                    </Text>
                                </Box>
                            </AvatarGroup>


                            <Box pl='12px' pt='19px' pb='12px' display='flex' alignItems='center' gap='10px'>
                                <Text color='#929292' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='14px'>
                                    Trial from
                                </Text>
                                <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize='18px'>
                                    33 Points
                                </Text>
                            </Box>
                        </Box>
                    </Box>


                </Container>
            </Container>


            <Container>
                {/* Find tutors 按鈕 */}
                <Center pt='10px' pb='24px'>
                    <Button w={{ base: '288px', md: '300px' }} h={{ base: '32px', md: '48px' }} bg='#F5F6F9' borderRadius='4px'>
                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize={{ base: '13px', md: '15px' }}>
                            Find tutors
                        </Text>
                    </Button>
                </Center>

            </Container>

            {/* Why learn ....文字 至 Start learning 按鈕*/}
            <Container pt={{ base: '24px', md: '48px' }} pl='16px' pr='12px' pb={{ base: '24px', md: '48px' }} bg='#F5F6F9' maxW={{ base: 'md', md: '100%' }}>

                {/* Why learn with BaoDao Talk 文字 */}
                <Box display='flex' justifyContent='center' alignItems='center' bg='#F5F6F9' pb={{ base: '24px', md: '40px' }}>
                    <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize={{ base: '20px', md: '32px' }}>
                        Why learn with BaoDao Talk
                    </Text>
                </Box>

                {/* Well-structured Courses 文字 */}
                <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} justifyContent={{ base: '', md: 'center' }} pb={{ base: '', md: '40px' }}>

                    <Box display='flex' flexShrink='0' pb={{ base: '24px', md: '' }} marginRight={{ base: '0px', md: '148px' }} >
                        <Box display='flex' pr="16px" flexShrink='0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                                <g>
                                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#FEA32B" />
                                </g>
                                <g>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" x="10.5" y="10.5">
                                        <path d="M11.0001 17.7199H5.2881C4.34721 17.7199 3.87677 17.7199 3.51739 17.5368C3.20128 17.3757 2.94427 17.1187 2.78321 16.8026C2.6001 16.4432 2.6001 15.9728 2.6001 15.0319V6.96791C2.6001 6.02702 2.60010 5.55657 2.78321 5.1972C2.94427 4.88109 3.20128 4.62408 3.51739 4.46302C3.87677 4.27991 4.34721 4.27991 5.2881 4.27991H5.6241C7.50587 4.27991 8.44676 4.27991 9.16551 4.64613C9.79773 4.96826 10.3117 5.48227 10.6339 6.1145C11.0001 6.83324 11.0001 7.77413 11.0001 9.65591M11.0001 17.7199V9.65591M11.0001 17.7199H16.7121C17.653 17.7199 18.1234 17.7199 18.4828 17.5368C18.7989 17.3757 19.0559 17.1187 19.217 16.8026C19.4001 16.4432 19.4001 15.9728 19.4001 15.0319V6.96791C19.4001 6.02702 19.4001 5.55657 19.217 5.1972C19.0559 4.88109 18.7989 4.62408 18.4828 4.46302C18.1234 4.27991 17.653 4.27991 16.7121 4.27991H16.3761C14.4943 4.27991 13.5534 4.27991 12.8347 4.64613C12.2025 4.96826 11.6885 5.48227 11.3663 6.1145C11.0001 6.83324 11.0001 7.77413 11.0001 9.65591" stroke="#FE9000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </g>
                            </svg>
                        </Box>
                        <Box display='flex' flexDirection='column' w={{ base: '', md: '357px' }}>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Well-structured Courses
                            </Text>
                            <Text color='#6F6E6E' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px'>
                                Spiral curriculum revisits and builds upon previous lessons.
                            </Text>
                        </Box>
                    </Box>

                    {/* Selected Tutors 文字 */}
                    <Box display='flex' flexShrink='0' pb={{ base: '24px', md: '' }}>
                        <Box display='flex' pr="16px" flexShrink='0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                                <g>
                                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#FEA32B" />
                                </g>
                                <g>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="10.5" y="10.5" fill="none">
                                        <path d="M19.4001 10.9997H17.7201M16.9397 16.9394L15.7518 15.7515M4.2801 10.9997H2.6001M6.24815 6.24799L5.06021 5.06005M11.0001 4.27973V2.59973M15.7518 6.24799L16.9397 5.06005M11.0001 19.3997V17.7197M5.06021 16.9394L6.24815 15.7515M11.0001 6.79973L12.2979 9.42893L15.2001 9.85313L13.1001 11.8985L13.5957 14.7881L11.0001 13.4231L8.4045 14.7881L8.9001 11.8985L6.8001 9.85313L9.7023 9.42893L11.0001 6.79973Z" stroke="#FE9000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </g>
                            </svg>
                        </Box>
                        <Box display='flex' flexDirection='column' w={{ base: '', md: '357px' }}>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Selected Tutors
                            </Text>
                            <Text color='#6F6E6E' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px'>
                                Highly qualified and experienced Mandarin tutors carefully chosen by us.
                            </Text>
                        </Box>
                    </Box>
                </Box>

                {/* Interactive Learning 文字 */}
                <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} justifyContent={{ base: '', md: 'center' }} pb={{ base: '24px', md: '40px' }}>
                    <Box display='flex' flexShrink='0' pb='24px' marginRight={{ base: '0px', md: '148px' }}>

                        <Box display='flex' pr="16px" flexShrink='0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                                <g>
                                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#FEA32B" />
                                </g>
                                <g>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="10.5" y="10.5" fill="none">
                                        <path d="M18.5601 14.3597V6.96766C18.5601 6.02677 18.5601 5.55633 18.377 5.19696C18.2159 4.88085 17.9589 4.62384 17.6428 4.46277C17.2834 4.27966 16.813 4.27966 15.8721 4.27966H6.1281C5.18721 4.27966 4.71677 4.27966 4.35739 4.46277C4.04128 4.62384 3.78427 4.88085 3.62321 5.19696C3.4401 5.55633 3.4401 6.02677 3.4401 6.96766V14.3597M4.8401 17.7197H17.1601C17.6809 17.7197 17.9413 17.7197 18.1549 17.6624C18.7347 17.5071 19.1875 17.0542 19.3429 16.4745C19.4001 16.2608 19.4001 16.0004 19.4001 15.4797C19.4001 15.2193 19.4001 15.0891 19.3715 14.9823C19.2938 14.6924 19.0674 14.466 18.7775 14.3883C18.6707 14.3597 18.5405 14.3597 18.2801 14.3597H3.7201C3.45971 14.3597 3.32951 14.3597 3.22269 14.3883C2.93281 14.466 2.70639 14.6924 2.62872 14.9823C2.6001 15.0891 2.6001 15.2193 2.6001 15.4797C2.6001 16.0004 2.6001 16.2608 2.65734 16.4745C2.81269 17.0542 3.26553 17.5071 3.84528 17.6624C4.05892 17.7197 4.31931 17.7197 4.8401 17.7197Z" stroke="#FE9000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </g>
                            </svg>
                        </Box>
                        <Box display='flex' flexDirection='column' w={{ base: '', md: '357px' }}>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Interactive Learning
                            </Text>
                            <Text color='#6F6E6E' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px'>
                                Innovative interactive materials for high-quality instruction.
                            </Text>
                        </Box>
                    </Box>

                    {/* Boost your Mandarin learning journey 文字 */}
                    <Box display='flex' flexShrink='0' >

                        <Box display='flex' pr="16px" flexShrink='0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                                <g>
                                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#FEA32B" />
                                </g>
                                <g>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="10.5" y="10.5" fill="none">
                                        <path d="M19.4001 6.79968L12.7904 13.4093C12.4578 13.742 12.2915 13.9083 12.0997 13.9706C11.931 14.0254 11.7492 14.0254 11.5805 13.9706C11.3887 13.9083 11.2224 13.742 10.8897 13.4093L8.59045 11.11C8.25779 10.7774 8.09147 10.6111 7.89967 10.5487C7.73096 10.4939 7.54923 10.4939 7.38052 10.5487C7.18873 10.6111 7.0224 10.7774 6.68975 11.11L2.6001 15.1997M19.4001 6.79968H13.5201M19.4001 6.79968V12.6797" stroke="#FE9000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </g>
                            </svg>
                        </Box>
                        <Box display='flex' flexDirection='column' w={{ base: '', md: '357px' }}>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px'>
                                Boost your Mandarin learning journey
                            </Text>
                            <Text color='#6F6E6E' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px'>
                                Learning Traditional Mandarin will enhance your comprehension of Chinese culture and help you learn Mandarin more quickly in the long run.
                            </Text>
                        </Box>
                    </Box>
                </Box>

                {/* Start learning 按鈕 */}
                <Center>
                    <Button w={{ base: '288px', md: '300px' }} h={{ base: '32px', md: '48px' }} bg='#FE9000' borderRadius='4px'>
                        <Text color='#FFF' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize={{ base: '13px', md: '15px' }}>
                            Start learning
                        </Text>
                    </Button>
                </Center>

            </Container>

            {/* Book your lesson ....文字 至 Book your lesson now 按鈕*/}
            <Container flexShrink='0' pt={{ base: '24px', md: '48px' }} pl='16px' pb={{ base: '24px', md: '48px' }} maxW={{ base: 'md', md: '100%' }}>

                {/* Book your lesson... 文字 */}
                <Box display='flex' justifyContent='center' alignItems='center' pb={{ base: '24px', md: '48px' }} pr='18px' pos='positive'>
                    <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize={{ base: '20px', md: '32px' }} >
                        Book your lesson in 3 easy steps with BaoDao Talk
                    </Text>
                </Box>

                {/* 嗨老師 圖片 */}
                <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} justifyContent={{ base: '', md: 'center' }} >
                    <Image maxW={{ base: '', md: '487px' }} maxH={{ base: '', md: '394px' }} flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section4_HiTeacher.png" marginRight={{ base: '0px', md: '100px' }} pb={{ base: '24px', md: '40px' }}></Image>

                    {/* Choose a tutor 文字 */}
                    <Box>
                        <Box display='flex' flexShrink='0' pb={{ base: '24px', md: '48px' }} pr='13px' w={{ base: '', md: '448px' }}>

                            <Box display='flex' pr="16px" flexShrink='0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#C5BAF4" />
                                    <text x="21" y="21" text-anchor="middle" alignment-baseline="middle" fill='#7156E5' fontWeight='700' fontStyle='normal' fontFamily="Poppins" fontSize="20px">1</text>
                                </svg>
                            </Box>

                            <Box display='flex' flexDirection='column' >
                                <Text color='#121212' fontFamily='Poppins' fontStyle='normal' fontWeight='600' fontSize='20px' pb='12px'>
                                    Choose a tutor
                                </Text>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='12px'>
                                    Explore tutors and review their background, expertise and experience. You can also message a tutor to personalize your lessons and communicate your specific needs.
                                </Text>
                            </Box>
                        </Box>

                        {/* Select a time and schedule a class 文字 */}
                        <Box display='flex' flexShrink='0' pb={{ base: '24px', md: '48px' }} pr='13px' w={{ base: '', md: '448px' }}>

                            <Box display='flex' pr="16px" flexShrink='0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#C5BAF4" />
                                    <text x="21" y="21" text-anchor="middle" alignment-baseline="middle" fill='#7156E5' fontWeight='700' fontStyle='normal' fontFamily="Poppins" fontSize="20px">2</text>
                                </svg>
                            </Box>

                            <Box display='flex' flexDirection='column' >
                                <Text color='#121212' fontFamily='Poppins' fontStyle='normal' fontWeight='600' fontSize='20px' pb='12px'>
                                    Select a time and schedule a class
                                </Text>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='12px'>
                                    Select a time slot and schedule a one-on-one lesson. You have the flexibility to cancel or reschedule up to 12 hours before your class.
                                </Text>
                            </Box>
                        </Box>

                        {/* Top-up your points 文字 */}
                        <Box display='flex' flexShrink='0' pb='24px' pr='13px' w={{ base: '', md: '448px' }}>

                            <Box display='flex' pr="16px" flexShrink='0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#C5BAF4" />
                                    <text x="21" y="21" text-anchor="middle" alignment-baseline="middle" fill='#7156E5' fontWeight='700' fontStyle='normal' fontFamily="Poppins" fontSize="20px">3</text>
                                </svg>
                            </Box>

                            <Box display='flex' flexDirection='column' >
                                <Text color='#121212' fontFamily='Poppins' fontStyle='normal' fontWeight='600' fontSize='20px' pb='12px'>
                                    Top-up your points
                                </Text>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='12px'>
                                    Add points to your account for instant checkout.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Book your lesson now 按鈕 */}
                <Center>
                    <Button w={{ base: '288px', md: '300px' }} h={{ base: '32px', md: '48px' }} bg='#7156E5' borderRadius='4px'>
                        <Text color='#FFF' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize={{ base: '13px', md: '15px' }}>
                            Book your lesson now
                        </Text>
                    </Button>
                </Center>

            </Container>

            {/* Specially designed interactive ....文字 至 Rectangle*/}
            <Container flexShrink='0' pt={{ base: '24px', md: '48px' }} pl={{ base: '16px', md: '88px' }} pr={{ base: '16px', md: '88px' }} pb={{ base: '24px', md: '48px' }} maxW={{ base: 'md', md: '100%' }}>

                {/* Specially designed interactive... 文字 */}
                <Box display='flex' justifyContent='center' alignItems='center' pb={{ base: '24px', md: '48px' }} >
                    <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize={{ base: '20px', md: '32px' }}>
                        Specially designed interactive materials for students at all levels
                    </Text>
                </Box>
                <Container display={{ base: 'block', md: 'none' }} maxW={{ base: 'md', md: '100%' }}>
                    <Swiper scrollbar={{ draggable: true }} modules={[Scrollbar]} className="mySwiper">
                        <SwiperSlide>
                            <Box display='flex' flexDirection='row'  >
                                <Box display='flex' flexDirection='column' w='100%' h='100%' marginRight={{ base: '', md: '123px' }}>
                                    {/* 台灣飲食文化圖片 */}
                                    <Image borderRadius='8px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_TaiwanFoodculture.png"></Image>

                                    {/* Spiral curriculum design 文字 */}
                                    <Box display='flex' pt='24px' pb='12px' >
                                        <Text color='#7156E5' fontFamily='Poppins' fontStyle='normal' fontWeight='500' fontSize='20px' >
                                            Spiral curriculum design
                                        </Text>
                                    </Box>

                                    {/* Integrating and expanding ...文字 */}
                                    <Box display='flex' alignItems='center' pb='24px' >
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px' textAlign={{ base: '', md: 'center' }}>
                                            Integrating and expanding new and old concepts for complete understanding
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box marginRight={{ base: '', md: '123px' }}>
                                <Box display='flex' flexDirection='column' w='100%' h='100%' >
                                    {/* 台灣飲食文化圖片 */}
                                    <Image borderRadius='8px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_TaiwanTroditionalclothies.jpg"></Image>

                                    {/* Spiral curriculum design 文字 */}
                                    <Box display='flex' pt='24px' pb='12px' >
                                        <Text color='#7156E5' fontFamily='Poppins' fontStyle='normal' fontWeight='500' fontSize='20px' >
                                            Traditional Mandarin Mastery
                                        </Text>
                                    </Box>

                                    {/* Integrating and expanding ...文字 */}
                                    <Box display='flex' alignItems='center' pb='24px' >
                                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px' textAlign={{ base: '', md: 'center' }}>
                                            Immersion in Taiwan culture and life. Bringing everyday conversations to life through practical learning.
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box display='flex' flexDirection='column' w='100%' h='100%'>
                                {/* 台灣飲食文化圖片 */}
                                <Image borderRadius='8px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_HeIsHoXian.png"></Image>

                                {/* Spiral curriculum design 文字 */}
                                <Box display='flex' pt='24px' pb='12px' >
                                    <Text color='#7156E5' fontFamily='Poppins' fontStyle='normal' fontWeight='500' fontSize='20px' >
                                        Building solid foundations
                                    </Text>
                                </Box>

                                {/* Integrating and expanding ...文字 */}
                                <Box display='flex' alignItems='center' pb='24px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px' textAlign={{ base: '', md: 'center' }}>
                                        Transforming short-Term memory into long-term knowledge
                                    </Text>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Container>

                <Container display={{ base: 'none', md: 'block' }} maxW={{ base: 'md', md: '100%' }}>
                    <Container display='flex' maxW='100%' maxH='100%' textAlign='center' gap='123px'>

                        <Box display='flex' flexDirection='row' w='100%' h='100%' >
                            <Box display='flex' flexDirection='column'  >
                                {/* 台灣飲食文化圖片 */}
                                <Image borderRadius='8px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_TaiwanFoodculture.png"></Image>

                                {/* Spiral curriculum design 文字 */}
                                <Box display='flex' pt='24px' pb='12px' justifyContent='center'>
                                    <Text color='#7156E5' fontFamily='Poppins' fontStyle='normal' fontWeight='500' fontSize='20px' >
                                        Spiral curriculum design
                                    </Text>
                                </Box>

                                {/* Integrating and expanding ...文字 */}
                                <Box display='flex' alignItems='center' pb='24px' >
                                    <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px' >
                                        Integrating and expanding new and old concepts for complete understanding
                                    </Text>
                                </Box>
                            </Box>
                        </Box>


                        <Box display='flex' flexDirection='column' w='100%' h='100%'>
                            {/* 台灣飲食文化圖片 */}
                            <Image borderRadius='8px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_TaiwanTroditionalclothies.jpg"></Image>

                            {/* Spiral curriculum design 文字 */}
                            <Box display='flex' pt='24px' pb='12px' justifyContent='center'>
                                <Text color='#7156E5' fontFamily='Poppins' fontStyle='normal' fontWeight='500' fontSize='20px' >
                                    Traditional Mandarin Mastery
                                </Text>
                            </Box>

                            {/* Integrating and expanding ...文字 */}
                            <Box display='flex' alignItems='center' pb='24px' >
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px' >
                                    Immersion in Taiwan culture and life. Bringing everyday conversations to life through practical learning.
                                </Text>
                            </Box>
                        </Box>


                        <Box display='flex' flexDirection='column' w='100%' h='100%'>
                            {/* 台灣飲食文化圖片 */}
                            <Image borderRadius='8px' flexShrink='0' src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_HeIsHoXian.png"></Image>

                            {/* Spiral curriculum design 文字 */}
                            <Box display='flex' pt='24px' pb='12px' justifyContent='center'>
                                <Text color='#7156E5' fontFamily='Poppins' fontStyle='normal' fontWeight='500' fontSize='20px' >
                                    Building solid foundations
                                </Text>
                            </Box>

                            {/* Integrating and expanding ...文字 */}
                            <Box display='flex' alignItems='center' pb='24px' >
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px' >
                                    Transforming short-Term memory into long-term knowledge
                                </Text>
                            </Box>
                        </Box>
                    </Container>
                </Container>

            </Container >

            {/* About BaoDao Talk */}
            < Container bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section6_TwoWomen.png" backgroundSize="cover" backgroundPosition={{ base: '75% center', md: 'top' }} backgroundRepeat="no-repeat" pt={{ base: '24px', md: '40px' }} pb={{ base: '24px', md: '40px' }} pl={{ base: '', md: '32px' }} maxW={{ base: 'md', md: '100%' }} >

                <Box pt='24px' pb='24px' display='flex' bg='rgba(255, 255, 255, 0.95)' borderRadius='8px' flexDirection='column' w={{ base: '', md: '50%' }}>
                    {/* About BaoDao Talk 文字*/}
                    <Box pl={{ base: '16px', md: '32px' }} pr='16px' pb='12px'>
                        <Text color='#313030' fontFamily='Poppins' fontStyle='normal' fontWeight='700' fontSize={{ base: '20px', md: '32px' }} >
                            About BaoDao Talk
                        </Text>
                    </Box>

                    {/* "寶島..." 文字*/}
                    <Box pl={{ base: '16px', md: '32px' }} pr='16px' pb={{ base: '12px', md: '20px' }}>
                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px' >
                            "寶島 BaoDao" means "beautiful and rich island" which is another name represents Taiwan.
                        </Text>
                    </Box>

                    {/* "We promote Taiwanese..." 文字*/}
                    <Box pl={{ base: '16px', md: '32px' }} pr='16px' pb={{ base: '12px', md: '20px' }}>
                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px' >
                            We promote Taiwanese culture and Mandarin, offering professional Mandarin learning services to help people know more about Taiwan, and experience its unique culture.
                        </Text>
                    </Box>

                    {/* "Join us in embracing..." 文字*/}
                    <Box pl={{ base: '16px', md: '32px' }} pr='16px' pb={{ base: '12px', md: '20px' }}>
                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='16px' >
                            Join us in embracing the beauty of Taiwan and sharing the spirit of "BaoDao" with the world.
                        </Text>
                    </Box>

                    <Box pl={{ base: '16px', md: '32px' }} display={{ base: 'none', md: 'block' }}>
                        <Button w='300px' h='48px' bg='#7156E5' borderRadius='4px' >
                            <Text color='#FFF' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='15px'>
                                Start learning
                            </Text>
                        </Button>
                    </Box>


                </Box>

                {/* Get Started 按鈕 */}
                <Center pt='24px' >
                    <Button display={{ base: 'block', md: 'none' }} w='288px' h='32px' bg='#7156E5' borderRadius='4px'>
                        <Text color='#FFF' fontFamily='Roboto' fontStyle='normal' fontWeight='700' fontSize='13px'>
                            Get Started
                        </Text>
                    </Button>
                </Center>

            </Container >

            {/* 底層 */}
            < Container maxW={{ base: 'md', md: '100%' }} bg='#F5F6F9' pt={{ base: '16px', md: '40px' }} pl={{ base: '16px', md: '40px' }} pb={{ base: '16px', md: '40px' }} pr={{ base: '', md: '40px' }} >
                <Box display='flex' flexDirection={{ base: 'column', md: 'row' }}>
                    <Box width={{ base: '118px', md: '160px' }} height={{ base: '42px', md: '58px' }}>
                        <Image src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/navbar-logo.png" alt="BaoDao Logo" />
                    </Box>

                    <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} marginLeft='auto'>
                        <Box display='flex' pt={{ base: '16px', md: '' }} flexDirection='column' marginRight='78px'>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px' pb='8px'>
                                Learn More
                            </Text>
                            <Box >
                                <Link color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px' opacity='0.8'>
                                    About us
                                </Link>
                            </Box>
                            <Box>
                                <Link color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px' opacity='0.8'>
                                    FAQs
                                </Link>
                            </Box>
                        </Box >

                        <Box display='flex' pt={{ base: '16px', md: '' }} flexDirection='column' marginRight='78px'>
                            <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px' pb='8px'>
                                Legal
                            </Text>
                            <Box>
                                <Link color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px' opacity='0.8'>
                                    Terms of Use
                                </Link>
                            </Box>
                            <Box>
                                <Link color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px' opacity='0.8'>
                                    Privacy Policy
                                </Link>
                            </Box>
                        </Box >

                        <Box display='flex' pt={{ base: '16px', md: '' }} flexDirection='column' pr={{ base: '', md: '117px' }}>
                            <Box>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='600' fontSize='16px' pb='8px'>
                                    Contacts
                                </Text>
                            </Box>
                            <Box>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px' pb='8px' opacity='0.8'>
                                    Shang Chin Education and Training Co., Ltd.
                                </Text>
                            </Box>
                            <Box w={{ base: '', md: '318px' }}>
                                <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px' pb='8px' opacity='0.8'>
                                    2 F., No. 250, Zhishan Rd., Xiping Vil., Xitun Dist., Taichung City 407036, Taiwan (R.O.C.)
                                </Text>
                            </Box>
                            <Box>
                                <Link color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px' opacity='0.8'>
                                    Email us
                                </Link>
                            </Box>
                        </Box >
                    </Box>
                </Box>

                <Divider pt='20px' />

                <Box display='flex' flexDirection={{ base: 'column', md: 'row' }} >
                    <Box display='flex' pt='20px' flexDirection='column'>
                        <Text color='#313030' fontFamily='Roboto' fontStyle='normal' fontWeight='400' fontSize='14px' opacity='0.8'>
                            © 2024 BaoDao Talk company Limited
                        </Text>
                    </Box>

                    <Box as='button' display='flex' pt='20px' flexDirection='column' marginLeft={{ base: '', md: 'auto' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect opacity="0.15" x="0.75" y="0.75" width="30.5" height="30.5" rx="15.25" stroke="#0A142F" stroke-width="1.5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4003 22.1534V15.9991H13.1279V13.8782H14.4003V12.6048C14.4003 10.8746 15.1188 9.8457 17.1601 9.8457H18.8595V11.9668H17.7972C17.0026 11.9668 16.9501 12.2632 16.9501 12.8164L16.9472 13.8779H18.8715L18.6463 15.9988H16.9472V22.1534H14.4003Z" fill="#6F6E6E" />
                        </svg>
                    </Box>
                </Box>


            </Container >
        </>
    )
}

export default Homepage
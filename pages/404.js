
import { Heading, Text, Box, Link, Center, HStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function FourOhFour() {

  const textColor = useColorModeValue('text.dark', 'text.light')
  return (
    <>
      <Center my="auto">
        <Box alignItems="center">
          <Box>
            <HStack>
              <motion.div initial={{ x: "300%" }} animate={{ x: "35%" }} transition={{ type: 'spring', velocity: 2 }}>
              </motion.div>
              <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: 0,
                  opacity: 1
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: .45
                  }
                }
              }}>
                <Heading color="blue.shade" fontSize='9xl' isTruncated>
                  &#60;&#8202;404&#8202; &#47;&#62;
                </Heading>
              </motion.div>
              <motion.div initial={{ x: "-200%" }} animate={{ x: "-55%" }} transition={{ type: 'spring', velocity: 2 }}>
              </motion.div>
            </HStack>
          </Box>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1,
                duration: 1
              }
            }
          }}>
            <Text fontWeight="normal" textAlign="center" color={textColor} fontSize="xl" my="3" > You look lost, head back <Link color='blue.300' href='/'>home</Link></Text>
          </motion.div>
        </Box>
      </Center>
    </>
  )
}
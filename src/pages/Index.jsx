import { useState } from 'react';
import { Container, VStack, Text, Input, Button } from '@chakra-ui/react';

const dictionary = ["adventure", "castle", "dragon", "wizard", "forest", "magic", "quest", "treasure", "knight", "mystery"];

const Index = () => {
  const [story, setStory] = useState('');
  const [inputWord, setInputWord] = useState('');

  const addWordToStory = (word) => {
    const newStory = story ? `${story} ${word}` : word;
    setStory(newStory);
    setTimeout(() => addRandomWord(), 1000);
  };

  const addRandomWord = () => {
    const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    const newStory = `${story} ${randomWord}`;
    setStory(newStory);
  };

  const handleInputChange = (event) => {
    setInputWord(event.target.value);
  };

  const handleSubmit = () => {
    addWordToStory(inputWord);
    setInputWord('');
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" mb={4}>Let's Build a Story Together!</Text>
        <Text fontSize="lg" p={4} bg="gray.100" borderRadius="md">{story}</Text>
        <Input placeholder="Add your word..." value={inputWord} onChange={handleInputChange} onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSubmit();
          }
        }} />
        <Button colorScheme="blue" onClick={handleSubmit}>Add Word</Button>
      </VStack>
    </Container>
  );
};

export default Index;
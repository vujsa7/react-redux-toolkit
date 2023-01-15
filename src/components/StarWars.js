import { Box } from '@twilio-paste/box';
import { Heading } from '@twilio-paste/heading';
import { Flex } from '@twilio-paste/flex';
import { Input } from '@twilio-paste/input';
import { Button } from '@twilio-paste/button';
import { Stack } from '@twilio-paste/stack';
import { Card } from '@twilio-paste/card';
import { Label } from '@twilio-paste/label';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersFromAPI } from '../store/charactersSlice';

export const StarWars = () => {
  const characters = useSelector((state) => state.characters.data);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  return (
    <Box width="100%" margin="space100" padding="space50">
      <Flex>
        <Flex width="100%">
          <Input
            width="100%"
            id="create-human-name"
            placeholder="Star Wars Character"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Flex>
        <Flex marginLeft="space50">
          <Button
            variant="primary"
            onClick={() => {
              dispatch(fetchCharactersFromAPI(searchTerm));
            }}
          >
            Search
          </Button>
        </Flex>
      </Flex>
      {isLoading && <Flex marginTop="space50">Loading...</Flex>}
      <Box width="100%" marginTop="space50">
        <Stack orientation="vertical" spacing="space60" width="100%">
          {characters.map((character) => (
            <Card width="100%">
              <Label>{character.name}</Label>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

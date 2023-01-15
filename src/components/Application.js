import { Flex } from '@twilio-paste/flex';
import { AllHumans } from './AllHumans';
import { AllTasks } from './AllTasks';
import { StarWars } from './StarWars';

const Application = () => {
  return (
    <div>
      <Flex margin="auto" width="600">
        <AllHumans />
        <AllTasks />
      </Flex>
      <hr />
      <Flex margin="auto" width="600">
        <StarWars/>
      </Flex>
    </div>
  );
};

export default Application;

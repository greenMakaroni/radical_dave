import Spaceship_1 from './Spaceship_1';
import Spaceship_2 from './Spaceship_2';

const spaceships_start_z = [...Array(25).keys()].map(i => i + Math.floor(Math.random() * 50))
const spaceships = [Spaceship_1, Spaceship_2]

const SpaceshipHighway = () => {
    return (
        spaceships_start_z.map((z) => {
            const random = Math.floor(Math.random() * spaceships.length);
            return spaceships[random]({ posZ: z })
        })
    )
}

export default SpaceshipHighway

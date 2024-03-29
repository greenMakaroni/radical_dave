import Spaceship_1 from './Spaceship_1';
import Spaceship_2 from './Spaceship_2';
import Spaceship_3 from './Spaceship_3';

const spaceships_start_z = [...Array(20).keys()].map(i => i * 4 + Math.floor(Math.random() * 3))
const spaceships = [Spaceship_1, Spaceship_2, Spaceship_3]

const SpaceshipHighway = () => {
    return (
        <>
            {
                spaceships_start_z.map((z) => {
                    const random = Math.floor(Math.random() * spaceships.length);
                    return spaceships[random]({ key: z, posX: 2, posZ: z, direction: "in" })
                })
            }
            {
                spaceships_start_z.map((z) => {
                    const random = Math.floor(Math.random() * spaceships.length);
                    return spaceships[random]({ key: z, posX: -2, posZ: z, direction: "out" })
                })
            }
        </>

    )
}

export default SpaceshipHighway

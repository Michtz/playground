'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import FirstExercise from '@/components/IbawMernStackSolutions/FirstExercise';
import SecondExercise from '@/components/IbawMernStackSolutions/SecondExercise';
import ThirdExercise from '@/components/IbawMernStackSolutions/ThirdExercise';

interface Props {
  children?: ReactNode;
}

const IbawContainer: FC<Props> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

interface IbawChildren {
  element: JSX.Element;
  id: string;
}

interface props {
  username: string;
  password: string;
}

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

const Home = (): JSX.Element => {
  const [registrationResult, setRegistrationResult] = useState<string>('');
  const [planetData, setPlanetData] = useState<Planet | null>(null);
  const [error, setError] = useState<string>('');
  //
  // function registerUser(userDetails) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (userDetails.username && userDetails.password) {
  //         resolve(`User ${userDetails.username} registered successfully!`);
  //       } else {
  //         reject('Registration failed. Missing username or password.');
  //       }
  //     }, 1000);
  //   });
  // }
  //
  // async function register() {
  //   try {
  //     const result: props | unknown = await registerUser({
  //       username: 'john_doe',
  //       password: 'abcdef',
  //     });
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  //
  // const callSwapi = async () => {
  //   try {
  //     const response = await fetch('https://swapi.dev/api/planets/1/');
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  //
  // useEffect(() => {
  //   // Register user
  //   const register = async () => {
  //     try {
  //       const result = await registerUser({
  //         username: 'john_doe',
  //         password: 'abcdef',
  //       });
  //       setRegistrationResult(result as string);
  //     } catch (error) {
  //       setError(error as string);
  //     }
  //   };
  //
  //   const getPlanet = async () => {
  //     try {
  //       const result = await callSwapi();
  //       setPlanetData(result);
  //     } catch (error) {
  //       setError('Error fetching planet data');
  //     }
  //   };
  //
  //   register();
  //   getPlanet();
  // }, []);
  //
  // const renderMap = async () => {
  //   try {
  //     const pos = await getUserPosition();
  //     const destination = await getDestination(pos);
  //
  //     // Render map using destination
  //     // ...
  //   } catch (error) {
  //     // Handle errors
  //     console.error('Error rendering map:', error);
  //   }
  // };
  //
  // // Call the renderMap function
  // renderMap();
  //
  // // 1
  // const findSpecificSpaceshipsWith = () => {
  //   const starships = await fetch('https://swapi.dev/api/starships/');
  //   const json = await starships.json();
  //   return json.results.filter(
  //     (starship) =>
  //       parseInt(starship.max_atmosphering_speed) > 1000 &&
  //       starship.passengers > 5,
  //   );
  // };
  //
  // // 2
  // async function findMoviesByPerson(searchTerm) {
  //   const people = await fetch(
  //     `https://swapi.dev/api/people/?search=${searchTerm}`,
  //   );
  //   const peopleJSON = await people.json();
  //   const firstPerson = peopleJSON.results[0];
  //
  //   const filmArray = [];
  //   firstPerson.films.forEach(async (filmUrl) => {
  //     const resp = await fetch(filmUrl);
  //     filmArray.push(await resp.json());
  //   });
  //   return filmArray;
  // }
  //
  // // 3
  // async function findVehicleUsedByPerson(person) {
  //   const people = await fetch(
  //     `https://swapi.dev/api/people/?search=${person}`,
  //   );
  //   const peopleJSON = await people.json();
  //   const firstPerson = peopleJSON.results[0];
  //
  //   if (firstPerson) {
  //     return Promise.all(
  //       firstPerson.vehicles.map(async (vehicleUrl) => {
  //         const vehicle = await fetch(vehicleUrl);
  //         return vehicle.json();
  //       }),
  //     );
  //   }
  // }
  //
  // const person = 'luke';
  // const person2 = 'R2-D2';
  //
  // Promise.all([
  //   findSpecificSpaceshipsWith(),
  //   findMoviesByPerson(person2),
  //   findVehicleUsedByPerson(person),
  // ]).then((values) => {
  //   console.log('Spaceships (filtered)', values[0]);
  //   console.log(`Films with ${person2}`, values[1]);
  //   console.log(`Vehicles used by ${person}`, values[2]);
  // });

  return (
    <IbawContainer>
      <h1>Here are my solutions for the Mern Stack Exercises</h1>
      <ul></ul>
    </IbawContainer>
  );
};
export default Home;

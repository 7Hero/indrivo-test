/**
 * Consider a city, represented as an array of districts.
 *
 * Each district is an object, where every key corresponds to a building,
 * and its boolean value denotes whether that building exists (true) or not (false).
 *
 * Your task is to implement a TypeScript function called 'findDistrictWithMostBuildings'.
 * This function should determine the index of the district object that contains the most existing buildings.
 *
 * The city array and the types for the building and city are provided below.
 */

type DistrictBuilding = {
  gym: boolean;
  school: boolean;
  store: boolean;
};

type City = DistrictBuilding[];

const city: City = [
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: false,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: true,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: false,
    store: true,
  },
];

function findDistrictWithMostBuildings(city: City): number {
  let maxBuildings = 0,
    maxBuildingsIndex = 0;

  // Using for loop so I can exit early
  // Not using for..in syntax because I have to cast the index to number.
  for (let index = 0; index < city.length; index++) {
    const currentMaxBuildings = Object.values(city[index]).reduce(
      (acc, district) => acc + Number(district),
      0
    );

    if (currentMaxBuildings === 3) {
      return index;
    }

    if (currentMaxBuildings >= maxBuildings) {
      maxBuildings = currentMaxBuildings;
      maxBuildingsIndex = index;
    }
  }

  return maxBuildingsIndex;
}

console.log(
  "Index of district with max buildings",
  findDistrictWithMostBuildings(city)
);

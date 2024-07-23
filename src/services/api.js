import axios from 'axios';

const ERGAST_BASE_URL = 'https://ergast.com/api/f1';

export const getTeams = async () => {
  const response = await axios.get(`${ERGAST_BASE_URL}/current/constructors.json`);
  return response.data.MRData.ConstructorTable.Constructors;
};

export const getDrivers = async () => {
  const response = await axios.get(`${ERGAST_BASE_URL}/current/drivers.json`);
  return response.data.MRData.DriverTable.Drivers;
};

export const getStandings = async () => {
  const response = await axios.get(`${ERGAST_BASE_URL}/current/driverStandings.json`);
  return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
};

export const getTeamDetails = async (teamId) => {
  const response = await axios.get(`${ERGAST_BASE_URL}/constructors/${teamId}.json`);
  return response.data.MRData.ConstructorTable.Constructors[0];
};

export const getDriverDetails = async (driverId) => {
  const response = await axios.get(`${ERGAST_BASE_URL}/drivers/${driverId}.json`);
  return response.data.MRData.DriverTable.Drivers[0];
};

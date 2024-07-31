import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const TeamDetail = (teams) => {
  const { id } = useParams();
  const [team, setTeam] = useState(teams);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTeam, setUpdatedTeam] = useState({
    name: '',
  });

  const URL = `http://localhost:4000/teams/${id}`;

  const navigate = useNavigate()

  const getTeam = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Team not found');
      const data = await response.json();
      setTeam(data.data);
      setUpdatedTeam({
        name: data.team_name,
      });
    } catch (error) {
      console.error("Error fetching team:", error);
    }
  };

  useEffect(() => {
    getTeam();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTeam),
      });
      if (!response.ok) throw new Error('Failed to update team');
      const data = await response.json();
      setTeam(data);
      setIsEditing(false);
      console.log('Update successful:', data);
      navigate("/teams")
    } catch (error) {
      console.error("Error updating team:", error);
    }
  };

  const loaded = () => {
    return (
      <div className="team">
        <h1>{team.name}</h1>
        <button onClick={() => setIsEditing(true)}>Edit Team</button>
        {isEditing && (
          <form onSubmit={handleUpdate}>
            <label>
              Team Name:
              <input
                type="text"
                name="name"
                value={updatedTeam.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Update Team</button>
          </form>
        )}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <section>{team ? loaded() : loading()}</section>;
};

export default TeamDetail;
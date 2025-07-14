import React, { useState, useEffect } from 'react';
import '../styles/Register.css';

const INVITE_PASSWORD = 'coolballs';

interface Registrant {
  name: string;
  distance: string;
}

const Register: React.FC = () => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // Registration form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [distance, setDistance] = useState('25k');
  const [formMessage, setFormMessage] = useState('');

  // Registrants display state
  const [registrants, setRegistrants] = useState<Registrant[]>([]);
  const [loadingRegistrants, setLoadingRegistrants] = useState(false);

  const fetchRegistrants = async () => {
    setLoadingRegistrants(true);
    try {
      const response = await fetch('https://yew42vp4lg.execute-api.us-east-1.amazonaws.com/prod/registrants');
      const data = await response.json();
      
      if (response.ok) {
        setRegistrants(data.registrants || []);
      } else {
        console.error('Failed to fetch registrants:', data.error);
      }
    } catch (error) {
      console.error('Error fetching registrants:', error);
    } finally {
      setLoadingRegistrants(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchRegistrants();
    }
  }, [authenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPassword === INVITE_PASSWORD) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage('Submitting registration...');
    
    try {
      const response = await fetch('https://yew42vp4lg.execute-api.us-east-1.amazonaws.com/prod/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          distance
        })
      });

      const data = await response.json();

      if (response.ok) {
        setFormMessage('Thank you for registering! Your info has been received.');
        setName('');
        setEmail('');
        setDistance('25k');
        // Refresh the registrants list
        fetchRegistrants();
      } else {
        if (response.status === 409) {
          setFormMessage('This email is already registered.');
        } else {
          setFormMessage(`Registration failed: ${data.error || 'Unknown error'}`);
        }
      }
    } catch (error) {
      setFormMessage('Registration failed: Network error. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h1>REGISTRATION</h1>
      {!authenticated ? (
        <form className="password-gate" onSubmit={handlePasswordSubmit}>
          <label htmlFor="invite-password">Enter invite password to access registration:</label>
          <input
            id="invite-password"
            type="password"
            value={enteredPassword}
            onChange={e => setEnteredPassword(e.target.value)}
            autoComplete="off"
            required
          />
          <button type="submit">Submit</button>
          {error && <div className="warning" style={{ marginTop: '1rem' }}>{error}</div>}
        </form>
      ) : (
        <>
          <div className="registration-placeholder">
            <h2>REGISTRATION FORM</h2>
            <form className="registration-form" onSubmit={handleFormSubmit} autoComplete="off">
              <label htmlFor="reg-name">Name:</label>
              <input
                id="reg-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                autoComplete="off"
              />
              <label htmlFor="reg-email">Email:</label>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
              <label htmlFor="reg-distance">Distance:</label>
              <select
                id="reg-distance"
                value={distance}
                onChange={e => setDistance(e.target.value)}
                required
              >
                <option value="25k">25k (Fun Run, one loop)</option>
                <option value="50k">50k (Full, two loops)</option>
              </select>
              <button type="submit">Register</button>
              {formMessage && <div className="success-message" style={{ marginTop: '1rem' }}>{formMessage}</div>}
            </form>
          </div>
          
          <div className="registrants-display">
            <h2>REGISTERED PARTICIPANTS</h2>
            {loadingRegistrants ? (
              <p>Loading registrants...</p>
            ) : registrants.length > 0 ? (
              <div className="registrants-list">
                {registrants.map((registrant, index) => (
                  <div key={index} className="registrant-item">
                    <span className="registrant-name">{registrant.name}</span>
                    <span className="registrant-distance">({registrant.distance})</span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No registrations yet. Be the first to sign up!</p>
            )}
          </div>
          
          <div className="race-requirements">
            <h2>REQUIREMENTS</h2>
            <ul>
              <li>Strong navigational skills and previous trail running experience are required.</li>
              <li>Registration fee is $3.50. Please bring exact change.</li>
              <li>You must bring a bib from a previous race with you, with a number no higher than 200.</li>
              <li>Working with a small team for this event is strongly encouraged.</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Register; 
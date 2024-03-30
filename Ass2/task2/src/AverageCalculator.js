import React, { useState } from 'react';
function AverageCalculator() {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/numbers/e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numbers: numbers.split(',').map(Number) }),
      });

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const data = await response.json();
      setAverage(data.average);
      setError(null);
    } catch (error) {
      console.error('Error in calculating average:', error);
      setError('Error in calculating average. ');
    }
  };

  return (
    <div>
      <h2>Calculate Average</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter numbers separated by commas:
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {error && <p>{error}</p>}
      {average !== null && <p>Average: {average}</p>}
    </div>
  );
}

export default AverageCalculator;

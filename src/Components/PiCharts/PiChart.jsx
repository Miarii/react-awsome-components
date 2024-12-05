import {
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
  } from "recharts";
  
  const PiChart = () => {
    const rawData = [
      { stat: "Hp", value: 32322 },
      { stat: "Atk", value: 1400 },
      { stat: "Def", value: 1078 },
      { stat: "Crit rate", value: 65.3 },
      { stat: "Crit damage", value: 267.2 },
      { stat: "EM", value: 104.5 },
      { stat: "Er", value: 110 },
      { stat: "PyroDMG", value: 61.6 },
    ];
  
    // Normalize the data to bring all values within 0–100
    const maxValues = {
      Hp: 35000,
      Atk: 2000,
      Def: 1500,
      "Crit rate": 100,
      "Crit damage": 300,
      EM: 200,
      Er: 200,
      PyroDMG: 100,
    };
  
    const normalizedData = rawData.map((item) => ({
      stat: item.stat,
      value: ((item.value / maxValues[item.stat]) * 100).toFixed(1),
    }));
  
    return (
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={normalizedData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="stat" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Hu Tao"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default PiChart;
  
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentMarks = [
    { student: "Student 1", math: 78, physics: 85, chemistry: 80 },
    { student: "Student 2", math: 85, physics: 88, chemistry: 84 },
    { student: "Student 3", math: 90, physics: 92, chemistry: 89 },
    { student: "Student 4", math: 67, physics: 70, chemistry: 65 },
    { student: "Student 5", math: 72, physics: 75, chemistry: 78 },
    { student: "Student 6", math: 88, physics: 90, chemistry: 87 },
    { student: "Student 7", math: 95, physics: 98, chemistry: 93 },
    { student: "Student 8", math: 60, physics: 63, chemistry: 65 },
    { student: "Student 9", math: 82, physics: 85, chemistry: 80 },
    { student: "Student 10", math: 74, physics: 78, chemistry: 76 },
  ];

  return (
    <div className="flex justify-center items-center">
      <LChart width={800} height={600} data={studentMarks}>
        <XAxis dataKey="student"></XAxis>
        <YAxis></YAxis>
        <Line type="monotone" dataKey="math" stroke="red"></Line>
        <Line type="monotone" dataKey="physics" stroke="blue"></Line>
        <Line type="monotone" dataKey="chemistry" stroke="purple"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;

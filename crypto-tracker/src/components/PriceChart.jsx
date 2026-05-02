import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PriceChart({ data }) {
  if (!data || data.length === 0) {
    return <p>No chart data</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="price" stroke="#4cafef" fill="#4cafef33" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default PriceChart;
import { Line } from "react-chartjs-2";

function CoinChart({ data }) {
  const chartData = {
    labels: data.map(d => d[0]),
    datasets: [{
      label: "Price",
      data: data.map(d => d[1]),
      borderColor: "cyan",
    }],
  };

  return <Line data={chartData} />;
}

export default CoinChart;
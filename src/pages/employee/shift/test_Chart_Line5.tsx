import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
    slider: {
      start: 0.1,
      end:0.5,
    },
  };
  return <Line {...config} />;
};

export default DemoLine;

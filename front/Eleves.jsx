import { Link } from 'react-router-dom'

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  // Legende

} from 'chart.js';



ChartJS.register(
  ArcElement,
  Tooltip,
  // Legende
)

import { Doughnut } from 'react-chartjs-2';


import HeaderDash from "./headermenu/HeaderContact";
import './App.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,  } from 'recharts';
// import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'


export default function Dash() {

  const data_graphe = {
    labels: ['Nombre des filles ', 'nombre des garçons',],
    datasets: [
      {
        label: 'Pourcentages',
        data: [459 , 670],
        backgroundColor: [
          'rgba(250, 100, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {

  }

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  return (

    <div>
      <div className="pb-32">
        <HeaderDash />
      </div>
      <div className=' '>


        <div className='flex justify-center items-center text-center gap-20 font-bold bg-slate-00  mb-10 border-1xl rounded- ml-10 mr-10'>

          <div className='bg-gray-200  w-44 h-24 justify-center items-center text-center rounded-xl pl-5 pr-5 '>

            <div className='flex  justify-center mt-5 gap-20'>
              <h1>Doughnut</h1>
            </div>
          </div>

          <div className='bg-gray-200 w-44 h-24 justify-center items-center text-center rounded-xl pl-5 pr-5 '>

            <div className='flex  justify-center mt-5 gap-20'>
              <Link to='/Barchart'>  <h1> Bars</h1></Link>
            </div>
          </div>
        </div>
        <div className='text-center text-orange-400 text-3xl m-20 font-bold'>
          <h1 className=''>Pourcentage des Filles et Garçons</h1>
        </div>

        <div className='flex justify-center items-center text-centerborder-2xl font-bold ml-10 mb-24 rounded-2xl'>
          {/* <h1 className='text-3xl text-orange-400 pb-3 pt-3'>Total élèves</h1> */}
          <div className='flex  m-10'>
            <div style={{ width: '100%', height: '100% ' }}>
              <Doughnut
                data={data_graphe}
                options={options}
               
              />
            </div>

          </div>

        </div>

      </div>

     <div>
       <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart> 
    </div>

    </div >

  )
}
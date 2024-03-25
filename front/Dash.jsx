import { Link } from 'react-router-dom'

import {
  Chart as ChartJS,
  ArcElement,
  // Legende

} from 'chart.js';

ChartJS.register(
  ArcElement,
  // Legende
)

import { Doughnut } from 'react-chartjs-2';
// import HeaderDash from "./headermenu/HeaderContact";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

export default function Dash() {

  const data_graphe = {
    labels: ['Nombre des filles ', 'nombre des garçons',],
    datasets: [
      {
        label: 'Pourcentages',
        data: [459, 670],
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

  const salesData =
    [
      {
        label: 'Kilos',
        name: 'January',
        Paiement: 4000,
        Dette: 2400,

      },
      {
        name: 'February',
        Paiement: 3000,
        Dette: 1398,
        // amt: 2210,
      },
      {
        name: 'March',
        Paiement: 2000,
        Dette: 9800,
        // amt: 2290,
      },
      {
        name: 'April',
        Paiement: 2780,
        Dette: 3908,
        // amt: 2000,
      },
      {
        name: 'May',
        Paiement: 1890,
        Dette: 4800,
        // amt: 2181,
      },
      {
        name: 'June',
        Paiement: 2390,
        Dette: 3800,
        // amt: 2500,
      },
      {
        name: 'July',
        Paiement: 3490,
        Dette: 4300,
        // amt: 2100,
      },
    ];

  const customLabel = (payload) => {
    if (payload.dataKey == 'prifit') {
      return 'Eleves pas en ordre'
    }
    else {
      return 'Eleve en ordre'
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-100 rounded-lg p-3">
          <p className="text-[#FFB6C1] text-xl font-semi">{`${customLabel(payload[0])} : ${payload[0].value}`}</p>
          <p className="label text-[#8b5cf6] text-xl font-bold">{`${customLabel(payload[1])} : ${payload[1].value}`}</p>
        </div>
      );
    }

    return null;
  };


  return (

    <div className='flex' >
      <div className=' w-1/1 '>
        <div className='mt-20 ml-5'>
          <div className='flex-col justify-center items-center text-center gap-20 font-bold bg-slate-00  mb-10 border-1xl rounded- ml-10 mr-10'>

            <div className='bg-slate-300  w-40 h-24 justify-center items-center text-center mb-20  '>
              <div className='flex  justify-center mt-5 gap-20'>
                <h1>60 %</h1>
              </div>
            </div>

            <div className=' bg-slate-300 w-40 h-24 justify-center items-center text-center pl-5 pr-5 '>
              <div className='flex  justify-center mt-5 gap-20'>
                <Link to='/Barchart'>  <h1>Barchart</h1></Link>
              </div>
            </div>

            <div className=' bg-slate-300 w-40 h-24 justify-center items-center text-center mt-20  '>
              <div className='flex  justify-center mt-5 gap-20 '>
              <Link to="/Eleves"><button> Élèves inscrit</button></Link>
              </div>
            </div>

            <div className=' bg-slate-300 w-40 h-24 justify-center items-center text-center mt-20  '>
              <div className='flex  justify-center mt-5 gap-20'>
                <h1>Doughnut</h1>
              </div>
            </div>

            {/* <div className=' mt-5 gap-20'>
              <Link to="/Eleves"><button> Élèves inscrit</button></Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className=' '>

        <div className='text-center text-3xl m-20 font-bold'>
          <h1 className=' text-orange-600'>Pourcentage des Filles et Garçons</h1>
        </div>

        <div className='flex justify-center items-center text-centerborder-2xl font-bold ml-10 mb-24 rounded-2xl'>
          {/* <h1 className='text-3xl text-orange-400 pb-3 pt-3'>Total élèves</h1> */}
          <div className=''>
            <div style={{ width: '100%', height: '100% ' }}>
              <Doughnut
                data={data_graphe}
                options={options}
            
              />
            </div>
          </div>
        </div>
      </div>

      <div className=' mt-10 mr-10'>
        <BarChart
          width={1000}
          height={600}
          data={salesData}
        >
          <CartesianGrid strokeDasharray="8 10" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Paiement" barSize={30} fill='#FFB6C1' />
          <Bar dataKey="Dette" barSize={30} fill='#8b5cf6' />
        </BarChart>
      </div>

    </div >

  )
}

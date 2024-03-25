import { Link } from 'react-router-dom'
import { BarChart, Bar, Rectangle, Tooltip, XAxis, YAxis, CartesianGrid, Legend, LineChart, Line } from 'recharts';
export default function Barchart() {
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
        <div>       
            <div className='flex justify-center items-center text-center gap-20 font-bold bg-slate-00  mb-10 border-1xl rounded- ml-10 mr-10'>
                <div className='bg-gray-200 w-44 h-24 justify-center items-center text-center rounded-xl '>
                    <div className='flex  justify-center mt-5 gap-20'>
                        <Link to="/Dash"><button>Doughnut</button></Link>
                    </div>
                </div>
                <div className='bg-gray-200 w-44 h-24 justify-center items-center text-center rounded-xl '>

                    <div className='flex  justify-center mt-5 gap-20'>
                        <button> Barchart</button>
                    </div>
                </div>

                <div className='bg-gray-200 w-44 h-24 justify-center items-center text-center rounded-xl '>

                    <div className=' mt-5 gap-20'>
                        <Link to="/Eleves"><button> Élèves inscrit</button></Link>
                    </div>
                </div>
            </div>
            <div className='text-orange-500 text-3xl m-20 font-bold'>
                <h1 className=''>Paiement</h1>
            </div>
            <BarChart
                width={1500}
                height={700}
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

    )
}

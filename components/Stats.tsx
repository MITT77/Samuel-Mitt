import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell 
} from 'recharts';
import { MOCK_STATS } from '../constants';

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-lakers-gold p-4 rounded shadow-xl text-white">
        <p className="font-display text-lg mb-2">{label}</p>
        <p className="text-lakers-gold text-sm">PPG: <span className="text-white">{payload[0].value}</span></p>
        <p className="text-blue-400 text-sm">RPG: <span className="text-white">{payload[1].value}</span></p>
        <p className="text-purple-400 text-sm">APG: <span className="text-white">{payload[2].value}</span></p>
      </div>
    );
  }
  return null;
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="min-h-screen py-24 bg-gradient-to-b from-gray-900 to-black pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-display text-white uppercase tracking-tight">
            Estatísticas da Temporada
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comparativo de desempenho projetado para o trio de estrelas.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-12 border border-white/10 shadow-2xl max-w-6xl mx-auto">
          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={MOCK_STATS}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                barSize={40} // Increased bar size
                barGap={8}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#9CA3AF" 
                  tick={{ fill: '#F3F4F6', fontSize: 14, fontWeight: 'bold' }} 
                  axisLine={{ stroke: '#4B5563' }}
                />
                <YAxis 
                  stroke="#9CA3AF" 
                  tick={{ fill: '#9CA3AF' }}
                  axisLine={{ stroke: '#4B5563' }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                
                <Bar name="Pontos (PPG)" dataKey="ppg" fill="#FDB927" radius={[4, 4, 0, 0]} animationDuration={1500} />
                <Bar name="Rebotes (RPG)" dataKey="rpg" fill="#3B82F6" radius={[4, 4, 0, 0]} animationDuration={1500} animationBegin={200} />
                <Bar name="Assistências (APG)" dataKey="apg" fill="#552583" radius={[4, 4, 0, 0]} animationDuration={1500} animationBegin={400} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {MOCK_STATS.map((stat, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-xl border-l-4 border-lakers-gold">
                <h4 className="font-display text-2xl text-white mb-2 uppercase">{stat.name}</h4>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Impacto Ofensivo</span>
                  <span className="text-lakers-gold">{(stat.ppg + stat.apg).toFixed(1)}</span>
                </div>
                <div className="w-full bg-gray-700 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-lakers-purple h-full" 
                    style={{ width: `${((stat.ppg + stat.apg) / 50) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
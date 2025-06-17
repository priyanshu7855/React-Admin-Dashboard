import React from 'react';
import { TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';
import { chartData } from '../../data/mockData';

const Overview: React.FC = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$95,000',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    },
    {
      title: 'Active Users',
      value: '2,000',
      change: '+8.2%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '-2.4%',
      changeType: 'negative',
      icon: ShoppingCart,
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Growth Rate',
      value: '15.3%',
      change: '+5.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
    }
  ];

  const maxRevenue = Math.max(...chartData.revenue.map(d => d.value));

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.changeType === 'positive' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Trend</h3>
          <div className="space-y-3">
            {chartData.revenue.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400 w-8">{item.month}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(item.value / maxRevenue) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  ${item.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* User Activity */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Activity</h3>
          <div className="space-y-4">
            {chartData.users.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{item.month}</span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {item.active + item.inactive} total
                  </span>
                </div>
                <div className="flex space-x-1">
                  <div 
                    className="bg-green-500 h-2 rounded-l-full transition-all duration-1000"
                    style={{ width: `${(item.active / (item.active + item.inactive)) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-gray-300 dark:bg-gray-600 h-2 rounded-r-full transition-all duration-1000"
                    style={{ width: `${(item.inactive / (item.active + item.inactive)) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Active: {item.active}</span>
                  <span>Inactive: {item.inactive}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
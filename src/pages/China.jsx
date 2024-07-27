import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const China = () => {
  return (
    <div className="container mx-auto p-4 my-4">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
          中国 - China
        </h1>
        <p className="text-xl text-gray-600">The Middle Kingdom</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <CardContent className="p-6 bg-gradient-to-br from-red-50 to-yellow-50">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">Key Facts</h2>
            <ul className="space-y-2 text-gray-700">
              <li>🏙️ Capital: Beijing (北京)</li>
              <li>👥 Population: Over 1.4 billion</li>
              <li>🗣️ Language: Mandarin Chinese (official)</li>
              <li>💰 Currency: Renminbi (Yuan) ¥</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <CardContent className="p-6 bg-gradient-to-br from-yellow-50 to-red-50">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">Famous Landmarks</h2>
            <ul className="space-y-2 text-gray-700">
              <li>🧱 Great Wall of China (长城)</li>
              <li>🏯 Forbidden City (紫禁城)</li>
              <li>🗿 Terracotta Army (兵马俑)</li>
              <li>🏞️ Li River (漓江)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-8 rounded-lg shadow-xl border border-gray-200"
      >
        <h2 className="text-3xl font-semibold mb-4 text-red-800">Brief History</h2>
        <p className="text-gray-700 leading-relaxed">
          China's history spans over 5,000 years, making it one of the world's oldest continuous civilizations. From the first dynasties like Xia, Shang, and Zhou, through the imperial era of Qin, Han, Tang, Song, Ming, and Qing, to the modern People's Republic of China founded in 1949, the country has undergone immense cultural, political, and economic transformations. Today, China stands as a global superpower, blending its rich heritage with rapid modernization.
        </p>
      </motion.div>

      <div className="mt-12 text-center">
        <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
          "中国 - Zhōngguó"
        </p>
        <p className="text-gray-600 mt-2">The name "China" in Mandarin literally means "Middle Kingdom"</p>
      </div>
    </div>
  );
};

export default China;

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const China = () => {
  return (
    <div className="container mx-auto p-4 my-4 bg-red-50">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-800 mb-2">中国 - China</h1>
        <p className="text-lg text-red-700">The Middle Kingdom</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 shadow-lg">
          <CardHeader className="bg-red-100">
            <CardTitle className="text-red-800">Key Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-red-700">
              <li>Capital: Beijing (北京)</li>
              <li>Population: Over 1.4 billion</li>
              <li>Language: Mandarin Chinese (official)</li>
              <li>Currency: Renminbi (Yuan) ¥</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border-red-200 shadow-lg">
          <CardHeader className="bg-red-100">
            <CardTitle className="text-red-800">Famous Landmarks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-red-700">
              <li>Great Wall of China (长城)</li>
              <li>Forbidden City (紫禁城)</li>
              <li>Terracotta Army (兵马俑)</li>
              <li>Li River (漓江)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Separator className="my-8 border-red-200" />
      
      <div className="bg-white p-6 rounded-lg shadow-lg border border-red-200">
        <h2 className="text-2xl font-semibold mb-4 text-red-800">Brief History</h2>
        <p className="text-red-700 leading-relaxed">
          China's history spans over 5,000 years, making it one of the world's oldest continuous civilizations. From the first dynasties like Xia, Shang, and Zhou, through the imperial era of Qin, Han, Tang, Song, Ming, and Qing, to the modern People's Republic of China founded in 1949, the country has undergone immense cultural, political, and economic transformations. Today, China stands as a global superpower, blending its rich heritage with rapid modernization.
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-red-600 text-lg font-semibold">"中国 - Zhōngguó"</p>
        <p className="text-red-500">The name "China" in Mandarin literally means "Middle Kingdom"</p>
      </div>
    </div>
  );
};

export default China;

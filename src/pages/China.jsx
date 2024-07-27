import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const China = () => {
  return (
    <div className="container mx-auto p-4 my-4"> {/* Add top and bottom margin */}
      <h1 className="text-3xl font-bold mb-4">China</h1>
      <p className="mb-4">China, officially the People's Republic of China (PRC), is a country in East Asia. It is the world's most populous country and the third-largest by land area.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>Key Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Capital: Beijing</li>
              <li>Population: Over 1.4 billion</li>
              <li>Language: Mandarin Chinese (official)</li>
              <li>Currency: Renminbi (Yuan)</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Famous Landmarks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Great Wall of China</li>
              <li>Forbidden City</li>
              <li>Terracotta Army</li>
              <li>Li River</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Separator className="my-4" />
      
      <h2 className="text-2xl font-semibold mb-2">Brief History</h2>
      <p>China's history spans thousands of years, with dynasties ruling the country for centuries. The People's Republic of China was founded in 1949, leading to significant political and economic changes in the modern era.</p>
    </div>
  );
};

export default China;

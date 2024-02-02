// components/TokenPrice.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";

interface TokenPriceProps {
  tokenAddress: string;
}

interface PriceData {
  usdPrice: string;
  volume24h: number;
}

export const TokenPrice: React.FC<TokenPriceProps> = ({ tokenAddress }) => {
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokenPrice = async () => {
      const url = `https://api.dexscreener.com/latest/dex/search?q=${tokenAddress}`;

      try {
        const response = await axios.get(url);
        const data = response.data.pairs[0];
        setPriceData({
          usdPrice: data.priceUsd,
          volume24h: data.volume.h24,
        });
        setIsLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        setIsLoading(false);
      }
    };

    fetchTokenPrice();
  }, [tokenAddress]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      Token Price: {priceData?.usdPrice ? `$${Number(priceData.usdPrice).toFixed(2)}` : "N/A"}
      <br />
      24h Volume: {priceData?.volume24h ? `$${priceData.volume24h.toLocaleString()}` : "N/A"}
    </div>
  );
};

export default TokenPrice;

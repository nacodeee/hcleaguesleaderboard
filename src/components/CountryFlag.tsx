import React from 'react';

interface CountryFlagProps {
  countryCode: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ countryCode }) => {
  return (
    <img
      src={`https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`}
      alt={`Flag of ${countryCode}`}
      title={countryCode}
      className="inline-block h-3 mr-1"
    />
  );
};
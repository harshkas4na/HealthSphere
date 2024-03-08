import React from 'react';
import Navbar from '../components/Navbar';
import mortality from '../assets/Images/mortality.jpg';
import communicableDiseases from '../assets/Images/Communicable.jpg';
import nonCommunicableDiseases from '../assets/Images/nonCommunincable.jpg';
import pollutants from '../assets/Images/pollutants.jpg';
import happinessIndex from '../assets/Images/happiness.jpg';

const AnalyticsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Analytics</h1>
        <hr className="mb-4" />

        {/* Maternal Mortality Ratio Data Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Maternal Mortality Ratio</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 p-4">
              <p className="text-lg font-semibold">
                Global: As of 2020, the estimated global maternal mortality ratio (MMR) is *223 deaths per 100,000 live births*. This represents a 34% decline from 2000 but still falls short of the Sustainable Development Goal target of 70 deaths per 100,000 live births by 2030. (Source: UNICEF)
                Regional Variations:* MMR varies significantly across regions, with the highest rates in sub-Saharan Africa (542 deaths per 100,000) and the lowest in developed regions (11 deaths per 100,000). (Source: World Health Organization)
                Data Sources:* World Health Organization (WHO), UNICEF, World Bank Open Data.
              </p>
            </div>
            <div className="w-1/2">
              <img src={mortality} alt="Maternal Mortality Ratio" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Communicable Diseases Data Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Communicable Diseases Data</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 p-4">
              <p className="text-lg font-semibold">
                Global Burden of Disease Study: This comprehensive study provides estimates of the incidence, prevalence, and mortality of various infectious diseases globally. The latest data is from 2019. (Source: Institute for Health Metrics and Evaluation)
                World Health Organization (WHO): WHO provides real-time data on outbreaks of various communicable diseases, including COVID-19, influenza, and measles. (Source: WHO Disease Outbreak News)
                Centers for Disease Control and Prevention (CDC): The CDC provides data on various infectious diseases in the United States, including surveillance reports and case counts. (Source: CDC Division of Global Health)
              </p>
            </div>
            <div className="w-1/2">
              <img src={communicableDiseases} alt="Communicable Diseases" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Non-Communicable Deaths Data Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Non-Communicable Deaths Data</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 p-4">
              <p className="text-lg font-semibold">
                World Health Organization (WHO): WHO's Global Health Observatory provides data on mortality from various non-communicable diseases (NCDs) such as cardiovascular diseases, cancer, chronic respiratory diseases, and diabetes. (Source: WHO Global Health Observatory)
                Institute for Health Metrics and Evaluation (IHME): IHME provides visualizations and downloadable data on NCD burden across different countries and regions. (Source: IHME Visualizations)
                World Bank Open Data: The World Bank Open Data platform provides data on various health indicators, including NCD mortality rates. (Source: World Bank Open Data)
              </p>
            </div>
            <div className="w-1/2">
              <img src={nonCommunicableDiseases} alt="Non-Communicable Deaths" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Pollutants Data Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Pollutants Data</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 p-4">
              <p className="text-lg font-semibold">
                World Health Organization (WHO): WHO provides data on ambient air pollution levels in various cities around the world. (Source: WHO Ambient Air Pollution Database)
                IQAir: This website provides real-time air quality data for major cities worldwide. (Source: IQAir)
                Environmental Protection Agency (EPA): The EPA provides air quality data for various locations in the United States. (Source: EPA AirNow)
              </p>
            </div>
            <div className="w-1/2">
              <img src={pollutants} alt="Pollutants" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* World Happiness Index Data Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">World Happiness Index Data</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 p-4">
              <p className="text-lg font-semibold">
                World Happiness Report: This annual report, published by the Sustainable Development Solutions Network, ranks countries based on their citizens' reported happiness levels. The latest report is from 2023. (Source: World Happiness Report)
                Gallup World Poll: Gallup conducts surveys on various topics, including happiness and well-being, in over 150 countries. (Source: Gallup World Poll)
              </p>
            </div>
            <div className="w-1/2">
              <img src={happinessIndex} alt="World Happiness Index" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;

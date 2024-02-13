import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyC6lqQ06pBcyKjct_lsVQ2f7eSHbNv5mWg'; // Replace with your actual API key


export default function PageSpeed() {
  const [url, setUrl] = useState('');
  const [mobileData, setMobileData] = useState(null);
  const [desktopData, setDesktopData] = useState(null);
  const [loadingMobile, setLoadingMobile] = useState(false);
  const [loadingDesktop, setLoadingDesktop] = useState(false);
  const [errorMobile, setErrorMobile] = useState(null);
  const [errorDesktop, setErrorDesktop] = useState(null);

  const fetchData = async (strategy, setData, setLoading, setError) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          url
        )}&key=${API_KEY}&strategy=${strategy}`
      );
      setData(response.data);
    } catch (error) {
      if (error.response) {
        setError(`Error: ${error.response.data.error.message}`);
      } else {
        setError('Failed to fetch PageSpeed Insights data');
      }
    } finally {
      setLoading(false);
    }
  };

  const convertMillisecondsToSeconds = (milliseconds) => {
    return (milliseconds / 1000).toFixed(2);
  };

  useEffect(() => {
    if (url) {
      fetchData('mobile', setMobileData, setLoadingMobile, setErrorMobile);
      fetchData('desktop', setDesktopData, setLoadingDesktop, setErrorDesktop);
    }
  }, [url]);

  const renderOptimizableImages = (data, loading, error, title) => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (data) {
      const { lighthouseResult: { audits } } = data;
      const optimizableImagesAudit = audits['uses-optimized-images'];

      if (optimizableImagesAudit && optimizableImagesAudit.details && optimizableImagesAudit.details.items) {
        const imageItems = optimizableImagesAudit.details.items;

        return (
          <div>
            <h2>{title}</h2>
            <ul>
              {imageItems.map((image, index) => (
                <li key={index}>
                  <strong>URL:</strong> {image.url} <br />
                  <strong>Optimization Status:</strong> {image.optimizationStatus}
                  <br />
                  <img src={image.url} alt={`Optimized Image ${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
                </li>
              ))}
            </ul>
          </div>
        );
      } else {
        return <p>No optimizable image data found.</p>;
      }
    }


    return null;
  };

  const renderPageSpeedData = (data, loading, error, title) => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (data) {
      const { lighthouseResult: { fullPageScreenshot,audits, categories } } = data;
      
      const thum = fullPageScreenshot.screenshot.data;
       
      return (
        <div>
          <h2>{title}</h2>
          <h3>Performance Metrics</h3>
          {categories && (
            <ul>
              {Object.keys(categories).map((categoryKey) => (
                <li key={categoryKey}>
                  <strong>{categories[categoryKey].title}:</strong>{' '}
                  {categories[categoryKey].score * 100}%
                </li>
              ))}
            </ul>
          )}
          <h3>Audit Details</h3>
          {audits && (
            <ul>
              {Object.keys(audits).map((auditKey) => (
                <li key={auditKey}>
                  <strong>{audits[auditKey].title}:</strong>{' '}
                  {audits[auditKey].numericValue &&
                    `${convertMillisecondsToSeconds(audits[auditKey].numericValue)} seconds`}
                </li>
              ))}
            </ul>
          )}

<div>
<img src={thum}/>

</div>

          {/* Render optimizable images */}
          {renderOptimizableImages(data, loading, error, 'Optimizable Images')}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="page-speed-container">
      <h1 className="page-speed-title">Health Checker</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        className="url-input"
      />

      <div className="data-container">
        {renderPageSpeedData(mobileData, loadingMobile, errorMobile, 'Mobile Data')}
        {renderPageSpeedData(desktopData, loadingDesktop, errorDesktop, 'Desktop Data')}
      </div>

      <style jsx>{`
        /* styles.css */

        .page-speed-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .page-speed-title {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .url-input {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }

        .data-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 15px;
        }

        strong {
          font-weight: bold;
        }

        img {
          max-width: 100%;
          height: auto;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}

import { useState } from 'react';

const PerformanceChecker = () => {
  const [url, setUrl] = useState('');
  const [metrics, setMetrics] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url.trim() === '') return;

    // Fetch performance metrics for the provided URL
    try {
      const performanceMetrics = await fetchPerformanceMetrics(url);
      setMetrics(performanceMetrics);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };

  const fetchPerformanceMetrics = async (targetUrl) => {
    try {
      const response = await fetch(targetUrl);
      const text = await response.text();

      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(text, 'text/html');

      // Measure Core Web Vitals directly using native APIs
      const cls = calculateCLS(htmlDocument);
      const lcp = calculateLCP(htmlDocument);
      const fid = calculateFID();

      return { cls, lcp, fid };
    } catch (error) {
      throw new Error('Error gathering metrics:', error);
    }
  };

  const calculateCLS = (document) => {
    // Calculate Cumulative Layout Shift (CLS)
    // Your CLS calculation logic here
    return 0; // Placeholder value for demonstration
  };

  const calculateLCP = (document) => {
    // Calculate Largest Contentful Paint (LCP)
    // Your LCP calculation logic here
    return 0; // Placeholder value for demonstration
  };

  const calculateFID = () => {
    // Calculate First Input Delay (FID)
    // Your FID calculation logic here
    return 0; // Placeholder value for demonstration
  };

  return (
    <div>
      <h1>Web Performance Checker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Check Performance</button>
      </form>
      {metrics && (
        <div>
          <h2>Performance Metrics for {url}</h2>
          <p>CLS (Cumulative Layout Shift): {metrics.cls}</p>
          <p>LCP (Largest Contentful Paint): {metrics.lcp}</p>
          <p>FID (First Input Delay): {metrics.fid}</p>
          {/* Display more metrics as needed */}
        </div>
      )}
    </div>
  );
};

export default PerformanceChecker;

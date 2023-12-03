import Script from 'next/Script'

const ScriptComponent = () => {
  const handleLoad = () => {
    debugger;
  };

  return (
    <Script
      src="/js/script.js"
      strategy="afterInteractive"
      onLoad={handleLoad}
    />
  );
};

export default ScriptComponent;

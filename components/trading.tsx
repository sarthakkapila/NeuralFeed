"use client"
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget(): JSX.Element {
  const container = useRef<HTMLDivElement>(null); // Specify the type of ref

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BTCUSD",
        "interval": "D",
        "height": "200",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "gridColor": "rgba(0, 0, 0, 0.06)",
        "style": "1",
        "locale": "in",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    if (container.current) {
      container.current.appendChild(script); // Check if container.current is not null before appending
    }
  }, []); // Empty dependency array for useEffect

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div> 
      <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
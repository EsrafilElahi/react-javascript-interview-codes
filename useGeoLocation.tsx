import React, { useEffect, useState, useMemo, useCallback } from 'react';


interface GeoPosition {
  latitude: number;
  longitude: number;
}

function useGeolocation() {
  const [geoPosition, setGeoPosition] = useState<GeoPosition | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  const getCurrentPosition = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setGeoPosition({ latitude, longitude });
        },
        (err) => {
          setGeoError(err.message);
        }
      );
    } else {
      setGeoError("Geolocation is not available in this browser.");
    }
  }, []);

  useEffect(() => {
    getCurrentPosition();
  }, [getCurrentPosition]);

  return useMemo(() => ({ geoPosition, geoError }), [geoPosition, geoError]);
}

export default useGeolocation;

import React from 'react';
import { VideoContext } from '../contexts/VideoContext';
import { TopBar } from './TopBar';
import VideoBrowser from './VideoBrowser';
import { LoadingSpinner } from './common/LoadingSpinner';
import Sanity from '../services/Sanity';

export default function Dashboard() {
  const { loading } = React.useContext(VideoContext)
  
  const loadVideos = React.useCallback(() => {
    Sanity.paginator.getVideos()
  }, [])

  React.useEffect(() => {
    loadVideos()
  }, [loadVideos])

  return (
    <div className="w-screen h-screen bg-gray-800 text-white">
      <div className="m-auto p-2 max-w-7xl">
      <TopBar />
        { loading ?  <LoadingSpinner /> :
          <div>
            <VideoBrowser />
          </div>
        }
      </div>
    </div>
  );
};

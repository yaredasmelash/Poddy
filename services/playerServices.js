// services/playerService.js
import TrackPlayer from 'react-native-track-player';

export const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  TrackPlayer.updateOptions({
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP,
    ],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE
    ]
  });
};

export const playEpisode = async (episode) => {
  await TrackPlayer.reset();
  await TrackPlayer.add({
    id: episode.id,
    url: episode.audioUrl,
    title: episode.title,
    artist: episode.author,
    artwork: episode.artwork
  });
  await TrackPlayer.play();
};
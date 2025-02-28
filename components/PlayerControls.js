// components/PlayerControls.js
import { View, Text, Slider, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrackPlayer from 'react-native-track-player';

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View>
      <Text>Now Playing</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        onSlidingComplete={async (value) => {
          await TrackPlayer.seekTo(value);
        }}
      />
      <TouchableOpacity onPress={togglePlayback}>
        <Ionicons name={isPlaying ? 'pause' : 'play'} size={32} />
      </TouchableOpacity>
    </View>
  );
};
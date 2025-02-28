// screens/Search.js
import { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import axios from 'axios';
import PodcastItem from '../components/PodcastItem';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchPodcasts = async (text) => {
    setQuery(text);
    try {
      const response = await axios.get('https://listen-api.listennotes.com/api/v2/search', {
        params: { q: text, type: 'podcast' },
        headers: { 'X-ListenAPI-Key': 'YOUR_API_KEY' }
      });
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Search podcasts..."
        value={query}
        onChangeText={searchPodcasts}
      />
      <FlatList
        data={results}
        renderItem={({ item }) => <PodcastItem podcast={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
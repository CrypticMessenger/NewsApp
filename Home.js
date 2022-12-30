import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator,Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text,useColorMode} from 'native-base'
import Card from './Card'

const Home = () => {
  
const {
    colorMode,
    toggleColorMode
  } = useColorMode();
console.log(colorMode)



  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchNews = async () => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&page=${page}`,
      {
        headers: {
          'X-Api-Key': '448f3f535cf545b89ef85a93976b0311',
        },
      }
    );
    const data = await response.json();
    setArticles(articles.concat(data.articles));
    setHasMore(data.totalResults > articles.length + data.articles.length);
    setLoading(false);
  };

  useEffect(() => {
    AsyncStorage.getItem('articles').then((articles) => {
      if (articles) {
        setArticles(JSON.parse(articles));
      }
    });
    fetchNews();
  }, []);
  
   useEffect(() => {
    AsyncStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage(page + 1);
      fetchNews()
    }
  };
  return (
    <View style={{backgroundColor:colorMode==='light'?'#ffffff':'#000000'}}>
    <Text style={{ textAlign: 'center'}} bold fontSize="4xl" color="violet.500" mt={0}>Top News</Text>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
           <Card mode={colorMode} title = {item.title} author={item.author} description={item.description} publishedAt={item.publishedAt} url={item.url} urlToImage={item.urlToImage} content={item.content}/>
           
          
        )}
        keyExtractor={(item) => item.url}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <View>
              <Text>No more articles</Text>
            </View>
          )
        }
      />
    </View>
  );
};

export default Home;

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const App = () => {
  const [popular, setPopular] = useState([
    {
      judul: 'Pico Designer',
      desc: 'Senior UI Designer',
      image: require('./src/Image/picture1.png'),
      location: 'Indonesia'
    },
    {
      judul: 'Goggle Developer',
      desc: 'Golang Developer',
      image: require('./src/Image/picture2.png'),
      location: 'Belgia'
    },
    {
      judul: 'WhatsApp Designer',
      desc: 'Senior Engineer',
      image: require('./src/Image/picture3.png'),
      location: 'US'
    },
    {
      judul: 'Instagram Front End',
      desc: 'React Native',
      image: require('./src/Image/picture4.png'),
      location: 'Jerman'
    },
  ]);

  return (
    <ScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 15,
          backgroundColor: '#F6F6F6',
        }}>
        {/* Header */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={require('./src/Icon/arrow_back.png')} />
          <Image source={require('./src/Image/logo.jpg')} />
        </View>

        {/* Search Box */}
        <View style={styles.searchBox}>
          <View style={styles.search}>
            <TextInput
              placeholder="Search your dream job here"
              placeholderTextColor={'#bfbfbf'}
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.searchIcon}>
              {/* <Icon name="search" size={25} color="white" /> */}
              <Image
                source={require('./src/Icon/setting.png')}
                width={23}
                style={{width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Community */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: 20,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Popular Community
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>See More</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <FlatList
            style={styles.item}
            data={popular}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 240,
                    height: 80,
                    borderRadius: 15,
                    borderWidth: 1,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingRight: -20,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginRight: 20,
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 40, height: 40, borderRadius: 25}}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <Text style={{color: 'black', fontSize: 12}}>
                      {item.judul}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      {item.desc}
                    </Text>
                  </View>
                  <Image
                    source={require('./src/Icon/like.jpg')}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 25,
                      alignItems: 'flex-start',
                    }}
                  />
                </View>
              </TouchableOpacity>
            )}
          />

          {/* Recent Jobs */}
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingTop: 20,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              Recent Jobs
            </Text>
            <Text style={{fontSize: 12, color: 'black'}}>See More</Text>
          </View>
          <FlatList
            style={{marginTop: 10}}
            data={popular}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 15,
                    borderWidth: 1,
                    backgroundColor: 'white',
                    marginRight: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingRight: -20,
                      justifyContent: 'space-around',
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: 8,
                        marginTop: 10,
                      }}
                    />
                    <View
                      style={{
                        height: 23,
                        borderRadius: 5,
                        alignItems: 'flex-start',
                        marginTop: 10,
                        backgroundColor: '#66ffcc',
                        paddingHorizontal: 10,
                        alignItems: 'center',
                        marginLeft: 10,
                      }}>
                      <Text style={{alignItems: 'center', color: 'black'}}>
                        Open
                      </Text>
                    </View>
                  </View>
                  <View style={{marginLeft: 15, marginTop: 10}}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      UX Designer
                    </Text>
                    <Text style={{color: '#00cc66', fontWeight: 'bold'}}>
                      Snap
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text
                      style={{
                        backgroundColor: '#e6e6e6',
                        paddingVertical: 3,
                        paddingHorizontal: 5,
                        borderRadius: 3,
                        fontSize: 12,
                      }}>
                      Fulltime
                    </Text>
                    <Text
                      style={{
                        backgroundColor: '#e6e6e6',
                        paddingVertical: 3,
                        paddingHorizontal: 5,
                        borderRadius: 3,
                        fontSize: 12,
                      }}>
                      Remote
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />

          {/* All */}
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingTop: 20,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              All
            </Text>
          </View>
          <FlatList
            style={{marginTop: 10}}
            data={popular}
            vertial
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    height: 100,
                    borderRadius: 15,
                    borderWidth: 1,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingRight: -20,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginBottom: 15,
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 70, height: 70, borderRadius: 10, marginLeft: -40}}
                  />
                  <View style={{flexDirection: 'column', marginLeft: -70}}>
                    <Text style={{color: 'black', fontSize: 12}}>
                      {item.judul}
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        fontWeight: 'bold',
                      }}>
                      {item.desc}
                    </Text>
                    <Text>{item.location}</Text>
                  </View>
                  <Image
                    source={require('./src/Icon/like.jpg')}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 25,
                      alignItems: 'flex-start',

                    }}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  search: {flexDirection: 'row'},
  searchInput: {
    backgroundColor: 'white',
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 15,
    flex: 1,
    backgroundColor: 'white',
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
    marginTop: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginLeft: 10,
    elevation: 3,
  },
});

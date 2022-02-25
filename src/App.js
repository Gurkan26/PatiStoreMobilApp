import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import pati_data from './PatiMall.json';
import Pati_card from './component/Card';
import SearchBar from './component/SearchBar/SearchBar';
function App() {
  const renderMall = ({item}) => <Pati_card patiCardlar={item} />;
  // Bu const u kullanarak bir fonksiyonu çok sayıda sıfırdan kurmak yerine
  // bir kere kuruyoruz ve çok sayıda çağırıyoruz bu şekilde performansın artmasına yardımcı oluyoruz.

  const handleSearch = (text) => {
    const filteredList = products_data.filter(product => {
      const searchedText = text.toLowerCase()
      const currentTitle = product.title.toLowerCase()

      //searchedText currentTitle ın içinde varsa yani değeri -1 den büyükse döndürür
      return currentTitle.indexOf(searchedText) > -1
    })
    setProducts(filteredList)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATİSTORE</Text>
      <SearchBar style={styles.input} onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        /* 
             Bu özel nesne ile çekeceğimiz verinin id sini biz belirliyoruz, yani şöyle ki eğer ki 
             alacağımız veri id değil de farklı bir şey olsaydı o zaman program hata verecekti ancak bu metot ile
             id yi kendimiz belirleyip stringe atıyoruz. */
        data={pati_data}
        renderItem={renderMall}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#eceff1',
    borderRadius: 10,
  },
});
export default App;

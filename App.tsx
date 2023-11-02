import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, TouchableOpacity,Text, ScrollView } from 'react-native';

const AddContactScreen = () => {
  const [imageSource, setImageSource] = useState(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const selectImage = () => {
    // Add your code to select an image here.
    // You can use libraries like react-native-image-picker or react-native-image-crop-picker.
  };

  const saveContact = () => {
    // Here, you can save the contact data to your database or state.
    // For simplicity, we'll just log the data for now.
    console.log({
      name,
      surname,
      phoneNumber,
      imageSource,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
   <View style={styles.container}>
   <TouchableOpacity style={styles.circle} onPress={() => console.log('Image pressed')}>
      <Image
        source={require('./assets/Vector_add_photo.png')} // Provide the path to your image
        style={styles.imageIcon}
      />
    </TouchableOpacity>
        
        <View style={styles.SummaryBox}>
        <TextInput
          placeholder="Write a short summary about this person"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Surname"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Mobile Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Date of Birth"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>
     
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Company Name"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Company Role"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Address"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Industry"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>
      
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Email"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>
     
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Linkedin"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Facebook"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Instagram"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>
     
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Other Social Media"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>
     
      <View style={styles.inputBox}>
        <TextInput
          placeholder="University"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Faculty"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>
     
      <TouchableOpacity style={styles.AddContactButton}>  
          <Text style={styles.buttonText}>Save</Text> 
         </TouchableOpacity>
    </View>
    </ScrollView>  
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
  },


  circle: {
    width:80,
    height:80,
    borderRadius: 80/ 2, // Half of width or height to make it circular
    backgroundColor: 'white', // Background color of the circle
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'F0F0F0',
    borderWidth:0.3,
    marginVertical: 7,
  },
  imageIcon: {
    width: 25, // Adjust the size of the image to fit inside the circle
    height: 25, // Adjust the size of the image to fit inside the circle
    //borderRadius: 25, // Half of the adjusted width or height
    
  },

  SummaryBox:{
    width:355,
    height:135,
    borderStyle: 'solid',
    borderColor: 'F0F0F0',
    borderWidth: 0.3,
    padding: 20,
    borderRadius: 15,
    paddingVertical:5,
  },
  AddContactButton:{
    backgroundColor: 'blue',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    width: 195,
    height: 55,
    margin: 20,

  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
    
  
  inputBox: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 0.3,
    padding: 20,
    borderRadius: 15,
    width: 355,
    height: 55,
    marginVertical: 7,

  },
});

export default AddContactScreen;


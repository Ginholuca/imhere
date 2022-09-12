import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

// exportar por padrão uma function
export function Home() {
  const participants = [
    'Giovanni',
    'Bob',
    'Altria',
    'Mash',
    'Altera',
    'Ishtar',
    'Enkidu',
    'Gilgamesh',
    'Karna',
    'Kama',
  ]

  function handleParticipantAdd() {
    if (participants.includes('Giovanni')) {
      return Alert.alert(
        'Participante Existente',
        'Já existe um participante na lista com esse nome.',
      )
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert(`${name} foi solado(a)!`),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  // sua function/interface vai ter um retorno
  return (
    // e dentro desse retorno é onde vc coloca os elementos q vc quer exibir em tela
    <View
      style={
        styles.container
        // style n recebe texto por isso tem chaves, dai o conteudo q ela recebe eh um
        // objeto, dai por isso mais uma chaves
      }
    >
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 9 de Setembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* dentro da flatlist se passa as propriedades da lista */}
      <FlatList
        // dados da lista
        data={participants}
        // chave
        keyExtractor={(item) => item}
        // pra dizer o q renderizar para cada item
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes.
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>

      {
        participants.map(participant => (
          //para cada participant eu vou gerar algo
          <Participant 
          key={participant}
          name={participant} 
          onRemove={() => handleParticipantRemove("bala")} />
        ))
      }

    </ScrollView> */}
    </View>
    // deve passar o fragment para usar mais de um elemento na interface
  )
}

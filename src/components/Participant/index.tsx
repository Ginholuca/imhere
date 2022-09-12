import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './stlyes'

type Props = {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: Props) {
  // usando (props) tbm serve
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {/* Dai ficaria {props.name} */}
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

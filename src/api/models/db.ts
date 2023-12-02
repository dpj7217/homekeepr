import { openDatabase } from 'react-native-sqlite-storage'

export function getDbConn(input_name: string, input_location?: string) {
    return openDatabase({name: input_name, location: input_location ? input_location : 'default' });
}
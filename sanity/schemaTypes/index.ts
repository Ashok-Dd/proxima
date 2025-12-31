import { type SchemaTypeDefinition } from 'sanity'
import statsSection from './statsSection'
import event from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [statsSection , event],
}

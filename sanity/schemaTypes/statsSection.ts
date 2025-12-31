// schemas/statsSection.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'statsSection',
  title: 'Statistics Section',
  type: 'document',
  fields: [
    defineField({
      name: 'successConferences',
      title: 'Success Conferences',
      type: 'number',
    }),
    defineField({
      name: 'committeeMembers',
      title: 'Committee Members',
      type: 'number',
    }),
    defineField({
      name: 'participants',
      title: 'All Participants',
      type: 'number',
    }),
    defineField({
      name: 'hostCountries',
      title: 'Host Countries',
      type: 'number',
    }),
  ],
})

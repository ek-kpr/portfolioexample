import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {createClient} from '@sanity/client'
import {defineConfig} from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'woqev9ld',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

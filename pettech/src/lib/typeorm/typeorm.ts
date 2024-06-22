import { Category } from '@/entities/category.entity'
import { Product } from '@/entities/product.entity'
import { env } from '@/env'
import { DataSource } from 'typeorm'
import { ProductAutoGenerateUUID1719084711942 } from './migrations/1719084711942-ProductAutoGenerateUUID'

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Product, Category],
  migrations: [ProductAutoGenerateUUID1719084711942],
  logging: env.NODE_ENV === 'development',
})

appDataSource
  .initialize()
  .then(() => {
    console.log('Database with typeorm connected')
  })
  .catch((error) => {
    console.error('Error connecting to the database with typeorm', error)
  })

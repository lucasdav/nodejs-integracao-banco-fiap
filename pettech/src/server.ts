import { env } from '@/env'
// abaixo para utilizar o @ em @/app deve se configurar o path no tsconfig.json
import { app } from '@/app'

app.listen({
    host: '0.0.0.0',
    port: env.PORT,
}).then (() => {
    console.log(`Server is running on http://localhost:${env.PORT}`);
})
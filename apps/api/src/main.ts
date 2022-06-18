import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  console.log('an api change');
  
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT || 3000)
}
bootstrap()

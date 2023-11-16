import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Checklist extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tarefa: string

  @column()
  public hora: Int16Array

  @column()
  public minuto: Int16Array

  @column()
  public segundo: Int16Array

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

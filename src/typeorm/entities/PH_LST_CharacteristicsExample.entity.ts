import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_Characteristics from './PH_CTL_Characteristics.entity';

@Entity('PH_LST_CharacteristicExamples')
export default class PH_LST_CharacteristicExamples {
  @PrimaryGeneratedColumn('increment')
  ph_id: number;

  @ManyToOne(
    () => PH_CTL_Characteristics,
    (e: PH_CTL_Characteristics) => e.ph_ref,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'ph_characteristic_ref' })
  @Column({ nullable: true })
  ph_characteristic_ref: string;

  @Column()
  ph_value: string;
}

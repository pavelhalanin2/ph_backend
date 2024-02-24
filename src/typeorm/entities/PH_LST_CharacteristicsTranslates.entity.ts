import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_Characteristics from './PH_CTL_Characteristics.entity';
import PH_CTL_Languages from './PH_CTL_Languages.entity';

@Entity('PH_LST_CharacteristicTranslates')
export default class PH_LST_CharacteristicTranslates {
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
  @Column()
  ph_characteristic_ref: string;

  @Column()
  ph_value: string;

  @ManyToOne(() => PH_CTL_Languages, (e: PH_CTL_Languages) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_language_ref' })
  @Column()
  ph_language_ref: string;
}

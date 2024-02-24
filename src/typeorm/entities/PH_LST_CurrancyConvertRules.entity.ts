import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_Currencies from './PH_CTL_Currencies.entity';

@Entity('PH_LST_CurrancyConvertRules')
export default class PH_LST_CertificateItems {
  @PrimaryGeneratedColumn('increment')
  ph_id: number;

  @ManyToOne(() => PH_CTL_Currencies, (e: PH_CTL_Currencies) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_currancy_ref' })
  @Column()
  ph_currancy_ref: string;

  @ManyToOne(() => PH_CTL_Currencies, (e: PH_CTL_Currencies) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_new_currancy_ref' })
  @Column()
  ph_new_currancy_ref: string;

  @Column()
  ph_date: Date;

  @Column()
  ph_comment: string;

  @Column({ type: 'float' })
  ph_numerator: number;

  @Column({ type: 'float' })
  ph_denominator: number;

  @Column({ type: 'float' })
  ph_summand: number;
}

import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PH_CTL_Currencies')
export default class PH_CTL_Currencies {
  @PrimaryGeneratedColumn('uuid')
  ph_ref: string;

  @Index('uni_ph_ctl_currencies_code', { unique: true })
  @Column()
  ph_code: string;

  @Column()
  ph_description: string;

  @Column({ default: false })
  ph_deletion_mark: boolean;

  @Column({ default: false })
  ph_show: boolean;
}

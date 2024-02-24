import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_Items from './PH_CTL_Items.entity';
import PH_DOC_Certificates from './PH_DOC_Certificates.entity';

@Entity('PH_LST_CertificateItems')
export default class PH_LST_CertificateItems {
  @PrimaryGeneratedColumn('increment')
  ph_id: number;

  @ManyToOne(() => PH_DOC_Certificates, (e: PH_DOC_Certificates) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_certificate_ref' })
  @Column()
  ph_certificate_ref: string;

  @ManyToOne(() => PH_CTL_Items, (e: PH_CTL_Items) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_item_ref' })
  @Column()
  ph_item_ref: string;

  @Column()
  ph_n: number;

  @Column()
  ph_tnvedcode: number;

  @Column()
  ph_sortingIndex: number;
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_ContactTypes from './PH_CTL_ContactTypes.entity';
import PH_CTL_PublicContacts from './PH_CTL_PublicContacts.entity';

@Entity('PH_LST_PublicContacts')
export default class PH_LST_PublicContacts {
  @PrimaryGeneratedColumn('increment')
  ph_id: number;

  @ManyToOne(
    () => PH_CTL_PublicContacts,
    (e: PH_CTL_PublicContacts) => e.ph_ref,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'ph_public_contact_ref' })
  @Column()
  ph_public_contact_ref: string;

  @ManyToOne(() => PH_CTL_ContactTypes, (e: PH_CTL_ContactTypes) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_contact_type_ref' })
  @Column()
  ph_contact_type_ref: string;

  @Column()
  ph_value: string;
}

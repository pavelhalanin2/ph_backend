import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('PH_CTL_Items')
export default class PH_CTL_Items {
  @PrimaryGeneratedColumn('uuid')
  ph_ref: string;

  @Index('uni_ph_ctl_items_code', { unique: true })
  @Column()
  ph_code: string;

  @Column()
  ph_description: string;

  @ManyToOne(() => PH_CTL_Items, (e: PH_CTL_Items) => e.ph_ref, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'ph_parent_ref' })
  @Column({ nullable: true })
  ph_parent_ref: string;

  @Column()
  ph_is_folder: boolean;

  @Column({ default: false })
  ph_deletion_mark: boolean;

  @Column({ default: false })
  ph_show: boolean;
}

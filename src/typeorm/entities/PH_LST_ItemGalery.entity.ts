import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_Items from './PH_CTL_Items.entity';

@Entity('PH_LST_ItemGalery')
export default class PH_LST_ItemGalery {
  @PrimaryGeneratedColumn('increment')
  ph_id: number;

  @ManyToOne(() => PH_CTL_Items, (e: PH_CTL_Items) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_item_ref' })
  @Column()
  ph_item_ref: string;

  @Column()
  ph_image_url: string;
}

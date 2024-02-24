import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_Items from './PH_CTL_Items.entity';
import PH_CTL_SEOPages from './PH_CTL_SEOPages.entity';

@Entity('PH_LST_ItemSEOPages')
export default class PH_LST_ItemSEOPages {
  @PrimaryGeneratedColumn('increment')
  ph_id: number;

  @ManyToOne(() => PH_CTL_SEOPages, (e: PH_CTL_SEOPages) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_seo_page_ref' })
  @Column()
  ph_seo_page_ref: string;

  @ManyToOne(() => PH_CTL_Items, (e: PH_CTL_Items) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_item_ref' })
  @Column()
  ph_item_ref: string;
}

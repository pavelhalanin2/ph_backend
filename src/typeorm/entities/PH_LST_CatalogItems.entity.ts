import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_Items from './PH_CTL_Items.entity';
import PH_DOC_Catalogs from './PH_DOC_Catalogs.entity';

@Entity('PH_LST_CatalogItems')
export default class PH_LST_CatalogItems {
  @PrimaryGeneratedColumn('increment')
  ph_id: number;

  @ManyToOne(() => PH_DOC_Catalogs, (e: PH_DOC_Catalogs) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_catalog_ref' })
  @Column()
  ph_catalog_ref: string;

  @ManyToOne(() => PH_CTL_Items, (e: PH_CTL_Items) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_item_ref' })
  @Column()
  ph_item_ref: string;

  @Column()
  ph_page: number;

  @Column()
  ph_sortingIndex: number;
}

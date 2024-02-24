import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_Items from './PH_CTL_Items.entity';
import PH_DOC_Prices from './PH_DOC_Prices.entity';

@Entity('PH_LST_PriceItems')
export default class PH_LST_PriceItems {
  @PrimaryGeneratedColumn('increment')
  ph_id: number;

  @ManyToOne(() => PH_DOC_Prices, (e: PH_DOC_Prices) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_price_ref' })
  @Column()
  ph_price_ref: string;

  @ManyToOne(() => PH_CTL_Items, (e: PH_CTL_Items) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_item_ref' })
  @Column()
  ph_item_ref: string;

  @Column({ type: 'float' })
  ph_cost: number;
}

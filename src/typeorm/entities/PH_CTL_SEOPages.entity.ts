import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import PH_CTL_Languages from './PH_CTL_Languages.entity';

@Entity('PH_CTL_SEOPages')
export default class PH_CTL_SEOPages {
  @PrimaryGeneratedColumn('uuid')
  ph_ref: string;

  @Index('uni_ph_ctl_seo_pages_code', { unique: true })
  @Column()
  ph_code: string;

  @Column()
  ph_description: string;

  @Column({ default: false })
  ph_deletion_mark: boolean;

  @Column({ default: false })
  ph_show: boolean;

  @Index('uni_ph_ctl_seo_pages_html_title', { unique: true })
  @Column()
  ph_html_title: string;

  @Index('uni_ph_ctl_seo_pages_html_description', { unique: true })
  @Column()
  ph_html_description: string;

  @Column()
  ph_html_keywords: string;

  @Column()
  ph_html_lang: string;

  @Index('uni_ph_ctl_seo_pages_sitemap_loc', { unique: true })
  @Column()
  ph_sitemap_loc: string;

  @Column()
  ph_sitemap_lastmod: Date;

  @Column()
  ph_sitemap_changefreq: string;

  @Column({ type: 'float' })
  ph_sitemap_priority: number;

  @ManyToOne(() => PH_CTL_Languages, (e: PH_CTL_Languages) => e.ph_ref, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_language_ref' })
  @Column({ nullable: true })
  ph_language_ref: string;
}

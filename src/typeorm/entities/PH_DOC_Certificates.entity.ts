import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PH_DOC_Certificates')
export default class PH_DOC_Certificates {
  @PrimaryGeneratedColumn('uuid')
  ph_ref: string;

  @Index('uni_ph_doc_certificates_number', { unique: true })
  @Column()
  ph_number: string;

  @Column()
  ph_date: string;

  @Column()
  ph_posted: boolean;

  @Column({ default: false })
  ph_deletion_mark: boolean;

  @Column({ default: false })
  ph_show: boolean;

  @Column()
  ph_file_url: string;
}

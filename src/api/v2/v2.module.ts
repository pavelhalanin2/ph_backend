import { Module } from '@nestjs/common';
import { LanguagesModule } from './languages/languages.module';
import { CharacteristicsModule } from './characteristics/characteristics.module';
import { ContactTypesModule } from './contact-types/contact-types.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { ItemsModule } from './items/items.module';
import { PublicContactsModule } from './public-contacts/public-contacts.module';
import { SEOPagesModule } from './seo-pages/seo-pages.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { CertificatesModule } from './certificates/certificates.module';
import { PricesModule } from './prices/prices.module';

@Module({
  imports: [
    LanguagesModule,
    CharacteristicsModule,
    ContactTypesModule,
    CurrenciesModule,
    ItemsModule,
    PublicContactsModule,
    SEOPagesModule,
    CatalogsModule,
    CertificatesModule,
    PricesModule,
  ],
})
export class V2Module {}

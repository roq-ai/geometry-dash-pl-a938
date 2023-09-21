interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Game Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Game Owner', 'Game Administrator', 'Game Developer'],
  tenantName: 'Company',
  applicationName: 'geometry dash platform ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Update personal information',
    'View new_table_zxqo',
    'View new_table_iwfb',
  ],
  ownerAbilities: [
    'Manage new_table_zxqo',
    'Manage new_table_iwfb',
    'Manage new_table',
    'Manage user',
    'Manage company',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/dfef6c56-0f75-445e-a81b-ae5991878dc2',
};

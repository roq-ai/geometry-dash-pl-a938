const mapping: Record<string, string> = {
  companies: 'company',
  'new-tables': 'new_table',
  'new-table-iwfbs': 'new_table_iwfb',
  'new-table-zxqos': 'new_table_zxqo',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

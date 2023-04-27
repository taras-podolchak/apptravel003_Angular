import {environment} from '@env';

export class EndPoints {
  static PROVIDERS = environment.REST_CORE + '/providers';
  static ARTICLES = environment.REST_CORE + '/articles';
  static CASHIERS = environment.REST_CORE + '/cashiers';
  static CASHIERS_LAST = EndPoints.CASHIERS + '/last';
  static TICKETS = environment.REST_CORE + '/tickets';
  static COMPLAINTS = environment.REST_CUSTOMER_SUPPORT + '/complaints';
  static INVOICES = environment.REST_CORE + '/invoices';
  static STOCK_ALARMS = environment.REST_CORE + '/stock-alarms';
  static OFFERS = environment.REST_CORE + '/offers';
  static STOCK_AUDITS = environment.REST_CORE + '/stock-audits';
  static POINTS = environment.REST_USER + '/points'
  static QUARTER_TAXES = environment.REST_CORE + '/quarter-taxes'
  static BUDGETS = environment.REST_CORE + '/budgets';
  static ADVERTISING = environment.REST_CORE + '/advertising';
}

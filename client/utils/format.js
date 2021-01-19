import Intl from 'intl';
import 'intl/locale-data/jsonp/pt';

export const { format: formatPrice } = new Intl.NumberFormat('pt', {
  style: 'currency',
  currency: 'BRL',
});

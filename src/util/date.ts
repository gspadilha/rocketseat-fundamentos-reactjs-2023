import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

export function dateFormatted(date: Date, lib = true) {
  if (!lib) {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }

  return format(date, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr });
}

export function relativeDateFormatted(date: Date) {
  return formatDistanceToNow(date, { locale: ptBr, addSuffix: true });
}

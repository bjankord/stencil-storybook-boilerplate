/* eslint-disable import/prefer-default-export, @stencil/strict-boolean-conditions */
export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

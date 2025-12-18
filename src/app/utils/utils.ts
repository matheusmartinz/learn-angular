import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsGlobal {
  formaterCPF(value: string): string {
    const d = (value ?? '').replace(/\D/g, '').slice(0, 11);
    const a = d.slice(0, 3);
    const b = d.slice(3, 6);
    const c = d.slice(6, 9);
    const e = d.slice(9, 11);

    let out = a;
    if (b) out += '.' + b;
    if (c) out += '.' + c;
    if (e) out += '-' + e;
    return out;
  }
}

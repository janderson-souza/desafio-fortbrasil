import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export class Animacoes {
    public static ANIMACAO_DE_ENTRADA = 
        trigger('ANIMACAO_DE_ENTRADA', [
            transition(':enter', [
                style({transform: 'translateX(-100%)'}),
                animate(250,  keyframes(
                [
                    style({ transform: 'translateX(-50%)', opacity: '0'}),
                    style({ transform: 'translateX(0%)', opacity: '1'}),
                ]
                ))
            ])
        ]);
    public static ANIMACAO_DE_SAIDA = 
        trigger('ANIMACAO_DE_SAIDA', [
            transition(':leave', [
                style({opacity: '1'}),
                animate(250,  keyframes(
                [
                    style({ opacity: '1'}),
                    style({ opacity: '0'}),
                ]
                ))
            ])
        ]);
}
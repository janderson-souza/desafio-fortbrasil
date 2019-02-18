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
    public static CARD_ITEM = 
        trigger('CARD_ITEM', [
            transition(':enter', [
                style({opacity: '0'}),
                animate(200,  keyframes(
                [
                    style({ opacity: '0', transform: 'scale(0.1)'}),
                    style({ opacity: '1', transform: 'scale(1)'}),
                ]
                ))
            ]),
            transition(':leave', [
                style({opacity: '1'}),
                animate(200,  keyframes(
                [
                    style({ opacity: '1', transform: 'scale(1)'}),
                    style({ opacity: '0', transform: 'scale(0.1)'}),
                ]
                ))
            ])
        ]);
}
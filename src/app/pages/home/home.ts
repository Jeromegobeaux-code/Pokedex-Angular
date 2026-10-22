import { Component, signal, WritableSignal } from '@angular/core';
import { PkmDto } from '../../models/pkm-dto';
import { inject, Injectable } from '@angular/core';
import { PokeData } from '../../services/poke-data';
import {PkmPreviewDto} from '../../models/pkm-preview-dto';
import { AsyncPipe, DecimalPipe, TitleCasePipe } from '@angular/common';

@Component({
  imports: [AsyncPipe, TitleCasePipe, DecimalPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private pokemonService = inject(PokeData);

  liste$ = this.pokemonService.getFirstGeneration();
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokeService } from './services/poke.service';
import { IUpdatePoke } from 'src/app/app.types';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/app.types';
import { IPoke } from 'src/app/app.types';
@Component({
  selector: 'app-poke-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  isAddPokeBtnClicked: boolean = false;
  isUpdatePokeBtnClicked:boolean = false;
  displayPopup:boolean = false;
  pokemons: IPoke[] = [];
  editData: any = {};

  displayedColumns: string[] = [
    'name',
    'level',
    'type',
    'createdOn',
    'updatedOn',
    'edit',
    'delete',
  ];

  constructor(
    public fb: FormBuilder,
    private pokeService: PokeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });

    this.pokeService.getPokemons().subscribe((res) => {
      this.pokemons = Object(res).data;
      console.log(this.pokemons);
    });
  }

  logout() {
    this.router.navigate(['']);
  }

  changeBtnTextToSave() {
    this.displayPopup = !this.displayPopup;
    this.isAddPokeBtnClicked =true;
    this.isUpdatePokeBtnClicked = false;
  
  }
  changeBtnTextToUpdate() {
    this.displayPopup = !this.displayPopup;
    this.isUpdatePokeBtnClicked = true;
    this.isAddPokeBtnClicked =false;
  }

  submitPopupForm(form:FormGroup){
    if(this.isAddPokeBtnClicked){
      this.createPoke(form);
      form.reset();
      this.isAddPokeBtnClicked = !this.isAddPokeBtnClicked;
    }
    else if(this.isUpdatePokeBtnClicked){
      console.log("hi")
      this.updatePoke(form);
      form.reset();
      this.isUpdatePokeBtnClicked = !this.isUpdatePokeBtnClicked
    }
    this.displayPopup = !this.displayPopup;
  }

  createPoke(form: FormGroup) {
    this.pokeService.createPokemon(form.value).subscribe((res) => {
      this.pokemons.push(Object(res).data);
      console.log(res);
    });
    this.pokeService.getPokemons().subscribe((res) => {
      this.pokemons = Object(res).data;
    });
    
  }

  editPoke(data: IUpdatePoke) {
    console.log(data);
    this.editData.name = data.name;
    this.editData.level = data.level;
    this.editData.type = data.type;
    this.editData.id = data.id;
    this.editData.isSelected = true;
    return this.editData;
  }
  updatePoke(form: FormGroup) {
    console.log(this.editData);
    this.pokeService.updatePokemon({...form.value,...this.editData}).subscribe((res) => {
      // console.log(res);
    });
    this.pokeService.getPokemons().subscribe((res) => {
      this.pokemons = Object(res).data;
    });
  }

  deletePoke() {
    this.pokeService.deletePokemon(this.editData).subscribe((res) => {
    });
    
  }
  hidePopup(){
    this.displayPopup = !this.displayPopup
   console.log('hi')
  }
  
  dataSource = new MatTableDataSource(this.pokemons);
}

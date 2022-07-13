import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ChargenRoutingModule } from './chargen-routing.module';
import { GenerateComponent } from './generate/generate.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CharSkillsComponent } from './char-skills/char-skills.component';
import { CharBaseComponent } from './char-base/char-base.component';
import { CharFeatsComponent } from './char-feats/char-feats.component';
import { CharEquipComponent } from './char-equip/char-equip.component';
import { CharSpellsComponent } from './char-spells/char-spells.component';
import { InputComponent } from './input/input.component';
import { PrettyprintPipe } from './prettyprint.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleFeatComponent } from './single-feat/single-feat.component';
import { CharModComponent } from './char-mod/char-mod.component';
import { CharSavesComponent } from './char-saves/char-saves.component';
import { CharTohitComponent } from './char-tohit/char-tohit.component';
import { NewTohitComponent } from './new-tohit/new-tohit.component';
import { NewSkillComponent } from './new-skill/new-skill.component';
import { NewFeatComponent } from './new-feat/new-feat.component';
import { CharNotesComponent } from './char-notes/char-notes.component';
import { SingleNoteComponent } from './single-note/single-note.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { EditSpellComponent } from './edit-spell/edit-spell.component';
import { CharLevelComponent } from './char-level/char-level.component';
import { ExpendablesComponent } from './expendables/expendables.component';
import { Title } from '@angular/platform-browser';
import { CharACComponent } from './char-ac/char-ac.component';

@NgModule({
  declarations: [GenerateComponent,
    CharSkillsComponent,
    CharBaseComponent,
    CharFeatsComponent,
    CharEquipComponent,
    CharSpellsComponent,
    InputComponent,
    PrettyprintPipe,
    SingleFeatComponent,
    CharModComponent,
    CharSavesComponent,
    CharTohitComponent,
    NewTohitComponent,
    NewSkillComponent,
    NewFeatComponent,
    CharNotesComponent,
    SingleNoteComponent,
    EditNotesComponent,
    EditSpellComponent,
    CharLevelComponent,
    ExpendablesComponent,
    CharACComponent],
  imports: [
    CommonModule,
    ChargenRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    DragDropModule
  ],
  providers: [Title],
})
export class ChargenModule { }

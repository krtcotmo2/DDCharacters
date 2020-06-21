import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
    NewFeatComponent],
  imports: [
    CommonModule,
    ChargenRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ]
})
export class ChargenModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateComponent } from './generate/generate.component';
import { CharSkillsComponent } from './char-skills/char-skills.component';
import { ChargenHomeComponent } from './chargen-home/chargen-home.component';
import { CharBaseComponent } from './char-base/char-base.component';
import { CharFeatsComponent } from './char-feats/char-feats.component';
import { CharEquipComponent } from './char-equip/char-equip.component';
import { CharSpellsComponent } from './char-spells/char-spells.component';
import { CharModComponent } from './char-mod/char-mod.component';
import { CharSavesComponent } from './char-saves/char-saves.component';
import { CharTohitComponent } from './char-tohit/char-tohit.component';
import { NewTohitComponent} from './new-tohit/new-tohit.component';
import { NewACComponent } from './new-ac/new-ac.component';
import { NewSkillComponent } from './new-skill/new-skill.component';
import { NewFeatComponent } from './new-feat/new-feat.component';
import { CharNotesComponent } from './char-notes/char-notes.component';
import { SingleNoteComponent } from './single-note/single-note.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { EditSpellComponent } from './edit-spell/edit-spell.component';
import { CharACComponent } from './char-ac/char-ac.component';
import { CharLevelComponent } from './char-level/char-level.component';
import { ExpendablesComponent } from './expendables/expendables.component';

const routes: Routes = [
  {path: '', component: ChargenHomeComponent,
    children: [
      {path: '', component: CharBaseComponent },
      {path: 'stats', component: GenerateComponent },
      {path: 'ac', component: CharACComponent },
      {path: 'tohits', component: CharTohitComponent },
      {path: 'skills', component: CharSkillsComponent },
      {path: 'saves', component: CharSavesComponent },
      {path: 'feats', component: CharFeatsComponent },
      {path: 'equip', component: CharEquipComponent },
      {path: 'spells', component: CharSpellsComponent },
      {path: 'spells', component: EditSpellComponent,
        children: [
          {path: '**', component: EditSpellComponent}
        ]
      },
      {path: 'expendables', component: ExpendablesComponent },
      {path: 'notes', component: CharNotesComponent },
      {path: 'notes', component: EditNotesComponent,
        children: [
        {path: 'editNote', component: EditNotesComponent,
          children: [
            {path: '**', component: EditNotesComponent}
          ]
        }
      ]
      },
      {path: 'notes', component: SingleNoteComponent,
          children: [
            {path: '**', component: SingleNoteComponent}
          ]
      },
      {path: 'mods', component: CharLevelComponent,
        children: [
          {path: 'levels', component: CharLevelComponent,
          children: [
            {path: '**', component: CharLevelComponent}
          ]}
        ]
      },
      {path: 'mods', component: NewTohitComponent,
        children: [
        {path: 'newtohit', component: NewTohitComponent,
          children: [
            {path: '**', component: NewTohitComponent}
          ]
        }
      ]
      },
      {path: 'mods', component: NewSkillComponent,
        children: [
          {path: 'newskill', component: NewSkillComponent}
        ]
      },
      {path: 'mods', component: NewFeatComponent,
        children: [
          {path: 'newfeat', component: NewFeatComponent}
        ]
      },
      {path: 'mods', component: NewACComponent,
        children: [
          {path: 'new-ac', component: NewACComponent,
            children: [
              {path: '**', component: NewACComponent}
            ]
          }
        ]
      },
      {path: 'mods', component: CharModComponent,
        children: [
          {path: '**', component: CharModComponent,
            children: [
              {path: '**', component: CharModComponent}
            ]
          }
        ]
      },     
    ]
  }
];

@NgModule({
   imports: [
      RouterModule.forChild(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
   ]
})
export class ChargenRoutingModule { }

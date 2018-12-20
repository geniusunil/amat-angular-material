import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { FeatherIconsPipe } from '../feather-pipe';


@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
    ,FeatherIconsPipe
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    FeatherIconsPipe
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }

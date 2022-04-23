import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { TerminalModule } from '../../components/terminal/terminal.module';
import { ProjectCardModule } from '../../components/project-card/project-card.module';
import { FeaturedProjectModule } from '../../components/featured-project/featured-project.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        CommonModule,

        // Components
        FeaturedProjectModule,
        ProjectCardModule,
        TerminalModule,

        // Routing
        RouterModule.forChild([{
            path: '',
            component: HomepageComponent
        }])
    ],
    exports: [],
    schemas: []
})
export class HomepageModule {}

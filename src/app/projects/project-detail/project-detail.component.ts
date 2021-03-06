import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
    project: Project;
    imagePath: string;

    constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                const projectName = params['projectName'];
                this.imagePath = `./assets/images/${projectName}.png`;
                this.project = this.projectService.getProject(projectName);

                if (!this.project) {
                    this.router.navigate(['../speed-hero'], { relativeTo: this.route });
                }
            }
        );
    }
}
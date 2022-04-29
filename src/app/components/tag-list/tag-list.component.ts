import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-tag-list',
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
    @Input() tags: string[];
    @Input() style: any;
    @Input() backgroundColor: string;

    constructor() {}

    ngOnInit(): void {}
}
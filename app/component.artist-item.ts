import { Component } from '@angular/core';

@Component ({
    selector: 'artist-item',
    template: 'partials/artist-item.html',
    styleUrls: ['css/artist-item.css'],
    inputs: ['artist']
})

export class ArtistItemComponent {}
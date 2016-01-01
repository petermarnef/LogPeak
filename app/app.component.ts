//Example: http://www.html5rocks.com/en/tutorials/file/dndfiles/

var fs = require('fs');
      
import {Component, View} from 'angular2/core';

@Component({
	selector: 'my-app',
    templateUrl: './app/app.component.html'
})

export class AppComponent {
    fileContents: string;
    
    constructor() {
        this.updateFileContents("No file read.");
    }
     
    fileSelected($event): void {
        // console.debug($event);
        var file = $event.target.files[0];
        console.debug('Reading file: ' + file.name);
        console.debug(file); 
        this.readFile(file.path);
    }

    updateFileContents(fileContents) {
        console.debug(fileContents);
        this.fileContents = fileContents;
    }
    
    readFile(filePath: string): void {
        this.updateFileContents('Reading ...');
        this.updateFileContents(fs.readFileSync(filePath, 'utf8'));

        // fs.readFile(filePath, 'utf8', (err, data) => {
        //     if (data && !err) {
        //         console.debug('data read ok');
        //         this.updateFileContents(data);
        //     }
        //     else
        //         console.debug('error: ' + err);
        // }
    }
}
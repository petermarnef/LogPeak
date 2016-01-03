//Example: http://www.html5rocks.com/en/tutorials/file/dndfiles/

var fs = require('fs');
      
import {Component, View} from 'angular2/core';

@Component({
	selector: 'my-app',
    templateUrl: './app/app.component.html'
})

export class AppComponent {
    fileContents: string;
    updateCounter: number = 0;
    
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
        this.updateCounter++;
        console.debug(this.updateCounter + ': ' + fileContents);
        this.fileContents = fileContents;
    }
    
    readFile(filePath: string): void {
        this.updateFileContents('Reading ...');
        
        //Read line per line
        var lineReader = require('readline').createInterface({
            input: fs.createReadStream(filePath)
        });
        
        lineReader.on('line', (line) => {
            this.updateFileContents(line);
        })
        
        //Read entire file sync
        // this.updateFileContents(fs.readFileSync(filePath, 'utf8'));
        
        //Read entire file async
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
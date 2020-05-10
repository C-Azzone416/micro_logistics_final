import { Component, OnInit } from '@angular/core';
import {AcnhLoversApiService} from '../acnh-lovers-api.service';

@Component({
  selector: 'app-acnh-lovers',
  templateUrl: './acnh-lovers.component.html',
  styleUrls: ['./acnh-lovers.component.css']
})
export class AcnhLoversComponent implements OnInit {
  userName: string;
  islandName: string;
  favoriteVillager: string;
  errorMessage = '';

  constructor(
      private apiService: AcnhLoversApiService,
  ) {
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.apiService.submitACNHLoversForm(this.userName, this.islandName, this.favoriteVillager).subscribe(
    (result) => {
        console.log('Result: ');
        console.log(result);
    }
    );
  }
}

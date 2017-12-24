import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';
import { RepoListComponent } from './../repo-list/repo-list.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileDetailsComponent implements OnInit {
  showOwnerRepo:boolean=true;
  owernId:String = "";
  userDetails:any = {};
  constructor(private userService:UserService,private route:ActivatedRoute) {
   
   }

  ngOnInit() {

    this.owernId = this.route.snapshot.paramMap.get('id');
    this.bindUserDetails();
  }
  bindUserDetails(){
    this.userService.details(this.owernId).subscribe(data=>{
      this.userDetails = data;
    })
  }

}

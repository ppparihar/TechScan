import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { RepositoryService } from "../repository.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  technologyList: Array<Object>;
  constructor(private repositoryService: RepositoryService) {
    this.technologyList = [
      { language: "Javascript",image:'assets/images/javascript.png' },
      { language: "Java" ,image:'assets/images/java.png'},
      { language: "Python",image:'assets/images/python.png' },
      { language: "Php",image:'assets/images/php.png' },
      { language: "Ruby",image:'assets/images/ruby.png' }
    ];
  }

  ngOnInit() {
    this.repositoryService
      .Search("django")
      .subscribe(data => console.log(data));
    this.repositoryService
      .AdvanceSearch("django", "javascript", 1, "stars", "asc")
      .subscribe(data => console.log(data));
  }
}

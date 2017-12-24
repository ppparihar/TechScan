import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from "./../repository.service";
import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "repo-list",
  templateUrl: "./repo-list.component.html",
  styleUrls: ["./repo-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class RepoListComponent implements OnInit {
  technologies: { language: string }[] = [
    { language: "Javascript" },
    { language: "Java" },
    { language: "Python" },
    { language: "Php" },
    { language: "Ruby" }
  ];
  searchText: String = "test";
  repoList: Object[];
  resultCount: Number = 0;
  isLoading: boolean;
  @Input() Owner: string;
  @Input() showOnlyOwnerRepo: boolean;

  constructor(private repositoryService: RepositoryService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
    if (this.showOnlyOwnerRepo) {
      this.repositoryService.getRepoByOwner(this.Owner).subscribe(data => {
        this.repoList = data;
        this.resultCount = data.length;
        this.isLoading = false;
      });
    } else {
      let technology = this.route.snapshot.paramMap.get('id');
      this.repositoryService
        .AdvanceSearch("", technology, 1, "stars", "desc")
        .subscribe(data => {
          this.repoList = data.items;
          this.resultCount = data.total_count;
          this.isLoading = false;
        });
    }
  }

  searchRepo() {
    this.searchText = "clicked";
  }
}

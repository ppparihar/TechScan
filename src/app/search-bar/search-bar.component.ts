import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent implements OnInit {
  @Input() technology: String;
  @Output() technologyChange: EventEmitter<String>;

  @Input() searchText: String;
  @Output() searchTextChange: EventEmitter<String>;

  technologies: string[] = ["All","Javascript", "Java", "Python", "Php", "Ruby"];
  constructor() {
    this.technology = "";
    this.searchText = "";
    this.technologyChange = new EventEmitter<String>();
    this.searchTextChange = new EventEmitter<String>();
  }

  ngOnInit() {}
}

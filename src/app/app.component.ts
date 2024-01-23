import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobportal';
  test: any = 'hello';
  selectedJobType: string = 'internship';
  jobDescription: string = '';
  stipend: string = '';
  jobs: any[] = [];
  filteredJobs: any[] = [];
  activeFilters: string[] = [];

  uploadJob() {
    const newJob = {
      type: this.selectedJobType,
      description: this.jobDescription,
      stipend: this.stipend,
    };

    this.jobs.push(newJob);
    this.filteredJobs = [...this.jobs]; // Update filteredJobs to include all jobs

    // Clear input fields
    this.selectedJobType = 'internship';
    this.jobDescription = '';
    this.stipend = '';
  }

  toggleFilter(type: string) {
    if (this.activeFilters.includes(type)) {
      this.activeFilters = this.activeFilters.filter(filter => filter !== type);
    } else {
      this.activeFilters.push(type);
    }

    this.updateFilteredJobs();
  }

  isFilterActive(type: string): boolean {
    return this.activeFilters.includes(type);
  }

  updateFilteredJobs() {
    if (this.activeFilters.length === 0) {
      this.filteredJobs = [...this.jobs]; // No filters active, show all jobs
    } else {
      this.filteredJobs = this.jobs.filter((job) => this.activeFilters.includes(job.type));
    }
  }
}

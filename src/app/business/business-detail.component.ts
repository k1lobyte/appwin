import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Router } from '@angular/router';
import { Business }     from './business';
import { BusinessService }   from './api.business.service';
import { Service }     from './../service/service';
import { ServicesService }   from './../service/api.services.service';
import { Feedback }     from './../feedback/feedback';
import { FeedbackService }   from './../feedback/feedback.service';

@Component({
  selector: 'business-detail',
  templateUrl: './business-detail.component.html'
})

export class BusinessDetailComponent implements OnInit {
  business: Business;
  services: Service[];
  feedback: Feedback[];

  constructor(
    private businessService: BusinessService,
    private servicesService: ServicesService,
    private feedbackService: FeedbackService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log('The ID is ' + id);
    this.businessService.getBusiness(id)
      .then((business) => this.initialize(business))
      .catch(this.handleError);
  }

  initialize(business: Business): void {
    this.business = business;
    console.log('Please...');
    console.log(business);
    this.servicesService.getServicesByBusinessId(this.business.id).then(services => this.services = services);
    this.feedbackService.getFeedbackByBusinessId(this.business.id).then(feedback => this.feedback = feedback);
  }

  onSelect(service: Service): void {
    this.router.navigate(['/schedule-appointment', this.business.id, service.id]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

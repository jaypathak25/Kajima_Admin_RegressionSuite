
#Author: Jay Pathak
#Comment: Venue Admin  - BAU Enquiry tab Regression 
Feature: BAU Enquiry tab scenarios 


Background:
    Given User opens browser and enters the admin URL
    Then enter credentials
    Then User clicks the enquiry tab 
    
##========================= 8 BAU Enquiry scenarios========================

@VenueAdmin
Scenario: verify convert enquiry into booking and verify details raised in DEV916
		Then User navigates to new enquiry details page, add multiple line items with different booking rates, check availability and verify details after saving it.
		Then User converts the booking and verify all the details again and finally create booking
  #	And user quit the browser

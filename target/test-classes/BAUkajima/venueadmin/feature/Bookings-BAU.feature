
#Author: Jay Pathak
#Comment: BAU Venue Admin  - Bookings tab Regression 
Feature: BAU Bookings tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter credentials and Login 
    When user navigates to the homepage
    Then User clicks the Bookings tab 
    
    
##============================================================================================================================##
##==============================================7 scenarios for BAU Venue admin=============================================================================##    

@VenueAdmin 	
Scenario: Raise a booking via new booking button  - BAU 
    Then User clicks a new Booking button and raise daily recurring booking
    Then User clicks a new Booking button and raise weekly recurring booking
  	And user quit the browser    



@VenueAdmin  	
Scenario: Cancel single WP fully paid bookings - BAU - verify CN raised successfully 
    Then User cancel the single WP fully paid booking and verify the CN raised in the clients tab
  	And user quit the browser

@VenueAdmin  	
Scenario: Cancel multiple bookings - BAU verify details on cancel booking popup and CN raised if relevant
    Then User cancel the multiple fully paid booking and verify the CN and check CN raised in the clients tab
    Then User cancel the multiple billed booking and verify the CN and check CN raised in the clients tab
    Then User cancel the multiple Unbilled booking and verify that no CN is raised
  	And user quit the browser
  	

@VenueAdmin
Scenario: Cancel unbilled and billed bookings - verify refund option is not displayed 
    Then User cancel the unbilled booking and verify that the refund is not displayed 
    Then User cancel the billed booking and verify that the refund is not displayed
  	And user quit the browser


@VenueAdmin 	
Scenario: Cancel multiple mixed bookings - BAU - select check box for different payment status bookings and cancel
    Then User Select check box for multiple different payment status bookings and cancel to verify CN if applicable
  	And user quit the browser

@VenueAdmin
Scenario: Search and filter - verify booking results with different search/filter Criteria, summary view and exports
    Then User changes the number of enteries and verify results
    Then User enters room name OR clients name in the search bar and verify the result
    Then User verify booking results by selecting different STATUS options
    Then User verify booking results by selecting different PAYMENT STATUS options
    Then User verify booking results by selecting different date range
    And User verify the summary option and view the booking
    And User select Export excel button and verify that excel generated successfully
  	And user quit the browser

@VenueAdmin
Scenario: Edit bookings - Filter booking by payment status and Edit
    Then User filter the booking by FULLY PAID payment status and edit the booking
    Then User filter the booking by BILLED payment status and edit the booking
    Then User filter the booking by UNBILLED payment status and edit the booking
  	And user quit the browser	

  	





 
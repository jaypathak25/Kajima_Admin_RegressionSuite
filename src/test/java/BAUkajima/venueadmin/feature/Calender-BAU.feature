
#Author: Jay Pathak
#Comment: Venue Admin  - BAU Calender tab Regression 
Feature: BAU Calender tab scenarios 


Background:
    Given User opens browser and enters the admin URL
    Then Enter credentials
    When User navigate to dasboard homepage
    Then User clicks the Calender tab
    
    
    ##=========================5 BAU Calender scenarios=========================


  
@VenueAdmin  	
Scenario: Cancel a single from calender - Billed & Unbilled 
  	Then User Cancelling a unbilled single booking from the Calender
    Then User Cancelling a billed single booking from the Calender
  	And user quit the browser 
  	
  	
@VenueAdmin
Scenario: Edit a single occurrence of booking from calender -  Billed and Unbilled 
    Then User creates a single occurance of booking, and edit unbilled status of booking from the Calender
    Then Billed the booking created in the previous step and edit billed status of booking from the Calender
  	And user quit the browser   
  			

@VenueAdmin
Scenario: Verify viewing bookable space info
    Then User clicks the bookable space to check the information
  	And user quit the browser
  	
  	
  	
  	    
@VenueAdmin
Scenario: verify date filter on calender to view the results 
    Then User selects different dates by clicking previous/forward arrows to view the bookings 
    Then User enter the date manually and verify the result 
  	And user quit the browser
  	
@VenueAdmin
Scenario: verify different calender filter to view the results
    Then User selects different catagories from the drop down to view the bookings for the relevant bookable spaces 
    Then User selects view booked room only check box to see only rooms where we have bookings  
  	And user quit the browser




  
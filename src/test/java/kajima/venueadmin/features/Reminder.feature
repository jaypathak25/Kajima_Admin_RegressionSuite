
#Author: Jay Pathak
#Comment: Venue Admin  - Reminder tab Regression 
Feature: Reminder tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter required credential and Login 
    When User have gone to homepage
		Then User clicks the reminder tab and search for a reminder
		
##=====================================3 reminder scenarios====================================================
    
@VenueAdmin
Scenario: View - Reminder and edit a reminder
    Then User selects the action link and update the date, save and verify the change
  	And user quit the browser
	
@VenueAdmin
Scenario: View - Reminder and action a reminder
    Then User selects the action link, select check box, enter action statement and save and verify the change
  	And user quit the browser
  	
@VenueAdmin
Scenario: View- Reminder and cancel it
    Then User selects the cancel link and verify the result 
  	And user quit the browser

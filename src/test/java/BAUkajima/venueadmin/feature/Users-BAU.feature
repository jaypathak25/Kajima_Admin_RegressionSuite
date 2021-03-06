
#Author: Jay Pathak
#Comment: Venue Admin  - BAU Users tab Regression 
Feature: BAU Users tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter valid credential 
    When go to dashboard
    Then User clicks the users tab
    
    
    ##========================= 3 BAU Users scenarios=========================


@VenueAdmin
Scenario: BAU verify User updates the email address for the client user 
	Then BAU User update the email address for the client user and verify client user can login with the new email
	And user quit the browser 

  			
@VenueAdmin
Scenario: BAU Navigate to different users subtabs, create new venue admin , log in and verify all the tabs 
    Then BAU User clicks on all the subtabs and verify the the title
    Then BAU User creates a new venue admin , log in and navigate to differenet tabs 
  	And user quit the browser
	
  	     	    
## Need master credentials to test this scenario 
@VenueAdmin  	
Scenario: verify that unlinked tab is not visible for master admins 
    Then BAU user verifies that Unlinked users tab is not visible for master admins
  	And user quit the browser  
  	    
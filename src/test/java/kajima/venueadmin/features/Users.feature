
#Author: Jay Pathak
#Comment: Venue Admin  - Users tab Regression 
Feature: Users tab scenarios 


Background:
    Given User opens browser and enters the admin URL 
    Then enter valid credential 
    When go to dashboard
    Then User clicks the users tab
    
    
    ##========================= 3 Users scenarios=========================

@VenueAdmin
Scenario: NHS Navigate to different users subtabs, create new venue admin , log in and verify all the tabs 
    Then User clicks on all the subtabs and verify the the title
    Then User creates a new venue admin , log in and navigate to differenet tabs 
  	And user quit the browser
  	
  			
@VenueAdmin
Scenario: verify User updates the email address for the client user 
	Then User update the email address for the client user and verify client user can login with the new email
	And user quit the browser
   
@VenueAdmin  	
Scenario: verify that unlinked tab is not visible for master admins 
    Then NHS user verifies that Unlinked users tab is not visible for master admins
  	And user quit the browser	    
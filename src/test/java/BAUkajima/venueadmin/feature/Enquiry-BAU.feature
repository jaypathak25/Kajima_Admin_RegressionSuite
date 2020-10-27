
#Author: Jay Pathak
#Comment: Venue Admin  - BAU Enquiry tab Regression 
Feature: BAU Enquiry tab scenarios 


Background:
    Given User opens browser and enters the admin URL
    Then enter credentials
    Then User clicks the enquiry tab 
    
##========================= 8 BAU Enquiry scenarios========================

@VenueAdmin
Scenario: verify Toggle at the top of the page
    Then User search different enquiries by entering criteria in the search box
    Then user selects different number of enteries and check the result 
  	And user quit the browser

@VenueAdmin
Scenario: verify convert enquiry into booking and verify details raised in DEV916
		Then User navigates to new enquiry details page, add multiple line items with different booking rates, check availability and verify details after saving it.
		Then User converts the booking and verify all the details again and finally create booking
  	And user quit the browser

#Bug
#@VenueAdmin
#Scenario: verify submit the enquiry from the Classic website and cross check as the admin in enquiry tab
 #   Then User submit enquiry For Classic using Orange Enquire Now button on Home page 
  #  Then User submit enquiry For Classic using Orange Enquire Now button on Category page
  #  Then User submit enquiry For Classic using Orange Enquire Now button on Room page 
  #  Then User submit enquiry For Classic using Blue Enquire/Book now button on Room page
#  	And user quit the browser

@VenueAdmin
Scenario: verify convert enquiry into booking
		Then User navigates to new enquiry details page, selects check availability and click convert into booking
  	And user quit the browser
 	


##Bug   			
@VenueAdmin
Scenario: verify creating new enquiry as an admin and edit different fields and save 
		Then User clicks the new enquiry button and create a new enquiry
    Then User clicks the Edit link for the newly created enquiry and amend all the editable fields and save it  
 		And user quit the browser
 
##Bug 		
@VenueAdmin
Scenario: verify creating new enquiry,change the status to Open and edit different fields and save
		Then User creates a new enquiry as an admin
    Then User change the status to open and edit all the editable fields and save it  
  	And user quit the browser
  	
@VenueAdmin
Scenario: verify change enquiry states and check the states in the current enquiry screen and show closed enquiries screen
		Then User Creates a new enquiry and click edit to change enquiry state to opened
		Then User click edit to change enquiry state to viewing booked 
		Then User click edit to change enquiry state to follow up required 
		Then User click edit to change enquiry state to Quote sent
		Then User click edit to change enquiry state to cannot accomodate
  	And user quit the browser
  	
@VenueAdmin
Scenario: verify button at the bottom of the enquiry details page
		Then User clicks Cancel button and verify the outcome
		Then User clicks Create a reminder button and verify the outcome 
		Then User clicks Cannot accommodate button and verify the outcome
		Then User clicks Reopen button and verify the outcome
		Then User clicks close enquiry button and verify the outcome 
  	And user quit the browser

@VenueAdmin
Scenario: verify submit the enquiry from the website and cross check as the admin in enquiry tab
		Then User submit enquiry For Vancouver or Calgary submit from Room page and verify in admin portal
		Then User submit enquiry For Vancouver or Calgary submit from Contact page and verify in admin portal
  	And user quit the browser



#@VenueAdmin
#Scenario: verify convert enquiry into booking and verify details raised in DEV916
	#	Then User navigates to new enquiry details page, add multiple line items with different booking rates, check availability and verify details after saving it.
	#	Then User converts the booking and verify all the details again and finally create booking
  #	And user quit the browser

  
  
  
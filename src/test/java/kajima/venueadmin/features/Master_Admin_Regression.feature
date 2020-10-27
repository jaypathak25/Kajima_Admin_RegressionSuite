#Author: jay pathak
#Feature: Master Admin Regression
#Comment: The breakdown of the areas to test : All the regression scenarios for Master admin
Feature: Creation of new Venue


Background:
    Given User opens browser and enters Admin Pre Prod URL
    When home page dispayed
    
    
@Scenario1
Scenario: Create a new Venue and add this to my organisation

    Then User hovers a mouse on Venues Tab
    Then User selects See All Venues link
    Then User selects New Venue button
    Then User enters mandatory details
 		Then User clicks save button
    And validate the successful message
    Then User navigate to See All Venue screen 
    And Search the newly created Venue and verify
    
    
@Scenario1
Scenario: Update the green banner for venue admins and verify Dashboard screen

 Then User clicks a mouse on Venues Tab
 And User selects See All Venues option
 Then User selects Edit global settings Link
 Then User updates the content and save successfully
 And User verify the new content and successful message displays
    
    
@Scenario1
Scenario: Access the organisation tab, edit and click all the tabs 

    Then User clicks on organisation Tab
    Then User selects the edit option for required organisation
    Then user selects all the tabs available on edit organisation screen
    And User clicks Back button
    Then User returns to edit organisation screen, Update details
    And Click save

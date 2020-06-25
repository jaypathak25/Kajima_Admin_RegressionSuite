$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Bookings-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: BAU Venue Admin  - Bookings tab Regression"
    }
  ],
  "line": 4,
  "name": "BAU Bookings tab scenarios",
  "description": "",
  "id": "bau-bookings-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d12 scenarios for Venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    }
  ],
  "line": 19,
  "name": "Cancel fully paid bookings – BAU- verify cancel booking from Calender,Clients tab.",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-fully-paid-bookings-–-bau--verify-cancel-booking-from-calender,clients-tab.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User cancel the fully paid booking from the calender tab and verify that the CN is raised as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User cancel the fully paid booking from the Clients tab and verify that the CN is raised as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.User_cancel_the_fully_paid_booking_from_the_calender_tab_and_verify_that_the_CN_is_raised_as_expected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.User_cancel_the_fully_paid_booking_from_the_Clients_tab_and_verify_that_the_CN_is_raised_as_expected()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Cancel single WP fully paid bookings - BAU - verify CN raised successfully",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-single-wp-fully-paid-bookings---bau---verify-cn-raised-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User cancel the single WP fully paid booking and verify the CN raised in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.User_cancel_the_single_WP_fully_paid_booking_and_verify_the_CN_raised_in_the_clients_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Cancel multiple bookings - BAU verify details on cancel booking popup and CN raised if relevant",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-multiple-bookings---bau-verify-details-on-cancel-booking-popup-and-cn-raised-if-relevant",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User cancel the multiple fully paid booking and verify the CN and check CN raised in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User cancel the multiple billed booking and verify the CN and check CN raised in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User cancel the multiple Unbilled booking and verify that no CN is raised",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.User_cancel_the_multiple_fully_paid_booking_and_verify_the_CN_and_check_CN_raised_in_the_clients_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.User_cancel_the_multiple_billed_booking_and_verify_the_CN_and_check_CN_raised_in_the_clients_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.User_cancel_the_multiple_Unbilled_booking_and_verify_that_no_CN_is_raised()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 39,
      "value": "#\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 42,
  "name": "Cancel unbilled and billed bookings - verify refund option is not displayed",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-unbilled-and-billed-bookings---verify-refund-option-is-not-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User cancel the unbilled booking and verify that the refund is not displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User cancel the billed booking and verify that the refund is not displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_unbilled_booking_and_verify_that_the_refund_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_cancel_the_billed_booking_and_verify_that_the_refund_is_not_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 49,
  "name": "Cancel multiple mixed bookings - BAU - select check box for different payment status bookings and cancel",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-multiple-mixed-bookings---bau---select-check-box-for-different-payment-status-bookings-and-cancel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "User Select check box for multiple different payment status bookings and cancel to verify CN if applicable",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.User_Select_check_box_for_multiple_different_payment_status_bookings_and_cancel_to_verify_CN_if_applicable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 54,
  "name": "Search and filter - verify booking results with different search/filter Criteria, summary view and exports",
  "description": "",
  "id": "bau-bookings-tab-scenarios;search-and-filter---verify-booking-results-with-different-search/filter-criteria,-summary-view-and-exports",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "User changes the number of enteries and verify results",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "User enters room name OR clients name in the search bar and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User verify booking results by selecting different STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "User verify booking results by selecting different PAYMENT STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User verify booking results by selecting different date range",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User verify the summary option and view the booking",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User select Export excel button and verify that excel generated successfully",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_changes_the_number_of_enteries_and_verify_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_enters_room_name_OR_clients_name_in_the_search_bar_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_STATUS_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_PAYMENT_STATUS_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_date_range()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_verify_the_summary_option_and_view_the_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_select_Export_excel_button_and_verify_that_excel_generated_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 65,
  "name": "Edit bookings - Filter booking by payment status and Edit",
  "description": "",
  "id": "bau-bookings-tab-scenarios;edit-bookings---filter-booking-by-payment-status-and-edit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "User filter the booking by FULLY PAID payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "User filter the booking by BILLED payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "User filter the booking by UNBILLED payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_filter_the_booking_by_FULLY_PAID_payment_status_and_edit_the_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_filter_the_booking_by_BILLED_payment_status_and_edit_the_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_filter_the_booking_by_UNBILLED_payment_status_and_edit_the_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user navigates to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Bookings tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 73,
  "name": "Raise a booking via new booking button  - BAU",
  "description": "",
  "id": "bau-bookings-tab-scenarios;raise-a-booking-via-new-booking-button----bau",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "User clicks a new Booking button and raise daily recurring booking",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "User clicks a new Booking button and raise weekly recurring booking",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_clicks_a_new_Booking_button_and_raise_daily_recurring_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_a_new_Booking_button_and_raise_weekly_recurring_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Clients-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: BAU Venue Admin  - Clients tab Regression"
    }
  ],
  "line": 4,
  "name": "BAU Clients tab scenarios",
  "description": "",
  "id": "bau-clients-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d15 scenarios for BAU Venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    }
  ],
  "line": 17,
  "name": "Verify that user can add a manual payment from the Clients screen",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-add-a-manual-payment-from-the-clients-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User adds a Manual payment and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_adds_a_Manual_payment_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that user can add a new refund from the Clients screen",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-add-a-new-refund-from-the-clients-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User adds a new refund and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_adds_a_new_refund_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Verify that user can raise a credit notes from the Clients screen",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-raise-a-credit-notes-from-the-clients-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User raises a Credit notes and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_raises_a_Credit_notes_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "Verify that user can upload the document and can add a reminder to document",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-upload-the-document-and-can-add-a-reminder-to-document",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User selects new document and save successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user add the reminder and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_selects_new_document_and_save_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_add_the_reminder_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 42,
  "name": "Verify that user can add a reminder to a client account",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-add-a-reminder-to-a-client-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "User selects Create a reminder option and successfully added a reminder to a client screen",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_selects_Create_a_reminder_option_and_successfully_added_a_reminder_to_a_client_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 48,
  "name": "View Payments from the client tab",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-payments-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "Verify the account activity tab and view Payments by clicking the description, add notes and click save or close",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.verify_the_account_activity_tab_and_view_Payments_by_clicking_the_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 53,
  "name": "View Invoices from the client tab",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-invoices-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "Verify the account activity tab and view Invoice by clicking the description,click Payments link and click view client again",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.verify_the_account_activity_tab_and_view_Invoice_by_clicking_the_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 58,
  "name": "View Credit Notes from the client tab",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-credit-notes-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 57,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "Verify the account activity tab and view Credit notes by clicking the description,click refund and click view client again",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.verify_the_account_activity_tab_and_view_Credit_notes_by_clicking_the_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 63,
  "name": "View Refund from the client tab",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-refund-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "Verify the account activity tab and view Refund by clicking the description and click close the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.verify_the_account_activity_tab_and_view_Refund_by_clicking_the_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 68,
  "name": "View bookings from the Clients tab and edit the booking",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-bookings-from-the-clients-tab-and-edit-the-booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "User go to Clients bookings section and select the bookings to view the details and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_go_to_Clients_bookings_section_and_select_the_bookings_to_view_the_details_and_edit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 73,
  "name": "Verify that user can edit a client account",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-edit-a-client-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "User selects edit client option, update name, last name, Notes etc and save successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_selects_edit_client_option_update_name_last_name_Notes_etc_and_save_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 78,
  "name": "Verify that user can Archive and then Restore the client",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-archive-and-then-restore-the-client",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 77,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 79,
  "name": "User select Archive client link and archive the client successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "user navigate to show archieved clients screen and Restore the client successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_select_Archive_client_link_and_archive_the_client_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_navigate_to_show_archieved_clients_screen_and_Restore_the_client_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 84,
  "name": "Create New BAU user - client User",
  "description": "",
  "id": "bau-clients-tab-scenarios;create-new-bau-user---client-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "User selects New client user button, enter mandatory fields, create user and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_selects_New_client_user_button_enter_mandatory_fields_create_user_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 89,
  "name": "Edit a BAU User -  update details",
  "description": "",
  "id": "bau-clients-tab-scenarios;edit-a-bau-user----update-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 88,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "User selects \u0027Edit Users\u0027 link , update the details and verify the edited user",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_selects_Edit_Users_link_update_the_details_and_verify_the_edited_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the client tab and search for a client",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.enter_required_credentials_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_have_gone_to_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Clients_SD.user_clicks_the_client_tab_and_search_for_a_client()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 94,
  "name": "Unlink a client User",
  "description": "",
  "id": "bau-clients-tab-scenarios;unlink-a-client-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 93,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 95,
  "name": "User unlink the user and verify the details",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Clients_SD.User_unlink_the_user_and_verify_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Invoice-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: BAU Venue Admin  - Invoice tab Regression"
    }
  ],
  "line": 4,
  "name": "BAU Invoice tab scenarios",
  "description": "",
  "id": "bau-invoice-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d6 Invoices scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 16,
  "name": "Verify Invoice sub-tabs",
  "description": "",
  "id": "bau-invoice-tab-scenarios;verify-invoice-sub-tabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User clicks all the sub-tabs one by one and verify the screen title",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_clicks_all_the_sub_tabs_one_by_one_and_verify_the_screen_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "verify view invoice with awaiting payment status and void the invoice",
  "description": "",
  "id": "bau-invoice-tab-scenarios;verify-view-invoice-with-awaiting-payment-status-and-void-the-invoice",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User navigate to Invoice awaiting payment subtab, view the Invoice, void it and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_Invoice_awaiting_payment_subtab_view_the_Invoice_void_it_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "verify delete an invoice from the draft invoice tab",
  "description": "",
  "id": "bau-invoice-tab-scenarios;verify-delete-an-invoice-from-the-draft-invoice-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User navigate to draft invoice, delete the invoice and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_draft_invoice_delete_the_invoice_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "verify Generate an invoice and mark as sent",
  "description": "",
  "id": "bau-invoice-tab-scenarios;verify-generate-an-invoice-and-mark-as-sent",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User do the invoice run, view the generated invoice, mark as sent and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_do_the_invoice_run_view_the_generated_invoice_mark_as_sent_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "verify Generate an invoice and email the select one",
  "description": "",
  "id": "bau-invoice-tab-scenarios;verify-generate-an-invoice-and-email-the-select-one",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User do the invoice run and email the selected invoice from the draft tab and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_do_the_invoice_run_and_email_the_selected_invoice_from_the_draft_tab_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential to Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Invoice tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.enter_required_credential_to_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Invoice_SD.user_clicks_the_Invoice_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "verify email all the invoices by clicking email all invoices button",
  "description": "",
  "id": "bau-invoice-tab-scenarios;verify-email-all-the-invoices-by-clicking-email-all-invoices-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User navigate to draft invoice, click Email all invoices and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_navigate_to_draft_invoice_click_Email_all_invoices_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Payments-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: BAU Venue Admin  - Payments tab Regression"
    }
  ],
  "line": 4,
  "name": "BAU Payments tab scenarios",
  "description": "",
  "id": "bau-payments-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d5 payments scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 16,
  "name": "Verify viewing individual payment details  -  GC/WP/manual/cash with different statuses and to ensure no refresh option displays",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-viewing-individual-payment-details-----gc/wp/manual/cash-with-different-statuses-and-to-ensure-no-refresh-option-displays",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User clicks views for different payment types and status and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.User_clicks_views_for_different_payment_types_and_status_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Verify result on screen by using different filters",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-result-on-screen-by-using-different-filters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User verify result by selecting different allocation options",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User verify result by selecting different reconciliation options",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User verify result by selecting different status options",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User verify result by selecting different date range",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.user_verify_result_by_selecting_different_allocation_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_verify_result_by_selecting_different_reconciliation_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_verify_result_by_selecting_different_status_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_verify_result_by_selecting_different_date_range()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Verify different payment types",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-different-payment-types",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User select different payment types from the dropdown to filter out the payments and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.user_select_different_payment_types_from_the_dropdown_to_filter_out_the_payments_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "Verify refund search bar",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-refund-search-bar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "User enter search criteria in search bar and verify refund results",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.user_enter_search_criteria_in_search_bar_and_verify_refund_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user entered required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage and verify",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Payments tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_entered_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_homepage_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Payments_SD.user_clicks_the_Payments_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "Verify refund subtab and view individual refund details",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-refund-subtab-and-view-individual-refund-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User navigate to refund tab and view individual refunds",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Payments_SD.user_navigate_to_refund_tab_and_view_individual_refunds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Reminder-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: BAU Venue Admin  - Reminder tab Regression"
    }
  ],
  "line": 4,
  "name": "BAU Reminder tab scenarios",
  "description": "",
  "id": "bau-reminder-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the reminder tab and search for a reminder",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.enter_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_have_gone_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_clicks_the_reminder_tab_and_search_for_a_reminder()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d3 reminder scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 17,
  "name": "View - Reminder and edit a reminder",
  "description": "",
  "id": "bau-reminder-tab-scenarios;view---reminder-and-edit-a-reminder",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User selects the action link and update the date, save and verify the change",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Reminder_SD.user_selects_the_action_link_and_update_the_date_save_and_verify_the_change()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the reminder tab and search for a reminder",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.enter_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_have_gone_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_clicks_the_reminder_tab_and_search_for_a_reminder()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "View - Reminder and action a reminder",
  "description": "",
  "id": "bau-reminder-tab-scenarios;view---reminder-and-action-a-reminder",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User selects the action link, select check box, enter action statement and save and verify the change",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Reminder_SD.user_selects_the_action_link_select_check_box_enter_action_statement_and_save_and_verify_the_change()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter required credential and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User have gone to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the reminder tab and search for a reminder",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.enter_required_credential_and_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_have_gone_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Reminder_SD.user_clicks_the_reminder_tab_and_search_for_a_reminder()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "View- Reminder and cancel it",
  "description": "",
  "id": "bau-reminder-tab-scenarios;view--reminder-and-cancel-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User selects the cancel link and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Reminder_SD.user_selects_the_cancel_link_and_verify_the_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});
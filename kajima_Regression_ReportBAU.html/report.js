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
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 15,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d7 scenarios for BAU Venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    }
  ],
  "line": 18,
  "name": "Search and filter - verify booking results with different search/filter Criteria, summary view and exports",
  "description": "",
  "id": "bau-bookings-tab-scenarios;search-and-filter---verify-booking-results-with-different-search/filter-criteria,-summary-view-and-exports",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User changes the number of enteries and verify results",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters room name OR clients name in the search bar and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User verify booking results by selecting different STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User verify booking results by selecting different PAYMENT STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User verify booking results by selecting different date range",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User verify the summary option and view the booking",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select Export excel button and verify that excel generated successfully",
  "keyword": "And "
});
formatter.step({
  "line": 26,
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
  "line": 30,
  "name": "Edit bookings - Filter booking by payment status and Edit",
  "description": "",
  "id": "bau-bookings-tab-scenarios;edit-bookings---filter-booking-by-payment-status-and-edit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User filter the booking by FULLY PAID payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User filter the booking by BILLED payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User filter the booking by UNBILLED payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
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
  "line": 38,
  "name": "Cancel single WP fully paid bookings - BAU - verify CN raised successfully",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-single-wp-fully-paid-bookings---bau---verify-cn-raised-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User cancel the single WP fully paid booking and verify the CN raised in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
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
  "line": 43,
  "name": "Cancel multiple bookings - BAU verify details on cancel booking popup and CN raised if relevant",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-multiple-bookings---bau-verify-details-on-cancel-booking-popup-and-cn-raised-if-relevant",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User cancel the multiple fully paid booking and verify the CN and check CN raised in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User cancel the multiple billed booking and verify the CN and check CN raised in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User cancel the multiple Unbilled booking and verify that no CN is raised",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
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
  "line": 51,
  "name": "Cancel unbilled and billed bookings - verify refund option is not displayed",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-unbilled-and-billed-bookings---verify-refund-option-is-not-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "User cancel the unbilled booking and verify that the refund is not displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User cancel the billed booking and verify that the refund is not displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
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
  "line": 58,
  "name": "Cancel multiple mixed bookings - BAU - select check box for different payment status bookings and cancel",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-multiple-mixed-bookings---bau---select-check-box-for-different-payment-status-bookings-and-cancel",
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
  "name": "User Select check box for multiple different payment status bookings and cancel to verify CN if applicable",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
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
  "line": 64,
  "name": "Raise a booking via new booking button  - BAU",
  "description": "",
  "id": "bau-bookings-tab-scenarios;raise-a-booking-via-new-booking-button----bau",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "User clicks a new Booking button and raise daily recurring booking",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "User clicks a new Booking button and raise weekly recurring booking",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
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
formatter.uri("Calender-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - BAU Calender tab Regression"
    }
  ],
  "line": 4,
  "name": "BAU Calender tab scenarios",
  "description": "",
  "id": "bau-calender-tab-scenarios",
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
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d5 BAU Calender scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 19,
  "name": "Cancel a single from calender - Billed \u0026 Unbilled",
  "description": "",
  "id": "bau-calender-tab-scenarios;cancel-a-single-from-calender---billed-\u0026-unbilled",
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
  "name": "User Cancelling a unbilled single booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User Cancelling a billed single booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_Cancelling_a_unbilled_single_booking_from_the_Calender()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_Cancelling_a_billed_single_booking_from_the_Calender()"
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
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Edit a single occurrence of booking from calender -  Billed and Unbilled",
  "description": "",
  "id": "bau-calender-tab-scenarios;edit-a-single-occurrence-of-booking-from-calender----billed-and-unbilled",
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
  "name": "User creates a single occurance of booking, and edit unbilled status of booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Billed the booking created in the previous step and edit billed status of booking from the Calender",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_creates_a_single_occurance_of_booking_and_edit_unbilled_status_of_booking_from_the_Calender()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Billed_the_booking_created_in_the_previous_step_and_edit_billed_status_of_booking_from_the_Calender()"
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
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "Verify viewing bookable space info",
  "description": "",
  "id": "bau-calender-tab-scenarios;verify-viewing-bookable-space-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User clicks the bookable space to check the information",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_bookable_space_to_check_the_information()"
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
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "verify date filter on calender to view the results",
  "description": "",
  "id": "bau-calender-tab-scenarios;verify-date-filter-on-calender-to-view-the-results",
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
  "name": "User selects different dates by clicking previous/forward arrows to view the bookings",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User enter the date manually and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_selects_different_dates_by_clicking_previous_forward_arrows_to_view_the_bookings()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_enter_the_date_manually_and_verify_the_result()"
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
  "name": "Enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to dasboard homepage",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Calender tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.Enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.User_navigate_to_dasboard_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_clicks_the_Calender_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 47,
  "name": "verify different calender filter to view the results",
  "description": "",
  "id": "bau-calender-tab-scenarios;verify-different-calender-filter-to-view-the-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User selects different catagories from the drop down to view the bookings for the relevant bookable spaces",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "User selects view booked room only check box to see only rooms where we have bookings",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Calender_SD.user_selects_different_catagories_from_the_drop_down_to_view_the_bookings_for_the_relevant_bookable_spaces()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Calender_SD.user_selects_view_booked_room_only_check_box_to_see_only_rooms_where_we_have_bookings()"
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
formatter.uri("Dashboard-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - BAU Dashboard tab Regression"
    }
  ],
  "line": 4,
  "name": "BAU Dashboard tab scenarios",
  "description": "",
  "id": "bau-dashboard-tab-scenarios",
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
  "name": "enter username and pswd",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User lands on the dashboard",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.enter_username_and_pswd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.User_lands_on_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d2 BAU Dashboard scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 16,
  "name": "verify clicking hyperlinks to view bookings \u0026 hirers",
  "description": "",
  "id": "bau-dashboard-tab-scenarios;verify-clicking-hyperlinks-to-view-bookings-\u0026-hirers",
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
  "name": "User clicks the hyperink to view bookings and hirers",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dashboard_SD.user_clicks_the_hyperink_to_view_bookings_and_hirers()"
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
  "name": "enter username and pswd",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User lands on the dashboard",
  "keyword": "When "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.enter_username_and_pswd()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.User_lands_on_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Scenario: verify Viewing an invoice, sending a reminder and adding a note",
  "description": "",
  "id": "bau-dashboard-tab-scenarios;scenario:-verify-viewing-an-invoice,-sending-a-reminder-and-adding-a-note",
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
  "name": "User clicks the send reminder hyperlink from the invoice table and send the reminder",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks the hyperlink to view invoice and sends a reminder",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User clicks the hyperlink to view invoice and add a note",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Dashboard_SD.User_clicks_the_send_reminder_hyperlink_from_the_invoice_table_and_send_the_reminder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.user_clicks_the_hyperlink_to_view_invoice_and_sends_a_reminder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard_SD.user_clicks_the_hyperlink_to_view_invoice_and_add_a_note()"
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
formatter.uri("Enquiry-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - BAU Enquiry tab Regression"
    }
  ],
  "line": 4,
  "name": "BAU Enquiry tab scenarios",
  "description": "",
  "id": "bau-enquiry-tab-scenarios",
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
  "name": "enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks the enquiry tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.User_clicks_the_enquiry_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d BAU Enquiry scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 15,
  "name": "verify Toggle at the top of the page",
  "description": "",
  "id": "bau-enquiry-tab-scenarios;verify-toggle-at-the-top-of-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User search different enquiries by entering criteria in the search box",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user selects different number of enteries and check the result",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Enquiry_SD.user_search_different_enquiries_by_entering_criteria_in_the_search_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_selects_different_number_of_enteries_and_check_the_result()"
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
  "name": "enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks the enquiry tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.User_clicks_the_enquiry_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "verify creating new enquiry as an admin and edit different fields and save",
  "description": "",
  "id": "bau-enquiry-tab-scenarios;verify-creating-new-enquiry-as-an-admin-and-edit-different-fields-and-save",
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
  "name": "User clicks the new enquiry button and create a new enquiry",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks the Edit link for the newly created enquiry and amend all the editable fields and save it",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Enquiry_SD.user_clicks_the_new_enquiry_button_and_create_a_new_enquiry()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_clicks_the_Edit_link_for_the_newly_created_enquiry_and_amend_all_the_editable_fields_and_save_it()"
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
  "name": "enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks the enquiry tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.User_clicks_the_enquiry_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "verify creating new enquiry,change the status to Open and edit different fields and save",
  "description": "",
  "id": "bau-enquiry-tab-scenarios;verify-creating-new-enquiry,change-the-status-to-open-and-edit-different-fields-and-save",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User creates a new enquiry as an admin",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User change the status to open and edit all the editable fields and save it",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Enquiry_SD.user_creates_a_new_enquiry_as_an_admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_change_the_status_to_open_and_edit_all_the_editable_fields_and_save_it()"
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
  "name": "enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks the enquiry tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.User_clicks_the_enquiry_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "verify change enquiry states and check the states in the current enquiry screen and show closed enquiries screen",
  "description": "",
  "id": "bau-enquiry-tab-scenarios;verify-change-enquiry-states-and-check-the-states-in-the-current-enquiry-screen-and-show-closed-enquiries-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User Creates a new enquiry and click edit to change enquiry state to opened",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User Creates a new enquiry and click edit to change enquiry state to Quote sent",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Creates a new enquiry and click edit to change enquiry state to viewing booked",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User Creates a new enquiry and click edit to change enquiry state to follow up required",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Enquiry_SD.user_Creates_a_new_enquiry_and_click_edit_to_change_enquiry_state_to_opened()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_Creates_a_new_enquiry_and_click_edit_to_change_enquiry_state_to_Quote_sent()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_Creates_a_new_enquiry_and_click_edit_to_change_enquiry_state_to_viewing_booked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_Creates_a_new_enquiry_and_click_edit_to_change_enquiry_state_to_follow_up_required()"
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
  "name": "enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks the enquiry tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.User_clicks_the_enquiry_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 42,
  "name": "verify button at the bottom of the enquiry details page",
  "description": "",
  "id": "bau-enquiry-tab-scenarios;verify-button-at-the-bottom-of-the-enquiry-details-page",
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
  "name": "User clicks Cancel button and verify the outcome",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User clicks Create a reminder button and verify the outcome",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User clicks delete enquiry button and verify the outcome",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User clicks close enquiry button and verify the outcome",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User clicks Cannot accommodate button and verify the outcome",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "User clicks Reopen button and verify the outcome",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Enquiry_SD.user_clicks_Cancel_button_and_verify_the_outcome()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_clicks_Create_a_reminder_button_and_verify_the_outcome()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_clicks_delete_enquiry_button_and_verify_the_outcome()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_clicks_close_enquiry_button_and_verify_the_outcome()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_clicks_Cannot_accommodate_button_and_verify_the_outcome()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_clicks_Reopen_button_and_verify_the_outcome()"
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
  "name": "enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks the enquiry tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.User_clicks_the_enquiry_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 52,
  "name": "verify convert enquiry into booking",
  "description": "",
  "id": "bau-enquiry-tab-scenarios;verify-convert-enquiry-into-booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "User navigates to new enquiry details page, selects check availability and click convert into booking",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "verify the booking on the bookings tab",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Enquiry_SD.user_navigates_to_new_enquiry_details_page_selects_check_availability_and_click_convert_into_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.verify_the_booking_on_the_bookings_tab()"
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
  "name": "enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks the enquiry tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.User_clicks_the_enquiry_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 58,
  "name": "verify submit the enquiry from the website and cross check as the admin in enquiry tab",
  "description": "",
  "id": "bau-enquiry-tab-scenarios;verify-submit-the-enquiry-from-the-website-and-cross-check-as-the-admin-in-enquiry-tab",
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
  "name": "User submit enquiry For Vancouver or Calgary submit from Room page and verify in admin portal",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User submit enquiry For Vancouver or Calgary submit from Contact page and verify in admin portal",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User submit enquiry For Classic using Orange Enquire Now button on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "User submit enquiry For Classic using Orange Enquire Now button on Category page",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "User submit enquiry For Classic using Orange Enquire Now button on Room page",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "User submit enquiry For Classic using Blue Enquire/Book now button on Room page",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Enquiry_SD.user_submit_enquiry_For_Vancouver_or_Calgary_submit_from_Room_page_and_verify_in_admin_portal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_submit_enquiry_For_Vancouver_or_Calgary_submit_from_Contact_page_and_verify_in_admin_portal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_submit_enquiry_For_Classic_using_Orange_Enquire_Now_button_on_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_submit_enquiry_For_Classic_using_Orange_Enquire_Now_button_on_Category_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_submit_enquiry_For_Classic_using_Orange_Enquire_Now_button_on_Room_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Enquiry_SD.user_submit_enquiry_For_Classic_using_Blue_Enquire_Book_now_button_on_Room_page()"
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
  "name": "Verify BAU Invoice sub-tabs",
  "description": "",
  "id": "bau-invoice-tab-scenarios;verify-bau-invoice-sub-tabs",
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
  "name": "User clicks all the BAU invoice sub-tabs one by one and verify the screen title",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_clicks_all_the_BAU_invoice_sub_tabs_one_by_one_and_verify_the_screen_title()"
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
  "name": "BAU verify Generate an invoice and email the select one",
  "description": "",
  "id": "bau-invoice-tab-scenarios;bau-verify-generate-an-invoice-and-email-the-select-one",
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
  "name": "User do the BAU invoice run and email the selected invoice from the draft tab and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Invoice_SD.user_do_the_BAU_invoice_run_and_email_the_selected_invoice_from_the_draft_tab_and_verify_the_result()"
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
formatter.uri("Manage-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: Venue Admin  - BAU Manage tab Regression"
    }
  ],
  "line": 3,
  "name": "BAUManage tab scenarios",
  "description": "",
  "id": "baumanage-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d11 scenarios for Venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    }
  ],
  "line": 17,
  "name": "Manage tab -  Venue management - verify Booking Categories - add, edit, delete",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---verify-booking-categories---add,-edit,-delete",
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
  "name": "User added the new booking Categories and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User Edited the new booking Categories and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User Deleted the new booking Categories and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_booking_Categories_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edited_the_new_booking_Categories_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Deleted_the_new_booking_Categories_and_verify()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Manage tab -  Venue management - BAU Edit Venue",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---bau-edit-venue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "BAU User selects Edit venue , navigate to all the subtabs and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "BAU User navigate to basic info subtab,updating info and check this saves correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "BAU User navigate to Billing subtab – check that invoice/credit note prefixes can be updated, check this saves correctly and is applied to invoices – change back to original info",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.BAU_user_selects_Edit_venue_navigate_to_all_the_subtabs_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.BAU_user_navigate_to_basic_info_subtab_updating_info_and_check_this_saves_correctly()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.BAU_user_navigate_to_Billing_subtab_check_that_invoice_credit_note_prefixes_can_be_updated_check_this_saves_correctly_and_is_applied_to_invoices_change_back_to_original_info()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Manage tab -  Venue management - Edit website",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---edit-website",
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
  "name": "BAUUser selects Edit website , navigate to all the subtabs and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.BAUuser_selects_Edit_website_navigate_to_all_the_subtabs_and_verify()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Manage tab -  Venue management - verify Booking Checklists – add, edit items (edit, re-order and delete), edit, delete",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---verify-booking-checklists-–-add,-edit-items-(edit,-re-order-and-delete),-edit,-delete",
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
  "name": "User added the new booking checklist and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User Edit Items by editing, reordering and deleting",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user edited the new booking checklist added",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User deleted the new booking checklist added above",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_booking_checklist_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edit_Items_by_editing_reordering_and_deleting()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_edited_the_new_booking_checklist_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_deleted_the_new_booking_checklist_added_above()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "Manage tab -  Venue management - verify Holidays - add, edit, delete",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---verify-holidays---add,-edit,-delete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User added the new Holiday  and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "User Edited the Holiday and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "User Deleted the Holiday and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_Holiday_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edited_the_Holiday_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Deleted_the_Holiday_and_verify()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 52,
  "name": "Manage tab -  Venue management - verify Closures - add, edit, delete",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---verify-closures---add,-edit,-delete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "User added the new Closures  and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User Edited the Closures and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "User Deleted the Closures and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_Closures_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edited_the_Closures_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Deleted_the_Closures_and_verify()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 59,
  "name": "Manage tab -  Venue management - verify Client Booking slots - add, edit, delete",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---verify-client-booking-slots---add,-edit,-delete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "User added the new booking slot  and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User Edited the booking slot and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "User Deleted the booking slot and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_booking_slot_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edited_the_booking_slot_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Deleted_the_booking_slot_and_verify()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 66,
  "name": "Manage tab -  Venue management - verify My default calendar - edit and update",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---verify-my-default-calendar---edit-and-update",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "User verifies default calender time , edit the times and update",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_verifies_default_calender_time_edit_the_times_and_update()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 71,
  "name": "Manage tab -  Venue management - verify Bookable spaces – Add and edit and delete.",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---verify-bookable-spaces-–-add-and-edit-and-delete.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "Adding a new bookable space – assign to new category",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Edit and Deleting a bookable space",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.adding_a_new_bookable_space_assign_to_new_category()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.deleting_a_bookable_space()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 77,
  "name": "Manage tab -  Venue management - verify Add a client flag, assign to a client and then delete the flag",
  "description": "",
  "id": "baumanage-tab-scenarios;manage-tab----venue-management---verify-add-a-client-flag,-assign-to-a-client-and-then-delete-the-flag",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "User added a new cleint flag, assign to client and verify that this is visible on client account for admin",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User deleted the flag and verify that it is not visible to client account for admin anymore",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_a_new_cleint_flag_assign_to_client_and_verify_that_this_is_visible_on_client_account_for_admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_deleted_the_flag_and_verify_that_it_is_not_visible_to_client_account_for_admin_anymore()"
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter login credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "navigates to homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks the manage tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.enter_Login_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.navigates_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_clicks_the_manage_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 83,
      "value": "#BAU specific - NEED TO WRITE CODE FOR BELOW SCENARIO"
    }
  ],
  "line": 85,
  "name": "BAU Manage tab -  Venue management - verify calender Categories – add, edit (name, description, limit client bookings to slots), delete",
  "description": "",
  "id": "baumanage-tab-scenarios;bau-manage-tab----venue-management---verify-calender-categories-–-add,-edit-(name,-description,-limit-client-bookings-to-slots),-delete",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "User added the new calender Category  and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "User Edited the calender Categories like name, description, limit client bookings to slots and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User Deleted the calender Category and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Manage_SD.user_added_the_new_calender_Category_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Edited_the_calender_Categories_like_name_description_limit_client_bookings_to_slots_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Manage_SD.user_Deleted_the_calender_Category_and_verify()"
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
  "line": 17,
  "name": "Verify result on screen by using different filters",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-result-on-screen-by-using-different-filters",
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
  "name": "User verify result by selecting different allocation options",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User verify result by selecting different reconciliation options",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User verify result by selecting different status options",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User verify result by selecting different date range",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
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
  "line": 25,
  "name": "Verify different payment types",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-different-payment-types",
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
  "name": "User select different payment types from the dropdown to filter out the payments and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
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
  "line": 31,
  "name": "Verify refund search bar",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-refund-search-bar",
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
  "name": "User enter search criteria in search bar and verify refund results",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
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
  "line": 36,
  "name": "Verify refund subtab and view individual refund details",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-refund-subtab-and-view-individual-refund-details",
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
  "name": "User navigate to refund tab and view individual refunds",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
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
  "line": 42,
  "name": "Verify viewing individual payment details  -  GC/WP/manual/cash with different statuses and to ensure no refresh option displays",
  "description": "",
  "id": "bau-payments-tab-scenarios;verify-viewing-individual-payment-details-----gc/wp/manual/cash-with-different-statuses-and-to-ensure-no-refresh-option-displays",
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
  "name": "User clicks views for different payment types and status and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
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
    },
    {
      "line": 16,
      "name": "@Orgadmin"
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
  "line": 27,
  "name": "View- Reminder and cancel it",
  "description": "",
  "id": "bau-reminder-tab-scenarios;view--reminder-and-cancel-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User selects the cancel link and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
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
formatter.uri("Users-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - BAU Users tab Regression"
    }
  ],
  "line": 4,
  "name": "BAU Users tab scenarios",
  "description": "",
  "id": "bau-users-tab-scenarios",
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
  "name": "enter valid credential",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "go to dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the users tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.enter_valid_credential()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.go_to_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.user_clicks_the_users_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d 3 BAU Users scenarios\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d"
    }
  ],
  "line": 21,
  "name": "Navigate to different users subtabs, create new venue admin , log in and verify all the tabs",
  "description": "",
  "id": "bau-users-tab-scenarios;navigate-to-different-users-subtabs,-create-new-venue-admin-,-log-in-and-verify-all-the-tabs",
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
  "name": "User clicks on all the subtabs and verify the the title",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User creates a new venue admin , log in and navigate to differenet tabs",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Users_SD.user_clicks_on_all_the_subtabs_and_verify_the_the_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.user_creates_a_new_venue_admin_log_in_and_navigate_to_differenet_tabs()"
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
  "name": "enter valid credential",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "go to dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the users tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.enter_valid_credential()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.go_to_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.user_clicks_the_users_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "verify User updates the email address for the client user",
  "description": "",
  "id": "bau-users-tab-scenarios;verify-user-updates-the-email-address-for-the-client-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User update the email address for the client user and verify client user can login with the new email",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Users_SD.user_update_the_email_address_for_the_client_user_and_verify_client_user_can_login_with_the_new_email()"
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
  "name": "enter valid credential",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "go to dashboard",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks the users tab",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.enter_valid_credential()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.go_to_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Users_SD.user_clicks_the_users_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "## Need master credentials to test this scenario"
    }
  ],
  "line": 34,
  "name": "verify that unlinked tab is not visible for master admins",
  "description": "",
  "id": "bau-users-tab-scenarios;verify-that-unlinked-tab-is-not-visible-for-master-admins",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "BAU user verifies that Unlinked users tab is not visible for master admins",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Users_SD.BAU_user_verifies_that_Unlinked_users_tab_is_not_visible_for_master_admins()"
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
formatter.uri("clients-BAU.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 2,
      "value": "#Comment: BAU Venue Admin  - Clients tab Regression"
    }
  ],
  "line": 3,
  "name": "BAU Clients tab scenarios",
  "description": "",
  "id": "bau-clients-tab-scenarios",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
      "line": 12,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d15 scenarios for BAU Venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    }
  ],
  "line": 18,
  "name": "Verify that user can add a manual payment from the Clients screen",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-add-a-manual-payment-from-the-clients-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User adds a Manual payment and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 24,
  "name": "Verify that user can add a new refund from the Clients screen",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-add-a-new-refund-from-the-clients-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User adds a new refund and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 30,
  "name": "Verify that user can raise a credit notes from the Clients screen",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-raise-a-credit-notes-from-the-clients-screen",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User raises a Credit notes and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 36,
  "name": "Verify that user can upload the document and can add a reminder to document",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-upload-the-document-and-can-add-a-reminder-to-document",
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
  "name": "User selects new document and save successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user add the reminder and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 43,
  "name": "Verify that user can add a reminder to a client account",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-add-a-reminder-to-a-client-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "User selects Create a reminder option and successfully added a reminder to a client screen",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 49,
  "name": "View Payments from the client tab",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-payments-from-the-client-tab",
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
  "name": "Verify the account activity tab and view Payments by clicking the description, add notes and click save or close",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 54,
  "name": "View Invoices from the client tab",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-invoices-from-the-client-tab",
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
  "name": "Verify the account activity tab and view Invoice by clicking the description,click Payments link and click view client again",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 59,
  "name": "View Credit Notes from the client tab",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-credit-notes-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Verify the account activity tab and view Credit notes by clicking the description,click refund and click view client again",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 64,
  "name": "View Refund from the client tab",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-refund-from-the-client-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "Verify the account activity tab and view Refund by clicking the description and click close the pop up",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 69,
  "name": "View bookings from the Clients tab and edit the booking",
  "description": "",
  "id": "bau-clients-tab-scenarios;view-bookings-from-the-clients-tab-and-edit-the-booking",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "User go to Clients bookings section and select the bookings to view the details and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 74,
  "name": "Verify that user can edit a client account",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-edit-a-client-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "User selects edit client option, update name, last name, Notes etc and save successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 79,
  "name": "Verify that user can Archive and then Restore the client",
  "description": "",
  "id": "bau-clients-tab-scenarios;verify-that-user-can-archive-and-then-restore-the-client",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 78,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 80,
  "name": "User select Archive client link and archive the client successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "user navigate to show archieved clients screen and Restore the client successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 85,
  "name": "Create New BAU user - client User",
  "description": "",
  "id": "bau-clients-tab-scenarios;create-new-bau-user---client-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "User selects New client user button, enter mandatory fields, create user and verify",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 90,
  "name": "Edit a BAU User -  update details",
  "description": "",
  "id": "bau-clients-tab-scenarios;edit-a-bau-user----update-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "User selects \u0027Edit Users\u0027 link , update the details and verify the edited user",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
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
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens browser and enters the admin URL",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter required credentials and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User have gone to the homepage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
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
  "line": 95,
  "name": "Unlink a client User",
  "description": "",
  "id": "bau-clients-tab-scenarios;unlink-a-client-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 94,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "User unlink the user and verify the details",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
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
});
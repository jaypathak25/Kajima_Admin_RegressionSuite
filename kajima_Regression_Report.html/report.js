$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Bookings.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#Author: Jay Pathak"
    },
    {
      "line": 3,
      "value": "#Comment: Venue Admin  - Bookings tab Regression"
    }
  ],
  "line": 4,
  "name": "Bookings tab scenarios",
  "description": "",
  "id": "bookings-tab-scenarios",
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
  "duration": 11829941000,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2496107700,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 46826900,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5294722200,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    },
    {
      "line": 14,
      "value": "##\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d13 scenarios for Venue admin\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d##"
    }
  ],
  "line": 17,
  "name": "Enable-Disable refund feature from master admin and verify the disabled refund option from MVAs",
  "description": "",
  "id": "bookings-tab-scenarios;enable-disable-refund-feature-from-master-admin-and-verify-the-disabled-refund-option-from-mvas",
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
  "name": "User disable the refund feature from the master admin and ensure no refund option displays when master admin cancels booking",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_disable_the_refund_feature_from_the_master_admin_and_ensure_no_refund_option_displays_when_master_admin_cancels_booking()"
});
formatter.result({
  "duration": 10186592100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027main\u0027 and text()\u003d\u0027Organisations\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.75)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62823}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 86.0.4240.75, webStorageEnabled: true}\nSession ID: c41d0587c7196825be26669eeb10eb2c\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027main\u0027 and text()\u003d\u0027Organisations\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat kajima.venueadmin.pom_pages.Bookings_Page.verifyRefundFunc(Bookings_Page.java:745)\r\n\tat kajima.venueadmin.stepDefinition.Bookings_SD.user_disable_the_refund_feature_from_the_master_admin_and_ensure_no_refund_option_displays_when_master_admin_cancels_booking(Bookings_SD.java:170)\r\n\tat ✽.Then User disable the refund feature from the master admin and ensure no refund option displays when master admin cancels booking(Bookings.feature:18)\r\n",
  "status": "failed"
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
  "duration": 10464360800,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2326275100,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 43540000,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5282169600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Cancel multiple mixed bookings -  select check box for different payment status bookings and cancel",
  "description": "",
  "id": "bookings-tab-scenarios;cancel-multiple-mixed-bookings----select-check-box-for-different-payment-status-bookings-and-cancel",
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
  "name": "User Select check box for mutiple different payment status bookings and cancel to verify CN and Refunds if applicable",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.User_Select_check_box_for_multiple_different_payment_status_bookings_and_cancel_to_verify_CN_and_Refunds_if_applicable()"
});
formatter.result({
  "duration": 36337949000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 710424800,
  "status": "passed"
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
  "duration": 10497158100,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2367496300,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 43027500,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5065230100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Search and filter - verify booking results with different search/filter Criteria, summary view and exports",
  "description": "",
  "id": "bookings-tab-scenarios;search-and-filter---verify-booking-results-with-different-search/filter-criteria,-summary-view-and-exports",
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
  "name": "User changes the number of enteries and verify results",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User enters room name OR clients name in the search bar and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User verify booking results by selecting different STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User verify booking results by selecting different PAYMENT STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User verify booking results by selecting different date range",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User verify the summary option and view the booking",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select Export excel button and verify that excel generated successfully",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Bookings_SD.user_changes_the_number_of_enteries_and_verify_results()"
});
formatter.result({
  "duration": 23573418300,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_enters_room_name_OR_clients_name_in_the_search_bar_and_verify_the_result()"
});
formatter.result({
  "duration": 26914393000,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_STATUS_options()"
});
formatter.result({
  "duration": 34154267200,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_PAYMENT_STATUS_options()"
});
formatter.result({
  "duration": 31918518900,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_verify_booking_results_by_selecting_different_date_range()"
});
formatter.result({
  "duration": 14362743300,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_verify_the_summary_option_and_view_the_booking()"
});
formatter.result({
  "duration": 7960347700,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_select_Export_excel_button_and_verify_that_excel_generated_successfully()"
});
formatter.result({
  "duration": 9956777000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps_SD.user_quit_the_browser()"
});
formatter.result({
  "duration": 727295600,
  "status": "passed"
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
  "duration": 10550646400,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.enter_credentials_and_Login()"
});
formatter.result({
  "duration": 2165173200,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_navigates_to_the_homepage()"
});
formatter.result({
  "duration": 42623900,
  "status": "passed"
});
formatter.match({
  "location": "Bookings_SD.user_clicks_the_Bookings_tab()"
});
formatter.result({
  "duration": 5308469700,
  "status": "passed"
});
formatter.scenario(formatter.uri("Calender.feature");
formatter.feature(formatter.uri("Clients.feature");
formatter.feature(formatter.uri("Dashboard.feature");
formatter.feature(formatter.uri("Invoice.feature");
formatter.feature(formatter.uri("Manage.feature");
});
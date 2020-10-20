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
  "duration": 20656997800,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:192)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat ✽.Given User opens browser and enters the admin URL(Bookings-BAU.feature:8)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:21594/status] to be available after 20002 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:187)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:40)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:489)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:148)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 48 more\r\n",
  "status": "failed"
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
  "name": "Raise a booking via new booking button  - BAU",
  "description": "",
  "id": "bau-bookings-tab-scenarios;raise-a-booking-via-new-booking-button----bau",
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
  "name": "User clicks a new Booking button and raise daily recurring booking",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks a new Booking button and raise weekly recurring booking",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
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
  "duration": 20022917800,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:192)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat ✽.Given User opens browser and enters the admin URL(Bookings-BAU.feature:8)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:41772/status] to be available after 20001 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:187)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:40)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:489)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:148)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 48 more\r\n",
  "status": "failed"
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
  "name": "Search and filter - verify booking results with different search/filter Criteria, summary view and exports",
  "description": "",
  "id": "bau-bookings-tab-scenarios;search-and-filter---verify-booking-results-with-different-search/filter-criteria,-summary-view-and-exports",
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
  "name": "User changes the number of enteries and verify results",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User enters room name OR clients name in the search bar and verify the result",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User verify booking results by selecting different STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User verify booking results by selecting different PAYMENT STATUS options",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User verify booking results by selecting different date range",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User verify the summary option and view the booking",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User select Export excel button and verify that excel generated successfully",
  "keyword": "And "
});
formatter.step({
  "line": 33,
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
  "duration": 20014095800,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:192)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat ✽.Given User opens browser and enters the admin URL(Bookings-BAU.feature:8)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:1808/status] to be available after 20000 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:187)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:40)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:489)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:148)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 48 more\r\n",
  "status": "failed"
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
  "line": 37,
  "name": "Edit bookings - Filter booking by payment status and Edit",
  "description": "",
  "id": "bau-bookings-tab-scenarios;edit-bookings---filter-booking-by-payment-status-and-edit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@VenueAdmin"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User filter the booking by FULLY PAID payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User filter the booking by BILLED payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User filter the booking by UNBILLED payment status and edit the booking",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
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
  "duration": 6200123600,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom no such window: window was already closed\n  (Session info: chrome\u003d86.0.4240.75)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.02 seconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-L2S6FMP\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat kajima.venueadmin.base.TestBase.intialisation(TestBase.java:45)\r\n\tat kajima.venueadmin.stepDefinition.CommonSteps_SD.User_opens_browser_and_enters_the_admin_URL(CommonSteps_SD.java:29)\r\n\tat ✽.Given User opens browser and enters the admin URL(Bookings-BAU.feature:8)\r\n",
  "status": "failed"
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
  "line": 45,
  "name": "Cancel single WP fully paid bookings - BAU - verify CN raised successfully",
  "description": "",
  "id": "bau-bookings-tab-scenarios;cancel-single-wp-fully-paid-bookings---bau---verify-cn-raised-successfully",
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
  "name": "User cancel the single WP fully paid booking and verify the CN raised in the clients tab",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
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

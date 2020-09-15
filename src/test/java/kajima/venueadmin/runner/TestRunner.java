package kajima.venueadmin.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import kajima.venueadmin.base.TestBase;

//windows --> show view --> problems 

@CucumberOptions(
		
		
		features = "C:\\Users\\User\\Desktop\\Automation\\Workspace\\Kajima_VenueAdmin_Regression\\"
				+ "src\\test\\java\\kajima\\venueadmin\\features", //the path of the feature files
			
			glue = {"kajima.venueadmin.stepDefinition"},
			
			format = {"pretty","html:kajima_Regression_Report.html"}, //to generate different types of reporting
			
			monochrome = true, //display the console output in a proper readable format
			
			strict = true, //it will check if any step is not defined in step definition file
			
			dryRun = false, //to check the mapping is proper between feature file and step def file, make it true and run from here
			
			tags = {"@VenueAdmin"}
		
			
		
		//OR : tags = {"OrgAdmin , VenueAdmin"} represented by , and execute all tests tagged as @OrgAdmin or @VenueAdmin
		//AND : tags = {"OrgAdmin","VenueAdmin"} represented by , and execute all tests tagged as @OrgAdmin AND @VenueAdmin
		//~ to ignore any specific tag 
	)

public class TestRunner extends AbstractTestNGCucumberTests{

}

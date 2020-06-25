package kajima.venueadmin.pom_pages;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class Download_Cap {
	
	WebDriver driver;
	File folder;
	
	Login_Page login_page;
	
	
	public Download_Cap() {
		login_page= new Login_Page();
	}
	
	
	@BeforeMethod
	public void setUp() {
		
		folder = new File(UUID.randomUUID().toString());
		folder.mkdir();
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Desktop\\Automation\\Jarfiles\\chromedriver.exe");
		ChromeOptions options =  new ChromeOptions();

		Map<String, Object> prefs = new HashMap<String, Object>();
		prefs.put("profile.default_content_settings.popups", 0);
		prefs.put("download.default_directory", folder.getAbsolutePath());
		
		options.setExperimentalOption("prefs",prefs);
		DesiredCapabilities cap = DesiredCapabilities.chrome();
		cap.setCapability(ChromeOptions.CAPABILITY, options);
		
		driver =  new ChromeDriver(cap);
	}
		
	@Test
	public void downloadFileTest() throws InterruptedException {
		driver.get("https://admin.preproduction.ospace.co.uk/users/sign_in");
		driver.findElement(By.id("user_email")).sendKeys("nhsmva@example.com");
		driver.findElement(By.id("user_password")).sendKeys("nhsmva456#");
		driver.findElement(By.name("commit")).click();
		Thread.sleep(2000);
		
		driver.findElement(By.xpath("//a[@class='main' and contains(text(),'Bookings')]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a/span[text()='Excel Export']")).click();
		Thread.sleep(1000);
		File listOfFiles[] =  folder.listFiles();
		Assert.assertTrue(listOfFiles.length>0);
		
		for(File file:listOfFiles) {
			Assert.assertTrue(file.length()>0);
		}
	}
	
	//	@AfterMethod
	//	public void tearDown() {
		//	driver.quit();
		//	for(File file:folder.listFiles()) {
			//	file.delete();
			//}
		//	folder.delete();
	//	}
}

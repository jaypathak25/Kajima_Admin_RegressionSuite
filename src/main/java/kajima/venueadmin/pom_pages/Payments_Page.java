package kajima.venueadmin.pom_pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import kajima.venueadmin.base.TestBase;

public class Payments_Page extends TestBase {
	
	@FindBy(xpath = "//a[contains(text(),'Payments')]")
	WebElement payments_tab;
	
	@FindBy(xpath = "//a[contains(text(),'Refunds')]")
	WebElement refunds_subTab;
	
	@FindBy(xpath="//div[@class='row']//h3")
	WebElement title_Txt;
	
	@FindBy(xpath="//table[@id='unreconciled_payments_table']/tbody/tr")
	List<WebElement> noOfRefundnPayments;
	
	@FindBy(xpath="//a[text()='View']")
	WebElement view_Link;
	
	@FindBy(xpath="//a[text()='Close']")
	WebElement close_Link;
	
	@FindBy(xpath="//div[@class='twelve columns']/h5")
	WebElement refundPopUp_txt;
	
	@FindBy(xpath="//input[@id='b_start_date']")
	WebElement startDate_field;
	
	@FindBy(xpath="//input[@id='b_end_date']")
	WebElement endDate_field;
	
	@FindBy(xpath="//input[@name='commit' and @value='Go']")
	WebElement go_Btn;
	
	@FindBy(xpath = "//input[@id='search_payment']")
	WebElement search_Bar;
	
	@FindBy(xpath = "//select[@id='method']")
	WebElement method_dd;
	
	@FindBy(xpath = "//select[@id='reconciliation']")
	WebElement recon_dd;
	
	@FindBy(xpath = "//select[@id='allocation']")
	WebElement allocation_dd;
	
	@FindBy(xpath = "//select[@id='state']")
	WebElement state_dd;
	
	@FindBy(xpath="//table[@id='unreconciled_payments_table']/tbody/tr/td[5]")
	WebElement method_Txt;
	
	@FindBy(xpath="//table[@id='unreconciled_payments_table']/tbody/tr/td[9]")
	WebElement state_Txt;
	
	@FindBy(xpath="//table[@id='unreconciled_payments_table']/tbody/tr/td[11]")
	WebElement allocation_Txt;
	

//================================Initialise web elements created in this class========================================
	
		public Payments_Page() {
		PageFactory.initElements(driver,this);
		}
		
//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//

		public void clickPaymentsTab(){
			payments_tab.click();
			String title = title_Txt.getText();
			System.out.println("You are on " + payments_tab.getText() + " subtab");
			System.out.println("Title of the screen is " + title);
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Payments"));
			softAssert.assertAll();
		}
		
//==================================================================================================================//	
		
		public void verify_viewRefundnFilter() throws InterruptedException {
			refunds_subTab.click();
			System.out.println("you are on " + refunds_subTab.getText() + "subtab");
			System.out.println("Title of the screen is " + title_Txt.getText());
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title_Txt.getText().contains("Refund"));
			softAssert.assertAll();
			
			int noOfRefundPay1 = noOfRefundnPayments.size();
			System.out.println("Number of Refund payments before applying any filter are " + noOfRefundPay1);
			Thread.sleep(1000);
		
			Select slct =  new Select(driver.findElement(By.xpath("//select[@id='rows_per_page']")));
			slct.selectByIndex(2);
			
			int noOfRefundPay2 = noOfRefundnPayments.size();
			System.out.println("Number of Refund payments after showing all entries on the page are " + noOfRefundPay2);
			Thread.sleep(1000);
			
			startDate_field.sendKeys("12/05/2020");
			endDate_field.sendKeys("14/05/2020");
			go_Btn.click();
			
			int noOfRefundPay3 = noOfRefundnPayments.size();
			System.out.println("Number of Refund payments after filtering by dates are " + noOfRefundPay3);
			
			String str1= "//table[@id='unreconciled_payments_table']/tbody/tr[";
			String str2= "]/td[8]";
			for(int i=1;i<=noOfRefundPay3;i++) {
				String str3= str1+i+str2;
				WebElement viewLink = driver.findElement(By.xpath(str3));
				Thread.sleep(1000);
				viewLink.click();
				Thread.sleep(5000);
				close_Link.click();
				Thread.sleep(5000);
			}
		}
		
//==================================================================================================================//	
		
		public void verify_refundSearchBar() throws InterruptedException {
			refunds_subTab.click();
			System.out.println("you are on " + refunds_subTab.getText() + "subtab");
			System.out.println("Title of the screen is " + title_Txt.getText());
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title_Txt.getText().contains("Refund"));
			softAssert.assertAll();
		
			Select slct =  new Select(driver.findElement(By.xpath("//select[@id='rows_per_page']")));
			slct.selectByIndex(2);
			
			int noOfRefundPay1 = noOfRefundnPayments.size();
			System.out.println("Number of Refund payments after showing all entries on the page are " + noOfRefundPay1);
			Thread.sleep(1000);
			
			search_Bar.sendKeys("AUTOTESTING");
			Thread.sleep(2000);
			
			int noOfRefundPay2 = noOfRefundnPayments.size();
			System.out.println("Number of Refund payments after searching through search bar are " + noOfRefundPay2);
		    Assert.assertNotEquals(noOfRefundPay1, noOfRefundPay2);	
		}
		
		
//==================================================================================================================//	
		
		public void verify_paymentTypeFilter() throws InterruptedException {
			Select slct =  new Select(driver.findElement(By.xpath("//select[@id='rows_per_page']")));
			slct.selectByIndex(2);
			Thread.sleep(1000);
			
			int noOfRefundPay1 = noOfRefundnPayments.size();
			System.out.println("Number of payments after showing all entries on the page are " + noOfRefundPay1);
			Thread.sleep(1000);
			
			Select slct1 = new Select(method_dd);
			List<WebElement> opn = slct1.getOptions();
			for(int i=1;i<=(opn.size()-1);i++) {

			slct1.selectByIndex(i);
			
			String payType =method_Txt.getText();
			
			int noOfRefundPay2 = noOfRefundnPayments.size();
			System.out.println("Number of payments after selecting " + payType +" payment method are " + noOfRefundPay2);
			Thread.sleep(1000);	
			}
		}
		
		
//==================================================================================================================//	
		
		public void verify_viewPayment() throws InterruptedException {
			
			Select slct1 = new Select(method_dd);
			List<WebElement> paytypeOpn = slct1.getOptions();
			
			Select slct2 = new Select(state_dd);
			List<WebElement> statusOpn = slct2.getOptions();
			
			for(int i=1;i<=(paytypeOpn.size()-1);i++) {
				Thread.sleep(500);
				slct1.selectByIndex(i);
					for(int j=1;j<=(statusOpn.size()-1);) {
						Thread.sleep(500);
						slct2.selectByIndex(j);
						if(noOfRefundnPayments.size()==0) {
							j++;
						}else {
							view_Link.click();
							Thread.sleep(500);
							try {
								driver.findElement(By.xpath("//a[text()='Refresh status']")).click();
								System.out.println("Refresh status button available - You are on BAU site");
							}catch(NoSuchElementException e) {
								System.out.println("Refresh status button NOT available - You are on NHS site");
							close_Link.click();
							j++;
							}
						}
					}			
				}
			}
		
//==================================================================================================================//	
		
		public void verify_resultByAllocationOpn() throws InterruptedException {
			Select slct =  new Select(driver.findElement(By.xpath("//select[@id='rows_per_page']")));
			slct.selectByIndex(2);
			Thread.sleep(500);
			
			int noOfRefundPay1 = noOfRefundnPayments.size();
			System.out.println("Number of payments with no filters after showing all entries on the page are " + noOfRefundPay1);
			Thread.sleep(500);
			
			Select slct1 = new Select(allocation_dd);
			List<WebElement> opn = slct1.getOptions();
			
			for(int i=1;i<=(opn.size()-1);) {

			slct1.selectByIndex(i);	
			if(noOfRefundnPayments.size()==0) {
				i++;
			}else {
				
			String stateType =allocation_Txt.getText();
			
			int noOfRefundPay2 = noOfRefundnPayments.size();
			System.out.println("Number of payments after selecting " + stateType +" payment states are " + noOfRefundPay2);
			Thread.sleep(500);	
			i++;
			}
		  }
			slct1.selectByVisibleText("-- Allocation --");
			Thread.sleep(500);
		}
		
//==================================================================================================================//	
		
		public void verify_resultByReconciliationOpn() throws InterruptedException {
			Select slct =  new Select(driver.findElement(By.xpath("//select[@id='rows_per_page']")));
			slct.selectByIndex(2);
			Thread.sleep(500);
			
			int noOfRefundPay1 = noOfRefundnPayments.size();
			System.out.println("Number of payments with no filters after showing all entries on the page are " + noOfRefundPay1);
			Thread.sleep(500);
			
			Select slct1 = new Select(recon_dd);
			List<WebElement> opn = slct1.getOptions();
			for(int i=1;i<=(opn.size()-1);) {

			slct1.selectByIndex(i);
			if(noOfRefundnPayments.size()==0) {
				i++;
			}else {
			int noOfRefundPay2 = noOfRefundnPayments.size();
			System.out.println("Number of payments after selecting reconciliation/Unreconciliation options are " + noOfRefundPay2);
			Thread.sleep(500);	
			i++;
				}
			}
			slct1.selectByVisibleText("-- Reconciliation --");
			Thread.sleep(500);
		}
		
//==================================================================================================================//	
		
		public void verify_resultBystatusOpn() throws InterruptedException {
			Select slct =  new Select(driver.findElement(By.xpath("//select[@id='rows_per_page']")));
			slct.selectByIndex(2);	
			Thread.sleep(500);
			
			int noOfRefundPay1 = noOfRefundnPayments.size();
			System.out.println("Number of payments with no filters after showing all entries on the page are " + noOfRefundPay1);
			Thread.sleep(500);
			
			Select slct1 = new Select(state_dd);
			List<WebElement> opn = slct1.getOptions();
			
			for(int i=1;i<=(opn.size()-1);) {
			slct1.selectByIndex(i);
			if(noOfRefundnPayments.size()==0) {
				Thread.sleep(500);
				i++;
			}else {
			String stateType =state_Txt.getText();
			
			int noOfRefundPay2 = noOfRefundnPayments.size();
			System.out.println("Number of payments after selecting " + stateType +" payment states are " + noOfRefundPay2);
			Thread.sleep(1000);
			i++;
			 	}	
			}	
			slct1.selectByVisibleText("-- Status --");
			Thread.sleep(500);
		}
		
//==================================================================================================================//	
		
		public void verify_resultByDateRange() throws InterruptedException {
			Select slct =  new Select(driver.findElement(By.xpath("//select[@id='rows_per_page']")));
			slct.selectByIndex(2);	
			Thread.sleep(500);
			
			int noOfRefundPay1 = noOfRefundnPayments.size();
			System.out.println("Number of payments with no filters after showing all entries on the page are " + noOfRefundPay1);
			Thread.sleep(500);
		
			startDate_field.sendKeys("12/05/2020");
			endDate_field.sendKeys("15/05/2020");
			go_Btn.click();
			
			int noOfRefundPay2 = noOfRefundnPayments.size();
			System.out.println("Number of payments after selecting date range on the page are " + noOfRefundPay2);
			Thread.sleep(500);
			Assert.assertNotEquals(noOfRefundPay1, noOfRefundPay2);	
		}
	
}

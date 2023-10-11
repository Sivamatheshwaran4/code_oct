import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

public class amazondemo {
    public static void main(String[] args){
        System.setProperty("webDriver.chrome.Driver","C:\\siva\\testing\\chromeDriver.exe");
        WebDriver driver=new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver. get("https://www.amazon.in/");
        WebElement SearchBox =  driver.findElement(By.id("twotabsearchtextbox"));
        SearchBox.sendKeys("redmi ");
        //SearchBox.submit();
        driver.findElement(By.xpath("//*[@id=\"https://www.amazon.in/\"]")).submit();
        driver.findElement(By.linkText("a-size-large product-title-word-break  ")).submit();
        Select quantity = new Select(driver.findElement(By.id("quantity")));
        quantity.selectByValue("2");
        quantity.selectByIndex(1);
        quantity.selectByVisibleText("2");












    }
}

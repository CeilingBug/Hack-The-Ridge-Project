from bs4 import BeautifulSoup
import requests

page = requests.get("https://en.wikipedia.org/wiki/List_of_hospitals_in_Canada")

soup = BeautifulSoup(page.content, 'html.parser')

# create object
object = soup.find(class_="vector-toc-link")

result = items[0]

print(result.prettify())

hospitalThreeStepsCanada = {
  
}

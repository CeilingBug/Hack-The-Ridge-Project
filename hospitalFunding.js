const Ontario = {
    "Barrie": ["Royal Victoria Regional Health Centre"],
    "Brampton": ["Brampton Civic Hospital", "Peel Memorial Centre for Integrated Health and Wellness"],
    "Brantford": ["Brantford General Hospital"],
    "Burlington": ["Joseph Brant Hospital"],
    "Cambridge": ["Cambridge Memorial Hospital"],
    "Guelph": ["Guelph General Hospital"],
    "Hamilton": ["St. Joseph's Healthcare Hamilton", "Hamilton Health Sciences", "McMaster Children's Hospital", "Juravinski Hospital and Cancer Centre"],
    "Kingston": ["Kingston General Hospital", "Hotel Dieu Hospital"],
    "Kitchener": ["Grand River Hospital", "St. Mary's General Hospital"],
    "London": ["London Health Sciences Centre", "St. Joseph's Health Care", "Children's Hospital London Health Sciences Centre"],
    "Markham": ["Markham Stouffville Hospital"],
    "Mississauga": ["Trillium Health Partners - Mississauga Hospital", "Credit Valley Hospital"],
    "Niagara Falls": ["Niagara Health System - Niagara Falls Site"],
    "Ottawa": ["The Ottawa Hospital", "Montfort Hospital", "Cheo - Children's Hospital of Eastern Ontario"],
    "Peterborough": ["Peterborough Regional Health Centre"],
    "Richmond Hill": ["Mackenzie Richmond Hill Hospital"],
    "St. Catharines": ["St. Catharines General Hospital", "Niagara Health - St. Catharines Site"],
    "Sudbury": ["Health Sciences North"],
    "Thunder Bay": ["Thunder Bay Regional Health Sciences Centre"],
    "Toronto": ["Toronto General Hospital", "St. Michael's Hospital", "Sunnybrook Health Sciences Centre", "Mount Sinai Hospital", "Women's College Hospital", "The Hospital for Sick Children"],
    "Vaughan": ["Cortellucci Vaughan Hospital"],
    "Waterloo": ["Grand River Hospital"],
    "Windsor": ["Windsor Regional Hospital"]
  };
function searchHospital() {
  let search = prompt("Enter the city name you are looking for:");
  
  search = search.toLowerCase();
  
  let results = [];
  
  for (let city in Ontario) {
    if (city.toLowerCase().includes(search)) {
      results.push(`${city} (Hospitals: ${Ontario[city].join(", ")})`);
    }
    else {
      results.push(`none`);
    }
  

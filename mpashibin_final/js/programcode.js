// JavaScript Code for Job Filtering Program

// Store job listings in an array

const jobListings = [
  {title: 'Administrative Assistant', salary: 35000, location: 'Menomonie', qualifications: 'High School', description: 'Handle administrative tasks, including data entry, scheduling, and faxes.' },
  {title: 'Arborist', salary: 45000, location: 'Chippewa Falls', qualifications: 'Associates', description: 'Care for and maintain trees, diagnose and treat tree diseases.'},
  {title: 'Bartender', salary: 30000, location: 'Eau Claire', qualifications: 'High School', description: 'Prepare and serve drinks, interact with customers in a bar.'},
  {title: 'Barber', salary: 25000, location: 'Eau Claire', qualifications: 'Associates', description: 'Provide haircutting and styling services to clients.'},
  {title: 'Biologist', salary: 50000, location: 'Eau Claire', qualifications: 'Bachelors', description: 'Conduct research in the field and in a lab, analyze data and write reports.'},
  {title: 'Bus Driver', salary: 35000, location: 'Menomonie', qualifications: 'High School', description: 'Operate a bus, transport passengers along a designated route.'},
  {title: 'Call Center Agent', salary: 25000, location: 'Remote', qualifications: 'High School', description: 'Handle customer inquiries and provide information or support over the phone.'},
  {title: 'Career Adviser', salary: 40000, location: 'Eau Claire', qualifications: 'High School', description: 'Provide guidance and advice to individuals regarding their career paths.'},
  {title: 'Chef', salary: 30000, location: 'Chippewa Falls', qualifications: 'High School', description: 'Plan and prepare meals, manage kitchen staff in a restaurant.'},
  {title: 'Chemical Engineer', salary: 110000, location: 'Eau Claire', qualifications: 'Bachelors', description: 'Design and optimize chemical processes and equipment.'},
  {title: 'Chiropractor', salary: 70000, location: 'Menomonie', qualifications: 'Masters', description: 'Diagnose and treat musculoskeletal conditions using various techniques.'},
  {title: 'Data Analyst',salary: 80000, location: 'Remote', qualifications: 'Bachelors', description: 'Analyze and interpret complex data sets to provide insights and support decision-making.'},
  {title: 'Delivery Driver', salary: 30000, location: 'Eau Claire', qualifications: 'High School', description: 'Transport goods and packages to designated locations using a vehicle and GPS.'},
  {title: 'Dentist', salary: 250000, location: 'Menomonie', qualifications: 'Masters', description: 'Diagnose and treat dental issues, perform dental procedures and surgeries.'},
  {title: 'Dog Groomer', salary: 30000, location: 'Eau Claire', qualifications: 'High School', description: 'Groom and care for dogs, including bathing, brushing, and nail trimming.'},
  {title: 'Electrician', salary: 60000, location: 'Eau Claire', qualifications: 'Associates', description: 'Install, maintain, and repair electrical systems and equipment.'},
  {title: 'Environmental Consultant', salary: 70000, location: 'Eau Claire', qualifications: 'Bachelors', description: 'Assess and manage environmental issues, provide recommendations for sustainability in the setting of urban development.'},
  {title: 'Firefighter', salary: 55000, location: 'Chippewa Falls', qualifications: 'Associates', description:'Respond to fires and emergencies, perform rescues and provide medical assistance.'}, 
  {title: 'Game Designer', salary: 75000, location: 'Remote', qualifications: 'Bachelors', description: 'Create and design video games, including gameplay, characters, and storylines.'},
  {title: 'Housekeeping', salary: 30000, location: 'Menomonie', qualifications: 'High School', description: 'Clean and maintain hotel rooms, ensuring a tidy and organized environment.'},
  {title: 'Interpreter', salary: 40000, location: 'Eau Claire', qualifications: 'Bachelors', description: 'Translate spoken or written words from Spanish to English and English to Spanish.'},
  {title: 'Janitor}', salary: 30000, location: 'Chippewa Falls', qualifications: 'High School', description: 'Clean and maintain the building, including offices and public spaces.'},
  {title: 'Lifeguard', salary: 30000, location: 'Chippewa Falls', qualifications: 'High School', description: 'Ensure the safety of swimmers at the pool, provide assistance in emergencies.'},
  {title: 'Meteorologist', salary: 90000, location: 'Eau Claire', qualifications: 'Bachelors', description: 'Study and predict atmospheric phenomena and weather patterns.'},
  {title: 'Natural Resources Educator', salary: 35000, location: 'Chippewa Falls', qualifications: 'Associates', description: 'Teach and educate small groups about natural resources and environmental conservation.'},
  {title: 'Orthodontist', salary: 300000, location: 'Eau Claire', qualifications: 'Masters', description: 'Diagnose and treat issues with the alignment of teeth and jaws.'},
  {title: 'Paramedic', salary: 50000, location: 'Menomonie', qualifications: 'Associates', description: 'Provide emergency medical care and transportation to individuals in need.'},
  {title: 'Personal Trainer', salary: 45000, location: 'Menomonie', qualifications: 'Associates', description: 'Develop and implement fitness programs for individuals and groups.'},
  {title: 'Pharmacist', salary: 120000, location: 'Chippewa Falls', qualifications: 'Masters', description: 'Dispense medications, offer health advice, and ensure the safe use of pharmaceuticals.'},
  {title: 'Phlebotomist', salary: 40000, location: 'Chippewa Falls', qualifications: 'High School', description: 'Collect blood samples from patients for medical testing or donation.'},
  {title: 'Physician', salary: 350000, location: 'Eau Claire', qualifications: 'Masters', description: 'Diagnose and treat illnesses, injuries, and medical conditions.'},
  {title: 'Quality Control Technician', salary: 35000, location: 'Menomonie', qualifications: 'High School', description: 'Inspect and test products to ensure they meet quality standards.'},
  {title: 'Receptionist', salary: 40000, location: 'Chippewa Falls', qualifications: 'High School', description: 'Greet visitors, answer phones, and provide information in an office setting.'},
  {title: 'Retail Assistant', salary: 35000, location: 'Menomonie', qualifications: 'High School', description: 'Assist customers, handle transactions, and maintain store inventory.'},
  {title: 'Sales Representative', salary: 90000, location: 'Eau Claire', qualifications: 'Bachelors',  description: 'Sell products and services to customers, meet sales targets.'},
  {title: 'Server', salary: 25000, location: 'Menomonie', qualifications: 'High School', description: 'Take orders, serve food and beverages, and provide excellent customer service in a restaurant.'},
  {title: 'Software Developer', salary: 70000, location: 'Remote', qualifications: 'Associates', description: 'Design, code, and test software applications for various platforms.'},
  {title: 'Surgeon', salary: 400000, location: 'Eau Claire', qualifications: 'Masters', description: 'Perform surgical procedures to treat injuries or diseases.'},
  {title: 'Teacher', salary: 50000, location: 'Chippewa Falls', qualifications: 'Bachelors', description: 'Educate and instruct students in various subjects at a high school level.'},
  {title: 'User Experience Designer', salary: 60000, location: 'Remote', qualifications: 'Associates', description: 'Design and improve user interfaces for digital products to enhance user experience.'},
  {title: 'Veterinarian', salary: 150000, location: 'Menomonie', qualifications: 'Masters', description: 'Diagnose and treat illnesses and injuries in animals and provide preventive care.'},
  {title: 'Warden', salary: 60000, location: 'Menomonie', qualifications: 'Associates', description: 'Manage and oversee operations in nearby state parks. Enforce conservation laws.'},
  {title: 'Web Developer', salary: 100000, location: 'Menomonie', qualifications: 'Bachelors', description: 'Create and maintain websites and web applications.'},
  {title: 'Zookeeper', salary: 45000, location: 'Chippewa Falls', qualifications: 'Associates', description: 'Care for and manage animals in a zoo and educate guests on different species.'},

  // Add more job listings as they open
]


// Function to match preferences with job listings

function filterJobListings(preferences) {
  return jobListings.filter(job => {

    var salaryMatch = job.salary >= preferences.salaryPreference;
    var locationMatch = job.location.toLowerCase() == preferences.locationPreference.toLowerCase();
    var qualificationsMatch = job.qualifications == preferences.qualificationsPreference;

    return salaryMatch && locationMatch && qualificationsMatch;

  });

}

// Function to prompt user for their job preferences

function getPreferences() {

// Declare variables/prompt for user's preferences

  var preferences = {

    salaryPreference : Number(prompt("What is your desired salary per year? (ex: 45000)")),

    locationPreference : prompt("What city would you prefer to work in or near? (Eau Claire, Menomonie, Chippewa Falls, Remote)"),

    qualificationsPreference : prompt("What is your highest level of education? (High School, Associates, Bachelors, Masters)")

  }


  return preferences;

}


// Run the variables together to find matches

function filterJobsBasedOnUserPreferences() {

  var matchesMessage = "\nHere are the jobs that match your preferences: \n";
  var noMatchesMessage = "\n\n No results were found that matched your preferences. Please make sure everything is spelled correctly and try again or enter new preferences.";

  let keepSearching = true;

  while (keepSearching) {
    const userPreferences = getPreferences();
    const filteredJobListings = filterJobListings(userPreferences);
    
    // Display matches

    document.write(matchesMessage);

    if (filteredJobListings.length > 0) {
      filteredJobListings.forEach(job => {
        document.write("\n\n" + job.title + "\n" + " Salary: $" + job.salary + "\n Location: " + job.location + "\n Minimum Education Needed: " + job.qualifications + "\n Job Description: " + job.description);
      });
    } else {
      document.write(noMatchesMessage);
    }

    keepSearching = false;
  }

  document.write("\n\n\n\n If you would like to search again, please refresh the page and enter new preferences. Thank you!")
}

// Run the program
filterJobsBasedOnUserPreferences();



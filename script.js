document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Get form input values
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var date = document.getElementById('date').value;
    var passengers = document.getElementById('passengers').value;
    
    // Clear previous results
    document.getElementById('results').innerHTML = '';
    
    // Simulate API call to fetch bus details
    var buses = [
      { id: 1, from: 'City A', to: 'City B', date: '2023-06-20', seats: 10 },
      { id: 2, from: 'City A', to: 'City C', date: '2023-06-20', seats: 5 },
      { id: 3, from: 'City B', to: 'City C', date: '2023-06-21', seats: 8 },
    ];
    
    // Filter available buses based on user input
    var availableBuses = buses.filter(function(bus) {
      return bus.from === from && bus.to === to && bus.date === date && bus.seats >= passengers;
    });
    
    if (availableBuses.length > 0) {
      // Display available buses
      var resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '<h3>Available Buses:</h3>';
      
      var ul = document.createElement('ul');
      
      availableBuses.forEach(function(bus) {
        var li = document.createElement('li');
        li.innerText = 'Bus ID: ' + bus.id + ', Seats Available: ' + bus.seats;
        ul.appendChild(li);
      });
      
      resultsDiv.appendChild(ul);
      
      // Show results div
      resultsDiv.style.display
  
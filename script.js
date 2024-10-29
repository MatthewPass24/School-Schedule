$(document).ready(function () {
    
    const scheduleUrl = 'https://api.npoint.io/b933780fce6871f9856e'
    
    const bellSchedule = {
        1: { start: '8:24 AM', end: '9:31 AM'},
        2: { start: '9:36 AM', end: '10:43 AM'},
        3: { start: '8:24 AM', end: '11:55 AM'},
        4: { start: '12:00 PM', end: '12:35 PM'},
        5: { start: '1:41 PM', end: '1:48 PM'},
        6: { start: '1:53 PM', end: '3:00 PM'},
    }
$('#submitDay').on('click', function (event) {
        let selectedDay = $('#dayInput').val().toUpperCase();
        
        if (selectedDay != "A" && selectedDay != "B" && selectedDay != "C" && selectedDay != "D" && selectedDay != "E" && selectedDay != "F" && selectedDay != "G") {
            alert("Please enter a valid letter from A to G");
        } else {
                $.ajax({
                    type: "GET",
                    url: "https://api.npoint.io/b933780fce6871f9856e",
                    success: function (data) {
                        let schedule = data.schedule.filter(classItem =>
                            classItem.days.includes(selectedDay)
                        )
                        let htmlString = '<tr>'
                        schedule.forEach(classItem => {
                            htmlString += `<td> ${classItem.period}</td>
                                            <td> ${classItem.time}</td>
                                            <td> ${classItem.class}</td>`
                                            
                            console.log(htmlString)
                        }
                        )
                    }
                });

        }
    })

})

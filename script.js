$(document).ready(function () {
    
    const scheduleUrl = 'https://api.npoint.io/b933780fce6871f9856e'

    const dailySchedule = {
        A: [1, 2, 3, 'Lunch', 5, 6],
        B: [4, 1, 2, 'Lunch', 7, 5],
        C: [3, 4, 1, 'Lunch', 6, 7],
        D: [2, 3, 4, 'Lunch', 5, 6],
        E: [1, 2, 3, 'Lunch', 7, 5],
        F: [4, 1, 2, 'Lunch', 6, 7],
        G: [3, 4, 7, 'Lunch', 5, 6],

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
                    );


                    $('#scheduleList').empty();
                    let htmlString = '';

                    // Iterate over the daily schedule and build the output
                    dailySchedule[selectedDay].forEach(period => {
                        if (period === 'Lunch') {
                            htmlString += `<tr>
                                <td>${period}</td>
                                <td>Lunch</td>
                                <td>N/A</td>
                                <td>Cafe</td>
                            </tr>`;
                        } else {
                            let classItem = schedule.find(item => item.period === period);
                            if (classItem) {
                                htmlString += `<tr>
                                    <td>${classItem.period}</td>
                                    <td>${classItem.class}</td>
                                    <td>${classItem.teacher}</td>
                                    <td>${classItem.room}</td>
                                </tr>`;
                            }
                        }
                    });

                    $("#scheduleList").append(htmlString);
                },
                error: function () {
                    alert("Failed to fetch the schedule. Please try again later.");
                }
            });
        }
    });

})

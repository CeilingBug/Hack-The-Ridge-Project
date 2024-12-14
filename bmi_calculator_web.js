// JavaScript Code for BMI Calculator

// Add event listeners after the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get references to HTML elements
    const form = document.getElementById('bmiForm');
    const metricRadio = document.getElementById('rbMetric');
    const imperialRadio = document.getElementById('rbImperial');
    const height1Label = document.getElementById('lblHeight1');
    const height2Label = document.getElementById('lblHeight2');
    const height2Input = document.getElementById('txtHeight2');
    const weightLabel = document.getElementById('lblWeight');
    const height1Input = document.getElementById('txtHeight1');
    const weightInput = document.getElementById('txtWeight');
    const bmiOutput = document.getElementById('txtBMI');

    // Initialize the form to Metric
    metricRadio.checked = true;
    toggleInputFields();

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        try {
            const isMetric = metricRadio.checked;
            const height1 = parseFloat(height1Input.value);
            const weight = parseFloat(weightInput.value);

            if (isNaN(height1) || isNaN(weight) || height1 <= 0 || weight <= 0) {
                throw new Error("Please input valid positive numbers.");
            }

            let bmi;

            if (isMetric) {
                const heightMeters = height1 / 100;
                bmi = weight / (heightMeters * heightMeters);
            } else {
                const height2 = parseFloat(height2Input.value);

                if (isNaN(height2) || height2 < 0) {
                    throw new Error("Please input valid positive numbers.");
                }

                const heightCm = height1 * 30.48 + height2 * 2.54;
                const heightMeters = heightCm / 100;
                const weightKg = weight / 2.2;
                bmi = weightKg / (heightMeters * heightMeters);
            }

            bmi = Math.round(bmi * 10000) / 10000; // Round to 4 decimal places
            bmiOutput.value = bmi;

        } catch (error) {
            alert(error.message);
            clearFields();
        }
    });

    // Event listener for radio button changes
    metricRadio.addEventListener('change', toggleInputFields);
    imperialRadio.addEventListener('change', toggleInputFields);

    // Event listener for clear button
    document.getElementById('btnClear').addEventListener('click', clearFields);

    // Function to toggle input fields based on selected unit system
    function toggleInputFields() {
        if (metricRadio.checked) {
            height1Label.textContent = "Height (cm):";
            height2Label.style.display = 'none';
            height2Input.style.display = 'none';
            weightLabel.textContent = "Weight (kg):";
        } else {
            height1Label.textContent = "Height (ft):";
            height2Label.style.display = 'inline-block';
            height2Input.style.display = 'inline-block';
            weightLabel.textContent = "Weight (lbs):";
        }
    }

    // Function to clear all input and output fields
    function clearFields() {
        height1Input.value = '';
        height2Input.value = '';
        weightInput.value = '';
        bmiOutput.value = '';
    }

});

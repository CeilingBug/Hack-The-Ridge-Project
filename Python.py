#Python file to convert to script
from flask import Flask, render_template, request
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('bmi_calculator.html')

@app.route('/calculate', methods=['POST'])
def calculate_bmi():
    try:
        unit_system = request.form['unit']
        height1 = float(request.form['height1'])
        weight = float(request.form['weight'])

        if unit_system == 'metric':
            height_meters = height1 / 100
            bmi = weight / (height_meters ** 2)
        elif unit_system == 'imperial':
            height2 = float(request.form['height2'])
            height_cm = height1 * 30.48 + height2 * 2.54
            weight_kg = weight / 2.2
            height_meters = height_cm / 100
            bmi = weight_kg / (height_meters ** 2)
        else:
            return "Invalid unit system", 400

        bmi = round(bmi, 4)
        return render_template('bmi_calculator.html', bmi=bmi, error=None)

    except ValueError:
        return render_template('bmi_calculator.html', bmi=None, error="Please input valid numbers.")

if __name__ == '__main__':
    app.run(debug=True)

select (home_loan_payment + car_loan_payment + land_loan_payment + stocks_loan_payment + boat_loan_payment + recreational_vehicles_loan_payment + credit_card_loan_payment + student_debt_loan_payment + medical_expenses_payment +   
home_car_insurance_payment + utilities_payment + cable_payment + phone_payment + entertainment_payment + food_payment + clothing_payment + rental_loan_payment) as total_expenses
from budget
where user_name_id = $1

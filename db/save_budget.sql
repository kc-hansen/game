update budget
set

home_loan_payment = $2,
rental_loan_payment = $3,
car_loan_payment = $4,
land_loan_payment = $5,
stocks_loan_payment = $6,
boat_loan_payment = $7,
recreational_vehicles_loan_payment = $8,
credit_card_loan_payment = $9,
student_debt_loan_payment = $10,
medical_expenses_payment = $11,
home_car_insurance_payment = $12,
Utilities_payment = $13,
cable_payment = $14,
phone_payment = $15,
entertainment_payment = $16,
food_payment = $17,
clothing_payment = $18,
internet_payment = $19

where user_name_id = $1;

update liabilities
set

home_loan = $2,
rental_loan = $3,
car_loan = $4,
land_loan = $5,
stocks_loan = $6,
boat_loan = $7,
recreational_vehicles_loan = $8,
credit_card_loan = $9,
student_debt_loan = $10,
medical_expenses = $11

where user_name_id = $1;











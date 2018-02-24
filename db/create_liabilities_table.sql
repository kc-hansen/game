create table if not exists liabilities (
    id serial primary key,
    user_name_id int,
    home_loan int,
    rental_loan int,
    car_loan int,
    land_loan int,
    stocks_loan int,
    boat_loan int,
    recreational_vehicles_loan int,
    pokemon_cards_loan int,
    credit_card_loan int,
    student_debt_loan int, 
    medical_expenses int
)
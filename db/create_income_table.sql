create table if not exists income (
    id serial primary key,
    user_name_id int,
    job_income int,
    rental_income int,
    royalty_income int,
    pension_income int,
    social_security_income int,
    interest_income int,
    prize_income int,
    inheritance int
)
select budget.rental_loan, income.rental_income, liabilities.rental_loan
from assets
where user_name_id = $1
inner join assets
on (select rental_income from income )
on (select rental_loan_payment from budget)
on (select rental_loan from liabilities)
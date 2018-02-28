select (job_income +
rental_income + 
royalty_income +
pension_income +
social_security_income +
interest_income) as total_income
from income
where user_name_id = $1
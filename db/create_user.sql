insert into user_name
(user_name , img, auth_id)
values
($1, $2, $3)
RETURNING*;
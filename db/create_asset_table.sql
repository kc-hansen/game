create table if not exists assets (
    id serial primary key,
    user_name_id int,
    cash int,
    home int,
    rental int,
    car int,
    land int,
    stocks int,
    boat int,
    recreational_vehicles int,
    pokemon_cards int
)
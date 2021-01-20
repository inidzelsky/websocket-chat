create table users (
    username varchar(25),
    avatar varchar(255),
    status text,
    primary key(username)
);

create table bots (
    name varchar(25),
    avatar varchar(255),
    status text,
    primary key(name)
)

create table messages (
    id serial,
    sender varchar(25),
    receiver varchar(25),
    content text,
    send_time timestamp,
    primary key(id),
    constraint diff_sender_receiver
        check (sender != receiver)
);

insert into bots (name, avatar, status) values
    ('Echo bot', 'echobot.png', 'Are you so lonly?'),
    ('Reverse bot', 'reversebot.png', 'Too much "TENET"'),
    ('Spam bot', 'spambot.png', '...'),
    ('Ignore bot', 'ignorebot.png', 'Introvert')

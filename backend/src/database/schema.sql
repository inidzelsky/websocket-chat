create table users (
    username varchar(25),
    avatar varchar(255),
    status text,
    primary key(username)
);

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

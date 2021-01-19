create table users (
    username varchar(25) primary key,
    avatar varchar(255)
);

create table messages (
    id serial,
    sender varchar(25),
    receiver varchar(25),
    content text,
    send_time timestamp,
    primary key(id),
    constraint fk_sender
        foreign key(sender)
            references users(username),
    constraint fk_receiver
        foreign key(receiver)
            references users(username),
    constraint diff_sender_receiver
        check (sender != receiver)
);

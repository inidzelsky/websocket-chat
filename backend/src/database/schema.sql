create table users (
    id serial primary key,
    username varchar(25) unique not null
);

create table messages (
    id serial,
    sender int,
    receiver int,
    content text,
    send_time timestamp,
    primary key(id),
    constraint fk_sender
        foreign key(sender)
            references users(id),
    constraint fk_receiver
        foreign key(receiver)
            references users(id),
    constraint diff_sender_receiver
        check (sender != receiver)
);

create table if not exists enderecos (
       endereco_id serial ,
       rua varchar (255) not null ,
       numero int not null ,
       complemento varchar (255) default null ,
       constraint pk_endereco primary key (endereco_id)
);

create table if not exists clientes (
       cliente_id serial ,
       nome varchar (255) not null ,
       sobrenome varchar (255) not null ,
       rg varchar (20) unique not null ,
       cpf varchar (20) unique not null ,
       endereco_id int not null ,
       constraint pk_cliente primary key (cliente_id) ,
       constraint fk_cliente_endereco foreign key (endereco_id) references endereco (endereco_id)
);

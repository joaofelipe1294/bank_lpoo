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

create table if not exists tipos_conta (
       tipo_conta_id serial ,
       nome varchar (255) ,
       constraint pk_tipos_de_conta primary key (tipo_conta_id)
);

create table if not exists contas (
       conta_id serial ,
       cliente_id integer ,
       tipo_conta_id integer ,
       saldo numeric (14,2) default 0 ,
       deposito_inicial numeric (14 , 2) default null ,
       limite numeric (14 , 2) default null ,
       montante_minimo numeric (14 , 2) default null ,
       depositoMinimo numeric (14 , 2) default null ,
       constraint pk_contas primary key (conta_id) ,
       constraint fk_conta_tipo foreign key (tipo_conta_id) references tipos_conta (tipo_conta_id) ,
       constraint fk_conta_cliente foreign key (cliente_id) references clientes (cliente_id)
);

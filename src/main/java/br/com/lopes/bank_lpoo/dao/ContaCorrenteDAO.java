/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.dao;

import br.com.lopes.bank_lpoo.beans.ContaCorrente;
import br.com.lopes.bank_lpoo.conexao.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;

/**
 *
 * @author joaofelipe
 */
public class ContaCorrenteDAO {
    
    public void cadastra(ContaCorrente conta){
        String sql = "INSERT INTO contas (cliente_id , tipo_conta_id , deposito_inicial , limite) VALUES (? , ? , ? , ?);";
        try (Connection con = new ConnectionFactory().getConnection()){
            con.setAutoCommit(false);
            try (PreparedStatement stmt = con.prepareStatement(sql)){
                stmt.setLong(1, conta.getCliente().getClienteId());
                stmt.setLong(2, conta.getTipoConta().getTipoContaId());
                stmt.setDouble(3, conta.getDepositoInicial());
                stmt.setDouble(4, conta.getLimite());
                stmt.execute();
                con.commit();
            } catch (Exception e) {
                con.rollback();
                e.printStackTrace();
                throw new RuntimeException();
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        }
    }
    
}

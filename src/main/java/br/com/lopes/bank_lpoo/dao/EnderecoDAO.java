/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.dao;

import br.com.lopes.bank_lpoo.beans.Endereco;
import br.com.lopes.bank_lpoo.conexao.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author joaofelipe
 */
public class EnderecoDAO {
    
    public Endereco cadastra(Endereco endereco){
        String sql = "INSERT INTO endereco (rua , numero , complemento ) VALUES (? , ? , ?);";
        try (Connection con = new ConnectionFactory().getConnection()){
            con.setAutoCommit(false);
            try (PreparedStatement stmt = con.prepareStatement(sql , Statement.RETURN_GENERATED_KEYS)){
                stmt.setString(1, endereco.getRua());
                stmt.setInt(2, endereco.getNumero());
                stmt.setString(3, endereco.getComplemento());
                stmt.execute();
                try (ResultSet rs = stmt.getGeneratedKeys()){
                    if(rs.next()){
                        con.commit();
                        endereco.setEnderecoId(rs.getLong("endereco_id"));
                        return endereco;
                    }else{
                        throw new RuntimeException();
                    }
                    
                } catch (Exception e) {
                    con.rollback();
                    throw new RuntimeException();
                }
            } catch (Exception e) {
                con.rollback();
                throw new RuntimeException();
            }
        } catch (Exception e) {
            throw new RuntimeException();
        }
    }
    
}

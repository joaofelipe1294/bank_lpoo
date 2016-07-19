/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.dao;

import br.com.lopes.bank_lpoo.beans.TipoConta;
import br.com.lopes.bank_lpoo.conexao.ConnectionFactory;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author joaofelipe
 */
public class TipoContaDAO {
    
    public List<TipoConta> lista(){
        String sql = "select tipo_conta_id ,\n" +
                     "       nome\n" +
                     "from tipos_conta";
        try (Connection con = new ConnectionFactory().getConnection()){
            try (PreparedStatement stmt = con.prepareStatement(sql)){
                try (ResultSet rs = stmt.executeQuery()){
                    List<TipoConta> listaTiposConta = new ArrayList<>();
                    while(rs.next()){
                        TipoConta tipoConta = new TipoConta();
                        tipoConta.setTipoContaId(rs.getLong("tipo_conta_id"));
                        tipoConta.setNome(rs.getString("nome"));
                        listaTiposConta.add(tipoConta);
                    }
                    return listaTiposConta;
                } catch (Exception e) {
                    e.printStackTrace();
                    throw new RuntimeException();
                }
            } catch (Exception e) {
                e.printStackTrace();
                throw new RuntimeException();
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        }
    }
    
}

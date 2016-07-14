/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.dao;

import br.com.lopes.bank_lpoo.beans.Endereco;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author joaofelipe
 */
public class EnderecoDAOTest {
    
    public EnderecoDAOTest() {
    }

    /**
     * Test of cadastra method, of class EnderecoDAO.
     *
    @Test
    public void testCadastra() {
        Endereco endereco = new Endereco();
        endereco.setRua("Marte");
        endereco.setNumero(456);
        endereco.setComplemento("Yo maaaan");
        try {
            endereco = new EnderecoDAO().cadastra(endereco);
            assertNotNull(endereco.getEnderecoId());
            System.out.println("Novo id : " + endereco.getEnderecoId());
        } catch (Exception e) {
            e.printStackTrace();
            fail();
        }
    }*/

    /**
     * Test of lista method, of class EnderecoDAO.
     */
    @Test
    public void testLista() {
        System.out.println(new EnderecoDAO().lista());
    }
    
}

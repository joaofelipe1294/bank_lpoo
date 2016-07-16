/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.dao;

import br.com.lopes.bank_lpoo.beans.Cliente;
import br.com.lopes.bank_lpoo.beans.Endereco;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author joaofelipe
 */
public class ClienteDAOTest {
    
    public ClienteDAOTest() {
    }

    /**
     * Test of cadastra method, of class ClienteDAO.
     *
    @Test
    public void testCadastra() {
        Cliente cliente = new Cliente();
        cliente.setNome("Anderson");
        cliente.setSobrenome("Silva");
        cliente.setRg("999999999");
        cliente.setCpf("888888888");
        Endereco endereco = new Endereco();
        endereco.setRua("Florida");
        endereco.setNumero(425);
        endereco.setComplemento("Apto 609");
        cliente.setEndereco(endereco);
        try {
            cliente = new ClienteDAO().cadastra(cliente);
            System.out.println("Cliente id : " + cliente.getClienteId());
            assertTrue(true);
        } catch (Exception e) {
            e.printStackTrace();
            fail();
        }
    }*/

    /**
     * Test of lista method, of class ClienteDAO.
     *
    @Test
    public void testLista() {
        System.out.println(new ClienteDAO().lista());
    }


    /**
     * Test of pegaPorNome method, of class ClienteDAO.
     */
    @Test
    public void testPegaPorNome() {
        Cliente cliente = new Cliente();
        cliente.setRg("8");
        System.out.println(new ClienteDAO().pegaPorRg(cliente));
    }
    
}

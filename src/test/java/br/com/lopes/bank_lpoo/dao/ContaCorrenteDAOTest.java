/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.dao;

import br.com.lopes.bank_lpoo.beans.Cliente;
import br.com.lopes.bank_lpoo.beans.ContaCorrente;
import br.com.lopes.bank_lpoo.beans.TipoConta;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author joaofelipe
 */
public class ContaCorrenteDAOTest {
    
    public ContaCorrenteDAOTest() {
    }

    /**
     * Test of cadastra method, of class ContaCorrenteDAO.
     */
    @Test
    public void testCadastra() {
        Cliente cliente = new Cliente();
        cliente.setClienteId(3);
        TipoConta tipoConta = new TipoConta();
        tipoConta.setTipoContaId(1);
        ContaCorrente conta = new ContaCorrente();
        conta.setCliente(cliente);
        conta.setTipoConta(tipoConta);
        conta.setLimite(14);
        conta.setDepositoInicial(150);
        try {
            new ContaCorrenteDAO().cadastra(conta);
            assertTrue(true);
        } catch (Exception e) {
            e.printStackTrace();
            fail();
        }
    }
    
}

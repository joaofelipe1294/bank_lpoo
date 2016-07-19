/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.dao;

import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author joaofelipe
 */
public class TipoContaDAOTest {
    
    public TipoContaDAOTest() {
    }

    /**
     * Test of lista method, of class TipoContaDAO.
     */
    @Test
    public void testLista() {
        System.out.println(new TipoContaDAO().lista());
    }
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.beans;

/**
 *
 * @author joaofelipe
 */
public class ContaCorrente extends Conta{
    private double depositoInicial;
    private double limite;

    public double getDepositoInicial() {
        return depositoInicial;
    }

    public void setDepositoInicial(double depositoInicial) {
        this.depositoInicial = depositoInicial;
    }

    public double getLimite() {
        return limite;
    }

    public void setLimite(double limite) {
        this.limite = limite;
    }

    @Override
    public String toString() {
        return "ContaCorrente{" + super.toString() + "depositoInicial=" + depositoInicial + ", limite=" + limite + '}';
    }

    
    
}

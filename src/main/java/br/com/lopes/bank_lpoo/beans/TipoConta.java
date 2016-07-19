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
public class TipoConta {
    private long tipoContaId;
    private String nome;

    public long getTipoContaId() {
        return tipoContaId;
    }

    public void setTipoContaId(long tipoContaId) {
        this.tipoContaId = tipoContaId;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "TipoConta{" + "tipoContaId=" + tipoContaId + ", nome=" + nome + '}';
    }
    
}

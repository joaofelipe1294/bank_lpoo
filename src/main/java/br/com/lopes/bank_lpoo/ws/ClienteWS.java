/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.ws;

import br.com.lopes.bank_lpoo.beans.Cliente;
import br.com.lopes.bank_lpoo.dao.ClienteDAO;
import com.google.gson.Gson;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author joaofelipe
 */
@Path("cliente")
public class ClienteWS {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ClienteWS
     */
    public ClienteWS() {
    }

    @GET
    @Produces("application/json")
    public Response getJson() {
        try {
            List<Cliente> listaClientes = new ClienteDAO().lista();
            String json = new Gson().toJson(listaClientes);
            return Response.ok(json).build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
        
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response cadastra(Cliente cliente){
        try {
            cliente = new ClienteDAO().cadastra(cliente);
            return Response.ok(cliente).build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("nome={nome}")
    public Response pegaPorNome(@PathParam("nome") String nome){
        try {
            Cliente cliente = new Cliente();
            cliente.setNome(nome);
            List<Cliente> listaClientes = new ClienteDAO().pegaPorNome(cliente);
            String json = new Gson().toJson(listaClientes);
            return Response.ok(json).build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("sobrenome={sobrenome}")
    public Response pegaPorSobrenome(@PathParam("sobrenome") String sobrenome){
        try {
            Cliente cliente = new Cliente();
            cliente.setSobrenome(sobrenome);
            List<Cliente> listaClientes = new ClienteDAO().pegaPorSobrenome(cliente);
            String json = new Gson().toJson(listaClientes);
            return Response.ok(json).build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("rg={rg}")
    public Response pegaPorRg(@PathParam("rg") String rg){
        try {
            Cliente cliente = new Cliente();
            cliente.setRg(rg);
            List<Cliente> listaClientes = new ClienteDAO().pegaPorRg(cliente);
            String json = new Gson().toJson(listaClientes);
            return Response.ok(json).build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("cpf={cpf}")
    public Response pegaPorCpf(@PathParam("cpf") String cpf){
        try {
            Cliente cliente = new Cliente();
            cliente.setCpf(cpf);
            List<Cliente> listaClientes = new ClienteDAO().pegaPorCpf(cliente);
            String json = new Gson().toJson(listaClientes);
            return Response.ok(json).build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("id={id}")
    public Response pegaPorClienteId(@PathParam("id") long clienteId){
        try {
            Cliente cliente = new Cliente();
            cliente.setClienteId(clienteId);
            cliente = new ClienteDAO().pegaPorClienteId(cliente);
            String json = new Gson().toJson(cliente);
            return Response.ok(json).build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response edita(Cliente cliente){
        try {
            new ClienteDAO().edita(cliente);
            return Response.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
}

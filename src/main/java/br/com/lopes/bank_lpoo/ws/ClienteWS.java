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
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
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
    public Response pega(@PathParam("nome") String nome){
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
}

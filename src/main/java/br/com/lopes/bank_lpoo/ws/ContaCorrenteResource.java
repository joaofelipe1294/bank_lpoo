/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.lopes.bank_lpoo.ws;

import br.com.lopes.bank_lpoo.beans.ContaCorrente;
import br.com.lopes.bank_lpoo.dao.ContaCorrenteDAO;
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
@Path("contaCorrente")
public class ContaCorrenteResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ContaCorrenteResource
     */
    public ContaCorrenteResource() {
    }

    /**
     * Retrieves representation of an instance of br.com.lopes.bank_lpoo.ws.ContaCorrenteResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces("application/json")
    public String getJson() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of ContaCorrenteResource
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
     */
    @PUT
    @Consumes("application/json")
    public void putJson(String content) {
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cadastra(ContaCorrente conta){
        try {
            new ContaCorrenteDAO().cadastra(conta);
            return Response.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
        
    }
}

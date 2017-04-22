/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//https://dev.socrata.com/foundry/health.data.ny.gov/fnz6-znd6
//http://gcoch.github.io/D3-tutorial/diagrama-barras.html
//<div id="div1"></div>
        //<div id="vizcontainer">
          //  <svg style="width:415px;height:280px;border:1px lightgray solid;" />
        //</div>

$("#boton1").click(function (){
    var w = 460;
    var h = 280;
    var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
    

   
   
    d3.json("https://health.data.ny.gov/resource/fnz6-znd6.json",function(data) {
    console.log(data);
    var valores=[];
    valores.push(0);
for(i=1;i<10;i++){
    valores.push(data[i].deaths);
}
    
    //Funciones basicas
    parseInt("77");
    parseFloat("3.14");
    var titulo=data[1].region_description; 
    svg.selectAll("rect")
    .data(valores)
    .enter()
    .append("rect")
    .attr("width", 44)
    .attr("height", function(d) {return d})
    .style("fill", "brown")
    
    //.style("opacity", .25)
    .attr("x", function(d,i) {return i * 46;})
    .attr("y", function(d) {return 280 - d/200;});
    
    //alert("Me has presionado!!");
    svg.selectAll("text")
    .data(valores)
    .enter()
    .append("text") 
    .text(function(d) {
    return d;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("x", function(d, i) {
    return (i * 46)+3;
    })
    .attr("y", function(d) {
    return (280 - d/200)+8;
    })
    
    
    });
    
    
    
    
});


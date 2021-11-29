//I haven't cover tables yet, but let's use some code from stack overflow to make this into a table.
document.write("<center><table border='3px'>");
for(let c = 1; c <11; c++) {
    document.write("<tr style='height:20px'");
    for(let d = 1; d < 11; d++) {
        document.write("<td style='width:110px'><center><font size='4'>" + c + ' x ' + d + ' = ' + c*d +"</font></center></td>");
    }
} 
document.write("</table></center>");
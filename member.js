function skillsMember() 
{
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    var member = member.trim();
    var member = member.replace(/\s+/g, '');
    var member = member.replace(/[^a-zA-Z ]/g, "");
    var member = member.replace(/\s+/g, '');
    var member = member.replace(/[^a-zA-Z ]/g, "");
}

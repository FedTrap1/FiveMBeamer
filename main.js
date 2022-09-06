/*   
  Project by Fed Trap 
  https://github.com/FedTrap1/FiveMBeamer 
*/
$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("hey retard, you're missing something");
            return false;
        }
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
});

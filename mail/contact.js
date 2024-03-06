$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            

            $this = $("#sendMessageButton");

            
                
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    $('#success > .alert-success')
                            .append(name+"<strong>, Opening Mail App to Send Message!. </strong>");
                    $('#success > .alert-success')
                            .append('</div>');
                    
            // Encode values for safe inclusion in the URL
            const Name = encodeURIComponent(name);
            const Next = encodeURIComponent(",\n");
            const Content = encodeURIComponent(":\n");
            const Mail = encodeURIComponent(email);        
    const Subject = encodeURIComponent(subject);
    const Body = encodeURIComponent(message);
  
    // Construct the mailto link
    const mailtoLink = `mailto:mjohnmilton41@gmail.com?subject=${Subject}&body=From${Content}${Name}${Next}${Mail}${Next}Content${Content}${Body}`;
  
    // Open the email client
    window.location.href = mailtoLink;
                
                   
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});

function sendMail() {
    const yourMessage = document.getElementById('message').value;
    const subject = document.getElementById('selectList').value;
  
    // Encode values for safe inclusion in the URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(yourMessage);
  
    // Construct the mailto link
    const mailtoLink = `mailto:mjohnmilton41@gmail.com?subject=${subject}&body=${message}`;
  
    // Open the email client
    window.location.href = mailtoLink;
  }

$(&quot;.close&quot;).click(function(){
    document.getElementById("contactForm").reset();
}
  

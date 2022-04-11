document.getElementById("but").addEventListener("click", async function(e) {
  e.preventDefault();
      const rawResponse = await fetch('/', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({projname:document.getElementById('projname').value,roll:document.getElementById('roll').value,sem:document.getElementById('sem').value,projdet:document.getElementById('projdet').value,tech:document.getElementById('tech').value})

      });
      const content = await rawResponse.json();
      if(content.msg=="success")
      {
          alert("Project Added Successfully!")
          window.location.href="/";
      }
      else
      {
          alert("Failed! try again!")
          window.location.href="/";
      }
      console.log(content);


})

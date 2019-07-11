export function parseNotif(type,user){

  if(type=="request"){
    return `@${user} sent you a request`
  }
  else if (type==="accept") {
    return `@${user} accepted your request`
  }
  else if (type==="decline") {
    return `@${user} declined your request`
  } else{
    return `@${user} cancelled your reservation`
  }

}

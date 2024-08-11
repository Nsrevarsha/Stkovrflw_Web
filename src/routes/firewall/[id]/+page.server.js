
export const load = async (event) => {
  const {params} = event
  const slug = params.id

  const {pb} = event.locals
  const dat = await pb.collection("firewalls").getOne(slug)

  return {
    data: dat
  }
  
}

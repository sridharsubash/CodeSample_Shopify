const Siblings = {

  init: () => {
    if(sessionStorage.getItem(`siblings_${window.siblingStorage}`)){
      window.siblings = JSON.parse(sessionStorage.getItem(`siblings_${window.siblingStorage}`))
      _n.trigger(window,'siblings:loaded',false, true)
      _n.trigger(window,'siblings:allLoaded',false, true)
    } else {
      Siblings.get().then(s=>{
        //console.log('all siblings loaded')
        window.siblings = s; 
        sessionStorage.setItem(`siblings_${window.siblingStorage}`, JSON .stringify(s))
        _n.trigger(window,'siblings:allLoaded',false, true)
      })
    }
  },
  get: (page=1) => {
    window.siblings = window.siblings || {}
    return new Promise((res, rej) => {
      fetch(`/collections/all?view=siblings&page=${page}`).then(r=>r.json()).then(all => {      
        all.forEach(p=>{
            if(!siblings[p.family]) siblings[p.family] = [];
            siblings[p.family].push(p)
        })
        //console.log('all',all.length)
        siblings = _n.filter(siblings, set => set.length > 1)

        _n.trigger(window,'siblings:loaded',false, true)
        
        if(all.length==1000){
          Siblings.get(++page).then(()=>{res(siblings)})
          return
        }
        res(siblings)
      })
    })
    
  }
}

export default Siblings; 
const applypostCltr={}
applypostCltr.list=async(req,res)=>{
    try{
        const applypost=await Apply.find()
        res.json(applypost)
    }
    catch(err){
        res.status(500).json({err:'something went wrong'})
    }
}
applypostCltr.post=async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()})
    }
    const body =req.body;
    try{
        const applypost=await Apply.create(body)
        res.status(201).json(applypost)
    }
    catch(err){
        res.status(500).json(error:{"something went wrong"})
    }



}
applypostCltr.update=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()})
    }
    const id=req.params.id;
    const body=req.body;
    try{
        const applypost=await Apply.findBYIDANDUPDATE(id,body,{new,true,runValidators:true})
        if(!applypost){
            return res.status(404).json({error:"record not found"})
        }
    }
    catch(err){
        res.status(500).json({error:'something went wrong'})
    }
}
applypostCltr.remove=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()})
    }
    const id =req.params.id;
    const body=req.body;
    try{
        const applypost=await Apply.findBYIDANDDELETE(id)
        if(!applypost){
            return res.status(404).json({error:"record not found"})
        }
        res.json(applypost)
    }
    catch(err){
        res.status(500).json({error:"something went wrong"})
    }
}
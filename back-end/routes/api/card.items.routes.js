const {Router}=require('express')
const product =require('../../models/Product')
const auth=require('../middleware/auth.middleware')
const router = Router()




router.post('/generate/:id', auth, async(req, res) =>{
try {
    const {title, description}=req.body
     const candidate =await product.findOne({title});
    if(candidate){
        return res.status(400).json({message: 'This item already exists'})
    }
    const newItem = new product({
        title,description,owner:req.user.userId
    });
    await newItem.save()
    res.status(201).json({newItem})

}catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
})


router.get('/', auth, async(req, res) =>{
try{
    const items=await product.find({owner: req.user.userId})
    res.json(items)
} catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
});


router.get('/:id', auth, async(req, res) =>{
try{
    const item=await product.findById(req.params.id)
    res.json(item)
} catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
});


module.exports=router
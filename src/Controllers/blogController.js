exports.create = async(req,res)=>{
    res.status(200).json({
        "status" :"success",
        "data":"blog  has been created"
    });
}


exports.read= async (req,res)=>{
    res.status(200).json({
        "status" :"success",
        "data":"blog  has been read"
    });
}

exports.delete= async (req,res)=>{
    res.status(200).json({
        "status" :"success",
        "data":"blog  has been deleted"
    });
}

exports.update= async (req,res)=>{
    res.status(200).json({
        "status" :"success",
        "data":"blog  has been updated"
    });
}
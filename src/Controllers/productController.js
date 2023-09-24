
exports.create= async (req,res)=>{
    res.status(200).json({
        "status" :"success",
        "data":"product  has been created"
    });
}

exports.read= async (req,res)=>{
    res.status(200).json({
        "status" :"success",
        "data":"product  has been read"
    });
}

exports.delete= async (req,res)=>{
    res.status(200).json({
        "status" :"success",
        "data":"product  has been deleted"
    });
}

exports.update= async (req,res)=>{
    res.status(200).json({
        "status" :"success",
        "data":"product  has been updated"
    });
}
const Posting=require('./Posting');
const Comment=require('./Comment');
const User=require('./User');
// Comment.belongsTo(User);
// Comment.belongsTo(Posting);
Posting.belongsTo(User,{
    foreignKey:"user_id"
});


User.hasMany(Posting,{
    foreignKey:"user_id",
    onDelete:"CASCADE"

});

Posting.hasOne(Comment,{
    foreignKey:"post_id"
});




Comment.belongsTo(Posting,{
    foreignKey:"post_id"
});

User.hasMany(Posting,{
    foreignKey:"user_id",
    onDelete:"CASCADE"
})
User.hasOne(Comment,{
    foreignKey:"user_id",
    onDelete:"CASCADE"

});

module.exports={User,Posting,Comment}



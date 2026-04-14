db.alunos.find().pretty();

db.alunos.find({ "curso": "ADS" }).pretty();

db.alunos.find({ "idade": { $gt: 21 } }).pretty();

db.alunos.updateOne(
  { "nome": "João Silva" },
  { $set: { "idade": 21 } }
);

db.alunos.updateOne(
  { "nome": "João Silva" },
  { $push: { "notas": 10 } }
);

db.alunos.aggregate([{$project: {nome: 1, media: { $avg: "$notas" }}}]);

db.alunos.aggregate([{$group: { _id: "$curso",quantidade_alunos: { $sum: 1 }}}]);
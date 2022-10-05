const ServiceProviderModel = require('../../models/ServiceProvider/ServiceProviderModel');

exports.CreateServiceProvider = (req, res) => {
  let itemBody = req.body;

  console.log('item body', itemBody);
  res.status(200).json({ status: 'success,' });
  // ServiceProviderModel.ServiceProviderSchema.create(itemBody, (err, data) => {
  //   if (err) {
  //     res.status(400).json({ status: 'fail,', data: err });
  //   } else {
  //     console.log(data);
  //     res.status(200).json({ status: 'success,', data: data });
  //   }
  // });

  // if (id === itemBody.addedById) {
  //   console.log('id and addedById matched');
  //   ItemsModel.ItemsSchema.create(itemBody, (err, data) => {
  //     if (err) {
  //       res.status(400).json({ status: 'fail,', data: err });
  //     } else {
  //       console.log(data);
  //       res.status(200).json({ status: 'success,', data: data });
  //     }
  //   });
  // } else {
  //   console.log('id and addedById did not match');
  //   res.status(400).json({ status: 'fail,', data: 'Not a proper user' });
  // }
};

// exports.CreateItem = (req, res) => {
//   let itemBody = req.body;
//   let id = req.params.id;

//   console.log(itemBody, id, itemBody.addedById);

//   if (id === itemBody.addedById) {
//     console.log('id and addedById matched');
//     ItemsModel.ItemsSchema.create(itemBody, (err, data) => {
//       if (err) {
//         res.status(400).json({ status: 'fail,', data: err });
//       } else {
//         console.log(data);
//         res.status(200).json({ status: 'success,', data: data });
//       }
//     });
//   } else {
//     console.log('id and addedById did not match');
//     res.status(400).json({ status: 'fail,', data: 'Not a proper user' });
//   }
// };

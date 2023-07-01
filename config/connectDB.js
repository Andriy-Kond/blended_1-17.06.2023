const { connect } = require("mongoose");
// connect('mongodb://127.0.0.1:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// mongodb + srv://taya:qwe123@ihor-goit.rbq4qa0.mongodb.net/
// db_cars ? retryWrites = true & w=majority

const connectDB = async () => {
  try {
    const db = await connect(process.env.DB_HOST);
    console.log(
      `Data base is connected. Name: ${db.connection.name}. Port: ${db.connection.port}. Host: ${db.connection.host}`
        .green.italic.bold
    );
  } catch (error) {
      console.log(error.message.red.bold)
      process.exit(1)
  }
};

module.exports = connectDB;

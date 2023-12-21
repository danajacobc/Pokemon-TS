const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      isUrl: true,
      //defaultValue: 'https://nintendo.pe/wp-content/uploads/2016/05/HddtBOT-copia.jpg'
   },
   imageShiny: {
      type: DataTypes.STRING,
      isUrl: true,
   },
   hp: { //life
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   speed: {
      type: DataTypes.INTEGER,
   },
   height: {
      type: DataTypes.INTEGER,
   },
   weight: {
      type: DataTypes.DECIMAL,
   },
   isFromAPI: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
   }

  }, { timestamps: false });
};

import Sqlize from 'sequelize';

export default function Model(database) {
    return database.define('participation',
        {
            id: Sqlize.NUMBER,
            firstName: Sqlize.STRING,
            lastName: Sqlize.STRING,
            participation: Sqlize.NUMBER
        }
    )
}
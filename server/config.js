const DATABASE_URL =
    process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'postgresql://localhost/ace-pomodoro';
exports.DATABASE = {
    client: 'pg',
    connection: DATABASE_URL,
    pool: { min: 0, max: 3 },
    debug: true
};
exports.PORT = process.env.PORT || 3001;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
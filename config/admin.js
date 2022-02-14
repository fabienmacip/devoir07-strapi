module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '993104dc192c0af463b1de96debd4c80'),
  },
});

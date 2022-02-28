module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
  /*   keys: ['DATABASE_URL','postgres://pkhfkugjsijrcz:1ce2bcbf451181d3011758f1aa3647ec8d07d3615675a7dec49095f686e4c748@ec2-3-92-119-83.compute-1.amazonaws.com:5432/d8bv7hn8ni2vnc'], */
    keys: env.array('APP_KEYS'),
  },
});

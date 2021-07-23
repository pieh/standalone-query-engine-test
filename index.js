const { GraphQLEngine } = require(`./deps/query-engine`);

const engine = new GraphQLEngine({
  dbPath: process.cwd() + `/deps/datastore`,
});

async function run() {
  const query = `
    {
      allTest( sort: { fields: [nodeNum], order: DESC}, limit: 15, filter: { nodeNum: { lt: 50 }}) {
        nodes {
          nodeNum
          text
        }
        totalCount
      }
    }
  `;
  const result = await engine.runQuery(query);
  console.log(
    require(`util`).inspect(
      { query, ...result },
      { depth: Infinity, colors: true }
    )
  );
}

run();

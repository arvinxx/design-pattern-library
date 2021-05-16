import type { VercelRequest, VercelResponse } from '@vercel/node';

import { firstQuery } from './_airtable';
import { success } from './_utils';

export default async (request: VercelRequest, response: VercelResponse) => {
  const data = await firstQuery();
  if (!data) {
    return;
  }
  console.log(data.map((i) => i.fields));

  response.send(success(data.map((i) => i.fields)));
};

import Airtable from 'airtable';
import { promisify } from 'util';

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });

export const airtable = new Airtable();

export const base = airtable.base(process.env.AIRTABLE_BASE_ID!);

const designPattern = base('设计模式').select({ view: '完整记录', maxRecords: 10 });

export const query = promisify(designPattern.eachPage);
export const firstQuery = promisify(designPattern.firstPage);

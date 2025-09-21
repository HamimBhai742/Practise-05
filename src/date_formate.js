import {  format } from "date-fns";

const date = new Date();
export const formateDate = format(date, 'dd-MM-yyyy');

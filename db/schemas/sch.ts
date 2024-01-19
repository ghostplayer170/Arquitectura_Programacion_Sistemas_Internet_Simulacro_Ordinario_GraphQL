import mongoose from "npm:mongoose@8.0.1";

export type ExampleModelType = 
    & mongoose.Document;

const Schema = mongoose.Schema;

const ExampleSchema = new Schema(
    {
        //code
    }
);

export const ExampleModel = mongoose.model<ExampleModelType>("Example", ExampleSchema);
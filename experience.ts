// Experience Schema
export interface IExperience extends Document {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  description: string;
  technologies: mongoose.Types.ObjectId[];
  order: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const experienceSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  isCurrent: { type: Boolean, default: false },
  description: { type: String, required: true },
  technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  order: { type: Number, required: true },
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Experience = mongoose.model<IExperience>('Experience', experienceSchema);

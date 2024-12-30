// Project Schema
export interface IProject extends Document {
  title: string;
  overview: string;
  description: string;
  technologies: mongoose.Types.ObjectId[];
  type: 'FRONTEND' | 'BACKEND' | 'FULLSTACK';
  image?: string;
  startDate?: Date;
  endDate?: Date;
  status: 'INPROGRESS' | 'COMPLETED';
  live_link?: string;
  github_link?: string;
  order: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  overview: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  type: { type: String, enum: ['FRONTEND', 'BACKEND', 'FULLSTACK'], required: true },
  image: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  status: { type: String, enum: ['INPROGRESS', 'COMPLETED'], required: true },
  live_link: { type: String },
  github_link: { type: String },
  order: { type: Number, required: true },
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Project = mongoose.model<IProject>('Project', projectSchema);
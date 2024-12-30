export interface ISkill extends Document {
  title: string;
  type: 'SOFT' | 'TECHNICAL';
  icon: string;
  experience: number;
  proficiency: number;
  category: 'FRONTEND' | 'BACKEND' | 'TOOL';
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const skillSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['SOFT', 'TECHNICAL'], required: true },
  icon: { type: String, required: true },
  experience: { type: Number, required: true },
  proficiency: { type: Number, required: true },
  category: { type: String, enum: ['FRONTEND', 'BACKEND', 'TOOL'], required: true },
  order: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Skill = mongoose.model<ISkill>('Skill', skillSchema);
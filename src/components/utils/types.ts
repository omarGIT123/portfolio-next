import { StaticImageData } from "next/image";
import { JSX } from "react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  thumbnail: StaticImageData;
  modalContent: () => JSX.Element;
}

export interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

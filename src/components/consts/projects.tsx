import Image from "next/image";
import { Project } from "../utils/types";

// Card Thumbnails
import thumbSynai from "@/assets/imgs/synai.jpg";
import thumbAsr from "@/assets/imgs/asr.jpg";
import thumbGaze from "@/assets/imgs/caps/9.jpg";
import thumbGarage from "@/assets/imgs/fc.jpg";
import thumbOcr from "@/assets/imgs/ocr.jpg";

// Modal Content Images
import synai1 from "@/assets/imgs/synai1.png";
import synai2 from "@/assets/imgs/synai2.png";
import synai3 from "@/assets/imgs/synai3.png";
import challa from "@/assets/imgs/challa.jpg";
import result from "@/assets/imgs/result.jpg";
import samples from "@/assets/imgs/samples.jpg";
import cap1 from "@/assets/imgs/caps/1.png";
import cap2 from "@/assets/imgs/caps/2.png";
import cap4 from "@/assets/imgs/caps/4.png";
import cap6 from "@/assets/imgs/caps/6.png";

export const projects: Project[] = [
  {
    title: "SynAI Writing Assistant",
    description:
      "A Google Docs extension for writing assistance, powered by Large Language Models.",
    tags: ["JavaScript", "LLM", "Python", "Google Workspace"],
    category: "nlp",
    thumbnail: thumbSynai,
    modalContent: () => (
      <div className="space-y-12 text-[var(--text-secondary)]">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
            ✍️ SynAI Writing Assistant
          </h2>
          <p className="text-lg">
            SynAI integrates seamlessly with Google Docs, enabling users to
            generate ideas and enhance their text without the need for external
            tools or copying and pasting. By simply selecting the text within
            the document, the AI is automatically triggered to provide
            suggestions, rephrased content, or even synonyms. This streamlines
            the workflow, allowing users to stay focused and productive.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-center mb-8 text-[var(--text-primary)]">
            Key Features
          </h3>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h4 className="font-bold text-xl mb-2 text-blue-400">
                  Seamless Integration
                </h4>
                <p>
                  Works directly within Google Docs without requiring external
                  steps, providing a fluid and uninterrupted writing experience.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={synai1}
                  alt="SynAI seamless integration"
                  className="rounded-xl shadow-2xl border border-slate-700/50"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2">
                <h4 className="font-bold text-xl mb-2 text-blue-400">
                  Automatic Suggestions
                </h4>
                <p>
                  Triggered instantly with text selection for rephrasing,
                  synonym generation, or content enhancement, making AI
                  assistance feel like a natural part of editing.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={synai2}
                  alt="SynAI automatic suggestions"
                  className="rounded-xl shadow-2xl border border-slate-700/50"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h4 className="font-bold text-xl mb-2 text-blue-400">
                  Enhanced Productivity
                </h4>
                <p>
                  Reduces interruptions by eliminating the need to switch
                  between platforms, keeping the writer in their creative flow.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={synai3}
                  alt="SynAI enhances productivity"
                  className="rounded-xl shadow-2xl border border-slate-700/50"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg bg-blue-900/20 dark:bg-blue-500/10 border border-blue-500/30">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-3">
            <i className="fas fa-database"></i>History & Adaptive Learning
          </h3>
          <p className="mb-4">
            SynAI employs an advanced adaptive learning mechanism through two
            key functions:
          </p>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <strong>Pattern Recognition:</strong> The system analyzes existing
              history messages (a fixed set of tokens stored in the database) to
              extract user-specific writing patterns, habits, and preferences.
              It then uses this analysis to generate tailored content
              suggestions.
            </li>
            <li>
              <strong>Dynamic History Management:</strong> Each new user input
              is stored in the history, overriding the earliest data point. This
              ensures the system remains up-to-date without bloating the
              storage, maintaining a relevant dataset for analysis.
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-lg bg-[var(--card-rgb)] border border-[var(--card-border-rgb)]">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-3">
            <i className="fas fa-graduation-cap"></i>Learning Outcomes
          </h3>
          <p className="mb-4">
            This project provided valuable insights into building AI-powered
            tools for enhancing productivity:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Learned how to integrate AI seamlessly into existing tools like
              Google Docs.
            </li>
            <li>
              Explored ways to create AI systems that respond dynamically to
              user input.
            </li>
            <li>
              Implemented history-based learning to improve AI performance and
              personalization over time.
            </li>
            <li>
              Gained a deeper understanding of how AI could evolve to assist
              users in real-time, collaborative writing processes.
            </li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    title: "Tunisian derja ASR model",
    description:
      "A Speech-to-Text AI model fine-tuned for the Tunisian Derja (dialect).",
    tags: ["Python", "ASR", "NLP", "Hugging Face"],
    category: "nlp",
    thumbnail: thumbAsr,
    modalContent: () => (
      <div className="space-y-12 text-[var(--text-secondary)]">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
            🗣️ Tunisian ASR Model
          </h2>
          <p className="text-lg">
            This project aims to build an ASR (Automatic Speech Recognition)
            model dedicated to the Tunisian Derja dialect, uniquely designed to
            accommodate local dialectal nuances, including French and English
            elements, filling a major ASR gap for this dialect as of 2023.
          </p>

          <Image
            src={challa}
            alt="Tunisian ASR Model"
            className="rounded-lg shadow-xl border border-slate-700/50 mt-4"
          />
          <figcaption className="text-sm italic text-gray-400 mt-2">
            This is an example of the result. It accurately transcribed my
            speech into a correctly written sentence. (It means : &apos;I hope
            to god this model works well and gives a satisfying result.
            &#128514;&apos;)
          </figcaption>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-center mb-8 text-[var(--text-primary)]">
            Key Highlights
          </h3>
          <ul className="space-y-8">
            <li className="p-6 rounded-lg bg-[var(--card-rgb)] border border-slate-700/50">
              <div className="flex items-start gap-3">
                <i className="fas fa-check-circle text-purple-400 mt-1"></i>
                <span>
                  <strong>Dialect-Specific Language Model:</strong> Customized
                  KenLM language model trained on Tunisian Derja dialect data.
                </span>
              </div>
              <figure className="mt-4 text-center">
                <Image
                  src={result}
                  alt="ASR results showing CER and WER"
                  className="rounded-lg shadow-xl border border-slate-700/50"
                />
                {/* gray text */}
                <figcaption className="text-sm italic  mt-2  text-gray-400">
                  This image showcases the Character Error Rate (CER) and Word
                  Error Rate (WER).
                </figcaption>
              </figure>
            </li>
            <li className="p-6 rounded-lg bg-[var(--card-rgb)] border border-slate-700/50">
              <div className="flex items-start gap-3">
                <i className="fas fa-check-circle text-purple-400 mt-1"></i>
                <span>
                  <strong>Dynamic Resampling:</strong> Supports audio resampling
                  for various input frequencies (8000, 44100, 48000 Hz).
                </span>
              </div>
              {/* samples image here */}
              <figure className="mt-4 text-center">
                <Image
                  src={samples}
                  alt="Audio samples"
                  className="rounded-lg shadow-xl border border-slate-700/50"
                />
                <figcaption className="text-sm italic text-gray-400 mt-2">
                  Example of samples used for training.
                </figcaption>
              </figure>
            </li>
            <li className="p-6 rounded-lg bg-[var(--card-rgb)] border border-slate-700/50">
              <div className="flex items-start gap-3">
                <i className="fas fa-check-circle text-purple-400 mt-1"></i>
                <span>
                  <strong>Real-Time Processing:</strong> Efficient segmentation
                  and processing allow for real-time transcription.
                </span>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-center mb-8 text-[var(--text-primary)]">
            Workflow
          </h3>
          <ol className="space-y-4 border-l-2 border-purple-500/30 pl-8">
            <li>
              <strong className="block text-[var(--text-primary)]">
                Data Ingestion:
              </strong>{" "}
              Accepts audio input through microphone or file upload, resampling
              as needed.
            </li>
            <li>
              <strong className="block text-[var(--text-primary)]">
                Audio Segmentation:
              </strong>{" "}
              Splits long audio files into 5-second segments for processing.
            </li>
            <li>
              <strong className="block text-[var(--text-primary)]">
                Language Detection:
              </strong>{" "}
              Identifies audio as Tunisian Derja, applying the relevant language
              model.
            </li>
            <li>
              <strong className="block text-[var(--text-primary)]">
                Transcription:
              </strong>{" "}
              Uses a CTC-based decoder with KenLM model to convert speech to
              text.
            </li>
            <li>
              <strong className="block text-[var(--text-primary)]">
                Result Output:
              </strong>{" "}
              Combines segment transcriptions into a single output and saves it
              as text.
            </li>
          </ol>
        </section>

        <section className="p-6 rounded-lg bg-purple-900/20 dark:bg-purple-500/10 border border-purple-500/30">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-3">
            <i className="fas fa-dna"></i>Impact
          </h3>
          <p>
            This ASR model contributes significantly to language technology for
            the Tunisian dialect, providing an essential tool for
            dialect-specific transcription and advancing ASR capabilities within
            regional linguistic contexts.
          </p>
        </section>
      </div>
    ),
  },
  {
    title: "Real-Time Gaze Coordinate Tracking System",
    description:
      "A real-time system to track gaze coordinates on a screen using computer vision.",
    tags: ["Python", "Pytorch", "ML", "Computer Vision"],
    category: "ml",
    thumbnail: thumbGaze,
    modalContent: () => (
      <div className="space-y-12 text-[var(--text-secondary)]">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
            👀 GazeTrack Assistant
          </h2>
          <p className="text-lg">
            GazeTrack is a system designed for real-time gaze coordinate
            tracking. It uses a combination of data generation techniques and
            machine learning to track eye positions and predict gaze
            coordinates. The system employs a simple, time-saving data
            generation script that automates the collection and augmentation of
            gaze data.
          </p>
        </section>

        <section className="p-6 rounded-lg bg-green-900/20 dark:bg-green-500/10 border border-green-500/30">
          <div className="flex items-center gap-4 mb-4">
            <i className="fas fa-database text-green-400 text-2xl w-8 text-center"></i>
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Data Generation & Augmentation
            </h3>
          </div>
          <p>
            The data generation script follows a simple yet efficient workflow.
            This system has allowed for the accumulation of approximately{" "}
            <strong>10,000 data points</strong>, forming a rich dataset for
            training and model evaluation.
          </p>
          <ul className="mt-4 space-y-3 list-disc list-inside">
            <li>
              <strong>Gaze & Click:</strong> Gaze at a position on the black
              screen and click using the mouse. The system registers the
              relative gaze coordinates.
            </li>
            <li>
              <strong>Image Capture:</strong> The webcam captures the frame, and
              you can crop it to focus on the eyes.
            </li>
            <li>
              <strong>Data Augmentation:</strong> Brightness, contrast, and
              sharpening transformations are applied to the images, generating
              additional training data.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-center mb-8 text-[var(--text-primary)]">
            Workflow & Results
          </h3>
          <div className="space-y-8">
            <div className="p-4 rounded-lg bg-[var(--card-rgb)] border border-slate-700/50">
              <strong className="block text-[var(--text-primary)] mb-2">
                Step 1 & 2: Data Capture
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <figure>
                  <Image
                    src={cap1}
                    alt="Image capturing"
                    className="rounded-lg shadow-xl"
                  />
                  <figcaption className="text-sm text-center italic mt-1">
                    Image capturing and cropping
                  </figcaption>
                </figure>
                <figure>
                  <Image
                    src={cap2}
                    alt="Saving coordinates"
                    className="rounded-lg shadow-xl"
                  />
                  <figcaption className="text-sm text-center italic mt-1">
                    Saving click coordinates
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-[var(--card-rgb)] border border-slate-700/50">
              <strong className="block text-[var(--text-primary)] mb-2">
                Step 5: Model Training & Real-time Testing
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <figure>
                  <Image
                    src={cap6}
                    alt="Testing model"
                    className="rounded-lg shadow-xl"
                  />
                  <figcaption className="text-sm text-center italic mt-1">
                    Testing on training data shows the model has efficiently
                    learned to approximate gaze location.
                  </figcaption>
                </figure>
                <figure>
                  <Image
                    src={cap4}
                    alt="Real-time gaze detection"
                    className="rounded-lg shadow-xl"
                  />
                  <figcaption className="text-sm text-center italic mt-1">
                    Testing real-time gaze coordinate detection. The model may
                    not detect the exact point but is still close to the
                    position I am looking at. (Green point: the model&apos;s
                    prediction, Red cross: the exact position I was looking at.)
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg bg-[var(--card-rgb)] border border-[var(--card-border-rgb)]">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-3">
            <i className="fas fa-graduation-cap"></i>Learning Outcomes
          </h3>
          <p className="mb-4">
            This project provided valuable insights into the creation of gaze
            tracking systems:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Learned how to efficiently collect and augment gaze data for
              training a machine learning model.
            </li>
            <li>
              Developed a simple script to streamline data generation and
              processing, saving time and effort.
            </li>
            <li>
              Applied pre-trained models and fine-tuned them for gaze tracking
              using PyTorch.
            </li>
            <li>
              Gained experience in using Vision Transformers for predicting gaze
              coordinates with high precision.
            </li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    title: "Automatic Parking Garage Door with Facial Recognition",
    description:
      "Combines facial recognition and IoT to simulate an automatic, secure garage door.",
    tags: ["Python", "Facial Recognition", "Arduino", "IOT"],
    category: "ml",
    thumbnail: thumbGarage,
    modalContent: () => (
      <div className="space-y-12 text-[var(--text-secondary)]">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
            🚗 Automatic Parking Garage Door
          </h2>
          <p className="text-lg">
            This project explores the integration of AI in a practical,
            real-world application using electronics. The system is designed for
            educational purposes, leveraging facial recognition to manage
            automated gate control, thereby providing hands-on experience with
            AI-driven electronics rather than focusing solely on theoretical AI
            concepts.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-center mb-8 text-[var(--text-primary)]">
            System Architecture
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center p-4 rounded-xl bg-[var(--card-rgb)] border border-slate-700/50">
            <div className="p-4 rounded-lg bg-teal-900/50">
              {" "}
              <i className="fas fa-camera text-2xl text-teal-300"></i>
              <p className="font-bold mt-1">Facial Recognition (Python)</p>
            </div>
            <div className="font-mono text-2xl text-teal-400">&rarr;</div>
            <div className="p-4 rounded-lg bg-teal-900/50">
              <i className="fas fa-serial-port text-2xl text-teal-300"></i>
              <p className="font-bold mt-1">Serial Signal</p>
            </div>
            <div className="font-mono text-2xl text-teal-400">&rarr;</div>
            <div className="p-4 rounded-lg bg-teal-900/50">
              <i className="fas fa-robot text-2xl text-teal-300"></i>
              <p className="font-bold mt-1">Arduino</p>
            </div>
            <div className="font-mono text-2xl text-teal-400">&rarr;</div>
            <div className="p-4 rounded-lg bg-teal-900/50">
              <i className="fas fa-door-open text-2xl text-teal-300"></i>
              <p className="font-bold mt-1">Servo (Gate)</p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-[var(--card-rgb)] border border-[var(--card-border-rgb)]">
            <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
              Project Components
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>Facial Recognition System:</strong> A camera and
                Python-based software identify authorized users and validate
                access permissions.
              </li>
              <li>
                <strong>Serial Communication Link:</strong> Facilitates
                communication between the facial recognition software and the
                Arduino controller.
              </li>
              <li>
                <strong>Arduino Gate Controller:</strong> Receives serial
                commands to open or close the gate using a servo motor based on
                facial recognition results.
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-[var(--card-rgb)] border border-[var(--card-border-rgb)]">
            <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
              Workflow
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>Face Detection:</strong> The software identifies
                individuals and confirms their access permissions.
              </li>
              <li>
                <strong>Command Transmission:</strong> Based on recognition, the
                system sends an “ON” or “OFF” command to Arduino.
              </li>
              <li>
                <strong>Gate Control:</strong> Arduino reads the command and
                controls the servo motor to open or close the gate.
              </li>
            </ul>
          </div>
        </div>

        <section className="p-6 rounded-lg bg-teal-900/20 dark:bg-teal-500/10 border border-teal-500/30">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-3">
            <i className="fas fa-wrench"></i>Key Engineering Lessons
          </h3>
          <p>
            This project provided practical experience with AI and electronics,
            focusing on the integration of hardware and AI-powered recognition.
            It emphasized real-world implementation and debugging, showing how
            AI can be used in innovative ways beyond traditional theory, making
            the learning process both engaging and highly practical.
          </p>
        </section>
      </div>
    ),
  },
  {
    title: "Tunisian ID Card OCR System",
    description:
      "An OCR system built with Flutter and Python to extract structured data from Tunisian ID cards.",
    tags: ["Python", "OCR", "Flutter", "API"],
    category: "academic",
    thumbnail: thumbOcr,
    modalContent: () => (
      <div className="space-y-12 text-[var(--text-secondary)]">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
            🪪 Tunisian ID Card OCR
          </h2>
          <p className="text-lg">
            This project demonstrates the integration of AI into a mobile app
            using Optical Character Recognition (OCR) to scan and extract data
            from Tunisian ID cards. The mobile app, built with Flutter, captures
            the image of the ID card, sends it to a Python-based API for text
            extraction, and then returns the extracted data back to the app.
            This approach showcases the practical application of AI in
            real-world scenarios, particularly in the automation of
            administrative processes like identity verification.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-center mb-8 text-[var(--text-primary)]">
            System Flow
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-lg bg-amber-900/20 dark:bg-amber-500/10 border border-amber-500/30">
              <i className="fab fa-flutter text-4xl text-amber-400 mb-3"></i>
              <h4 className="font-bold text-lg mb-2 text-[var(--text-primary)]">
                1. Capture (Flutter)
              </h4>
              <p>
                A cross-platform mobile app captures the ID card image and sends
                it to a backend API.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-amber-900/20 dark:bg-amber-500/10 border border-amber-500/30">
              <i className="fas fa-server text-4xl text-amber-400 mb-3"></i>
              <h4 className="font-bold text-lg mb-2 text-[var(--text-primary)]">
                2. Process (Python API)
              </h4>
              <p>
                The backend server applies pre-processing and uses an Arabic OCR
                engine to extract text.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-amber-900/20 dark:bg-amber-500/10 border border-amber-500/30">
              <i className="fas fa-file-invoice text-4xl text-amber-400 mb-3"></i>
              <h4 className="font-bold text-lg mb-2 text-[var(--text-primary)]">
                3. Display (Flutter)
              </h4>
              <p>
                The structured data (Name, CIN, etc.) is returned as JSON and
                displayed in the app for verification.
              </p>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-[var(--card-rgb)] border border-slate-700/50">
            <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
              Image Processing & AI
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>Image Pre-processing:</strong> Techniques such as
                rotation, thresholding, and sharpening are applied to improve
                the quality of the image for OCR.
              </li>
              <li>
                <strong>OCR Engine:</strong> The system uses an Arabic OCR
                engine to extract and recognize text from the ID card image.
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-[var(--card-rgb)] border border-slate-700/50">
            <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
              System Components
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>Flutter Application:</strong> A mobile app that captures
                images of the Tunisian ID card and sends them to a Python API
                for OCR processing.
              </li>
              <li>
                <strong>Python OCR API:</strong> A Python server that uses an
                OCR library to process the image and extract relevant data.
              </li>
            </ul>
          </div>
        </div>

        <section className="p-6 rounded-lg bg-amber-900/20 dark:bg-amber-500/10 border border-amber-500/30">
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-3">
            <i className="fas fa-book-open"></i>Academic & Practical Outcomes
          </h3>
          <p className="mb-4">
            This project was a great opportunity to learn how to integrate AI
            into mobile apps, focusing on practical use cases. It helped me
            understand the process of:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Integrating AI with Mobile Apps:</strong> I learned how to
              effectively integrate OCR and AI with mobile applications,
              bridging the gap between theory and practical implementation.
            </li>
            <li>
              <strong>Real-Life Use Cases:</strong> The project showed how AI
              can streamline administrative processes, particularly in fields
              like identity verification and data entry.
            </li>
            <li>
              <strong>Building a Scalable Backend:</strong> I gained experience
              in developing a Python API that can handle image data, process it
              using AI models, and return useful information to the mobile app.
            </li>
            <li>
              <strong>Cross-Platform Development:</strong> Working with Flutter
              allowed me to develop an app that works across multiple platforms,
              ensuring a broader reach for the system.
            </li>
          </ul>
        </section>
      </div>
    ),
  },
];

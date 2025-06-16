# Machine Learning Showcase by Satria Nur Saputro

A curated collection of machine learning projects developed as part of the Dicoding curriculum. This repository demonstrates advanced skills in various machine learning domains, including Natural Language Processing, Recommendation Systems, Image Classification, and Time Series Forecasting. Each project is designed to address real-world problems with practical, scalable solutions.

<div align="center">
  <p>
    <a href="https://opensource.org/license/mit"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
    <img src="https://img.shields.io/badge/Python-3.7+-3776AB?logo=python&logoColor=white" alt="Python version">
    <img src="https://img.shields.io/badge/TensorFlow-2.0+-FF6F00?logo=tensorflow&logoColor=white" alt="TensorFlow">
    <img src="https://img.shields.io/badge/scikit--learn-0.24+-F7931E?logo=scikit-learn&logoColor=white" alt="scikit-learn">
    <img src="https://img.shields.io/badge/Code%20Style-Black-000000?logo=python" alt="Code Style: Black">
  </p>
</div>

## Table of Contents

- [Machine Learning Showcase by Satria Nur Saputro](#machine-learning-showcase-by-satria-nur-saputro)
  - [Table of Contents](#table-of-contents)
  - [Projects Overview](#projects-overview)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
  - [License](#license)
  - [🤝 Contributing](#-contributing)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)

## Projects Overview

This repository contains a diverse set of machine learning projects, each located in its own directory with detailed documentation and code. Below is a summary of the projects:

| Project Domain                       | Description                                                                                                                                            | Technologies                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| 🗣️ **Natural Language Processing**   | Two projects: (1) A text classification model to categorize student questions, and (2) A sentiment analysis model for product reviews.                 | `TensorFlow`, `scikit-learn`, `NLTK`, `Sastrawi` |
| 📚 **Recommendation Systems**        | A book recommendation system implementing **Content-Based Filtering** (TF-IDF, Cosine Similarity) and **Collaborative Filtering** (SVD, ALS).          | `scikit-learn`, `Surprise`, `Pandas`             |
| 🖼️ **Image Classification (TFLite)** | An animal image classification model using transfer learning with the `Xception` architecture, converted to **TensorFlow Lite** for mobile deployment. | `TensorFlow`, `Keras`, `TFLite`                  |
| 📈 **Time Series Forecasting**       | A forecasting model predicting household power consumption using an **LSTM** (Long Short-Term Memory) network.                                         | `TensorFlow`, `scikit-learn`, `Pandas`           |

Each project includes a comprehensive README within its directory, detailing the problem statement, methodology, results, and evaluation metrics.

## Technologies Used

This repository leverages a robust set of Python libraries and frameworks to build and deploy machine learning models:

- **Core Libraries**:
  - `Pandas` for data manipulation
  - `NumPy` for numerical computations
  - `Matplotlib` and `Seaborn` for data visualization
- **Machine Learning**:
  - `scikit-learn` for traditional ML algorithms
  - `Surprise` for recommendation systems
- **Deep Learning**:
  - `TensorFlow` and `Keras` for neural network development
  - `TensorFlow Lite` for model optimization and deployment
- **Natural Language Processing**:
  - `NLTK` for text processing
  - `Sastrawi` for Indonesian language stemming
- **Code Quality**:
  - `Black` for consistent code formatting
  - `Flake8` for linting and style enforcement

## Getting Started

Follow these steps to set up and run the projects locally.

### Prerequisites

- **Python**: Version 3.7 or higher (download from [python.org](https://www.python.org/downloads/))
- **pip**: Python package manager
- A modern IDE or text editor (e.g., VS Code, PyCharm, or Jupyter Notebook)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jkenyut/nvx-dicoding-machine-learning.git
   cd nvx-dicoding-machine-learning
   ```

2. **Set up a virtual environment (recommended):**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install core dependencies:**
   Each project may require specific libraries, but you can install the core dependencies for all projects:

   ```bash
   pip install pandas numpy matplotlib seaborn scikit-learn tensorflow sastrawi scikit-surprise
   ```

4. **Install additional project-specific dependencies:**
   Refer to the `requirements.txt` file in each project directory (if available) or the project's README for specific dependencies. For example:
   ```bash
   pip install -r recommendation_system/requirements.txt
   ```

### Usage

Each project is self-contained in its own directory. To run a specific project:

1. Navigate to the project directory:

   ```bash
   cd recommendation_system
   ```

2. Run the Python script or Jupyter Notebook:

   ```bash
   python dicoding_satria_nur_saputro_recommendation.py
   ```

   or

   ```bash
   jupyter notebook dicoding_satria_nur_saputro_recommendation.ipynb
   ```

3. Follow the instructions in the project-specific README for additional setup, such as downloading datasets or configuring environment variables.

Example for the Time Series Forecasting project:

```bash
cd time_series
python dicoding_satria_nur_saputro_time_series.py
```

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit). See the `LICENSE` file for details.

## 🤝 Contributing

We welcome contributions! If you'd like to help improve the project:

1.  **Fork** the repository.
2.  Create your **Feature Branch** (`git checkout -b feature/AmazingAI-Feature`).
3.  **Commit** your changes (`git commit -m 'feat: Add some AmazingAI-Feature'`).
4.  **Push** to the Branch (`git push origin feature/AmazingAI-Feature`).
5.  Open a **Pull Request**.

## Acknowledgements

- **Dicoding Academy** for providing an excellent curriculum and platform for learning machine learning.
- Open-source communities behind `TensorFlow`, `scikit-learn`, `Surprise`, `NLTK`, and `Sastrawi` for their robust tools and documentation.
- Dataset providers for making high-quality, publicly available datasets accessible for educational purposes.

## Contact

**Satria Nur Saputro**

- **Email**: [satrianursaputro06@gmail.com](mailto:satrianursaputro06@gmail.com)
- **GitHub**: [jkenyut](https://github.com/jkenyut)
- **LinkedIn**: [Satria Nur Saputro](https://www.linkedin.com/in/satrianursaputro/) _(optional: update with your actual LinkedIn profile if available)_

Feel free to reach out for collaboration, questions, or feedback!

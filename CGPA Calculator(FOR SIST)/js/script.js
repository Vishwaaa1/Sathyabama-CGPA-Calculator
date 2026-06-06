document.addEventListener('DOMContentLoaded', () => {
    const numSubjectsInput = document.getElementById('numSubjects');
    const subjectInputsDiv = document.getElementById('subjectInputs');
    const addSubjectsBtn = document.getElementById('addSubjects');
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const cgpaValueSpan = document.getElementById('cgpaValue');

    // Add Subject Inputs
    addSubjectsBtn.addEventListener('click', () => {
        const numSubjects = parseInt(numSubjectsInput.value);
        if (isNaN(numSubjects) || numSubjects <= 0) {
            alert('Please enter a valid number of subjects.');
            return;
        }

        subjectInputsDiv.innerHTML = '';
        for (let i = 1; i <= numSubjects; i++) {
            subjectInputsDiv.innerHTML += `
                <div class="mb-3">
                    <h5>Subject ${i}</h5>
                    <input type="text" class="form-control mb-2" placeholder="Enter Subject Name" id="subjectName${i}" required>
                    <input type="number" class="form-control mb-2" placeholder="Marks (0-100)" id="marks${i}" min="0" max="100" required>
                    <input type="number" class="form-control" placeholder="Credits" id="credits${i}" min="1" required>
                </div>
            `;
        }
        calculateBtn.style.display = 'block';
    });

    // Calculate CGPA
    calculateBtn.addEventListener('click', () => {
        let totalWeightedGradePoints = 0;
        let totalCredits = 0;

        const numSubjects = parseInt(numSubjectsInput.value);

        for (let i = 1; i <= numSubjects; i++) {
            const marks = parseInt(document.getElementById(`marks${i}`).value);
            const credits = parseInt(document.getElementById(`credits${i}`).value);

            if (isNaN(marks) || isNaN(credits) || marks < 0 || marks > 100 || credits <= 0) {
                alert(`Invalid input for Subject ${i}. Please check the values.`);
                return;
            }

            const gradePoint = calculateGradePoint(marks);
            totalWeightedGradePoints += gradePoint * credits;
            totalCredits += credits;
        }

        if (totalCredits === 0) {
            alert("Total credits cannot be zero.");
            return;
        }

        const cgpa = totalWeightedGradePoints / totalCredits;
        cgpaValueSpan.textContent = cgpa.toFixed(2);
        resultDiv.classList.remove('d-none');
    });

    function calculateGradePoint(marks) {
        if (marks >= 90) return 10;
        if (marks >= 80) return 9;
        if (marks >= 70) return 8;
        if (marks >= 60) return 7;
        if (marks >= 50) return 6;
        return 0;
    }
});

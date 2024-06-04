function submitQuiz() {
    const form = document.getElementById('quizForm');
    const results = document.getElementById('quizResult');
    let score = 0;
    const totalQuestions = 20;

    // Check answers
    if (form.q1.value === 'correct') score++;
    if (form.q2.value === 'correct') score++;
    if (form.q3.value === 'correct') score++;
    if (form.q4.value === 'correct') score++;
    if (form.q5.value === 'correct') score++;
    if (form.q6.value === 'correct') score++;
    if (form.q7.value === 'correct') score++;
    if (form.q8.value === 'correct') score++;
    if (form.q9.value === 'correct') score++;
    if (form.q10.value === 'correct') score++;
    if (form.q11.value === 'correct') score++;
    if (form.q12.value === 'correct') score++;
    if (form.q13.value === 'correct') score++;
    if (form.q14.value === 'correct') score++;
    if (form.q15.value === 'correct') score++;
    if (form.q16.value === 'correct') score++;
    if (form.q17.value === 'correct') score++;
    if (form.q18.value === 'correct') score++;
    if (form.q19.value === 'correct') score++;
    if (form.q20.value === 'correct') score++;

    // Display result
    results.innerHTML = `<p>Your score is ${score} out of ${totalQuestions}.</p>`;
}

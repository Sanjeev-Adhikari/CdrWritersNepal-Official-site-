const content = {
    careerEpisodes: `
        <h2 class="text-2xl font-bold text-red-600 mb-4">Career Episodes (CEs)</h2>
        <p class="text-gray-700 mb-4">Career Episodes (CEs) are critical components of your CDR. Each episode should focus on a specific engineering task or project, demonstrating how you applied your engineering knowledge and skills. You must describe your individual role, contributions, and solutions to engineering problems, ensuring that each episode is written in the first person ("I did...").</p>
        <ul class="list-disc list-inside text-gray-700 mb-4">
            <li>Introduction (100 words)</li>
            <li>Background (200-500 words)</li>
            <li>Personal Engineering Activity (500-1000 words)</li>
            <li>Summary (50-100 words)</li>
        </ul>
    `,
    summaryStatement: `
        <h2 class="text-2xl font-bold text-red-600 mb-4">Summary Statement (SS)</h2>
        <p class="text-gray-700 mb-4">The Summary Statement is a critical part of your CDR. It provides a cross-reference between the competency elements required by Engineers Australia and the relevant sections in your Career Episodes. After writing your Career Episodes, you must analyze them to ensure they cover all the necessary competency elements, and cross-reference them in your Summary Statement.</p>
    `,
    cpd: `
        <h2 class="text-2xl font-bold text-red-600 mb-4">Continuing Professional Development (CPD)</h2>
        <p class="text-gray-700 mb-4">Your Continuing Professional Development (CPD) is a record of all the training, workshops, seminars, and professional development activities you've undertaken to maintain and improve your engineering knowledge. Your CPD must be presented in list format and should not exceed one A4 page.</p>
        <ul class="list-disc list-inside text-gray-700 mb-4">
            <li>Formal post-graduate study</li>
            <li>Conferences attended or presented</li>
            <li>Technical workshops, meetings, and inspections</li>
            <li>Private study (books, journals, manuals, etc.)</li>
        </ul>
    `,
    cv: `
        <h2 class="text-2xl font-bold text-red-600 mb-4">Curriculum Vitae (CV)</h2>
        <p class="text-gray-700 mb-4">Your Curriculum Vitae (CV) should summarize your professional career to date, including your academic qualifications, work experience, and engineering achievements. The CV should focus on your responsibilities, duties, and projects, particularly in relation to the engineering competencies required by Engineers Australia.</p>
    `,
    rejection: `
    <h3 class="text-xl font-bold text-red-500 mb-4">1. Risk of Rejection</h3>
    <p class="text-gray-700 mb-4">
        Engineers Australia (EA) has strict requirements for the CDR. If your submission does not meet these guidelines, there is a high risk that your CDR will be rejected. Common reasons for rejection include:
    </p>
    <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Not demonstrating the required competency elements for your nominated occupation.</li>
        <li>Failing to provide clear evidence of your personal engineering role in projects.</li>
        <li>Submitting Career Episodes that do not align with EA’s required structure (Introduction, Background, Personal Engineering Activity, and Summary).</li>
    </ul>
    <p class="text-gray-700 mb-4">
        A rejection may lead to significant delays in your migration process, costing you both time and money to resubmit.
    </p>
`,
plagiarism: `
    <h3 class="text-xl font-bold text-red-500 mb-4">2. Plagiarism Detection and Blacklisting</h3>
    <p class="text-gray-700 mb-4">
        Engineers Australia uses plagiarism detection software to verify the originality of your CDR. If any part of your report is found to be plagiarized, your application may be immediately rejected, and you could be blacklisted from future assessments. Key risks include:
    </p>
    <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Using content copied from another engineer's CDR, templates, or external sources without proper attribution.</li>
        <li>Submitting reports that closely mirror internet resources or pre-written examples.</li>
    </ul>
    <p class="text-gray-700">
        Engineers Australia emphasizes that all CDRs must be written in your own words, highlighting your personal engineering contributions and experiences. Plagiarism is taken very seriously and can permanently impact your professional reputation.
    </p>
`,
competencies: `
    <h3 class="text-xl font-bold text-red-500 mb-4">3. Inadequate Demonstration of Engineering Competencies</h3>
    <p class="text-gray-700 mb-4">
        If your CDR fails to clearly demonstrate your engineering skills, knowledge, and how you applied them in your nominated occupation, Engineers Australia will likely deem your CDR unsatisfactory. This can happen if:
    </p>
    <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Your Career Episodes focus on team efforts rather than your personal contributions.</li>
        <li>Too much technical detail is included without explaining the context of how you applied engineering knowledge.</li>
        <li>Failure to cross-reference competencies with relevant parts of your Career Episodes in the Summary Statement.</li>
    </ul>
    <p class="text-gray-700">
        Without a strong demonstration of competency, your CDR will not satisfy Engineers Australia's requirements, leading to rejection and the need for resubmission.
    </p>
`,
anzsco: `
    <h3 class="text-xl font-bold text-red-500 mb-4">4. Misalignment with ANZSCO Code</h3>
    <p class="text-gray-700 mb-4">
        Your CDR must align with the specific ANZSCO code you are applying for. If your CDR does not demonstrate competencies that match your nominated occupation, Engineers Australia may reject your application. Dangers include:
    </p>
    <ul class="list-disc list-inside text-gray-700 mb-4">
        <li>Not identifying or addressing the specific competency elements required for your ANZSCO code.</li>
        <li>Failing to demonstrate job-specific duties and responsibilities as outlined in the ANZSCO occupation requirements.</li>
    </ul>
    <p class="text-gray-700">
        Ensuring that your CDR aligns with the correct ANZSCO code is crucial for a successful assessment.
    </p>
`
};

function showInfo(section) {
    document.getElementById('infoContainer').innerHTML = content[section];
}
import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
    labels: ['Communication', 'Tech Skills', 'Project Management', 'Multitasking', 'Interpersonal', 'Work Ethic', 'Teamwork'],
    datasets: [
        {
            label: 'Skills',
            data: [90, 85, 80, 75, 70, 95, 85],
            backgroundColor: 'rgba(34, 202, 236, .2)',
            borderColor: 'rgba(34, 202, 236, 1)',
        },
    ],
};

function SkillsRadarChart() {
    return <Radar data={data} />;
}

export default SkillsRadarChart;

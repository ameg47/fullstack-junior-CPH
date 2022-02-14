import jobs from '../pages/api/jobs';

test('filter jobs having the type sent by query', () => {
    const req = { query: {
        type:'Traveler',
    }}

    const json = jest.fn();

    const res = {
        json
    }

    jobs(req, res)
    expect(json.mock.calls[0][0].jobs[Math.floor(Math.random() * jobs.length)].items[0].job_type).toEqual("Traveler");
});

test('filter jobs having the department sent by query', () => {
    const req = { query: {
        dep: 'Neurosurgery'
    }}

    const json = jest.fn();

    const res = {
        json
    }

    jobs(req, res)
    expect(json.mock.calls[0][0].jobs[Math.floor(Math.random() * jobs.length)].items[0].department).toContain("Neurosurgery");
});
'use client';

import React, { useState, useEffect } from 'react';

/*
 * Antworten zu den Fragen:
 * Antwort zu 1:
 * Man könnte den Array-Index verwenden, aber die ID ist besser. Bei Einfügungen würde der Index dazu führen, dass React denkt, alle nachfolgenden Elemente hätten sich geändert. Die ID bietet effizienteres Re-Rendering und ist daher vorzuziehen.
 * * Antwort zu 2:
 * Das Übergeben des gesamten Issue-Objekts ist übersichtlicher und wartungsfreundlicher. Wenn wir nur einzelne Felder benötigen, wäre die separate Übergabe sinnvoll, aber da wir die meisten Eigenschaften des Issue-Objekts verwenden, ist die Übergabe als Ganzes effizienter.
 * Antwort zu 3:
 * Ja, es funktioniert. Man kann den map-Ausdruck direkt im JSX innerhalb der geschweiften Klammern verwenden. Dies zeigt, dass JSX JavaScript-Ausdrücke unterstützt und dass React flexibel bei der Handhabung von dynamisch generierten Elementen ist.
 * Beispiel aufgaben Kapitel 3 & 4

 */

interface Issue {
  id: number;
  status: string;
  owner: string;
  created: Date;
  effort?: number;
  due?: Date;
  title: string;
}

const initialIssues: Issue[] = [
  {
    id: 1,
    status: 'New',
    owner: 'Ravan',
    effort: 5,
    created: new Date('2018-08-15'),
    due: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2,
    status: 'Assigned',
    owner: 'Eddie',
    effort: 14,
    created: new Date('2018-08-16'),
    due: new Date('2018-08-30'),
    title: 'Missing bottom border on panel',
  },
];

const IssueRow = ({ issue }: { issue: Issue }): JSX.Element => {
  const getBackgroundColor = (status: string): string => {
    switch (status) {
      case 'New':
        return '#ffffcc';
      case 'Assigned':
        return '#d9edf7';
      default:
        return 'white';
    }
  };

  return (
    <tr style={{ backgroundColor: getBackgroundColor(issue.status) }}>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ''}</td>
      <td>{issue.title}</td>
    </tr>
  );
};

const IssueTable = ({ issues }: { issues: Issue[] }): JSX.Element => (
  <table style={{ borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Status</th>
        <th>Owner</th>
        <th>Created</th>
        <th>Effort</th>
        <th>Due Date</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      {issues.map((issue) => (
        <IssueRow key={issue.id} issue={issue} />
      ))}
    </tbody>
  </table>
);

const IssueFilter = (): JSX.Element => (
  <div>This is a placeholder for the issue filter.</div>
);

const IssueAdd = ({
  createIssue,
}: {
  createIssue: (issue: Partial<Issue>) => void;
}): JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const issue: Partial<Issue> = {
      owner: form.owner.value,
      title: (form.elements.namedItem('title') as HTMLInputElement).value,
      status: 'New',
    };
    createIssue(issue);
    form.owner.value = '';
    form.title = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="owner" placeholder="Owner" />
      <input type="text" name="title" placeholder="Title" />
      <button type="submit">Add</button>
    </form>
  );
};

const IssueTrackerPage: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const savedIssues = localStorage.getItem('issues');
    if (savedIssues) {
      const parsedIssues = JSON.parse(savedIssues) as Issue[];
      parsedIssues.forEach((issue) => {
        issue.created = new Date(issue.created);
        if (issue.due) issue.due = new Date(issue.due);
      });
      setIssues(parsedIssues);
    } else {
      setTimeout(() => setIssues(initialIssues), 500);
    }
  }, []);

  const createIssue = (issue: Partial<Issue>) => {
    issue.id = issues.length + 1;
    issue.created = new Date();
    const newIssueList = issues.slice();
    newIssueList.push(issue as Issue);
    setIssues(newIssueList);
    localStorage.setItem('issues', JSON.stringify(newIssueList));
  };

  return (
    <div className="issue-tracker-container">
      <h1>Issue Tracker</h1>
      <IssueFilter />
      <hr />
      <IssueTable issues={issues} />
      <hr />
      <IssueAdd createIssue={createIssue} />
    </div>
  );
};

export default IssueTrackerPage;

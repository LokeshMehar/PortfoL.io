import { VerticalTimelineElement } from 'react-vertical-timeline-component';

// eslint-disable-next-line react/prop-types
const GitHubCard = ({ contributionCount = 365 }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="GitHub & Version Control"
    iconStyle={{ background: '#24112e', color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full text-white text-xl">
        <img
          src='./github.svg' 
          alt={'GitHub Icon'}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div className="flex flex-col gap-4">
      {/* Summary Section */}
      <div>
        <h3 className="text-white text-[22px] font-bold mb-1">Efficient GitHub Usage</h3>
        <ul className="list-disc list-inside text-[13px] text-white-100 space-y-1">
          <li>
            <strong>{contributionCount}+</strong> contributions in the past year across multiple repositories
          </li>
          <li>Practiced Git user with mastery over CLI-based workflows</li>
          <li>Used GitHub extensively during full-stack app development</li>
        </ul>
      </div>

      {/* Feature Highlights */}
      <div className="border-t border-gray-700 pt-3 text-[13px] text-gray-300">
        <h4 className="text-white font-semibold mb-2">Key Practices & Tools</h4>
        <ul className="space-y-1 list-disc list-inside space-y-1">
          <li>Daily usage of commands: <code>git rebase</code>, <code>git cherry-pick</code>, <code>git stash</code></li>
          <li>Implemented CI/CD via GitHub Actions</li>
          <li>Maintained clean commit history with conventional commits</li>
          <li>Reviewed and managed pull requests using best practices</li>
          <li>Familiar with GitHub Insights for repository analytics</li>
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default GitHubCard;

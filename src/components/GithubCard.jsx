import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const GitHubCard = ({ contributionCount = 365 }) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: 'linear-gradient(135deg, #1d1836 0%, #232946 100%)', 
      color: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="GitHub & Version Control"
    iconStyle={{ background: '#24112e', color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
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
    <div className="flex flex-col gap-5">
      {/* Summary Section */}
      <div>
        <h3 className="text-white text-[24px] font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Efficient GitHub Usage
        </h3>
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li className="leading-relaxed">
            <span className="font-bold text-green-400">{contributionCount}+</span> contributions in the past year across multiple repositories
          </li>
          <li className="leading-relaxed">
            Practiced Git user with mastery over <span className="text-blue-300 font-medium">CLI-based workflows</span>
          </li>
          <li className="leading-relaxed">
            Used GitHub extensively during <span className="text-purple-300">full-stack app development</span>
          </li>
        </ul>
      </div>

      {/* Feature Highlights */}
      <div className="border-t border-gray-600/50 pt-4 text-[14px] text-gray-200">
        <h4 className="text-white font-bold mb-3 text-[16px] flex items-center">
          <span className="mr-2">⚙️</span>
          Key Practices & Tools
        </h4>
        <ul className="space-y-2 list-none pl-0">
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">🔧</span>
            <span>Daily usage of commands: 
              <code className="bg-gray-800 text-cyan-300 px-2 py-1 rounded text-sm mx-1">git rebase</code>
              <code className="bg-gray-800 text-cyan-300 px-2 py-1 rounded text-sm mx-1">git cherry-pick</code>
              <code className="bg-gray-800 text-cyan-300 px-2 py-1 rounded text-sm mx-1">git stash</code>
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">🚀</span>
            Implemented <span className="text-yellow-300 font-medium">CI/CD via GitHub Actions</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">📝</span>
            Maintained clean commit history with <span className="text-green-300">conventional commits</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">🔍</span>
            Reviewed and managed <span className="text-blue-300">pull requests</span> using best practices
          </li>
          <li className="flex items-start">
            <span className="mr-3 mt-1 text-sm">📊</span>
            Familiar with <span className="text-purple-300">GitHub Insights</span> for repository analytics
          </li>
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default GitHubCard;
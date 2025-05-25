/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const GitHubCard = ({ contributionCount = 702 }) => (
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
    <div className="flex flex-col gap-4">
      {/* Summary Section */}
      <div>
        <h3 className="text-white text-[24px] font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          GitHub & Version Control
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
        <h4 className="text-white font-bold mb-3 text-[16px]">
          Key Practices & Tools
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-cyan-300 font-semibold mb-2 text-sm">Command Line Expertise</h5>
            <div className="space-y-1">
              <code className="bg-gray-800 text-cyan-300 px-2 py-1 rounded text-xs block">git rebase</code>
              <code className="bg-gray-800 text-cyan-300 px-2 py-1 rounded text-xs block">git cherry-pick</code>
              <code className="bg-gray-800 text-cyan-300 px-2 py-1 rounded text-xs block">git stash</code>
            </div>
          </div>
          <div>
            <h5 className="text-yellow-300 font-semibold mb-2 text-sm">Workflow Management</h5>
            <ul className="text-xs space-y-1">
              <li>• CI/CD via GitHub Actions</li>
              <li>• Conventional commit standards</li>
              <li>• Pull request reviews</li>
              <li>• Repository analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default GitHubCard;

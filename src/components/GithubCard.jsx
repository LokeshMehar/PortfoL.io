/* eslint-disable react/prop-types */
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const GitHubCard = ({ contributionCount = 702 }) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: 'rgba(147, 51, 234, 0.1)', 
      color: '#fff',
      border: '1px solid rgba(147, 51, 234, 0.4)',
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(147, 51, 234, 0.3)'
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date="GitHub & Version Control"
    iconStyle={{ background: '#2c1f3e', color: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',border: '1px solid rgba(147, 51, 234, 0.4)' }}
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
        <ul className="list-disc list-inside text-[14px] text-gray-100 space-y-2 pl-2">
          <li className="leading-relaxed">
            Expert in <span className="text-cyan-300 font-semibold">git rebase, cherry-pick, stash</span> command line operations
          </li>
          <li className="leading-relaxed">
            Implemented <span className="text-yellow-300 font-medium">CI/CD via GitHub Actions</span> for automated workflows
          </li>
          <li className="leading-relaxed">
            Follow <span className="text-purple-300">conventional commit standards</span> and pull request reviews
          </li>
          <li className="leading-relaxed">
            Utilize <span className="text-blue-300">repository analytics</span> for project insights and optimization
          </li>
        </ul>
      </div>
    </div>
  </VerticalTimelineElement>
);

export default GitHubCard;
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/install-tabs.scss';
import { Link } from 'gatsby';

const InstallTabs = (): JSX.Element => {
  return (
    <Tabs>
      <div className="install__header">
        <div className="install__header-circles">
          <div className="install__header-grey-circle" />
          <div className="install__header-grey-circle" />
          <div className="install__header-grey-circle" />
        </div>
        <div className="install__header-text">bash</div>
      </div>
      <TabList>
        <Tab>Mac OS</Tab>
        <Tab>Windows</Tab>
        <Tab>Ubuntu / Debian</Tab>
      </TabList>

      <TabPanel>
        <div>
          <p>
            Download the <Link to="/download">macOS Installer</Link> directly
            from the nodejs.org website.
          </p>
          <h2>Alternatives</h2>
          <p>
            Using{' '}
            <a href="https://brew.sh" target="_blank" rel="noopener noreferrer">
              Homebrew
            </a>
          </p>
          <code className="install__text">brew install node</code>
          <p>
            Using{' '}
            <a
              href="https://www.macports.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Macports
            </a>
          </p>

          <code className="install__text">port install nodejs14</code>
          <p>
            Using{' '}
            <a
              href="https://github.com/nvm-sh/nvm"
              target="_blank"
              rel="noopener noreferrer"
            >
              nvm
            </a>
          </p>
          <code className="install__text">
            curl -o-
            https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh |
            bash
          </code>
          <br />
          {/* TODO when the new docs page is ready link to that page.  */}
          <button type="button" className="install__docs-button">
            <a
              className="install__docs-button-text"
              href="https://nodejs.org/en/download/package-manager/#macos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read documentation
            </a>
          </button>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <p>
            Download the <Link to="/download">Windows Installer</Link> directly
            from the nodejs.org web site.
          </p>
          <h2>Alternatives</h2>
          <p> Using Chocolatey:</p>
          <code className="install__text">cinst nodejs</code>
          <p>Using Scoop:</p>
          <code className="install__text">scoop install nodejs</code>
          <br />
          <button type="button" className="install__docs-button">
            <a
              className="install__docs-button-text"
              href="https://nodejs.org/en/download/package-manager/#windows"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read documentation
            </a>
          </button>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <h2>
            Debian and Ubuntu based Linux distributions, Enterprise Linux/Fedora
            and Snap packages
          </h2>
          <p>
            <a href="https://github.com/nodesource/distributions/blob/master/README.md">
              Node.js binary distributions
            </a>{' '}
            are available from NodeSource.
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default InstallTabs;

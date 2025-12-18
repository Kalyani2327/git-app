// MODULES object: each module is an array of {question, options, answer}
const MODULES = {
  basics: [
    {
      question: "What is Git?",
      options: [
        "A hosted code service",
        "A version control system (VCS)",
        "A continuous integration tool",
        "A package manager"
      ],
      answer: "A version control system (VCS)"
    },
    {
      question: "What is GitHub?",
      options: [
        "A cloud-based Git repository hosting service",
        "A local Git client",
        "A programming language",
        "A database system"
      ],
      answer: "A cloud-based Git repository hosting service"
    },
    {
      question: "What is a commit in Git?",
      options: [
        "A saved snapshot of changes",
        "A remote repository",
        "A branch name",
        "A deleted file"
      ],
      answer: "A saved snapshot of changes"
    },
  {
    question: "Which command initializes a new Git repository?",
    options: ["git start", "git init", "git create", "git setup"],
    answer: "git init"
  },
  {
    question: "Which command stages files for commit?",
    options: ["git stage", "git add", "git commit", "git save"],
    answer: "git add"
  },
  {
    question: "Which command sends committed changes to a remote repository?",
    options: ["git push", "git pull", "git commit", "git fetch"],
    answer: "git push"
  },
  {
    question: "Which command updates your local repository with changes from a remote repository?",
    options: ["git pull", "git push", "git clone", "git merge"],
    answer: "git pull"
  },
  {
    question: "Which command shows the status of files in the repository?",
    options: ["git status", "git info", "git log", "git check"],
    answer: "git status"
  },
  {
    question: "Which command shows the commit history of a repository?",
    options: ["git log", "git history", "git show", "git info"],
    answer: "git log"
  },
  {
    question: "Which command clones a repository from GitHub?",
    options: ["git clone", "git pull", "git fetch", "git copy"],
    answer: "git clone"
  },
  {
    question: "Which file tells Git which files to ignore?",
    options: [".gitignore", ".gitconfig", ".gitattributes", ".ignore"],
    answer: ".gitignore"
  },
  {
    question: "What is the purpose of Git?",
    options: [
      "Tracking changes in files and coordinating code development",
      "Hosting websites",
      "Editing code",
      "Compiling programs"
    ],
    answer: "Tracking changes in files and coordinating code development"
  },
  {
    question: "What is GitHub primarily used for?",
    options: [
      "Hosting Git repositories online",
      "Running code locally",
      "Compiling programs",
      "Debugging errors"
    ],
    answer: "Hosting Git repositories online"
  },
  {
    question: "What is a repository in Git?",
    options: [
      "A storage space for your project and its history",
      "A programming language",
      "A server",
      "A text file"
    ],
    answer: "A storage space for your project and its history"
  },
  {
    question: "What is a commit in Git?",
    options: [
      "A saved snapshot of changes in the repository",
      "A branch",
      "A remote repository",
      "A Git command to delete files"
    ],
    answer: "A saved snapshot of changes in the repository"
  },
  {
    question: "What is a branch in Git?",
    options: [
      "A separate line of development in a project",
      "A copy of a repository on your computer",
      "A remote repository",
      "A commit"
    ],
    answer: "A separate line of development in a project"
  },
  {
    question: "What is a pull request on GitHub?",
    options: [
      "A request to merge code from one branch to another",
      "A request to delete a repository",
      "A request to clone a repository",
      "A request to create a branch"
    ],
    answer: "A request to merge code from one branch to another"
  },
  {
    question: "What is the difference between Git and GitHub?",
    options: [
      "Git is version control software; GitHub is a cloud hosting service for Git repositories",
      "Git is online; GitHub is offline",
      "Git is a programming language; GitHub is a code editor",
      "They are the same thing"
    ],
    answer: "Git is version control software; GitHub is a cloud hosting service for Git repositories"
  },
  {
    question: "Which command updates your repository with new commits from a remote branch?",
    options: ["git pull", "git push", "git fetch", "git clone"],
    answer: "git pull"
  },
  {
    question: "Which command uploads your local commits to GitHub?",
    options: ["git push", "git pull", "git clone", "git fetch"],
    answer: "git push"
  }
],
  git: [
  {
    question: "What type of version control system is Git?",
    options: ["Centralized", "Distributed", "Manual", "Cloud-only"],
    answer: "Distributed"
  },
  {
    question: "Who created Git?",
    options: ["Bill Gates", "Linus Torvalds", "Mark Zuckerberg", "Guido van Rossum"],
    answer: "Linus Torvalds"
  },
  {
    question: "In which year was Git first released?",
    options: ["1999", "2005", "2010", "2015"],
    answer: "2005"
  },
  {
    question: "Which folder stores all Git data in a repository?",
    options: [".repo", ".git", ".vcs", "config"],
    answer: ".git"
  },
  {
    question: "What is the main advantage of Git?",
    options: [
      "It works offline and online with full history",
      "It auto-compiles code",
      "It hosts repositories online only",
      "It is a programming language"
    ],
    answer: "It works offline and online with full history"
  },
  {
    question: "Which of the following is NOT a feature of Git?",
    options: ["Branching and merging", "Commit history", "Staging area", "Automatic bug fixing"],
    answer: "Automatic bug fixing"
  },
  {
    question: "What is a repository in Git?",
    options: [
      "A collection of commits and branches",
      "A cloud storage bucket",
      "A programming library",
      "A build tool"
    ],
    answer: "A collection of commits and branches"
  },
  {
    question: "Which file is used to ignore specific files in Git?",
    options: [".ignore", ".gitignore", ".config", "ignore.txt"],
    answer: ".gitignore"
  },
  {
    question: "What is a commit in Git?",
    options: [
      "A snapshot of changes in a project",
      "A backup of a branch",
      "A GitHub pull request",
      "A type of branch"
    ],
    answer: "A snapshot of changes in a project"
  },
  {
    question: "Which command shows the current status of files in Git?",
    options: ["git log", "git status", "git show", "git diff"],
    answer: "git status"
  },
  {
    question: "What is the default branch name in recent Git versions?",
    options: ["master", "main", "origin", "develop"],
    answer: "main"
  },
  {
    question: "Which command initializes a new Git repository?",
    options: ["git init", "git new", "git repo", "git start"],
    answer: "git init"
  },
  {
    question: "Which company owns GitHub?",
    options: ["Google", "Microsoft", "Apple", "Amazon"],
    answer: "Microsoft"
  },
  {
    question: "What is the staging area in Git?",
    options: [
      "Temporary storage before commit",
      "Cloud backup folder",
      "A test environment",
      "Remote repository cache"
    ],
    answer: "Temporary storage before commit"
  },
  {
    question: "What does HEAD represent in Git?",
    options: [
      "The first commit in the repo",
      "The current commit/branch you are on",
      "The main branch only",
      "The remote repository"
    ],
    answer: "The current commit/branch you are on"
  },
  {
    question: "Which command removes a file from tracking but keeps it locally?",
    options: [
      "git rm file.txt",
      "git rm --cached file.txt",
      "git delete file.txt",
      "git discard file.txt"
    ],
    answer: "git rm --cached file.txt"
  },
  {
    question: "Which file contains project-level Git config settings?",
    options: [".git/config", ".gitignore", "config.json", "settings.yml"],
    answer: ".git/config"
  },
  {
    question: "Which distributed VCS is an alternative to Git?",
    options: ["SVN", "Mercurial", "CVS", "Perforce"],
    answer: "Mercurial"
  },
  {
    question: "Which command shows the last commit?",
    options: ["git log -1", "git last", "git recent", "git head"],
    answer: "git log -1"
  },
  {
    question: "What command shows a summary of commits in compact form?",
    options: ["git log --oneline", "git history compact", "git commit --short", "git show --one"],
    answer: "git log --oneline"
  }
],
difference: [
  {
    question: "What is Git?",
    options: [
      "A distributed version control system",
      "A cloud hosting service",
      "A programming language",
      "An IDE"
    ],
    answer: "A distributed version control system"
  },
  {
    question: "What is GitHub?",
    options: [
      "A cloud-based hosting service for Git repositories",
      "A replacement for Git",
      "A type of Git branch",
      "A command-line tool"
    ],
    answer: "A cloud-based hosting service for Git repositories"
  },
  {
    question: "Which of the following can work offline?",
    options: ["Git", "GitHub", "Both", "Neither"],
    answer: "Git"
  },
  {
    question: "Which of the following provides issue tracking?",
    options: ["Git", "GitHub", "Both", "None"],
    answer: "GitHub"
  },
  {
    question: "Which of the following is installed locally on your system?",
    options: ["Git", "GitHub", "Both", "None"],
    answer: "Git"
  },
  {
    question: "Which company owns GitHub?",
    options: ["Google", "Microsoft", "Amazon", "Oracle"],
    answer: "Microsoft"
  },
  {
    question: "Which file sharing model does Git use?",
    options: ["Distributed", "Centralized", "Cloud-only", "Peer-to-Peer"],
    answer: "Distributed"
  },
  {
    question: "Which is required to use GitHub?",
    options: ["Internet connection", "Local repo only", "Git always", "None"],
    answer: "Internet connection"
  },
  {
    question: "Which one can you use without the other?",
    options: [
      "You can use Git without GitHub",
      "You can use GitHub without Git",
      "Neither can be used alone",
      "Both require each other"
    ],
    answer: "You can use Git without GitHub"
  },
  {
    question: "Which provides CI/CD pipelines (Actions)?",
    options: ["GitHub", "Git", "Both", "None"],
    answer: "GitHub"
  },
  {
    question: "Which one is open-source software?",
    options: ["Git", "GitHub", "Both", "None"],
    answer: "Git"
  },
  {
    question: "Which one is a proprietary product?",
    options: ["GitHub", "Git", "Both", "None"],
    answer: "GitHub"
  },
  {
    question: "Which is written in the C language?",
    options: ["Git", "GitHub", "Both", "None"],
    answer: "Git"
  },
  {
    question: "Which is primarily a web-based platform?",
    options: ["Git", "GitHub", "Both", "None"],
    answer: "GitHub"
  },
  {
    question: "Which allows pull requests and code reviews?",
    options: ["GitHub", "Git", "Both", "None"],
    answer: "GitHub"
  },
  {
    question: "Which allows branching and merging locally?",
    options: ["Git", "GitHub", "Both", "None"],
    answer: "Git"
  },
  {
    question: "Which provides project insights, graphs, and stats?",
    options: ["GitHub", "Git", "Both", "None"],
    answer: "GitHub"
  },
  {
    question: "Which can be hosted on your own server without third parties?",
    options: ["Git", "GitHub", "Both", "None"],
    answer: "Git"
  },
  {
    question: "Which requires an account to use?",
    options: ["GitHub", "Git", "Both", "None"],
    answer: "GitHub"
  },
  {
    question: "Which one is essential for version control itself?",
    options: ["Git", "GitHub", "Both", "None"],
    answer: "Git"
  }
],
commands: [
  {
    question: "Which command initializes a new Git repository?",
    options: ["git start", "git init", "git new", "git repo"],
    answer: "git init"
  },
  {
    question: "Which command stages a file for commit?",
    options: ["git stage file.txt", "git add file.txt", "git commit file.txt", "git save file.txt"],
    answer: "git add file.txt"
  },
  {
    question: "Which command creates a commit with a message?",
    options: [
      "git commit -m \"message\"",
      "git save -m \"message\"",
      "git add -m \"message\"",
      "git push -m \"message\""
    ],
    answer: "git commit -m \"message\""
  },
  {
    question: "Which command shows the history of commits?",
    options: ["git log", "git status", "git history", "git show"],
    answer: "git log"
  },
  {
    question: "Which command displays the current state of the repo?",
    options: ["git state", "git show", "git status", "git check"],
    answer: "git status"
  },
  {
    question: "Which command shows unstaged changes in files?",
    options: ["git show", "git diff", "git changes", "git reflog"],
    answer: "git diff"
  },
  {
    question: "Which command shows who last modified each line?",
    options: ["git blame", "git log", "git author", "git track"],
    answer: "git blame"
  },
  {
    question: "Which command creates a new branch?",
    options: ["git branch new-feature", "git create branch new-feature", "git init branch", "git add branch"],
    answer: "git branch new-feature"
  },
  {
    question: "Which command switches to another branch?",
    options: ["git move branch", "git checkout branchname", "git switch branchname", "git jump branch"],
    answer: "git checkout branchname"
  },
  {
    question: "Which command deletes a local branch?",
    options: ["git delete branchname", "git remove branchname", "git branch -d branchname", "git discard branchname"],
    answer: "git branch -d branchname"
  },
  {
    question: "Which command merges another branch into current?",
    options: ["git join", "git merge branchname", "git commit branchname", "git combine branchname"],
    answer: "git merge branchname"
  },
  {
    question: "Which command pushes commits to remote?",
    options: ["git push", "git send", "git upload", "git deploy"],
    answer: "git push"
  },
  {
    question: "Which command fetches changes from remote without merging?",
    options: ["git pull", "git fetch", "git update", "git download"],
    answer: "git fetch"
  },
  {
    question: "Which command pulls changes from remote and merges?",
    options: ["git update", "git merge", "git pull", "git receive"],
    answer: "git pull"
  },
  {
    question: "Which command resets staged file?",
    options: ["git unstage file.txt", "git reset file.txt", "git discard file.txt", "git remove file.txt"],
    answer: "git reset file.txt"
  },
  {
    question: "Which command reverts a commit by creating a new one?",
    options: ["git reset", "git undo", "git revert", "git rollback"],
    answer: "git revert"
  },
  {
    question: "Which command undoes last commit but keeps changes?",
    options: [
      "git reset --soft HEAD~1",
      "git reset --hard HEAD~1",
      "git undo last",
      "git commit --amend"
    ],
    answer: "git reset --soft HEAD~1"
  },
  {
    question: "Which command undoes last commit and discards changes?",
    options: [
      "git reset --hard HEAD~1",
      "git reset --soft HEAD~1",
      "git discard last",
      "git undo commit"
    ],
    answer: "git reset --hard HEAD~1"
  },
  {
    question: "Which command shows the reflog?",
    options: ["git reflog", "git log --ref", "git history", "git headlog"],
    answer: "git reflog"
  },
  {
    question: "Which command configures username globally?",
    options: [
      "git config --global user.name \"Your Name\"",
      "git set username",
      "git init --name",
      "git user add"
    ],
    answer: "git config --global user.name \"Your Name\""
  }
],
clone: [
  {
    question: "What does `git clone` do?",
    options: [
      "Copies a remote repo locally",
      "Deletes a repo",
      "Initializes a repo",
      "Uploads code"
    ],
    answer: "Copies a remote repo locally"
  },
  {
    question: "What is the correct syntax to clone?",
    options: ["git clone <url>", "git copy <url>", "git fetch <url>", "git download <url>"],
    answer: "git clone <url>"
  },
  {
    question: "Which option clones a specific branch?",
    options: [
      "git clone -b branch <url>",
      "git clone branch=<name>",
      "git fetch branch <url>",
      "git branch clone <url>"
    ],
    answer: "git clone -b branch <url>"
  },
  {
    question: "Which option makes a shallow clone?",
    options: [
      "git clone --depth 1 <url>",
      "git clone --shallow <url>",
      "git clone --light <url>",
      "git fetch --depth 1"
    ],
    answer: "git clone --depth 1 <url>"
  },
  {
    question: "What is cloned along with the repository?",
    options: ["Full history + branches", "Only latest commit", "Only README.md", "No history"],
    answer: "Full history + branches"
  },
  {
    question: "What happens if you clone into an existing folder?",
    options: ["Git throws an error", "It merges automatically", "It overwrites files", "It deletes folder first"],
    answer: "Git throws an error"
  },
  {
    question: "Which protocol is commonly used for cloning?",
    options: ["HTTPS or SSH", "FTP only", "SMTP", "Telnet"],
    answer: "HTTPS or SSH"
  },
  {
    question: "Which option clones with submodules?",
    options: [
      "git clone --recurse-submodules <url>",
      "git clone --modules <url>",
      "git fetch --sub <url>",
      "git add --submodules <url>"
    ],
    answer: "git clone --recurse-submodules <url>"
  },
  {
    question: "Which command verifies the remote after clone?",
    options: ["git remote -v", "git check remote", "git info", "git remotes"],
    answer: "git remote -v"
  },
  {
    question: "Which option prevents downloading all history?",
    options: ["--depth 1", "--no-history", "--skip-commits", "--short"],
    answer: "--depth 1"
  },
  {
    question: "What is a bare clone?",
    options: [
      "Repo with Git data only, no working directory",
      "Repo with only files, no history",
      "Repo cloned without branches",
      "Temporary backup clone"
    ],
    answer: "Repo with Git data only, no working directory"
  },
  {
    question: "Which command creates a bare clone?",
    options: [
      "git clone --bare <url>",
      "git clone bare <url>",
      "git clone --no-work <url>",
      "git init --bare <url>"
    ],
    answer: "git clone --bare <url>"
  },
  {
    question: "Which command updates a cloned repository?",
    options: ["git pull", "git clone again", "git sync", "git push"],
    answer: "git pull"
  },
  {
    question: "What is the default folder name after cloning?",
    options: ["Same as repo name", "always 'repo'", "user’s folder", "git_projects"],
    answer: "Same as repo name"
  },
  {
    question: "Which flag sets a custom folder name while cloning?",
    options: [
      "git clone <url> custom_folder",
      "git clone --name custom_folder",
      "git clone --path custom_folder",
      "git fetch <url> custom_folder"
    ],
    answer: "git clone <url> custom_folder"
  },
  {
    question: "Which command clones tags?",
    options: [
      "git clone --tags <url>",
      "git clone --all-tags <url>",
      "git clone --labels <url>",
      "git fetch --tags <url>"
    ],
    answer: "git clone --tags <url>"
  },
  {
    question: "Which option clones all branches?",
    options: [
      "git clone --mirror <url>",
      "git clone --all <url>",
      "git clone --branches <url>",
      "git fetch --all"
    ],
    answer: "git clone --mirror <url>"
  },
  {
    question: "Which is true after cloning?",
    options: [
      "You are checked out to default branch",
      "You must run git init",
      "Repo is empty until pull",
      "Repo only has HEAD"
    ],
    answer: "You are checked out to default branch"
  },
  {
    question: "What command clones a repo with authentication?",
    options: [
      "git clone https://username@github.com/user/repo.git",
      "git clone auth:<url>",
      "git clone --login <url>",
      "git fetch --auth <url>"
    ],
    answer: "git clone https://username@github.com/user/repo.git"
  },
  {
    question: "Which file always exists in a cloned repo?",
    options: [".git directory", "README.md", "LICENSE", ".env"],
    answer: ".git directory"
  }
],
pull: [
  {
    question: "What does `git pull` do?",
    options: [
      "Fetches and merges changes from remote",
      "Uploads commits to remote",
      "Creates a new branch",
      "Deletes commits"
    ],
    answer: "Fetches and merges changes from remote"
  },
  {
    question: "What is the difference between `git pull` and `git fetch`?",
    options: [
      "Pull = fetch + merge, Fetch = only download",
      "Fetch = fetch + merge, Pull = only download",
      "Both are identical",
      "Pull works offline, Fetch works online"
    ],
    answer: "Pull = fetch + merge, Fetch = only download"
  },
  {
    question: "Which command updates your local branch with remote changes?",
    options: ["git push", "git pull", "git clone", "git merge"],
    answer: "git pull"
  },
  {
    question: "Which flag rebases instead of merging while pulling?",
    options: [
      "git pull --rebase",
      "git pull --reset",
      "git pull --rewrite",
      "git pull --hard"
    ],
    answer: "git pull --rebase"
  },
  {
    question: "What happens if there are conflicts during `git pull`?",
    options: [
      "Git stops and asks you to resolve conflicts",
      "Git ignores conflicts",
      "Git deletes files",
      "Git resets branch"
    ],
    answer: "Git stops and asks you to resolve conflicts"
  },
  {
    question: "Which command is equivalent to `git pull`?",
    options: [
      "git fetch + git merge",
      "git fetch + git push",
      "git clone + git merge",
      "git commit + git fetch"
    ],
    answer: "git fetch + git merge"
  },
  {
    question: "Which command pulls from a specific remote and branch?",
    options: ["git pull origin main", "git pull branch main", "git pull --branch main", "git pull --origin"],
    answer: "git pull origin main"
  },
  {
    question: "Which error may occur if your local branch has diverged?",
    options: [
      "Merge conflict",
      "Authentication error",
      "Detached HEAD",
      "No remote found"
    ],
    answer: "Merge conflict"
  },
  {
    question: "Which command discards local changes and forces remote updates?",
    options: [
      "git reset --hard origin/main",
      "git pull --force",
      "git clone --overwrite",
      "git sync --hard"
    ],
    answer: "git reset --hard origin/main"
  },
  {
    question: "What happens if you run `git pull` without a remote set?",
    options: [
      "Git shows an error",
      "Git clones repo again",
      "Git pulls from GitHub automatically",
      "Git initializes a new repo"
    ],
    answer: "Git shows an error"
  },
  {
    question: "Which option limits the number of commits fetched?",
    options: [
      "git pull --depth=1",
      "git pull --shallow",
      "git pull --limit 1",
      "git pull --short"
    ],
    answer: "git pull --depth=1"
  },
  {
    question: "What is the default remote name used with `git pull`?",
    options: ["main", "origin", "remote", "master"],
    answer: "origin"
  },
  {
    question: "Which situation requires `git pull --rebase`?",
    options: [
      "When you want a linear history",
      "When merging binary files",
      "When deleting commits",
      "When cloning a repo"
    ],
    answer: "When you want a linear history"
  },
  {
    question: "What happens if your branch is up to date when running `git pull`?",
    options: [
      "Git reports 'Already up to date'",
      "Git deletes old commits",
      "Git re-clones repository",
      "Git renames the branch"
    ],
    answer: "Git reports 'Already up to date'"
  },
  {
    question: "Which error occurs if credentials are wrong during pull?",
    options: [
      "Authentication failed",
      "Merge conflict",
      "Detached HEAD",
      "Unknown branch"
    ],
    answer: "Authentication failed"
  },
  {
    question: "Which command pulls changes but does not fast-forward?",
    options: [
      "git pull --no-ff",
      "git pull --hard",
      "git pull --merge-only",
      "git pull --reset"
    ],
    answer: "git pull --no-ff"
  },
  {
    question: "How do you pull all branches from remote?",
    options: [
      "git fetch --all && git pull --all",
      "git pull all",
      "git clone all",
      "git pull --branches"
    ],
    answer: "git fetch --all && git pull --all"
  },
  {
    question: "Which command sets upstream for future pulls?",
    options: [
      "git push -u origin branch",
      "git pull -u origin branch",
      "git set upstream branch",
      "git init upstream"
    ],
    answer: "git push -u origin branch"
  },
  {
    question: "What does 'fast-forward' mean in `git pull`?",
    options: [
      "Branch pointer moves without new merge commit",
      "Branch is reset to remote",
      "Repo is cloned again",
      "Branch is deleted"
    ],
    answer: "Branch pointer moves without new merge commit"
  },
  {
    question: "Which command shows merged commits after a pull?",
    options: ["git log --merges", "git show merges", "git pull --log", "git status -m"],
    answer: "git log --merges"
  }
],
collaboration: [
  {
    question: "What is a fork on GitHub?",
    options: [
      "A copy of a repository under your account",
      "A new branch in the same repo",
      "A Git commit",
      "A local clone only"
    ],
    answer: "A copy of a repository under your account"
  },
  {
    question: "What is a pull request?",
    options: [
      "A request to merge your changes into another branch",
      "A command to pull from remote",
      "A new commit request",
      "A branch creation"
    ],
    answer: "A request to merge your changes into another branch"
  },
  {
    question: "Which GitHub feature allows discussion on issues?",
    options: ["Issues tab", "Commits", "Branches", "Forks"],
    answer: "Issues tab"
  },
  {
    question: "Which command uploads your commits to remote?",
    options: ["git push", "git pull", "git upload", "git merge"],
    answer: "git push"
  },
  {
    question: "How do collaborators sync with latest remote changes?",
    options: ["git pull", "git sync", "git fetch --sync", "git download"],
    answer: "git pull"
  },
  {
    question: "Which is used for suggesting changes in someone’s repo?",
    options: ["Pull request", "Push request", "Branch request", "Commit request"],
    answer: "Pull request"
  },
  {
    question: "Which role allows someone to approve PRs?",
    options: ["Collaborator", "Committer", "Reviewer", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which GitHub action is used to track bugs?",
    options: ["Issues", "Branches", "Commits", "Tags"],
    answer: "Issues"
  },
  {
    question: "Which GitHub feature automates workflows?",
    options: ["Actions", "Projects", "Issues", "Releases"],
    answer: "Actions"
  },
  {
    question: "Which command shows configured remotes?",
    options: ["git remote -v", "git show remotes", "git remotes", "git origin"],
    answer: "git remote -v"
  },
  {
    question: "What is required to contribute to open-source projects?",
    options: [
      "Fork repo and create pull request",
      "Directly edit main branch",
      "Email project owner",
      "Clone without changes"
    ],
    answer: "Fork repo and create pull request"
  },
  {
    question: "Which is true about collaboration in Git?",
    options: [
      "Multiple people can work simultaneously",
      "Only one user can edit at a time",
      "Commits overwrite each other",
      "Branches cannot be merged"
    ],
    answer: "Multiple people can work simultaneously"
  },
  {
    question: "Which GitHub feature organizes tasks?",
    options: ["Projects (Kanban board)", "Actions", "Commits", "Tags"],
    answer: "Projects (Kanban board)"
  },
  {
    question: "What is needed to push to a repo you don’t own?",
    options: ["Collaborator access", "Public repo", "Nothing", "Rebase access"],
    answer: "Collaborator access"
  },
  {
    question: "Which allows code review before merging?",
    options: ["Pull requests", "Commits", "Branches", "Tags"],
    answer: "Pull requests"
  },
  {
    question: "Which command adds a new remote?",
    options: ["git remote add origin <url>", "git push add <url>", "git remote create <url>", "git clone <url>"],
    answer: "git remote add origin <url>"
  },
  {
    question: "What does `origin` usually represent?",
    options: ["Default name for remote repo", "Main branch", "HEAD commit", "Local folder"],
    answer: "Default name for remote repo"
  },
  {
    question: "Which GitHub feature stores releases?",
    options: ["Releases tab", "Branches", "Actions", "Tags only"],
    answer: "Releases tab"
  },
  {
    question: "Which is the most common workflow in GitHub collaboration?",
    options: [
      "Fork → Clone → Branch → Commit → Push → Pull Request",
      "Direct edit main",
      "Clone → Commit → Push → Done",
      "No branching"
    ],
    answer: "Fork → Clone → Branch → Commit → Push → Pull Request"
  },
  {
    question: "Which role can delete a GitHub repository?",
    options: ["Owner", "Collaborator", "Reviewer", "Contributor"],
    answer: "Owner"
  }
],
branching: [
  {
    question: "What is a branch in Git?",
    options: [
      "A separate line of development",
      "A copy of a repository",
      "A staging area",
      "A commit message"
    ],
    answer: "A separate line of development"
  },
  {
    question: "Which command creates a new branch?",
    options: [
      "git branch feature",
      "git new branch feature",
      "git init branch feature",
      "git checkout feature"
    ],
    answer: "git branch feature"
  },
  {
    question: "Which command switches to a branch?",
    options: [
      "git checkout branchname",
      "git switch-to branchname",
      "git enter branchname",
      "git move branchname"
    ],
    answer: "git checkout branchname"
  },
  {
    question: "Which command creates and switches in one step?",
    options: [
      "git checkout -b newbranch",
      "git branch -c newbranch",
      "git switch newbranch",
      "git new newbranch"
    ],
    answer: "git checkout -b newbranch"
  },
  {
    question: "Which command lists all branches?",
    options: ["git branch", "git show branches", "git list branches", "git status --branches"],
    answer: "git branch"
  },
  {
    question: "Which branch is created by default in new repos?",
    options: ["main", "master", "origin", "develop"],
    answer: "main"
  },
  {
    question: "Which command deletes a branch locally?",
    options: ["git branch -d branchname", "git delete branch branchname", "git remove branchname", "git drop branchname"],
    answer: "git branch -d branchname"
  },
  {
    question: "Which flag forces branch deletion?",
    options: ["git branch -D branchname", "git branch --force", "git rm branchname", "git checkout --delete"],
    answer: "git branch -D branchname"
  },
  {
    question: "Which command renames a branch?",
    options: [
      "git branch -m oldname newname",
      "git rename branch old new",
      "git mv branch old new",
      "git switch --rename"
    ],
    answer: "git branch -m oldname newname"
  },
  {
    question: "Which branch is recommended for stable production code?",
    options: ["main", "develop", "feature", "hotfix"],
    answer: "main"
  },
  {
    question: "Which branch is typically used for new features?",
    options: ["feature branches", "main branch", "hotfix branch", "origin branch"],
    answer: "feature branches"
  },
  {
    question: "Which branch is used to fix urgent issues?",
    options: ["hotfix branch", "develop branch", "origin branch", "backup branch"],
    answer: "hotfix branch"
  },
  {
    question: "Which workflow uses develop + feature branches?",
    options: ["Git Flow", "Centralized", "Trunk-based", "Fork workflow"],
    answer: "Git Flow"
  },
  {
    question: "Which workflow avoids long-lived branches?",
    options: ["Trunk-based", "Git Flow", "Fork workflow", "Centralized workflow"],
    answer: "Trunk-based"
  },
  {
    question: "Which command merges a branch into current branch?",
    options: ["git merge branchname", "git checkout branchname", "git pull branchname", "git push branchname"],
    answer: "git merge branchname"
  },
  {
    question: "Which command pushes a new branch to remote?",
    options: ["git push -u origin branchname", "git push branchname", "git upload branch branchname", "git send branchname"],
    answer: "git push -u origin branchname"
  },
  {
    question: "Which branch name points to remote main?",
    options: ["origin/main", "remote/main", "git/main", "upstream/main"],
    answer: "origin/main"
  },
  {
    question: "What is a detached HEAD state?",
    options: [
      "When HEAD points to a commit instead of a branch",
      "When repo is corrupted",
      "When branch is empty",
      "When no commits exist"
    ],
    answer: "When HEAD points to a commit instead of a branch"
  },
  {
    question: "Which command shows merged branches?",
    options: ["git branch --merged", "git branch --all", "git branch -a", "git show-branches"],
    answer: "git branch --merged"
  },
  {
    question: "Which command shows unmerged branches?",
    options: ["git branch --no-merged", "git branch -u", "git branch --not", "git branch --left"],
    answer: "git branch --no-merged"
  }
],
merge_conflicts: [
  {
    question: "What is a merge conflict?",
    options: [
      "When two branches modify the same lines differently",
      "When internet is disconnected",
      "When repo is cloned twice",
      "When commits are missing"
    ],
    answer: "When two branches modify the same lines differently"
  },
  {
    question: "Which symbols mark conflict sections in files?",
    options: [
      "<<<<<<<, =======, >>>>>>>",
      "****, ####, @@@@",
      "BEGIN, MID, END",
      "====, ----, ++++"
    ],
    answer: "<<<<<<<, =======, >>>>>>>"
  },
  {
    question: "When do merge conflicts commonly occur?",
    options: [
      "During merging branches",
      "During cloning",
      "During git init",
      "During git status"
    ],
    answer: "During merging branches"
  },
  {
    question: "How do you resolve a merge conflict?",
    options: [
      "Manually edit conflicting files and commit",
      "Run git fix-conflicts",
      "Re-clone the repo",
      "Delete the branch"
    ],
    answer: "Manually edit conflicting files and commit"
  },
  {
    question: "Which command aborts a merge?",
    options: ["git merge --abort", "git reset --abort", "git stop merge", "git exit"],
    answer: "git merge --abort"
  },
  {
    question: "Which command continues after conflicts are resolved?",
    options: ["git add + git commit", "git merge --continue", "git status --resolved", "git finish"],
    answer: "git add + git commit"
  },
  {
    question: "Which command helps to visualize conflicts?",
    options: ["git diff", "git log", "git status", "git blame"],
    answer: "git diff"
  },
  {
    question: "What happens if conflicts are not resolved?",
    options: [
      "Git will not complete the merge",
      "Git auto-selects changes",
      "Git deletes conflicted files",
      "Git ignores conflicts"
    ],
    answer: "Git will not complete the merge"
  },
  {
    question: "Which git config enables conflict style with base?",
    options: [
      "git config merge.conflictstyle diff3",
      "git config merge.conflictstyle simple",
      "git config conflict=base",
      "git config merge.base true"
    ],
    answer: "git config merge.conflictstyle diff3"
  },
  {
    question: "Which scenario does NOT cause a conflict?",
    options: [
      "Two branches edit the same line",
      "Two branches delete the same file",
      "Two branches modify different lines",
      "Two branches rename the same file differently"
    ],
    answer: "Two branches modify different lines"
  },
  {
    question: "Which tool can be used to resolve conflicts graphically?",
    options: ["git mergetool", "git gui", "gitk", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which command shows files with conflicts?",
    options: ["git status", "git diff --name-only --diff-filter=U", "git conflicts", "git check"],
    answer: "git diff --name-only --diff-filter=U"
  },
  {
    question: "Which is true after a conflict occurs?",
    options: [
      "The merge stops until conflicts are resolved",
      "The merge completes automatically",
      "The repo resets",
      "The branch is deleted"
    ],
    answer: "The merge stops until conflicts are resolved"
  },
  {
    question: "Which step finalizes conflict resolution?",
    options: [
      "Stage resolved files and commit",
      "Run git resolve",
      "Run git reset",
      "Push to remote"
    ],
    answer: "Stage resolved files and commit"
  },
  {
    question: "Which command shows conflict markers inside files?",
    options: ["cat file.txt", "git show file.txt", "git diff file.txt", "git blame file.txt"],
    answer: "cat file.txt"
  },
  {
    question: "Which Git strategy may avoid conflicts?",
    options: ["Frequent pulls and small commits", "Never pulling", "Using only one branch", "Avoiding commits"],
    answer: "Frequent pulls and small commits"
  },
  {
    question: "Which option auto-merges unrelated histories?",
    options: [
      "git merge --allow-unrelated-histories",
      "git pull --allow",
      "git push --force",
      "git reset --merge"
    ],
    answer: "git merge --allow-unrelated-histories"
  },
  {
    question: "Which state indicates unresolved conflicts?",
    options: ["Unmerged paths", "Detached HEAD", "Clean tree", "Fast-forward"],
    answer: "Unmerged paths"
  },
  {
    question: "Which git command reattempts after fixing conflicts?",
    options: ["git merge --continue", "git commit --continue", "git reset --again", "git retry"],
    answer: "git merge --continue"
  },
  {
    question: "What’s the best practice after resolving conflicts?",
    options: [
      "Test code and run builds",
      "Delete repo",
      "Ignore tests",
      "Force push immediately"
    ],
    answer: "Test code and run builds"
  }
],
Assingment: [
  // 1
  {
    question: "You cloned a repository but notice a file is missing. Which command should you run to get the latest changes?",
    options: ["git pull", "git clone", "git fetch", "git init"],
    answer: "git pull"
  },
  // 2
  {
    question: "What is the difference between git fetch and git pull?",
    options: [
      "git fetch downloads changes, git pull downloads and merges",
      "git fetch deletes local changes, git pull merges only",
      "git fetch initializes repo, git pull pushes changes",
      "Both are the same"
    ],
    answer: "git fetch downloads changes, git pull downloads and merges"
  },
  // 3
  {
    question: "You accidentally committed a file to the wrong branch. How do you move it?",
    options: [
      "Use git cherry-pick or git reset",
      "Delete repo and reclone",
      "Use git push --force",
      "Run git clone again"
    ],
    answer: "Use git cherry-pick or git reset"
  },
  // 4
  {
    question: "Which Git command shows the current branch you are on?",
    options: ["git branch", "git status", "git log", "git checkout"],
    answer: "git branch"
  },
  // 5
  {
    question: "You want to create a new branch called 'feature-login'. Which command do you use?",
    options: [
      "git checkout -b feature-login",
      "git branch feature-login -c",
      "git new branch feature-login",
      "git create feature-login"
    ],
    answer: "git checkout -b feature-login"
  },
  // 6
  {
    question: "In a collaborative project, two people changed the same line in a file. What happens when you try to merge?",
    options: [
      "A merge conflict occurs",
      "Git automatically overwrites changes",
      "Changes are ignored",
      "Git deletes the file"
    ],
    answer: "A merge conflict occurs"
  },
  // 7
  {
    question: "You want to undo the last commit but keep changes staged. Which command do you use?",
    options: ["git reset --soft HEAD~1", "git reset --hard HEAD~1", "git revert HEAD", "git checkout HEAD~1"],
    answer: "git reset --soft HEAD~1"
  },
  // 8
  {
    question: "Which GitHub feature allows you to suggest changes to someone else's repository?",
    options: ["Fork", "Clone", "Pull Request", "Branch"],
    answer: "Pull Request"
  },
  // 9
  {
    question: "You want to delete a remote branch named 'feature-old'. Which command do you use?",
    options: [
      "git push origin --delete feature-old",
      "git branch -d feature-old",
      "git remove branch feature-old",
      "git delete feature-old"
    ],
    answer: "git push origin --delete feature-old"
  },
  // 10
  {
    question: "Which GitHub feature allows hosting static websites directly from the repository?",
    options: ["GitHub Pages", "GitHub Actions", "GitHub Wiki", "GitHub Projects"],
    answer: "GitHub Pages"
  },
  // 11
  {
    question: "You want to keep your forked repository up to date with the main repository. What do you do?",
    options: [
      "Add upstream remote, fetch upstream, merge changes",
      "Reclone the repository",
      "Delete fork and fork again",
      "Push directly to upstream"
    ],
    answer: "Add upstream remote, fetch upstream, merge changes"
  },
  // 12
  {
    question: "Which command stages all changes for the next commit?",
    options: ["git add .", "git commit -m", "git push", "git init"],
    answer: "git add ."
  },
  // 13
  {
    question: "Scenario: Your teammate pushed a branch that has failing tests. What is the best GitHub workflow to prevent merging?",
    options: [
      "Enable branch protection rules with required checks",
      "Ask teammate to delete branch",
      "Merge anyway",
      "Force push to main"
    ],
    answer: "Enable branch protection rules with required checks"
  },
  // 14
  {
    question: "Which command shows the commit history?",
    options: ["git log", "git history", "git status", "git commits"],
    answer: "git log"
  },
  // 15
  {
    question: "You want to combine multiple commits into a single one before merging. Which method do you use?",
    options: ["Squash and merge", "Rebase and merge", "Fast-forward merge", "Cherry-pick"],
    answer: "Squash and merge"
  },
  // 16
  {
    question: "Which GitHub feature automatically alerts you when dependencies are out of date or insecure?",
    options: ["Dependabot", "Actions", "Projects", "Issues"],
    answer: "Dependabot"
  },
  // 17
  {
    question: "Scenario: You accidentally committed sensitive data. What is the safest way to remove it from history?",
    options: [
      "Use git filter-repo or BFG Repo-Cleaner",
      "Delete repo and recreate",
      "Force push",
      "Revert commit"
    ],
    answer: "Use git filter-repo or BFG Repo-Cleaner"
  },
  // 18
  {
    question: "Which command reverts a commit while creating a new commit?",
    options: ["git revert <commit>", "git reset --hard <commit>", "git checkout <commit>", "git remove <commit>"],
    answer: "git revert <commit>"
  },
  // 19
  {
    question: "Scenario: You are working on multiple features simultaneously. What Git workflow is best?",
    options: [
      "Feature branching with pull requests",
      "Direct commits to main",
      "Single branch for all features",
      "Fork only workflow"
    ],
    answer: "Feature branching with pull requests"
  },
  // 20
  {
    question: "Which Git command shows changes that are staged and unstaged?",
    options: ["git status", "git diff", "git log", "git show"],
    answer: "git status"
  },
  // 21
  {
    question: "Scenario: Your pull request shows conflicts. What is the first step to resolve it?",
    options: [
      "Fetch latest changes and merge locally",
      "Force merge on GitHub",
      "Delete conflicting files",
      "Recreate PR"
    ],
    answer: "Fetch latest changes and merge locally"
  },
  // 22
  {
    question: "Which GitHub CLI command creates a new issue?",
    options: ["gh issue create", "git issue create", "gh new issue", "git bug new"],
    answer: "gh issue create"
  },
  // 23
  {
    question: "Scenario: You want to run CI/CD for your repo on GitHub. Which feature do you use?",
    options: ["GitHub Actions", "GitHub Pages", "GitHub Wiki", "Projects"],
    answer: "GitHub Actions"
  },
  // 24
  {
    question: "Which command discards changes in working directory files?",
    options: ["git checkout -- <file>", "git reset HEAD <file>", "git rm <file>", "git commit --amend"],
    answer: "git checkout -- <file>"
  },
  // 25
  {
    question: "Scenario: You want to assign a reviewer to a pull request using CLI. Which command is correct?",
    options: ["gh pr edit --add-reviewer <user>", "git reviewer add", "gh assign reviewer", "git pr reviewer"],
    answer: "gh pr edit --add-reviewer <user>"
  },
  // 26
  {
    question: "You want to check which files changed in the last commit. Which command do you use?",
    options: ["git show --name-only", "git diff HEAD~1", "git log --files", "git status"],
    answer: "git show --name-only"
  },
  // 27
  {
    question: "Scenario: You want to create a template repository for others to use. How?",
    options: [
      "Enable 'Template repository' in repo settings",
      "git init template",
      "gh repo template",
      "git clone --template"
    ],
    answer: "Enable 'Template repository' in repo settings"
  },
  // 28
  {
    question: "Which command downloads a repository as a ZIP file?",
    options: ["From GitHub → Code → Download ZIP", "git download zip", "gh repo zip", "git clone --zip"],
    answer: "From GitHub → Code → Download ZIP"
  },
  // 29
  {
    question: "Scenario: You need to synchronize your fork with the main repository. What is the correct sequence?",
    options: [
      "git fetch upstream → git merge upstream/main",
      "git clone again",
      "git push origin main",
      "git rebase origin main"
    ],
    answer: "git fetch upstream → git merge upstream/main"
  },
  // 30
  {
    question: "Which command shows all remote repositories linked to your local repo?",
    options: ["git remote -v", "git repo list", "git fetch -r", "git links"],
    answer: "git remote -v"
  },
  // 31
  {
    question: "Scenario: You want to make your repository private. Where do you configure this?",
    options: ["Settings → Change visibility", "git config private", "gh repo hide", "git private repo"],
    answer: "Settings → Change visibility"
  },
  // 32
  {
    question: "You want to add a tag v1.0 and push it to GitHub. Which command sequence is correct?",
    options: [
      "git tag v1.0 && git push origin v1.0",
      "git release v1.0",
      "gh release tag v1.0",
      "git commit tag v1.0"
    ],
    answer: "git tag v1.0 && git push origin v1.0"
  },
  // 33
  {
    question: "Scenario: You want to cancel a running GitHub Action workflow. How?",
    options: ["From Actions UI → Cancel", "git action cancel", "gh stop action", "git cancel"],
    answer: "From Actions UI → Cancel"
  },
  // 34
  {
    question: "Which GitHub feature allows you to run code online without local setup?",
    options: ["Codespaces", "Actions", "Wiki", "Projects"],
    answer: "Codespaces"
  },
  // 35
  {
    question: "Scenario: You want to revert a merge commit that caused issues. Which command is safest?",
    options: ["git revert -m 1 <merge-commit>", "git reset --hard HEAD~1", "git checkout HEAD~1", "git merge --abort"],
    answer: "git revert -m 1 <merge-commit>"
  },
  // 36
  {
    question: "Which Git command discards staged changes but keeps working directory intact?",
    options: ["git reset HEAD <file>", "git checkout <file>", "git revert <file>", "git clean <file>"],
    answer: "git reset HEAD <file>"
  },
  // 37
  {
    question: "Scenario: You want to enforce code review before merging. Which GitHub setting helps?",
    options: ["Branch protection rules", "Commits log", "Releases tab", "Wiki"],
    answer: "Branch protection rules"
  },
  // 38
  {
    question: "Which GitHub feature helps organize tasks visually in Kanban style?",
    options: ["Projects (Kanban boards)", "Issues", "Commits", "Wiki"],
    answer: "Projects (Kanban boards)"
  },
  // 39
  {
    question: "Scenario: You want to add badges to your README. Which service and method is correct?",
    options: [
      "Shields.io + embed Markdown in README",
      "git badge add",
      "gh badge insert",
      "git add --badge"
    ],
    answer: "Shields.io + embed Markdown in README"
  },
  // 40
  {
    question: "Scenario: You want to protect sensitive files from accidental commits. Which file helps?",
    options: [".gitignore", "README.md", ".env.example", "LICENSE"],
    answer: ".gitignore"
  }
],
Important: [
  {
    question: "How do you create a new GitHub repository?",
    options: [
      "Using GitHub UI or `gh repo create`",
      "git init repo",
      "git create repo",
      "git new repo"
    ],
    answer: "Using GitHub UI or `gh repo create`"
  },
  {
    question: "Which command pushes a local repo to GitHub?",
    options: [
      "git push -u origin main",
      "git upload origin main",
      "git send main",
      "git deploy main"
    ],
    answer: "git push -u origin main"
  },
  {
    question: "Which command clones a GitHub repository?",
    options: ["git clone <url>", "git pull <url>", "git fetch <url>", "git copy <url>"],
    answer: "git clone <url>"
  },
  {
    question: "What is a fork on GitHub?",
    options: [
      "A copy of another repo under your account",
      "A new Git branch",
      "A commit request",
      "A Git clone with submodules"
    ],
    answer: "A copy of another repo under your account"
  },
  {
    question: "What is a pull request?",
    options: [
      "A request to merge code into another branch",
      "A git pull command",
      "A repo clone",
      "A commit rollback"
    ],
    answer: "A request to merge code into another branch"
  },
  {
    question: "How do you merge a pull request on GitHub?",
    options: [
      "Via GitHub UI or CLI (`gh pr merge`)",
      "git merge pr",
      "git pull request merge",
      "git join pr"
    ],
    answer: "Via GitHub UI or CLI (`gh pr merge`)"
  },
  {
    question: "Which command checks pull request status using CLI?",
    options: ["gh pr status", "git pr status", "git status pr", "gh status"],
    answer: "gh pr status"
  },
  {
    question: "How do you assign reviewers to a pull request?",
    options: [
      "In GitHub UI or `gh pr edit --add-reviewer`",
      "git reviewer add",
      "git assign reviewer",
      "gh repo reviewer"
    ],
    answer: "In GitHub UI or `gh pr edit --add-reviewer`"
  },
  {
    question: "How do you resolve merge conflicts on GitHub?",
    options: [
      "Edit files in conflict and commit via UI or locally",
      "Run git fix-conflicts",
      "Use git revert",
      "Use git ignore-conflicts"
    ],
    answer: "Edit files in conflict and commit via UI or locally"
  },
  {
    question: "How do you delete a GitHub repository?",
    options: [
      "From repository settings",
      "git delete repo",
      "gh repo remove",
      "git rm --repo"
    ],
    answer: "From repository settings"
  },
  {
    question: "How do you invite collaborators to a repo?",
    options: [
      "Via repo settings → Manage access",
      "git add collaborator",
      "gh add user",
      "git config user.add"
    ],
    answer: "Via repo settings → Manage access"
  },
  {
    question: "Which feature enables hosting static websites on GitHub?",
    options: ["GitHub Pages", "GitHub Actions", "GitHub Codespaces", "GitHub Projects"],
    answer: "GitHub Pages"
  },
  {
    question: "Which command opens a repo in the browser using CLI?",
    options: ["gh repo view --web", "git open", "git browse", "gh open"],
    answer: "gh repo view --web"
  },
  {
    question: "Which command creates an issue using GitHub CLI?",
    options: ["gh issue create", "git issue create", "git bug new", "gh new issue"],
    answer: "gh issue create"
  },
  {
    question: "Which command adds labels to an issue or PR?",
    options: ["gh issue edit --add-label", "git label add", "git tag label", "gh pr label"],
    answer: "gh issue edit --add-label"
  },
  {
    question: "Which command closes an issue from CLI?",
    options: ["gh issue close", "git issue close", "gh issue delete", "git close issue"],
    answer: "gh issue close"
  },
  {
    question: "Which command reopens a closed issue or PR?",
    options: ["gh issue reopen", "git issue reopen", "gh issue --open", "git issue restart"],
    answer: "gh issue reopen"
  },
  {
    question: "Which feature allows discussions on GitHub?",
    options: ["Discussions tab", "Branches", "Actions", "Tags"],
    answer: "Discussions tab"
  },
  {
    question: "Where do you check repo insights (traffic, clones, contributors)?",
    options: ["Insights tab", "Settings tab", "Issues tab", "Wiki tab"],
    answer: "Insights tab"
  },
  {
    question: "Which feature organizes tasks visually on GitHub?",
    options: ["Projects (Kanban boards)", "Releases", "Tags", "Commits"],
    answer: "Projects (Kanban boards)"
  },
  {
    question: "Which feature enables CI/CD on GitHub?",
    options: ["GitHub Actions", "GitHub Pages", "GitHub Wiki", "Projects"],
    answer: "GitHub Actions"
  },
  {
    question: "Where do you write workflows for GitHub Actions?",
    options: [".github/workflows", ".git/workflows", "/ci/workflows", "config/actions"],
    answer: ".github/workflows"
  },
  {
    question: "Where can you see workflow run history?",
    options: ["Actions tab", "Issues tab", "Commits", "Settings"],
    answer: "Actions tab"
  },
  {
    question: "Which option cancels a running GitHub Action?",
    options: ["From Actions UI → Cancel", "git action cancel", "gh stop action", "git cancel"],
    answer: "From Actions UI → Cancel"
  },
  {
    question: "Where do you add secrets for Actions?",
    options: [
      "Settings → Secrets and Variables",
      "In repo README",
      "In .gitignore",
      "In package.json"
    ],
    answer: "Settings → Secrets and Variables"
  },
  {
    question: "Which feature deploys websites from a repo?",
    options: ["GitHub Pages", "GitHub Actions", "Wiki", "Issues"],
    answer: "GitHub Pages"
  },
  {
    question: "How do you generate a personal access token?",
    options: [
      "From GitHub Settings → Developer settings",
      "git token create",
      "gh auth token",
      "git new token"
    ],
    answer: "From GitHub Settings → Developer settings"
  },
  {
    question: "How do you use SSH instead of HTTPS on GitHub?",
    options: [
      "Use SSH URL like git@github.com:user/repo.git",
      "git clone https://...",
      "Enable https-only",
      "Generate PAT"
    ],
    answer: "Use SSH URL like git@github.com:user/repo.git"
  },
  {
    question: "Which command creates and uses GitHub Gists?",
    options: ["gh gist create", "git gist", "gh repo gist", "git add gist"],
    answer: "gh gist create"
  },
  {
    question: "Which command searches for repos using GitHub CLI?",
    options: ["gh search repos", "git repo search", "gh find repos", "git search repo"],
    answer: "gh search repos"
  },
  {
    question: "Which command authenticates GitHub CLI?",
    options: ["gh auth login", "git login", "gh login", "git auth"],
    answer: "gh auth login"
  },
  {
    question: "How do you make a repo private?",
    options: ["Settings → Change visibility", "git private repo", "gh repo hide", "git config private"],
    answer: "Settings → Change visibility"
  },
  {
    question: "Where do you configure branch protection rules?",
    options: ["Settings → Branches", "Issues tab", "Commits", "Wiki"],
    answer: "Settings → Branches"
  },
  {
    question: "Which setting enforces code reviews?",
    options: [
      "Branch protection rules",
      "GitHub Wiki",
      "Commits log",
      "Releases tab"
    ],
    answer: "Branch protection rules"
  },
  {
    question: "Which merge method combines commits into one?",
    options: ["Squash and merge", "Rebase and merge", "Fast-forward merge", "Normal merge"],
    answer: "Squash and merge"
  },
  {
    question: "Which merge method applies commits sequentially?",
    options: ["Rebase and merge", "Squash and merge", "Fast-forward merge", "Cherry-pick"],
    answer: "Rebase and merge"
  },
  {
    question: "How do you auto-close issues using commits?",
    options: ["Use keywords like 'Fixes #ID'", "git close issue", "gh close commit", "git auto-close"],
    answer: "Use keywords like 'Fixes #ID'"
  },
  {
    question: "How do you sync a fork with the main repo?",
    options: ["Fetch upstream and merge", "Re-clone", "Push directly", "Fork again"],
    answer: "Fetch upstream and merge"
  },
  {
    question: "How do you create a GitHub release?",
    options: [
      "Via Releases tab → Draft new release",
      "git release create",
      "gh release init",
      "git push --release"
    ],
    answer: "Via Releases tab → Draft new release"
  },
  {
    question: "Which command creates a tag and pushes it to GitHub?",
    options: ["git tag v1.0 && git push origin v1.0", "git release v1.0", "gh release tag v1.0", "git commit tag v1.0"],
    answer: "git tag v1.0 && git push origin v1.0"
  },
  {
    question: "How do you download a repo as ZIP?",
    options: ["From GitHub → Code → Download ZIP", "git download zip", "gh repo zip", "git clone --zip"],
    answer: "From GitHub → Code → Download ZIP"
  },
  {
    question: "How do you delete a release on GitHub?",
    options: ["From Releases tab → Delete", "git release delete", "gh release remove", "git rm release"],
    answer: "From Releases tab → Delete"
  },
  {
    question: "How do you assign milestones to issues?",
    options: ["In GitHub UI → Milestones", "git milestone add", "gh milestone new", "git issue milestone"],
    answer: "In GitHub UI → Milestones"
  },
  {
    question: "How do you create a template repository?",
    options: ["Enable 'Template repository' in repo settings", "git init template", "gh repo template", "git clone --template"],
    answer: "Enable 'Template repository' in repo settings"
  },
  {
    question: "How do you add Shields.io badges?",
    options: ["By embedding Markdown in README", "git badge add", "gh badge insert", "git add --badge"],
    answer: "By embedding Markdown in README"
  },
  {
    question: "Which feature lets you run code online in GitHub?",
    options: ["Codespaces", "Actions", "Wiki", "Projects"],
    answer: "Codespaces"
  },
  {
    question: "Which feature provides automated dependency alerts?",
    options: ["Dependabot", "Actions", "Projects", "Issues"],
    answer: "Dependabot"
  },
  {
    question: "Where do you publish packages on GitHub?",
    options: ["GitHub Packages", "GitHub Pages", "Actions tab", "Wiki"],
    answer: "GitHub Packages"
  },
  {
    question: "Which integration connects GitHub to Slack/Discord?",
    options: ["Webhooks", "Issues", "Pages", "Commits"],
    answer: "Webhooks"
  },
  {
    question: "How do you archive or transfer a repo?",
    options: ["Repo settings → Danger Zone", "git archive repo", "gh repo transfer", "git move repo"],
    answer: "Repo settings → Danger Zone"
  }
],
};
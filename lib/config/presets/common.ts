export const removedPresets: Record<string, string | null> = {
  ':automergeBranchMergeCommit': ':automergeBranch',
  ':automergeBranchPush': ':automergeBranch',
  ':base': 'config:base',
  ':app': 'config:js-app',
  ':enableGradleLite': null,
  ':js-app': 'config:js-app',
  ':library': 'config:js-lib',
  ':masterIssue': ':dependencyDashboard',
  ':masterIssueApproval': ':dependencyDashboardApproval',
  ':switchToGradleLite': null,
  ':unpublishSafe': 'npm:unpublishSafe',
  'config:application': 'config:js-app',
  'config:base-js': 'config:base',
  'config:library': 'config:js-lib',
  'default:automergeBranchMergeCommit': ':automergeBranch',
  'default:automergeBranchPush': ':automergeBranch',
  'default:base': 'config:base',
  'default:app': 'config:js-app',
  'default:js-app': 'config:js-app',
  'default:library': 'config:js-lib',
  'default:unpublishSafe': 'npm:unpublishSafe',
  'helpers:oddIsUnstable': null,
  'helpers:oddIsUnstablePackages': null,
};

const renamedMonorepos: Record<string, string> = {
  'arcus event-grid': 'arcus.event-grid',
  'arcus security': 'arcus.security',
  'arcus messaging': 'arcus.messaging',
  'arcus observability': 'arcus.observability',
  'arcus webapi': 'arcus.webapi',
  'arcus background-jobs': 'arcus.background-jobs',
  'aspnet AspNetWebStack': 'aspnet aspnetwebstack',
  'aspnet Extensions': 'aspnet extensions',
  'System.IO.Abstractions': 'system.io.abstractions',
  angular1: 'angularjs',
  angularcli: 'angular-cli',
  Fontsource: 'fontsource',
  hamcrest: 'javahamcrest',
  HotChocolate: 'hotchocolate',
  infrastructure: 'infrastructure-ui',
  lingui: 'linguijs',
  MassTransit: 'masstransit',
  material: 'material-components-web',
  mui: 'material-ui',
  openfeign: 'feign',
  opentelemetry: 'opentelemetry-js',
  OpenTelemetryDotnet: 'opentelemetry-dotnet',
  picasso: 'picassojs',
  reactrouter: 'react-router',
  sentry: 'sentry-javascript',
  Steeltoe: 'steeltoe',
  stryker: 'stryker-js',
  Swashbuckle: 'swashbuckle-aspnetcore',
};

for (const [from, to] of Object.entries(renamedMonorepos)) {
  removedPresets[`monorepo:${from}`] = `monorepo:${to}`;
  removedPresets[`group:${from}Monorepo`] = `group:${to}Monorepo`;
}
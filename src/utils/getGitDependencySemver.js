import log from "npmlog";
import path from "path";
import readPkg from "read-pkg";

export default function getGitDependencySemver(dir, depName, originalVersion) {
  log.silly("getGitDependencySemver", [depName, originalVersion, dir]);

  let version;
  try {
    const pkg = readPkg.sync(path.join(dir, depName, "package.json"), { normalize: false });
    version = pkg.version;
  } catch (e) {
    version = originalVersion;
  }

  log.verbose("getGitDependencySemver", depName, version);
  return version;
}

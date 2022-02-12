{ pkgs }:

with pkgs;
let
  yarn2nix = yarn2nix-moretea.override {
    nodejs = nodejs-17_x;
    yarn = pkgs.yarn.override { inherit nodejs; };
  };
in yarn2nix.mkYarnPackage rec {
  name = "daiko";
  src = ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  yarnNix = ./yarn.nix;
  buildPhase = "yarn --offline run postinstall";
  pkgConfig.bcrypt = let
    arch = if stdenv.hostPlatform.system == "x86_64-linux" then
      "linux-x64"
    else
      throw "Unsupported architecture: ${stdenv.hostPlatform.system}";
    bcrypt_version = "5.0.1";
    bcrypt_lib = fetchurl {
      url =
        "https://github.com/kelektiv/node.bcrypt.js/releases/download/v${bcrypt_version}/bcrypt_lib-v${bcrypt_version}-napi-v3-${arch}-glibc.tar.gz";
      sha256 = "3R3dBZyPansTuM77Nmm3f7BbTDkDdiT2HQIrti2Ottc=";
    };
  in {
    buildInputs = [ jq gnutar ];
    postInstall = ''
      if [ "${bcrypt_version}" != "$(cat package.json | jq -r .version)" ]; then
        echo "Mismatching version, please update bcrypt in derivation"
        exit
      fi
      mkdir -p ./lib/binding && tar -C ./lib/binding -xf ${bcrypt_lib}
    '';
  };
}

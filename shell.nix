{ pkgs ? import <nixpkgs> { } }:

with pkgs;

mkShell {
  buildInputs = [ yarn2nix ];

  #  TypeError: libstdc++.so.6: cannot open shared object file: No such file or directory
  #       at /home/ckie/git/daiko/node_modules/bcrypt/bcrypt.js:6:16
  #
  # Bun v1.1.9 (Linux x64)
  # error: script "start" exited with code 1
  LD_LIBRARY_PATH = lib.makeLibraryPath [ stdenv.cc.cc.lib ];
}

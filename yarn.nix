{ fetchurl, fetchgit, linkFarm, runCommand, gnutar }: rec {
  offline_cache = linkFarm "offline" packages;
  packages = [
    {
      name = "_cspotcode_source_map_consumer___source_map_consumer_0.8.0.tgz";
      path = fetchurl {
        name = "_cspotcode_source_map_consumer___source_map_consumer_0.8.0.tgz";
        url  = "https://registry.yarnpkg.com/@cspotcode/source-map-consumer/-/source-map-consumer-0.8.0.tgz";
        sha512 = "41qniHzTU8yAGbCp04ohlmSrZf8bkf/iJsl3V0dRGsQN/5GFfx+LbCSsCpp2gqrqjTVg/K6O8ycoV35JIwAzAg==";
      };
    }
    {
      name = "_cspotcode_source_map_support___source_map_support_0.7.0.tgz";
      path = fetchurl {
        name = "_cspotcode_source_map_support___source_map_support_0.7.0.tgz";
        url  = "https://registry.yarnpkg.com/@cspotcode/source-map-support/-/source-map-support-0.7.0.tgz";
        sha512 = "X4xqRHqN8ACt2aHVe51OxeA2HjbcL4MqFqXkrmQszJ1NOUuUu5u6Vqx/0lZSVNku7velL5FC/s5uEAj1lsBMhA==";
      };
    }
    {
      name = "_discordjs_builders___builders_0.5.0.tgz";
      path = fetchurl {
        name = "_discordjs_builders___builders_0.5.0.tgz";
        url  = "https://registry.yarnpkg.com/@discordjs/builders/-/builders-0.5.0.tgz";
        sha512 = "HP5y4Rqw68o61Qv4qM5tVmDbWi4mdTFftqIOGRo33SNPpLJ1Ga3KEIR2ibKofkmsoQhEpLmopD1AZDs3cKpHuw==";
      };
    }
    {
      name = "_discordjs_collection___collection_0.2.4.tgz";
      path = fetchurl {
        name = "_discordjs_collection___collection_0.2.4.tgz";
        url  = "https://registry.yarnpkg.com/@discordjs/collection/-/collection-0.2.4.tgz";
        sha512 = "PVrEJH+V6Ob0OwfagYQ/57kwt/HNEJxt5jqY4P+S3st9y29t9iokdnGMQoJXG5VEMAQIPbzu9Snw1F6yE8PdLA==";
      };
    }
    {
      name = "_discordjs_form_data___form_data_3.0.1.tgz";
      path = fetchurl {
        name = "_discordjs_form_data___form_data_3.0.1.tgz";
        url  = "https://registry.yarnpkg.com/@discordjs/form-data/-/form-data-3.0.1.tgz";
        sha512 = "ZfFsbgEXW71Rw/6EtBdrP5VxBJy4dthyC0tpQKGKmYFImlmmrykO14Za+BiIVduwjte0jXEBlhSKf0MWbFp9Eg==";
      };
    }
    {
      name = "_sapphire_async_queue___async_queue_1.1.8.tgz";
      path = fetchurl {
        name = "_sapphire_async_queue___async_queue_1.1.8.tgz";
        url  = "https://registry.yarnpkg.com/@sapphire/async-queue/-/async-queue-1.1.8.tgz";
        sha512 = "Oi4EEi8vOne8RM1tCdQ3kYAtl/J6ztak3Th6wwGFqA2SVNJtedw196LjsLX0bK8Li8cwaljbFf08N+0zeqhkWQ==";
      };
    }
    {
      name = "_sindresorhus_is___is_4.2.0.tgz";
      path = fetchurl {
        name = "_sindresorhus_is___is_4.2.0.tgz";
        url  = "https://registry.yarnpkg.com/@sindresorhus/is/-/is-4.2.0.tgz";
        sha512 = "VkE3KLBmJwcCaVARtQpfuKcKv8gcBmUubrfHGF84dXuuW6jgsRYxPtzcIhPyK9WAPpRt2/xY6zkD9MnRaJzSyw==";
      };
    }
    {
      name = "_tsconfig_node10___node10_1.0.8.tgz";
      path = fetchurl {
        name = "_tsconfig_node10___node10_1.0.8.tgz";
        url  = "https://registry.yarnpkg.com/@tsconfig/node10/-/node10-1.0.8.tgz";
        sha512 = "6XFfSQmMgq0CFLY1MslA/CPUfhIL919M1rMsa5lP2P097N2Wd1sSX0tx1u4olM16fLNhtHZpRhedZJphNJqmZg==";
      };
    }
    {
      name = "_tsconfig_node12___node12_1.0.9.tgz";
      path = fetchurl {
        name = "_tsconfig_node12___node12_1.0.9.tgz";
        url  = "https://registry.yarnpkg.com/@tsconfig/node12/-/node12-1.0.9.tgz";
        sha512 = "/yBMcem+fbvhSREH+s14YJi18sp7J9jpuhYByADT2rypfajMZZN4WQ6zBGgBKp53NKmqI36wFYDb3yaMPurITw==";
      };
    }
    {
      name = "_tsconfig_node14___node14_1.0.1.tgz";
      path = fetchurl {
        name = "_tsconfig_node14___node14_1.0.1.tgz";
        url  = "https://registry.yarnpkg.com/@tsconfig/node14/-/node14-1.0.1.tgz";
        sha512 = "509r2+yARFfHHE7T6Puu2jjkoycftovhXRqW328PDXTVGKihlb1P8Z9mMZH04ebyajfRY7dedfGynlrFHJUQCg==";
      };
    }
    {
      name = "_tsconfig_node16___node16_1.0.2.tgz";
      path = fetchurl {
        name = "_tsconfig_node16___node16_1.0.2.tgz";
        url  = "https://registry.yarnpkg.com/@tsconfig/node16/-/node16-1.0.2.tgz";
        sha512 = "eZxlbI8GZscaGS7kkc/trHTT5xgrjH3/1n2JDwusC9iahPKWMRvRjJSAN5mCXviuTGQ/lHnhvv8Q1YTpnfz9gA==";
      };
    }
    {
      name = "_types_cheerio___cheerio_0.22.30.tgz";
      path = fetchurl {
        name = "_types_cheerio___cheerio_0.22.30.tgz";
        url  = "https://registry.yarnpkg.com/@types/cheerio/-/cheerio-0.22.30.tgz";
        sha512 = "t7ZVArWZlq3dFa9Yt33qFBQIK4CQd1Q3UJp0V+UhP6vgLWLM6Qug7vZuRSGXg45zXeB1Fm5X2vmBkEX58LV2Tw==";
      };
    }
    {
      name = "_types_node_fetch___node_fetch_2.5.12.tgz";
      path = fetchurl {
        name = "_types_node_fetch___node_fetch_2.5.12.tgz";
        url  = "https://registry.yarnpkg.com/@types/node-fetch/-/node-fetch-2.5.12.tgz";
        sha512 = "MKgC4dlq4kKNa/mYrwpKfzQMB5X3ee5U6fSprkKpToBqBmX4nFZL9cW5jl6sWn+xpRJ7ypWh2yyqqr8UUCstSw==";
      };
    }
    {
      name = "_types_node___node_16.11.6.tgz";
      path = fetchurl {
        name = "_types_node___node_16.11.6.tgz";
        url  = "https://registry.yarnpkg.com/@types/node/-/node-16.11.6.tgz";
        sha512 = "ua7PgUoeQFjmWPcoo9khiPum3Pd60k4/2ZGXt18sm2Slk0W0xZTqt5Y0Ny1NyBiN1EVQ/+FaF9NcY4Qe6rwk5w==";
      };
    }
    {
      name = "_types_uuid___uuid_8.3.1.tgz";
      path = fetchurl {
        name = "_types_uuid___uuid_8.3.1.tgz";
        url  = "https://registry.yarnpkg.com/@types/uuid/-/uuid-8.3.1.tgz";
        sha512 = "Y2mHTRAbqfFkpjldbkHGY8JIzRN6XqYRliG8/24FcHm2D2PwW24fl5xMRTVGdrb7iMrwCaIEbLWerGIkXuFWVg==";
      };
    }
    {
      name = "_types_ws___ws_7.4.7.tgz";
      path = fetchurl {
        name = "_types_ws___ws_7.4.7.tgz";
        url  = "https://registry.yarnpkg.com/@types/ws/-/ws-7.4.7.tgz";
        sha512 = "JQbbmxZTZehdc2iszGKs5oC3NFnjeay7mtAWrdt7qNtAVK0g19muApzAy4bm9byz79xa2ZnO/BOBC2R8RC5Lww==";
      };
    }
    {
      name = "acorn_walk___acorn_walk_8.2.0.tgz";
      path = fetchurl {
        name = "acorn_walk___acorn_walk_8.2.0.tgz";
        url  = "https://registry.yarnpkg.com/acorn-walk/-/acorn-walk-8.2.0.tgz";
        sha512 = "k+iyHEuPgSw6SbuDpGQM+06HQUa04DZ3o+F6CSzXMvvI5KMvnaEqXe+YVe555R9nn6GPt404fos4wcgpw12SDA==";
      };
    }
    {
      name = "acorn___acorn_8.5.0.tgz";
      path = fetchurl {
        name = "acorn___acorn_8.5.0.tgz";
        url  = "https://registry.yarnpkg.com/acorn/-/acorn-8.5.0.tgz";
        sha512 = "yXbYeFy+jUuYd3/CDcg2NkIYE991XYX/bje7LmjJigUciaeO1JR4XxXgCIV1/Zc/dRuFEyw1L0pbA+qynJkW5Q==";
      };
    }
    {
      name = "agent_base___agent_base_6.0.2.tgz";
      path = fetchurl {
        name = "agent_base___agent_base_6.0.2.tgz";
        url  = "https://registry.yarnpkg.com/agent-base/-/agent-base-6.0.2.tgz";
        sha512 = "RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==";
      };
    }
    {
      name = "anymatch___anymatch_3.1.2.tgz";
      path = fetchurl {
        name = "anymatch___anymatch_3.1.2.tgz";
        url  = "https://registry.yarnpkg.com/anymatch/-/anymatch-3.1.2.tgz";
        sha512 = "P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==";
      };
    }
    {
      name = "arg___arg_4.1.3.tgz";
      path = fetchurl {
        name = "arg___arg_4.1.3.tgz";
        url  = "https://registry.yarnpkg.com/arg/-/arg-4.1.3.tgz";
        sha512 = "58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==";
      };
    }
    {
      name = "asap___asap_2.0.6.tgz";
      path = fetchurl {
        name = "asap___asap_2.0.6.tgz";
        url  = "https://registry.yarnpkg.com/asap/-/asap-2.0.6.tgz";
        sha1 = "5QNHYR1+aQlDIIu9r+vLwvuGbUY=";
      };
    }
    {
      name = "asynckit___asynckit_0.4.0.tgz";
      path = fetchurl {
        name = "asynckit___asynckit_0.4.0.tgz";
        url  = "https://registry.yarnpkg.com/asynckit/-/asynckit-0.4.0.tgz";
        sha1 = "x57Zf380y48robyXkLzDZkdLS3k=";
      };
    }
    {
      name = "axios___axios_0.21.4.tgz";
      path = fetchurl {
        name = "axios___axios_0.21.4.tgz";
        url  = "https://registry.yarnpkg.com/axios/-/axios-0.21.4.tgz";
        sha512 = "ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==";
      };
    }
    {
      name = "binary_extensions___binary_extensions_2.2.0.tgz";
      path = fetchurl {
        name = "binary_extensions___binary_extensions_2.2.0.tgz";
        url  = "https://registry.yarnpkg.com/binary-extensions/-/binary-extensions-2.2.0.tgz";
        sha512 = "jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==";
      };
    }
    {
      name = "boolbase___boolbase_1.0.0.tgz";
      path = fetchurl {
        name = "boolbase___boolbase_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/boolbase/-/boolbase-1.0.0.tgz";
        sha1 = "aN/1++YMUes3cl6p4+0xDcwed24=";
      };
    }
    {
      name = "braces___braces_3.0.2.tgz";
      path = fetchurl {
        name = "braces___braces_3.0.2.tgz";
        url  = "https://registry.yarnpkg.com/braces/-/braces-3.0.2.tgz";
        sha512 = "b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==";
      };
    }
    {
      name = "buffer_equal_constant_time___buffer_equal_constant_time_1.0.1.tgz";
      path = fetchurl {
        name = "buffer_equal_constant_time___buffer_equal_constant_time_1.0.1.tgz";
        url  = "https://registry.yarnpkg.com/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz";
        sha1 = "+OcRMvf/5uAaXJaXpMbz5I1cyBk=";
      };
    }
    {
      name = "call_bind___call_bind_1.0.2.tgz";
      path = fetchurl {
        name = "call_bind___call_bind_1.0.2.tgz";
        url  = "https://registry.yarnpkg.com/call-bind/-/call-bind-1.0.2.tgz";
        sha512 = "7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==";
      };
    }
    {
      name = "callsites___callsites_3.1.0.tgz";
      path = fetchurl {
        name = "callsites___callsites_3.1.0.tgz";
        url  = "https://registry.yarnpkg.com/callsites/-/callsites-3.1.0.tgz";
        sha512 = "P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==";
      };
    }
    {
      name = "cheerio_select___cheerio_select_1.5.0.tgz";
      path = fetchurl {
        name = "cheerio_select___cheerio_select_1.5.0.tgz";
        url  = "https://registry.yarnpkg.com/cheerio-select/-/cheerio-select-1.5.0.tgz";
        sha512 = "qocaHPv5ypefh6YNxvnbABM07KMxExbtbfuJoIie3iZXX1ERwYmJcIiRrr9H05ucQP1k28dav8rpdDgjQd8drg==";
      };
    }
    {
      name = "cheerio___cheerio_1.0.0_rc.10.tgz";
      path = fetchurl {
        name = "cheerio___cheerio_1.0.0_rc.10.tgz";
        url  = "https://registry.yarnpkg.com/cheerio/-/cheerio-1.0.0-rc.10.tgz";
        sha512 = "g0J0q/O6mW8z5zxQ3A8E8J1hUgp4SMOvEoW/x84OwyHKe/Zccz83PVT4y5Crcr530FV6NgmKI1qvGTKVl9XXVw==";
      };
    }
    {
      name = "chokidar___chokidar_3.5.2.tgz";
      path = fetchurl {
        name = "chokidar___chokidar_3.5.2.tgz";
        url  = "https://registry.yarnpkg.com/chokidar/-/chokidar-3.5.2.tgz";
        sha512 = "ekGhOnNVPgT77r4K/U3GDhu+FQ2S8TnK/s2KbIGXi0SZWuwkZ2QNyfWdZW+TVfn84DpEP7rLeCt2UI6bJ8GwbQ==";
      };
    }
    {
      name = "colors___colors_1.4.0.tgz";
      path = fetchurl {
        name = "colors___colors_1.4.0.tgz";
        url  = "https://registry.yarnpkg.com/colors/-/colors-1.4.0.tgz";
        sha512 = "a+UqTh4kgZg/SlGvfbzDHpgRu7AAQOmmqRHJnxhRZICKFUT91brVhNNt58CMWU9PsBbv3PDCZUHbVxuDiH2mtA==";
      };
    }
    {
      name = "combined_stream___combined_stream_1.0.8.tgz";
      path = fetchurl {
        name = "combined_stream___combined_stream_1.0.8.tgz";
        url  = "https://registry.yarnpkg.com/combined-stream/-/combined-stream-1.0.8.tgz";
        sha512 = "FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==";
      };
    }
    {
      name = "cookiecord___cookiecord_0.8.19.tgz";
      path = fetchurl {
        name = "cookiecord___cookiecord_0.8.19.tgz";
        url  = "https://registry.yarnpkg.com/cookiecord/-/cookiecord-0.8.19.tgz";
        sha512 = "VdZiNxck0YE2ga//YjG3tnZSuSIaxqtIFYfqVR10eZ50gpo05Hp0h6Sa4HaSeMbQpPIXDuN9JWSB448tpYp/yw==";
      };
    }
    {
      name = "create_require___create_require_1.1.1.tgz";
      path = fetchurl {
        name = "create_require___create_require_1.1.1.tgz";
        url  = "https://registry.yarnpkg.com/create-require/-/create-require-1.1.1.tgz";
        sha512 = "dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==";
      };
    }
    {
      name = "css_select___css_select_4.1.3.tgz";
      path = fetchurl {
        name = "css_select___css_select_4.1.3.tgz";
        url  = "https://registry.yarnpkg.com/css-select/-/css-select-4.1.3.tgz";
        sha512 = "gT3wBNd9Nj49rAbmtFHj1cljIAOLYSX1nZ8CB7TBO3INYckygm5B7LISU/szY//YmdiSLbJvDLOx9VnMVpMBxA==";
      };
    }
    {
      name = "css_what___css_what_5.1.0.tgz";
      path = fetchurl {
        name = "css_what___css_what_5.1.0.tgz";
        url  = "https://registry.yarnpkg.com/css-what/-/css-what-5.1.0.tgz";
        sha512 = "arSMRWIIFY0hV8pIxZMEfmMI47Wj3R/aWpZDDxWYCPEiOMv6tfOrnpDtgxBYPEQD4V0Y/958+1TdC3iWTFcUPw==";
      };
    }
    {
      name = "dateformat___dateformat_4.5.1.tgz";
      path = fetchurl {
        name = "dateformat___dateformat_4.5.1.tgz";
        url  = "https://registry.yarnpkg.com/dateformat/-/dateformat-4.5.1.tgz";
        sha512 = "OD0TZ+B7yP7ZgpJf5K2DIbj3FZvFvxgFUuaqA/V5zTjAtAAXZ1E8bktHxmAGs4x5b7PflqA9LeQ84Og7wYtF7Q==";
      };
    }
    {
      name = "dayjs___dayjs_1.10.7.tgz";
      path = fetchurl {
        name = "dayjs___dayjs_1.10.7.tgz";
        url  = "https://registry.yarnpkg.com/dayjs/-/dayjs-1.10.7.tgz";
        sha512 = "P6twpd70BcPK34K26uJ1KT3wlhpuOAPoMwJzpsIWUxHZ7wpmbdZL/hQqBDfz7hGurYSa5PhzdhDHtt319hL3ig==";
      };
    }
    {
      name = "debug___debug_4.3.2.tgz";
      path = fetchurl {
        name = "debug___debug_4.3.2.tgz";
        url  = "https://registry.yarnpkg.com/debug/-/debug-4.3.2.tgz";
        sha512 = "mOp8wKcvj7XxC78zLgw/ZA+6TSgkoE2C/ienthhRD298T7UNwAg9diBpLRxC0mOezLl4B0xV7M0cCO6P/O0Xhw==";
      };
    }
    {
      name = "delayed_stream___delayed_stream_1.0.0.tgz";
      path = fetchurl {
        name = "delayed_stream___delayed_stream_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/delayed-stream/-/delayed-stream-1.0.0.tgz";
        sha1 = "3zrhmayt+31ECqrgsp4icrJOxhk=";
      };
    }
    {
      name = "diff___diff_4.0.2.tgz";
      path = fetchurl {
        name = "diff___diff_4.0.2.tgz";
        url  = "https://registry.yarnpkg.com/diff/-/diff-4.0.2.tgz";
        sha512 = "58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==";
      };
    }
    {
      name = "discord_api_types___discord_api_types_0.22.0.tgz";
      path = fetchurl {
        name = "discord_api_types___discord_api_types_0.22.0.tgz";
        url  = "https://registry.yarnpkg.com/discord-api-types/-/discord-api-types-0.22.0.tgz";
        sha512 = "l8yD/2zRbZItUQpy7ZxBJwaLX/Bs2TGaCthRppk8Sw24LOIWg12t9JEreezPoYD0SQcC2htNNo27kYEpYW/Srg==";
      };
    }
    {
    name = "d0bc4d7ff037035d4f315a0286b06f0a1ade29c1";
    path =
      let
        repo = fetchgit {
          url = "https://github.com/discordjs/discord.js.git";
          rev = "d0bc4d7ff037035d4f315a0286b06f0a1ade29c1";
          sha256 = "1znqxqgp6x6p4fpm47g6mpqabg7qgzbp9spldv34krxi38qp3f86";
        };
      in
        runCommand "d0bc4d7ff037035d4f315a0286b06f0a1ade29c1" { buildInputs = [gnutar]; } ''
          # Set u+w because tar-fs can't unpack archives with read-only dirs
          # https://github.com/mafintosh/tar-fs/issues/79
          tar cf $out --mode u+w -C ${repo} .
        '';
  }
    {
      name = "dom_serializer___dom_serializer_1.3.2.tgz";
      path = fetchurl {
        name = "dom_serializer___dom_serializer_1.3.2.tgz";
        url  = "https://registry.yarnpkg.com/dom-serializer/-/dom-serializer-1.3.2.tgz";
        sha512 = "5c54Bk5Dw4qAxNOI1pFEizPSjVsx5+bpJKmL2kPn8JhBUq2q09tTCa3mjijun2NfK78NMouDYNMBkOrPZiS+ig==";
      };
    }
    {
      name = "domelementtype___domelementtype_2.2.0.tgz";
      path = fetchurl {
        name = "domelementtype___domelementtype_2.2.0.tgz";
        url  = "https://registry.yarnpkg.com/domelementtype/-/domelementtype-2.2.0.tgz";
        sha512 = "DtBMo82pv1dFtUmHyr48beiuq792Sxohr+8Hm9zoxklYPfa6n0Z3Byjj2IV7bmr2IyqClnqEQhfgHJJ5QF0R5A==";
      };
    }
    {
      name = "domhandler___domhandler_4.2.2.tgz";
      path = fetchurl {
        name = "domhandler___domhandler_4.2.2.tgz";
        url  = "https://registry.yarnpkg.com/domhandler/-/domhandler-4.2.2.tgz";
        sha512 = "PzE9aBMsdZO8TK4BnuJwH0QT41wgMbRzuZrHUcpYncEjmQazq8QEaBWgLG7ZyC/DAZKEgglpIA6j4Qn/HmxS3w==";
      };
    }
    {
      name = "domutils___domutils_2.8.0.tgz";
      path = fetchurl {
        name = "domutils___domutils_2.8.0.tgz";
        url  = "https://registry.yarnpkg.com/domutils/-/domutils-2.8.0.tgz";
        sha512 = "w96Cjofp72M5IIhpjgobBimYEfoPjx1Vx0BSX9P30WBdZW2WIKU0T1Bd0kz2eNZ9ikjKgHbEyKx8BB6H1L3h3A==";
      };
    }
    {
      name = "dot_prop___dot_prop_6.0.1.tgz";
      path = fetchurl {
        name = "dot_prop___dot_prop_6.0.1.tgz";
        url  = "https://registry.yarnpkg.com/dot-prop/-/dot-prop-6.0.1.tgz";
        sha512 = "tE7ztYzXHIeyvc7N+hR3oi7FIbf/NIjVP9hmAt3yMXzrQ072/fpjGLx2GxNxGxUl5V73MEqYzioOMoVhGMJ5cA==";
      };
    }
    {
      name = "dotenv_safe___dotenv_safe_8.2.0.tgz";
      path = fetchurl {
        name = "dotenv_safe___dotenv_safe_8.2.0.tgz";
        url  = "https://registry.yarnpkg.com/dotenv-safe/-/dotenv-safe-8.2.0.tgz";
        sha512 = "uWwWWdUQkSs5a3mySDB22UtNwyEYi0JtEQu+vDzIqr9OjbDdC2Ip13PnSpi/fctqlYmzkxCeabiyCAOROuAIaA==";
      };
    }
    {
      name = "dotenv___dotenv_8.6.0.tgz";
      path = fetchurl {
        name = "dotenv___dotenv_8.6.0.tgz";
        url  = "https://registry.yarnpkg.com/dotenv/-/dotenv-8.6.0.tgz";
        sha512 = "IrPdXQsk2BbzvCBGBOTmmSH5SodmqZNt4ERAZDmW4CT+tL8VtvinqywuANaFu4bOMWki16nqf0e4oC0QIaDr/g==";
      };
    }
    {
      name = "ecdsa_sig_formatter___ecdsa_sig_formatter_1.0.11.tgz";
      path = fetchurl {
        name = "ecdsa_sig_formatter___ecdsa_sig_formatter_1.0.11.tgz";
        url  = "https://registry.yarnpkg.com/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz";
        sha512 = "nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==";
      };
    }
    {
      name = "entities___entities_2.2.0.tgz";
      path = fetchurl {
        name = "entities___entities_2.2.0.tgz";
        url  = "https://registry.yarnpkg.com/entities/-/entities-2.2.0.tgz";
        sha512 = "p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A==";
      };
    }
    {
      name = "fill_range___fill_range_7.0.1.tgz";
      path = fetchurl {
        name = "fill_range___fill_range_7.0.1.tgz";
        url  = "https://registry.yarnpkg.com/fill-range/-/fill-range-7.0.1.tgz";
        sha512 = "qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==";
      };
    }
    {
      name = "follow_redirects___follow_redirects_1.14.5.tgz";
      path = fetchurl {
        name = "follow_redirects___follow_redirects_1.14.5.tgz";
        url  = "https://registry.yarnpkg.com/follow-redirects/-/follow-redirects-1.14.5.tgz";
        sha512 = "wtphSXy7d4/OR+MvIFbCVBDzZ5520qV8XfPklSN5QtxuMUJZ+b0Wnst1e1lCDocfzuCkHqj8k0FpZqO+UIaKNA==";
      };
    }
    {
      name = "form_data___form_data_3.0.1.tgz";
      path = fetchurl {
        name = "form_data___form_data_3.0.1.tgz";
        url  = "https://registry.yarnpkg.com/form-data/-/form-data-3.0.1.tgz";
        sha512 = "RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==";
      };
    }
    {
      name = "fsevents___fsevents_2.3.2.tgz";
      path = fetchurl {
        name = "fsevents___fsevents_2.3.2.tgz";
        url  = "https://registry.yarnpkg.com/fsevents/-/fsevents-2.3.2.tgz";
        sha512 = "xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==";
      };
    }
    {
      name = "function_bind___function_bind_1.1.1.tgz";
      path = fetchurl {
        name = "function_bind___function_bind_1.1.1.tgz";
        url  = "https://registry.yarnpkg.com/function-bind/-/function-bind-1.1.1.tgz";
        sha512 = "yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==";
      };
    }
    {
      name = "get_intrinsic___get_intrinsic_1.1.1.tgz";
      path = fetchurl {
        name = "get_intrinsic___get_intrinsic_1.1.1.tgz";
        url  = "https://registry.yarnpkg.com/get-intrinsic/-/get-intrinsic-1.1.1.tgz";
        sha512 = "kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==";
      };
    }
    {
      name = "glob_parent___glob_parent_5.1.2.tgz";
      path = fetchurl {
        name = "glob_parent___glob_parent_5.1.2.tgz";
        url  = "https://registry.yarnpkg.com/glob-parent/-/glob-parent-5.1.2.tgz";
        sha512 = "AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==";
      };
    }
    {
      name = "has_symbols___has_symbols_1.0.2.tgz";
      path = fetchurl {
        name = "has_symbols___has_symbols_1.0.2.tgz";
        url  = "https://registry.yarnpkg.com/has-symbols/-/has-symbols-1.0.2.tgz";
        sha512 = "chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw==";
      };
    }
    {
      name = "has___has_1.0.3.tgz";
      path = fetchurl {
        name = "has___has_1.0.3.tgz";
        url  = "https://registry.yarnpkg.com/has/-/has-1.0.3.tgz";
        sha512 = "f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==";
      };
    }
    {
      name = "htmlparser2___htmlparser2_6.1.0.tgz";
      path = fetchurl {
        name = "htmlparser2___htmlparser2_6.1.0.tgz";
        url  = "https://registry.yarnpkg.com/htmlparser2/-/htmlparser2-6.1.0.tgz";
        sha512 = "gyyPk6rgonLFEDGoeRgQNaEUvdJ4ktTmmUh/h2t7s+M8oPpIPxgNACWa+6ESR57kXstwqPiCut0V8NRpcwgU7A==";
      };
    }
    {
      name = "https_proxy_agent___https_proxy_agent_5.0.0.tgz";
      path = fetchurl {
        name = "https_proxy_agent___https_proxy_agent_5.0.0.tgz";
        url  = "https://registry.yarnpkg.com/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz";
        sha512 = "EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA==";
      };
    }
    {
      name = "humanize_duration___humanize_duration_3.27.0.tgz";
      path = fetchurl {
        name = "humanize_duration___humanize_duration_3.27.0.tgz";
        url  = "https://registry.yarnpkg.com/humanize-duration/-/humanize-duration-3.27.0.tgz";
        sha512 = "qLo/08cNc3Tb0uD7jK0jAcU5cnqCM0n568918E7R2XhMr/+7F37p4EY062W/stg7tmzvknNn9b/1+UhVRzsYrQ==";
      };
    }
    {
      name = "is_binary_path___is_binary_path_2.1.0.tgz";
      path = fetchurl {
        name = "is_binary_path___is_binary_path_2.1.0.tgz";
        url  = "https://registry.yarnpkg.com/is-binary-path/-/is-binary-path-2.1.0.tgz";
        sha512 = "ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==";
      };
    }
    {
      name = "is_extglob___is_extglob_2.1.1.tgz";
      path = fetchurl {
        name = "is_extglob___is_extglob_2.1.1.tgz";
        url  = "https://registry.yarnpkg.com/is-extglob/-/is-extglob-2.1.1.tgz";
        sha1 = "qIwCU1eR8C7TfHahueqXc8gz+MI=";
      };
    }
    {
      name = "is_glob___is_glob_4.0.3.tgz";
      path = fetchurl {
        name = "is_glob___is_glob_4.0.3.tgz";
        url  = "https://registry.yarnpkg.com/is-glob/-/is-glob-4.0.3.tgz";
        sha512 = "xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==";
      };
    }
    {
      name = "is_number___is_number_7.0.0.tgz";
      path = fetchurl {
        name = "is_number___is_number_7.0.0.tgz";
        url  = "https://registry.yarnpkg.com/is-number/-/is-number-7.0.0.tgz";
        sha512 = "41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==";
      };
    }
    {
      name = "is_obj___is_obj_2.0.0.tgz";
      path = fetchurl {
        name = "is_obj___is_obj_2.0.0.tgz";
        url  = "https://registry.yarnpkg.com/is-obj/-/is-obj-2.0.0.tgz";
        sha512 = "drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==";
      };
    }
    {
      name = "jsonwebtoken___jsonwebtoken_8.5.1.tgz";
      path = fetchurl {
        name = "jsonwebtoken___jsonwebtoken_8.5.1.tgz";
        url  = "https://registry.yarnpkg.com/jsonwebtoken/-/jsonwebtoken-8.5.1.tgz";
        sha512 = "XjwVfRS6jTMsqYs0EsuJ4LGxXV14zQybNd4L2r0UvbVnSF9Af8x7p5MzbJ90Ioz/9TI41/hTCvznF/loiSzn8w==";
      };
    }
    {
      name = "jwa___jwa_1.4.1.tgz";
      path = fetchurl {
        name = "jwa___jwa_1.4.1.tgz";
        url  = "https://registry.yarnpkg.com/jwa/-/jwa-1.4.1.tgz";
        sha512 = "qiLX/xhEEFKUAJ6FiBMbes3w9ATzyk5W7Hvzpa/SLYdxNtng+gcurvrI7TbACjIXlsJyr05/S1oUhZrc63evQA==";
      };
    }
    {
      name = "jws___jws_3.2.2.tgz";
      path = fetchurl {
        name = "jws___jws_3.2.2.tgz";
        url  = "https://registry.yarnpkg.com/jws/-/jws-3.2.2.tgz";
        sha512 = "YHlZCB6lMTllWDtSPHz/ZXTsi8S00usEV6v1tjq8tOUZzw7DpSDWVXjXDre6ed1w/pd495ODpHZYSdkRTsa0HA==";
      };
    }
    {
      name = "lodash.includes___lodash.includes_4.3.0.tgz";
      path = fetchurl {
        name = "lodash.includes___lodash.includes_4.3.0.tgz";
        url  = "https://registry.yarnpkg.com/lodash.includes/-/lodash.includes-4.3.0.tgz";
        sha1 = "YLuYqHy5I8aMoeUTJUgzFISfVT8=";
      };
    }
    {
      name = "lodash.isboolean___lodash.isboolean_3.0.3.tgz";
      path = fetchurl {
        name = "lodash.isboolean___lodash.isboolean_3.0.3.tgz";
        url  = "https://registry.yarnpkg.com/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz";
        sha1 = "bC4XHbKiV82WgC/UOwGyDV9YcPY=";
      };
    }
    {
      name = "lodash.isequal___lodash.isequal_4.5.0.tgz";
      path = fetchurl {
        name = "lodash.isequal___lodash.isequal_4.5.0.tgz";
        url  = "https://registry.yarnpkg.com/lodash.isequal/-/lodash.isequal-4.5.0.tgz";
        sha1 = "QVxEePK8wwEgwizhDtMib30+GOA=";
      };
    }
    {
      name = "lodash.isinteger___lodash.isinteger_4.0.4.tgz";
      path = fetchurl {
        name = "lodash.isinteger___lodash.isinteger_4.0.4.tgz";
        url  = "https://registry.yarnpkg.com/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz";
        sha1 = "YZwK89A/iwTDH1iChAt3sRzWg0M=";
      };
    }
    {
      name = "lodash.isnumber___lodash.isnumber_3.0.3.tgz";
      path = fetchurl {
        name = "lodash.isnumber___lodash.isnumber_3.0.3.tgz";
        url  = "https://registry.yarnpkg.com/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz";
        sha1 = "POdoEMWSjQM1IwGsKHMX8RwLH/w=";
      };
    }
    {
      name = "lodash.isplainobject___lodash.isplainobject_4.0.6.tgz";
      path = fetchurl {
        name = "lodash.isplainobject___lodash.isplainobject_4.0.6.tgz";
        url  = "https://registry.yarnpkg.com/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz";
        sha1 = "fFJqUtibRcRcxpC4gWO+BJf1UMs=";
      };
    }
    {
      name = "lodash.isstring___lodash.isstring_4.0.1.tgz";
      path = fetchurl {
        name = "lodash.isstring___lodash.isstring_4.0.1.tgz";
        url  = "https://registry.yarnpkg.com/lodash.isstring/-/lodash.isstring-4.0.1.tgz";
        sha1 = "1SfftUVuynzJu5XV2ur4i6VKVFE=";
      };
    }
    {
      name = "lodash.once___lodash.once_4.1.1.tgz";
      path = fetchurl {
        name = "lodash.once___lodash.once_4.1.1.tgz";
        url  = "https://registry.yarnpkg.com/lodash.once/-/lodash.once-4.1.1.tgz";
        sha1 = "DdOXEhPHxW34gJd9UEyI+0cal6w=";
      };
    }
    {
      name = "lodash___lodash_4.17.21.tgz";
      path = fetchurl {
        name = "lodash___lodash_4.17.21.tgz";
        url  = "https://registry.yarnpkg.com/lodash/-/lodash-4.17.21.tgz";
        sha512 = "v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==";
      };
    }
    {
      name = "make_error___make_error_1.3.6.tgz";
      path = fetchurl {
        name = "make_error___make_error_1.3.6.tgz";
        url  = "https://registry.yarnpkg.com/make-error/-/make-error-1.3.6.tgz";
        sha512 = "s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==";
      };
    }
    {
      name = "mime_db___mime_db_1.50.0.tgz";
      path = fetchurl {
        name = "mime_db___mime_db_1.50.0.tgz";
        url  = "https://registry.yarnpkg.com/mime-db/-/mime-db-1.50.0.tgz";
        sha512 = "9tMZCDlYHqeERXEHO9f/hKfNXhre5dK2eE/krIvUjZbS2KPcqGDfNShIWS1uW9XOTKQKqK6qbeOci18rbfW77A==";
      };
    }
    {
      name = "mime_types___mime_types_2.1.33.tgz";
      path = fetchurl {
        name = "mime_types___mime_types_2.1.33.tgz";
        url  = "https://registry.yarnpkg.com/mime-types/-/mime-types-2.1.33.tgz";
        sha512 = "plLElXp7pRDd0bNZHw+nMd52vRYjLwQjygaNg7ddJ2uJtTlmnTCjWuPKxVu6//AdaRuME84SvLW91sIkBqGT0g==";
      };
    }
    {
      name = "mkdirp___mkdirp_1.0.4.tgz";
      path = fetchurl {
        name = "mkdirp___mkdirp_1.0.4.tgz";
        url  = "https://registry.yarnpkg.com/mkdirp/-/mkdirp-1.0.4.tgz";
        sha512 = "vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==";
      };
    }
    {
      name = "ms___ms_2.1.2.tgz";
      path = fetchurl {
        name = "ms___ms_2.1.2.tgz";
        url  = "https://registry.yarnpkg.com/ms/-/ms-2.1.2.tgz";
        sha512 = "sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==";
      };
    }
    {
      name = "ms___ms_2.1.3.tgz";
      path = fetchurl {
        name = "ms___ms_2.1.3.tgz";
        url  = "https://registry.yarnpkg.com/ms/-/ms-2.1.3.tgz";
        sha512 = "6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==";
      };
    }
    {
      name = "node_fetch___node_fetch_2.6.6.tgz";
      path = fetchurl {
        name = "node_fetch___node_fetch_2.6.6.tgz";
        url  = "https://registry.yarnpkg.com/node-fetch/-/node-fetch-2.6.6.tgz";
        sha512 = "Z8/6vRlTUChSdIgMa51jxQ4lrw/Jy5SOW10ObaA47/RElsAN2c5Pn8bTgFGWn/ibwzXTE8qwr1Yzx28vsecXEA==";
      };
    }
    {
      name = "normalize_path___normalize_path_3.0.0.tgz";
      path = fetchurl {
        name = "normalize_path___normalize_path_3.0.0.tgz";
        url  = "https://registry.yarnpkg.com/normalize-path/-/normalize-path-3.0.0.tgz";
        sha512 = "6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==";
      };
    }
    {
      name = "nth_check___nth_check_2.0.1.tgz";
      path = fetchurl {
        name = "nth_check___nth_check_2.0.1.tgz";
        url  = "https://registry.yarnpkg.com/nth-check/-/nth-check-2.0.1.tgz";
        sha512 = "it1vE95zF6dTT9lBsYbxvqh0Soy4SPowchj0UBGj/V6cTPnXXtQOPUbhZ6CmGzAD/rW22LQK6E96pcdJXk4A4w==";
      };
    }
    {
      name = "object_inspect___object_inspect_1.11.0.tgz";
      path = fetchurl {
        name = "object_inspect___object_inspect_1.11.0.tgz";
        url  = "https://registry.yarnpkg.com/object-inspect/-/object-inspect-1.11.0.tgz";
        sha512 = "jp7ikS6Sd3GxQfZJPyH3cjcbJF6GZPClgdV+EFygjFLQ5FmW/dRUnTd9PQ9k0JhoNDabWFbpF1yCdSWCC6gexg==";
      };
    }
    {
      name = "ow___ow_0.27.0.tgz";
      path = fetchurl {
        name = "ow___ow_0.27.0.tgz";
        url  = "https://registry.yarnpkg.com/ow/-/ow-0.27.0.tgz";
        sha512 = "SGnrGUbhn4VaUGdU0EJLMwZWSupPmF46hnTRII7aCLCrqixTAC5eKo8kI4/XXf1eaaI8YEVT+3FeGNJI9himAQ==";
      };
    }
    {
      name = "parse_duration___parse_duration_1.0.2.tgz";
      path = fetchurl {
        name = "parse_duration___parse_duration_1.0.2.tgz";
        url  = "https://registry.yarnpkg.com/parse-duration/-/parse-duration-1.0.2.tgz";
        sha512 = "Dg27N6mfok+ow1a2rj/nRjtCfaKrHUZV2SJpEn/s8GaVUSlf4GGRCRP1c13Hj+wfPKVMrFDqLMLITkYKgKxyyg==";
      };
    }
    {
      name = "parse_ms___parse_ms_2.1.0.tgz";
      path = fetchurl {
        name = "parse_ms___parse_ms_2.1.0.tgz";
        url  = "https://registry.yarnpkg.com/parse-ms/-/parse-ms-2.1.0.tgz";
        sha512 = "kHt7kzLoS9VBZfUsiKjv43mr91ea+U05EyKkEtqp7vNbHxmaVuEqN7XxeEVnGrMtYOAxGrDElSi96K7EgO1zCA==";
      };
    }
    {
      name = "parse5_htmlparser2_tree_adapter___parse5_htmlparser2_tree_adapter_6.0.1.tgz";
      path = fetchurl {
        name = "parse5_htmlparser2_tree_adapter___parse5_htmlparser2_tree_adapter_6.0.1.tgz";
        url  = "https://registry.yarnpkg.com/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-6.0.1.tgz";
        sha512 = "qPuWvbLgvDGilKc5BoicRovlT4MtYT6JfJyBOMDsKoiT+GiuP5qyrPCnR9HcPECIJJmZh5jRndyNThnhhb/vlA==";
      };
    }
    {
      name = "parse5___parse5_6.0.1.tgz";
      path = fetchurl {
        name = "parse5___parse5_6.0.1.tgz";
        url  = "https://registry.yarnpkg.com/parse5/-/parse5-6.0.1.tgz";
        sha512 = "Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw==";
      };
    }
    {
      name = "picomatch___picomatch_2.3.0.tgz";
      path = fetchurl {
        name = "picomatch___picomatch_2.3.0.tgz";
        url  = "https://registry.yarnpkg.com/picomatch/-/picomatch-2.3.0.tgz";
        sha512 = "lY1Q/PiJGC2zOv/z391WOTD+Z02bCgsFfvxoXXf6h7kv9o+WmsmzYqrAwY63sNgOxE4xEdq0WyUnXfKeBrSvYw==";
      };
    }
    {
      name = "pop_iterate___pop_iterate_1.0.1.tgz";
      path = fetchurl {
        name = "pop_iterate___pop_iterate_1.0.1.tgz";
        url  = "https://registry.yarnpkg.com/pop-iterate/-/pop-iterate-1.0.1.tgz";
        sha1 = "zqz9q0q/NT16DyqqLB/Hs/lBO6M=";
      };
    }
    {
      name = "pretty_ms___pretty_ms_7.0.1.tgz";
      path = fetchurl {
        name = "pretty_ms___pretty_ms_7.0.1.tgz";
        url  = "https://registry.yarnpkg.com/pretty-ms/-/pretty-ms-7.0.1.tgz";
        sha512 = "973driJZvxiGOQ5ONsFhOF/DtzPMOMtgC11kCpUrPGMTgqp2q/1gwzCquocrN33is0VZ5GFHXZYMM9l6h67v2Q==";
      };
    }
    {
      name = "q___q_2.0.3.tgz";
      path = fetchurl {
        name = "q___q_2.0.3.tgz";
        url  = "https://registry.yarnpkg.com/q/-/q-2.0.3.tgz";
        sha1 = "dbjbAlWhpa+C9Yw/Oqoe/sfQ0TQ=";
      };
    }
    {
      name = "qs___qs_6.10.1.tgz";
      path = fetchurl {
        name = "qs___qs_6.10.1.tgz";
        url  = "https://registry.yarnpkg.com/qs/-/qs-6.10.1.tgz";
        sha512 = "M528Hph6wsSVOBiYUnGf+K/7w0hNshs/duGsNXPUCLH5XAqjEtiPGwNONLV0tBH8NoGb0mvD5JubnUTrujKDTg==";
      };
    }
    {
      name = "querystringify___querystringify_2.2.0.tgz";
      path = fetchurl {
        name = "querystringify___querystringify_2.2.0.tgz";
        url  = "https://registry.yarnpkg.com/querystringify/-/querystringify-2.2.0.tgz";
        sha512 = "FIqgj2EUvTa7R50u0rGsyTftzjYmv/a3hO345bZNrqabNqjtgiDMgmo4mkUjd+nzU5oF3dClKqFIPUKybUyqoQ==";
      };
    }
    {
      name = "readdirp___readdirp_3.6.0.tgz";
      path = fetchurl {
        name = "readdirp___readdirp_3.6.0.tgz";
        url  = "https://registry.yarnpkg.com/readdirp/-/readdirp-3.6.0.tgz";
        sha512 = "hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==";
      };
    }
    {
      name = "reflect_metadata___reflect_metadata_0.1.13.tgz";
      path = fetchurl {
        name = "reflect_metadata___reflect_metadata_0.1.13.tgz";
        url  = "https://registry.yarnpkg.com/reflect-metadata/-/reflect-metadata-0.1.13.tgz";
        sha512 = "Ts1Y/anZELhSsjMcU605fU9RE4Oi3p5ORujwbIKXfWa+0Zxs510Qrmrce5/Jowq3cHSZSJqBjypxmHarc+vEWg==";
      };
    }
    {
      name = "requires_port___requires_port_1.0.0.tgz";
      path = fetchurl {
        name = "requires_port___requires_port_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/requires-port/-/requires-port-1.0.0.tgz";
        sha1 = "kl0mAdOaxIXgkc8NpcbmlNw9yv8=";
      };
    }
    {
      name = "rootpath___rootpath_0.1.2.tgz";
      path = fetchurl {
        name = "rootpath___rootpath_0.1.2.tgz";
        url  = "https://registry.yarnpkg.com/rootpath/-/rootpath-0.1.2.tgz";
        sha1 = "Wzeah9ypBum5HWkKWZQ5vvJn6ms=";
      };
    }
    {
      name = "safe_buffer___safe_buffer_5.2.1.tgz";
      path = fetchurl {
        name = "safe_buffer___safe_buffer_5.2.1.tgz";
        url  = "https://registry.yarnpkg.com/safe-buffer/-/safe-buffer-5.2.1.tgz";
        sha512 = "rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==";
      };
    }
    {
      name = "scmp___scmp_2.1.0.tgz";
      path = fetchurl {
        name = "scmp___scmp_2.1.0.tgz";
        url  = "https://registry.yarnpkg.com/scmp/-/scmp-2.1.0.tgz";
        sha512 = "o/mRQGk9Rcer/jEEw/yw4mwo3EU/NvYvp577/Btqrym9Qy5/MdWGBqipbALgd2lrdWTJ5/gqDusxfnQBxOxT2Q==";
      };
    }
    {
      name = "semver___semver_5.7.1.tgz";
      path = fetchurl {
        name = "semver___semver_5.7.1.tgz";
        url  = "https://registry.yarnpkg.com/semver/-/semver-5.7.1.tgz";
        sha512 = "sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==";
      };
    }
    {
      name = "side_channel___side_channel_1.0.4.tgz";
      path = fetchurl {
        name = "side_channel___side_channel_1.0.4.tgz";
        url  = "https://registry.yarnpkg.com/side-channel/-/side-channel-1.0.4.tgz";
        sha512 = "q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==";
      };
    }
    {
      name = "tinytim___tinytim_0.1.1.tgz";
      path = fetchurl {
        name = "tinytim___tinytim_0.1.1.tgz";
        url  = "https://registry.yarnpkg.com/tinytim/-/tinytim-0.1.1.tgz";
        sha1 = "yWih5VWa2VUyJO92J7qzTjyu+Kg=";
      };
    }
    {
      name = "to_regex_range___to_regex_range_5.0.1.tgz";
      path = fetchurl {
        name = "to_regex_range___to_regex_range_5.0.1.tgz";
        url  = "https://registry.yarnpkg.com/to-regex-range/-/to-regex-range-5.0.1.tgz";
        sha512 = "65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==";
      };
    }
    {
      name = "tr46___tr46_0.0.3.tgz";
      path = fetchurl {
        name = "tr46___tr46_0.0.3.tgz";
        url  = "https://registry.yarnpkg.com/tr46/-/tr46-0.0.3.tgz";
        sha1 = "gYT9NH2snNwYWZLzpmIuFLnZq2o=";
      };
    }
    {
      name = "tracer___tracer_1.1.5.tgz";
      path = fetchurl {
        name = "tracer___tracer_1.1.5.tgz";
        url  = "https://registry.yarnpkg.com/tracer/-/tracer-1.1.5.tgz";
        sha512 = "I7/AwGm/gf3KU7DcltmSmKJbytQj3q4hg+JKadtIKocfvBY4olY4SV8rAoMRvAD60gPlggEJ1QoSlb2dQtWHNw==";
      };
    }
    {
      name = "ts_mixer___ts_mixer_6.0.0.tgz";
      path = fetchurl {
        name = "ts_mixer___ts_mixer_6.0.0.tgz";
        url  = "https://registry.yarnpkg.com/ts-mixer/-/ts-mixer-6.0.0.tgz";
        sha512 = "nXIb1fvdY5CBSrDIblLn73NW0qRDk5yJ0Sk1qPBF560OdJfQp9jhl+0tzcY09OZ9U+6GpeoI9RjwoIKFIoB9MQ==";
      };
    }
    {
      name = "ts_node___ts_node_10.4.0.tgz";
      path = fetchurl {
        name = "ts_node___ts_node_10.4.0.tgz";
        url  = "https://registry.yarnpkg.com/ts-node/-/ts-node-10.4.0.tgz";
        sha512 = "g0FlPvvCXSIO1JDF6S232P5jPYqBkRL9qly81ZgAOSU7rwI0stphCgd2kLiCrU9DjQCrJMWEqcNSjQL02s6d8A==";
      };
    }
    {
      name = "tslib___tslib_2.3.1.tgz";
      path = fetchurl {
        name = "tslib___tslib_2.3.1.tgz";
        url  = "https://registry.yarnpkg.com/tslib/-/tslib-2.3.1.tgz";
        sha512 = "77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw==";
      };
    }
    {
      name = "twilio___twilio_3.71.1.tgz";
      path = fetchurl {
        name = "twilio___twilio_3.71.1.tgz";
        url  = "https://registry.yarnpkg.com/twilio/-/twilio-3.71.1.tgz";
        sha512 = "P/KFvm33UW15EnpHJKgdTxUa1u6MlR/u+sCVnL4ie2TDRv6t7kX+ieIGQMpH7bP/z7FXkTjEt0lz4M+XJ/XWOg==";
      };
    }
    {
      name = "type_fest___type_fest_1.4.0.tgz";
      path = fetchurl {
        name = "type_fest___type_fest_1.4.0.tgz";
        url  = "https://registry.yarnpkg.com/type-fest/-/type-fest-1.4.0.tgz";
        sha512 = "yGSza74xk0UG8k+pLh5oeoYirvIiWo5t0/o3zHHAO2tRDiZcxWP7fywNlXhqb6/r6sWvwi+RsyQMWhVLe4BVuA==";
      };
    }
    {
      name = "typescript_memoize___typescript_memoize_1.0.1.tgz";
      path = fetchurl {
        name = "typescript_memoize___typescript_memoize_1.0.1.tgz";
        url  = "https://registry.yarnpkg.com/typescript-memoize/-/typescript-memoize-1.0.1.tgz";
        sha512 = "oJNge1qUrOK37d5Y6Ly2txKeuelYVsFtNF6U9kXIN7juudcQaHJQg2MxLOy0CqtkW65rVDYuTCOjnSIVPd8z3w==";
      };
    }
    {
      name = "typescript___typescript_4.4.4.tgz";
      path = fetchurl {
        name = "typescript___typescript_4.4.4.tgz";
        url  = "https://registry.yarnpkg.com/typescript/-/typescript-4.4.4.tgz";
        sha512 = "DqGhF5IKoBl8WNf8C1gu8q0xZSInh9j1kJJMqT3a94w1JzVaBU4EXOSMrz9yDqMT0xt3selp83fuFMQ0uzv6qA==";
      };
    }
    {
      name = "url_parse___url_parse_1.5.3.tgz";
      path = fetchurl {
        name = "url_parse___url_parse_1.5.3.tgz";
        url  = "https://registry.yarnpkg.com/url-parse/-/url-parse-1.5.3.tgz";
        sha512 = "IIORyIQD9rvj0A4CLWsHkBBJuNqWpFQe224b6j9t/ABmquIS0qDU2pY6kl6AuOrL5OkCXHMCFNe1jBcuAggjvQ==";
      };
    }
    {
      name = "uuid___uuid_8.3.2.tgz";
      path = fetchurl {
        name = "uuid___uuid_8.3.2.tgz";
        url  = "https://registry.yarnpkg.com/uuid/-/uuid-8.3.2.tgz";
        sha512 = "+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==";
      };
    }
    {
      name = "vali_date___vali_date_1.0.0.tgz";
      path = fetchurl {
        name = "vali_date___vali_date_1.0.0.tgz";
        url  = "https://registry.yarnpkg.com/vali-date/-/vali-date-1.0.0.tgz";
        sha1 = "G5BKWWCfsyjvB4E4Qgk09rhnCaY=";
      };
    }
    {
      name = "weak_map___weak_map_1.0.5.tgz";
      path = fetchurl {
        name = "weak_map___weak_map_1.0.5.tgz";
        url  = "https://registry.yarnpkg.com/weak-map/-/weak-map-1.0.5.tgz";
        sha1 = "eWkVhNmGB/UHC9O3CkDmuyLkAes=";
      };
    }
    {
      name = "webidl_conversions___webidl_conversions_3.0.1.tgz";
      path = fetchurl {
        name = "webidl_conversions___webidl_conversions_3.0.1.tgz";
        url  = "https://registry.yarnpkg.com/webidl-conversions/-/webidl-conversions-3.0.1.tgz";
        sha1 = "JFNCdeKnvGvnvIZhHMFq4KVlSHE=";
      };
    }
    {
      name = "whatwg_url___whatwg_url_5.0.0.tgz";
      path = fetchurl {
        name = "whatwg_url___whatwg_url_5.0.0.tgz";
        url  = "https://registry.yarnpkg.com/whatwg-url/-/whatwg-url-5.0.0.tgz";
        sha1 = "lmRU6HZUYuN2RNNib2dCzotwll0=";
      };
    }
    {
      name = "ws___ws_7.5.5.tgz";
      path = fetchurl {
        name = "ws___ws_7.5.5.tgz";
        url  = "https://registry.yarnpkg.com/ws/-/ws-7.5.5.tgz";
        sha512 = "BAkMFcAzl8as1G/hArkxOxq3G7pjUqQ3gzYbLL0/5zNkph70e+lCoxBGnm6AW1+/aiNeV4fnKqZ8m4GZewmH2w==";
      };
    }
    {
      name = "xmlbuilder___xmlbuilder_13.0.2.tgz";
      path = fetchurl {
        name = "xmlbuilder___xmlbuilder_13.0.2.tgz";
        url  = "https://registry.yarnpkg.com/xmlbuilder/-/xmlbuilder-13.0.2.tgz";
        sha512 = "Eux0i2QdDYKbdbA6AM6xE4m6ZTZr4G4xF9kahI2ukSEMCzwce2eX9WlTI5J3s+NU7hpasFsr8hWIONae7LluAQ==";
      };
    }
    {
      name = "yn___yn_3.1.1.tgz";
      path = fetchurl {
        name = "yn___yn_3.1.1.tgz";
        url  = "https://registry.yarnpkg.com/yn/-/yn-3.1.1.tgz";
        sha512 = "Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==";
      };
    }
  ];
}

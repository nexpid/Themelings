// app/modules/premium/game_server/GameServerConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var13 = require;
        var3 = exports;
        var14 = dependencyMap;
        var16 = global;
        var5 = var16.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var12 = 0;
        var2 = var14[var12];
        var1 = undefined;
        var2 = var13.bind(var1)(var2);
        var2 = var2.Environments;
        var11 = {};
        var4 = 'select-game';
        var11['SELECT_GAME'] = var4;
        var4 = 'server-settings';
        var11['SERVER_SETTINGS'] = var4;
        var10 = {};
        var4 = {};
        var6 = var11.SELECT_GAME;
        var5 = {};
        var7 = {};
        var8 = 'close';
        var7['type'] = var8;
        var5['onBack'] = var7;
        var7 = {};
        var8 = 'go-to-step';
        var7['type'] = var8;
        var9 = var11.SERVER_SETTINGS;
        var7['step'] = var9;
        var5['onNext'] = var7;
        var4[5] = var5;
        var6 = var11.SERVER_SETTINGS;
        var5 = {};
        var7 = {};
        var7['type'] = var8;
        var8 = var11.SELECT_GAME;
        var7['step'] = var8;
        var5['onBack'] = var7;
        var7 = {};
        var8 = 'save';
        var7['type'] = var8;
        var5['onNext'] = var7;
        var4[5] = var5;
        var10['steps'] = var4;
        var4 = var16.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var9 = '1425215263548117002';
        var5 = 'production';
        if(!(var5 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = var16.window;
        var4 = var4.GLOBAL_ENV;
        var7 = var4.PROJECT_ENV;
        var4 = '1415025086791942144';
        var6 = 'staging';
        if(!(var6 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var4 = '1415044199572832256';
case 4:
        var9 = var4;
case 2:
        var4 = var16.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var8 = '1486428380437020672';
        if(!(var5 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var8 = '1361763069696675961';
case 6:
        var4 = var16.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var7 = '1402418491272986635';
        if(!(var5 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var4 = var16.window;
        var4 = var4.GLOBAL_ENV;
        var15 = var4.PROJECT_ENV;
        var4 = '1';
        var6 = 'staging';
        if(!(var6 === var15)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var4 = '356875570916753438';
case 10:
        var7 = var4;
case 8:
        var4 = var16.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var6 = '1458530944955973852';
        if(!(var5 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var4 = var16.window;
        var4 = var4.GLOBAL_ENV;
        var15 = var4.PROJECT_ENV;
        var4 = '2';
        var5 = 'staging';
        if(!(var5 === var15)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var4 = '1458563423670501376';
case 14:
        var6 = var4;
case 12:
        var5 = {};
        var5['SHOCKBYTE'] = var12;
        var4 = 'SHOCKBYTE';
        var5[var12] = var4;
        var4 = {};
        var12 = 1;
        var15 = var14[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.GameServerProviderType;
        var15 = var15.SHOCKBYTE;
        var16 = var16.window;
        var16 = var16.GLOBAL_ENV;
        var17 = var16.RELEASE_CHANNEL;
        var16 = var2.STAGING;
        var2 = 'https://discord.shockbyte.com/support';
        if(!(var17 === var16)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var2 = 'https://purple-prod.shockbyte.dev/support';
case 16:
        var4[14] = var2;
        var2 = {};
        var12 = var14[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.GameServerProviderType;
        var15 = var12.SHOCKBYTE;
        var12 = 'https://shockbyte.com/legal/acceptable-use-policy';
        var2[14] = var12;
        var12 = 2;
        var12 = var14[var12];
        var14 = var13.bind(var1)(var12);
        var13 = var14.fileFinishedImporting;
        var12 = 'modules/premium/game_server/GameServerConstants.tsx';
        var12 = var13.bind(var14)(var12);
        var3['GameServerSetupStep'] = var11;
        var3['GAME_SERVER_DEFAULT_STEP_CONFIG'] = var10;
        var10 = 24;
        var3['GAME_SERVER_SLIDE_PADDING'] = var10;
        var10 = 680;
        var3['GAME_SERVER_SLIDE_WIDTH'] = var10;
        var10 = 632;
        var3['GAME_SERVER_SLIDE_CONTENT_WIDTH'] = var10;
        var10 = 10;
        var3['GAME_SERVER_MAX_INSTANCES'] = var10;
        var10 = 32;
        var3['GAME_SERVER_MAX_NAME_LENGTH'] = var10;
        var10 = 1000;
        var3['GAME_SERVER_MIN_DELAY_TIME_MS'] = var10;
        var3['GAME_SERVER_COLLECTION_ID'] = var9;
        var3['RUNESCAPE_GAME_ID'] = var8;
        var3['MINECRAFT_GAME_ID'] = var7;
        var3['HYTALE_GAME_ID'] = var6;
        var3['GameServerGameProvider'] = var5;
        var3['GAME_SERVER_SUPPORT_URLS'] = var4;
        var3['GAME_SERVER_TOS'] = var2;
        var2 = function(arg1, arg2) {
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = 'https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=';
            var3 = arg1;
            var2 = '&guild_id=';
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var3['GAME_SERVER_SURVEY_URL'] = var2;
        var2 = '0';
        var3['GAME_SERVER_POWERUP_SKU_ID'] = var2;
        return var1;
    }
})();
// app/modules/premium/game_server/GameServerConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var14 = require;
        var3 = exports;
        var15 = dependencyMap;
        var17 = global;
        var5 = var17.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var13 = 0;
        var2 = var15[var13];
        var1 = undefined;
        var2 = var14.bind(var1)(var2);
        var2 = var2.Environments;
        var12 = {};
        var4 = 'select-game';
        var12['SELECT_GAME'] = var4;
        var4 = 'server-settings';
        var12['SERVER_SETTINGS'] = var4;
        var11 = {};
        var4 = {};
        var6 = var12.SELECT_GAME;
        var5 = {};
        var7 = {};
        var8 = 'close';
        var7['type'] = var8;
        var5['onBack'] = var7;
        var7 = {};
        var8 = 'go-to-step';
        var7['type'] = var8;
        var9 = var12.SERVER_SETTINGS;
        var7['step'] = var9;
        var5['onNext'] = var7;
        var4[5] = var5;
        var6 = var12.SERVER_SETTINGS;
        var5 = {};
        var7 = {};
        var7['type'] = var8;
        var8 = var12.SELECT_GAME;
        var7['step'] = var8;
        var5['onBack'] = var7;
        var7 = {};
        var8 = 'save';
        var7['type'] = var8;
        var5['onNext'] = var7;
        var4[5] = var5;
        var11['steps'] = var4;
        var4 = var17.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var10 = '1425215263548117002';
        var5 = 'production';
        if(!(var5 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = var17.window;
        var4 = var4.GLOBAL_ENV;
        var7 = var4.PROJECT_ENV;
        var4 = '1415025086791942144';
        var6 = 'staging';
        if(!(var6 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var4 = '1415044199572832256';
case 4:
        var10 = var4;
case 2:
        var4 = var17.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var9 = '1486428380437020672';
        if(!(var5 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var9 = '1361763069696675961';
case 6:
        var4 = var17.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var8 = '1402418491272986635';
        if(!(var5 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var4 = var17.window;
        var4 = var4.GLOBAL_ENV;
        var7 = var4.PROJECT_ENV;
        var4 = '1';
        var6 = 'staging';
        if(!(var6 === var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var4 = '356875570916753438';
case 10:
        var8 = var4;
case 8:
        var4 = var17.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var7 = '1458530944955973852';
        if(!(var5 !== var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var4 = var17.window;
        var4 = var4.GLOBAL_ENV;
        var16 = var4.PROJECT_ENV;
        var4 = '2';
        var6 = 'staging';
        if(!(var6 === var16)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var4 = '1458563423670501376';
case 14:
        var7 = var4;
case 12:
        var4 = var17.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var6 = '1497106682931707924';
        if(!(var5 !== var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var4 = var17.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var6 = '1497105229567754240';
case 16:
        var5 = {};
        var5['SHOCKBYTE'] = var13;
        var4 = 'SHOCKBYTE';
        var5[var13] = var4;
        var4 = {};
        var13 = 1;
        var16 = var15[var13];
        var16 = var14.bind(var1)(var16);
        var16 = var16.GameServerProviderType;
        var16 = var16.SHOCKBYTE;
        var17 = var17.window;
        var17 = var17.GLOBAL_ENV;
        var18 = var17.RELEASE_CHANNEL;
        var17 = var2.STAGING;
        var2 = 'https://discord.shockbyte.com/support';
        if(!(var18 === var17)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
        var2 = 'https://purple-prod.shockbyte.dev/support';
case 18:
        var4[15] = var2;
        var2 = {};
        var13 = var15[var13];
        var13 = var14.bind(var1)(var13);
        var13 = var13.GameServerProviderType;
        var16 = var13.SHOCKBYTE;
        var13 = 'https://shockbyte.com/legal/acceptable-use-policy';
        var2[15] = var13;
        var13 = 2;
        var13 = var15[var13];
        var15 = var14.bind(var1)(var13);
        var14 = var15.fileFinishedImporting;
        var13 = 'modules/premium/game_server/GameServerConstants.tsx';
        var13 = var14.bind(var15)(var13);
        var3['GameServerSetupStep'] = var12;
        var3['GAME_SERVER_DEFAULT_STEP_CONFIG'] = var11;
        var11 = 24;
        var3['GAME_SERVER_SLIDE_PADDING'] = var11;
        var11 = 680;
        var3['GAME_SERVER_SLIDE_WIDTH'] = var11;
        var11 = 632;
        var3['GAME_SERVER_SLIDE_CONTENT_WIDTH'] = var11;
        var11 = 10;
        var3['GAME_SERVER_MAX_INSTANCES'] = var11;
        var11 = 32;
        var3['GAME_SERVER_MAX_NAME_LENGTH'] = var11;
        var11 = 1000;
        var3['GAME_SERVER_MIN_DELAY_TIME_MS'] = var11;
        var11 = 3;
        var3['NEW_GAMES_COACHMARK_MIN_PRODUCTS'] = var11;
        var3['GAME_SERVER_COLLECTION_ID'] = var10;
        var3['RUNESCAPE_GAME_ID'] = var9;
        var3['MINECRAFT_GAME_ID'] = var8;
        var3['HYTALE_GAME_ID'] = var7;
        var3['GAME_SERVER_NEW_GAMES_COACHMARK_COLLECTION_ID'] = var6;
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
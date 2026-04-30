// app/modules/premium/game_server/GameServerConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var15 = require;
        var5 = metroImportDefault;
        var3 = exports;
        var16 = dependencyMap;
        var18 = global;
        var7 = var18.Object;
        var6 = var7.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var6.bind(var7)(var3, var1, var4);
        var14 = 0;
        var4 = var16[var14];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var4 = 1;
        var4 = var16[var4];
        var4 = var5.bind(var1)(var4);
        var _closure1_slot0 = var4;
        var4 = 2;
        var4 = var16[var4];
        var4 = var15.bind(var1)(var4);
        var4 = var4.Environments;
        var13 = {};
        var5 = 'select-game';
        var13['SELECT_GAME'] = var5;
        var5 = 'server-settings';
        var13['SERVER_SETTINGS'] = var5;
        var12 = {};
        var5 = {};
        var8 = var13.SELECT_GAME;
        var7 = {};
        var9 = {};
        var10 = 'close';
        var9['type'] = var10;
        var7['onBack'] = var9;
        var9 = {};
        var10 = 'go-to-step';
        var9['type'] = var10;
        var11 = var13.SERVER_SETTINGS;
        var9['step'] = var11;
        var7['onNext'] = var9;
        var5[7] = var7;
        var8 = var13.SERVER_SETTINGS;
        var7 = {};
        var9 = {};
        var9['type'] = var10;
        var10 = var13.SELECT_GAME;
        var9['step'] = var10;
        var7['onBack'] = var9;
        var9 = {};
        var10 = 'save';
        var9['type'] = var10;
        var7['onNext'] = var9;
        var5[7] = var7;
        var12['steps'] = var5;
        var5 = var18.window;
        var5 = var5.GLOBAL_ENV;
        var5 = var5.PROJECT_ENV;
        var11 = '1425215263548117002';
        var17 = 'production';
        if(!(var17 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var5 = var18.window;
        var5 = var5.GLOBAL_ENV;
        var8 = var5.PROJECT_ENV;
        var5 = '1415025086791942144';
        var7 = 'staging';
        if(!(var7 === var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var5 = '1415044199572832256';
case 4:
        var11 = var5;
case 2:
        var5 = var18.window;
        var5 = var5.GLOBAL_ENV;
        var5 = var5.PROJECT_ENV;
        var10 = '1486428380437020672';
        if(!(var17 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var10 = '1361763069696675961';
case 6:
        var5 = var18.window;
        var5 = var5.GLOBAL_ENV;
        var5 = var5.PROJECT_ENV;
        var9 = '1402418491272986635';
        if(!(var17 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var5 = var18.window;
        var5 = var5.GLOBAL_ENV;
        var8 = var5.PROJECT_ENV;
        var5 = '1';
        var7 = 'staging';
        if(!(var7 === var8)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var5 = '356875570916753438';
case 10:
        var9 = var5;
case 8:
        var5 = var18.window;
        var5 = var5.GLOBAL_ENV;
        var5 = var5.PROJECT_ENV;
        var8 = '1458530944955973852';
        if(!(var17 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var5 = var18.window;
        var5 = var5.GLOBAL_ENV;
        var19 = var5.PROJECT_ENV;
        var5 = '2';
        var7 = 'staging';
        if(!(var7 === var19)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var5 = '1458563423670501376';
case 14:
        var8 = var5;
case 12:
        var5 = function NewGamesCoachmarkContent() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure1_slot1 = var5;
        var7 = var6.bind(var1)(var5);
        var5 = var18.window;
        var5 = var5.GLOBAL_ENV;
        var6 = var5.PROJECT_ENV;
        var5 = '1497097140001046528';
        if(!(var17 === var6)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var5 = '1497100850261131334';
case 16:
        var7['FEATURED_PRODUCT_ID'] = var5;
        var5 = var18.window;
        var5 = var5.GLOBAL_ENV;
        var6 = var5.PROJECT_ENV;
        var5 = '1497095960202051584';
        if(!(var17 === var6)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
        var5 = '1440133627899023452';
case 18:
        var7['FEATURED_GAME_ID'] = var5;
        var5 = 'Windrose';
        var7['FEATURED_GAME_NAME'] = var5;
        var5 = 'Factorio';
        var7['SECOND_GAME_NAME'] = var5;
        var5 = 'V Rising';
        var7['THIRD_GAME_NAME'] = var5;
        var6 = {};
        var6['SHOCKBYTE'] = var14;
        var5 = 'SHOCKBYTE';
        var6[var14] = var5;
        var5 = {};
        var14 = 3;
        var17 = var16[var14];
        var17 = var15.bind(var1)(var17);
        var17 = var17.GameServerProviderType;
        var17 = var17.SHOCKBYTE;
        var18 = var18.window;
        var18 = var18.GLOBAL_ENV;
        var19 = var18.RELEASE_CHANNEL;
        var18 = var4.STAGING;
        var4 = 'https://discord.shockbyte.com/support';
        if(!(var19 === var18)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
        var4 = 'https://purple-prod.shockbyte.dev/support';
case 20:
        var5[16] = var4;
        var4 = {};
        var14 = var16[var14];
        var14 = var15.bind(var1)(var14);
        var14 = var14.GameServerProviderType;
        var17 = var14.SHOCKBYTE;
        var14 = 'https://shockbyte.com/legal/acceptable-use-policy';
        var4[16] = var14;
        var14 = 4;
        var14 = var16[var14];
        var16 = var15.bind(var1)(var14);
        var15 = var16.fileFinishedImporting;
        var14 = 'modules/premium/game_server/GameServerConstants.tsx';
        var14 = var15.bind(var16)(var14);
        var3['GameServerSetupStep'] = var13;
        var3['GAME_SERVER_DEFAULT_STEP_CONFIG'] = var12;
        var12 = 24;
        var3['GAME_SERVER_SLIDE_PADDING'] = var12;
        var12 = 680;
        var3['GAME_SERVER_SLIDE_WIDTH'] = var12;
        var12 = 632;
        var3['GAME_SERVER_SLIDE_CONTENT_WIDTH'] = var12;
        var12 = 10;
        var3['GAME_SERVER_MAX_INSTANCES'] = var12;
        var12 = 32;
        var3['GAME_SERVER_MAX_NAME_LENGTH'] = var12;
        var12 = 1000;
        var3['GAME_SERVER_MIN_DELAY_TIME_MS'] = var12;
        var3['GAME_SERVER_COLLECTION_ID'] = var11;
        var3['RUNESCAPE_GAME_ID'] = var10;
        var3['MINECRAFT_GAME_ID'] = var9;
        var3['HYTALE_GAME_ID'] = var8;
        var3['NewGamesCoachmarkContent'] = var7;
        var3['GameServerGameProvider'] = var6;
        var3['GAME_SERVER_SUPPORT_URLS'] = var5;
        var3['GAME_SERVER_TOS'] = var4;
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
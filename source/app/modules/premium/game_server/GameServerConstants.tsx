// app/modules/premium/game_server/GameServerConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = require;
        var3 = exports;
        var11 = dependencyMap;
        var13 = global;
        var5 = var13.Object;
        var4 = var5.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var4.bind(var5)(var3, var1, var2);
        var9 = 0;
        var2 = var11[var9];
        var1 = undefined;
        var2 = var10.bind(var1)(var2);
        var2 = var2.Environments;
        var8 = {};
        var4 = 'select-game';
        var8['SELECT_GAME'] = var4;
        var4 = 'server-settings';
        var8['SERVER_SETTINGS'] = var4;
        var7 = {};
        var4 = {};
        var6 = var8.SELECT_GAME;
        var5 = {};
        var12 = {};
        var14 = 'close';
        var12['type'] = var14;
        var5['onBack'] = var12;
        var12 = {};
        var14 = 'go-to-step';
        var12['type'] = var14;
        var15 = var8.SERVER_SETTINGS;
        var12['step'] = var15;
        var5['onNext'] = var12;
        var4[var6] = var5;
        var6 = var8.SERVER_SETTINGS;
        var5 = {};
        var12 = {};
        var12['type'] = var14;
        var14 = var8.SELECT_GAME;
        var12['step'] = var14;
        var5['onBack'] = var12;
        var12 = {};
        var14 = 'save';
        var12['type'] = var14;
        var5['onNext'] = var12;
        var4[var6] = var5;
        var7['steps'] = var4;
        var4 = var13.window;
        var4 = var4.GLOBAL_ENV;
        var5 = var4.PROJECT_ENV;
        var6 = '1425215263548117002';
        var4 = 'production';
        if(!(var4 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = var13.window;
        var4 = var4.GLOBAL_ENV;
        var12 = var4.PROJECT_ENV;
        var4 = '1415025086791942144';
        var5 = 'staging';
        if(!(var5 === var12)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var4 = '1415044199572832256';
case 4:
        var6 = var4;
case 2:
        var5 = {};
        var5['SHOCKBYTE'] = var9;
        var4 = 'SHOCKBYTE';
        var5[var9] = var4;
        var4 = {};
        var9 = 1;
        var12 = var11[var9];
        var12 = var10.bind(var1)(var12);
        var12 = var12.GameServerProviderType;
        var12 = var12.SHOCKBYTE;
        var13 = var13.window;
        var13 = var13.GLOBAL_ENV;
        var14 = var13.RELEASE_CHANNEL;
        var13 = var2.STAGING;
        var2 = 'https://discord.shockbyte.com/support';
        if(!(var14 === var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var2 = 'https://purple-prod.shockbyte.dev/support';
case 6:
        var4[var12] = var2;
        var2 = {};
        var9 = var11[var9];
        var9 = var10.bind(var1)(var9);
        var9 = var9.GameServerProviderType;
        var12 = var9.SHOCKBYTE;
        var9 = 'https://shockbyte.com/legal/acceptable-use-policy';
        var2[var12] = var9;
        var9 = 2;
        var9 = var11[var9];
        var11 = var10.bind(var1)(var9);
        var10 = var11.fileFinishedImporting;
        var9 = 'modules/premium/game_server/GameServerConstants.tsx';
        var9 = var10.bind(var11)(var9);
        var3['GameServerSetupStep'] = var8;
        var3['GAME_SERVER_DEFAULT_STEP_CONFIG'] = var7;
        var7 = 24;
        var3['GAME_SERVER_SLIDE_PADDING'] = var7;
        var7 = 680;
        var3['GAME_SERVER_SLIDE_WIDTH'] = var7;
        var7 = 632;
        var3['GAME_SERVER_SLIDE_CONTENT_WIDTH'] = var7;
        var7 = 10;
        var3['GAME_SERVER_MAX_INSTANCES'] = var7;
        var7 = 32;
        var3['GAME_SERVER_MAX_NAME_LENGTH'] = var7;
        var7 = 1000;
        var3['GAME_SERVER_MIN_DELAY_TIME_MS'] = var7;
        var3['GAME_SERVER_COLLECTION_ID'] = var6;
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
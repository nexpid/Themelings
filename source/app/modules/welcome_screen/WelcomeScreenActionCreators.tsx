// app/modules/welcome_screen/WelcomeScreenActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot4 = var2;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 247; continue _fun0001 }
 10:
                    var9 = arg1;
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 2;
                    var4 = var2[var5];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'WELCOME_SCREEN_FETCH_START';
                    var4['type'] = var8;
                    var4 = var6.bind(var7)(var4);
 60: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.get;
                    var4 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var11 = _closure1_slot4;
                    var10 = var11.GUILD_WELCOME_SCREEN;
                    var8 = var9;
                    var8 = var10.bind(var11)(var8);
                    var4['url'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=133);
 131:
                    return var4;
 133:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 200; continue _fun0001 }
 139:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'WELCOME_SCREEN_FETCH_SUCCESS';
                    var6['type'] = var10;
                    var6['guildId'] = var9;
                    var9 = var4.body;
                    var6['welcomeScreen'] = var9;
                    var6 = var7.bind(var8)(var6);
                    var6 = var4.body;
 197: // try_end0
                    return var6;
 200:
                    return var4;
 203: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'WELCOME_SCREEN_FETCH_FAIL';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
 247:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 281; continue _fun0002 }
 10:
                    var9 = arg1;
                    var10 = arg2;
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 2;
                    var4 = var2[var5];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var4);
                    var6 = var7.dispatch;
                    var4 = {};
                    var8 = 'WELCOME_SCREEN_SUBMIT';
                    var4['type'] = var8;
                    var4 = var6.bind(var7)(var4);
 63: // try_start_0
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 3;
                    var4 = var7[var4];
                    var4 = var6.bind(var2)(var4);
                    var7 = var4.HTTP;
                    var6 = var7.patch;
                    var4 = {};
                    var12 = _closure1_slot4;
                    var11 = var12.GUILD_WELCOME_SCREEN;
                    var8 = var9;
                    var8 = var11.bind(var12)(var8);
                    var4['url'] = var8;
                    var8 = {};
                    var11 = var10.description;
                    var8['description'] = var11;
                    var11 = var10.channels;
                    var8['welcome_channels'] = var11;
                    var10 = var10.enabled;
                    var8['enabled'] = var10;
                    var4['body'] = var8;
                    var8 = true;
                    var4['oldFormErrors'] = var8;
                    var4['rejectWithError'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=173);
 171:
                    return var4;
 173:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 234; continue _fun0002 }
 179:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var5];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var10 = 'WELCOME_SCREEN_SUBMIT_SUCCESS';
                    var6['type'] = var10;
                    var6['guildId'] = var9;
                    var9 = var4.body;
                    var6['welcomeScreen'] = var9;
                    var6 = var7.bind(var8)(var6);
 232: // try_end0
                    _fun0002_ip = 278; continue _fun0002;
 234:
                    return var4;
 237: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'WELCOME_SCREEN_SUBMIT_FAILURE';
                    var3['type'] = var6;
                    var3 = var4.bind(var5)(var3);
 278:
                    return var2;
 281:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var2 = var2.bind(var1)();
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/welcome_screen/WelcomeScreenActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 11; continue _fun0003 }
 9:
            var5 = false;
 11:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'WELCOME_SCREEN_VIEW';
            var2['type'] = var6;
            var6 = arg1;
            var2['guildId'] = var6;
            var2['isLurking'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['welcomeScreenViewed'] = var6;
    var3['fetchWelcomeScreen'] = var5;
    var5 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'WELCOME_SCREEN_SETTINGS_RESET';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetWelcomeScreen'] = var5;
    var5 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'WELCOME_SCREEN_SETTINGS_CLEAR';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearWelcomeScreenSettings'] = var5;
    var4 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'WELCOME_SCREEN_SETTINGS_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['settings'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateSettings'] = var4;
    var3['saveWelcomeScreen'] = var2;
    return var1;
})();
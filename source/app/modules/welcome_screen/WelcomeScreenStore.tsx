// app/modules/welcome_screen/WelcomeScreenStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var10 = function handleInviteData(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var1 = var1.invite;
            var2 = var1.guild;
            var3 = null;
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var2.welcome_screen;
case 6:
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot6;
            var3 = var2.id;
            var2 = var2.welcome_screen;
            var4[var3] = var2;
            var1 = true;
case 8:
            return var1;
        }
    };
    var9 = function handleWelcomeScreenUpdate(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.welcomeScreen;
            var2 = var1.guildId;
            var1 = _closure1_slot6;
            var5 = null;
            if(!(var5 == var3)) { _fun0003_ip = 6; continue _fun0003 }
case 10:
            var3 = _closure1_slot5;
case 6:
            var1[var2] = var3;
            var1 = undefined;
            return var1;
        }
    };
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var _closure1_slot5 = var2;
    var4 = {};
    var _closure1_slot6 = var4;
    var4 = {};
    var _closure1_slot7 = var4;
    var4 = false;
    var _closure1_slot8 = var4;
    var _closure1_slot9 = var4;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function WelcomeScreenStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 13; continue _fun0004;
case 11:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 13:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'get';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var1 = undefined;
                return var1;
case 14:
                var1 = _closure1_slot6;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasSeen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var2 = arguments[1];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                var2 = false;
case 16:
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0006_ip = 12; continue _fun0006 }
case 18:
                if(var2) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                var2 = _closure1_slot7;
                var2 = var2[var4];
                if(var2) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var2 = false;
case 21:
                _fun0006_ip = 23; continue _fun0006;
case 19:
                var2 = _closure1_slot8;
case 23:
                var1 = var2;
case 12:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isEmpty';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0007_ip = 24; continue _fun0007 }
case 15:
                var2 = _closure1_slot6;
                var2 = var2[var3];
                var1 = var1 == var2;
                if(var1) { _fun0007_ip = 19; continue _fun0007 }
case 10:
                var2 = var2.welcome_channels;
                var3 = var2.length;
                var2 = 0;
                var1 = var2 === var3;
case 19:
                return var1;
case 24:
                var1 = true;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'WelcomeScreenStore';
    var8['displayName'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var4 = {};
    var4['INVITE_RESOLVE_SUCCESS'] = var10;
    var4['INVITE_ACCEPT_SUCCESS'] = var10;
    var4['WELCOME_SCREEN_SUBMIT_SUCCESS'] = var9;
    var4['WELCOME_SCREEN_UPDATE'] = var9;
    var9 = function handleWelcomeScreenView(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var3 = var1.isLurking;
            var4 = _closure1_slot7;
            var1 = true;
            var4[var5] = var1;
            if(!var3) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            _closure1_slot8 = var1;
case 25:
            var1 = undefined;
            return var1;
        }
    };
    var4['WELCOME_SCREEN_VIEW'] = var9;
    var9 = function handleGuildStopLurking() {
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_STOP_LURKING'] = var9;
    var9 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = var1.id;
        var2 = _closure1_slot7;
        var1 = false;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['GUILD_DELETE'] = var9;
    var9 = function handleFetchWelcomeScreen() {
        var1 = true;
        _closure1_slot9 = var1;
        var1 = false;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var4['WELCOME_SCREEN_FETCH_START'] = var9;
    var9 = function handleFetchWelcomeScreenSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = false;
            _closure1_slot9 = var2;
            _closure1_slot10 = var2;
            var3 = var1.welcomeScreen;
            var2 = var1.guildId;
            var1 = _closure1_slot6;
            var5 = null;
            if(!(var5 == var3)) { _fun0009_ip = 27; continue _fun0009 }
case 28:
            var3 = _closure1_slot5;
case 27:
            var1[var2] = var3;
            var1 = undefined;
            return var1;
        }
    };
    var4['WELCOME_SCREEN_FETCH_SUCCESS'] = var9;
    var5 = function handleFetchWelcomeScreenFail() {
        var1 = false;
        _closure1_slot9 = var1;
        var1 = true;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var4['WELCOME_SCREEN_FETCH_FAIL'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var8](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/welcome_screen/WelcomeScreenStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['NO_WELCOME_SCREEN'] = var2;
    return var1;
})();
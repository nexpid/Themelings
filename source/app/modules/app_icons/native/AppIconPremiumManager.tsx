// app/modules/app_icons/native/AppIconPremiumManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getIconById;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'AppIconPremiumManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FreemiumAppIconIds;
    var4 = var4.DEFAULT;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'orphaned';
    var4['ORPHANED'] = var8;
    var8 = 'premium_lost';
    var4['PREMIUM_LOST'] = var8;
    var _closure1_slot14 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function AppIconPremiumManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var2 = _closure2_slot1;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot15;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = {};
                var3 = function APP_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAppStateUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['APP_STATE_UPDATE'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'handleAppStateUpdate';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = this;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.isIOS;
                var2 = var2.bind(var4)();
                var4 = arg1;
                var5 = var4.state;
                if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = 'background';
                var2 = var2 === var5;
                _fun0003_ip = 11; continue _fun0003;
case 9:
                var4 = 'active';
                var2 = var4 === var5;
case 11:
                if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var2 = var3.validateAndResetIfNeeded;
                var2 = var2.bind(var3)();
case 12:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var8 = 'validateAndResetIfNeeded';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var4 = _closure1_slot9;
                    var2 = var4.getCurrentUser;
                    var9 = var2.bind(var4)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var5.bind(var4)(var2);
                    var2 = var5.fetchCurrentAppIcon;
                    var2 = var2.bind(var5)();
                    SaveGenerator(address=65);
case 16:
                    return var2;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 18; continue _fun0004 }
case 5:
                    var5 = _closure1_slot13;
                    if(!(var2 !== var5)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var5 = _closure1_slot10;
                    var7 = var5.bind(var4)(var2);
                    var5 = var7.id;
                    if(!(var2 === var5)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 13;
                    var5 = var10[var5];
                    var8 = var8.bind(var4)(var5);
                    var5 = var8.canUsePremiumAppIcons;
                    var5 = var5.bind(var8)(var9);
                    var5 = !var5;
                    if(!var5) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var5 = var7.isPremium;
case 23:
                    if(!var5) { _fun0004_ip = 19; continue _fun0004 }
case 25:
                    var8 = _closure1_slot12;
                    var7 = var8.info;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var11 = var5.concat;
                    var10 = 'User is not premium, resetting icon ';
                    var5 = ' to default';
                    var5 = var11.bind(var10)(var2, var5);
                    var5 = var7.bind(var8)(var5);
                    var8 = var6.resetIcon;
                    var7 = null;
                    var10 = var7 == var9;
                    var5 = undefined;
                    if(var10) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var5 = var9.premiumType;
case 26:
                    var10 = var7 != var5;
                    var7 = undefined;
                    if(!var10) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var7 = var5;
case 28:
                    var5 = _closure1_slot14;
                    var5 = var5.PREMIUM_LOST;
                    var5 = var8.bind(var6)(var2, var7, var5);
case 19:
                    return var4;
case 21:
                    var8 = _closure1_slot12;
                    var7 = var8.info;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var11 = var5.concat;
                    var10 = 'Icon ';
                    var5 = ' is no longer available, resetting to default';
                    var5 = var11.bind(var10)(var2, var5);
                    var5 = var7.bind(var8)(var5);
                    var5 = var6.resetIcon;
                    var8 = null;
                    var10 = var8 == var9;
                    var7 = undefined;
                    if(var10) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var7 = var9.premiumType;
case 30:
                    var8 = var8 != var7;
                    var4 = undefined;
                    if(!var8) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var4 = var7;
case 32:
                    var3 = _closure1_slot14;
                    var3 = var3.ORPHANED;
                    var3 = var5.bind(var6)(var2, var4, var3);
                    var3 = undefined;
                    return var3;
case 18:
                    return var2;
case 14:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function validateAndResetIfNeeded() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'resetIcon';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg3;
            var _closure3_slot1 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.setAppIcon;
            var4 = _closure1_slot13;
            var3 = arg2;
            var5 = var5.bind(var6)(var4, var3);
            var4 = var5.then;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot11;
                var3 = var2.APP_ICON_AUTO_RESET;
                var2 = {};
                var8 = _closure3_slot0;
                var2['previous_icon_id'] = var8;
                var7 = _closure1_slot13;
                var2['reset_to_icon_id'] = var7;
                var6 = _closure3_slot1;
                var2['reset_reason'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.catch;
            var2 = function(arg1) {
                var4 = _closure1_slot12;
                var3 = var4.error;
                var2 = 'Failed to reset app icon:';
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_icons/native/AppIconPremiumManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
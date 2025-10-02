// app/modules/nuf/native/RedesignNewUserManager.tsx
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.initialize;
    var _closure1_slot8 = var8;
    var4 = var4.ContactSyncModes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function RedesignNewUserManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot11;
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
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = -1;
                var1['_onboardingStepIndex'] = var3;
                var1['_lastShownStepIndex'] = var3;
                var3 = {};
                var4 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['POST_CONNECTION_OPEN'] = var4;
                var4 = function ONBOARDING_START() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleOnboardingStart;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3['ONBOARDING_START'] = var4;
                var1['actions'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.hasDeferredInvite;
                        var3 = var3.bind(var4)();
                        var4 = _closure1_slot8;
                        var5 = _closure1_slot9;
                        if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var3 = var5.ONBOARDING;
                        _fun0003_ip = 11; continue _fun0003;
case 9:
                        var3 = var5.ONBOARDING_INVITE;
case 11:
                        var3 = var4.bind(var1)(var3);
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 8;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.getNextOnboardingStep;
                        var3 = false;
                        var2 = -1;
                        var4 = var4.bind(var5)(var3, var2, var2);
                        var3 = var4.then;
                        var2 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var1 = arg1;
                                var2 = var1.lastShownStepIndex;
                                var2 = var1.onboardingStepIndex;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 8;
                                var3 = var3[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var3);
                                var3 = var5.getKeyForOnboardingStep;
                                var3 = var3.bind(var5)(var2);
                                var5 = null;
                                if(!(var5 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 11:
                                var6 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var5 = 9;
                                var5 = var10[var5];
                                var7 = var6.bind(var1)(var5);
                                var6 = var7.pushLazy;
                                var9 = _closure1_slot0;
                                var4 = 11;
                                var4 = var10[var4];
                                var8 = var9.bind(var1)(var4);
                                var4 = 10;
                                var5 = var10[var4];
                                var4 = var10.paths;
                                var5 = var8.bind(var1)(var5, var4);
                                var4 = {};
                                var4['initialRouteName'] = var3;
                                var4['initialOnboardingStepIndex'] = var2;
                                var2 = 12;
                                var2 = var10[var2];
                                var2 = var9.bind(var1)(var2);
                                var3 = var2.NEW_USER_MODAL_KEY;
                                var2 = {'fullScreenGestureEnabled': false, 'presentation': null, 'animation': 'slide_from_bottom'};
                                var8 = 13;
                                var8 = var10[var8];
                                var9 = var9.bind(var1)(var8);
                                var8 = var9.isAndroid;
                                var9 = var8.bind(var9)();
                                var8 = 'card';
                                if(!var9) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                                var8 = 'transparentModal';
case 13:
                                var2['presentation'] = var8;
                                var15 = var7;
                                var14 = var5;
                                var13 = var4;
                                var12 = var3;
                                var11 = var2;
                                var2 = var15[var6](var14, var13, var12, var11, var10);
case 12:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['startOnboarding'] = var3;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.startOnboarding;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleOnboardingStart'] = var3;
                var2 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure1_slot10;
                        var2 = var3.getType;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.isModalOpen;
                        var1 = var1.bind(var2)();
                        if(var1) { _fun0005_ip = 15; continue _fun0005 }
case 17:
                        var2 = _closure3_slot0;
                        var1 = var2.startOnboarding;
                        var1 = var1.bind(var2)();
case 15:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleConnectionOpen'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var1 = var1.bind(var2)(var3);
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
    var4 = 'modules/nuf/native/RedesignNewUserManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
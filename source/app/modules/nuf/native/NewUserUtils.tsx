// app/modules/nuf/native/NewUserUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _shouldSkipContactSyncStep() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var2 = var5[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.checkContactPermissions;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=46);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = _closure1_slot9;
                    var3 = var3.UNAUTHORIZED;
                    var3 = var2 === var3;
                    if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.isIOS;
                    var3 = var4.bind(var5)();
case 8:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function lastStepComplete(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var4 = var3[var1];
            var1 = undefined;
            var8 = var6.bind(var1)(var4);
            var7 = var8.trackNUFStep;
            var5 = arg1;
            var4 = 'NUF Complete';
            var4 = var7.bind(var8)(var5, var4);
            var4 = 13;
            var4 = var3[var4];
            var5 = var6.bind(var1)(var4);
            var4 = var5.isModalOpen;
            var7 = 14;
            var3 = var3[var7];
            var3 = var6.bind(var1)(var3);
            var3 = var3.NEW_USER_MODAL_KEY;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 15;
            var4 = var3[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.popWithKey;
            var6 = _closure1_slot0;
            var3 = var3[var7];
            var3 = var6.bind(var1)(var3);
            var3 = var3.NEW_USER_MODAL_KEY;
            var3 = var4.bind(var5)(var3);
case 10:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 16;
            var5 = var4[var5];
            var7 = var3.bind(var1)(var5);
            var6 = var7.transitionTo;
            var2 = _closure1_slot8;
            var5 = var2.ME;
            var2 = {};
            var8 = true;
            var2['navigationReplace'] = var8;
            var2 = var6.bind(var7)(var5, var2);
            var2 = 17;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setNewUserFlowCompleted;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var2 = function getNextOnboardingStep() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var2;
    var1 = function _getNextOnboardingStep() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var16 = arguments[0];
                    var5 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var7 = undefined;
                    if(!(var16 === var7)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var16 = false;
case 14:
                    SaveGenerator(address=28);
case 16:
                    return var7;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var4 = _closure1_slot13;
                    var6 = var4[var5];
                    var14 = null;
                    var8 = var14 == var6;
                    var4 = undefined;
                    if(var8) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var4 = var6.key;
case 20:
                    var8 = var14 != var4;
                    var6 = 'registration';
                    if(!var8) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var6 = var4;
case 22:
                    var8 = arguments[2];
                    var4 = 1;
                    var4 = var8 + var4;
                    var8 = _closure1_slot13;
                    var8 = var8.length;
                    if(!(!(var4 >= var8))) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var8 = _closure1_slot13;
                    var9 = var8[var4];
                    var12 = var9.key;
                    var8 = var9.shouldShowStep;
                    var13 = var9.transitionStep;
                    var8 = var8.bind(var7)();
                    SaveGenerator(address=137);
case 26:
                    return var8;
case 27:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    if(var8) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var9 = _closure1_slot16;
                    var10 = var9.bind(var7)(var16, var5, var4);
                    SaveGenerator(address=164);
case 32:
                    return var10;
case 33:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=8);
                    var11 = var9;
                    var9 = var10;
                    if(!var11) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                    return var10;
case 30:
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 12;
                    var10 = var15[var10];
                    var15 = var11.bind(var7)(var10);
                    var11 = var15.trackNUFStep;
                    var10 = {};
                    var10['skip'] = var16;
                    var10 = var11.bind(var15)(var6, var12, var10);
                    if(!(var14 == var13)) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var10 = {};
                    var10['lastShownStepIndex'] = var4;
                    var10['onboardingStepIndex'] = var4;
                    var11 = _closure1_slot13;
                    var15 = var11[var4];
                    var16 = var14 == var15;
                    var11 = undefined;
                    if(var16) { _fun0003_ip = 38; continue _fun0003 }
case 39:
                    var11 = var15.transitionStep;
case 38:
                    var11 = var14 == var11;
                    var10['continueNavigation'] = var11;
                    _fun0003_ip = 40; continue _fun0003;
case 36:
                    var11 = _closure1_slot15;
                    var11 = var11.bind(var7)(var12);
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var11 = 10;
                    var11 = var14[var11];
                    var12 = var12.bind(var7)(var11);
                    var11 = var12.wait;
                    var11 = var11.bind(var12)(var13);
                    var11 = {};
                    var11['lastShownStepIndex'] = var4;
                    var11['onboardingStepIndex'] = var4;
                    var12 = false;
                    var11['continueNavigation'] = var12;
                    var10 = var11;
case 40:
                    var9 = var10;
case 34:
                    return var9;
case 28:
                    return var8;
case 24:
                    var3 = _closure1_slot15;
                    var3 = var3.bind(var7)(var6);
                    var3 = {};
                    var3['lastShownStepIndex'] = var5;
                    var3['onboardingStepIndex'] = var4;
                    var4 = false;
                    var3['continueNavigation'] = var4;
                    return var3;
case 18:
                    return var2;
case 12:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var11 = var8.bind(var1)(var5);
    var _closure1_slot3 = var11;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativeModules;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.PlatformTypes;
    var _closure1_slot7 = var8;
    var5 = var5.Routes;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContactPermissions;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NotificationAuthorizationStatus;
    var _closure1_slot10 = var5;
    var8 = {};
    var5 = 'choose-avatar';
    var8['key'] = var5;
    var5 = function shouldShowStep() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot6;
            var1 = var2.getCurrentUser;
            var3 = var1.bind(var2)();
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var1 = var3.avatar;
case 41:
            var1 = var2 == var1;
            return var1;
        }
    };
    var8['shouldShowStep'] = var5;
    var10 = {};
    var5 = 'enable-notification';
    var10['key'] = var5;
    var5 = function* () {
        var1 = function* anon_0_() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 3:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                var3 = !var2;
                var2 = !var3;
                if(var3) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var3 = _closure1_slot4;
                var5 = var3.NativePermissionManager;
                var3 = var5.getNotificationAuthorizationStatus;
                var3 = var3.bind(var5)();
                SaveGenerator(address=75);
case 46:
                return var3;
case 23:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                if(var5) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var4 = _closure1_slot10;
                var4 = var4.AUTHORIZED;
                var2 = var3 !== var4;
                _fun0005_ip = 44; continue _fun0005;
case 47:
                return var3;
case 44:
                return var2;
case 43:
                return var1;
            }
        };
        return var1;
    };
    var5 = var11.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = function() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var10['shouldShowStep'] = var5;
    var9 = {};
    var5 = 'contact-sync';
    var9['key'] = var5;
    var5 = function* () {
        var1 = function* anon_0_() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0006_ip = 11; continue _fun0006 }
case 3:
                var4 = _closure1_slot5;
                var3 = var4.getLocalAccount;
                var2 = _closure1_slot7;
                var2 = var2.CONTACTS;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0006_ip = 49; continue _fun0006 }
case 4:
                var2 = var3.friendSync;
case 49:
                if(var2) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var4 = function shouldSkipContactSyncStep() {
                    var1 = undefined;
                    var4 = _closure1_slot14;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var3 = undefined;
                var3 = var4.bind(var3)();
                SaveGenerator(address=72);
case 52:
                return var3;
case 53:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                var2 = var3;
                if(!var4) { _fun0006_ip = 50; continue _fun0006 }
case 48:
                return var3;
case 50:
                var2 = !var2;
                return var2;
case 11:
                return var1;
            }
        };
        return var1;
    };
    var5 = var11.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = function() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var9['shouldShowStep'] = var5;
    var5 = new Array(5);
    var5[0] = var10;
    var5[1] = var9;
    var9 = {};
    var10 = 'discoverability';
    var9['key'] = var10;
    var10 = function shouldShowStep() {
        var1 = true;
        return var1;
    };
    var9['shouldShowStep'] = var10;
    var5[2] = var9;
    var5[3] = var8;
    var8 = {};
    var9 = 'accept-invite';
    var8['key'] = var9;
    var9 = 9;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.hasDeferredInvite;
    var8['shouldShowStep'] = var9;
    var9 = function transitionStep() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'DEFERRED_INVITE_SHOW';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var8['transitionStep'] = var9;
    var5[4] = var8;
    var _closure1_slot13 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/nuf/native/NewUserUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getKeyForOnboardingStep(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var1 = var2.key;
case 54:
            return var1;
        }
    };
    var3['getKeyForOnboardingStep'] = var5;
    var4 = function continueToNextStep(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg2;
            var _closure2_slot0 = var6;
            var3 = _closure1_slot13;
            var1 = arg1;
            var4 = var3[var1];
            var3 = null;
            var7 = var3 == var4;
            var1 = undefined;
            var5 = undefined;
            if(var7) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var5 = var4.key;
case 56:
            if(!(var3 !== var5)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            var4 = var6.navigate;
            var3 = {};
            var3 = var4.bind(var6)(var5, var3);
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.getState;
                    var6 = var2.bind(var3)();
                    var3 = var6.routes;
                    var4 = var3.length;
                    var2 = 2;
                    if(!(var2 === var4)) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                    var2 = 1;
                    var2 = var3[var2];
                    var7 = new Array(1);
                    var7[0] = var2;
                    var3 = _closure2_slot0;
                    var2 = var3.dispatch;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var5 = var1.CommonActions;
                    var4 = var5.reset;
                    var1 = {};
                    var9 = var1;
                    var8 = var6;
                    var6 = copyDataProperties(var9, var8);
                    var6 = 'routes';
                    var1[var6] = var7;
                    var7 = 0;
                    var6 = 'index';
                    var1[var6] = var7;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
case 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 500;
            var2 = var4.bind(var1)(var3, var2);
case 58:
            return var1;
        }
    };
    var3['continueToNextStep'] = var4;
    var3['getNextOnboardingStep'] = var2;
    return var1;
})();
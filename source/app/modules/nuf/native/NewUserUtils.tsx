// app/modules/nuf/native/NewUserUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 105; continue _fun0001 }
 7:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var2 = var5[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.checkContactPermissions;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=46);
 44:
                    return var2;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 102; continue _fun0001 }
 52:
                    var3 = _closure1_slot9;
                    var3 = var3.UNAUTHORIZED;
                    var3 = var2 === var3;
                    if(!var3) { _fun0001_ip = 99; continue _fun0001 }
 69:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.isIOS;
                    var3 = var4.bind(var5)();
 99:
                    return var3;
 102:
                    return var2;
 105:
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
 0:
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
            if(!var3) { _fun0002_ip = 140; continue _fun0002 }
 90:
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
 140:
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
 0:
                    StartGenerator();
                    var16 = arguments[0];
                    var5 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 377; continue _fun0003 }
 16:
                    var7 = undefined;
                    if(!(var16 === var7)) { _fun0003_ip = 24; continue _fun0003 }
 22:
                    var16 = false;
 24:
                    SaveGenerator(address=28);
 26:
                    return var7;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 374; continue _fun0003 }
 37:
                    var4 = _closure1_slot13;
                    var6 = var4[var5];
                    var14 = null;
                    var8 = var14 == var6;
                    var4 = undefined;
                    if(var8) { _fun0003_ip = 64; continue _fun0003 }
 59:
                    var4 = var6.key;
 64:
                    var8 = var14 != var4;
                    var6 = 'registration';
                    if(!var8) { _fun0003_ip = 78; continue _fun0003 }
 75:
                    var6 = var4;
 78:
                    var8 = arguments[2];
                    var4 = 1;
                    var4 = var8 + var4;
                    var8 = _closure1_slot13;
                    var8 = var8.length;
                    if(!(!(var4 >= var8))) { _fun0003_ip = 343; continue _fun0003 }
 104:
                    var8 = _closure1_slot13;
                    var9 = var8[var4];
                    var12 = var9.key;
                    var8 = var9.shouldShowStep;
                    var13 = var9.transitionStep;
                    var8 = var8.bind(var7)();
                    SaveGenerator(address=137);
 135:
                    return var8;
 137:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0003_ip = 340; continue _fun0003 }
 146:
                    if(var8) { _fun0003_ip = 182; continue _fun0003 }
 149:
                    var9 = _closure1_slot16;
                    var10 = var9.bind(var7)(var16, var5, var4);
                    SaveGenerator(address=164);
 162:
                    return var10;
 164:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=8);
                    var11 = var9;
                    var9 = var10;
                    if(!var11) { _fun0003_ip = 337; continue _fun0003 }
 179:
                    return var10;
 182:
                    var11 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 12;
                    var10 = var15[var10];
                    var15 = var11.bind(var7)(var10);
                    var11 = var15.trackNUFStep;
                    var10 = {};
                    var10['skip'] = var16;
                    var10 = var11.bind(var15)(var6, var12, var10);
                    if(!(var14 == var13)) { _fun0003_ip = 272; continue _fun0003 }
 226:
                    var10 = {};
                    var10['lastShownStepIndex'] = var4;
                    var10['onboardingStepIndex'] = var4;
                    var11 = _closure1_slot13;
                    var15 = var11[var4];
                    var16 = var14 == var15;
                    var11 = undefined;
                    if(var16) { _fun0003_ip = 261; continue _fun0003 }
 255:
                    var11 = var15.transitionStep;
 261:
                    var11 = var14 == var11;
                    var10['continueNavigation'] = var11;
                    _fun0003_ip = 334; continue _fun0003;
 272:
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
 334:
                    var9 = var10;
 337:
                    return var9;
 340:
                    return var8;
 343:
                    var3 = _closure1_slot15;
                    var3 = var3.bind(var7)(var6);
                    var3 = {};
                    var3['lastShownStepIndex'] = var5;
                    var3['onboardingStepIndex'] = var4;
                    var4 = false;
                    var3['continueNavigation'] = var4;
                    return var3;
 374:
                    return var2;
 377:
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
 0:
            var2 = _closure1_slot6;
            var1 = var2.getCurrentUser;
            var3 = var1.bind(var2)();
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0004_ip = 33; continue _fun0004 }
 27:
            var1 = var3.avatar;
 33:
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
 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0005_ip = 103; continue _fun0005 }
 7:
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
                if(var3) { _fun0005_ip = 100; continue _fun0005 }
 51:
                var3 = _closure1_slot4;
                var5 = var3.NativePermissionManager;
                var3 = var5.getNotificationAuthorizationStatus;
                var3 = var3.bind(var5)();
                SaveGenerator(address=75);
 73:
                return var3;
 75:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                if(var5) { _fun0005_ip = 97; continue _fun0005 }
 81:
                var4 = _closure1_slot10;
                var4 = var4.AUTHORIZED;
                var2 = var3 !== var4;
                _fun0005_ip = 100; continue _fun0005;
 97:
                return var3;
 100:
                return var2;
 103:
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
 0:
                StartGenerator();
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                if(var2) { _fun0006_ip = 90; continue _fun0006 }
 7:
                var4 = _closure1_slot5;
                var3 = var4.getLocalAccount;
                var2 = _closure1_slot7;
                var2 = var2.CONTACTS;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0006_ip = 50; continue _fun0006 }
 44:
                var2 = var3.friendSync;
 50:
                if(var2) { _fun0006_ip = 84; continue _fun0006 }
 53:
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
 70:
                return var3;
 72:
                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                var2 = var3;
                if(!var4) { _fun0006_ip = 84; continue _fun0006 }
 81:
                return var3;
 84:
                var2 = !var2;
                return var2;
 90:
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
 0:
            var2 = _closure1_slot13;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0007_ip = 30; continue _fun0007 }
 25:
            var1 = var2.key;
 30:
            return var1;
        }
    };
    var3['getKeyForOnboardingStep'] = var5;
    var4 = function continueToNextStep(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var6 = arg2;
            var _closure2_slot0 = var6;
            var3 = _closure1_slot13;
            var1 = arg1;
            var4 = var3[var1];
            var3 = null;
            var7 = var3 == var4;
            var1 = undefined;
            var5 = undefined;
            if(var7) { _fun0008_ip = 41; continue _fun0008 }
 36:
            var5 = var4.key;
 41:
            if(!(var3 !== var5)) { _fun0008_ip = 86; continue _fun0008 }
 45:
            var4 = var6.navigate;
            var3 = {};
            var3 = var4.bind(var6)(var5, var3);
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = var3.getState;
                    var6 = var2.bind(var3)();
                    var3 = var6.routes;
                    var4 = var3.length;
                    var2 = 2;
                    if(!(var2 === var4)) { _fun0009_ip = 138; continue _fun0009 }
 35:
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
 138:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 500;
            var2 = var4.bind(var1)(var3, var2);
 86:
            return var1;
        }
    };
    var3['continueToNextStep'] = var4;
    var3['getNextOnboardingStep'] = var2;
    return var1;
})();
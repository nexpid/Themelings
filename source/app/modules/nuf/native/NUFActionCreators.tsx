// app/modules/nuf/native/NUFActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _startContactSyncForDiscoverability() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 260; continue _fun0001 }
 13:
                    var4 = _closure1_slot9;
                    var2 = var4.getCurrentUser;
                    var6 = var2.bind(var4)();
                    var5 = null;
                    var7 = var5 == var6;
                    var4 = undefined;
                    var2 = undefined;
                    if(var7) { _fun0001_ip = 48; continue _fun0001 }
 42:
                    var2 = var6.phone;
 48:
                    var9 = _closure1_slot8;
                    var7 = var9.getLocalAccount;
                    var6 = _closure1_slot12;
                    var6 = var6.CONTACTS;
                    var10 = var7.bind(var9)(var6);
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var6 = 17;
                    var7 = var7[var6];
                    var9 = var9.bind(var4)(var7);
                    var7 = var9.isContactSyncEnabled;
                    var9 = var7.bind(var9)(var10);
                    if(!(var5 != var2)) { _fun0001_ip = 224; continue _fun0001 }
 108:
                    var2 = _closure1_slot6;
                    var2 = var2.bind(var4)(var8);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 18;
                    var2 = var7[var2];
                    var7 = var5.bind(var4)(var2);
                    var5 = var7.updateContactSyncEnabled;
                    var2 = {};
                    var2['enabled'] = var9;
                    var2['name'] = var8;
                    var2 = var5.bind(var7)(var2);
                    SaveGenerator(address=162);
 160:
                    return var2;
 162:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 221; continue _fun0001 }
 168:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var7 = var5.bind(var4)(var3);
                    var6 = var7.uploadContacts;
                    var5 = '[]';
                    var3 = true;
                    var3 = var6.bind(var7)(var5, var3);
                    SaveGenerator(address=209);
 207:
                    return var3;
 209:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 218; continue _fun0001 }
 215:
                    return var4;
 218:
                    return var3;
 221:
                    return var2;
 224:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var12 = 'Cannot start contact sync without a phone number';
                    var13 = var3;
                    var2 = new var13[var4](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 260:
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.setAllowEmail;
    var _closure1_slot4 = var8;
    var8 = var4.setAllowSync;
    var _closure1_slot5 = var8;
    var8 = var4.setName;
    var _closure1_slot6 = var8;
    var4 = var4.useContactSyncModalStore;
    var _closure1_slot7 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NUF_DISCOVERABILITY_MODAL_KEY;
    var _closure1_slot10 = var7;
    var4 = var4.NUF_IN_APP_EDUCATION_KEY;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IN_APP_GUILD_TEMPLATES_MODAL_KEY;
    var _closure1_slot13 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/NUFActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ONBOARDING_START';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['startOnboarding'] = var4;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var6 = var2.skip;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 17; continue _fun0002 }
 15:
            var6 = false;
 17:
            var5 = var2.skipAttempt;
            if(!(var5 === var1)) { _fun0002_ip = 29; continue _fun0002 }
 27:
            var5 = false;
 29:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'ONBOARDING_STEP';
            var2['type'] = var7;
            var2['skip'] = var6;
            var2['skipAttempt'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['nextOnboardingStep'] = var4;
    var4 = function previousOnboardingStep() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {'type': 'ONBOARDING_STEP', 'back': true};
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['previousOnboardingStep'] = var4;
    var4 = function transitionToNUFGuildTemplatesModal(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 8;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.pushLazy;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 91; continue _fun0003 }
 7:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 10;
                    var3 = var2[var3];
                    var5 = undefined;
                    var4 = var4.bind(var5)(var3);
                    var3 = 9;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var4.bind(var5)(var3, var2);
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 88; continue _fun0003 }
 60:
                    var3 = var2.default;
                    var4 = {};
                    var5 = _closure2_slot0;
                    var4['animation'] = var5;
                    var3['modalConfig'] = var4;
                    return var3;
 88:
                    return var2;
 91:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var1)(var3);
        var3 = _closure1_slot13;
        var2 = {};
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var3['transitionToNUFGuildTemplatesModal'] = var4;
    var4 = function transitionToHubEmailConnectionModal(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0004_ip = 11; continue _fun0004 }
 9:
            var2 = false;
 11:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 11;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.open;
            var3 = {};
            var6 = function onCloseExtra(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    if(var2) { _fun0005_ip = 55; continue _fun0005 }
 9:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'ONBOARDING_STEP';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
                    _fun0005_ip = 87; continue _fun0005;
 55:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.setNewUserFlowCompleted;
                    var1 = var1.bind(var2)();
 87:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['onCloseExtra'] = var6;
            var3['displayStudentPrompt'] = var2;
            var2 = arg1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['transitionToHubEmailConnectionModal'] = var4;
    var4 = function openDiscoverabilityModal() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var3);
        var5 = var6.pushLazy;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 116; continue _fun0006 }
 7:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 10;
                    var3 = var2[var3];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var3);
                    var3 = 13;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var4.bind(var7)(var3, var2);
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 113; continue _fun0006 }
 60:
                    var3 = var2.default;
                    var4 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 14;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.ModalAnimation;
                    var5 = var5.SLIDE_IN_OUT;
                    var4['animation'] = var5;
                    var3['modalConfig'] = var4;
                    return var3;
 113:
                    return var2;
 116:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var1)(var3);
        var3 = _closure1_slot10;
        var2 = {};
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var3['openDiscoverabilityModal'] = var4;
    var4 = function openInAppEducationActionSheet() {
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 15;
        var4 = var3[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var7 = _closure1_slot0;
        var4 = 10;
        var4 = var3[var4];
        var7 = var7.bind(var1)(var4);
        var4 = 16;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var7.bind(var1)(var4, var3);
        var3 = _closure1_slot11;
        var2 = {};
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['openInAppEducationActionSheet'] = var4;
    var4 = function closeDiscoverabilityModal(arg1) {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 8;
        var5 = var4[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var5);
        var5 = var6.popWithKey;
        var2 = _closure1_slot10;
        var2 = var5.bind(var6)(var2);
        var2 = 7;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ONBOARDING_STEP';
        var2['type'] = var5;
        var5 = arg1;
        var2['skip'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['closeDiscoverabilityModal'] = var4;
    var4 = function startContactSyncForDiscoverability() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['startContactSyncForDiscoverability'] = var4;
    var2 = function toggleDiscoverabilityForUser() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = _closure1_slot9;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var5 = null;
            var6 = var5 == var2;
            var1 = undefined;
            var4 = undefined;
            if(var6) { _fun0007_ip = 35; continue _fun0007 }
 29:
            var4 = var2.phone;
 35:
            var6 = _closure1_slot7;
            var2 = var6.getState;
            var6 = var2.bind(var6)();
            var2 = var6.allowPhone;
            var6 = var6.allowEmail;
            if(var2) { _fun0007_ip = 67; continue _fun0007 }
 64:
            var2 = var6;
 67:
            if(!(var5 == var4)) { _fun0007_ip = 100; continue _fun0007 }
 71:
            var5 = _closure1_slot5;
            var4 = false;
            var4 = var5.bind(var1)(var4);
            if(var2) { _fun0007_ip = 98; continue _fun0007 }
 85:
            var5 = _closure1_slot4;
            var4 = true;
            var4 = var5.bind(var1)(var4);
            _fun0007_ip = 112; continue _fun0007;
 98:
            _fun0007_ip = 112; continue _fun0007;
 100:
            var3 = _closure1_slot5;
            var2 = !var2;
            var2 = var3.bind(var1)(var2);
 112:
            return var1;
        }
    };
    var3['toggleDiscoverabilityForUser'] = var2;
    return var1;
})();
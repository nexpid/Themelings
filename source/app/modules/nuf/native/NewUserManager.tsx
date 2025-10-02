// app/modules/nuf/native/NewUserManager.tsx
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NewUserTypes;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlatformTypes;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HUBS_IN_ONBOARDING_COUNTRIES;
    var _closure1_slot15 = var4;
    var9 = {};
    var4 = 'Registration';
    var9['REGISTRATION'] = var4;
    var4 = 'Add Avatar';
    var9['ADD_AVATAR'] = var4;
    var4 = 'Contact Sync';
    var9['CONTACT_SYNC'] = var4;
    var4 = 'Guild Template';
    var9['GUILD_TEMPLATE'] = var4;
    var4 = 'Student Hub';
    var9['STUDENT_HUB'] = var4;
    var4 = 'New User Intent';
    var9['NEW_USER_INTENT'] = var4;
    var4 = 'Accept Invite';
    var9['ACCEPT_INVITE'] = var4;
    var4 = 'Discoverability';
    var9['DISCOVERABILITY'] = var4;
    var4 = 'In App Education';
    var9['IN_APP_EDUCATION'] = var4;
    var10 = {};
    var4 = var9.ADD_AVATAR;
    var10['key'] = var4;
    var4 = function shouldShowStep() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot11;
            var1 = var2.getCurrentUser;
            var3 = var1.bind(var2)();
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3.avatar;
case 6:
            var1 = var2 == var1;
            return var1;
        }
    };
    var10['shouldShowStep'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.openAddAvatarModal;
    var10['transitionToStep'] = var4;
    var8 = {};
    var4 = var9.CONTACT_SYNC;
    var8['key'] = var4;
    var4 = function shouldShowStep() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot10;
            var3 = var4.getLocalAccount;
            var1 = _closure1_slot14;
            var1 = var1.CONTACTS;
            var4 = var3.bind(var4)(var1);
            var3 = null;
            var1 = var3 == var4;
            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = var4.friendSync;
            var1 = !var4;
case 8:
            if(!var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var4 = _closure1_slot11;
            var2 = var4.getCurrentUser;
            var4 = var2.bind(var4)();
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = var4.phone;
case 12:
            var1 = var3 != var2;
case 10:
            return var1;
        }
    };
    var8['shouldShowStep'] = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.openContactSyncModalOnboarding;
    var8['transitionToStep'] = var4;
    var4 = new Array(7);
    var4[0] = var10;
    var10 = {};
    var11 = var9.DISCOVERABILITY;
    var10['key'] = var11;
    var11 = function shouldShowStep() {
        var3 = _closure1_slot10;
        var2 = var3.getLocalAccount;
        var1 = _closure1_slot14;
        var1 = var1.CONTACTS;
        var2 = var2.bind(var3)(var1);
        var1 = null;
        var1 = var1 == var2;
        return var1;
    };
    var10['shouldShowStep'] = var11;
    var11 = 15;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.openDiscoverabilityModal;
    var10['transitionToStep'] = var11;
    var4[1] = var10;
    var4[2] = var8;
    var8 = {};
    var10 = var9.STUDENT_HUB;
    var8['key'] = var10;
    var10 = function shouldShowStep() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot12;
            var2 = var3.getType;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot13;
            var2 = var2.ORGANIC_REGISTERED;
            if(!(var3 === var2)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = _closure1_slot9;
            var2 = var3.getCountryCode;
            var4 = var2.bind(var3)();
            var3 = _closure1_slot15;
            var2 = var3.includes;
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 16:
            var1 = var4.alpha2;
case 13:
            var1 = var2.bind(var3)(var1);
            return var1;
case 14:
            var1 = false;
            return var1;
        }
    };
    var8['shouldShowStep'] = var10;
    var10 = function transitionToStep() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 15;
        var2 = var6[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.transitionToHubEmailConnectionModal;
        var2 = 16;
        var2 = var6[var2];
        var2 = var3.bind(var1)(var2);
        var2 = var2.ModalAnimation;
        var3 = var2.SLIDE_IN;
        var2 = true;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var8['transitionToStep'] = var10;
    var4[3] = var8;
    var8 = {};
    var10 = var9.GUILD_TEMPLATE;
    var8['key'] = var10;
    var10 = function shouldShowStep() {
        var3 = _closure1_slot12;
        var2 = var3.getType;
        var2 = var2.bind(var3)();
        var1 = _closure1_slot13;
        var1 = var1.ORGANIC_REGISTERED;
        var1 = var2 === var1;
        return var1;
    };
    var8['shouldShowStep'] = var10;
    var10 = function transitionToStep() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 15;
        var1 = var6[var1];
        var4 = undefined;
        var3 = var5.bind(var4)(var1);
        var2 = var3.transitionToNUFGuildTemplatesModal;
        var1 = 16;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.ModalAnimation;
        var1 = var1.SLIDE_IN;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8['transitionToStep'] = var10;
    var4[4] = var8;
    var8 = {};
    var10 = var9.ACCEPT_INVITE;
    var8['key'] = var10;
    var10 = 17;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.hasDeferredInvite;
    var8['shouldShowStep'] = var10;
    var10 = function transitionToStep() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 18;
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
    var8['transitionToStep'] = var10;
    var4[5] = var8;
    var8 = {};
    var9 = var9.IN_APP_EDUCATION;
    var8['key'] = var9;
    var9 = function shouldShowStep() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 19;
        var5 = var4[var1];
        var2 = undefined;
        var5 = var3.bind(var2)(var5);
        var7 = var5.IOSInAppEducationExperiment;
        var6 = var7.trackExposure;
        var5 = {};
        var8 = 'NUF';
        var5['location'] = var8;
        var5 = var6.bind(var7)(var5);
        var1 = var4[var1];
        var1 = var3.bind(var2)(var1);
        var4 = var1.IOSInAppEducationExperiment;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = '900c10_3';
        var2['location'] = var1;
        var1 = {};
        var5 = false;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.enabled;
        return var1;
    };
    var8['shouldShowStep'] = var9;
    var9 = function transitionToStep() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.openInAppEducationActionSheet;
        var2 = var2.bind(var3)();
        return var1;
    };
    var8['transitionToStep'] = var9;
    var4[6] = var8;
    var _closure1_slot16 = var4;
    var4 = 22;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function NewUserManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot5;
                var4 = _closure2_slot0;
                var3 = undefined;
                var8 = var8.bind(var3)(var5, var4);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 19; continue _fun0005;
case 17:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 19:
                var1 = var4.bind(var3)(var5, var1);
                var _closure3_slot0 = var1;
                var4 = -1;
                var1['_onboardingStepIndex'] = var4;
                var4 = null;
                var1['_lastStep'] = var4;
                var4 = {};
                var5 = function ONBOARDING_STEP(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleOnboardingStep;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var4['ONBOARDING_STEP'] = var5;
                var1['actions'] = var4;
                var2 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                StartGenerator();
                                var2 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                                var17 = var2.skip;
                                var4 = undefined;
                                if(!(var17 === var4)) { _fun0006_ip = 7; continue _fun0006 }
case 22:
                                var17 = false;
case 7:
                                var5 = var2.skipAttempt;
                                if(!(var5 === var4)) { _fun0006_ip = 23; continue _fun0006 }
case 9:
                                var5 = false;
case 23:
                                var6 = var2.back;
                                if(!(var6 === var4)) { _fun0006_ip = 24; continue _fun0006 }
case 11:
                                var6 = false;
case 24:
                                SaveGenerator(address=55);
case 25:
                                return var4;
case 26:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                                var7 = _closure3_slot0;
                                var8 = var7._onboardingStepIndex;
                                var7 = _closure3_slot0;
                                if(var6) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                                var9 = var7._onboardingStepIndex;
                                var6 = 1;
                                var6 = var9 + var6;
                                var7['_onboardingStepIndex'] = var6;
                                var10 = var7._onboardingStepIndex;
                                var6 = _closure1_slot16;
                                var6 = var6.length;
                                if(!(!(var10 >= var6))) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                                var10 = _closure1_slot16;
                                var6 = _closure3_slot0;
                                var6 = var6._onboardingStepIndex;
                                var10 = var10[var6];
                                var16 = var10.key;
                                var6 = var10.shouldShowStep;
                                var10 = var10.transitionToStep;
                                var6 = var6.bind(var4)();
                                SaveGenerator(address=174);
case 33:
                                return var6;
case 34:
                                ResumeGenerator(result_out_reg=5, return_bool_out_reg=10);
                                if(var11) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                                if(var6) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                                var13 = _closure3_slot0;
                                var12 = var13.handleOnboardingStep;
                                var11 = {};
                                var11['skip'] = var17;
                                var11 = var12.bind(var13)(var11);
                                _fun0006_ip = 39; continue _fun0006;
case 37:
                                var12 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var11 = 20;
                                var11 = var13[var11];
                                var15 = var12.bind(var4)(var11);
                                var14 = var15.trackNUFStep;
                                var12 = _closure3_slot0;
                                var13 = var12._lastStep;
                                var11 = {};
                                var11['skip'] = var17;
                                var11['skip_attempt'] = var5;
                                var11 = var14.bind(var15)(var13, var16, var11);
                                var11 = _closure1_slot16;
                                var14 = var11[var8];
                                var11 = null;
                                var15 = var11 == var14;
                                var13 = undefined;
                                if(var15) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                                var13 = var14.key;
case 40:
                                var14 = var11 != var13;
                                var11 = null;
                                if(!var14) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                                var11 = var13;
case 42:
                                var12['_lastStep'] = var11;
                                var10 = var10.bind(var4)();
case 39:
                                return var4;
case 35:
                                return var6;
case 31:
                                var6 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var10 = 20;
                                var10 = var9[var10];
                                var13 = var6.bind(var4)(var10);
                                var12 = var13.trackNUFStep;
                                var10 = _closure3_slot0;
                                var11 = var10._lastStep;
                                var10 = {};
                                var10['skip_attempt'] = var5;
                                var5 = 'NUF Complete';
                                var5 = var12.bind(var13)(var11, var5, var10);
                                var5 = 21;
                                var5 = var9[var5];
                                var6 = var6.bind(var4)(var5);
                                var5 = var6.setNewUserFlowCompleted;
                                var5 = var5.bind(var6)();
                                var5 = undefined;
                                return var5;
case 29:
                                var5 = _closure1_slot16;
                                var9 = var5[var8];
                                var5 = null;
                                var10 = var5 == var9;
                                var8 = undefined;
                                if(var10) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                                var8 = var9.key;
case 44:
                                var9 = var5 != var8;
                                var5 = null;
                                if(!var9) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                                var5 = var8;
case 46:
                                var7['_lastStep'] = var5;
                                var5 = _closure3_slot0;
                                var7 = var5._onboardingStepIndex;
                                var3 = 1;
                                var3 = var7 - var3;
                                var5['_onboardingStepIndex'] = var3;
                                var7 = _closure1_slot16;
                                var3 = var5._onboardingStepIndex;
                                var3 = var7[var3];
                                var9 = var3.key;
                                var3 = var3.transitionToStep;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var6 = 20;
                                var6 = var8[var6];
                                var8 = var7.bind(var4)(var6);
                                var7 = var8.trackNUFStep;
                                var6 = var5._lastStep;
                                var5 = {};
                                var10 = true;
                                var5['back'] = var10;
                                var5 = var7.bind(var8)(var6, var9, var5);
                                var3 = var3.bind(var4)();
                                var3 = undefined;
                                return var3;
case 27:
                                return var2;
case 20:
                                return var1;
                            }
                        };
                        var2 = var1.next;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure4_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var2 = var2.bind(var3)();
                var1['handleOnboardingStep'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var15 = var4;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf/native/NewUserManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
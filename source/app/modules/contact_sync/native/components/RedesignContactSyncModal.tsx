// app/modules/contact_sync/native/components/RedesignContactSyncModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function headerTitle() {
        var1 = null;
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function headerLeft() {
        var1 = null;
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function OnboardingTrailingLanding() {
        var2 = _closure1_slot19;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot16;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 15;
        var1 = var9[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
        var5 = var5.landingTrailing;
        var1['style'] = var5;
        var5 = 16;
        var7 = var9[var5];
        var7 = var6.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.format;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var5 = var5.t;
        var6 = var5.cGQmND;
        var5 = {};
        var9 = function learnMoreHook(arg1, arg2) {
            var5 = _closure1_slot16;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var3 = var1.Text;
            var2 = {'onPress': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
            var1 = 17;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.handleOpenLearnMoreLink;
            var2['onPress'] = var1;
            var1 = arg1;
            var2['children'] = var1;
            var1 = arg2;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var5['learnMoreHook'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function OnboardingTrailing(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isOnboarding;
            var7 = var2.discoverabilityEnabled;
            var6 = var2.setDiscoverabilityEnabled;
            var5 = _closure1_slot16;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 18;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var1['discoverabilityEnabled'] = var7;
            var1['onValueChanged'] = var6;
            var1 = var5.bind(var4)(var3, var1);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = _closure1_slot22;
            var3 = undefined;
            var2 = {};
            var1 = var5.bind(var3)(var4, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function ContactSyncLandingScreen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.openSettingsSheet;
            var _closure2_slot0 = var1;
            var16 = var2.loading;
            var14 = var2.setLoading;
            var _closure2_slot1 = var14;
            var6 = var2.onComplete;
            var _closure2_slot2 = var6;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var2 = _closure1_slot19;
            var9 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 19;
            var2 = var3[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var21 = var2.bottom;
            var5 = _closure1_slot0;
            var2 = 20;
            var2 = var3[var2];
            var7 = var5.bind(var4)(var2);
            var2 = var7.useNavigation;
            var18 = var2.bind(var7)();
            var _closure2_slot3 = var18;
            var2 = 21;
            var3 = var3[var2];
            var8 = var5.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var7.bind(var8)(var5, var3);
            var _closure2_slot4 = var5;
            var20 = null;
            var7 = var20 == var5;
            var3 = undefined;
            if(var7) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var3 = var5.phone;
case 5:
            _closure2_slot5 = var3;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)();
            var10 = var7.permissionState;
            var12 = var7.error;
            var11 = _closure1_slot5;
            var7 = var11.useState;
            var8 = true;
            var15 = var7.bind(var11)(var8);
            var11 = _closure1_slot4;
            var7 = 2;
            var11 = var11.bind(var4)(var15, var7);
            var19 = 0;
            var24 = var11[var19];
            _closure2_slot6 = var24;
            var7 = 1;
            var23 = var11[var7];
            var7 = _closure1_slot11;
            var15 = var7.bind(var4)();
            _closure2_slot7 = var15;
            var11 = _closure1_slot5;
            var7 = var11.useCallback;
            var22 = var20 == var5;
            var20 = undefined;
            if(var22) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var20 = var5.email;
case 7:
            var5 = new Array(6);
            var5[0] = var20;
            var5[1] = var24;
            var5[2] = var15;
            var5[3] = var18;
            var5[4] = var14;
            var5[5] = var3;
            var3 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var2 = global;
                var4 = var2.setTimeout;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var3 = _closure2_slot7;
                            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 22;
                            var3 = var5[var3];
                            var7 = undefined;
                            var5 = var4.bind(var7)(var3);
                            var4 = var5.updateDiscoverability;
                            var3 = {};
                            var6 = _closure2_slot6;
                            var8 = !var6;
                            var6 = !var8;
                            if(var8) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var9 = _closure2_slot4;
                            var8 = null;
                            var9 = var8 == var9;
                            var7 = undefined;
                            if(var9) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var9 = _closure2_slot4;
                            var7 = var9.email;
case 15:
                            var6 = var8 != var7;
case 13:
                            var3['email'] = var6;
                            var6 = _closure2_slot6;
                            var7 = !var6;
                            var6 = !var7;
                            if(var7) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                            var8 = _closure2_slot5;
                            var7 = null;
                            var6 = var7 != var8;
case 17:
                            var3['phone'] = var6;
                            var3 = var4.bind(var5)(var3);
                            SaveGenerator(address=140);
case 19:
                            return var3;
case 20:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(!var4) { _fun0003_ip = 11; continue _fun0003 }
case 21:
                            return var3;
case 11:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 14;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.startContactSync;
                            var2 = _closure2_slot3;
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=193);
case 22:
                            return var2;
case 23:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                            var4 = global;
                            var6 = var4.setTimeout;
                            var5 = function() {
                                var3 = _closure2_slot1;
                                var2 = undefined;
                                var1 = false;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var4 = 2000;
                            var4 = var6.bind(var3)(var5, var4);
                            return var3;
case 24:
                            return var2;
case 9:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var3.bind(var1)(var2);
                var2 = 25;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var18 = var7.bind(var11)(var3, var5);
            _closure2_slot8 = var18;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var2];
            var14 = var3.bind(var4)(var2);
            var7 = var14.useStateFromStores;
            var2 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var2;
            var3 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = new Array(0);
            var2 = var7.bind(var14)(var5, var3, var2);
            _closure2_slot9 = var2;
            var7 = _closure1_slot5;
            var5 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 23;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var5 = _closure2_slot9;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 24;
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.AppStates;
                    var4 = var4.ACTIVE;
                    var3 = var5 === var4;
case 26:
                    if(!var3) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.refreshContactSyncPermissionStatus;
                    var2 = var2.bind(var3)();
case 28:
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot5;
            var3 = var5.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 30:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 25;
                    var3 = var1[var3];
                    var6 = undefined;
                    var8 = var4.bind(var6)(var3);
                    var7 = var8.track;
                    var3 = _closure1_slot14;
                    var5 = var3.OPEN_POPOUT;
                    var3 = {};
                    var10 = 'Contact Sync';
                    var3['type'] = var10;
                    var9 = {};
                    var9['page'] = var10;
                    var3['location'] = var9;
                    var3 = var7.bind(var8)(var5, var3);
                    var3 = 26;
                    var3 = var1[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.openLazy;
                    var5 = _closure1_slot0;
                    var2 = 28;
                    var2 = var1[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = 27;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = 'Contact Sync Info Settings';
                    var1 = var3.bind(var4)(var2, var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 20; continue _fun0006 }
case 10:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 29;
                        var2 = var3[var2];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.requestPermission;
                        var2 = _closure1_slot15;
                        var2 = var2.CONTACTS;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address=60);
case 31:
                        return var2;
case 32:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                        if(var2) { _fun0006_ip = 35; continue _fun0006 }
case 14:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 14;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.closeContactSyncModal;
                        var4 = {};
                        var7 = _closure2_slot2;
                        var4['onComplete'] = var7;
                        var7 = true;
                        var4['skip'] = var7;
                        var4 = var5.bind(var6)(var4);
                        _fun0006_ip = 36; continue _fun0006;
case 35:
                        var4 = _closure2_slot8;
                        var4 = var4.bind(var3)();
case 36:
                        return var3;
case 33:
                        return var2;
case 20:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(2);
            var1[0] = var18;
            var1[1] = var6;
            var14 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot18;
            var2 = _closure1_slot17;
            var1 = {};
            var7 = _closure1_slot16;
            var6 = _closure1_slot1;
            var5 = 30;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['absolute'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot6;
            var6 = {};
            var11 = var9.container;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var22 = var21 > var19;
            var19 = 16;
            var20 = var19;
            if(!var22) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var20 = var21;
case 37:
            var11['paddingBottom'] = var20;
            var9[1] = var11;
            var6['style'] = var9;
            if(var15) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var9 = _closure1_slot12;
            var9 = var9.AUTHORIZED;
            if(!(var10 === var9)) { _fun0002_ip = 39; continue _fun0002 }
case 41:
            var11 = _closure1_slot16;
            var10 = _closure1_slot1;
            var20 = _closure1_slot2;
            var9 = 33;
            var9 = var20[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['onNext'] = var18;
            var9['error'] = var12;
            var9['loading'] = var16;
            var9['discoverabilityEnabled'] = var24;
            var9['setDiscoverabilityEnabled'] = var23;
            var9 = var11.bind(var4)(var10, var9);
            _fun0002_ip = 42; continue _fun0002;
case 39:
            var12 = _closure1_slot16;
            var18 = _closure1_slot1;
            var20 = _closure1_slot2;
            var10 = 31;
            var10 = var20[var10];
            var11 = var18.bind(var4)(var10);
            var10 = {};
            var25 = _closure1_slot0;
            var21 = var20[var19];
            var21 = var25.bind(var4)(var21);
            var26 = var21.intl;
            var22 = var26.string;
            var21 = var20[var19];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.DjcfHh;
            var21 = var22.bind(var26)(var21);
            var10['title'] = var21;
            var21 = var20[var19];
            var21 = var25.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var19 = var20[var19];
            var19 = var25.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.kq+Cd3;
            var19 = var21.bind(var22)(var19);
            var10['subtitle'] = var19;
            var22 = _closure1_slot16;
            var21 = _closure1_slot23;
            var19 = {};
            var19['isOnboarding'] = var15;
            var19['discoverabilityEnabled'] = var24;
            var19['setDiscoverabilityEnabled'] = var23;
            var19 = var22.bind(var4)(var21, var19);
            var10['trailing'] = var19;
            var19 = _closure1_slot16;
            var17 = 32;
            var17 = var20[var17];
            var18 = var18.bind(var4)(var17);
            var17 = {};
            var17 = var19.bind(var4)(var18, var17);
            var10['header'] = var17;
            var10['loading'] = var16;
            var10['showSkip'] = var15;
            var10['onAllow'] = var14;
            var13 = function onDontAllow() {
                var5 = _closure2_slot2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.closeContactSyncModal;
                var2 = {};
                var2['onComplete'] = var5;
                var5 = true;
                var2['skip'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10['onDontAllow'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 42:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function ContactSyncNameInputScreen(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var3 = var2.navigateToLandingPage;
            var2 = _closure1_slot19;
            var4 = undefined;
            var7 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 20;
            var2 = var13[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useNavigation;
            var15 = var2.bind(var6)();
            var _closure2_slot0 = var15;
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var2 = false;
            var8 = var6.bind(var8)(var2);
            var6 = _closure1_slot4;
            var2 = 2;
            var6 = var6.bind(var4)(var8, var2);
            var2 = 0;
            var8 = var6[var2];
            var _closure2_slot1 = var8;
            var2 = 1;
            var2 = var6[var2];
            var _closure2_slot2 = var2;
            var2 = _closure1_slot10;
            var2 = var2.bind(var4)();
            var11 = var2.name;
            var9 = var2.isNameFromContactBook;
            var10 = var2.error;
            var6 = _closure1_slot1;
            var2 = 34;
            var2 = var13[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)(var15, var3);
            var14 = _closure1_slot5;
            var12 = var14.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 43; continue _fun0008 }
case 44:
                            var5 = _closure2_slot2;
                            var3 = undefined;
                            var4 = true;
                            var4 = var5.bind(var3)(var4);
                            var6 = _closure1_slot9;
                            var5 = arg1;
                            var5 = var6.bind(var3)(var5);
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 14;
                            var4 = var6[var4];
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.startContactSync;
                            var2 = _closure2_slot0;
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=77);
case 45:
                            return var2;
case 46:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0008_ip = 47; continue _fun0008 }
case 29:
                            var4 = global;
                            var6 = var4.setTimeout;
                            var5 = function() {
                                var3 = _closure2_slot2;
                                var2 = undefined;
                                var1 = false;
                                var1 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var4 = 2000;
                            var4 = var6.bind(var3)(var5, var4);
                            return var3;
case 47:
                            return var2;
case 43:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var2.bind(var4)();
            var2 = new Array(1);
            var2[0] = var15;
            var12 = var12.bind(var14)(var3, var2);
            var _closure2_slot3 = var12;
            var14 = _closure1_slot5;
            var3 = var14.useLayoutEffect;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var12;
            var2[2] = var15;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight() {
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 35;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = true;
                    var1['insideNavigator'] = var5;
                    var5 = _closure2_slot1;
                    var1['disabled'] = var5;
                    var5 = function onPress() {
                        var3 = _closure2_slot3;
                        var1 = undefined;
                        var2 = '';
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var14)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = var7.container;
            var1['style'] = var7;
            var7 = _closure1_slot16;
            var5 = 36;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['onNext'] = var12;
            var5['error'] = var10;
            var5['loading'] = var8;
            var8 = null;
            var13 = var8 != var11;
            var10 = '';
            var12 = var10;
            if(!var13) { _fun0007_ip = 7; continue _fun0007 }
case 48:
            var12 = var11;
case 7:
            var5['initialName'] = var12;
            var8 = var8 != var11;
            if(!var8) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var8 = var10 !== var11;
case 49:
            if(!var8) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var8 = var9;
case 51:
            var5['prefilledFromContactBook'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function ContactSyncSuggestionScreen(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var1 = var1.onComplete;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot19;
            var5 = undefined;
            var8 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 20;
            var3 = var9[var3];
            var7 = var4.bind(var5)(var3);
            var3 = var7.useNavigation;
            var10 = var3.bind(var7)();
            var _closure2_slot1 = var10;
            var3 = _closure1_slot10;
            var3 = var3.bind(var5)();
            var7 = var3.suggestions;
            var _closure2_slot2 = var7;
            var3 = 34;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useBackHandlerMinimizeApp;
            var3 = var3.bind(var4)();
            var11 = _closure1_slot5;
            var9 = var11.useCallback;
            var4 = new Array(2);
            var4[0] = var1;
            var3 = var7.length;
            var4[1] = var3;
            var3 = function(arg1, arg2) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.closeContactSyncModal;
                var2 = {};
                var6 = _closure2_slot0;
                var2['onComplete'] = var6;
                var6 = arg1;
                var2['skip'] = var6;
                var5 = _closure2_slot2;
                var5 = var5.length;
                var2['friendsFound'] = var5;
                var5 = arg2;
                var2['friendsAdded'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11 = var9.bind(var11)(var3, var4);
            var _closure2_slot3 = var11;
            var9 = _closure1_slot5;
            var4 = var9.useLayoutEffect;
            var3 = new Array(4);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var1;
            var1 = var7.length;
            var3[3] = var1;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight() {
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 35;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = true;
                    var1['insideNavigator'] = var5;
                    var5 = function onPress() {
                        var4 = _closure2_slot3;
                        var3 = undefined;
                        var2 = true;
                        var1 = 0;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var4.bind(var9)(var1, var3);
            var3 = var7.length;
            var1 = 0;
            if(!(!(var3 > var1))) { _fun0009_ip = 53; continue _fun0009 }
case 54:
            var4 = _closure1_slot16;
            var3 = _closure1_slot6;
            var1 = {};
            var8 = var8.container;
            var1['style'] = var8;
            var10 = _closure1_slot16;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 38;
            var8 = var11[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var8 = var10.bind(var5)(var9, var8);
            var1['children'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0009_ip = 55; continue _fun0009;
case 53:
            var4 = _closure1_slot16;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 37;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['friendSuggestions'] = var7;
            var6 = function onSubmit(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bulkAddFriendSuggestions;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2['onSubmit'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 55:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var4 = function ContactSyncModal(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var3 = var2.onComplete;
            var _closure2_slot0 = var3;
            var6 = var2.initialRoutes;
            var2 = var2.openSettingsSheet;
            var _closure2_slot1 = var2;
            var8 = _closure1_slot5;
            var7 = var8.useState;
            var4 = false;
            var9 = var7.bind(var8)(var4);
            var8 = _closure1_slot4;
            var4 = undefined;
            var7 = 2;
            var8 = var8.bind(var4)(var9, var7);
            var7 = 0;
            var11 = var8[var7];
            var _closure2_slot2 = var11;
            var7 = 1;
            var7 = var8[var7];
            var _closure2_slot3 = var7;
            var7 = _closure1_slot11;
            var10 = var7.bind(var4)();
            var _closure2_slot4 = var10;
            var12 = _closure1_slot5;
            var9 = var12.useEffect;
            var8 = new Array(1);
            var8[0] = var10;
            var7 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot4;
                    if(!var1) { _fun0011_ip = 56; continue _fun0011 }
case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.refreshContactSyncPermissionStatus;
                    var1 = var1.bind(var2)();
case 56:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var9.bind(var12)(var7, var8);
            var9 = _closure1_slot5;
            var8 = var9.useMemo;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0012_ip = 57; continue _fun0012 }
case 30:
                    var1 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    _fun0012_ip = 58; continue _fun0012;
case 57:
                    var1 = _closure2_slot0;
case 58:
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var3, var7);
            var _closure2_slot5 = var9;
            var8 = _closure1_slot5;
            var7 = var8.useMemo;
            var3 = new Array(4);
            var3[0] = var10;
            var3[1] = var11;
            var3[2] = var2;
            var3[3] = var9;
            var2 = function() {
                var3 = {};
                var2 = _closure2_slot4;
                var3['isOnboarding'] = var2;
                var2 = _closure2_slot2;
                var3['loading'] = var2;
                var2 = _closure2_slot3;
                var3['setLoading'] = var2;
                var2 = _closure2_slot1;
                var3['openSettingsSheet'] = var2;
                var1 = _closure2_slot5;
                var3['onComplete'] = var1;
                var2 = function getScreens(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var7 = var1.isOnboarding;
                        var2 = var1.loading;
                        var _closure4_slot0 = var2;
                        var2 = var1.setLoading;
                        var _closure4_slot1 = var2;
                        var2 = var1.openSettingsSheet;
                        var _closure4_slot2 = var2;
                        var2 = var1.onComplete;
                        var _closure4_slot3 = var2;
                        var1 = var1.navigateToLandingPage;
                        var _closure4_slot4 = var1;
                        var1 = {};
                        var3 = _closure1_slot13;
                        var5 = var3.WELCOME;
                        var3 = {};
                        var6 = true;
                        var3['ignoreKeyboard'] = var6;
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var11 = 39;
                        var8 = var9[var11];
                        var10 = undefined;
                        var8 = var12.bind(var10)(var8);
                        var8 = var8.ImpressionNames;
                        var8 = var8.CONTACT_SYNC_START;
                        var3['impressionName'] = var8;
                        var8 = {};
                        var9 = var9[var11];
                        var9 = var12.bind(var10)(var9);
                        var9 = var9.ImpressionGroups;
                        var9 = var9.CONTACT_SYNC_FLOW;
                        var8['impression_group'] = var9;
                        var3['impressionProperties'] = var8;
                        var3['fullscreen'] = var6;
                        var8 = _closure1_slot20;
                        var3['headerTitle'] = var8;
                        if(var7) { _fun0013_ip = 59; continue _fun0013 }
case 60:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 40;
                        var7 = var9[var7];
                        var9 = var8.bind(var10)(var7);
                        var8 = var9.getHeaderCloseButton;
                        var7 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.closeContactSyncModal;
                            var1 = {};
                            var4 = _closure4_slot3;
                            var1['onComplete'] = var4;
                            var4 = true;
                            var1['skip'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var7 = var8.bind(var9)(var7);
                        _fun0013_ip = 61; continue _fun0013;
case 59:
                        var7 = _closure1_slot21;
case 61:
                        var3['headerLeft'] = var7;
                        var7 = function render() {
                            var4 = _closure1_slot16;
                            var3 = _closure1_slot24;
                            var2 = {};
                            var5 = _closure4_slot3;
                            var2['onComplete'] = var5;
                            var5 = _closure4_slot2;
                            var2['openSettingsSheet'] = var5;
                            var5 = _closure4_slot0;
                            var2['loading'] = var5;
                            var1 = _closure4_slot1;
                            var2['setLoading'] = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var3['render'] = var7;
                        var1[var5] = var3;
                        var3 = _closure1_slot13;
                        var7 = var3.NAME_INPUT;
                        var3 = {};
                        var3['ignoreKeyboard'] = var6;
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = var8[var11];
                        var5 = var9.bind(var10)(var5);
                        var5 = var5.ImpressionNames;
                        var5 = var5.CONTACT_SYNC_INPUT_NAME;
                        var3['impressionName'] = var5;
                        var5 = {};
                        var12 = var8[var11];
                        var12 = var9.bind(var10)(var12);
                        var12 = var12.ImpressionGroups;
                        var12 = var12.CONTACT_SYNC_FLOW;
                        var5['impression_group'] = var12;
                        var3['impressionProperties'] = var5;
                        var3['fullscreen'] = var6;
                        var5 = _closure1_slot20;
                        var3['headerTitle'] = var5;
                        var12 = _closure1_slot21;
                        var3['headerLeft'] = var12;
                        var13 = function render() {
                            var4 = _closure1_slot16;
                            var3 = _closure1_slot25;
                            var2 = {};
                            var1 = _closure4_slot4;
                            var2['navigateToLandingPage'] = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var3['render'] = var13;
                        var1[var7] = var3;
                        var3 = _closure1_slot13;
                        var7 = var3.SUGGESTIONS;
                        var3 = {};
                        var3['ignoreKeyboard'] = var6;
                        var13 = var8[var11];
                        var13 = var9.bind(var10)(var13);
                        var13 = var13.ImpressionNames;
                        var13 = var13.CONTACT_SYNC_SUGGESTIONS;
                        var3['impressionName'] = var13;
                        var13 = {};
                        var14 = var8[var11];
                        var14 = var9.bind(var10)(var14);
                        var14 = var14.ImpressionGroups;
                        var14 = var14.CONTACT_SYNC_FLOW;
                        var13['impression_group'] = var14;
                        var3['impressionProperties'] = var13;
                        var3['fullscreen'] = var6;
                        var3['headerTitle'] = var5;
                        var3['headerLeft'] = var12;
                        var12 = function render() {
                            var4 = _closure1_slot16;
                            var3 = _closure1_slot26;
                            var2 = {};
                            var1 = _closure4_slot3;
                            var2['onComplete'] = var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var3['render'] = var12;
                        var1[var7] = var3;
                        var3 = _closure1_slot13;
                        var7 = var3.ADD_PHONE;
                        var3 = {};
                        var12 = var8[var11];
                        var12 = var9.bind(var10)(var12);
                        var12 = var12.ImpressionNames;
                        var12 = var12.USER_ADD_PHONE;
                        var3['impressionName'] = var12;
                        var12 = {};
                        var13 = var8[var11];
                        var13 = var9.bind(var10)(var13);
                        var13 = var13.ImpressionGroups;
                        var13 = var13.CONTACT_SYNC_FLOW;
                        var12['impression_group'] = var13;
                        var3['impressionProperties'] = var12;
                        var3['fullscreen'] = var6;
                        var3['headerTitle'] = var5;
                        var12 = function headerLeft(arg1) {
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 41;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var7 = arg1;
                            var8 = var1;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure4_slot4;
                            var5 = 'navigateToLandingPage';
                            var1[var5] = var6;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var3['headerLeft'] = var12;
                        var12 = function render() {
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 42;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.AddPhoneScreen;
                            var1 = {};
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var3['render'] = var12;
                        var1[var7] = var3;
                        var3 = _closure1_slot13;
                        var7 = var3.VERIFY_PHONE;
                        var3 = {};
                        var12 = var8[var11];
                        var12 = var9.bind(var10)(var12);
                        var12 = var12.ImpressionNames;
                        var12 = var12.USER_VERIFY_PHONE;
                        var3['impressionName'] = var12;
                        var12 = {};
                        var13 = var8[var11];
                        var13 = var9.bind(var10)(var13);
                        var13 = var13.ImpressionGroups;
                        var13 = var13.CONTACT_SYNC_FLOW;
                        var12['impression_group'] = var13;
                        var3['impressionProperties'] = var12;
                        var3['fullscreen'] = var6;
                        var3['headerTitle'] = var5;
                        var12 = function headerLeft(arg1) {
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 41;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var7 = arg1;
                            var8 = var1;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure4_slot4;
                            var5 = 'navigateToLandingPage';
                            var1[var5] = var6;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var3['headerLeft'] = var12;
                        var12 = function render() {
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 42;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.VerifyPhoneScreen;
                            var1 = {};
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var3['render'] = var12;
                        var1[var7] = var3;
                        var2 = _closure1_slot13;
                        var3 = var2.VERIFY_PASSWORD;
                        var2 = {};
                        var7 = var8[var11];
                        var7 = var9.bind(var10)(var7);
                        var7 = var7.ImpressionNames;
                        var7 = var7.USER_VERIFY_PASSWORD;
                        var2['impressionName'] = var7;
                        var7 = {};
                        var8 = var8[var11];
                        var8 = var9.bind(var10)(var8);
                        var8 = var8.ImpressionGroups;
                        var8 = var8.CONTACT_SYNC_FLOW;
                        var7['impression_group'] = var8;
                        var2['impressionProperties'] = var7;
                        var2['fullscreen'] = var6;
                        var6 = function headerLeft(arg1) {
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 41;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var7 = arg1;
                            var8 = var1;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure4_slot4;
                            var5 = 'navigateToLandingPage';
                            var1[var5] = var6;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var2['headerLeft'] = var6;
                        var2['headerTitle'] = var5;
                        var4 = function render() {
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 42;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.VerifyPasswordScreen;
                            var1 = {};
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var2['render'] = var4;
                        var1[var3] = var2;
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var7 = var7.bind(var8)(var2, var3);
            var8 = _closure1_slot5;
            var3 = var8.useEffect;
            var2 = new Array(2);
            var2[0] = var10;
            var2[1] = var9;
            var1 = function() {
                var1 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = _closure2_slot4;
                        var1 = !var1;
                        if(!var1) { _fun0014_ip = 32; continue _fun0014 }
case 30:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.closeContactSyncModal;
                        var1 = {};
                        var4 = _closure2_slot5;
                        var1['onComplete'] = var4;
                        var1 = var2.bind(var3)(var1);
case 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 43;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var1['screens'] = var7;
            var7 = null;
            if(!(var7 == var6)) { _fun0010_ip = 62; continue _fun0010 }
case 63:
            var8 = {};
            var7 = _closure1_slot13;
            var7 = var7.WELCOME;
            var8['name'] = var7;
            var7 = new Array(1);
            var7[0] = var8;
            var6 = var7;
case 62:
            var1['initialRouteStack'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 16;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.13/7kZ;
            var5 = var6.bind(var7)(var5);
            var1['headerBackTitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.setName;
    var _closure1_slot9 = var8;
    var8 = var5.useContactSyncModalStore;
    var _closure1_slot10 = var8;
    var5 = var5.useIsOnboarding;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ContactPermissions;
    var _closure1_slot12 = var8;
    var5 = var5.ContactSyncScenes;
    var _closure1_slot13 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.NativePermissionTypes;
    var _closure1_slot15 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot16 = var8;
    var8 = var5.Fragment;
    var _closure1_slot17 = var8;
    var5 = var5.jsxs;
    var _closure1_slot18 = var5;
    var5 = 11;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flex': 1, 'backgroundColor': null, 'justifyContent': 'center'};
    var11 = 12;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var11;
    var11 = 'center';
    var12 = 13;
    var12 = var7[var12];
    var12 = var6.bind(var1)(var12);
    var13 = var12.NAV_BAR_HEIGHT;
    var12 = 32;
    var12 = var13 + var12;
    var10['paddingTop'] = var12;
    var5['container'] = var10;
    var10 = {};
    var10['textAlign'] = var11;
    var5['landingTrailing'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot19 = var5;
    var5 = 44;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/contact_sync/native/components/RedesignContactSyncModal.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function ContactSyncOnboardingModal(arg1) {
        var1 = arg1;
        var2 = var1.route;
        var2 = var2.params;
        var6 = var2.onComplete;
        var5 = var1.openSettingsSheet;
        var1 = var1.initialRoutes;
        var4 = _closure1_slot16;
        var3 = _closure1_slot27;
        var2 = {};
        var2['onComplete'] = var6;
        var2['openSettingsSheet'] = var5;
        var2['initialRoutes'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['ContactSyncOnboardingModal'] = var2;
    return var1;
})();
// app/modules/contact_sync/native/components/RedesignContactSyncModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function headerTitle() {
        var1 = null;
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function headerLeft() {
        var1 = null;
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function OnboardingTrailing(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isOnboarding;
            var7 = var2.discoverabilityEnabled;
            var6 = var2.setDiscoverabilityEnabled;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot16;
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
            var1 = _closure1_slot20;
case 4:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function ContactSyncLandingScreen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.openSettingsSheet;
            var _closure2_slot0 = var1;
            var16 = var2.loading;
            var11 = var2.setLoading;
            var _closure2_slot1 = var11;
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
            var2 = _closure1_slot2;
            var3 = 21;
            var3 = var2[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var20 = var3.bottom;
            var3 = _closure1_slot0;
            var5 = 22;
            var5 = var2[var5];
            var7 = var3.bind(var4)(var5);
            var5 = var7.useNavigation;
            var14 = var5.bind(var7)();
            var _closure2_slot3 = var14;
            var5 = 23;
            var2 = var2[var5];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var7.bind(var8)(var3, var2);
            var _closure2_slot4 = var3;
            var18 = null;
            var7 = var18 == var3;
            var2 = undefined;
            if(var7) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = var3.phone;
case 5:
            _closure2_slot5 = var2;
            var7 = _closure1_slot10;
            var7 = var7.bind(var4)();
            var10 = var7.permissionState;
            var12 = var7.error;
            var15 = _closure1_slot5;
            var8 = var15.useState;
            var7 = true;
            var15 = var8.bind(var15)(var7);
            var8 = _closure1_slot4;
            var7 = 2;
            var8 = var8.bind(var4)(var15, var7);
            var19 = 0;
            var22 = var8[var19];
            _closure2_slot6 = var22;
            var7 = 1;
            var21 = var8[var7];
            var7 = _closure1_slot11;
            var15 = var7.bind(var4)();
            _closure2_slot7 = var15;
            var8 = _closure1_slot5;
            var7 = var8.useCallback;
            var23 = var18 == var3;
            var18 = undefined;
            if(var23) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var18 = var3.email;
case 7:
            var3 = new Array(6);
            var3[0] = var18;
            var3[1] = var22;
            var3[2] = var15;
            var3[3] = var14;
            var3[4] = var11;
            var3[5] = var2;
            var2 = function() {
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
                            var3 = 24;
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
            var18 = var7.bind(var8)(var2, var3);
            _closure2_slot8 = var18;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var8 = var3.bind(var4)(var2);
            var7 = var8.useStateFromStores;
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
            var2 = var7.bind(var8)(var5, var3, var2);
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
                    var1 = 25;
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
                    var4 = 26;
                    var4 = var7[var4];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.AppStates;
                    var4 = var4.ACTIVE;
                    var3 = var5 === var4;
case 26:
                    if(!var3) { _fun0004_ip = 28; continue _fun0004 }
case 16:
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
case 29:
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var3 = 27;
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
                    var3 = 28;
                    var3 = var1[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.openLazy;
                    var5 = _closure1_slot0;
                    var2 = 30;
                    var2 = var1[var2];
                    var5 = var5.bind(var6)(var2);
                    var2 = 29;
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
                        var2 = 31;
                        var2 = var3[var2];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.requestPermission;
                        var2 = _closure1_slot15;
                        var2 = var2.CONTACTS;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address=60);
case 30:
                        return var2;
case 31:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                        if(var2) { _fun0006_ip = 34; continue _fun0006 }
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
                        _fun0006_ip = 35; continue _fun0006;
case 34:
                        var4 = _closure2_slot8;
                        var4 = var4.bind(var3)();
case 35:
                        return var3;
case 32:
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
            var6 = _closure1_slot21;
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot6;
            var6 = {};
            var11 = var9.container;
            var9 = new Array(2);
            var9[0] = var11;
            var11 = {};
            var23 = var20 > var19;
            var24 = 16;
            var19 = var24;
            if(!var23) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var19 = var20;
case 36:
            var11['paddingBottom'] = var19;
            var9[1] = var11;
            var6['style'] = var9;
            if(var15) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var9 = _closure1_slot12;
            var9 = var9.AUTHORIZED;
            if(!(var10 === var9)) { _fun0002_ip = 38; continue _fun0002 }
case 40:
            var11 = _closure1_slot16;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var9 = 33;
            var9 = var19[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['onNext'] = var18;
            var9['error'] = var12;
            var9['loading'] = var16;
            var9['discoverabilityEnabled'] = var22;
            var9['setDiscoverabilityEnabled'] = var21;
            var9 = var11.bind(var4)(var10, var9);
            _fun0002_ip = 41; continue _fun0002;
case 38:
            var12 = _closure1_slot16;
            var11 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 32;
            var10 = var18[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var23 = _closure1_slot0;
            var19 = var18[var24];
            var19 = var23.bind(var4)(var19);
            var25 = var19.intl;
            var20 = var25.string;
            var19 = var18[var24];
            var19 = var23.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.DjcfHu;
            var19 = var20.bind(var25)(var19);
            var10['title'] = var19;
            var19 = var18[var24];
            var19 = var23.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var24];
            var18 = var23.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.kq+Cd3;
            var18 = var19.bind(var20)(var18);
            var10['subtitle'] = var18;
            var20 = _closure1_slot16;
            var19 = _closure1_slot29;
            var18 = {};
            var18['isOnboarding'] = var15;
            var18['discoverabilityEnabled'] = var22;
            var18['setDiscoverabilityEnabled'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var10['trailing'] = var18;
            var17 = _closure1_slot22;
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
case 41:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
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
            var2 = 22;
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
                            if(var2) { _fun0008_ip = 42; continue _fun0008 }
case 43:
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
case 44:
                            return var2;
case 4:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0008_ip = 45; continue _fun0008 }
case 46:
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
case 45:
                            return var2;
case 42:
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
case 47:
            var12 = var11;
case 7:
            var5['initialName'] = var12;
            var8 = var8 != var11;
            if(!var8) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var8 = var10 !== var11;
case 48:
            if(!var8) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var8 = var9;
case 50:
            var5['prefilledFromContactBook'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
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
            var3 = 22;
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
            if(!(!(var3 > var1))) { _fun0009_ip = 52; continue _fun0009 }
case 53:
            var4 = _closure1_slot16;
            var3 = _closure1_slot6;
            var1 = {};
            var8 = var8.container;
            var1['style'] = var8;
            var8 = _closure1_slot23;
            var1['children'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0009_ip = 54; continue _fun0009;
case 52:
            var4 = _closure1_slot16;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 38;
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
case 54:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
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
                    if(!var1) { _fun0011_ip = 55; continue _fun0011 }
case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.refreshContactSyncPermissionStatus;
                    var1 = var1.bind(var2)();
case 55:
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
                    if(!(var1 == var3)) { _fun0012_ip = 56; continue _fun0012 }
case 29:
                    var1 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    _fun0012_ip = 57; continue _fun0012;
case 56:
                    var1 = _closure2_slot0;
case 57:
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
                        var8 = var1.loading;
                        var6 = var1.setLoading;
                        var9 = var1.openSettingsSheet;
                        var11 = var1.onComplete;
                        var _closure4_slot0 = var11;
                        var12 = var1.navigateToLandingPage;
                        var _closure4_slot1 = var12;
                        var5 = _closure1_slot16;
                        var3 = _closure1_slot32;
                        var1 = {};
                        var1['onComplete'] = var11;
                        var10 = undefined;
                        var1 = var5.bind(var10)(var3, var1);
                        var _closure4_slot2 = var1;
                        var5 = _closure1_slot16;
                        var3 = _closure1_slot31;
                        var1 = {};
                        var1['navigateToLandingPage'] = var12;
                        var1 = var5.bind(var10)(var3, var1);
                        var _closure4_slot3 = var1;
                        var5 = _closure1_slot16;
                        var3 = _closure1_slot30;
                        var1 = {};
                        var1['onComplete'] = var11;
                        var1['openSettingsSheet'] = var9;
                        var1['loading'] = var8;
                        var1['setLoading'] = var6;
                        var1 = var5.bind(var10)(var3, var1);
                        var _closure4_slot4 = var1;
                        var1 = {};
                        var3 = _closure1_slot13;
                        var5 = var3.WELCOME;
                        var3 = {};
                        var6 = true;
                        var3['ignoreKeyboard'] = var6;
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var11 = 40;
                        var8 = var9[var11];
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
                        var8 = _closure1_slot27;
                        var3['headerTitle'] = var8;
                        if(var7) { _fun0013_ip = 58; continue _fun0013 }
case 59:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 41;
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
                            var4 = _closure4_slot0;
                            var1['onComplete'] = var4;
                            var4 = true;
                            var1['skip'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var7 = var8.bind(var9)(var7);
                        _fun0013_ip = 60; continue _fun0013;
case 58:
                        var7 = _closure1_slot28;
case 60:
                        var3['headerLeft'] = var7;
                        var7 = function render() {
                            var1 = _closure4_slot4;
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
                        var5 = _closure1_slot27;
                        var3['headerTitle'] = var5;
                        var12 = _closure1_slot28;
                        var3['headerLeft'] = var12;
                        var13 = function render() {
                            var1 = _closure4_slot3;
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
                            var1 = _closure4_slot2;
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
                            var1 = 42;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var7 = arg1;
                            var8 = var1;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure4_slot1;
                            var5 = 'navigateToLandingPage';
                            var1[var5] = var6;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var3['headerLeft'] = var12;
                        var12 = function render() {
                            var1 = _closure1_slot24;
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
                            var1 = 42;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var7 = arg1;
                            var8 = var1;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure4_slot1;
                            var5 = 'navigateToLandingPage';
                            var1[var5] = var6;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var3['headerLeft'] = var12;
                        var12 = function render() {
                            var1 = _closure1_slot25;
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
                            var1 = 42;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var7 = arg1;
                            var8 = var1;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure4_slot1;
                            var5 = 'navigateToLandingPage';
                            var1[var5] = var6;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var2['headerLeft'] = var6;
                        var2['headerTitle'] = var5;
                        var4 = function render() {
                            var1 = _closure1_slot26;
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
                        if(!var1) { _fun0014_ip = 31; continue _fun0014 }
case 29:
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
case 31:
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
            if(!(var7 == var6)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
            var8 = {};
            var7 = _closure1_slot13;
            var7 = var7.WELCOME;
            var8['name'] = var7;
            var7 = new Array(1);
            var7[0] = var8;
            var6 = var7;
case 61:
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
            var5 = var5.13/7kX;
            var5 = var6.bind(var7)(var5);
            var1['headerBackTitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot33 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var11 = true;
    var5['value'] = var11;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.setName;
    var _closure1_slot9 = var9;
    var9 = var5.useContactSyncModalStore;
    var _closure1_slot10 = var9;
    var5 = var5.useIsOnboarding;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.ContactPermissions;
    var _closure1_slot12 = var9;
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
    var9 = var5.jsx;
    var _closure1_slot16 = var9;
    var10 = var5.Fragment;
    var _closure1_slot17 = var10;
    var5 = var5.jsxs;
    var _closure1_slot18 = var5;
    var5 = 11;
    var5 = var7[var5];
    var12 = var6.bind(var1)(var5);
    var10 = var12.createStyles;
    var5 = {};
    var13 = {'flex': 1, 'backgroundColor': null, 'justifyContent': 'center'};
    var14 = 12;
    var14 = var7[var14];
    var14 = var8.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var13['backgroundColor'] = var14;
    var14 = 'center';
    var15 = 13;
    var15 = var7[var15];
    var15 = var6.bind(var1)(var15);
    var16 = var15.NAV_BAR_HEIGHT;
    var15 = 32;
    var15 = var16 + var15;
    var13['paddingTop'] = var15;
    var5['container'] = var13;
    var13 = {};
    var13['textAlign'] = var14;
    var5['landingTrailing'] = var13;
    var5 = var10.bind(var12)(var5);
    var _closure1_slot19 = var5;
    var10 = function OnboardingTrailingLanding() {
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
        var6 = var5.cGQmNL;
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
    var5 = {};
    var5 = var9.bind(var1)(var10, var5);
    var _closure1_slot20 = var5;
    var5 = 19;
    var5 = var7[var5];
    var10 = var8.bind(var1)(var5);
    var5 = {};
    var5['absolute'] = var11;
    var5 = var9.bind(var1)(var10, var5);
    var _closure1_slot21 = var5;
    var5 = 20;
    var5 = var7[var5];
    var10 = var8.bind(var1)(var5);
    var5 = {};
    var5 = var9.bind(var1)(var10, var5);
    var _closure1_slot22 = var5;
    var5 = 37;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var5 = {};
    var5 = var9.bind(var1)(var8, var5);
    var _closure1_slot23 = var5;
    var5 = 39;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var10 = var8.AddPhoneScreen;
    var8 = {};
    var8 = var9.bind(var1)(var10, var8);
    var _closure1_slot24 = var8;
    var8 = var7[var5];
    var8 = var6.bind(var1)(var8);
    var10 = var8.VerifyPhoneScreen;
    var8 = {};
    var8 = var9.bind(var1)(var10, var8);
    var _closure1_slot25 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.VerifyPasswordScreen;
    var5 = {};
    var5 = var9.bind(var1)(var8, var5);
    var _closure1_slot26 = var5;
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
        var3 = _closure1_slot33;
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
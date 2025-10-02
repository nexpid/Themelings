// app/modules/user_settings/native/ProfileCustomizationSettingScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = ['hasEdits', 'resetPending', 'handleSubmit'];
    var _closure1_slot3 = var1;
    var1 = ['hasEdits', 'guild', 'resetPending', 'handleSubmit'];
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var12 = 4;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ProfileCustomizationSubsection;
    var _closure1_slot11 = var9;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.UserSettingsSections;
    var _closure1_slot12 = var8;
    var8 = var4.AnalyticEvents;
    var _closure1_slot13 = var8;
    var4 = var4.AnalyticsSections;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot15 = var8;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var8 = var10.createStyles;
    var4 = {};
    var11 = {};
    var13 = '100%';
    var11['height'] = var13;
    var4['container'] = var11;
    var11 = {};
    var11['paddingTop'] = var12;
    var4['controls'] = var11;
    var4 = var8.bind(var10)(var4);
    var _closure1_slot17 = var4;
    var8 = {};
    var4 = function renderLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.2p07FR;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8['renderLabel'] = var4;
    var4 = 'edit-user-profile';
    var8['id'] = var4;
    var4 = function renderPage(arg1) {
        var1 = arg1;
        var5 = var1.autoFocusElement;
        var4 = _closure1_slot15;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1['autoFocusElement'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var8['renderPage'] = var4;
    var4 = var9.USER_PROFILE;
    var8['subSection'] = var4;
    var4 = new Array(2);
    var4[0] = var8;
    var8 = {};
    var10 = function renderLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 10;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.kPHroa;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8['renderLabel'] = var10;
    var10 = 'edit-user-profiles-guilds';
    var8['id'] = var10;
    var10 = function renderPage() {
        var4 = _closure1_slot15;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 12;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var8['renderPage'] = var10;
    var9 = var9.GUILD;
    var8['subSection'] = var9;
    var4[1] = var8;
    var _closure1_slot18 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot17;
            var4 = undefined;
            var7 = var2.bind(var4)();
            var5 = _closure1_slot8;
            var2 = var5.useState;
            var3 = 0;
            var8 = var2.bind(var5)(var3);
            var5 = _closure1_slot7;
            var2 = 2;
            var5 = var5.bind(var4)(var8, var2);
            var11 = var5[var3];
            var2 = 1;
            var2 = var5[var2];
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var9 = var5.bind(var4)(var2);
            var2 = var9.useNativeStackNavigation;
            var13 = var2.bind(var9)();
            var _closure2_slot1 = var13;
            var2 = 14;
            var2 = var8[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.useSettingNavigationRoute;
            var2 = var2.bind(var5)();
            var8 = var2.params;
            var2 = null;
            var9 = var2 == var8;
            var5 = undefined;
            if(var9) { _fun0001_ip = 138; continue _fun0001 }
 132:
            var5 = var8.autoFocusElement;
 138:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 15;
            var10 = var9[var10];
            var15 = var8.bind(var4)(var10);
            var14 = var15.useStateFromStores;
            var10 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot10;
                    var3 = var4.getSubsection;
                    var3 = var3.bind(var4)();
                    var4 = null;
                    if(!(var4 == var3)) { _fun0002_ip = 35; continue _fun0002 }
 25:
                    var4 = _closure1_slot11;
                    var3 = var4.USER_PROFILE;
 35:
                    var _closure3_slot0 = var3;
                    var3 = _closure1_slot18;
                    var2 = var3.findIndex;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.subSection;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var10 = var14.bind(var15)(var12, var10);
            var12 = {};
            var12['autoFocusElement'] = var5;
            var5 = function getTabItems(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure1_slot18;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var5 = var1.renderLabel;
                    var2 = var1.id;
                    var4 = var1.renderPage;
                    var1 = {};
                    var3 = undefined;
                    var5 = var5.bind(var3)();
                    var1['label'] = var5;
                    var1['id'] = var2;
                    var2 = _closure3_slot0;
                    var2 = var4.bind(var3)(var2);
                    var1['page'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var5.bind(var4)(var12);
            var5 = 16;
            var5 = var9[var5];
            var9 = var8.bind(var4)(var5);
            var8 = var9.useSegmentedControlState;
            var5 = {};
            var5['items'] = var12;
            var5['pageWidth'] = var11;
            var5['defaultIndex'] = var10;
            var9 = var8.bind(var9)(var5);
            var8 = _closure1_slot18;
            var10 = var9.activeIndex;
            var5 = var10.get;
            var5 = var5.bind(var10)();
            var10 = var8[var5];
            if(!(var2 == var10)) { _fun0001_ip = 282; continue _fun0001 }
 274:
            var2 = _closure1_slot18;
            var10 = var2[var3];
 282:
            var _closure2_slot2 = var10;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var8 = var2.bind(var4)();
            var16 = var8.hasEdits;
            var _closure2_slot3 = var16;
            var15 = var8.resetPending;
            var _closure2_slot4 = var15;
            var17 = var8.handleSubmit;
            var _closure2_slot5 = var17;
            var12 = _closure1_slot6;
            var2 = _closure1_slot3;
            var8 = var12.bind(var4)(var8, var2);
            var2 = 18;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var11 = var2.bind(var4)();
            var18 = var11.hasEdits;
            var _closure2_slot6 = var18;
            var5 = var11.guild;
            var _closure2_slot7 = var5;
            var2 = var11.resetPending;
            var _closure2_slot8 = var2;
            var19 = var11.handleSubmit;
            var _closure2_slot9 = var19;
            var3 = _closure1_slot4;
            var11 = var12.bind(var4)(var11, var3);
            var3 = var16;
            if(var3) { _fun0001_ip = 428; continue _fun0001 }
 425:
            var3 = var18;
 428:
            var _closure2_slot10 = var3;
            var8 = var8.isSubmitting;
            if(var8) { _fun0001_ip = 447; continue _fun0001 }
 441:
            var8 = var11.isSubmitting;
 447:
            var _closure2_slot11 = var8;
            var11 = _closure1_slot8;
            var14 = var11.useCallback;
            var12 = new Array(2);
            var12[0] = var15;
            var12[1] = var2;
            var2 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot8;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var14.bind(var11)(var2, var12);
            var _closure2_slot12 = var2;
            var15 = var11.useCallback;
            var14 = _closure1_slot5;
            var12 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 89; continue _fun0003 }
 7:
                        var2 = _closure2_slot3;
                        var4 = true;
                        if(!var2) { _fun0003_ip = 42; continue _fun0003 }
 19:
                        var6 = _closure2_slot5;
                        var2 = undefined;
                        var2 = var6.bind(var2)();
                        SaveGenerator(address=33);
 31:
                        return var2;
 33:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        var4 = var2;
                        if(var6) { _fun0003_ip = 86; continue _fun0003 }
 42:
                        var6 = _closure2_slot6;
                        var5 = true;
                        if(!var6) { _fun0003_ip = 74; continue _fun0003 }
 51:
                        var6 = _closure2_slot9;
                        var3 = undefined;
                        var3 = var6.bind(var3)();
                        SaveGenerator(address=65);
 63:
                        return var3;
 65:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        var5 = var3;
                        if(var6) { _fun0003_ip = 83; continue _fun0003 }
 74:
                        if(!var4) { _fun0003_ip = 80; continue _fun0003 }
 77:
                        var4 = var5;
 80:
                        return var4;
 83:
                        return var3;
 86:
                        return var2;
 89:
                        return var1;
                    }
                };
                return var1;
            };
            var14 = var14.bind(var4)(var12);
            var12 = new Array(4);
            var12[0] = var19;
            var12[1] = var18;
            var12[2] = var17;
            var12[3] = var16;
            var12 = var15.bind(var11)(var14, var12);
            var _closure2_slot13 = var12;
            var15 = var11.useEffect;
            var10 = var10.subSection;
            var14 = new Array(1);
            var14[0] = var10;
            var10 = function() {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 19;
                var2 = var6[var1];
                var1 = undefined;
                var9 = var5.bind(var1)(var2);
                var8 = var9.trackWithMetadata;
                var2 = _closure1_slot13;
                var7 = var2.SETTINGS_PANE_VIEWED;
                var4 = {};
                var2 = 'user';
                var4['settings_type'] = var2;
                var10 = _closure2_slot2;
                var10 = var10.subSection;
                var4['subsection'] = var10;
                var10 = _closure1_slot14;
                var10 = var10.SETTINGS_CUSTOMIZE_PROFILE;
                var4['destination_pane'] = var10;
                var4 = var8.bind(var9)(var7, var4);
                var4 = 20;
                var4 = var6[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.setSection;
                var3 = _closure1_slot12;
                var3 = var3.PROFILE_CUSTOMIZATION;
                var2 = _closure2_slot2;
                var2 = var2.subSection;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var10 = var15.bind(var11)(var10, var14);
            var14 = var11.useEffect;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 53; continue _fun0004 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.initGuildIdentitySettings;
                    var1 = _closure2_slot7;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.resetAndCloseGuildIdentityForm;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    return var1;
                }
            };
            var5 = var14.bind(var11)(var5, var10);
            var10 = var11.useLayoutEffect;
            var5 = new Array(5);
            var5[0] = var13;
            var5[1] = var12;
            var5[2] = var3;
            var5[3] = var2;
            var5[4] = var8;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = var4.setOptions;
                    var2 = {};
                    var1 = false;
                    var2['headerShadowVisible'] = var1;
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 22;
                    var7 = var7[var1];
                    var1 = undefined;
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getRenderModalCloseImage;
                    var7 = var7.bind(var8)(var4);
                    var2['headerLeft'] = var7;
                    var5 = _closure2_slot11;
                    if(var5) { _fun0005_ip = 81; continue _fun0005 }
 70:
                    var5 = function(arg1) {
                        var4 = _closure1_slot15;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var1 = 22;
                        var1 = var10[var1];
                        var3 = undefined;
                        var1 = var9.bind(var3)(var1);
                        var2 = var1.HeaderTextButton;
                        var1 = {};
                        var11 = arg1;
                        var12 = var1;
                        var6 = copyDataProperties(var12, var11);
                        var6 = 10;
                        var7 = var10[var6];
                        var7 = var9.bind(var3)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var3)(var6);
                        var6 = var6.t;
                        var6 = var6.R3BPHx;
                        var7 = var7.bind(var8)(var6);
                        var6 = 'label';
                        var1[var6] = var7;
                        var6 = _closure2_slot10;
                        var7 = !var6;
                        var6 = 'disabled';
                        var1[var6] = var7;
                        var6 = _closure1_slot5;
                        var5 = function* () {
                            var1 = function* anon_0_() {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0006_ip = 136; continue _fun0006 }
 10:
                                    var2 = _closure2_slot13;
                                    var3 = undefined;
                                    var2 = var2.bind(var3)();
                                    SaveGenerator(address=27);
 25:
                                    return var2;
 27:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0006_ip = 133; continue _fun0006 }
 33:
                                    if(!var2) { _fun0006_ip = 130; continue _fun0006 }
 36:
                                    var6 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var5 = 24;
                                    var5 = var8[var5];
                                    var5 = var6.bind(var3)(var5);
                                    var7 = var5.DelayedCall;
                                    var5 = 18;
                                    var5 = var8[var5];
                                    var5 = var6.bind(var3)(var5);
                                    var6 = var5.RESET_DELAY_MS;
                                    var5 = 50;
                                    var10 = var6 + var5;
                                    var4 = _closure2_slot1;
                                    var9 = var4.goBack;
                                    var5 = var7.prototype;
                                    var5 = Object.create(var5, {constructor: {value: var7}});
                                    var11 = var5;
                                    var4 = new var11[var7](var10, var9, var8);
                                    var5 = var4 instanceof Object ? var4 : var5;
                                    var4 = var5.delay;
                                    var4 = var4.bind(var5)();
 130:
                                    return var3;
 133:
                                    return var2;
 136:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var6 = var6.bind(var3)(var5);
                        var5 = 'onPress';
                        var1[var5] = var6;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    _fun0005_ip = 107; continue _fun0005;
 81:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 23;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var5 = var6.HeaderSubmittingIndicator;
 107:
                    var2['headerRight'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var2, var5);
            var10 = var11.useCallback;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = new Array(0);
            var5 = var10.bind(var11)(var5, var2);
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 25;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            if(!var3) { _fun0001_ip = 689; continue _fun0001 }
 686:
            var3 = !var8;
 689:
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.data;
                var1 = var1.action;
                var _closure3_slot0 = var1;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 26;
                var2 = var7[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var8 = _closure2_slot10;
                var2['hasEdits'] = var8;
                var6 = _closure2_slot12;
                var2['resetPending'] = var6;
                var6 = _closure1_slot0;
                var5 = 27;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.dismissKeyboard;
                var2['onHasEdits'] = var5;
                var4 = function onConfirm() {
                    var3 = _closure2_slot1;
                    var2 = var3.dispatch;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['onConfirm'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var4)(var3, var1);
            var3 = _closure1_slot16;
            var2 = _closure1_slot9;
            var1 = {};
            var8 = var7.container;
            var1['style'] = var8;
            var1['onLayout'] = var5;
            var8 = _closure1_slot15;
            var5 = {};
            var7 = var7.controls;
            var5['style'] = var7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 28;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var11 = var6.Tabs;
            var6 = {};
            var6['state'] = var9;
            var6 = var8.bind(var4)(var11, var6);
            var5['children'] = var6;
            var6 = var8.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 29;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SegmentedControlPages;
            var6 = {};
            var6['state'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/ProfileCustomizationSettingScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
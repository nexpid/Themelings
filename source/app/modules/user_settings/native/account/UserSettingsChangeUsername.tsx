// app/modules/user_settings/native/account/UserSettingsChangeUsername.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var13 = 2;
    var7 = var6[var13];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOBILE_SECONDARY;
    var9['backgroundColor'] = var14;
    var4['background'] = var9;
    var9 = {};
    var14 = 16;
    var9['padding'] = var14;
    var4['container'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'marginTop': 8};
    var4['inputs'] = var9;
    var9 = {};
    var9['flex'] = var13;
    var4['username'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var9['borderBottomRightRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.none;
    var9['borderTopRightRadius'] = var13;
    var4['usernameInput'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['discriminator'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var9['borderBottomLeftRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var9['borderTopLeftRadius'] = var12;
    var4['discriminatorInput'] = var9;
    var9 = {'width': 1, 'backgroundColor': null, 'marginBottom': 8};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var12;
    var4['divider'] = var9;
    var9 = {'flex': 1, 'marginVertical': 12};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MODIFIER_SELECTED;
    var9['backgroundColor'] = var10;
    var4['dividerInner'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = function UsernameStatusMessage(arg1) {
        var2 = arg1;
        var5 = var2.usernameStatus;
        var2 = var2.showHint;
        var _closure2_slot0 = var2;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 9;
        var3 = var8[var2];
        var6 = undefined;
        var4 = var7.bind(var6)(var3);
        var3 = var4.match;
        var10 = var3.bind(var4)(var5);
        var5 = var10.with;
        var4 = {};
        var9 = 10;
        var3 = var8[var9];
        var3 = var7.bind(var6)(var3);
        var3 = var3.NameValidationState;
        var3 = var3.ERROR;
        var4['type'] = var3;
        var3 = var8[var2];
        var3 = var7.bind(var6)(var3);
        var11 = var3.P;
        var3 = var11.select;
        var3 = var3.bind(var11)();
        var4['message'] = var3;
        var3 = function(arg1) {
            var4 = _closure1_slot10;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-xs/medium', 'color': 'text-danger'};
            var5 = arg1;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5 = var5.bind(var10)(var4, var3);
        var4 = var5.with;
        var3 = {};
        var9 = var8[var9];
        var9 = var7.bind(var6)(var9);
        var9 = var9.NameValidationState;
        var9 = var9.AVAILABLE;
        var3['type'] = var9;
        var2 = var8[var2];
        var2 = var7.bind(var6)(var2);
        var6 = var2.P;
        var2 = var6.select;
        var2 = var2.bind(var6)();
        var3['message'] = var2;
        var2 = function(arg1) {
            var4 = _closure1_slot10;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-xs/medium', 'color': 'text-positive'};
            var5 = arg1;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3 = var4.bind(var5)(var3, var2);
        var2 = var3.otherwise;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!var2) { _fun0001_ip = 117; continue _fun0001 }
 12:
                var5 = _closure1_slot10;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 11;
                var2 = var10[var2];
                var4 = undefined;
                var2 = var9.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {'variant': 'text-xs/medium', 'color': 'text-normal'};
                var6 = 12;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.z7c4bG;
                var6 = var7.bind(var8)(var6);
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
 117:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot13 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/account/UserSettingsChangeUsername.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot12;
            var5 = undefined;
            var24 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var1 = var6[var1];
            var3 = var2.bind(var5)(var1);
            var1 = var3.useNavigation;
            var3 = var1.bind(var3)();
            var _closure2_slot0 = var3;
            var1 = 14;
            var1 = var6[var1];
            var8 = var2.bind(var5)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var7.bind(var8)(var4, var1);
            var _closure2_slot1 = var17;
            var1 = 15;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useChangeUsernameLivecheckEnabled;
            var2 = var1.bind(var2)();
            var _closure2_slot2 = var2;
            var4 = _closure1_slot1;
            var1 = 16;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.canEditDiscriminator;
            var21 = var1.bind(var4)(var17);
            if(!var21) { _fun0002_ip = 173; continue _fun0002 }
 151:
            var1 = null;
            var1 = var1 != var17;
            if(!var1) { _fun0002_ip = 170; continue _fun0002 }
 160:
            var4 = var17.hasUniqueUsername;
            var1 = var4.bind(var17)();
 170:
            var21 = !var1;
 173:
            var _closure2_slot3 = var21;
            var7 = _closure1_slot5;
            var6 = var7.useState;
            var1 = null;
            var4 = var1 == var17;
            var9 = undefined;
            if(var4) { _fun0002_ip = 202; continue _fun0002 }
 197:
            var9 = var17.username;
 202:
            var10 = var1 != var9;
            var8 = '';
            var4 = var8;
            if(!var10) { _fun0002_ip = 219; continue _fun0002 }
 216:
            var4 = var9;
 219:
            var6 = var6.bind(var7)(var4);
            var4 = _closure1_slot4;
            var10 = 2;
            var4 = var4.bind(var5)(var6, var10);
            var12 = 0;
            var27 = var4[var12];
            var _closure2_slot4 = var27;
            var6 = 1;
            var4 = var4[var6];
            var _closure2_slot5 = var4;
            var7 = _closure1_slot5;
            var4 = var7.useState;
            var11 = var1 == var17;
            var9 = undefined;
            if(var11) { _fun0002_ip = 282; continue _fun0002 }
 276:
            var9 = var17.discriminator;
 282:
            var11 = var1 != var9;
            if(!var11) { _fun0002_ip = 292; continue _fun0002 }
 289:
            var8 = var9;
 292:
            var4 = var4.bind(var7)(var8);
            var7 = _closure1_slot4;
            var4 = var7.bind(var5)(var4, var10);
            var9 = var4[var12];
            var _closure2_slot6 = var9;
            var8 = var4[var6];
            var11 = _closure1_slot5;
            var4 = var11.useState;
            var4 = var4.bind(var11)(var1);
            var4 = var7.bind(var5)(var4, var10);
            var14 = var4[var12];
            var4 = var4[var6];
            var _closure2_slot7 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 17;
            var4 = var7[var4];
            var10 = var6.bind(var5)(var4);
            var7 = var10.useUsernameStatus;
            var6 = var1 == var17;
            if(var6) { _fun0002_ip = 397; continue _fun0002 }
 384:
            var4 = var17.hasUniqueUsername;
            var4 = var4.bind(var17)();
            var6 = !var4;
 397:
            var4 = !var6;
            if(var6) { _fun0002_ip = 406; continue _fun0002 }
 403:
            var4 = var2;
 406:
            var6 = var1 == var17;
            var2 = undefined;
            if(var6) { _fun0002_ip = 420; continue _fun0002 }
 415:
            var2 = var17.username;
 420:
            var6 = false;
            var35 = var10;
            var34 = var27;
            var33 = var4;
            var32 = false;
            var31 = var2;
            var2 = var35[var7](var34, var33, var32, var31, var30);
            var7 = _closure1_slot5;
            var4 = var7.useRef;
            var10 = var4.bind(var7)(var1);
            var _closure2_slot8 = var10;
            var7 = var1 == var17;
            var4 = undefined;
            if(var7) { _fun0002_ip = 472; continue _fun0002 }
 467:
            var4 = var17.username;
 472:
            var15 = var27 !== var4;
            if(var15) { _fun0002_ip = 498; continue _fun0002 }
 479:
            var7 = var1 == var17;
            var4 = undefined;
            if(var7) { _fun0002_ip = 494; continue _fun0002 }
 488:
            var4 = var17.discriminator;
 494:
            var15 = var9 !== var4;
 498:
            if(!var15) { _fun0002_ip = 557; continue _fun0002 }
 501:
            var4 = !var21;
            if(var4) { _fun0002_ip = 554; continue _fun0002 }
 507:
            var11 = /^\d+$/;
            var7 = var11.test;
            var7 = var7.bind(var11)(var9);
            if(!var7) { _fun0002_ip = 551; continue _fun0002 }
 534:
            var11 = global;
            var11 = var11.parseInt;
            var11 = var11.bind(var5)(var9);
            var7 = var11 > var12;
 551:
            var4 = var7;
 554:
            var15 = var4;
 557:
            var _closure2_slot9 = var15;
            var12 = _closure1_slot5;
            var11 = var12.useCallback;
            var7 = new Array(6);
            var7[0] = var15;
            var7[1] = var21;
            var7[2] = var9;
            var7[3] = var3;
            var7[4] = var17;
            var7[5] = var27;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot9;
                    if(!var1) { _fun0003_ip = 125; continue _fun0003 }
 12:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 18;
                    var1 = var4[var1];
                    var8 = undefined;
                    var7 = var3.bind(var8)(var1);
                    var4 = var7.setSection;
                    var1 = _closure1_slot9;
                    var3 = var1.ACCOUNT_CONFIRM_PASSWORD;
                    var3 = var4.bind(var7)(var3);
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var2 = var1.ACCOUNT_CONFIRM_PASSWORD;
                    var1 = {};
                    var7 = _closure1_slot3;
                    var6 = function* (arg1) {
                        var1 = function* anon_0_(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 317; continue _fun0004 }
 10:
                                var3 = _closure2_slot1;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0004_ip = 314; continue _fun0004 }
 26:
                                var3 = _closure2_slot7;
                                var6 = undefined;
                                var3 = var3.bind(var6)(var2);
                                var8 = {};
                                var3 = _closure2_slot4;
                                var8['username'] = var3;
                                var3 = arg1;
                                var8['password'] = var3;
                                var5 = _closure2_slot3;
                                var3 = undefined;
                                if(!var5) { _fun0004_ip = 68; continue _fun0004 }
 64:
                                var3 = _closure2_slot6;
 68:
                                var8['discriminator'] = var3;
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 18;
                                var3 = var7[var3];
                                var7 = var5.bind(var6)(var3);
                                var5 = var7.saveAccountChanges;
                                var3 = {};
                                var9 = false;
                                var3['close'] = var9;
                                var3 = var5.bind(var7)(var8, var3);
                                SaveGenerator(address=121);
 119:
                                return var3;
 121:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(var5) { _fun0004_ip = 311; continue _fun0004 }
 130:
                                var5 = var3.ok;
                                if(var5) { _fun0004_ip = 308; continue _fun0004 }
 142:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var5 = 19;
                                var5 = var8[var5];
                                var5 = var7.bind(var6)(var5);
                                var5 = var5.V6OrEarlierAPIError;
                                var7 = var5.prototype;
                                var7 = Object.create(var7, {constructor: {value: var5}});
                                var15 = var7;
                                var14 = var3;
                                var5 = new var15[var5](var14, var13);
                                var5 = var5 instanceof Object ? var5 : var7;
                                var8 = var5.getFieldMessage;
                                var7 = 'username';
                                var7 = var8.bind(var5)(var7);
                                if(!(var2 == var7)) { _fun0004_ip = 229; continue _fun0004 }
 210:
                                var8 = var5.getFieldMessage;
                                var7 = 'discriminator';
                                var7 = var8.bind(var5)(var7);
                                if(!(var2 != var7)) { _fun0004_ip = 308; continue _fun0004 }
 229:
                                var9 = _closure2_slot0;
                                var8 = var9.dispatch;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var7 = 20;
                                var7 = var11[var7];
                                var7 = var10.bind(var6)(var7);
                                var11 = var7.CommonActions;
                                var10 = var11.navigate;
                                var7 = {};
                                var12 = _closure1_slot9;
                                var12 = var12.ACCOUNT_CHANGE_USERNAME;
                                var7['name'] = var12;
                                var7 = var10.bind(var11)(var7);
                                var7 = var8.bind(var9)(var7);
                                var4 = _closure2_slot7;
                                var4 = var4.bind(var6)(var5);
                                return var2;
 308:
                                return var3;
 311:
                                return var3;
 314:
                                return var2;
 317:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var6 = var7.bind(var8)(var6);
                    var _closure3_slot0 = var6;
                    var6 = function() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1['onSubmit'] = var6;
                    var5 = function onSuccess() {
                        var4 = _closure2_slot0;
                        var3 = var4.dispatch;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var6 = var2.CommonActions;
                        var5 = var6.navigate;
                        var2 = {};
                        var7 = _closure1_slot9;
                        var7 = var7.ACCOUNT;
                        var2['name'] = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onSuccess'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 125:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var4, var7);
            var _closure2_slot10 = var7;
            var11 = var12.useLayoutEffect;
            var4 = new Array(3);
            var4[0] = var15;
            var4[1] = var7;
            var4[2] = var3;
            var3 = function() {
                var3 = _closure2_slot0;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure2_slot9;
                        var1 = null;
                        if(!var2) { _fun0005_ip = 137; continue _fun0005 }
 15:
                        var5 = _closure1_slot10;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 21;
                        var2 = var10[var2];
                        var4 = undefined;
                        var2 = var9.bind(var4)(var2);
                        var3 = var2.HeaderTextButton;
                        var2 = {};
                        var11 = arg1;
                        var12 = var2;
                        var7 = copyDataProperties(var12, var11);
                        var7 = _closure2_slot10;
                        var6 = 'onPress';
                        var2[var6] = var7;
                        var6 = 12;
                        var7 = var10[var6];
                        var7 = var9.bind(var4)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var4)(var6);
                        var6 = var6.t;
                        var6 = var6.R3BPHx;
                        var7 = var7.bind(var8)(var6);
                        var6 = 'label';
                        var2[var6] = var7;
                        var1 = var5.bind(var4)(var3, var2);
 137:
                        return var1;
                    }
                };
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var11.bind(var12)(var3, var4);
            var11 = var12.useCallback;
            var4 = new Array(2);
            var4[0] = var21;
            var4[1] = var7;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0006_ip = 22; continue _fun0006 }
 10:
                    var3 = _closure2_slot10;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0006_ip = 47; continue _fun0006;
 22:
                    var1 = _closure2_slot8;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 47; continue _fun0006 }
 37:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
 47:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var11.bind(var12)(var3, var4);
            if(!(var1 != var17)) { _fun0002_ip = 1617; continue _fun0002 }
 687:
            var4 = var1 == var14;
            var3 = undefined;
            if(var4) { _fun0002_ip = 711; continue _fun0002 }
 696:
            var11 = var14.getFieldMessage;
            var4 = 'username';
            var3 = var11.bind(var14)(var4);
 711:
            if(!(var1 == var3)) { _fun0002_ip = 742; continue _fun0002 }
 715:
            var11 = var1 == var14;
            var4 = undefined;
            if(var11) { _fun0002_ip = 739; continue _fun0002 }
 724:
            var12 = var14.getFieldMessage;
            var11 = 'discriminator';
            var4 = var12.bind(var14)(var11);
 739:
            var3 = var4;
 742:
            var16 = var2;
            if(!(var1 != var3)) { _fun0002_ip = 794; continue _fun0002 }
 749:
            var2 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 10;
            var4 = var12[var4];
            var4 = var11.bind(var5)(var4);
            var4 = var4.NameValidationState;
            var4 = var4.ERROR;
            var2['type'] = var4;
            var2['message'] = var3;
            var16 = var2;
 794:
            var4 = _closure1_slot10;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var15 = 22;
            var2 = var2[var15];
            var3 = var3.bind(var5)(var2);
            if(var21) { _fun0002_ip = 907; continue _fun0002 }
 821:
            var2 = {};
            var2['ref'] = var10;
            var11 = var24.discriminator;
            var2['style'] = var11;
            var11 = var24.discriminatorInput;
            var2['textStyle'] = var11;
            var11 = '#';
            var11 = var11 + var9;
            var2['value'] = var11;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 23;
            var11 = var14[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.ClearButtonVisibility;
            var11 = var11.NEVER;
            var2['clearButtonVisibility'] = var11;
            var2['editable'] = var6;
            _fun0002_ip = 1046; continue _fun0002;
 907:
            var6 = {};
            var6['ref'] = var10;
            var10 = var24.discriminator;
            var6['style'] = var10;
            var10 = var24.discriminatorInput;
            var6['textStyle'] = var10;
            var10 = 'numeric';
            var6['keyboardType'] = var10;
            var6['value'] = var9;
            var6['onChangeText'] = var8;
            var6['onSubmitEditing'] = var7;
            var7 = '1337';
            var6['placeholder'] = var7;
            var7 = 'done';
            var6['returnKeyType'] = var7;
            var7 = 'none';
            var6['autoCapitalize'] = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 23;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.ClearButtonVisibility;
            var7 = var7.WITH_CONTENT;
            var6['clearButtonVisibility'] = var7;
            var7 = function renderLeadingComponent() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-md/medium', 'children': '#'};
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['renderLeadingComponent'] = var7;
            var7 = 4;
            var6['maxLength'] = var7;
            var2 = var6;
 1046:
            var19 = var4.bind(var5)(var3, var2);
            var4 = _closure1_slot10;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var2 = 24;
            var2 = var26[var2];
            var2 = var25.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var8 = _closure1_slot11;
            var7 = _closure1_slot7;
            var6 = {'style': null, 'keyboardShouldPersistTaps': 'handled', 'alwaysBounceVertical': false};
            var9 = var24.background;
            var6['style'] = var9;
            var18 = _closure1_slot1;
            var9 = 25;
            var9 = var26[var9];
            var10 = var18.bind(var5)(var9);
            var9 = {};
            var10 = var4.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var11 = _closure1_slot6;
            var10 = {};
            var12 = var24.container;
            var10['style'] = var12;
            var12 = 26;
            var12 = var26[var12];
            var14 = var18.bind(var5)(var12);
            var12 = {};
            var20 = 12;
            var28 = var26[var20];
            var28 = var25.bind(var5)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var26[var20];
            var28 = var25.bind(var5)(var28);
            var28 = var28.t;
            var28 = var28.IEpCBQ;
            var28 = var29.bind(var30)(var28);
            var12['children'] = var28;
            var14 = var4.bind(var5)(var14, var12);
            var12 = new Array(3);
            var12[0] = var14;
            var14 = {};
            var28 = var24.inputs;
            var14['style'] = var28;
            var15 = var26[var15];
            var18 = var18.bind(var5)(var15);
            var15 = {};
            var28 = var24.username;
            var15['style'] = var28;
            var28 = var24.usernameInput;
            var15['textStyle'] = var28;
            var28 = 'username';
            var15['textContentType'] = var28;
            var28 = 'default';
            var15['keyboardType'] = var28;
            var15['value'] = var27;
            var27 = var17.hasUniqueUsername;
            var27 = var27.bind(var17)();
            var15['enableAndroidSanitizedInputWorkaround'] = var27;
            var23 = function onChangeText(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot1;
                    var3 = null;
                    var5 = var4;
                    if(!(var3 != var1)) { _fun0007_ip = 49; continue _fun0007 }
 19:
                    var6 = _closure2_slot1;
                    var1 = var6.hasUniqueUsername;
                    var1 = var1.bind(var6)();
                    var5 = var4;
                    if(!var1) { _fun0007_ip = 49; continue _fun0007 }
 39:
                    var1 = var4.toLowerCase;
                    var5 = var1.bind(var4)();
 49:
                    var4 = _closure2_slot5;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var5);
                    var4 = _closure2_slot2;
                    if(!var4) { _fun0007_ip = 76; continue _fun0007 }
 67:
                    var2 = _closure2_slot7;
                    var2 = var2.bind(var1)(var3);
 76:
                    return var1;
                }
            };
            var15['onChangeText'] = var23;
            var15['onSubmitEditing'] = var22;
            var22 = var26[var20];
            var22 = var25.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var20 = var26[var20];
            var20 = var25.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.IEpCBQ;
            var20 = var22.bind(var23)(var20);
            var15['placeholder'] = var20;
            var20 = 'done';
            if(!var21) { _fun0002_ip = 1401; continue _fun0002 }
 1397:
            var20 = 'next';
 1401:
            var15['returnKeyType'] = var20;
            var20 = 'none';
            var15['autoCapitalize'] = var20;
            var20 = true;
            var15['autoFocus'] = var20;
            var18 = var4.bind(var5)(var18, var15);
            var15 = new Array(3);
            var15[0] = var18;
            var18 = var17.hasUniqueUsername;
            var18 = var18.bind(var17)();
            var18 = !var18;
            if(!var18) { _fun0002_ip = 1500; continue _fun0002 }
 1452:
            var22 = _closure1_slot10;
            var21 = _closure1_slot6;
            var20 = {};
            var23 = var24.divider;
            var20['style'] = var23;
            var23 = {};
            var24 = var24.dividerInner;
            var23['style'] = var24;
            var23 = var22.bind(var5)(var21, var23);
            var20['children'] = var23;
            var18 = var22.bind(var5)(var21, var20);
 1500:
            var15[1] = var18;
            var18 = var17.hasUniqueUsername;
            var18 = var18.bind(var17)();
            var18 = !var18;
            if(!var18) { _fun0002_ip = 1523; continue _fun0002 }
 1520:
            var18 = var19;
 1523:
            var15[2] = var18;
            var14['children'] = var15;
            var14 = var8.bind(var5)(var11, var14);
            var12[1] = var14;
            var15 = _closure1_slot10;
            var14 = _closure1_slot13;
            var13 = {};
            var13['usernameStatus'] = var16;
            var16 = var17.hasUniqueUsername;
            var16 = var16.bind(var17)();
            var13['showHint'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[2] = var13;
            var10['children'] = var12;
            var10 = var8.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1617:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
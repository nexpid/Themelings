// app/modules/auth/native/components/RegisterDisplayName.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.updateRegistrationOptions;
    var _closure1_slot8 = var7;
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.RegisterTransitionSteps;
    var _closure1_slot10 = var7;
    var4 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_24;
    var9['marginTop'] = var13;
    var4['globalName'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var9['marginTop'] = var11;
    var4['button'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['page'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = ['discord', 'hypesquad', 'snowsgiving', 'system message', 'system mesage', 'sustem mesage', 'sustem message'];
    var _closure1_slot15 = var4;
    var4 = ['everyone', 'here'];
    var _closure1_slot16 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/RegisterDisplayName.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot14;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 11;
            var1 = var5[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot0 = var1;
            var8 = _closure1_slot5;
            var3 = var8.useState;
            var2 = false;
            var2 = var3.bind(var8)(var2);
            var11 = _closure1_slot4;
            var10 = 2;
            var2 = var11.bind(var4)(var2, var10);
            var7 = 0;
            var19 = var2[var7];
            var6 = 1;
            var2 = var2[var6];
            var _closure2_slot1 = var2;
            var3 = _closure1_slot9;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.errors;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var14 = var8.useState;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var1 = var1.registrationOptions;
                    var2 = var1.globalName;
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = '';
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2;
case 2:
                    return var1;
                }
            };
            var2 = var14.bind(var8)(var2);
            var2 = var11.bind(var4)(var2, var10);
            var16 = var2[var7];
            var _closure2_slot2 = var16;
            var2 = var2[var6];
            var _closure2_slot3 = var2;
            var6 = _closure1_slot16;
            var2 = var6.includes;
            var2 = var2.bind(var6)(var16);
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot15;
            var2 = var6.length;
            var2 = var7 < var2;
            var7 = 0;
            var15 = undefined;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = var6[var7];
            var2 = var16.toLowerCase;
            var10 = var2.bind(var16)();
            var2 = var10.includes;
            var2 = var2.bind(var10)(var11);
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var7 + 1;
            var2 = var6.length;
            var2 = var7 < var2;
            var15 = undefined;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 10:
            _fun0001_ip = 6; continue _fun0001;
case 8:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var6 = var11[var2];
            var6 = var10.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.WeJZy8;
            var15 = var6.bind(var7)(var2);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var6 = var11[var2];
            var6 = var10.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.WeJZy8;
            var15 = var6.bind(var7)(var2);
case 6:
            var6 = var8.useContext;
            var2 = 12;
            var2 = var5[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.TrackRegistrationContext;
            var10 = var6.bind(var8)(var2);
            var _closure2_slot4 = var10;
            var2 = _closure1_slot1;
            var6 = 13;
            var6 = var5[var6];
            var11 = var2.bind(var4)(var6);
            var6 = 14;
            var6 = var5[var6];
            var18 = var9.bind(var4)(var6);
            var14 = var18.getPreviousRegistrationTransitionStep;
            var6 = 15;
            var7 = var5[var6];
            var7 = var9.bind(var4)(var7);
            var7 = var7.AuthStates;
            var7 = var7.REGISTER_DISPLAY_NAME;
            var7 = var14.bind(var18)(var7);
            var7 = var11.bind(var4)(var7);
            var7 = 16;
            var7 = var5[var7];
            var7 = var2.bind(var4)(var7);
            var6 = var5[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.AuthStates;
            var6 = var6.REGISTER_DISPLAY_NAME;
            var6 = var7.bind(var4)(var6);
            var9 = var8.useEffect;
            var7 = new Array(1);
            var7[0] = var10;
            var6 = function() {
                var3 = _closure2_slot4;
                var2 = {};
                var4 = _closure1_slot10;
                var4 = var4.ACCOUNT_DISPLAY_NAME;
                var2['step'] = var4;
                var1 = _closure1_slot11;
                var1 = var1.VIEWED;
                var2['actionType'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var9.bind(var8)(var6, var7);
            var6 = var8.useRef;
            var14 = null;
            var21 = var6.bind(var8)(var14);
            var6 = 17;
            var6 = var5[var6];
            var7 = var2.bind(var4)(var6);
            var6 = {};
            var6['inputRef'] = var21;
            var6 = var7.bind(var4)(var6);
            var9 = var8.useCallback;
            var6 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            var7 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var5 = _closure1_slot8;
                            var3 = {};
                            var3['globalName'] = var7;
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var5 = _closure1_slot9;
                            var3 = var5.getState;
                            var3 = var3.bind(var5)();
                            var6 = var3.registrationOptions;
                            var8 = _closure2_slot4;
                            var5 = {};
                            var9 = _closure1_slot10;
                            var9 = var9.ACCOUNT_DISPLAY_NAME;
                            var5['step'] = var9;
                            var9 = _closure1_slot11;
                            var9 = var9.SUBMITTED;
                            var5['actionType'] = var9;
                            var5 = var8.bind(var2)(var5);
                            var8 = var6.username;
                            var5 = null;
                            var5 = var5 != var8;
                            if(!var5) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var8 = var6.username;
                            var6 = '';
                            var5 = var6 !== var8;
case 13:
                            if(var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var6 = _closure2_slot1;
                            var5 = true;
                            var5 = var6.bind(var2)(var5);
                            var6 = _closure1_slot7;
                            var5 = var6.wasRegistrationSuggestionFetched;
                            var5 = var5.bind(var6)(var7);
                            if(var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var5 = 18;
                            var5 = var8[var5];
                            var6 = var6.bind(var2)(var5);
                            var5 = var6.fetchSuggestionsRegistration;
                            var5 = var5.bind(var6)(var7);
                            SaveGenerator(address=194);
case 19:
                            return var5;
case 20:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(!var6) { _fun0003_ip = 17; continue _fun0003 }
case 21:
                            return var5;
case 17:
                            var6 = _closure2_slot1;
                            var5 = false;
                            var5 = var6.bind(var2)(var5);
case 15:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 14;
                            var4 = var8[var4];
                            var7 = var5.bind(var2)(var4);
                            var6 = var7.handleNextOrSubmitRegistration;
                            var4 = 15;
                            var4 = var8[var4];
                            var4 = var5.bind(var2)(var4);
                            var4 = var4.AuthStates;
                            var5 = var4.REGISTER_DISPLAY_NAME;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot4;
                            var3 = var6.bind(var7)(var5, var4, var3);
                            return var2;
case 11:
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
            var7 = var6.bind(var4)();
            var6 = new Array(2);
            var6[0] = var1;
            var6[1] = var10;
            var9 = var9.bind(var8)(var7, var6);
            var _closure2_slot5 = var9;
            var7 = var8.useLayoutEffect;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var1;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight() {
                    var4 = _closure1_slot12;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 19;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = 10;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.5WxrcX;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = function onPress() {
                        var3 = _closure2_slot5;
                        var2 = undefined;
                        var1 = null;
                        var1 = var3.bind(var2)(var1);
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
            var1 = var7.bind(var8)(var1, var6);
            var1 = 20;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = 'global_name';
            var1 = var2.bind(var4)(var1, var3);
            var18 = var15;
            if(!(var14 != var1)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var18 = var1;
case 22:
            var3 = _closure1_slot12;
            var6 = _closure1_slot1;
            var20 = _closure1_slot2;
            var1 = 21;
            var1 = var20[var1];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var5 = var13.page;
            var1['style'] = var5;
            var7 = _closure1_slot13;
            var5 = 22;
            var5 = var20[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var24 = _closure1_slot0;
            var22 = 10;
            var8 = var20[var22];
            var8 = var24.bind(var4)(var8);
            var10 = var8.intl;
            var9 = var10.string;
            var8 = var20[var22];
            var8 = var24.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.LYIh7u;
            var8 = var9.bind(var10)(var8);
            var5['headerText'] = var8;
            var9 = _closure1_slot6;
            var8 = {};
            var10 = var13.globalName;
            var8['style'] = var10;
            var10 = 23;
            var10 = var20[var10];
            var10 = var24.bind(var4)(var10);
            var11 = var10.TextInput;
            var10 = {};
            var10['ref'] = var21;
            var10['value'] = var16;
            var21 = function onChange(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var3 = _closure2_slot3;
                    var2 = var1.trim;
                    var4 = var2.bind(var1)();
                    var2 = '';
                    if(!(var2 !== var4)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var2 = var1;
case 24:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var10['onChange'] = var21;
            var21 = 'next';
            var10['returnKeyType'] = var21;
            var21 = function onSubmitEditing() {
                var3 = _closure2_slot5;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var10['onSubmitEditing'] = var21;
            var21 = 'nickname';
            var10['textContentType'] = var21;
            var10['errorMessage'] = var18;
            var21 = var20[var22];
            var21 = var24.bind(var4)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var20 = var20[var22];
            var20 = var24.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.9AjdkJ;
            var20 = var21.bind(var23)(var20);
            var10['label'] = var20;
            var20 = var14 == var18;
            var18 = undefined;
            if(!var20) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var24 = _closure1_slot0;
            var20 = _closure1_slot2;
            var21 = var20[var22];
            var21 = var24.bind(var4)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var20 = var20[var22];
            var20 = var24.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.fbKwSk;
            var18 = var21.bind(var23)(var20);
case 26:
            var10['description'] = var18;
            var18 = true;
            var10['isClearable'] = var18;
            var10 = var3.bind(var4)(var11, var10);
            var8['children'] = var10;
            var9 = var3.bind(var4)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot6;
            var9 = {};
            var13 = var13.button;
            var9['style'] = var13;
            var21 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 24;
            var12 = var18[var12];
            var12 = var21.bind(var4)(var12);
            var13 = var12.Button;
            var12 = {};
            var20 = 'lg';
            var12['size'] = var20;
            var12['loading'] = var19;
            var19 = var18[var22];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var18[var22];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.PDTjLC;
            var18 = var19.bind(var20)(var18);
            var12['text'] = var18;
            var17 = function onPress() {
                var3 = _closure2_slot5;
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onPress'] = var17;
            var14 = var14 != var15;
            if(var14) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var15 = var16.trim;
            var16 = var15.bind(var16)();
            var15 = '';
            var14 = var15 === var16;
case 28:
            var12['disabled'] = var14;
            var12 = var11.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
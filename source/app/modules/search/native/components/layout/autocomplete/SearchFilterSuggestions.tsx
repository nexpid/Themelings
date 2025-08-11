// app/modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function SearchFilterPrefixRow(arg1) {
        var5 = arg1;
        var10 = var5.text;
        var _closure2_slot0 = var10;
        var2 = var5.searchTokenType;
        var _closure2_slot1 = var2;
        var8 = var5.onPress;
        var _closure2_slot2 = var8;
        var4 = {'text': 0, 'searchTokenType': 0, 'onPress': 0};
        var14 = null;
        var15 = var4;
        var3 = silentSetPrototypeOf(var15, var14);
        var15 = {};
        var14 = var5;
        var13 = var4;
        var5 = copyDataProperties(var15, var14, var13);
        var9 = _closure1_slot4;
        var6 = var9.useMemo;
        var4 = new Array(1);
        var4[0] = var2;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var5 = undefined;
                var4 = var3.bind(var5)(var1);
                var3 = var4.getSearchTokenIcon;
                var1 = _closure2_slot1;
                var4 = var3.bind(var4)(var1);
                var1 = null;
                var3 = var1 != var4;
                if(!var3) { _fun0001_ip = 72; continue _fun0001 }
 52:
                var3 = _closure1_slot8;
                var2 = {};
                var6 = 'sm';
                var2['size'] = var6;
                var1 = var3.bind(var5)(var4, var2);
 72:
                return var1;
            }
        };
        var12 = var6.bind(var9)(var3, var4);
        var6 = _closure1_slot4;
        var4 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getSearchTokenSubLabel;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var4.bind(var6)(var2, var3);
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var10;
        var1 = function() {
            var3 = _closure2_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var9 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot8;
        var8 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 9;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var1['icon'] = var12;
        var1['onPress'] = var9;
        var9 = _closure1_slot8;
        var7 = 10;
        var7 = var11[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
        var7['children'] = var10;
        var7 = var9.bind(var3)(var8, var7);
        var1['label'] = var7;
        var1['subLabel'] = var6;
        var15 = var1;
        var14 = var5;
        var5 = copyDataProperties(var15, var14);
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function getSuggestionsKey(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.text;
            return var1;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.join;
        var1 = ' ';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function AnimatedEnterExitContainer(arg1) {
        var1 = arg1;
        var5 = var1.children;
        var11 = var1.state;
        var _closure2_slot0 = var11;
        var13 = var1.cleanUp;
        var _closure2_slot1 = var13;
        var15 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 11;
        var6 = var7[var1];
        var4 = undefined;
        var9 = var15.bind(var4)(var6);
        var8 = var9.useSharedValue;
        var6 = 0;
        var12 = var8.bind(var9)(var6);
        var _closure2_slot2 = var12;
        var6 = var7[var1];
        var9 = var15.bind(var4)(var6);
        var8 = var9.useAnimatedStyle;
        var6 = function u() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 12;
                var3 = var6[var4];
                var8 = undefined;
                var14 = var5.bind(var8)(var3);
                var13 = var14.withSpring;
                var7 = _closure2_slot2;
                var3 = var7.get;
                var12 = var3.bind(var7)();
                var9 = 13;
                var3 = var6[var9];
                var3 = var5.bind(var8)(var3);
                var19 = var3.springStandard;
                var10 = function t(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0003_ip = 54; continue _fun0003 }
 6:
                        var3 = _closure2_slot0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 14;
                        var4 = var4[var2];
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4);
                        var2 = var2.TransitionStates;
                        var2 = var2.YEETED;
                        var1 = var3 === var2;
 54:
                        if(!var1) { _fun0003_ip = 103; continue _fun0003 }
 57:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot1;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var2)();
 103:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = {};
                var16 = _closure2_slot0;
                var3['state'] = var16;
                var16 = 14;
                var16 = var6[var16];
                var16 = var5.bind(var8)(var16);
                var16 = var16.TransitionStates;
                var3['TransitionStates'] = var16;
                var16 = 11;
                var16 = var6[var16];
                var16 = var5.bind(var8)(var16);
                var16 = var16.runOnJS;
                var3['runOnJS'] = var16;
                var15 = _closure2_slot1;
                var3['cleanUp'] = var15;
                var10['__closure'] = var3;
                var3 = 10696166249954.0;
                var10['__workletHash'] = var3;
                var3 = _closure1_slot11;
                var10['__initData'] = var3;
                var18 = 'respect-motion-settings';
                var21 = var14;
                var20 = var12;
                var17 = var10;
                var3 = var21[var13](var20, var19, var18, var17, var16);
                var1['opacity'] = var3;
                var3 = {};
                var4 = var6[var4];
                var6 = var5.bind(var8)(var4);
                var5 = var6.withSpring;
                var4 = var7.get;
                var10 = var4.bind(var7)();
                var4 = -15;
                var7 = 1;
                if(!(var7 === var10)) { _fun0002_ip = 233; continue _fun0002 }
 231:
                var4 = 0;
 233:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var2 = var7.bind(var8)(var2);
                var2 = var2.springStandard;
                var2 = var5.bind(var6)(var4, var2);
                var3['translateY'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            }
        };
        var10 = {};
        var14 = 12;
        var14 = var7[var14];
        var14 = var15.bind(var4)(var14);
        var14 = var14.withSpring;
        var10['withSpring'] = var14;
        var10['opacity'] = var12;
        var14 = 13;
        var14 = var7[var14];
        var14 = var15.bind(var4)(var14);
        var14 = var14.springStandard;
        var10['springStandard'] = var14;
        var10['state'] = var11;
        var14 = 14;
        var14 = var7[var14];
        var14 = var15.bind(var4)(var14);
        var14 = var14.TransitionStates;
        var10['TransitionStates'] = var14;
        var14 = var7[var1];
        var14 = var15.bind(var4)(var14);
        var14 = var14.runOnJS;
        var10['runOnJS'] = var14;
        var10['cleanUp'] = var13;
        var6['__closure'] = var10;
        var10 = 334512108462.0;
        var6['__workletHash'] = var10;
        var10 = _closure1_slot10;
        var6['__initData'] = var10;
        var6 = var8.bind(var9)(var6);
        var10 = _closure1_slot4;
        var9 = var10.useEffect;
        var8 = new Array(2);
        var8[0] = var12;
        var8[1] = var11;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure2_slot2;
                var3 = var4.set;
                var6 = _closure2_slot0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var2 = var2.TransitionStates;
                var5 = var2.YEETED;
                var2 = 1;
                if(!(var6 === var5)) { _fun0004_ip = 62; continue _fun0004 }
 60:
                var2 = 0;
 62:
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var3 = var9.bind(var10)(var3, var8);
        var3 = _closure1_slot8;
        var2 = _closure1_slot1;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
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
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchFilterAddLocations;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 7;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_SURFACE_OVERLAY;
    var10['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var10['borderColor'] = var14;
    var10['borderWidth'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.shadows;
    var16 = var11.SHADOW_LOW;
    var17 = var10;
    var11 = copyDataProperties(var17, var16);
    var4['card'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}";
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = {};
    var8 = 'function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var4['code'] = var8;
    var _closure1_slot11 = var4;
    var4 = new Array(0);
    var _closure1_slot12 = var4;
    var4 = {};
    var8 = 'function SearchFilterSuggestionsTsx3(){const{dismissed}=this.__closure;return dismissed.get();}';
    var4['code'] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function SearchFilterSuggestionsTsx4(isDismissed){const{runOnJS,setSuggestions,EMPTY_SEARCH_FILTER_ROWS}=this.__closure;if(isDismissed){runOnJS(setSuggestions)(EMPTY_SEARCH_FILTER_ROWS);}}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = var7.memo;
    var2 = function SearchFilterSuggestions(arg1) {
        var2 = arg1;
        var9 = var2.searchContext;
        var _closure2_slot0 = var9;
        var6 = var2.onLayoutMeasure;
        var _closure2_slot1 = var6;
        var12 = var2.containerStyle;
        var _closure2_slot2 = var12;
        var14 = var2.dismissed;
        var _closure2_slot3 = var14;
        var2 = _closure1_slot9;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var _closure2_slot4 = var7;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 15;
        var3 = var8[var3];
        var10 = var2.bind(var4)(var3);
        var3 = var10.useEligibleFilterTokensSet;
        var16 = var3.bind(var10)(var9);
        var _closure2_slot5 = var16;
        var11 = _closure1_slot4;
        var10 = var11.useState;
        var3 = new Array(0);
        var11 = var10.bind(var11)(var3);
        var10 = _closure1_slot3;
        var3 = 2;
        var11 = var10.bind(var4)(var11, var3);
        var3 = 0;
        var3 = var11[var3];
        var _closure2_slot6 = var3;
        var10 = 1;
        var15 = var11[var10];
        var _closure2_slot7 = var15;
        var13 = _closure1_slot4;
        var11 = var13.useEffect;
        var10 = new Array(3);
        var10[0] = var16;
        var10[1] = var9;
        var10[2] = var15;
        var9 = function() {
            var5 = _closure1_slot6;
            var4 = var5.subscribeState;
            var3 = _closure2_slot0;
            var2 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var2 = var3.getTextInputValue;
                var2 = var2.bind(var3)();
                var1['textInputValue'] = var2;
                var2 = var3.isAutocompleteVisible;
                var2 = var2.bind(var3)();
                var1['isAutocompleteVisible'] = var2;
                return var1;
            };
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 183; continue _fun0005 }
 14:
                    var6 = var2.textInputValue;
                    var2 = var2.isAutocompleteVisible;
                    var3 = var6.trim;
                    var4 = var3.bind(var6)();
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0005_ip = 162; continue _fun0005 }
 44:
                    if(var2) { _fun0005_ip = 162; continue _fun0005 }
 47:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getSearchFilterSuggestions;
                    var5 = var4.bind(var5)(var6);
                    var _closure4_slot0 = var5;
                    var6 = var5.length;
                    var4 = 0;
                    if(!(var4 === var6)) { _fun0005_ip = 116; continue _fun0005 }
 98:
                    var4 = _closure2_slot7;
                    var2 = _closure1_slot12;
                    var2 = var4.bind(var3)(var2);
                    _fun0005_ip = 183; continue _fun0005;
 116:
                    var2 = new Array(0);
                    var _closure4_slot1 = var2;
                    var4 = var5.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = arg1;
                            var6 = arg2;
                            var7 = var1.text;
                            var8 = var1.token;
                            var2 = _closure2_slot5;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var8);
                            if(!var1) { _fun0006_ip = 155; continue _fun0006 }
 37:
                            var3 = _closure4_slot1;
                            var2 = var3.push;
                            var1 = {};
                            var1['text'] = var7;
                            var1['searchTokenType'] = var8;
                            var7 = 0;
                            var7 = var7 === var6;
                            var1['start'] = var7;
                            var4 = _closure4_slot0;
                            var7 = var4.length;
                            var4 = 1;
                            var4 = var7 - var4;
                            var4 = var6 === var4;
                            var1['end'] = var4;
                            var9 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 8;
                            var7 = var7[var6];
                            var6 = undefined;
                            var7 = var9.bind(var6)(var7);
                            var6 = var7.getSearchTokenPressHandler;
                            var5 = _closure2_slot0;
                            var4 = _closure1_slot7;
                            var4 = var4.SEARCH_INPUT_DROPDOWN;
                            var4 = var6.bind(var7)(var5, var8, var4);
                            var1['onPress'] = var4;
                            var1 = var2.bind(var3)(var1);
 155:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure2_slot7;
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            var6 = _closure1_slot16;
                            var5 = undefined;
                            var4 = var6.bind(var5)(var1);
                            var3 = _closure4_slot1;
                            var3 = var6.bind(var5)(var3);
                            if(!(var4 !== var3)) { _fun0007_ip = 37; continue _fun0007 }
 33:
                            var1 = _closure4_slot1;
 37:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 183; continue _fun0005;
 162:
                    var3 = _closure2_slot7;
                    var2 = _closure1_slot12;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 183:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var9 = var11.bind(var13)(var9, var10);
        var16 = 11;
        var9 = var8[var16];
        var13 = var2.bind(var4)(var9);
        var11 = var13.useAnimatedReaction;
        var10 = function O() {
            var2 = _closure2_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var9 = {};
        var9['dismissed'] = var14;
        var10['__closure'] = var9;
        var9 = 17191989548971.0;
        var10['__workletHash'] = var9;
        var9 = _closure1_slot13;
        var10['__initData'] = var9;
        var9 = function b(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = arg1;
                if(!var1) { _fun0008_ip = 57; continue _fun0008 }
 6:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var4.bind(var3)(var2);
                var4 = var5.runOnJS;
                var2 = _closure2_slot7;
                var2 = var4.bind(var5)(var2);
                var1 = _closure1_slot12;
                var1 = var2.bind(var3)(var1);
 57:
                var1 = undefined;
                return var1;
            }
        };
        var14 = {};
        var16 = var8[var16];
        var16 = var2.bind(var4)(var16);
        var16 = var16.runOnJS;
        var14['runOnJS'] = var16;
        var14['setSuggestions'] = var15;
        var15 = _closure1_slot12;
        var14['EMPTY_SEARCH_FILTER_ROWS'] = var15;
        var9['__closure'] = var14;
        var14 = 8991360021943.0;
        var9['__workletHash'] = var14;
        var14 = _closure1_slot14;
        var9['__initData'] = var14;
        var9 = var11.bind(var13)(var10, var9);
        var11 = _closure1_slot4;
        var10 = var11.useMemo;
        var9 = new Array(2);
        var9[0] = var12;
        var7 = var7.card;
        var9[1] = var7;
        var7 = function() {
            var1 = _closure2_slot4;
            var3 = var1.card;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = _closure2_slot2;
            var1[1] = var2;
            return var1;
        };
        var11 = var10.bind(var11)(var7, var9);
        var _closure2_slot8 = var11;
        var10 = _closure1_slot4;
        var9 = var10.useRef;
        var7 = null;
        var7 = var9.bind(var10)(var7);
        var _closure2_slot9 = var7;
        var10 = _closure1_slot4;
        var9 = var10.useCallback;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() {
            var1 = global;
            var3 = var1.setTimeout;
            var1 = undefined;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot9;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 38; continue _fun0009 }
 18:
                    var2 = var3.measure;
                    var1 = function(arg1, arg2, arg3, arg4, arg5, arg6) {
                        var4 = arg5;
                        var5 = arg6;
                        var3 = _closure2_slot1;
                        var2 = {};
                        var2['top'] = var5;
                        var1 = arg4;
                        var1 = var5 + var1;
                        var2['bottom'] = var1;
                        var2['left'] = var4;
                        var1 = arg3;
                        var1 = var4 + var1;
                        var2['right'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var10 = var9.bind(var10)(var6, var7);
        var _closure2_slot10 = var10;
        var9 = _closure1_slot4;
        var7 = var9.useMemo;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = _closure2_slot6;
                var3 = var1.length;
                var1 = 0;
                if(!(!(var3 > var1))) { _fun0010_ip = 24; continue _fun0010 }
 18:
                var1 = new Array(0);
                _fun0010_ip = 39; continue _fun0010;
 24:
                var3 = _closure2_slot6;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 39:
                return var1;
            }
        };
        var7 = var7.bind(var9)(var3, var6);
        var9 = _closure1_slot4;
        var6 = var9.useCallback;
        var3 = new Array(2);
        var3[0] = var11;
        var3[1] = var10;
        var1 = function(arg1, arg2, arg3, arg4) {
            var9 = arg2;
            var5 = _closure1_slot8;
            var4 = _closure1_slot17;
            var3 = {};
            var2 = arg3;
            var3['state'] = var2;
            var2 = arg4;
            var3['cleanUp'] = var2;
            var7 = _closure1_slot8;
            var6 = _closure1_slot5;
            var1 = {};
            var8 = _closure2_slot9;
            var1['ref'] = var8;
            var8 = _closure2_slot8;
            var1['style'] = var8;
            var8 = false;
            var1['collapsable'] = var8;
            var2 = _closure2_slot10;
            var1['onLayout'] = var2;
            var8 = var9.map;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot8;
                var4 = _closure1_slot15;
                var3 = {};
                var8 = var3;
                var7 = var1;
                var2 = copyDataProperties(var8, var7);
                var2 = var1.text;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var2 = var8.bind(var9)(var2);
            var1['children'] = var2;
            var2 = undefined;
            var1 = var7.bind(var2)(var6, var1);
            var3['children'] = var1;
            var1 = arg1;
            var1 = var5.bind(var2)(var4, var3, var1);
            return var1;
        };
        var6 = var6.bind(var9)(var1, var3);
        var3 = _closure1_slot8;
        var1 = 14;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.TransitionGroup;
        var1 = {};
        var1['items'] = var7;
        var1['renderItem'] = var6;
        var5 = _closure1_slot16;
        var1['getItemKey'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/layout/autocomplete/SearchFilterSuggestions.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
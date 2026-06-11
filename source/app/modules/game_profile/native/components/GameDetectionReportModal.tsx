// app/modules/game_profile/native/components/GameDetectionReportModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function ReportContent(arg1) {
        var1 = arg1;
        var13 = var1.applicationId;
        var _closure2_slot0 = var13;
        var2 = _closure1_slot11;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var _closure2_slot1 = var6;
        var3 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 6;
        var2 = var7[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useNavigation;
        var7 = var2.bind(var3)();
        var _closure2_slot2 = var7;
        var8 = _closure1_slot4;
        var3 = var8.useState;
        var2 = 'issue_selection';
        var3 = var3.bind(var8)(var2);
        var2 = _closure1_slot3;
        var14 = 2;
        var2 = var2.bind(var4)(var3, var14);
        var10 = 0;
        var16 = var2[var10];
        var _closure2_slot3 = var16;
        var8 = 1;
        var2 = var2[var8];
        var _closure2_slot4 = var2;
        var9 = _closure1_slot4;
        var3 = var9.useState;
        var2 = new Array(0);
        var3 = var3.bind(var9)(var2);
        var2 = _closure1_slot3;
        var2 = var2.bind(var4)(var3, var14);
        var9 = var2[var10];
        var _closure2_slot5 = var9;
        var2 = var2[var8];
        var _closure2_slot6 = var2;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var15 = '';
        var3 = var2.bind(var3)(var15);
        var2 = _closure1_slot3;
        var3 = var2.bind(var4)(var3, var14);
        var2 = var3[var10];
        var _closure2_slot7 = var2;
        var3 = var3[var8];
        var _closure2_slot8 = var3;
        var12 = _closure1_slot4;
        var11 = var12.useState;
        var3 = null;
        var11 = var11.bind(var12)(var3);
        var3 = _closure1_slot3;
        var3 = var3.bind(var4)(var11, var14);
        var12 = var3[var10];
        var _closure2_slot9 = var12;
        var3 = var3[var8];
        var _closure2_slot10 = var3;
        var11 = _closure1_slot4;
        var3 = var11.useState;
        var11 = var3.bind(var11)(var15);
        var3 = _closure1_slot3;
        var3 = var3.bind(var4)(var11, var14);
        var11 = var3[var10];
        var _closure2_slot11 = var11;
        var3 = var3[var8];
        var _closure2_slot12 = var3;
        var14 = _closure1_slot4;
        var10 = var14.useMemo;
        var8 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.generateViewId;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3 = new Array(0);
        var14 = var10.bind(var14)(var8, var3);
        var _closure2_slot13 = var14;
        var15 = _closure1_slot4;
        var10 = var15.useEffect;
        var8 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchDetectableGames;
            var4 = var2.bind(var3)();
            var3 = var4.then;
            var2 = _closure2_slot6;
            var4 = var3.bind(var4)(var2);
            var3 = var4.catch;
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = new Array(0);
        var3 = var10.bind(var15)(var8, var3);
        var15 = _closure1_slot4;
        var10 = var15.useCallback;
        var8 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.popWithKey;
            var2 = _closure1_slot10;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = new Array(0);
        var3 = var10.bind(var15)(var8, var3);
        var _closure2_slot14 = var3;
        var15 = _closure1_slot4;
        var10 = var15.useLayoutEffect;
        var8 = new Array(3);
        var8[0] = var16;
        var8[1] = var7;
        var8[2] = var3;
        var7 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot3;
                var2 = 'issue_selection';
                if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot3;
                var2 = 'game_search';
                if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure2_slot2;
                var3 = var5.setOptions;
                var2 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 10;
                var10 = var9[var6];
                var7 = undefined;
                var10 = var8.bind(var7)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.tdDpJj;
                var6 = var10.bind(var11)(var6);
                var2['title'] = var6;
                var6 = 13;
                var6 = var9[var6];
                var8 = var8.bind(var7)(var6);
                var7 = var8.getHeaderBackButton;
                var6 = function() {
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = 'issue_selection';
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
                var2['headerLeft'] = var6;
                var6 = function headerRight() {
                    var1 = null;
                    return var1;
                };
                var2['headerRight'] = var6;
                var2 = var3.bind(var5)(var2);
                _fun0001_ip = 6; continue _fun0001;
case 4:
                var5 = _closure2_slot2;
                var3 = var5.setOptions;
                var2 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 10;
                var10 = var9[var6];
                var7 = undefined;
                var10 = var8.bind(var7)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.TZgkxY;
                var6 = var10.bind(var11)(var6);
                var2['title'] = var6;
                var6 = 13;
                var6 = var9[var6];
                var8 = var8.bind(var7)(var6);
                var7 = var8.getHeaderBackButton;
                var6 = function() {
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = 'issue_selection';
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
                var2['headerLeft'] = var6;
                var6 = function headerRight() {
                    var1 = null;
                    return var1;
                };
                var2['headerRight'] = var6;
                var2 = var3.bind(var5)(var2);
                _fun0001_ip = 6; continue _fun0001;
case 2:
                var3 = _closure2_slot2;
                var2 = var3.setOptions;
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 10;
                var6 = var10[var5];
                var8 = undefined;
                var6 = var9.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var9.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5["6tnjbD"];
                var5 = var6.bind(var7)(var5);
                var1['title'] = var5;
                var5 = function headerLeft() {
                    var1 = null;
                    return var1;
                };
                var1['headerLeft'] = var5;
                var4 = function headerRight() {
                    var4 = _closure1_slot7;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 11;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = 12;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.XSmallIcon;
                    var1['IconComponent'] = var5;
                    var5 = 10;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.cpT0Cq;
                    var5 = var6.bind(var7)(var5);
                    var1['accessibilityLabel'] = var5;
                    var5 = _closure2_slot14;
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var10.bind(var15)(var7, var8);
        var10 = _closure1_slot4;
        var8 = var10.useCallback;
        var7 = new Array(6);
        var7[0] = var14;
        var7[1] = var13;
        var7[2] = var2;
        var7[3] = var12;
        var7[4] = var11;
        var7[5] = var3;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.trackGameProfileFeedback;
                var3 = {};
                var6 = _closure2_slot13;
                var3['viewId'] = var6;
                var6 = _closure2_slot0;
                var3['applicationId'] = var6;
                var7 = _closure2_slot7;
                var6 = var7.trim;
                var7 = var6.bind(var7)();
                var8 = '';
                var6 = undefined;
                if(!(var8 !== var7)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var9 = _closure2_slot7;
                var7 = var9.trim;
                var6 = var7.bind(var9)();
case 7:
                var3['suggestedGameName'] = var6;
                var7 = _closure2_slot9;
                var6 = null;
                var9 = var6 == var7;
                var7 = undefined;
                if(var9) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var9 = _closure2_slot9;
                var7 = var9.id;
case 9:
                var9 = var6 != var7;
                var6 = null;
                if(!var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var6 = var7;
case 11:
                var3['suggestedGameApplicationId'] = var6;
                var7 = _closure2_slot11;
                var6 = var7.trim;
                var7 = var6.bind(var7)();
                var6 = undefined;
                if(!(var8 !== var7)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var8 = _closure2_slot11;
                var7 = var8.trim;
                var6 = var7.bind(var8)();
case 13:
                var3['feedback'] = var6;
                var6 = true;
                var3['submitted'] = var6;
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot14;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var3 = var8.bind(var10)(var3, var7);
        var _closure2_slot15 = var3;
        var8 = _closure1_slot4;
        var7 = var8.useMemo;
        var3 = new Array(2);
        var3[0] = var9;
        var3[1] = var2;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure2_slot7;
                var3 = var4.trim;
                var4 = var3.bind(var4)();
                var3 = '';
                if(!(var3 !== var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var4 = _closure2_slot7;
                var3 = var4.toLowerCase;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var3 = _closure2_slot5;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.name;
                    var1 = var2.toLowerCase;
                    var3 = var1.bind(var2)();
                    var2 = var3.includes;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var2.bind(var3)(var1);
                var3 = var4.slice;
                var2 = 0;
                var1 = 10;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
case 15:
                var1 = new Array(0);
                return var1;
            }
        };
        var2 = var7.bind(var8)(var2, var3);
        var _closure2_slot16 = var2;
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.container;
        var1['style'] = var6;
        var6 = 'handled';
        var1['keyboardShouldPersistTaps'] = var6;
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure2_slot3;
                var2 = 'issue_selection';
                if(!(var2 !== var3)) { _fun0004_ip = 17; continue _fun0004 }
case 3:
                var2 = 'game_search';
                if(!(var2 !== var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var2 = 'other_feedback';
                if(!(var2 !== var3)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var2 = undefined;
                return var2;
case 20:
                var5 = _closure1_slot8;
                var4 = _closure1_slot9;
                var3 = {};
                var7 = _closure1_slot6;
                var6 = {};
                var12 = _closure2_slot1;
                var2 = var12.content;
                var6['style'] = var2;
                var13 = _closure1_slot7;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var2 = 14;
                var8 = var19[var2];
                var2 = undefined;
                var8 = var18.bind(var2)(var8);
                var10 = var8.Text;
                var8 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
                var14 = 10;
                var15 = var19[var14];
                var15 = var18.bind(var2)(var15);
                var17 = var15.intl;
                var16 = var17.string;
                var15 = var19[var14];
                var15 = var18.bind(var2)(var15);
                var15 = var15.t;
                var15 = var15.IblYEw;
                var15 = var16.bind(var17)(var15);
                var8['children'] = var15;
                var10 = var13.bind(var2)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var16 = _closure1_slot7;
                var10 = 19;
                var10 = var19[var10];
                var10 = var18.bind(var2)(var10);
                var13 = var10.TextArea;
                var10 = {};
                var15 = _closure2_slot11;
                var10['value'] = var15;
                var17 = _closure2_slot12;
                var10['onChange'] = var17;
                var17 = var19[var14];
                var17 = var18.bind(var2)(var17);
                var21 = var17.intl;
                var20 = var21.string;
                var17 = var19[var14];
                var17 = var18.bind(var2)(var17);
                var17 = var17.t;
                var17 = var17.aiPKV4;
                var17 = var20.bind(var21)(var17);
                var10['placeholder'] = var17;
                var17 = 300;
                var10['maxLength'] = var17;
                var10 = var16.bind(var2)(var13, var10);
                var8[1] = var10;
                var6['children'] = var8;
                var7 = var5.bind(var2)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var10 = _closure1_slot7;
                var8 = _closure1_slot6;
                var7 = {};
                var12 = var12.submitContainer;
                var7['style'] = var12;
                var13 = _closure1_slot7;
                var11 = 18;
                var11 = var19[var11];
                var11 = var18.bind(var2)(var11);
                var12 = var11.Button;
                var11 = {'variant': 'primary', 'size': 'md'};
                var16 = var19[var14];
                var16 = var18.bind(var2)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var19[var14];
                var14 = var18.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.geKm7t;
                var14 = var16.bind(var17)(var14);
                var11['text'] = var14;
                var14 = var15.trim;
                var15 = var14.bind(var15)();
                var14 = '';
                var14 = var14 === var15;
                var11['disabled'] = var14;
                var14 = _closure2_slot15;
                var11['onPress'] = var14;
                var11 = var13.bind(var2)(var12, var11);
                var7['children'] = var11;
                var7 = var10.bind(var2)(var8, var7);
                var6[1] = var7;
                var3['children'] = var6;
                var2 = var5.bind(var2)(var4, var3);
                return var2;
case 18:
                var5 = _closure1_slot8;
                var4 = _closure1_slot9;
                var3 = {};
                var7 = _closure1_slot6;
                var6 = {};
                var2 = _closure2_slot1;
                var2 = var2.content;
                var6['style'] = var2;
                var12 = _closure1_slot7;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 14;
                var8 = var14[var2];
                var2 = undefined;
                var8 = var17.bind(var2)(var8);
                var10 = var8.Text;
                var8 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
                var18 = 10;
                var13 = var14[var18];
                var13 = var17.bind(var2)(var13);
                var16 = var13.intl;
                var15 = var16.string;
                var13 = var14[var18];
                var13 = var17.bind(var2)(var13);
                var13 = var13.t;
                var13 = var13["79o/iq"];
                var13 = var15.bind(var16)(var13);
                var8['children'] = var13;
                var10 = var12.bind(var2)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var13 = _closure1_slot7;
                var10 = 17;
                var10 = var14[var10];
                var10 = var17.bind(var2)(var10);
                var12 = var10.TextInput;
                var10 = {};
                var15 = _closure2_slot7;
                var10['value'] = var15;
                var15 = function onChange(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var6 = arg1;
                        var3 = _closure2_slot8;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var6);
                        var4 = _closure2_slot9;
                        var3 = null;
                        var4 = var3 != var4;
                        if(!var4) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                        var5 = _closure2_slot9;
                        var5 = var5.name;
                        var4 = var6 !== var5;
case 22:
                        if(!var4) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                        var2 = _closure2_slot10;
                        var2 = var2.bind(var1)(var3);
case 24:
                        return var1;
                    }
                };
                var10['onChange'] = var15;
                var15 = var14[var18];
                var15 = var17.bind(var2)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14["/SGi7v"];
                var14 = var15.bind(var16)(var14);
                var10['placeholder'] = var14;
                var10 = var13.bind(var2)(var12, var10);
                var8[1] = var10;
                var10 = _closure2_slot16;
                var12 = var10.length;
                var10 = 0;
                var10 = var12 > var10;
                if(!var10) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var14 = _closure1_slot7;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = 15;
                var12 = var15[var12];
                var12 = var13.bind(var2)(var12);
                var13 = var12.TableRadioGroup;
                var12 = {};
                var16 = _closure2_slot9;
                var15 = null;
                var16 = var15 == var16;
                var15 = undefined;
                if(var16) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var16 = _closure2_slot9;
                var15 = var16.id;
case 28:
                var12['value'] = var15;
                var15 = function onChange(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var4 = _closure2_slot16;
                        var2 = var4.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var1 = var2.bind(var4)(var1);
                        var4 = null;
                        var5 = var4 != var1;
                        var2 = null;
                        if(!var5) { _fun0006_ip = 30; continue _fun0006 }
case 21:
                        var2 = var1;
case 30:
                        var5 = _closure2_slot10;
                        var1 = undefined;
                        var5 = var5.bind(var1)(var2);
                        if(!(var4 != var2)) { _fun0006_ip = 8; continue _fun0006 }
case 31:
                        var3 = _closure2_slot8;
                        var2 = var2.name;
                        var2 = var3.bind(var1)(var2);
case 8:
                        return var1;
                    }
                };
                var12['onChange'] = var15;
                var15 = false;
                var12['hasIcons'] = var15;
                var17 = _closure2_slot16;
                var16 = var17.map;
                var15 = function(arg1, arg2) {
                    var1 = arg1;
                    var5 = _closure1_slot7;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 16;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.TableRadioRow;
                    var2 = {};
                    var6 = var1.id;
                    var2['value'] = var6;
                    var6 = var1.name;
                    var2['label'] = var6;
                    var9 = var1.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var7 = '';
                    var6 = '-';
                    var1 = arg2;
                    var1 = var8.bind(var7)(var9, var6, var1);
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var15 = var16.bind(var17)(var15);
                var12['children'] = var15;
                var10 = var14.bind(var2)(var13, var12);
case 26:
                var8[2] = var10;
                var6['children'] = var8;
                var7 = var5.bind(var2)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var10 = _closure1_slot7;
                var8 = _closure1_slot6;
                var7 = {};
                var12 = _closure2_slot1;
                var12 = var12.submitContainer;
                var7['style'] = var12;
                var13 = _closure1_slot7;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 18;
                var11 = var14[var11];
                var11 = var17.bind(var2)(var11);
                var12 = var11.Button;
                var11 = {'variant': 'primary', 'size': 'md'};
                var15 = var14[var18];
                var15 = var17.bind(var2)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var2)(var14);
                var14 = var14.t;
                var14 = var14.geKm7t;
                var14 = var15.bind(var16)(var14);
                var11['text'] = var14;
                var15 = _closure2_slot7;
                var14 = var15.trim;
                var15 = var14.bind(var15)();
                var14 = '';
                var14 = var14 === var15;
                var11['disabled'] = var14;
                var14 = _closure2_slot15;
                var11['onPress'] = var14;
                var11 = var13.bind(var2)(var12, var11);
                var7['children'] = var11;
                var7 = var10.bind(var2)(var8, var7);
                var6[1] = var7;
                var3['children'] = var6;
                var2 = var5.bind(var2)(var4, var3);
                return var2;
case 17:
                var4 = _closure1_slot8;
                var3 = _closure1_slot6;
                var2 = {};
                var1 = _closure2_slot1;
                var1 = var1.content;
                var2['style'] = var1;
                var7 = _closure1_slot7;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 14;
                var5 = var17[var1];
                var1 = undefined;
                var5 = var16.bind(var1)(var5);
                var6 = var5.Text;
                var5 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
                var13 = 10;
                var8 = var17[var13];
                var8 = var16.bind(var1)(var8);
                var12 = var8.intl;
                var10 = var12.string;
                var8 = var17[var13];
                var8 = var16.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.IQHicr;
                var8 = var10.bind(var12)(var8);
                var5['children'] = var8;
                var6 = var7.bind(var1)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot8;
                var6 = 15;
                var6 = var17[var6];
                var6 = var16.bind(var1)(var6);
                var7 = var6.TableRadioGroup;
                var6 = {};
                var6['value'] = var1;
                var9 = function onChange(arg1) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = global;
                    var4 = var1.setTimeout;
                    var1 = undefined;
                    var3 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure2_slot4;
                            var4 = _closure4_slot0;
                            var2 = 'other_feedback';
                            var1 = 'wrong_game_shown';
                            if(!(var1 === var4)) { _fun0007_ip = 32; continue _fun0007 }
case 23:
                            var2 = 'game_search';
case 32:
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var2 = 100;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var6['onChange'] = var9;
                var9 = false;
                var6['hasIcons'] = var9;
                var14 = _closure1_slot7;
                var10 = 16;
                var9 = var17[var10];
                var9 = var16.bind(var1)(var9);
                var12 = var9.TableRadioRow;
                var9 = {};
                var15 = 'wrong_game_shown';
                var9['value'] = var15;
                var15 = var17[var13];
                var15 = var16.bind(var1)(var15);
                var19 = var15.intl;
                var18 = var19.string;
                var15 = var17[var13];
                var15 = var16.bind(var1)(var15);
                var15 = var15.t;
                var15 = var15.TZgkxY;
                var15 = var18.bind(var19)(var15);
                var9['label'] = var15;
                var12 = var14.bind(var1)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var12 = _closure1_slot7;
                var10 = var17[var10];
                var10 = var16.bind(var1)(var10);
                var11 = var10.TableRadioRow;
                var10 = {};
                var14 = 'other_feedback';
                var10['value'] = var14;
                var14 = var17[var13];
                var14 = var16.bind(var1)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var1)(var13);
                var13 = var13.t;
                var13 = var13.tdDpJj;
                var13 = var14.bind(var15)(var13);
                var10['label'] = var13;
                var10 = var12.bind(var1)(var11, var10);
                var9[1] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5 = var5.bind(var4)();
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var11 = 1;
    var5 = var7[var11];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.ScrollView;
    var _closure1_slot5 = var5;
    var2 = var2.View;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot7 = var5;
    var5 = var2.jsxs;
    var _closure1_slot8 = var5;
    var2 = var2.Fragment;
    var _closure1_slot9 = var2;
    var2 = 'game-detection-report';
    var _closure1_slot10 = var2;
    var5 = 4;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 5;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var10['backgroundColor'] = var13;
    var5['container'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var10['padding'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_24;
    var10['gap'] = var13;
    var5['content'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_16;
    var10['padding'] = var11;
    var5['submitContainer'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/game_profile/native/components/GameDetectionReportModal.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GameDetectionReportModal(arg1) {
        var1 = arg1;
        var7 = var1.applicationId;
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var3 = function() {
            var1 = {};
            var3 = {};
            var2 = function render(arg1) {
                var4 = _closure1_slot7;
                var3 = _closure1_slot12;
                var2 = {};
                var5 = arg1;
                var6 = var2;
                var1 = copyDataProperties(var6, var5);
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var3['render'] = var2;
            var2 = 'REPORT';
            var1[1] = var3;
            return var1;
        };
        var2 = new Array(0);
        var5 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot7;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 20;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var5;
        var6 = {};
        var5 = 'REPORT';
        var6['name'] = var5;
        var5 = {};
        var5['applicationId'] = var7;
        var6['params'] = var5;
        var5 = new Array(1);
        var5[0] = var6;
        var1['initialRouteStack'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['MODAL_KEY'] = var2;
    return var1;
})();
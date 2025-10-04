// app/modules/user_settings/native/SettingsQuestPreviewScreen.tsx
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
    var14 = 1;
    var7 = var6[var14];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var7 = var4.jsxs;
    var _closure1_slot11 = var7;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var10 = 6;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.spacing;
    var12 = var4.PX_16;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var14;
    var4['container'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var12;
    var13 = var12 / var13;
    var9['paddingTop'] = var13;
    var9['paddingBottom'] = var12;
    var4['controlBarContainer'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var12;
    var4['segmentedControlContainer'] = var9;
    var9 = {'flex': 1, 'width': '100%'};
    var4['pagesContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9['marginTop'] = var12;
    var4['activityIndicator'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_80;
    var9['marginBottom'] = var10;
    var4['allSectionsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/SettingsQuestPreviewScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SettingsQuestPreviewScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useRoute;
            var1 = var1.bind(var3)();
            var3 = var1.params;
            var _closure2_slot0 = var3;
            var1 = _closure1_slot13;
            var8 = var1.bind(var5)();
            var _closure2_slot1 = var8;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var10 = null;
            var9 = var10 == var3;
            var1 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.questId;
case 2:
            var4 = var4.bind(var7)(var1);
            var1 = _closure1_slot3;
            var14 = 2;
            var1 = var1.bind(var5)(var4, var14);
            var19 = 0;
            var17 = var1[var19];
            var _closure2_slot2 = var17;
            var11 = 1;
            var16 = var1[var11];
            var _closure2_slot3 = var16;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 9;
            var7 = var1[var9];
            var18 = var4.bind(var5)(var7);
            var15 = var18.useStateFromStores;
            var7 = _closure1_slot8;
            var13 = new Array(1);
            var13[0] = var7;
            var12 = new Array(1);
            var12[0] = var17;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot8;
                    var3 = var4.getQuest;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var12 = var15.bind(var18)(var13, var7, var12);
            var _closure2_slot4 = var12;
            var1 = var1[var9];
            var13 = var4.bind(var5)(var1);
            var7 = var13.useStateFromStores;
            var1 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.theme;
                return var1;
            };
            var1 = var7.bind(var13)(var4, var1);
            var _closure2_slot5 = var1;
            var13 = _closure1_slot4;
            var15 = var13.useCallback;
            var7 = new Array(1);
            var7[0] = var12;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.QuestCardPreview;
                    var2 = {};
                    var6 = _closure2_slot4;
                    var2['quest'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 6:
                    return var1;
                }
            };
            var18 = var15.bind(var13)(var4, var7);
            var _closure2_slot6 = var18;
            var7 = var13.useCallback;
            var4 = new Array(3);
            var4[0] = var17;
            var4[1] = var1;
            var15 = var10 == var12;
            var1 = undefined;
            if(var15) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var12.userStatus;
case 8:
            var4[2] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 7:
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot5;
                    var2 = _closure2_slot4;
                    var2 = var1 == var2;
                    var6 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var2 = _closure2_slot4;
                    var2 = var2.userStatus;
                    var3 = var1 == var2;
                    var8 = undefined;
                    if(var3) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                    var8 = var2.completedAt;
case 11:
                    var2 = _closure2_slot4;
                    var2 = var1 == var2;
                    var5 = undefined;
                    if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var2 = _closure2_slot4;
                    var2 = var2.userStatus;
                    var3 = var1 == var2;
                    var5 = undefined;
                    if(var3) { _fun0004_ip = 14; continue _fun0004 }
case 16:
                    var5 = var2.progress;
case 14:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var18 = '';
                    var2 = '-';
                    var17 = var10;
                    var16 = var2;
                    var15 = var9;
                    var14 = var2;
                    var13 = var8;
                    var12 = var2;
                    var11 = var5;
                    var5 = var18[var4](var17, var16, var15, var14, var13, var12, var11, var10);
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 11;
                    var2 = var8[var2];
                    var2 = var3.bind(var6)(var2);
                    var3 = var2.QuestEmbedPreview;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var2['questId'] = var7;
                    var2 = var4.bind(var6)(var3, var2, var5);
                    return var2;
case 10:
                    return var1;
                }
            };
            var15 = var7.bind(var13)(var1, var4);
            var _closure2_slot7 = var15;
            var7 = _closure1_slot4;
            var13 = var7.useCallback;
            var4 = function() {
                var1 = null;
                return var1;
            };
            var1 = new Array(0);
            var1 = var13.bind(var7)(var4, var1);
            var _closure2_slot8 = var1;
            var13 = var7.useMemo;
            var4 = new Array(6);
            var4[0] = var12;
            var4[1] = var17;
            var4[2] = var18;
            var4[3] = var15;
            var4[4] = var1;
            var1 = var8.allSectionsContainer;
            var4[5] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = {};
                    var1 = 'all';
                    var2['id'] = var1;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 12;
                    var3 = var1[var9];
                    var4 = undefined;
                    var3 = var7.bind(var4)(var3);
                    var6 = var3.intl;
                    var3 = var6.string;
                    var1 = var1[var9];
                    var1 = var7.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.Y9DnPT;
                    var1 = var3.bind(var6)(var1);
                    var2['label'] = var1;
                    var1 = _closure2_slot4;
                    var7 = null;
                    var6 = var7 != var1;
                    var1 = null;
                    if(!var6) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var6 = _closure2_slot2;
                    var6 = var7 != var6;
                    var1 = null;
                    if(!var6) { _fun0005_ip = 17; continue _fun0005 }
case 19:
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot5;
                    var6 = {};
                    var10 = _closure2_slot1;
                    var10 = var10.allSectionsContainer;
                    var6['style'] = var10;
                    var10 = _closure2_slot6;
                    var11 = var10.bind(var4)();
                    var10 = new Array(2);
                    var10[0] = var11;
                    var11 = _closure2_slot7;
                    var11 = var11.bind(var4)();
                    var10[1] = var11;
                    var6['children'] = var10;
                    var1 = var8.bind(var4)(var7, var6);
case 17:
                    var2['page'] = var1;
                    var1 = new Array(4);
                    var1[0] = var2;
                    var2 = {};
                    var6 = 'bar';
                    var2['id'] = var6;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = var5[var9];
                    var6 = var8.bind(var4)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var5[var9];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.t;
                    var6 = var6.uL4oBQ;
                    var6 = var7.bind(var10)(var6);
                    var2['label'] = var6;
                    var6 = _closure2_slot8;
                    var6 = var6.bind(var4)();
                    var2['page'] = var6;
                    var1[1] = var2;
                    var2 = {};
                    var6 = 'card';
                    var2['id'] = var6;
                    var6 = var5[var9];
                    var6 = var8.bind(var4)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var5[var9];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.t;
                    var6 = var6.MAvIf3;
                    var6 = var7.bind(var10)(var6);
                    var2['label'] = var6;
                    var6 = _closure2_slot6;
                    var6 = var6.bind(var4)();
                    var2['page'] = var6;
                    var1[2] = var2;
                    var2 = {};
                    var6 = 'embed';
                    var2['id'] = var6;
                    var6 = var5[var9];
                    var6 = var8.bind(var4)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var5[var9];
                    var5 = var8.bind(var4)(var5);
                    var5 = var5.t;
                    var5 = var5.AswoU1;
                    var5 = var6.bind(var7)(var5);
                    var2['label'] = var5;
                    var3 = _closure2_slot7;
                    var3 = var3.bind(var4)();
                    var2['page'] = var3;
                    var1[3] = var2;
                    return var1;
                }
            };
            var1 = var13.bind(var7)(var1, var4);
            var _closure2_slot9 = var1;
            var4 = var7.useState;
            var4 = var4.bind(var7)(var19);
            var13 = _closure1_slot3;
            var4 = var13.bind(var5)(var4, var14);
            var20 = var4[var19];
            var4 = var4[var11];
            var _closure2_slot10 = var4;
            var4 = var7.useState;
            var4 = var4.bind(var7)(var19);
            var4 = var13.bind(var5)(var4, var14);
            var13 = var4[var19];
            var _closure2_slot11 = var13;
            var15 = var4[var11];
            var14 = var7.useCallback;
            var11 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var3 = var1.width;
                var2 = _closure2_slot10;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var4 = new Array(0);
            var18 = var14.bind(var7)(var11, var4);
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 13;
            var4 = var14[var4];
            var14 = var11.bind(var5)(var4);
            var11 = var14.useSegmentedControlState;
            var4 = {};
            var4['items'] = var1;
            var4['pageWidth'] = var20;
            var4['defaultIndex'] = var19;
            var4['onPageChange'] = var15;
            var20 = var11.bind(var14)(var4);
            var11 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = _closure2_slot11;
                    var1 = var2[var1];
                    var2 = null;
                    var2 = var2 == var1;
                    var3 = undefined;
                    if(var2) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var3 = var1.id;
case 20:
                    var1 = 'all';
                    var1 = var1 === var3;
                    if(var1) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var2 = 'bar';
                    var1 = var2 === var3;
case 22:
                    return var1;
                }
            };
            var11 = var11.bind(var7)(var1, var4);
            var4 = var7.useEffect;
            var13 = var10 == var3;
            var1 = undefined;
            if(var13) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var1 = var3.questId;
case 24:
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var5 = _closure2_slot0;
                    var3 = var5.questId;
case 26:
                    if(!(var4 != var3)) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var2 = var2.questId;
                    var2 = var3.bind(var1)(var2);
case 28:
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var7 = _closure1_slot4;
            var4 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var17;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 28; continue _fun0008 }
case 30:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchQuestPreview;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var4 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var17;
            var1 = function() {
                var5 = function listener(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.quest_id;
                        var3 = _closure2_slot2;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                        var3 = _closure2_slot2;
                        var2 = var4 === var3;
case 31:
                        if(!var2) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 14;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.fetchQuestPreview;
                        var1 = _closure2_slot2;
                        var1 = var2.bind(var3)(var1);
case 33:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 15;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.subscribe;
                var2 = 'QUEST_PREVIEW_UPDATE';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.unsubscribe;
                    var3 = _closure3_slot0;
                    var2 = 'QUEST_PREVIEW_UPDATE';
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                };
                return var1;
            };
            var1 = var4.bind(var7)(var1, var3);
            var4 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var17;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 28; continue _fun0010 }
case 30:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchQuestPreview;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var4.bind(var7)(var1, var3);
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = var4[var9];
            var21 = var7.bind(var5)(var1);
            var19 = var21.useStateFromStores;
            var3 = _closure1_slot8;
            var14 = new Array(1);
            var14[0] = var3;
            var13 = new Array(1);
            var13[0] = var17;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0011_ip = 35; continue _fun0011 }
case 7:
                    var4 = _closure1_slot8;
                    var3 = var4.isFetchingQuestPreview;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 35:
                    return var1;
                }
            };
            var1 = var19.bind(var21)(var14, var1, var13);
            var4 = var4[var9];
            var9 = var7.bind(var5)(var4);
            var7 = var9.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var17;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0012_ip = 35; continue _fun0012 }
case 7:
                    var4 = _closure1_slot8;
                    var3 = var4.getFetchQuestPreviewError;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
case 35:
                    return var1;
                }
            };
            var9 = var7.bind(var9)(var4, var2, var3);
            if(!var1) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            if(!(var10 != var12)) { _fun0001_ip = 38; continue _fun0001 }
case 36:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var4 = var8.container;
            var1['style'] = var4;
            var7 = _closure1_slot10;
            var4 = {};
            var13 = var8.controlBarContainer;
            var4['style'] = var13;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 16;
            var13 = var19[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.MobileQuestPreviewControlBar;
            var13 = {};
            var13['questId'] = var17;
            var13['setQuestId'] = var16;
            var13['refreshQuest'] = var15;
            var13 = var7.bind(var5)(var14, var13);
            var4['children'] = var13;
            var7 = var7.bind(var5)(var2, var4);
            var4 = new Array(3);
            var4[0] = var7;
            var7 = var10 != var12;
            if(!var7) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var7 = var10 == var9;
case 39:
            if(!var7) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var13 = _closure1_slot11;
            var10 = _closure1_slot12;
            var9 = {};
            var17 = _closure1_slot10;
            var15 = _closure1_slot5;
            var14 = {};
            var16 = var8.segmentedControlContainer;
            var14['style'] = var16;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 17;
            var16 = var21[var16];
            var16 = var19.bind(var5)(var16);
            var22 = var16.SegmentedControl;
            var16 = {};
            var16['state'] = var20;
            var16 = var17.bind(var5)(var22, var16);
            var14['children'] = var16;
            var15 = var17.bind(var5)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var16 = _closure1_slot7;
            var15 = {};
            var22 = var8.pagesContainer;
            var15['style'] = var22;
            var15['onLayout'] = var18;
            var18 = 18;
            var18 = var21[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.SegmentedControlPages;
            var18 = {};
            var18['state'] = var20;
            var18 = var17.bind(var5)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var9['children'] = var14;
            var7 = var13.bind(var5)(var10, var9);
case 41:
            var4[1] = var7;
            var10 = _closure1_slot10;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 19;
            var7 = var13[var7];
            var7 = var9.bind(var5)(var7);
            var9 = var7.QuestBarPreview;
            var7 = {};
            var7['quest'] = var12;
            var7['isVisible'] = var11;
            var7 = var10.bind(var5)(var9, var7);
            var4[2] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 43; continue _fun0001;
case 38:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var8.container;
            var2['style'] = var7;
            var7 = _closure1_slot6;
            var6 = {'animating': true, 'size': 'large'};
            var8 = var8.activityIndicator;
            var6['style'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 43:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
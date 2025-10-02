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
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var7 = var4.ScrollView;
    var _closure1_slot6 = var7;
    var4 = var4.ActivityIndicator;
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
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var10 = 6;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.spacing;
    var12 = var4.PX_16;
    var _closure1_slot12 = var12;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {'flex': 1, 'overflow': 'visible'};
    var4['scrollView'] = var9;
    var9 = {'padding': null, 'flex': 1, 'overflow': 'visible'};
    var9['padding'] = var12;
    var4['content'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var4['title'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9['marginTop'] = var12;
    var4['activityIndicator'] = var9;
    var9 = {'flex': 1, 'width': '100%'};
    var4['tabsContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_80;
    var9['marginBottom'] = var10;
    var4['allSectionsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/SettingsQuestPreviewScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SettingsQuestPreviewScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            var16 = null;
            var9 = var16 == var3;
            var1 = undefined;
            if(var9) { _fun0001_ip = 85; continue _fun0001 }
 79:
            var1 = var3.questId;
 85:
            var4 = var4.bind(var7)(var1);
            var1 = _closure1_slot3;
            var21 = 2;
            var1 = var1.bind(var5)(var4, var21);
            var15 = 0;
            var19 = var1[var15];
            var _closure2_slot2 = var19;
            var10 = 1;
            var18 = var1[var10];
            var _closure2_slot3 = var18;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 9;
            var7 = var1[var9];
            var14 = var4.bind(var5)(var7);
            var13 = var14.useStateFromStores;
            var7 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var7;
            var11 = new Array(1);
            var11[0] = var19;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 40; continue _fun0002 }
 18:
                    var4 = _closure1_slot8;
                    var3 = var4.getQuest;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var12 = var13.bind(var14)(var12, var7, var11);
            var _closure2_slot4 = var12;
            var1 = var1[var9];
            var11 = var4.bind(var5)(var1);
            var7 = var11.useStateFromStores;
            var1 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.theme;
                return var1;
            };
            var1 = var7.bind(var11)(var4, var1);
            var _closure2_slot5 = var1;
            var11 = _closure1_slot4;
            var13 = var11.useCallback;
            var7 = new Array(1);
            var7[0] = var12;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0003_ip = 68; continue _fun0003 }
 16:
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
 68:
                    return var1;
                }
            };
            var14 = var13.bind(var11)(var4, var7);
            var _closure2_slot6 = var14;
            var7 = var11.useCallback;
            var4 = new Array(3);
            var4[0] = var19;
            var4[1] = var1;
            var13 = var16 == var12;
            var1 = undefined;
            if(var13) { _fun0001_ip = 296; continue _fun0001 }
 290:
            var1 = var12.userStatus;
 296:
            var4[2] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 201; continue _fun0004 }
 16:
                    var10 = _closure2_slot2;
                    var9 = _closure2_slot5;
                    var2 = _closure2_slot4;
                    var2 = var1 == var2;
                    var6 = undefined;
                    var8 = undefined;
                    if(var2) { _fun0004_ip = 64; continue _fun0004 }
 39:
                    var2 = _closure2_slot4;
                    var2 = var2.userStatus;
                    var3 = var1 == var2;
                    var8 = undefined;
                    if(var3) { _fun0004_ip = 64; continue _fun0004 }
 58:
                    var8 = var2.completedAt;
 64:
                    var2 = _closure2_slot4;
                    var2 = var1 == var2;
                    var5 = undefined;
                    if(var2) { _fun0004_ip = 102; continue _fun0004 }
 77:
                    var2 = _closure2_slot4;
                    var2 = var2.userStatus;
                    var3 = var1 == var2;
                    var5 = undefined;
                    if(var3) { _fun0004_ip = 102; continue _fun0004 }
 96:
                    var5 = var2.progress;
 102:
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
 201:
                    return var1;
                }
            };
            var13 = var7.bind(var11)(var1, var4);
            var _closure2_slot7 = var13;
            var7 = _closure1_slot4;
            var11 = var7.useCallback;
            var4 = function() {
                var1 = null;
                return var1;
            };
            var1 = new Array(0);
            var1 = var11.bind(var7)(var4, var1);
            var _closure2_slot8 = var1;
            var11 = var7.useMemo;
            var4 = new Array(6);
            var4[0] = var12;
            var4[1] = var19;
            var4[2] = var14;
            var4[3] = var13;
            var4[4] = var1;
            var1 = var8.allSectionsContainer;
            var4[5] = var1;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                    if(!var6) { _fun0005_ip = 169; continue _fun0005 }
 94:
                    var6 = _closure2_slot2;
                    var6 = var7 != var6;
                    var1 = null;
                    if(!var6) { _fun0005_ip = 169; continue _fun0005 }
 107:
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
 169:
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
                    var6 = var6.rjVPdH;
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
            var1 = var11.bind(var7)(var1, var4);
            var _closure2_slot9 = var1;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 13;
            var4 = var13[var4];
            var4 = var11.bind(var5)(var4);
            var4 = var4.bind(var5)();
            var20 = var4.width;
            var4 = var7.useState;
            var11 = var4.bind(var7)(var15);
            var4 = _closure1_slot3;
            var4 = var4.bind(var5)(var11, var21);
            var11 = var4[var15];
            var _closure2_slot10 = var11;
            var14 = var4[var10];
            var10 = _closure1_slot0;
            var4 = 14;
            var4 = var13[var4];
            var13 = var10.bind(var5)(var4);
            var10 = var13.useSegmentedControlState;
            var4 = {};
            var4['items'] = var1;
            var17 = _closure1_slot12;
            var17 = var21 * var17;
            var17 = var20 - var17;
            var4['pageWidth'] = var17;
            var4['defaultIndex'] = var15;
            var4['onPageChange'] = var14;
            var23 = var10.bind(var13)(var4);
            var10 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var11;
            var4[1] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot9;
                    var1 = _closure2_slot10;
                    var1 = var2[var1];
                    var2 = null;
                    var2 = var2 == var1;
                    var3 = undefined;
                    if(var2) { _fun0006_ip = 31; continue _fun0006 }
 26:
                    var3 = var1.id;
 31:
                    var1 = 'all';
                    var1 = var1 === var3;
                    if(var1) { _fun0006_ip = 50; continue _fun0006 }
 42:
                    var2 = 'bar';
                    var1 = var2 === var3;
 50:
                    return var1;
                }
            };
            var11 = var10.bind(var7)(var1, var4);
            var4 = var7.useEffect;
            var10 = var16 == var3;
            var1 = undefined;
            if(var10) { _fun0001_ip = 575; continue _fun0001 }
 569:
            var1 = var3.questId;
 575:
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0007_ip = 30; continue _fun0007 }
 20:
                    var5 = _closure2_slot0;
                    var3 = var5.questId;
 30:
                    if(!(var4 != var3)) { _fun0007_ip = 53; continue _fun0007 }
 34:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var2 = var2.questId;
                    var2 = var3.bind(var1)(var2);
 53:
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var7 = _closure1_slot4;
            var4 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var19;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 53; continue _fun0008 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchQuestPreview;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var4 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var19;
            var1 = function() {
                var5 = function listener(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.quest_id;
                        var3 = _closure2_slot2;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0009_ip = 33; continue _fun0009 }
 25:
                        var3 = _closure2_slot2;
                        var2 = var4 === var3;
 33:
                        if(!var2) { _fun0009_ip = 76; continue _fun0009 }
 36:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.fetchQuestPreview;
                        var1 = _closure2_slot2;
                        var1 = var2.bind(var3)(var1);
 76:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.subscribe;
                var2 = 'QUEST_PREVIEW_UPDATE';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
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
            var3[0] = var19;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0010_ip = 53; continue _fun0010 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchQuestPreview;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var4.bind(var7)(var1, var3);
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = var4[var9];
            var15 = var7.bind(var5)(var1);
            var14 = var15.useStateFromStores;
            var3 = _closure1_slot8;
            var13 = new Array(1);
            var13[0] = var3;
            var10 = new Array(1);
            var10[0] = var19;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0011_ip = 38; continue _fun0011 }
 16:
                    var4 = _closure1_slot8;
                    var3 = var4.isFetchingQuestPreview;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var1 = var14.bind(var15)(var13, var1, var10);
            var4 = var4[var9];
            var9 = var7.bind(var5)(var4);
            var7 = var9.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var19;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0012_ip = 38; continue _fun0012 }
 16:
                    var4 = _closure1_slot8;
                    var3 = var4.getFetchQuestPreviewError;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var15 = var7.bind(var9)(var4, var2, var3);
            if(!var1) { _fun0001_ip = 788; continue _fun0001 }
 781:
            if(!(var16 != var12)) { _fun0001_ip = 1134; continue _fun0001 }
 788:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var4 = var8.container;
            var1['style'] = var4;
            var9 = _closure1_slot10;
            var7 = _closure1_slot6;
            var4 = {};
            var10 = var8.scrollView;
            var4['style'] = var10;
            var10 = {};
            var13 = var8.content;
            var10['style'] = var13;
            var14 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 17;
            var13 = var20[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.MobileQuestPreviewControlBar;
            var13 = {};
            var13['questId'] = var19;
            var13['setQuestId'] = var18;
            var13['refreshQuest'] = var17;
            var14 = var9.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = var16 != var12;
            if(!var14) { _fun0001_ip = 906; continue _fun0001 }
 902:
            var14 = var16 == var15;
 906:
            if(!var14) { _fun0001_ip = 1038; continue _fun0001 }
 912:
            var17 = _closure1_slot11;
            var16 = _closure1_slot5;
            var15 = {};
            var20 = _closure1_slot10;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var18 = 18;
            var18 = var24[var18];
            var18 = var22.bind(var5)(var18);
            var19 = var18.SegmentedControl;
            var18 = {};
            var18['state'] = var23;
            var19 = var20.bind(var5)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = {};
            var21 = var8.tabsContainer;
            var19['style'] = var21;
            var21 = 19;
            var21 = var24[var21];
            var21 = var22.bind(var5)(var21);
            var22 = var21.SegmentedControlPages;
            var21 = {};
            var21['state'] = var23;
            var21 = var20.bind(var5)(var22, var21);
            var19['children'] = var21;
            var19 = var20.bind(var5)(var16, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var5)(var16, var15);
 1038:
            var13[1] = var14;
            var10['children'] = var13;
            var10 = var3.bind(var5)(var2, var10);
            var4['children'] = var10;
            var7 = var9.bind(var5)(var7, var4);
            var4 = new Array(2);
            var4[0] = var7;
            var10 = _closure1_slot10;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 20;
            var7 = var13[var7];
            var7 = var9.bind(var5)(var7);
            var9 = var7.QuestBarPreview;
            var7 = {};
            var7['quest'] = var12;
            var7['isVisible'] = var11;
            var7 = var10.bind(var5)(var9, var7);
            var4[1] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 1197; continue _fun0001;
 1134:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var8.container;
            var2['style'] = var7;
            var7 = _closure1_slot7;
            var6 = {'animating': true, 'size': 'large'};
            var8 = var8.activityIndicator;
            var6['style'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1197:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/main_tabs_v2/native/settings/screens/SettingsQuestPreviewScreen.tsx
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
    var7 = var6[var12];
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
    var7 = var4.ActivityIndicator;
    var _closure1_slot7 = var7;
    var14 = var4.StyleSheet;
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
    var13 = var4.PX_16;
    var _closure1_slot13 = var13;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var15;
    var4['container'] = var9;
    var9 = {'height': 75, 'width': '100%'};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var15;
    var14 = var14.hairlineWidth;
    var9['borderTopWidth'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_STRONG;
    var9['borderTopColor'] = var14;
    var4['bottomBar'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['scrollView'] = var9;
    var9 = {};
    var9['padding'] = var13;
    var9['flex'] = var12;
    var4['content'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var4['title'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_32;
    var9['marginTop'] = var10;
    var4['activityIndicator'] = var9;
    var9 = {'position': 'absolute', 'bottom': 75, 'left': 0, 'right': 0};
    var4['questDockContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/SettingsQuestPreviewScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SettingsQuestPreviewScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useRoute;
            var1 = var1.bind(var2)();
            var2 = var1.params;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot14;
            var8 = var1.bind(var5)();
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var7 = null;
            var9 = var7 == var2;
            var1 = undefined;
            if(var9) { _fun0001_ip = 81; continue _fun0001 }
 75:
            var1 = var2.questId;
 81:
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var29 = var3[var1];
            var _closure2_slot1 = var29;
            var1 = 1;
            var16 = var3[var1];
            var _closure2_slot2 = var16;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 9;
            var4 = var1[var9];
            var13 = var3.bind(var5)(var4);
            var12 = var13.useStateFromStores;
            var4 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var4;
            var10 = new Array(1);
            var10[0] = var29;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 40; continue _fun0002 }
 18:
                    var4 = _closure1_slot8;
                    var3 = var4.getQuest;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var23 = var12.bind(var13)(var11, var4, var10);
            var _closure2_slot3 = var23;
            var1 = var1[var9];
            var10 = var3.bind(var5)(var1);
            var4 = var10.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.theme;
                return var1;
            };
            var28 = var4.bind(var10)(var3, var1);
            var4 = _closure1_slot4;
            var3 = var4.useEffect;
            var10 = var7 == var2;
            var1 = undefined;
            if(var10) { _fun0001_ip = 246; continue _fun0001 }
 240:
            var1 = var2.questId;
 246:
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 30; continue _fun0003 }
 20:
                    var5 = _closure2_slot0;
                    var3 = var5.questId;
 30:
                    if(!(var4 != var3)) { _fun0003_ip = 53; continue _fun0003 }
 34:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var2 = var2.questId;
                    var2 = var3.bind(var1)(var2);
 53:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot4;
            var3 = var4.useEffect;
            var2 = new Array(1);
            var2[0] = var29;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 53; continue _fun0004 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchQuestPreview;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            var3 = var4.useEffect;
            var2 = new Array(1);
            var2[0] = var29;
            var1 = function() {
                var5 = function listener(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = arg1;
                        var4 = var1.quest_id;
                        var3 = _closure2_slot1;
                        var2 = null;
                        var2 = var2 != var3;
                        if(!var2) { _fun0005_ip = 33; continue _fun0005 }
 25:
                        var3 = _closure2_slot1;
                        var2 = var4 === var3;
 33:
                        if(!var2) { _fun0005_ip = 76; continue _fun0005 }
 36:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.fetchQuestPreview;
                        var1 = _closure2_slot1;
                        var1 = var2.bind(var3)(var1);
 76:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot0 = var5;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.subscribe;
                var2 = 'QUEST_PREVIEW_UPDATE';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
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
            var1 = var3.bind(var4)(var1, var2);
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var29;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 53; continue _fun0006 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchQuestPreview;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = var3[var9];
            var13 = var4.bind(var5)(var1);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var2;
            var10 = new Array(1);
            var10[0] = var29;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 38; continue _fun0007 }
 16:
                    var4 = _closure1_slot8;
                    var3 = var4.isFetchingQuestPreview;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var1 = var12.bind(var13)(var11, var1, var10);
            var3 = var3[var9];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = new Array(1);
            var3[0] = var29;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 38; continue _fun0008 }
 16:
                    var4 = _closure1_slot8;
                    var3 = var4.getFetchQuestPreviewError;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var14 = var9.bind(var10)(var4, var2, var3);
            if(!var1) { _fun0001_ip = 459; continue _fun0001 }
 452:
            if(!(var7 != var23)) { _fun0001_ip = 1230; continue _fun0001 }
 459:
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var4 = var8.container;
            var1['style'] = var4;
            var10 = _closure1_slot10;
            var9 = _closure1_slot6;
            var4 = {};
            var11 = var8.scrollView;
            var4['style'] = var11;
            var11 = {};
            var12 = var8.content;
            var11['style'] = var12;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var12 = 12;
            var12 = var17[var12];
            var12 = var13.bind(var5)(var12);
            var13 = var12.MobileQuestPreviewControlBar;
            var12 = {};
            var12['questId'] = var29;
            var12['setQuestId'] = var16;
            var12['refreshQuest'] = var15;
            var13 = var10.bind(var5)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = var7 != var23;
            if(!var13) { _fun0001_ip = 577; continue _fun0001 }
 573:
            var13 = var7 == var14;
 577:
            if(!var13) { _fun0001_ip = 976; continue _fun0001 }
 583:
            var16 = _closure1_slot11;
            var15 = _closure1_slot5;
            var14 = {};
            var20 = _closure1_slot10;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 13;
            var17 = var25[var17];
            var17 = var24.bind(var5)(var17);
            var18 = var17.Text;
            var17 = {'variant': 'text-lg/semibold', 'color': 'text-normal'};
            var19 = var8.title;
            var17['style'] = var19;
            var19 = 14;
            var22 = var25[var19];
            var22 = var24.bind(var5)(var22);
            var26 = var22.intl;
            var22 = var26.string;
            var19 = var25[var19];
            var19 = var24.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.BDUDam;
            var19 = var22.bind(var26)(var19);
            var17['children'] = var19;
            var18 = var20.bind(var5)(var18, var17);
            var17 = new Array(3);
            var17[0] = var18;
            var18 = 15;
            var18 = var25[var18];
            var18 = var24.bind(var5)(var18);
            var19 = var18.QuestContentImpressionTrackerNative;
            var18 = {};
            var18['questOrQuests'] = var23;
            var22 = 16;
            var26 = var25[var22];
            var26 = var24.bind(var5)(var26);
            var26 = var26.QuestContent;
            var26 = var26.INTERNAL_PREVIEW_TOOL;
            var18['questContent'] = var26;
            var22 = var25[var22];
            var22 = var24.bind(var5)(var22);
            var22 = var22.QuestContent;
            var22 = var22.INTERNAL_PREVIEW_TOOL;
            var18['sourceQuestContent'] = var22;
            var22 = false;
            var18['trackGuildAndChannelMetadata'] = var22;
            var21 = function children() {
                var4 = _closure1_slot10;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
                var1 = var7[var1];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var2 = var1.QuestCard;
                var1 = {};
                var8 = _closure2_slot3;
                var1['quest'] = var8;
                var5 = _closure1_slot13;
                var1['containerPadding'] = var5;
                var5 = 16;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.QuestContent;
                var5 = var5.INTERNAL_PREVIEW_TOOL;
                var1['sourceQuestContent'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var18['children'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var17[1] = var18;
            var18 = var7 != var29;
            if(!var18) { _fun0001_ip = 962; continue _fun0001 }
 830:
            var22 = _closure1_slot10;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var19 = 18;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var21 = var19.QuestEmbedPreview;
            var20 = {};
            var20['questId'] = var29;
            var19 = var23.userStatus;
            var24 = var7 == var19;
            var27 = undefined;
            if(var24) { _fun0001_ip = 888; continue _fun0001 }
 882:
            var27 = var19.completedAt;
 888:
            var19 = var23.userStatus;
            var24 = var7 == var19;
            var26 = undefined;
            if(var24) { _fun0001_ip = 909; continue _fun0001 }
 903:
            var26 = var19.progress;
 909:
            var19 = global;
            var19 = var19.HermesInternal;
            var25 = var19.concat;
            var37 = '';
            var19 = '-';
            var36 = var29;
            var35 = var19;
            var34 = var28;
            var33 = var19;
            var32 = var27;
            var31 = var19;
            var30 = var26;
            var19 = var37[var25](var36, var35, var34, var33, var32, var31, var30, var29);
            var18 = var22.bind(var5)(var21, var20, var19);
 962:
            var17[2] = var18;
            var14['children'] = var17;
            var13 = var16.bind(var5)(var15, var14);
 976:
            var12[1] = var13;
            var11['children'] = var12;
            var11 = var3.bind(var5)(var2, var11);
            var4['children'] = var11;
            var9 = var10.bind(var5)(var9, var4);
            var4 = new Array(2);
            var4[0] = var9;
            var7 = var7 != var23;
            if(!var7) { _fun0001_ip = 1214; continue _fun0001 }
 1018:
            var11 = _closure1_slot11;
            var10 = _closure1_slot12;
            var9 = {};
            var15 = _closure1_slot10;
            var14 = _closure1_slot5;
            var12 = {};
            var13 = var8.bottomBar;
            var12['style'] = var13;
            var13 = var15.bind(var5)(var14, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = {};
            var16 = var8.questDockContainer;
            var13['style'] = var16;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var16 = 19;
            var16 = var22[var16];
            var16 = var21.bind(var5)(var16);
            var17 = var16.QuestDockExternalCoordinationContextProvider;
            var16 = {};
            var19 = _closure1_slot1;
            var18 = 20;
            var18 = var22[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Provider;
            var18 = {};
            var20 = {};
            var24 = true;
            var20['isVisible'] = var24;
            var20['quest'] = var23;
            var18['value'] = var20;
            var20 = 21;
            var20 = var22[var20];
            var20 = var21.bind(var5)(var20);
            var21 = var20.QuestDockWithEntranceAnimation;
            var20 = {};
            var20 = var15.bind(var5)(var21, var20);
            var18['children'] = var20;
            var18 = var15.bind(var5)(var19, var18);
            var16['children'] = var18;
            var16 = var15.bind(var5)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var7 = var11.bind(var5)(var10, var9);
 1214:
            var4[1] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 1293; continue _fun0001;
 1230:
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
 1293:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
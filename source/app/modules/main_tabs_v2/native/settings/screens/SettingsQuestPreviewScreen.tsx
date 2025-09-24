// app/modules/main_tabs_v2/native/settings/screens/SettingsQuestPreviewScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var13 = 1;
    var7 = var6[var13];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var7 = var4.ScrollView;
    var _closure1_slot5 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var10 = 5;
    var4 = var6[var10];
    var4 = var11.bind(var1)(var4);
    var4 = var4.spacing;
    var12 = var4.PX_16;
    var _closure1_slot10 = var12;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var13;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var14;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var13;
    var4['scrollView'] = var9;
    var9 = {};
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
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var4['questInput'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var4['refreshButton'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_32;
    var9['marginTop'] = var10;
    var4['activityIndicator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/SettingsQuestPreviewScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SettingsQuestPreviewScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useRoute;
            var1 = var1.bind(var2)();
            var2 = var1.params;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot11;
            var9 = var1.bind(var4)();
            var5 = _closure1_slot3;
            var3 = var5.useState;
            var14 = null;
            var7 = var14 == var2;
            var1 = undefined;
            if(var7) { _fun0001_ip = 81; continue _fun0001 }
 75:
            var1 = var2.questId;
 81:
            var3 = var3.bind(var5)(var1);
            var1 = _closure1_slot2;
            var8 = 2;
            var1 = var1.bind(var4)(var3, var8);
            var5 = 0;
            var25 = var1[var5];
            var _closure2_slot1 = var25;
            var3 = 1;
            var1 = var1[var3];
            var _closure2_slot2 = var1;
            var10 = _closure1_slot3;
            var7 = var10.useState;
            var11 = var14 == var2;
            var1 = undefined;
            if(var11) { _fun0001_ip = 144; continue _fun0001 }
 138:
            var1 = var2.questId;
 144:
            var7 = var7.bind(var10)(var1);
            var1 = _closure1_slot2;
            var1 = var1.bind(var4)(var7, var8);
            var17 = var1[var5];
            var _closure2_slot3 = var17;
            var1 = var1[var3];
            var _closure2_slot4 = var1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 8;
            var1 = var1[var5];
            var10 = var3.bind(var4)(var1);
            var8 = var10.useStateFromStores;
            var1 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var1;
            var3 = new Array(1);
            var3[0] = var25;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 40; continue _fun0002 }
 18:
                    var4 = _closure1_slot7;
                    var3 = var4.getQuest;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var23 = var8.bind(var10)(var7, var1, var3);
            var _closure2_slot5 = var23;
            var7 = _closure1_slot3;
            var3 = var7.useEffect;
            var8 = var14 == var2;
            var1 = undefined;
            if(var8) { _fun0001_ip = 262; continue _fun0001 }
 256:
            var1 = var2.questId;
 262:
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
            var1 = var3.bind(var7)(var1, var2);
            var7 = _closure1_slot3;
            var3 = var7.useEffect;
            var2 = new Array(2);
            var2[0] = var25;
            var8 = var14 == var23;
            var1 = undefined;
            if(var8) { _fun0001_ip = 314; continue _fun0001 }
 309:
            var1 = var23.id;
 314:
            var2[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0004_ip = 42; continue _fun0004 }
 16:
                    var3 = _closure2_slot5;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 38; continue _fun0004 }
 29:
                    var5 = _closure2_slot5;
                    var3 = var5.id;
 38:
                    var2 = var4 == var3;
 42:
                    if(!var2) { _fun0004_ip = 85; continue _fun0004 }
 45:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 9;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchQuestPreview;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 85:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var7)(var1, var2);
            var7 = _closure1_slot3;
            var3 = var7.useCallback;
            var2 = new Array(1);
            var2[0] = var25;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 53; continue _fun0005 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 9;
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
            var24 = var3.bind(var7)(var1, var2);
            var3 = var7.useCallback;
            var2 = new Array(2);
            var2[0] = var17;
            var2[1] = var25;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0006_ip = 28; continue _fun0006 }
 16:
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot1;
                    var2 = var4 !== var3;
 28:
                    if(!var2) { _fun0006_ip = 84; continue _fun0006 }
 31:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 9;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.fetchQuestPreview;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
 84:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = var2[var5];
            var12 = var3.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var1;
            var8 = new Array(1);
            var8[0] = var25;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 38; continue _fun0007 }
 16:
                    var4 = _closure1_slot7;
                    var3 = var4.isFetchingQuestPreview;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var21 = var11.bind(var12)(var10, var7, var8);
            var2 = var2[var5];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = new Array(1);
            var2[0] = var25;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 40; continue _fun0008 }
 16:
                    var4 = _closure1_slot7;
                    var3 = var4.getFetchQuestPreviewError;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var18 = var5.bind(var7)(var3, var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            if(!var21) { _fun0001_ip = 509; continue _fun0001 }
 502:
            if(!(var14 != var23)) { _fun0001_ip = 1109; continue _fun0001 }
 509:
            var1 = {};
            var5 = var9.container;
            var1['style'] = var5;
            var8 = _closure1_slot8;
            var7 = _closure1_slot5;
            var5 = {};
            var10 = var9.scrollView;
            var5['style'] = var10;
            var12 = _closure1_slot9;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var9.content;
            var10['style'] = var13;
            var13 = {};
            var15 = var9.questInput;
            var13['style'] = var15;
            var16 = _closure1_slot0;
            var20 = _closure1_slot1;
            var15 = 10;
            var15 = var20[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.TextInput;
            var15 = {'label': 'Quest ID', 'placeholder': 'Enter a Quest ID'};
            var15['onSubmitEditing'] = var19;
            var19 = function onChange(arg1) {
                var3 = _closure2_slot4;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var15['onChange'] = var19;
            var15['value'] = var17;
            var19 = var14 == var18;
            var17 = undefined;
            if(var19) { _fun0001_ip = 646; continue _fun0001 }
 641:
            var17 = var18.message;
 646:
            var15['errorMessage'] = var17;
            var15 = var8.bind(var4)(var16, var15);
            var13['children'] = var15;
            var15 = var8.bind(var4)(var11, var13);
            var13 = new Array(3);
            var13[0] = var15;
            var17 = _closure1_slot8;
            var16 = _closure1_slot4;
            var15 = {};
            var18 = var9.refreshButton;
            var15['style'] = var18;
            var29 = _closure1_slot0;
            var26 = _closure1_slot1;
            var18 = 11;
            var18 = var26[var18];
            var18 = var29.bind(var4)(var18);
            var19 = var18.Button;
            var18 = {};
            var20 = 'sm';
            var18['size'] = var20;
            var20 = 12;
            var27 = var26[var20];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var26[var20];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.wzzjk5;
            var26 = var27.bind(var28)(var26);
            var18['text'] = var26;
            var18['onPress'] = var24;
            var24 = var21;
            if(var24) { _fun0001_ip = 796; continue _fun0001 }
 792:
            var24 = var14 == var25;
 796:
            var18['disabled'] = var24;
            var18['loading'] = var21;
            var18 = var17.bind(var4)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var13[1] = var15;
            var14 = var14 != var23;
            if(!var14) { _fun0001_ip = 1079; continue _fun0001 }
 835:
            var17 = _closure1_slot9;
            var16 = _closure1_slot4;
            var15 = {};
            var21 = _closure1_slot8;
            var24 = _closure1_slot0;
            var25 = _closure1_slot1;
            var18 = 13;
            var18 = var25[var18];
            var18 = var24.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-lg/semibold', 'color': 'text-normal'};
            var26 = var9.title;
            var18['style'] = var26;
            var26 = var25[var20];
            var26 = var24.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var20 = var25[var20];
            var20 = var24.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.BDUDam;
            var20 = var26.bind(var27)(var20);
            var18['children'] = var20;
            var19 = var21.bind(var4)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = 14;
            var19 = var25[var19];
            var19 = var24.bind(var4)(var19);
            var20 = var19.QuestContentImpressionTrackerNative;
            var19 = {};
            var19['questOrQuests'] = var23;
            var23 = 15;
            var26 = var25[var23];
            var26 = var24.bind(var4)(var26);
            var26 = var26.QuestContent;
            var26 = var26.INTERNAL_PREVIEW_TOOL;
            var19['questContent'] = var26;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.QuestContent;
            var23 = var23.INTERNAL_PREVIEW_TOOL;
            var19['sourceQuestContent'] = var23;
            var23 = false;
            var19['trackGuildAndChannelMetadata'] = var23;
            var22 = function children() {
                var4 = _closure1_slot8;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 16;
                var1 = var7[var1];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var2 = var1.QuestCard;
                var1 = {};
                var8 = _closure2_slot5;
                var1['quest'] = var8;
                var5 = _closure1_slot10;
                var1['containerPadding'] = var5;
                var5 = 15;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.QuestContent;
                var5 = var5.INTERNAL_PREVIEW_TOOL;
                var1['sourceQuestContent'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var19['children'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var18[1] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
 1079:
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var5['children'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            var1['children'] = var5;
            _fun0001_ip = 1165; continue _fun0001;
 1109:
            var5 = {};
            var7 = var9.container;
            var5['style'] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot6;
            var6 = {'animating': true, 'size': 'large'};
            var9 = var9.activityIndicator;
            var6['style'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5['children'] = var6;
            var1 = var5;
 1165:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
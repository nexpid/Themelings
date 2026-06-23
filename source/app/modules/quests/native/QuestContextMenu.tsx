// app/modules/quests/native/QuestContextMenu.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function renderDefaultButton(arg1) {
        var3 = arg1;
        var7 = var3.ref;
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var4 = undefined;
        var11 = var2.bind(var4)(var3, var1);
        var3 = _closure1_slot8;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 5;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.IconButton;
        var1 = {};
        var1['ref'] = var7;
        var12 = var1;
        var6 = copyDataProperties(var12, var11);
        var6 = _closure1_slot1;
        var5 = 6;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = 'icon';
        var1[4] = var6;
        var6 = 'secondary';
        var5 = 'variant';
        var1[4] = var6;
        var5 = 7;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.CAgr1w;
        var7 = var7.bind(var10)(var6);
        var6 = 'accessibilityLabel';
        var1[5] = var7;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.hd0b7t;
        var6 = var6.bind(var7)(var5);
        var5 = 'accessibilityHint';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = ['ref'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LinkingTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot9;
case 2:
            var3 = var1.quest;
            var _closure2_slot0 = var3;
            var24 = var1.showShareLink;
            if(!(var24 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var24 = false;
case 4:
            var6 = var1.additionalItems;
            if(!(var6 === var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = new Array(0);
case 6:
            var _closure2_slot1 = var6;
            var9 = var1.sourceQuestContent;
            var _closure2_slot2 = var9;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var _closure2_slot23 = var4;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var14 = 8;
            var7 = var15[var14];
            var10 = var13.bind(var4)(var7);
            var8 = var10.useQuestPreviewActions;
            var7 = var3.id;
            var8 = var8.bind(var10)(var7);
            var21 = var8.handleComplete;
            _closure2_slot3 = var21;
            var19 = var8.handleProgress;
            _closure2_slot4 = var19;
            var20 = var8.handleResetDismissibilityClick;
            _closure2_slot5 = var20;
            var18 = var8.handleResetStatusClick;
            _closure2_slot6 = var18;
            var7 = var8.handleOverridePreviewClick;
            _closure2_slot7 = var7;
            var8 = var8.handleResetHasBeenSeenClick;
            _closure2_slot8 = var8;
            var10 = 9;
            var10 = var15[var10];
            var17 = var13.bind(var4)(var10);
            var16 = var17.useStateFromStores;
            var10 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var10;
            var11 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getQuestPreviewOverride;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.QuestContent;
                var1 = var1.QUEST_BAR_MOBILE;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = new Array(0);
            var17 = var16.bind(var17)(var12, var11, var10);
            _closure2_slot9 = var17;
            var10 = 11;
            var10 = var15[var10];
            var11 = var13.bind(var4)(var10);
            var10 = var11.useTrackQuestContentClickedWithImpression;
            var11 = var10.bind(var11)();
            _closure2_slot10 = var11;
            var10 = 12;
            var10 = var15[var10];
            var12 = var13.bind(var4)(var10);
            var10 = var12.useQuestImpressionId;
            var10 = var10.bind(var12)();
            _closure2_slot11 = var10;
            var12 = 13;
            var12 = var15[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.getExternalCtaLabel;
            var27 = var12.bind(var13)(var3);
            _closure2_slot12 = var27;
            if(!var24) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 14;
            var12 = var15[var12];
            var15 = var13.bind(var4)(var12);
            var13 = var15.isShareableQuest;
            var12 = var3.config;
            var24 = var13.bind(var15)(var12);
case 8:
            _closure2_slot13 = var24;
            var13 = _closure1_slot5;
            var16 = var13.useCallback;
            var15 = new Array(3);
            var15[0] = var3;
            var15[1] = var10;
            var15[2] = var9;
            var12 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 15;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 16;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var6 = _closure1_slot0;
                    var4 = 13;
                    var4 = var7[var4];
                    var7 = var6.bind(var1)(var4);
                    var6 = var7.getCtaLink;
                    var4 = _closure2_slot0;
                    var4 = var4.config;
                    var4 = var6.bind(var7)(var4);
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.payload;
                    var5 = var4.type;
                    var4 = _closure1_slot7;
                    var4 = var4.INVITE;
                    var3 = var5 === var4;
case 10:
                    if(!var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 17;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.dismissOverlayScreens;
                    var3 = var3.bind(var4)();
case 12:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 18;
                    var2 = var9[var2];
                    var5 = var8.bind(var1)(var2);
                    var4 = var5.openGameLinkDirectly;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var7 = 10;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.QuestContent;
                    var7 = var7.QUEST_HOME_MOBILE;
                    var2['content'] = var7;
                    var7 = 19;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.QuestContentCTA;
                    var7 = var7.CONTEXT_MENU_OPEN_GAME_LINK;
                    var2['ctaContent'] = var7;
                    var7 = _closure2_slot11;
                    var2['impressionId'] = var7;
                    var6 = _closure2_slot2;
                    var2['sourceQuestContent'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var26 = var16.bind(var13)(var12, var15);
            _closure2_slot14 = var26;
            var16 = var13.useCallback;
            var15 = new Array(4);
            var15[0] = var24;
            var12 = var3.id;
            var15[1] = var12;
            var15[2] = var10;
            var15[3] = var9;
            var12 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot13;
                    if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 13;
                    var1 = var8[var1];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var1);
                    var3 = var4.copyShareLink;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = {};
                    var9 = 10;
                    var9 = var8[var9];
                    var9 = var7.bind(var6)(var9);
                    var9 = var9.QuestContent;
                    var9 = var9.QUEST_HOME_MOBILE;
                    var1['content'] = var9;
                    var9 = 19;
                    var9 = var8[var9];
                    var9 = var7.bind(var6)(var9);
                    var9 = var9.QuestContentCTA;
                    var9 = var9.CONTEXT_MENU_COPY_LINK;
                    var1['ctaContent'] = var9;
                    var9 = _closure2_slot11;
                    var1['impressionId'] = var9;
                    var5 = _closure2_slot2;
                    var1['sourceQuestContent'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = 20;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var3 = var1.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = 7;
                    var4 = var8[var1];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var1 = var1.t;
                    var1 = var1["+5kSoW"];
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var16.bind(var13)(var12, var15);
            _closure2_slot15 = var15;
            var22 = var13.useCallback;
            var16 = new Array(2);
            var16[0] = var3;
            var16[1] = var9;
            var12 = function() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 21;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showModal;
                var2 = {};
                var5 = _closure2_slot0;
                var2['quest'] = var5;
                var5 = false;
                var2['isTargetedDisclosure'] = var5;
                var5 = {};
                var8 = _closure1_slot0;
                var7 = 10;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_HOME_MOBILE;
                var5['content'] = var7;
                var7 = 19;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.CONTEXT_MENU_OPEN_DISCLOSURE;
                var5['ctaContent'] = var7;
                var6 = _closure2_slot2;
                var5['sourceQuestContent'] = var6;
                var2['trackingCtx'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var25 = var22.bind(var13)(var12, var16);
            _closure2_slot16 = var25;
            var22 = var13.useCallback;
            var12 = var3.id;
            var16 = new Array(1);
            var16[0] = var12;
            var12 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.manuallyStartConsoleQuest;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var23 = var22.bind(var13)(var12, var16);
            _closure2_slot17 = var23;
            var22 = var13.useCallback;
            var12 = var3.id;
            var16 = new Array(1);
            var16[0] = var12;
            var12 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.manualStopConsoleQuest;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var22.bind(var13)(var12, var16);
            _closure2_slot18 = var12;
            var22 = var13.useMemo;
            var16 = new Array(5);
            var16[0] = var27;
            var16[1] = var26;
            var16[2] = var25;
            var16[3] = var24;
            var16[4] = var15;
            var15 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = {};
                    var1 = _closure2_slot12;
                    var3['label'] = var1;
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 23;
                    var1 = var9[var1];
                    var7 = undefined;
                    var1 = var11.bind(var7)(var1);
                    var1 = var1.LinkExternalSmallIcon;
                    var3['IconComponent'] = var1;
                    var1 = _closure2_slot14;
                    var3['action'] = var1;
                    var1 = 'link';
                    var3['accessibilityRole'] = var1;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var3 = {};
                    var5 = 7;
                    var4 = var9[var5];
                    var4 = var11.bind(var7)(var4);
                    var10 = var4.intl;
                    var6 = var10.string;
                    var4 = var9[var5];
                    var4 = var11.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.GcsZKJ;
                    var4 = var6.bind(var10)(var4);
                    var3['label'] = var4;
                    var4 = _closure2_slot16;
                    var3['action'] = var4;
                    var6 = _closure1_slot1;
                    var4 = 24;
                    var4 = var9[var4];
                    var4 = var6.bind(var7)(var4);
                    var3['iconSource'] = var4;
                    var1[1] = var3;
                    var3 = _closure2_slot13;
                    if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var3 = new Array(0);
                    _fun0004_ip = 18; continue _fun0004;
case 16:
                    var4 = {};
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var9 = var8[var5];
                    var9 = var6.bind(var7)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.t;
                    var5 = var5.WqhZss;
                    var5 = var9.bind(var10)(var5);
                    var4['label'] = var5;
                    var5 = 25;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.CopyIcon;
                    var4['IconComponent'] = var5;
                    var2 = _closure2_slot15;
                    var4['action'] = var2;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var3 = var2;
case 18:
                    var12 = 2;
                    var14 = var1;
                    var13 = var3;
                    var2 = arraySpread(var14, var13, var12);
                    return var1;
                }
            };
            var16 = var22.bind(var13)(var15, var16);
            _closure2_slot19 = var16;
            var22 = var13.useMemo;
            var15 = new Array(3);
            var15[0] = var3;
            var15[1] = var23;
            var15[2] = var12;
            var12 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isConsoleQuest;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    if(var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var1 = new Array(0);
                    _fun0005_ip = 21; continue _fun0005;
case 19:
                    var3 = {};
                    var2 = 'Start Console Heartbeat';
                    var3['label'] = var2;
                    var2 = _closure2_slot17;
                    var3['action'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var5 = 'Stop Console Heartbeat';
                    var3['label'] = var5;
                    var4 = _closure2_slot18;
                    var3['action'] = var4;
                    var2[1] = var3;
                    var1 = var2;
case 21:
                    return var1;
                }
            };
            var22 = var22.bind(var13)(var12, var15);
            _closure2_slot20 = var22;
            var15 = var13.useMemo;
            var12 = new Array(7);
            var12[0] = var22;
            var12[1] = var21;
            var12[2] = var20;
            var12[3] = var19;
            var12[4] = var18;
            var12[5] = var8;
            var8 = var3.id;
            var12[6] = var8;
            var8 = function() {
                var2 = {};
                var1 = 'Set Random Quest Progress';
                var2['label'] = var1;
                var1 = function action() {
                    var3 = _closure2_slot4;
                    var1 = global;
                    var2 = var1.Math;
                    var1 = var2.random;
                    var2 = var1.bind(var2)();
                    var1 = 0.9;
                    var4 = var1 * var2;
                    var2 = undefined;
                    var1 = 0.03;
                    var1 = var4 + var1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var2['action'] = var1;
                var1 = new Array(6);
                var1[0] = var2;
                var3 = {};
                var2 = 'Complete Quest';
                var3['label'] = var2;
                var5 = _closure2_slot3;
                var3['action'] = var5;
                var1[1] = var3;
                var3 = {};
                var5 = 'Reset Quest';
                var3['label'] = var5;
                var5 = _closure2_slot6;
                var3['action'] = var5;
                var1[2] = var3;
                var3 = {};
                var5 = 'Reset Dismissibility';
                var3['label'] = var5;
                var5 = _closure2_slot5;
                var3['action'] = var5;
                var1[3] = var3;
                var3 = {};
                var5 = 'Reset Quest Seen';
                var3['label'] = var5;
                var5 = _closure2_slot8;
                var3['action'] = var5;
                var1[4] = var3;
                var7 = _closure2_slot20;
                var6 = 5;
                var8 = var1;
                var3 = arraySpread(var8, var7, var6);
                var2 = {};
                var5 = 'Copy Quest ID';
                var2['label'] = var5;
                var4 = function action() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.copy;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['action'] = var4;
                var1[2] = var2;
                var2 = 1;
                var2 = var3 + var2;
                return var1;
            };
            var15 = var15.bind(var13)(var8, var12);
            _closure2_slot21 = var15;
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var14];
            var12 = var12.bind(var4)(var8);
            var8 = var12.useShouldShowQuestPreviewOverrides;
            var14 = var8.bind(var12)(var3);
            _closure2_slot22 = var14;
            var12 = var13.useMemo;
            var8 = new Array(3);
            var8[0] = var7;
            var7 = var3.id;
            var8[1] = var7;
            var7 = null;
            var18 = var7 == var17;
            var7 = undefined;
            if(var18) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var17.id;
case 22:
            var8[2] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = {};
                    var2 = 'Show in Quest Bar';
                    var1['label'] = var2;
                    var2 = function action() {
                        var3 = _closure2_slot7;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var1 = var1.QuestContent;
                        var1 = var1.QUEST_BAR_MOBILE;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var1['action'] = var2;
                    var4 = _closure2_slot9;
                    var3 = null;
                    var3 = var3 == var4;
                    var5 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0006_ip = 24; continue _fun0006 }
case 20:
                    var3 = _closure2_slot9;
                    var4 = var3.id;
case 24:
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = undefined;
                    if(!(var4 === var3)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 28;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var2 = var3.CheckmarkLargeIcon;
case 25:
                    var1['IconComponent'] = var2;
                    return var1;
                }
            };
            var13 = var12.bind(var13)(var7, var8);
            _closure2_slot23 = var13;
            var8 = _closure1_slot5;
            var12 = var8.useMemo;
            var7 = new Array(6);
            var7[0] = var16;
            var7[1] = var15;
            var15 = var3.preview;
            var7[2] = var15;
            var7[3] = var14;
            var7[4] = var13;
            var7[5] = var6;
            var6 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0007_ip = 27; continue _fun0007 }
case 15:
                    var1 = _closure2_slot19;
                    var5 = new Array(1);
                    var5[0] = var1;
                    _fun0007_ip = 28; continue _fun0007;
case 27:
                    var2 = _closure2_slot19;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = _closure2_slot1;
                    var1[1] = var2;
                    var5 = var1;
case 28:
                    var1 = _closure2_slot22;
                    if(!var1) { _fun0007_ip = 29; continue _fun0007 }
case 7:
                    var2 = var5.push;
                    var4 = _closure2_slot23;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var5)(var1);
case 29:
                    var1 = _closure2_slot0;
                    var2 = var1.preview;
                    var1 = var5;
                    if(!var2) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var2 = new Array(1);
                    var6 = 0;
                    var8 = var2;
                    var7 = var5;
                    var4 = arraySpread(var8, var7, var6);
                    var3 = _closure2_slot21;
                    var2[3] = var3;
                    var3 = 1;
                    var3 = var4 + var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            var7 = var12.bind(var8)(var6, var7);
            var6 = var8.useCallback;
            var12 = var3.id;
            var3 = new Array(4);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var10;
            var3[3] = var9;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 29;
                    var5 = var7[var3];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var5);
                    var5 = var6.shouldMigrateToAdAnalyticsInterface;
                    var3 = var7[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.AdAnalyticsInterfaceExperimentStep;
                    var4 = var3.STEP_2_CLICKED_INTERNAL;
                    var3 = 'quest_context_menu';
                    var3 = var5.bind(var6)(var4, var3);
                    if(var3) { _fun0008_ip = 32; continue _fun0008 }
case 33:
                    var4 = _closure2_slot10;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var3['questId'] = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 10;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_HOME_MOBILE;
                    var3['questContent'] = var6;
                    var6 = 19;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.QuestContentCTA;
                    var6 = var6.OPEN_CONTEXT_MENU;
                    var3['questContentCTA'] = var6;
                    var5 = _closure2_slot2;
                    var3['sourceQuestContent'] = var5;
                    var3 = var4.bind(var1)(var3);
                    _fun0008_ip = 34; continue _fun0008;
case 32:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 30;
                    var2 = var8[var2];
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.captureAdUserAction;
                    var2 = {};
                    var5 = 31;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.AdUserActionType;
                    var5 = var5.CLICK_INTERNAL;
                    var2['type'] = var5;
                    var5 = 32;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.AdCreativeType;
                    var5 = var5.QUEST;
                    var2['adCreativeType'] = var5;
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var2['adCreativeId'] = var6;
                    var6 = 19;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.QuestContentCTA;
                    var6 = var6.OPEN_CONTEXT_MENU;
                    var2['questContentCTA'] = var6;
                    var6 = 10;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_HOME_MOBILE;
                    var2['surfaceId'] = var6;
                    var6 = _closure2_slot2;
                    var2['sourceQuestContent'] = var6;
                    var5 = _closure2_slot11;
                    var2['impressionId'] = var5;
                    var2 = var3.bind(var4)(var2);
case 34:
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var2, var3);
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 33;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ContextMenu;
            var1 = {};
            var1['items'] = var7;
            var1['onOpen'] = var6;
            var6 = true;
            var1['triggerOnTap'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestContextMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
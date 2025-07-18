// app/modules/quests/native/QuestContextMenu.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function renderDefaultButton(arg1) {
        var3 = arg1;
        var7 = var3.ref;
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var4 = undefined;
        var10 = var2.bind(var4)(var3, var1);
        var3 = _closure1_slot7;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 4;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.IconButton;
        var1 = {};
        var1['ref'] = var7;
        var11 = var1;
        var6 = copyDataProperties(var11, var10);
        var6 = _closure1_slot1;
        var5 = 5;
        var5 = var9[var5];
        var6 = var6.bind(var4)(var5);
        var5 = 'icon';
        var1[var5] = var6;
        var6 = 'secondary';
        var5 = 'variant';
        var1[var5] = var6;
        var5 = 6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.UKOtz8;
        var6 = var6.bind(var7)(var5);
        var5 = 'accessibilityLabel';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var1;
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
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.children;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0001_ip = 23; continue _fun0001 }
 16:
            var5 = _closure1_slot8;
 23:
            var24 = var1.location;
            var3 = var1.quest;
            var _closure2_slot0 = var3;
            var21 = var1.showShareLink;
            if(!(var21 === var4)) { _fun0001_ip = 50; continue _fun0001 }
 48:
            var21 = false;
 50:
            var _closure2_slot1 = var21;
            var6 = var1.additionalItems;
            if(!(var6 === var4)) { _fun0001_ip = 70; continue _fun0001 }
 66:
            var6 = new Array(0);
 70:
            var _closure2_slot2 = var6;
            var9 = var1.sourceQuestContent;
            var _closure2_slot3 = var9;
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
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 7;
            var7 = var14[var12];
            var10 = var13.bind(var4)(var7);
            var8 = var10.useQuestPreviewActions;
            var7 = var3.id;
            var7 = var8.bind(var10)(var7);
            var18 = var7.handleComplete;
            _closure2_slot4 = var18;
            var16 = var7.handleProgress;
            _closure2_slot5 = var16;
            var17 = var7.handleResetDismissibilityClick;
            _closure2_slot6 = var17;
            var8 = var7.handleResetStatusClick;
            _closure2_slot7 = var8;
            var7 = var7.handleOverrideDeliveryClick;
            _closure2_slot8 = var7;
            var10 = 8;
            var10 = var14[var10];
            var20 = var13.bind(var4)(var10);
            var19 = var20.useStateFromStores;
            var10 = _closure1_slot6;
            var15 = new Array(1);
            var15[0] = var10;
            var11 = function() {
                var1 = _closure1_slot6;
                var1 = var1.questDeliveryOverride;
                return var1;
            };
            var10 = new Array(0);
            var15 = var19.bind(var20)(var15, var11, var10);
            _closure2_slot9 = var15;
            var10 = 9;
            var10 = var14[var10];
            var11 = var13.bind(var4)(var10);
            var10 = var11.useTrackQuestContentClickedWithImpression;
            var10 = var10.bind(var11)();
            _closure2_slot10 = var10;
            var11 = 10;
            var11 = var14[var11];
            var19 = var13.bind(var4)(var11);
            var11 = var19.useQuestImpressionId;
            var11 = var11.bind(var19)();
            _closure2_slot11 = var11;
            var19 = 11;
            var19 = var14[var19];
            var23 = var13.bind(var4)(var19);
            var22 = var23.useShouldAllowMobileVideoTask;
            var20 = var3.config;
            var19 = {};
            var19['location'] = var24;
            var22 = var22.bind(var23)(var20, var19);
            _closure2_slot12 = var22;
            var12 = var14[var12];
            var13 = var13.bind(var4)(var12);
            var12 = var13.useQuestContextMenuExternalCta;
            var13 = var12.bind(var13)(var3);
            _closure2_slot13 = var13;
            var12 = _closure1_slot5;
            var20 = var12.useCallback;
            var19 = new Array(3);
            var19[0] = var3;
            var19[1] = var11;
            var19[2] = var9;
            var14 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 12;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var2);
                var4 = var5.openGameLinkDirectly;
                var3 = _closure2_slot0;
                var2 = {};
                var7 = 13;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_HOME_MOBILE;
                var2['content'] = var7;
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.CONTEXT_MENU_OPEN_GAME_LINK;
                var2['ctaContent'] = var7;
                var7 = _closure2_slot11;
                var2['impressionId'] = var7;
                var6 = _closure2_slot3;
                var2['sourceQuestContent'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var23 = var20.bind(var12)(var14, var19);
            _closure2_slot14 = var23;
            var19 = var12.useCallback;
            var20 = var3.id;
            var14 = new Array(3);
            var14[0] = var20;
            var14[1] = var11;
            var14[2] = var9;
            var11 = function() {
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 12;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var2);
                var4 = var5.copyShareLink;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var2 = {};
                var7 = 13;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_HOME_MOBILE;
                var2['content'] = var7;
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.CONTEXT_MENU_COPY_LINK;
                var2['ctaContent'] = var7;
                var7 = _closure2_slot11;
                var2['impressionId'] = var7;
                var6 = _closure2_slot3;
                var2['sourceQuestContent'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var25 = var19.bind(var12)(var11, var14);
            _closure2_slot15 = var25;
            var19 = var12.useCallback;
            var14 = new Array(2);
            var14[0] = var3;
            var14[1] = var9;
            var11 = function() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 14;
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
                var7 = 13;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContent;
                var7 = var7.QUEST_HOME_MOBILE;
                var5['content'] = var7;
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.QuestContentCTA;
                var7 = var7.CONTEXT_MENU_OPEN_DISCLOSURE;
                var5['ctaContent'] = var7;
                var6 = _closure2_slot3;
                var5['sourceQuestContent'] = var6;
                var2['trackingCtx'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var24 = var19.bind(var12)(var11, var14);
            _closure2_slot16 = var24;
            var19 = var12.useCallback;
            var11 = var3.id;
            var14 = new Array(1);
            var14[0] = var11;
            var11 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
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
            var20 = var19.bind(var12)(var11, var14);
            _closure2_slot17 = var20;
            var19 = var12.useCallback;
            var11 = var3.id;
            var14 = new Array(1);
            var14[0] = var11;
            var11 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.manualStopConsoleQuest;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var19.bind(var12)(var11, var14);
            _closure2_slot18 = var11;
            var19 = var12.useMemo;
            var14 = new Array(7);
            var14[0] = var25;
            var14[1] = var24;
            var14[2] = var23;
            var14[3] = var22;
            var14[4] = var21;
            var21 = var3.config;
            var14[5] = var21;
            var14[6] = var13;
            var13 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = {};
                    var1 = _closure2_slot12;
                    if(var1) { _fun0002_ip = 18; continue _fun0002 }
 12:
                    var1 = _closure2_slot13;
                    _fun0002_ip = 63; continue _fun0002;
 18:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.getVideoQuestEndCardCtaText;
                    var4 = _closure2_slot0;
                    var4 = var4.config;
                    var1 = var5.bind(var6)(var4);
 63:
                    var3['label'] = var1;
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 16;
                    var1 = var9[var1];
                    var7 = undefined;
                    var1 = var11.bind(var7)(var1);
                    var1 = var1.LinkExternalSmallIcon;
                    var3['IconComponent'] = var1;
                    var1 = _closure2_slot14;
                    var3['action'] = var1;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var3 = {};
                    var5 = 6;
                    var4 = var9[var5];
                    var4 = var11.bind(var7)(var4);
                    var10 = var4.intl;
                    var6 = var10.string;
                    var4 = var9[var5];
                    var4 = var11.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4.GcsZKC;
                    var4 = var6.bind(var10)(var4);
                    var3['label'] = var4;
                    var4 = _closure2_slot16;
                    var3['action'] = var4;
                    var6 = _closure1_slot1;
                    var4 = 17;
                    var4 = var9[var4];
                    var4 = var6.bind(var7)(var4);
                    var3['iconSource'] = var4;
                    var1[1] = var3;
                    var3 = _closure2_slot1;
                    if(var3) { _fun0002_ip = 218; continue _fun0002 }
 212:
                    var3 = new Array(0);
                    _fun0002_ip = 318; continue _fun0002;
 218:
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
                    var5 = var5.WqhZsr;
                    var5 = var9.bind(var10)(var5);
                    var4['label'] = var5;
                    var5 = 18;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.CopyIcon;
                    var4['IconComponent'] = var5;
                    var2 = _closure2_slot15;
                    var4['action'] = var2;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var3 = var2;
 318:
                    var12 = 2;
                    var14 = var1;
                    var13 = var3;
                    var2 = arraySpread(var14, var13, var12);
                    return var1;
                }
            };
            var14 = var19.bind(var12)(var13, var14);
            _closure2_slot19 = var14;
            var19 = var12.useMemo;
            var13 = new Array(3);
            var13[0] = var3;
            var13[1] = var20;
            var13[2] = var11;
            var11 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isConsoleQuest;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    if(var1) { _fun0003_ip = 52; continue _fun0003 }
 46:
                    var1 = new Array(0);
                    _fun0003_ip = 107; continue _fun0003;
 52:
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
 107:
                    return var1;
                }
            };
            var19 = var19.bind(var12)(var11, var13);
            _closure2_slot20 = var19;
            var13 = var12.useMemo;
            var11 = new Array(6);
            var11[0] = var19;
            var11[1] = var18;
            var11[2] = var17;
            var11[3] = var16;
            var11[4] = var8;
            var8 = var3.id;
            var11[5] = var8;
            var8 = function() {
                var2 = {};
                var1 = 'Set Random Quest Progress';
                var2['label'] = var1;
                var1 = function action() {
                    var3 = _closure2_slot5;
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
                var1 = new Array(5);
                var1[0] = var2;
                var3 = {};
                var2 = 'Complete Quest';
                var3['label'] = var2;
                var5 = _closure2_slot4;
                var3['action'] = var5;
                var1[1] = var3;
                var3 = {};
                var5 = 'Reset Quest';
                var3['label'] = var5;
                var5 = _closure2_slot7;
                var3['action'] = var5;
                var1[2] = var3;
                var3 = {};
                var5 = 'Reset Dismissibility';
                var3['label'] = var5;
                var5 = _closure2_slot6;
                var3['action'] = var5;
                var1[3] = var3;
                var7 = _closure2_slot20;
                var6 = 4;
                var8 = var1;
                var3 = arraySpread(var8, var7, var6);
                var2 = {};
                var5 = 'Copy Quest ID';
                var2['label'] = var5;
                var4 = function action() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
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
                var1[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                return var1;
            };
            var13 = var13.bind(var12)(var8, var11);
            _closure2_slot21 = var13;
            var11 = var12.useMemo;
            var8 = new Array(3);
            var8[0] = var7;
            var7 = var3.id;
            var8[1] = var7;
            var7 = null;
            var16 = var7 == var15;
            var7 = undefined;
            if(var16) { _fun0001_ip = 794; continue _fun0001 }
 789:
            var7 = var15.id;
 794:
            var8[2] = var7;
            var7 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var2 = 'Show in Quest Bar';
                    var1['label'] = var2;
                    var3 = _closure2_slot8;
                    var1['action'] = var3;
                    var4 = _closure2_slot9;
                    var3 = null;
                    var3 = var3 == var4;
                    var5 = undefined;
                    var4 = undefined;
                    if(var3) { _fun0004_ip = 49; continue _fun0004 }
 40:
                    var3 = _closure2_slot9;
                    var4 = var3.id;
 49:
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var2 = undefined;
                    if(!(var4 === var3)) { _fun0004_ip = 93; continue _fun0004 }
 64:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 20;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var2 = var3.CheckmarkLargeIcon;
 93:
                    var1['IconComponent'] = var2;
                    return var1;
                }
            };
            var12 = var11.bind(var12)(var7, var8);
            _closure2_slot22 = var12;
            var8 = _closure1_slot5;
            var11 = var8.useMemo;
            var7 = new Array(5);
            var7[0] = var14;
            var7[1] = var13;
            var13 = var3.preview;
            var7[2] = var13;
            var7[3] = var12;
            var7[4] = var6;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0005_ip = 27; continue _fun0005 }
 13:
                    var1 = _closure2_slot19;
                    var5 = new Array(1);
                    var5[0] = var1;
                    _fun0005_ip = 50; continue _fun0005;
 27:
                    var2 = _closure2_slot19;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = _closure2_slot2;
                    var1[1] = var2;
                    var5 = var1;
 50:
                    var1 = _closure2_slot0;
                    var1 = var1.preview;
                    if(!var1) { _fun0005_ip = 85; continue _fun0005 }
 63:
                    var2 = var5.push;
                    var4 = _closure2_slot22;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var1 = var2.bind(var5)(var1);
 85:
                    var1 = _closure2_slot0;
                    var2 = var1.preview;
                    var1 = var5;
                    if(!var2) { _fun0005_ip = 136; continue _fun0005 }
 101:
                    var2 = new Array(1);
                    var6 = 0;
                    var8 = var2;
                    var7 = var5;
                    var4 = arraySpread(var8, var7, var6);
                    var3 = _closure2_slot21;
                    var2[var4] = var3;
                    var3 = 1;
                    var3 = var4 + var3;
                    var1 = var2;
 136:
                    return var1;
                }
            };
            var7 = var11.bind(var8)(var6, var7);
            var6 = var8.useCallback;
            var11 = var3.id;
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var10;
            var3[2] = var9;
            var2 = function() {
                var3 = _closure2_slot10;
                var2 = {};
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2['questId'] = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 13;
                var5 = var7[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var5 = var5.QuestContent;
                var5 = var5.QUEST_HOME_MOBILE;
                var2['questContent'] = var5;
                var5 = 9;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.QuestContentCTA;
                var5 = var5.OPEN_CONTEXT_MENU;
                var2['questContentCTA'] = var5;
                var4 = _closure2_slot3;
                var2['sourceQuestContent'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = var6.bind(var8)(var2, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 21;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ContextMenu;
            var1 = {};
            var1['items'] = var7;
            var1['onOpen'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestContextMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
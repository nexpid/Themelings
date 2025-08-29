// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var2 = function useQuestRewardClaimHandler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.quest;
            var _closure2_slot0 = var12;
            var9 = var1.hideActionSheet;
            var13 = undefined;
            if(!(var9 === var13)) { _fun0001_ip = 29; continue _fun0001 }
 27:
            var9 = true;
 29:
            var _closure2_slot1 = var9;
            var8 = var1.questContent;
            if(!(var8 === var13)) { _fun0001_ip = 78; continue _fun0001 }
 43:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var13)(var3);
            var3 = var3.QuestContent;
            var8 = var3.QUEST_BOTTOM_SHEET;
 78:
            var _closure2_slot2 = var8;
            var7 = var1.onSuccess;
            var _closure2_slot3 = var7;
            var6 = var1.sourceQuestContent;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var13;
            var _closure2_slot6 = var13;
            var _closure2_slot7 = var13;
            var _closure2_slot8 = var13;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 10;
            var4 = var15[var1];
            var5 = var14.bind(var13)(var4);
            var4 = var5.useProgressState;
            var16 = var4.bind(var5)(var12);
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var5 = new Array(1);
            var5[0] = var12;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.SharedQuestFields;
                var2 = var3.build;
                var1 = _closure2_slot0;
                var1 = var1.config;
                var1 = var2.bind(var3)(var1);
                var1 = var1.defaultReward;
                var1 = var1.skuId;
                return var1;
            };
            var10 = var10.bind(var11)(var4, var5);
            var4 = 12;
            var4 = var15[var4];
            var11 = var14.bind(var13)(var4);
            var5 = var11.hasCollectiblesQuestReward;
            var4 = var12.config;
            var11 = var5.bind(var11)(var4);
            var4 = 13;
            var4 = var15[var4];
            var5 = var14.bind(var13)(var4);
            var4 = var5.useFetchCollectiblesProduct;
            var1 = var15[var1];
            var1 = var14.bind(var13)(var1);
            var1 = var1.QuestProgressState;
            var15 = var1.COMPLETED;
            var1 = null;
            if(!(var16 === var15)) { _fun0001_ip = 263; continue _fun0001 }
 255:
            var1 = null;
            if(!var11) { _fun0001_ip = 263; continue _fun0001 }
 260:
            var1 = var10;
 263:
            var1 = var4.bind(var5)(var1);
            var11 = var1.product;
            _closure2_slot5 = var11;
            var16 = var1.isFetching;
            _closure2_slot6 = var16;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 14;
            var4 = var14[var1];
            var17 = var10.bind(var13)(var4);
            var15 = var17.useStateFromStoresObject;
            var4 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var1 = {};
                var6 = _closure1_slot8;
                var5 = var6.isFetchingRewardCode;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var5.bind(var6)(var4);
                var1['isFetchingRewardCode'] = var4;
                var4 = _closure1_slot8;
                var3 = var4.isClaimingReward;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['isClaimingReward'] = var2;
                return var1;
            };
            var5 = var15.bind(var17)(var5, var4);
            var4 = var5.isClaimingReward;
            var5 = var5.isFetchingRewardCode;
            _closure2_slot7 = var5;
            var1 = var14[var1];
            var14 = var10.bind(var13)(var1);
            var13 = var14.useStateFromStores;
            var1 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 37; continue _fun0002 }
 27:
                    var2 = var3.hasVerifiedEmailOrPhone;
                    var1 = var2.bind(var3)();
 37:
                    return var1;
                }
            };
            var10 = var13.bind(var14)(var10, var1);
            _closure2_slot8 = var10;
            var1 = {};
            var15 = _closure1_slot4;
            var14 = var15.useMemo;
            var13 = new Array(2);
            var13[0] = var16;
            var13[1] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0003_ip = 14; continue _fun0003 }
 10:
                    var1 = _closure2_slot7;
 14:
                    return var1;
                }
            };
            var5 = var14.bind(var15)(var5, var13);
            var1['isLoading'] = var5;
            var1['isClaiming'] = var4;
            var5 = _closure1_slot4;
            var4 = var5.useCallback;
            var3 = new Array(7);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var10;
            var3[3] = var9;
            var3[4] = var8;
            var3[5] = var7;
            var3[6] = var6;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.handleRewardClaimThenView;
                var1 = {};
                var5 = _closure2_slot0;
                var1['quest'] = var5;
                var5 = _closure2_slot5;
                var1['product'] = var5;
                var5 = _closure2_slot1;
                var1['hideActionSheet'] = var5;
                var5 = _closure2_slot2;
                var1['questContent'] = var5;
                var5 = _closure2_slot8;
                var1['currentUserHasVerifiedEmailOrPhone'] = var5;
                var5 = _closure2_slot3;
                var1['onSuccess'] = var5;
                var4 = _closure2_slot4;
                var1['sourceQuestContent'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            var1['claim'] = var2;
            return var1;
        }
    };
    var _closure1_slot15 = var2;
    var1 = function WatchTaskButton(arg1) {
        var1 = arg1;
        var7 = var1.questId;
        var6 = var1.sourceQuestContent;
        var11 = var1.taskDetails;
        var10 = _closure1_slot0;
        var12 = _closure1_slot2;
        var2 = 16;
        var2 = var12[var2];
        var4 = undefined;
        var5 = var10.bind(var4)(var2);
        var3 = var5.useWatchTaskPressHandler;
        var2 = {};
        var2['questId'] = var7;
        var2['sourceQuestContent'] = var6;
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot9;
        var1 = 17;
        var1 = var12[var1];
        var1 = var10.bind(var4)(var1);
        var2 = var1.Button;
        var1 = {'grow': true, 'size': 'lg'};
        var1['onPress'] = var5;
        var5 = 18;
        var6 = var12[var5];
        var6 = var10.bind(var4)(var6);
        var8 = var6.intl;
        var7 = var8.formatToPlainString;
        var5 = var12[var5];
        var5 = var10.bind(var4)(var5);
        var5 = var5.t;
        var6 = var5.GNsKiY;
        var5 = {};
        var9 = 12;
        var9 = var12[var9];
        var10 = var10.bind(var4)(var9);
        var9 = var10.formatWatchTaskRemainingTime;
        var9 = var9.bind(var10)(var11);
        var5['remainTime'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var1['text'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function NextButton(arg1) {
        var1 = arg1;
        var6 = var1.onPress;
        var5 = var1.disabled;
        var4 = _closure1_slot9;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 17;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Button;
        var1 = {'grow': true, 'size': 'lg'};
        var1['onPress'] = var6;
        var1['disabled'] = var5;
        var5 = 18;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.a9OfTE;
        var5 = var6.bind(var7)(var5);
        var1['text'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function DefibButton(arg1) {
        var1 = arg1;
        var2 = var1.questId;
        var _closure2_slot0 = var2;
        var10 = var1.loading;
        var7 = var1.disabled;
        var2 = var1.onPress;
        var _closure2_slot1 = var2;
        var1 = var1.sourceQuestContent;
        var _closure2_slot2 = var1;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 23;
        var1 = var9[var1];
        var4 = undefined;
        var2 = var8.bind(var4)(var1);
        var1 = var2.useTrackQuestContentClickedWithImpression;
        var1 = var1.bind(var2)();
        var _closure2_slot3 = var1;
        var3 = _closure1_slot9;
        var1 = 17;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Button;
        var1 = {'grow': true, 'size': 'lg', 'variant': 'secondary'};
        var1['loading'] = var10;
        var1['disabled'] = var7;
        var10 = _closure1_slot9;
        var6 = 24;
        var6 = var9[var6];
        var6 = var8.bind(var4)(var6);
        var7 = var6.RefreshIcon;
        var6 = {};
        var6 = var10.bind(var4)(var7, var6);
        var1['icon'] = var6;
        var6 = 'end';
        var1['iconPosition'] = var6;
        var5 = function onPress(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure2_slot3;
                var3 = {};
                var1 = _closure2_slot0;
                var3['questId'] = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 9;
                var5 = var7[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var5 = var5.QuestContent;
                var5 = var5.QUEST_BOTTOM_SHEET;
                var3['questContent'] = var5;
                var5 = 23;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.QuestContentCTA;
                var5 = var5.DEFIBRILLATOR;
                var3['questContentCTA'] = var5;
                var5 = _closure2_slot2;
                var3['sourceQuestContent'] = var5;
                var3 = var4.bind(var1)(var3);
                var4 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var4)) { _fun0004_ip = 125; continue _fun0004 }
 113:
                var3 = _closure2_slot1;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
 125:
                return var1;
            }
        };
        var1['onPress'] = var5;
        var5 = 18;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.nPThNT;
        var5 = var6.bind(var7)(var5);
        var1['text'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function ClaimButton(arg1) {
        var1 = arg1;
        var2 = var1.questId;
        var _closure2_slot0 = var2;
        var7 = var1.disabled;
        var6 = var1.loading;
        var2 = var1.onPress;
        var _closure2_slot1 = var2;
        var1 = var1.sourceQuestContent;
        var _closure2_slot2 = var1;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 23;
        var2 = var9[var2];
        var4 = undefined;
        var3 = var8.bind(var4)(var2);
        var2 = var3.useTrackQuestContentClickedWithImpression;
        var2 = var2.bind(var3)();
        var _closure2_slot3 = var2;
        var3 = _closure1_slot9;
        var1 = 17;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Button;
        var1 = {'grow': true, 'size': 'lg'};
        var1['disabled'] = var7;
        var1['loading'] = var6;
        var5 = function onPress() {
            var4 = _closure2_slot3;
            var3 = {};
            var1 = _closure2_slot0;
            var3['questId'] = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var5 = var7[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var5 = var5.QuestContent;
            var5 = var5.QUEST_BOTTOM_SHEET;
            var3['questContent'] = var5;
            var5 = 23;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.QuestContentCTA;
            var5 = var5.CLAIM_REWARD;
            var3['questContentCTA'] = var5;
            var5 = _closure2_slot2;
            var3['sourceQuestContent'] = var5;
            var3 = var4.bind(var1)(var3);
            var2 = _closure2_slot1;
            var2 = var2.bind(var1)();
            return var1;
        };
        var1['onPress'] = var5;
        var5 = 18;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.cfY4PD;
        var5 = var6.bind(var7)(var5);
        var1['text'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function AnimatedFooter(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var5 = var2.onLayout;
            var9 = var2.ctaButton;
            var14 = var2.backButton;
            var7 = var2.style;
            var12 = var2.withSafeArea;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0005_ip = 42; continue _fun0005 }
 40:
            var12 = true;
 42:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = null;
            var17 = var2 != var14;
            if(!var17) { _fun0005_ip = 73; continue _fun0005 }
 67:
            var2 = false;
            var17 = var2 !== var14;
 73:
            _closure2_slot0 = var17;
            var10 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 25;
            var2 = var3[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var16 = var2.bottom;
            var2 = _closure1_slot12;
            var6 = var2.bind(var4)();
            var2 = 26;
            var2 = var3[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var13 = var2.width;
            _closure2_slot1 = var13;
            var2 = function useReducedMotion() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var1 = _closure1_slot6;
                    var1 = var1.useReducedMotion;
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var2.bind(var4)();
            _closure2_slot2 = var2;
            var10 = _closure1_slot0;
            var11 = 27;
            var3 = var3[var11];
            var15 = var10.bind(var4)(var3);
            var10 = var15.useSharedValue;
            var3 = 0;
            if(!var17) { _fun0005_ip = 187; continue _fun0005 }
 184:
            var3 = 1;
 187:
            var19 = var10.bind(var15)(var3);
            _closure2_slot3 = var19;
            var15 = _closure1_slot4;
            var10 = var15.useEffect;
            var3 = new Array(3);
            var3[0] = var17;
            var3[1] = var2;
            var3[2] = var19;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 28;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var2);
                    var6 = var7.withTiming;
                    var2 = _closure2_slot0;
                    var5 = 0;
                    if(!var2) { _fun0006_ip = 54; continue _fun0006 }
 51:
                    var5 = 1;
 54:
                    var2 = {};
                    var10 = _closure2_slot2;
                    var8 = 200;
                    if(!var10) { _fun0006_ip = 68; continue _fun0006 }
 66:
                    var8 = 0;
 68:
                    var2['duration'] = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var2 = var10.bind(var15)(var2, var3);
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = var18[var11];
            var10 = var17.bind(var4)(var2);
            var3 = var10.useAnimatedStyle;
            var2 = function B() {
                var1 = {'opacity': null, 'position': 'absolute', 'top': 0, 'left': 0};
                var3 = _closure2_slot3;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                var3 = {};
                var2 = _closure1_slot11;
                var3['translateX'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var15 = {};
            var15['animation'] = var19;
            var20 = _closure1_slot11;
            var15['H_PADDING_PX'] = var20;
            var2['__closure'] = var15;
            var15 = 7564903336036.0;
            var2['__workletHash'] = var15;
            var15 = _closure1_slot13;
            var2['__initData'] = var15;
            var15 = var3.bind(var10)(var2);
            var2 = var18[var11];
            var3 = var17.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function p() {
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 27;
                var3 = var10[var3];
                var8 = undefined;
                var6 = var9.bind(var8)(var3);
                var5 = var6.interpolate;
                var4 = _closure2_slot3;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var11 = _closure2_slot1;
                var12 = _closure1_slot11;
                var3 = 2;
                var3 = var3 * var12;
                var11 = var11 - var3;
                var3 = new Array(2);
                var3[0] = var11;
                var7 = _closure2_slot1;
                var11 = _closure1_slot11;
                var2 = 2.5;
                var2 = var2 * var11;
                var7 = var7 - var2;
                var2 = 29;
                var2 = var10[var2];
                var2 = var9.bind(var8)(var2);
                var2 = var2.LARGE_BUTTON_HEIGHT;
                var2 = var7 - var2;
                var3[1] = var2;
                var2 = [0, 1];
                var2 = var5.bind(var6)(var4, var2, var3);
                var1['width'] = var2;
                var2 = 'flex-end';
                var1['alignSelf'] = var2;
                return var1;
            };
            var10 = {};
            var20 = var18[var11];
            var20 = var17.bind(var4)(var20);
            var20 = var20.interpolate;
            var10['interpolate'] = var20;
            var10['animation'] = var19;
            var10['windowWidth'] = var13;
            var13 = _closure1_slot11;
            var10['H_PADDING_PX'] = var13;
            var13 = 29;
            var13 = var18[var13];
            var13 = var17.bind(var4)(var13);
            var13 = var13.LARGE_BUTTON_HEIGHT;
            var10['ICON_SIZE_PX'] = var13;
            var1['__closure'] = var10;
            var10 = 9095621288509.0;
            var1['__workletHash'] = var10;
            var10 = _closure1_slot14;
            var1['__initData'] = var10;
            var10 = var2.bind(var3)(var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot5;
            var1 = {};
            var13 = var6.container;
            var6 = new Array(3);
            var6[0] = var13;
            if(!var12) { _fun0005_ip = 478; continue _fun0005 }
 468:
            var13 = {};
            var13['paddingBottom'] = var16;
            var12 = var13;
 478:
            var6[1] = var12;
            var6[2] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var13 = _closure1_slot9;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = var6[var11];
            var5 = var7.bind(var4)(var5);
            var12 = var5.View;
            var5 = {};
            var5['style'] = var15;
            var5['children'] = var14;
            var12 = var13.bind(var4)(var12, var5);
            var5 = new Array(2);
            var5[0] = var12;
            var8 = _closure1_slot9;
            var6 = var6[var11];
            var6 = var7.bind(var4)(var6);
            var7 = var6.View;
            var6 = {};
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot9 = var8;
    var5 = var5.jsxs;
    var _closure1_slot10 = var5;
    var11 = 7;
    var5 = var7[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.spacing;
    var5 = var5.PX_16;
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'display': 'flex', 'flexGrow': 1, 'flexShrink': 1};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['paddingHorizontal'] = var11;
    var5['container'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot12 = var5;
    var5 = {};
    var8 = "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}";
    var5['code'] = var8;
    var _closure1_slot13 = var5;
    var5 = {};
    var8 = "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}";
    var5['code'] = var8;
    var _closure1_slot14 = var5;
    var5 = 30;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function QuestBottomSheetFooter(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var22 = var2.quest;
            var _closure2_slot0 = var22;
            var9 = var2.onLayout;
            var27 = var2.step;
            var24 = var2.isDefibrilating;
            var5 = undefined;
            if(!(var24 === var5)) { _fun0007_ip = 41; continue _fun0007 }
 39:
            var24 = false;
 41:
            var8 = var2.location;
            var17 = var2.onConnectConsoleNext;
            var12 = var2.onBack;
            var18 = var2.onDefib;
            var7 = var2.style;
            var6 = var2.withSafeArea;
            var19 = var2.sourceQuestContent;
            var _closure2_slot1 = var5;
            var3 = _closure1_slot15;
            var2 = {};
            var2['quest'] = var22;
            var2['sourceQuestContent'] = var19;
            var21 = var3.bind(var5)(var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 10;
            var10 = var3[var4];
            var11 = var2.bind(var5)(var10);
            var10 = var11.useQuestTaskDetails;
            var23 = var10.bind(var11)(var22);
            var10 = var3[var4];
            var11 = var2.bind(var5)(var10);
            var10 = var11.useIsQuestProgressing;
            var10 = var10.bind(var11)(var22);
            var11 = var3[var4];
            var14 = var2.bind(var5)(var11);
            var11 = var14.useTaskPlatformScreen;
            var15 = var11.bind(var14)(var22, var23);
            var14 = _closure1_slot3;
            var11 = 1;
            var11 = var14.bind(var5)(var15, var11);
            var16 = 0;
            var14 = var11[var16];
            var4 = var3[var4];
            var11 = var2.bind(var5)(var4);
            var4 = var11.useConnectedAccounts;
            var4 = var4.bind(var11)();
            var20 = var4.xboxAndPlaystationAccounts;
            _closure2_slot1 = var20;
            var15 = _closure1_slot4;
            var11 = var15.useMemo;
            var4 = new Array(2);
            var4[0] = var22;
            var4[1] = var20;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.supportedConsoles;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure2_slot1;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var11.bind(var15)(var1, var4);
            var1 = 19;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useShouldAllowMobileVideoTask;
            var2 = var22.config;
            var1 = {};
            var1['location'] = var8;
            var11 = var3.bind(var4)(var2, var1);
            var2 = var22.userStatus;
            var8 = null;
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0007_ip = 321; continue _fun0007 }
 315:
            var1 = var2.completedAt;
 321:
            var25 = var8 != var1;
            var2 = var22.userStatus;
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0007_ip = 346; continue _fun0007 }
 340:
            var1 = var2.claimedAt;
 346:
            var20 = var8 != var1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var28 = 20;
            var1 = var1[var28];
            var1 = var2.bind(var5)(var1);
            var1 = var1.QuestBottomSheetStep;
            var2 = var1.TASK_SELECT;
            var1 = null;
            if(!(var27 !== var2)) { _fun0007_ip = 945; continue _fun0007 }
 391:
            var4 = _closure1_slot9;
            var3 = _closure1_slot20;
            var2 = {};
            var2['onLayout'] = var9;
            var26 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var28];
            var9 = var26.bind(var5)(var9);
            var9 = var9.QuestBottomSheetStep;
            var9 = var9.CONSOLE_CONNECT;
            if(!(var27 !== var9)) { _fun0007_ip = 734; continue _fun0007 }
 442:
            var26 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var28];
            var9 = var26.bind(var5)(var9);
            var9 = var9.QuestBottomSheetStep;
            var26 = var9.TASK_STATUS;
            var9 = undefined;
            if(!(var27 === var26)) { _fun0007_ip = 732; continue _fun0007 }
 480:
            if(var25) { _fun0007_ip = 664; continue _fun0007 }
 486:
            if(var11) { _fun0007_ip = 626; continue _fun0007 }
 492:
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var11 = 9;
            var11 = var26[var11];
            var11 = var25.bind(var5)(var11);
            var11 = var11.TaskPlatformScreen;
            var11 = var11.CONSOLE;
            if(!(var14 === var11)) { _fun0007_ip = 577; continue _fun0007 }
 528:
            if(var10) { _fun0007_ip = 577; continue _fun0007 }
 531:
            var14 = _closure1_slot9;
            var11 = _closure1_slot18;
            var10 = {};
            var25 = var22.id;
            var10['questId'] = var25;
            var10['loading'] = var24;
            var10['disabled'] = var24;
            var10['onPress'] = var18;
            var10['sourceQuestContent'] = var19;
            var10 = var14.bind(var5)(var11, var10);
            _fun0007_ip = 624; continue _fun0007;
 577:
            var18 = _closure1_slot9;
            var14 = _closure1_slot19;
            var11 = {};
            var24 = var22.id;
            var11['questId'] = var24;
            var24 = var21.claim;
            var11['onPress'] = var24;
            var24 = true;
            var11['disabled'] = var24;
            var11['sourceQuestContent'] = var19;
            var10 = var18.bind(var5)(var14, var11);
 624:
            _fun0007_ip = 662; continue _fun0007;
 626:
            var18 = _closure1_slot9;
            var14 = _closure1_slot16;
            var11 = {};
            var24 = var22.id;
            var11['questId'] = var24;
            var11['taskDetails'] = var23;
            var11['sourceQuestContent'] = var19;
            var10 = var18.bind(var5)(var14, var11);
 662:
            _fun0007_ip = 729; continue _fun0007;
 664:
            var18 = _closure1_slot9;
            var14 = _closure1_slot19;
            var11 = {};
            var22 = var22.id;
            var11['questId'] = var22;
            var22 = var21.claim;
            var11['onPress'] = var22;
            var11['disabled'] = var20;
            var20 = var21.isLoading;
            if(var20) { _fun0007_ip = 713; continue _fun0007 }
 707:
            var20 = var21.isClaiming;
 713:
            var11['loading'] = var20;
            var11['sourceQuestContent'] = var19;
            var10 = var18.bind(var5)(var14, var11);
 729:
            var9 = var10;
 732:
            _fun0007_ip = 767; continue _fun0007;
 734:
            var14 = _closure1_slot9;
            var11 = _closure1_slot17;
            var10 = {};
            var10['onPress'] = var17;
            var15 = var15.length;
            var15 = var16 === var15;
            var10['disabled'] = var15;
            var9 = var14.bind(var5)(var11, var10);
 767:
            var2['ctaButton'] = var9;
            var8 = var8 != var12;
            if(!var8) { _fun0007_ip = 925; continue _fun0007 }
 782:
            var11 = _closure1_slot9;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 21;
            var9 = var16[var9];
            var9 = var14.bind(var5)(var9);
            var10 = var9.IconButton;
            var9 = {};
            var15 = 18;
            var17 = var16[var15];
            var17 = var14.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var16[var15];
            var15 = var14.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.13/7kZ;
            var15 = var17.bind(var18)(var15);
            var9['accessibilityLabel'] = var15;
            var15 = 'secondary';
            var9['variant'] = var15;
            var15 = _closure1_slot9;
            var13 = 22;
            var13 = var16[var13];
            var13 = var14.bind(var5)(var13);
            var14 = var13.ArrowLargeLeftIcon;
            var13 = {};
            var13 = var15.bind(var5)(var14, var13);
            var9['icon'] = var13;
            var9['onPress'] = var12;
            var12 = 'lg';
            var9['size'] = var12;
            var8 = var11.bind(var5)(var10, var9);
 925:
            var2['backButton'] = var8;
            var2['style'] = var7;
            var2['withSafeArea'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 945:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useQuestRewardClaimHandler'] = var2;
    return var1;
})();
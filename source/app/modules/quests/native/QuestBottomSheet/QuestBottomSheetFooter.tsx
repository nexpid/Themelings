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
case 0:
            var1 = arg1;
            var13 = var1.quest;
            var _closure2_slot0 = var13;
            var9 = var1.hideActionSheet;
            var17 = undefined;
            if(!(var9 === var17)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = true;
case 2:
            var _closure2_slot1 = var9;
            var8 = var1.questContent;
            if(!(var8 === var17)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var17)(var3);
            var3 = var3.QuestContent;
            var8 = var3.QUEST_BOTTOM_SHEET;
case 4:
            var _closure2_slot2 = var8;
            var7 = var1.onSuccess;
            var _closure2_slot3 = var7;
            var6 = var1.sourceQuestContent;
            var _closure2_slot4 = var6;
            var _closure2_slot5 = var17;
            var _closure2_slot6 = var17;
            var _closure2_slot7 = var17;
            var _closure2_slot8 = var17;
            var _closure2_slot9 = var17;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 11;
            var4 = var15[var1];
            var5 = var12.bind(var17)(var4);
            var4 = var5.useProgressState;
            var14 = var4.bind(var5)(var13);
            var4 = 12;
            var4 = var15[var4];
            var10 = var12.bind(var17)(var4);
            var5 = var10.hasCollectiblesQuestReward;
            var4 = var13.config;
            var11 = var5.bind(var10)(var4);
            var16 = _closure1_slot4;
            var10 = var16.useMemo;
            var4 = var13.config;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getDefaultReward;
                var1 = _closure2_slot0;
                var1 = var1.config;
                var1 = var2.bind(var3)(var1);
                var1 = var1.skuId;
                return var1;
            };
            var10 = var10.bind(var16)(var4, var5);
            var4 = 14;
            var4 = var15[var4];
            var5 = var12.bind(var17)(var4);
            var4 = var5.useFetchCollectiblesProduct;
            var1 = var15[var1];
            var1 = var12.bind(var17)(var1);
            var1 = var1.QuestProgressState;
            var12 = var1.COMPLETED;
            var15 = null;
            var1 = null;
            if(!(var14 === var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = null;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var1 = var10;
case 6:
            var1 = var4.bind(var5)(var1);
            var12 = var1.product;
            _closure2_slot5 = var12;
            var20 = var1.isFetching;
            _closure2_slot6 = var20;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var5 = 15;
            var1 = var19[var5];
            var11 = var16.bind(var17)(var1);
            var10 = var11.useStateFromStoresObject;
            var1 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
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
            var1 = var10.bind(var11)(var4, var1);
            var4 = var1.isClaimingReward;
            var1 = var1.isFetchingRewardCode;
            _closure2_slot7 = var1;
            var10 = var19[var5];
            var18 = var16.bind(var17)(var10);
            var14 = var18.useStateFromStores;
            var10 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var10;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 3:
                    var2 = var3.hasVerifiedEmailOrPhone;
                    var1 = var2.bind(var3)();
case 9:
                    return var1;
                }
            };
            var11 = var14.bind(var18)(var11, var10);
            _closure2_slot8 = var11;
            var5 = var19[var5];
            var18 = var16.bind(var17)(var5);
            var14 = var18.useStateFromStores;
            var5 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 3:
                    var1 = var2.verified;
case 10:
                    return var1;
                }
            };
            var10 = var14.bind(var18)(var10, var5);
            _closure2_slot9 = var10;
            var18 = _closure1_slot4;
            var14 = var18.useMemo;
            var5 = new Array(2);
            var5[0] = var20;
            var5[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var1 = _closure2_slot7;
case 11:
                    return var1;
                }
            };
            var5 = var14.bind(var18)(var1, var5);
            var14 = 16;
            var1 = var19[var14];
            var22 = var16.bind(var17)(var1);
            var21 = var22.useToken;
            var18 = _closure1_slot1;
            var1 = 8;
            var20 = var19[var1];
            var20 = var18.bind(var17)(var20);
            var20 = var20.colors;
            var20 = var20.BACKGROUND_BASE_LOWER;
            var21 = var21.bind(var22)(var20);
            var20 = var19[var14];
            var23 = var16.bind(var17)(var20);
            var22 = var23.useToken;
            var20 = var19[var1];
            var20 = var18.bind(var17)(var20);
            var20 = var20.colors;
            var20 = var20.BACKGROUND_BASE_LOW;
            var20 = var22.bind(var23)(var20);
            var14 = var19[var14];
            var16 = var16.bind(var17)(var14);
            var14 = var16.useToken;
            var1 = var19[var1];
            var1 = var18.bind(var17)(var1);
            var1 = var1.colors;
            var1 = var1.BACKGROUND_BASE_LOWEST;
            var16 = var14.bind(var16)(var1);
            if(!(var15 != var12)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = {};
            var18 = var12.styles;
            var19 = var15 == var18;
            var14 = undefined;
            if(var19) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var14 = var18.buttonColors;
case 15:
            if(!(var15 == var14)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var14 = new Array(0);
case 17:
            var1['buttonColors'] = var14;
            var18 = var12.styles;
            var19 = var15 == var18;
            var14 = undefined;
            if(var19) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var14 = var18.confettiColors;
case 19:
            if(!(var15 == var14)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var14 = new Array(0);
case 21:
            var1['confettiColors'] = var14;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var15 = 17;
            var14 = var19[var15];
            var14 = var18.bind(var17)(var14);
            var20 = var14.bind(var17)(var20);
            var14 = new Array(3);
            var14[0] = var20;
            var20 = var19[var15];
            var20 = var18.bind(var17)(var20);
            var20 = var20.bind(var17)(var21);
            var14[1] = var20;
            var15 = var19[var15];
            var15 = var18.bind(var17)(var15);
            var15 = var15.bind(var17)(var16);
            var14[2] = var15;
            var1['backgroundColors'] = var14;
            var12['styles'] = var1;
case 13:
            var1 = {};
            var1['isLoading'] = var5;
            var1['isClaiming'] = var4;
            var5 = _closure1_slot4;
            var4 = var5.useCallback;
            var3 = new Array(8);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var11;
            var3[3] = var10;
            var3[4] = var9;
            var3[5] = var8;
            var3[6] = var7;
            var3[7] = var6;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 18;
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
                var5 = _closure2_slot9;
                var1['currentUserHasVerifiedEmail'] = var5;
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
    var _closure1_slot16 = var2;
    var1 = function WatchTaskButton(arg1) {
        var1 = arg1;
        var10 = var1.questId;
        var9 = var1.sourceQuestContent;
        var7 = var1.taskDetails;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 19;
        var2 = var8[var2];
        var4 = undefined;
        var5 = var6.bind(var4)(var2);
        var3 = var5.useWatchTaskPressHandler;
        var2 = {};
        var2['questId'] = var10;
        var2['sourceQuestContent'] = var9;
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot10;
        var1 = 20;
        var1 = var8[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.Button;
        var1 = {'grow': true, 'size': 'lg'};
        var1['onPress'] = var5;
        var5 = 21;
        var5 = var8[var5];
        var6 = var6.bind(var4)(var5);
        var5 = var6.getVideoQuestWatchCtaText;
        var5 = var5.bind(var6)(var7);
        var1['text'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function NextButton(arg1) {
        var1 = arg1;
        var6 = var1.onPress;
        var5 = var1.disabled;
        var4 = _closure1_slot10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 20;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Button;
        var1 = {'grow': true, 'size': 'lg'};
        var1['onPress'] = var6;
        var1['disabled'] = var5;
        var5 = 27;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.a9OfTN;
        var5 = var6.bind(var7)(var5);
        var1['text'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
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
        var1 = 29;
        var1 = var9[var1];
        var4 = undefined;
        var2 = var8.bind(var4)(var1);
        var1 = var2.useTrackQuestContentClickedWithImpression;
        var1 = var1.bind(var2)();
        var _closure2_slot3 = var1;
        var3 = _closure1_slot10;
        var1 = 20;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.Button;
        var1 = {'grow': true, 'size': 'lg', 'variant': 'secondary'};
        var1['loading'] = var10;
        var1['disabled'] = var7;
        var10 = _closure1_slot10;
        var6 = 30;
        var6 = var9[var6];
        var6 = var8.bind(var4)(var6);
        var7 = var6.RefreshIcon;
        var6 = {};
        var6 = var10.bind(var4)(var7, var6);
        var1['icon'] = var6;
        var6 = 'end';
        var1['iconPosition'] = var6;
        var5 = function onPress(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure2_slot3;
                var3 = {};
                var1 = _closure2_slot0;
                var3['questId'] = var1;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var5 = var7[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var5 = var5.QuestContent;
                var5 = var5.QUEST_BOTTOM_SHEET;
                var3['questContent'] = var5;
                var5 = 31;
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
                if(!(var3 != var4)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var3 = _closure2_slot1;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
case 23:
                return var1;
            }
        };
        var1['onPress'] = var5;
        var5 = 27;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.nPThNb;
        var5 = var6.bind(var7)(var5);
        var1['text'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var1;
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
        var2 = 29;
        var2 = var9[var2];
        var4 = undefined;
        var3 = var8.bind(var4)(var2);
        var2 = var3.useTrackQuestContentClickedWithImpression;
        var2 = var2.bind(var3)();
        var _closure2_slot3 = var2;
        var3 = _closure1_slot10;
        var1 = 20;
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
            var1 = 10;
            var5 = var7[var1];
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var5 = var5.QuestContent;
            var5 = var5.QUEST_BOTTOM_SHEET;
            var3['questContent'] = var5;
            var5 = 31;
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
        var5 = 27;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.cfY4PE;
        var5 = var6.bind(var7)(var5);
        var1['text'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function AnimatedFooter(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var5 = var2.onLayout;
            var9 = var2.ctaButton;
            var14 = var2.backButton;
            var7 = var2.style;
            var12 = var2.withSafeArea;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0006_ip = 25; continue _fun0006 }
case 26:
            var12 = true;
case 25:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = null;
            var17 = var2 != var14;
            if(!var17) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var2 = false;
            var17 = var2 !== var14;
case 27:
            _closure2_slot0 = var17;
            var10 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 32;
            var2 = var3[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var13 = var2.bottom;
            var2 = _closure1_slot13;
            var6 = var2.bind(var4)();
            var2 = 33;
            var2 = var3[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var16 = var2.width;
            _closure2_slot1 = var16;
            var2 = function useReducedMotion() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 15;
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
            var11 = 34;
            var3 = var3[var11];
            var15 = var10.bind(var4)(var3);
            var10 = var15.useSharedValue;
            var3 = 0;
            if(!var17) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var3 = 1;
case 29:
            var19 = var10.bind(var15)(var3);
            _closure2_slot3 = var19;
            var15 = _closure1_slot4;
            var10 = var15.useEffect;
            var3 = new Array(3);
            var3[0] = var17;
            var3[1] = var2;
            var3[2] = var19;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var3 = var4.set;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 35;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var2);
                    var6 = var7.withTiming;
                    var2 = _closure2_slot0;
                    var5 = 0;
                    if(!var2) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var5 = 1;
case 31:
                    var2 = {};
                    var10 = _closure2_slot2;
                    var8 = 200;
                    if(!var10) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var8 = 0;
case 33:
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
            var2 = function b() {
                var1 = {'opacity': null, 'position': 'absolute', 'top': 0, 'left': 0};
                var3 = _closure2_slot3;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['opacity'] = var2;
                var3 = {};
                var2 = _closure1_slot12;
                var3['translateX'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var15 = {};
            var15['animation'] = var19;
            var20 = _closure1_slot12;
            var15['H_PADDING_PX'] = var20;
            var2['__closure'] = var15;
            var15 = 7564903336036.0;
            var2['__workletHash'] = var15;
            var15 = _closure1_slot14;
            var2['__initData'] = var15;
            var15 = var3.bind(var10)(var2);
            var2 = var18[var11];
            var3 = var17.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function E() {
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 34;
                var3 = var10[var3];
                var8 = undefined;
                var6 = var9.bind(var8)(var3);
                var5 = var6.interpolate;
                var4 = _closure2_slot3;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var11 = _closure2_slot1;
                var12 = _closure1_slot12;
                var3 = 2;
                var3 = var3 * var12;
                var11 = var11 - var3;
                var3 = new Array(2);
                var3[0] = var11;
                var7 = _closure2_slot1;
                var11 = _closure1_slot12;
                var2 = 2.5;
                var2 = var2 * var11;
                var7 = var7 - var2;
                var2 = 36;
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
            var10['windowWidth'] = var16;
            var16 = _closure1_slot12;
            var10['H_PADDING_PX'] = var16;
            var16 = 36;
            var16 = var18[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.LARGE_BUTTON_HEIGHT;
            var10['ICON_SIZE_PX'] = var16;
            var1['__closure'] = var10;
            var10 = 9095621288509.0;
            var1['__workletHash'] = var10;
            var10 = _closure1_slot15;
            var1['__initData'] = var10;
            var10 = var2.bind(var3)(var1);
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var1 = _closure1_slot9;
            var16 = var2.bind(var3)(var13, var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot5;
            var1 = {};
            var13 = var6.container;
            var6 = new Array(3);
            var6[0] = var13;
            if(!var12) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var13 = {};
            var13['paddingBottom'] = var16;
            var12 = var13;
case 35:
            var6[1] = var12;
            var6[2] = var7;
            var1['style'] = var6;
            var1['onLayout'] = var5;
            var13 = _closure1_slot10;
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
            var8 = _closure1_slot10;
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
    var _closure1_slot21 = var1;
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
    var5 = var5.ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var11 = 8;
    var5 = var7[var11];
    var5 = var12.bind(var1)(var5);
    var5 = var5.spacing;
    var5 = var5.PX_16;
    var _closure1_slot12 = var5;
    var5 = 9;
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
    var _closure1_slot13 = var5;
    var5 = {};
    var8 = "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}";
    var5['code'] = var8;
    var _closure1_slot14 = var5;
    var5 = {};
    var8 = "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}";
    var5['code'] = var8;
    var _closure1_slot15 = var5;
    var5 = 37;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function QuestBottomSheetFooter(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var22 = var2.quest;
            var _closure2_slot0 = var22;
            var9 = var2.onLayout;
            var30 = var2.step;
            var25 = var2.isDefibrilating;
            var5 = undefined;
            if(!(var25 === var5)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
            var25 = false;
case 37:
            var17 = var2.onConnectConsoleNext;
            var12 = var2.onBack;
            var18 = var2.onDefib;
            var7 = var2.style;
            var6 = var2.withSafeArea;
            var19 = var2.sourceQuestContent;
            var _closure2_slot1 = var5;
            var3 = _closure1_slot16;
            var2 = {};
            var2['quest'] = var22;
            var2['sourceQuestContent'] = var19;
            var21 = var3.bind(var5)(var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 11;
            var8 = var3[var4];
            var10 = var2.bind(var5)(var8);
            var8 = var10.useQuestTaskDetails;
            var23 = var8.bind(var10)(var22);
            var8 = var3[var4];
            var10 = var2.bind(var5)(var8);
            var8 = var10.useIsQuestProgressing;
            var10 = var8.bind(var10)(var22);
            var8 = var3[var4];
            var11 = var2.bind(var5)(var8);
            var8 = var11.useTaskPlatformScreen;
            var14 = var8.bind(var11)(var22, var23);
            var11 = _closure1_slot3;
            var8 = 1;
            var8 = var11.bind(var5)(var14, var8);
            var16 = 0;
            var14 = var8[var16];
            var4 = var3[var4];
            var8 = var2.bind(var5)(var4);
            var4 = var8.useConnectedAccounts;
            var4 = var4.bind(var8)();
            var15 = var4.xboxAndPlaystationAccounts;
            _closure2_slot1 = var15;
            var11 = _closure1_slot4;
            var8 = var11.useMemo;
            var4 = new Array(2);
            var4[0] = var22;
            var4[1] = var15;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
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
            var15 = var8.bind(var11)(var1, var4);
            var1 = 23;
            var4 = var3[var1];
            var11 = var2.bind(var5)(var4);
            var8 = var11.useHasWatchVideoOnMobileTasks;
            var4 = var22.config;
            var26 = var8.bind(var11)(var4);
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useMobileActivityQuest;
            var1 = var1.bind(var4)(var22);
            var11 = var1.isMobileActivityQuest;
            var4 = var1.launchMobileActivity;
            var24 = var1.questApplication;
            var1 = 24;
            var1 = var3[var1];
            var20 = var2.bind(var5)(var1);
            var8 = var20.usePrimaryCtaCopy;
            var1 = {};
            var1['quest'] = var22;
            var1['application'] = var24;
            var24 = var8.bind(var20)(var1);
            var1 = 19;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useMobileActivityPressHandler;
            var1 = {};
            var8 = var22.id;
            var1['questId'] = var8;
            var1['sourceQuestContent'] = var19;
            var1['launchMobileActivity'] = var4;
            var27 = var2.bind(var3)(var1);
            var2 = var22.userStatus;
            var8 = null;
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var1 = var2.completedAt;
case 39:
            var28 = var8 != var1;
            var2 = var22.userStatus;
            var3 = var8 == var2;
            var1 = undefined;
            if(var3) { _fun0008_ip = 41; continue _fun0008 }
case 42:
            var1 = var2.claimedAt;
case 41:
            var20 = var8 != var1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var31 = 25;
            var1 = var1[var31];
            var1 = var2.bind(var5)(var1);
            var1 = var1.QuestBottomSheetStep;
            var2 = var1.TASK_SELECT;
            var1 = null;
            if(!(var30 !== var2)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var4 = _closure1_slot10;
            var3 = _closure1_slot21;
            var2 = {};
            var2['onLayout'] = var9;
            var29 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var31];
            var9 = var29.bind(var5)(var9);
            var9 = var9.QuestBottomSheetStep;
            var9 = var9.CONSOLE_CONNECT;
            if(!(var30 !== var9)) { _fun0008_ip = 45; continue _fun0008 }
case 46:
            var29 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var31];
            var9 = var29.bind(var5)(var9);
            var9 = var9.QuestBottomSheetStep;
            var29 = var9.TASK_STATUS;
            var9 = undefined;
            if(!(var30 === var29)) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            if(var28) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            if(var26) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            if(var11) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var11 = 10;
            var11 = var28[var11];
            var11 = var26.bind(var5)(var11);
            var11 = var11.TaskPlatformScreen;
            var11 = var11.CONSOLE;
            if(!(var14 === var11)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            if(var10) { _fun0008_ip = 55; continue _fun0008 }
case 57:
            var14 = _closure1_slot10;
            var11 = _closure1_slot19;
            var10 = {};
            var26 = var22.id;
            var10['questId'] = var26;
            var10['loading'] = var25;
            var10['disabled'] = var25;
            var10['onPress'] = var18;
            var10['sourceQuestContent'] = var19;
            var10 = var14.bind(var5)(var11, var10);
            _fun0008_ip = 58; continue _fun0008;
case 55:
            var18 = _closure1_slot10;
            var14 = _closure1_slot20;
            var11 = {};
            var25 = var22.id;
            var11['questId'] = var25;
            var25 = var21.claim;
            var11['onPress'] = var25;
            var25 = true;
            var11['disabled'] = var25;
            var11['sourceQuestContent'] = var19;
            var10 = var18.bind(var5)(var14, var11);
case 58:
            _fun0008_ip = 59; continue _fun0008;
case 53:
            var18 = _closure1_slot10;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            var11 = 20;
            var11 = var26[var11];
            var11 = var25.bind(var5)(var11);
            var14 = var11.Button;
            var11 = {'grow': true, 'size': 'lg'};
            var11['onPress'] = var27;
            var11['text'] = var24;
            var24 = 18;
            var24 = var26[var24];
            var25 = var25.bind(var5)(var24);
            var24 = var25.getPrimaryCtaIcon;
            var24 = var24.bind(var25)(var22);
            var11['icon'] = var24;
            var10 = var18.bind(var5)(var14, var11);
case 59:
            _fun0008_ip = 60; continue _fun0008;
case 51:
            var18 = _closure1_slot10;
            var14 = _closure1_slot17;
            var11 = {};
            var24 = var22.id;
            var11['questId'] = var24;
            var11['taskDetails'] = var23;
            var11['sourceQuestContent'] = var19;
            var10 = var18.bind(var5)(var14, var11);
case 60:
            _fun0008_ip = 61; continue _fun0008;
case 49:
            var18 = _closure1_slot10;
            var14 = _closure1_slot20;
            var11 = {};
            var22 = var22.id;
            var11['questId'] = var22;
            var22 = var21.claim;
            var11['onPress'] = var22;
            var11['disabled'] = var20;
            var20 = var21.isLoading;
            if(var20) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var20 = var21.isClaiming;
case 62:
            var11['loading'] = var20;
            var11['sourceQuestContent'] = var19;
            var10 = var18.bind(var5)(var14, var11);
case 61:
            var9 = var10;
case 47:
            _fun0008_ip = 64; continue _fun0008;
case 45:
            var14 = _closure1_slot10;
            var11 = _closure1_slot18;
            var10 = {};
            var10['onPress'] = var17;
            var15 = var15.length;
            var15 = var16 === var15;
            var10['disabled'] = var15;
            var9 = var14.bind(var5)(var11, var10);
case 64:
            var2['ctaButton'] = var9;
            var8 = var8 != var12;
            if(!var8) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var11 = _closure1_slot10;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 26;
            var9 = var16[var9];
            var9 = var14.bind(var5)(var9);
            var10 = var9.IconButton;
            var9 = {};
            var15 = 27;
            var17 = var16[var15];
            var17 = var14.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var15 = var16[var15];
            var15 = var14.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15["13/7kX"];
            var15 = var17.bind(var18)(var15);
            var9['accessibilityLabel'] = var15;
            var15 = 'secondary';
            var9['variant'] = var15;
            var15 = _closure1_slot10;
            var13 = 28;
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
case 65:
            var2['backButton'] = var8;
            var2['style'] = var7;
            var2['withSafeArea'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 43:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useQuestRewardClaimHandler'] = var2;
    return var1;
})();
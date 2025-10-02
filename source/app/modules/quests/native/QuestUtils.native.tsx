// app/modules/quests/native/QuestUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot11;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot11;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function openRewardClaimBottomSheet(arg1) {
        var1 = arg1;
        var9 = var1.questId;
        var8 = var1.questContent;
        var7 = var1.questContentPosition;
        var6 = var1.sourceQuestContent;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var3 = 3;
        var3 = var2[var3];
        var11 = undefined;
        var5 = var4.bind(var11)(var3);
        var4 = var5.openLazy;
        var10 = _closure1_slot0;
        var3 = 5;
        var3 = var2[var3];
        var10 = var10.bind(var11)(var3);
        var3 = 6;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var10.bind(var11)(var3, var2);
        var2 = _closure1_slot5;
        var1 = {};
        var1['questId'] = var9;
        var1['questContent'] = var8;
        var1['questContentPosition'] = var7;
        var1['sourceQuestContent'] = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.QuestsExperimentLocations;
    var _closure1_slot4 = var5;
    var5 = var4.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY;
    var _closure1_slot5 = var5;
    var4 = var4.QUEST_REWARD_DETAILS_BOTTOM_SHEET_KEY;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot7 = var4;
    var5 = function viewReward(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var7 = var1.quest;
            var13 = var1.product;
            var6 = var1.questContent;
            var5 = var1.questContentPosition;
            var12 = var1.onSuccess;
            var4 = var1.sourceQuestContent;
            var8 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 7;
            var3 = var1[var9];
            var1 = undefined;
            var10 = var8.bind(var1)(var3);
            var8 = var10.hasQuestRewardCode;
            var3 = var7.config;
            var3 = var8.bind(var10)(var3);
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var9 = var8.bind(var1)(var3);
            var8 = var9.hasVirtualCurrencyReward;
            var3 = var7.config;
            var3 = var8.bind(var9)(var3);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 38:
            var3 = 9;
            var3 = var9[var3];
            var11 = var8.bind(var1)(var3);
            var10 = var11.openQuestCollectibleRewardModal;
            var3 = {};
            var3['quest'] = var7;
            var3['product'] = var13;
            var3['onSuccess'] = var12;
            var3 = var10.bind(var11)(var3);
            _fun0004_ip = 39; continue _fun0004;
case 17:
            var3 = 8;
            var3 = var9[var3];
            var9 = var8.bind(var1)(var3);
            var8 = var9.openQuestsOrbsRewardModal;
            var3 = {};
            var3['quest'] = var7;
            var3 = var8.bind(var9)(var3);
            _fun0004_ip = 39; continue _fun0004;
case 36:
            var3 = _closure1_slot12;
            var2 = {};
            var7 = var7.id;
            var2['questId'] = var7;
            var2['questContent'] = var6;
            var2['questContentPosition'] = var5;
            var2['sourceQuestContent'] = var4;
            var2 = var3.bind(var1)(var2);
case 39:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var4 = var6;
                    var7 = undefined;
                    var2 = undefined;
                    var3 = undefined;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 10;
                    var8 = var10[var8];
                    var12 = var9.bind(var7)(var8);
                    var11 = var12.getQuestLogger;
                    var8 = {};
                    var13 = _closure1_slot4;
                    var13 = var13.QUEST_HOME_MOBILE;
                    var8['location'] = var13;
                    var2 = var11.bind(var12)(var8);
                    var8 = 11;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var9 = var8.SharedQuestFields;
                    var8 = var9.build;
                    var6 = var6.config;
                    var6 = var8.bind(var9)(var6);
                    var8 = var6.rewardPlatforms;
                    var6 = 0;
                    var3 = var8[var6];
case 42: // try_start_0
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 12;
                    var6 = var11[var6];
                    var9 = var10.bind(var7)(var6);
                    var8 = var9.claimQuestReward;
                    var6 = var4.id;
                    var4 = var3;
                    var3 = 13;
                    var3 = var11[var3];
                    var3 = var10.bind(var7)(var3);
                    var3 = var3.QuestContent;
                    var3 = var3.QUEST_HOME_MOBILE;
                    var3 = var8.bind(var9)(var6, var4, var3);
                    SaveGenerator(address=187);
case 43:
                    return var3;
case 19:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 44; continue _fun0005 }
case 45: // try_end0
                    var4 = true;
                    return var4;
case 44:
                    return var3;
case 36: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = var2;
                    var3 = var4.error;
                    var2 = 'Error claiming reward';
                    var2 = var3.bind(var4)(var2, var6);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 14;
                    var2 = var8[var2];
                    var4 = var6.bind(var7)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var9 = 'CLAIM_QUEST_REWARD_ERROR';
                    var2['key'] = var9;
                    var11 = _closure1_slot0;
                    var5 = 15;
                    var9 = var8[var5];
                    var9 = var11.bind(var7)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var5 = var8[var5];
                    var5 = var11.bind(var7)(var5);
                    var5 = var5.t;
                    var5 = var5.CKsXk5;
                    var5 = var9.bind(var10)(var5);
                    var2['content'] = var5;
                    var5 = 16;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var2['icon'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = false;
                    return var2;
case 40:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot9 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 46; continue _fun0006 }
case 41:
                    var10 = var2.quest;
                    var9 = var2.questContent;
                    var8 = var2.questContentPosition;
                    var14 = var2.product;
                    var4 = var2.hideActionSheet;
                    var5 = var2.currentUserHasVerifiedEmailOrPhone;
                    var13 = var2.onSuccess;
                    var7 = var2.sourceQuestContent;
                    var6 = undefined;
                    SaveGenerator(address=67);
case 47:
                    return var6;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                    var3 = true;
                    if(!(var3 === var4)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 3;
                    var4 = var12[var4];
                    var11 = var11.bind(var6)(var4);
                    var4 = var11.hideActionSheet;
                    var4 = var4.bind(var11)();
case 50:
                    if(var5) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var5 = 14;
                    var5 = var17[var5];
                    var12 = var16.bind(var6)(var5);
                    var11 = var12.open;
                    var5 = {};
                    var15 = 'CLAIM_QUEST_REWARD_ERROR';
                    var5['key'] = var15;
                    var20 = _closure1_slot0;
                    var15 = 15;
                    var18 = var17[var15];
                    var18 = var20.bind(var6)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var15 = var17[var15];
                    var15 = var20.bind(var6)(var15);
                    var15 = var15.t;
                    var15 = var15.HZlu09;
                    var15 = var18.bind(var19)(var15);
                    var5['content'] = var15;
                    var15 = 16;
                    var15 = var17[var15];
                    var15 = var16.bind(var6)(var15);
                    var5['icon'] = var15;
                    var5 = var11.bind(var12)(var5);
                    var5 = false;
                    return var5;
case 52:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 7;
                    var5 = var12[var5];
                    var12 = var11.bind(var6)(var5);
                    var11 = var12.hasQuestRewardCode;
                    var5 = var10.config;
                    var5 = var11.bind(var12)(var5);
                    if(var5) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var5 = _closure1_slot9;
                    var5 = var5.bind(var6)(var10);
                    SaveGenerator(address=294);
case 56:
                    return var5;
case 57:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                    if(var11) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                    var12 = _closure1_slot8;
                    var11 = {};
                    var11['quest'] = var10;
                    var11['product'] = var14;
                    var11['questContent'] = var9;
                    var11['questContentPosition'] = var8;
                    var11['onSuccess'] = var13;
                    var11['sourceQuestContent'] = var7;
                    var11 = var12.bind(var6)(var11);
                    return var5;
case 58:
                    return var5;
case 54:
                    var5 = _closure1_slot12;
                    var4 = {};
                    var10 = var10.id;
                    var4['questId'] = var10;
                    var4['questContent'] = var9;
                    var4['questContentPosition'] = var8;
                    var4['sourceQuestContent'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 48:
                    return var2;
case 46:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var6 = 21;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/native/QuestUtils.native.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function openRewardDetailsBottomSheet(arg1) {
        var1 = arg1;
        var6 = var1.questId;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var3 = 3;
        var3 = var2[var3];
        var8 = undefined;
        var5 = var4.bind(var8)(var3);
        var4 = var5.openLazy;
        var7 = _closure1_slot0;
        var3 = 5;
        var3 = var2[var3];
        var7 = var7.bind(var8)(var3);
        var3 = 4;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var7.bind(var8)(var3, var2);
        var2 = _closure1_slot6;
        var1 = {};
        var1['questId'] = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var3['openRewardDetailsBottomSheet'] = var6;
    var3['viewReward'] = var5;
    var3['handleRewardClaimThenView'] = var4;
    var4 = function() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0007_ip = 41; continue _fun0007 }
case 60:
            var3 = {};
case 41:
            var4 = var3.scrollToQuestId;
            var _closure2_slot0 = var4;
            var3 = var3.mergeExistingRoutes;
            if(!(var3 === var1)) { _fun0007_ip = 61; continue _fun0007 }
case 33:
            var3 = false;
case 61:
            var _closure2_slot1 = var3;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 17;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.bind(var1)();
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.getRootNavigationRef;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    if(!(var3 != var4)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var5 = var4.isReady;
                    var5 = var5.bind(var4)();
                    if(!var5) { _fun0008_ip = 62; continue _fun0008 }
case 64:
                    var5 = _closure2_slot1;
                    var6 = null;
                    if(!var5) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var5 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2.getRootState;
                            var2 = var1.bind(var2)();
                            var1 = null;
                            if(!(var1 != var2)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                            var4 = var2.routes;
                            if(!var4) { _fun0009_ip = 67; continue _fun0009 }
case 3:
                            var4 = function isQuestsRoute(arg1) {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    var2 = arg1;
                                    var3 = var2.name;
                                    var1 = 'settings';
                                    var1 = var1 === var3;
                                    if(!var1) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                                    var2 = var2.params;
                                    var3 = null;
                                    var4 = var3 == var2;
                                    var3 = undefined;
                                    if(var4) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                                    var3 = var2.screen;
case 71:
                                    var2 = _closure1_slot7;
                                    var2 = var2.QUESTS;
                                    var1 = var3 === var2;
case 69:
                                    return var1;
                                }
                            };
                            var _closure4_slot0 = var4;
                            var4 = function searchRoutes(arg1) {
                                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                    var2 = _closure1_slot10;
                                    var9 = undefined;
                                    var1 = arg1;
                                    var8 = var2.bind(var9)(var1);
                                    var3 = var8.bind(var9)();
                                    var2 = var3.done;
                                    var1 = null;
                                    var6 = var3;
                                    var5 = undefined;
                                    if(var2) { _fun0011_ip = 73; continue _fun0011 }
case 74:
                                    var2 = var6.value;
                                    var3 = _closure4_slot0;
                                    var3 = var3.bind(var9)(var2);
                                    if(var3) { _fun0011_ip = 75; continue _fun0011 }
case 28:
                                    var3 = var2.state;
                                    var10 = var5;
                                    if(!(var1 != var3)) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                                    var3 = var3.routes;
                                    var10 = var5;
                                    if(!var3) { _fun0011_ip = 76; continue _fun0011 }
case 78:
                                    var4 = _closure4_slot1;
                                    var3 = var2.state;
                                    var3 = var3.routes;
                                    var3 = var4.bind(var9)(var3);
                                    var10 = var3;
                                    if(var10) { _fun0011_ip = 79; continue _fun0011 }
case 76:
                                    var11 = var8.bind(var9)();
                                    var4 = var11.done;
                                    var5 = var10;
                                    var6 = var11;
                                    if(var4) { _fun0011_ip = 73; continue _fun0011 }
case 80:
                                    _fun0011_ip = 74; continue _fun0011;
case 79:
                                    return var3;
case 75:
                                    return var2;
case 73:
                                    return var1;
                                }
                            };
                            var _closure4_slot1 = var4;
                            var3 = var2.routes;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            return var2;
case 67:
                            return var1;
                        }
                    };
                    var6 = var5.bind(var1)(var4);
case 65:
                    var5 = {};
                    var8 = _closure1_slot7;
                    var8 = var8.QUESTS;
                    var5['screen'] = var8;
                    var8 = _closure2_slot0;
                    var9 = var3 != var8;
                    var8 = '';
                    if(!var9) { _fun0008_ip = 81; continue _fun0008 }
case 82:
                    var8 = _closure2_slot0;
case 81:
                    var5['subsection'] = var8;
                    var7 = _closure2_slot1;
                    if(!var7) { _fun0008_ip = 83; continue _fun0008 }
case 84:
                    if(!(var3 == var6)) { _fun0008_ip = 17; continue _fun0008 }
case 83:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 19;
                    var2 = var7[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openUserSettings;
                    var2 = var2.bind(var3)(var5);
                    _fun0008_ip = 62; continue _fun0008;
case 17:
                    var3 = var4.navigate;
                    var2 = {};
                    var7 = 'settings';
                    var2['name'] = var7;
                    var6 = var6.key;
                    var2['key'] = var6;
                    var2['params'] = var5;
                    var2 = var3.bind(var4)(var2);
case 62:
                    return var1;
                }
            };
            var2 = 1;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['openQuestHome'] = var4;
    var2 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 20;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            var4 = var3.mimetype;
            var2 = 'video/mp4';
            var2 = var2 === var4;
            if(var1) { _fun0012_ip = 85; continue _fun0012 }
case 86:
            var1 = var2;
            if(var2) { _fun0012_ip = 87; continue _fun0012 }
case 67:
            var4 = var3.mimetype;
            var3 = 'video/webm';
            var1 = var3 === var4;
case 87:
            _fun0012_ip = 65; continue _fun0012;
case 85:
            var1 = var2;
case 65:
            return var1;
        }
    };
    var3['isHeroVideoSupported'] = var2;
    return var1;
})();
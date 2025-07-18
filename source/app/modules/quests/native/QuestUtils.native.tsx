// app/modules/quests/native/QuestUtils.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var5 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
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
    var _closure1_slot10 = var1;
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
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.quest;
            var11 = var1.product;
            var6 = var1.questContent;
            var5 = var1.questContentPosition;
            var10 = var1.onSuccess;
            var4 = var1.sourceQuestContent;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var9 = var8.bind(var1)(var3);
            var8 = var9.hasQuestRewardCode;
            var3 = var7.config;
            var3 = var8.bind(var9)(var3);
            if(var3) { _fun0001_ip = 133; continue _fun0001 }
 83:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 8;
            var3 = var9[var3];
            var9 = var8.bind(var1)(var3);
            var8 = var9.openQuestCollectibleRewardModal;
            var3 = {};
            var3['quest'] = var7;
            var3['product'] = var11;
            var3['onSuccess'] = var10;
            var3 = var8.bind(var9)(var3);
            _fun0001_ip = 169; continue _fun0001;
 133:
            var3 = _closure1_slot10;
            var2 = {};
            var7 = var7.id;
            var2['questId'] = var7;
            var2['questContent'] = var6;
            var2['questContentPosition'] = var5;
            var2['sourceQuestContent'] = var4;
            var2 = var3.bind(var1)(var2);
 169:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 342; continue _fun0002 }
 13:
                    var4 = var6;
                    var7 = undefined;
                    var2 = undefined;
                    var3 = undefined;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 9;
                    var8 = var10[var8];
                    var12 = var9.bind(var7)(var8);
                    var11 = var12.getQuestLogger;
                    var8 = {};
                    var13 = _closure1_slot4;
                    var13 = var13.QUEST_HOME_MOBILE;
                    var8['location'] = var13;
                    var2 = var11.bind(var12)(var8);
                    var8 = 10;
                    var8 = var10[var8];
                    var8 = var9.bind(var7)(var8);
                    var9 = var8.SharedQuestFields;
                    var8 = var9.build;
                    var6 = var6.config;
                    var6 = var8.bind(var9)(var6);
                    var8 = var6.rewardPlatforms;
                    var6 = 0;
                    var3 = var8[var6];
 118: // try_start_0
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 11;
                    var6 = var11[var6];
                    var9 = var10.bind(var7)(var6);
                    var8 = var9.claimQuestReward;
                    var6 = var4.id;
                    var4 = var3;
                    var3 = 12;
                    var3 = var11[var3];
                    var3 = var10.bind(var7)(var3);
                    var3 = var3.QuestContent;
                    var3 = var3.QUEST_HOME_MOBILE;
                    var3 = var8.bind(var9)(var6, var4, var3);
                    SaveGenerator(address=187);
 185:
                    return var3;
 187:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 198; continue _fun0002 }
 193: // try_end0
                    var4 = true;
                    return var4;
 198:
                    return var3;
 201: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var4 = var2;
                    var3 = var4.error;
                    var2 = 'Error claiming reward';
                    var2 = var3.bind(var4)(var2, var6);
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 13;
                    var2 = var8[var2];
                    var4 = var6.bind(var7)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var9 = 'CLAIM_QUEST_REWARD_ERROR';
                    var2['key'] = var9;
                    var11 = _closure1_slot0;
                    var5 = 14;
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
                    var5 = 15;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var2['icon'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = false;
                    return var2;
 342:
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 389; continue _fun0003 }
 13:
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
 65:
                    return var6;
 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 386; continue _fun0003 }
 76:
                    var3 = true;
                    if(!(var3 === var4)) { _fun0003_ip = 115; continue _fun0003 }
 82:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 3;
                    var4 = var12[var4];
                    var11 = var11.bind(var6)(var4);
                    var4 = var11.hideActionSheet;
                    var4 = var4.bind(var11)();
 115:
                    if(var5) { _fun0003_ip = 242; continue _fun0003 }
 121:
                    var16 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var5 = 13;
                    var5 = var17[var5];
                    var12 = var16.bind(var6)(var5);
                    var11 = var12.open;
                    var5 = {};
                    var15 = 'CLAIM_QUEST_REWARD_ERROR';
                    var5['key'] = var15;
                    var20 = _closure1_slot0;
                    var15 = 14;
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
                    var15 = 15;
                    var15 = var17[var15];
                    var15 = var16.bind(var6)(var15);
                    var5['icon'] = var15;
                    var5 = var11.bind(var12)(var5);
                    var5 = false;
                    return var5;
 242:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var5 = 7;
                    var5 = var12[var5];
                    var12 = var11.bind(var6)(var5);
                    var11 = var12.hasQuestRewardCode;
                    var5 = var10.config;
                    var5 = var11.bind(var12)(var5);
                    if(var5) { _fun0003_ip = 347; continue _fun0003 }
 281:
                    var5 = _closure1_slot9;
                    var5 = var5.bind(var6)(var10);
                    SaveGenerator(address=294);
 292:
                    return var5;
 294:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                    if(var11) { _fun0003_ip = 344; continue _fun0003 }
 300:
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
 344:
                    return var5;
 347:
                    var5 = _closure1_slot10;
                    var4 = {};
                    var10 = var10.id;
                    var4['questId'] = var10;
                    var4['questContent'] = var9;
                    var4['questContentPosition'] = var8;
                    var4['sourceQuestContent'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 386:
                    return var2;
 389:
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
    var6 = 19;
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
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arguments[0];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 13; continue _fun0004 }
 11:
            var3 = {};
 13:
            var3 = var3.scrollToQuestId;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.bind(var1)();
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var5 = _closure1_slot7;
                    var5 = var5.QUESTS;
                    var2['screen'] = var5;
                    var7 = _closure2_slot0;
                    var5 = null;
                    var7 = var5 != var7;
                    var5 = '';
                    if(!var7) { _fun0005_ip = 72; continue _fun0005 }
 68:
                    var5 = _closure2_slot0;
 72:
                    var2['subsection'] = var5;
                    var2 = var3.bind(var4)(var2);
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
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            var4 = var3.mimetype;
            var2 = 'video/mp4';
            var2 = var2 === var4;
            if(var1) { _fun0006_ip = 81; continue _fun0006 }
 57:
            var1 = var2;
            if(var2) { _fun0006_ip = 79; continue _fun0006 }
 63:
            var4 = var3.mimetype;
            var3 = 'video/webm';
            var1 = var3 === var4;
 79:
            _fun0006_ip = 84; continue _fun0006;
 81:
            var1 = var2;
 84:
            return var1;
        }
    };
    var3['isHeroVideoSupported'] = var2;
    return var1;
})();
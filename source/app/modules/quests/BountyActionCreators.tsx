// app/modules/quests/BountyActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchQuestHomeBounties() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = undefined;
                    var6 = undefined;
                    var16 = undefined;
                    var11 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var _closure4_slot2 = var2;
                    var3 = _closure1_slot4;
                    var3 = var3.isFetchingQuestHomeBounties;
                    if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var9 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var7 = var5[var3];
                    var10 = var9.bind(var2)(var7);
                    var9 = var10.dispatch;
                    var7 = {};
                    var12 = 'BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN';
                    var7['type'] = var12;
                    var7 = var9.bind(var10)(var7);
                    var7 = _closure1_slot0;
                    var14 = 4;
                    var5 = var5[var14];
                    var5 = var7.bind(var2)(var5);
                    var5 = var5.QuestPlacement;
                    var6 = var5.QUEST_HOME_MOBILE_CAROUSEL;
case 6: // try_start_0
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 5;
                    var5 = var9[var5];
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.getSession;
                    var5 = var5.bind(var7)();
                    SaveGenerator(address=155);
case 7:
                    return var5;
case 8:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var16 = var5;
                    var9 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 6;
                    var7 = var12[var7];
                    var10 = var9.bind(var2)(var7);
                    var7 = var10.getOrRefreshAdSession;
                    var15 = var7.bind(var10)();
                    var10 = global;
                    var13 = var10.Date;
                    var7 = var13.now;
                    var7 = var7.bind(var13)();
                    var11 = var7;
                    _closure4_slot0 = var7;
                    var7 = 7;
                    var7 = var12[var7];
                    var7 = var9.bind(var2)(var7);
                    var12 = var7.HTTP;
                    var9 = var12.get;
                    var7 = {};
                    var13 = _closure1_slot5;
                    var13 = var13.QUESTS_GET_DECISIONS;
                    var7['url'] = var13;
                    var13 = {};
                    var17 = var6;
                    var13['placement'] = var17;
                    var15 = var15.uuid;
                    var13['client_ad_session_id'] = var15;
                    var15 = null;
                    var17 = var15 == var5;
                    var15 = undefined;
                    if(var17) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                    var15 = var16.uuid;
case 11:
                    var13['client_heartbeat_session_id'] = var15;
                    var13['num_decisions_requested'] = var14;
                    var7['query'] = var13;
                    var13 = false;
                    var7['rejectWithError'] = var13;
                    var7 = var9.bind(var12)(var7);
                    SaveGenerator(address=327);
case 13:
                    return var7;
case 14:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var9 = var7.body;
                    _closure4_slot1 = var9;
                    var10 = var10.Map;
                    var12 = var10.prototype;
                    var12 = Object.create(var12, {constructor: {value: var10}});
                    var19 = var12;
                    var10 = new var19[var10](var18);
                    var12 = var10 instanceof Object ? var10 : var12;
                    _closure4_slot2 = var12;
                    var10 = var9.decisions;
                    var9 = var10.flatMap;
                    var8 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var6 = arg1;
                            var2 = var6.creative;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                            var1 = var6.creative;
                            var3 = var1.creative_type;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var2 = var2.AdCreativeType;
                            var2 = var2.BOUNTY;
                            if(!(var3 === var2)) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 9;
                            var1 = var5[var1];
                            var7 = var3.bind(var4)(var1);
                            var2 = var7.bountyFromServer;
                            var1 = var6.creative;
                            var1 = var1.creative_content;
                            var2 = var2.bind(var7)(var1);
                            var1 = 10;
                            var1 = var5[var1];
                            var5 = var3.bind(var4)(var1);
                            var4 = var5.questAdDecisionFromAdDecision;
                            var3 = {};
                            var7 = _closure4_slot0;
                            var3['fetchedAt'] = var7;
                            var7 = _closure4_slot1;
                            var7 = var7.request_id;
                            var3['requestId'] = var7;
                            var7 = var2.id;
                            var3['adCreativeId'] = var7;
                            var5 = var4.bind(var5)(var6, var3);
                            var4 = _closure4_slot2;
                            var3 = var4.set;
                            var1 = var2.id;
                            var1 = var3.bind(var4)(var1, var5);
                            var1 = new Array(1);
                            var1[0] = var2;
                            return var1;
case 17:
                            var1 = new Array(0);
                            return var1;
                        }
                    };
                    var13 = var9.bind(var10)(var8);
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var3];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var14 = 'BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS';
                    var8['type'] = var14;
                    var8['bounties'] = var13;
                    var13 = var6;
                    var8['placement'] = var13;
                    var8['adDecisionsByAdCreativeId'] = var12;
                    var8['fetchedAt'] = var11;
                    var8 = var9.bind(var10)(var8);
case 20: // try_end0
                    _fun0001_ip = 4; continue _fun0001;
case 15:
                    return var7;
case 9:
                    return var5;
case 21: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = var9[var3];
                    var5 = var7.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var10 = 'BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE';
                    var3['type'] = var10;
                    var3['placement'] = var6;
                    var6 = 11;
                    var6 = var9[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var19 = var7;
                    var18 = var8;
                    var6 = new var19[var6](var18, var17);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _claimBountyReward() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var6 = var7;
                    var2 = undefined;
                    var12 = undefined;
                    var5 = _closure1_slot4;
                    var3 = var5.isClaimingBountyReward;
                    var3 = var3.bind(var5)(var7);
                    if(var3) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var5 = var5[var3];
                    var8 = var7.bind(var2)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var9 = 'BOUNTIES_CLAIM_REWARD_BEGIN';
                    var5['type'] = var9;
                    var9 = var6;
                    var5['bountyId'] = var9;
                    var5 = var7.bind(var8)(var5);
case 26: // try_start_0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 5;
                    var5 = var8[var5];
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.getSession;
                    var5 = var5.bind(var7)();
                    SaveGenerator(address=130);
case 27:
                    return var5;
case 28:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var12 = var5;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var7 = var9[var7];
                    var10 = var8.bind(var2)(var7);
                    var7 = var10.getOrRefreshAdSession;
                    var11 = var7.bind(var10)();
                    var7 = 7;
                    var7 = var9[var7];
                    var7 = var8.bind(var2)(var7);
                    var9 = var7.HTTP;
                    var8 = var9.post;
                    var7 = {};
                    var14 = _closure1_slot5;
                    var13 = var14.QUESTS_CREATIVES_CLAIM_REWARD;
                    var10 = var6;
                    var10 = var13.bind(var14)(var10);
                    var7['url'] = var10;
                    var10 = {};
                    var11 = var11.uuid;
                    var10['client_ad_session_id'] = var11;
                    var11 = null;
                    var13 = var11 == var5;
                    var11 = undefined;
                    if(var13) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                    var11 = var12.uuid;
case 31:
                    var10['client_heartbeat_session_id'] = var11;
                    var7['body'] = var10;
                    var10 = false;
                    var7['rejectWithError'] = var10;
                    var7 = var8.bind(var9)(var7);
                    SaveGenerator(address=273);
case 33:
                    return var7;
case 34:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var3];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'BOUNTIES_CLAIM_REWARD_SUCCESS';
                    var8['type'] = var11;
                    var11 = var6;
                    var8['bountyId'] = var11;
                    var8 = var9.bind(var10)(var8);
case 37: // try_end0
                    _fun0003_ip = 24; continue _fun0003;
case 35:
                    return var7;
case 29:
                    return var5;
case 38: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = var9[var3];
                    var5 = var7.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var10 = 'BOUNTIES_CLAIM_REWARD_FAILURE';
                    var3['type'] = var10;
                    var3['bountyId'] = var6;
                    var6 = 11;
                    var6 = var9[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var16 = var7;
                    var15 = var8;
                    var6 = new var16[var6](var15, var14);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
case 24:
                    return var2;
case 22:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/BountyActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchQuestHomeBounties() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestHomeBounties'] = var4;
    var2 = function claimBountyReward() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['claimBountyReward'] = var2;
    return var1;
})();
// app/modules/quests/BountyActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function fetchBountiesAndDispatch() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _fetchBountiesAndDispatch() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = arg1;
                    var2 = undefined;
                    var6 = undefined;
                    var10 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var _closure4_slot2 = var2;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 3;
                    var3 = var8[var3];
                    var3 = var9.bind(var2)(var3);
                    var3 = var3.QuestPlacement;
                    var6 = var3.QUEST_HOME_MOBILE_CAROUSEL;
                    var9 = _closure1_slot1;
                    var3 = 4;
                    var8 = var8[var3];
                    var11 = var9.bind(var2)(var8);
                    var9 = var11.dispatch;
                    var8 = {};
                    var12 = 'BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN';
                    var8['type'] = var12;
                    var8 = var9.bind(var11)(var8);
case 4: // try_start_0
                    var8 = global;
                    var11 = var8.Date;
                    var9 = var11.now;
                    var9 = var9.bind(var11)();
                    var10 = var9;
                    _closure4_slot0 = var9;
                    var5 = var5.bind(var2)();
                    SaveGenerator(address=138);
case 5:
                    return var5;
case 6:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    _closure4_slot1 = var5;
                    var8 = var8.Map;
                    var9 = var8.prototype;
                    var9 = Object.create(var9, {constructor: {value: var8}});
                    var15 = var9;
                    var8 = new var15[var8](var14);
                    var11 = var8 instanceof Object ? var8 : var9;
                    _closure4_slot2 = var11;
                    var9 = var5.decisions;
                    var8 = var9.flatMap;
                    var7 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var6 = arg1;
                            var2 = var6.creative;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                            var1 = var6.creative;
                            var3 = var1.creative_type;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 5;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var2 = var2.AdCreativeType;
                            var2 = var2.BOUNTY;
                            if(!(var3 === var2)) { _fun0002_ip = 9; continue _fun0002 }
case 11:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 6;
                            var1 = var5[var1];
                            var7 = var3.bind(var4)(var1);
                            var2 = var7.bountyFromServer;
                            var1 = var6.creative;
                            var1 = var1.creative_content;
                            var2 = var2.bind(var7)(var1);
                            var1 = 7;
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
case 9:
                            var1 = new Array(0);
                            return var1;
                        }
                    };
                    var12 = var8.bind(var9)(var7);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var3];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var13 = 'BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS';
                    var7['type'] = var13;
                    var7['bounties'] = var12;
                    var12 = var6;
                    var7['placement'] = var12;
                    var7['adDecisionsByAdCreativeId'] = var11;
                    var7['fetchedAt'] = var10;
                    var7 = var8.bind(var9)(var7);
case 12: // try_end0
                    _fun0001_ip = 13; continue _fun0001;
case 7:
                    return var5;
case 14: // catch_target0
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
                    var6 = 8;
                    var6 = var9[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {constructor: {value: var6}});
                    var15 = var7;
                    var14 = var8;
                    var6 = new var15[var6](var14, var13);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['error'] = var6;
                    var3 = var4.bind(var5)(var3);
case 13:
                    return var2;
case 2:
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
    var1 = function _fetchQuestHomeBounties() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure1_slot4;
                    var3 = var3.isFetchingQuestHomeBounties;
                    if(var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var4 = _closure1_slot6;
                    var5 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 9;
                                var2 = var4[var2];
                                var7 = undefined;
                                var3 = var3.bind(var7)(var2);
                                var2 = var3.getSession;
                                var2 = var2.bind(var3)();
                                SaveGenerator(address=49);
case 21:
                                return var2;
case 22:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var3 = 10;
                                var3 = var11[var3];
                                var4 = var10.bind(var7)(var3);
                                var3 = var4.getOrRefreshAdSession;
                                var8 = var3.bind(var4)();
                                var3 = 11;
                                var3 = var11[var3];
                                var3 = var10.bind(var7)(var3);
                                var5 = var3.HTTP;
                                var4 = var5.get;
                                var3 = {};
                                var6 = _closure1_slot5;
                                var6 = var6.QUESTS_GET_DECISIONS;
                                var3['url'] = var6;
                                var6 = {};
                                var9 = 3;
                                var9 = var11[var9];
                                var9 = var10.bind(var7)(var9);
                                var9 = var9.QuestPlacement;
                                var9 = var9.QUEST_HOME_MOBILE_CAROUSEL;
                                var6['placement'] = var9;
                                var8 = var8.uuid;
                                var6['client_ad_session_id'] = var8;
                                var8 = null;
                                var8 = var8 == var2;
                                var7 = undefined;
                                if(var8) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                                var7 = var2.uuid;
case 25:
                                var6['client_heartbeat_session_id'] = var7;
                                var7 = 5;
                                var6['num_decisions_requested'] = var7;
                                var3['query'] = var6;
                                var6 = false;
                                var3['rejectWithError'] = var6;
                                var3 = var4.bind(var5)(var3);
                                SaveGenerator(address=218);
case 27:
                                return var3;
case 28:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                if(var4) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                                var4 = var3.body;
                                return var4;
case 29:
                                return var3;
case 23:
                                return var2;
case 19:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var5.bind(var3)(var2);
                    var2 = var4.bind(var3)(var2);
                    SaveGenerator(address=56);
case 31:
                    return var2;
case 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!var3) { _fun0003_ip = 17; continue _fun0003 }
case 33:
                    return var2;
case 17:
                    var2 = undefined;
                    return var2;
case 15:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _fetchBountyPreview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var3 = arg1;
                    var _closure4_slot0 = var3;
                    var4 = _closure1_slot4;
                    var4 = var4.isFetchingQuestHomeBounties;
                    if(var4) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var4 = _closure1_slot6;
                    var5 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0006_ip = 38; continue _fun0006 }
case 3:
                                var4 = undefined;
                                var _closure6_slot0 = var4;
                                var5 = global;
                                var3 = var5.URLSearchParams;
                                var6 = var3.prototype;
                                var6 = Object.create(var6, {constructor: {value: var3}});
                                var13 = var6;
                                var3 = new var13[var3](var12);
                                var7 = var3 instanceof Object ? var3 : var6;
                                _closure6_slot0 = var7;
                                var6 = _closure4_slot0;
                                var3 = var6.forEach;
                                var2 = function(arg1) {
                                    var4 = _closure6_slot0;
                                    var3 = var4.append;
                                    var2 = 'ad_creative_ids';
                                    var1 = arg1;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var1;
                                };
                                var2 = var3.bind(var6)(var2);
                                var3 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 11;
                                var2 = var8[var2];
                                var2 = var3.bind(var4)(var2);
                                var4 = var2.HTTP;
                                var3 = var4.get;
                                var2 = {};
                                var6 = _closure1_slot5;
                                var9 = var6.QUESTS_CREATIVE_PREVIEW;
                                var6 = var7.toString;
                                var8 = var6.bind(var7)();
                                var5 = var5.HermesInternal;
                                var7 = var5.concat;
                                var6 = '';
                                var5 = '?';
                                var5 = var7.bind(var6)(var9, var5, var8);
                                var2['url'] = var5;
                                var5 = false;
                                var2['rejectWithError'] = var5;
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=175);
case 39:
                                return var2;
case 40:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                                var3 = var2.body;
                                return var3;
case 41:
                                return var2;
case 38:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var5.bind(var3)(var2);
                    var2 = var4.bind(var3)(var2);
                    SaveGenerator(address=63);
case 43:
                    return var2;
case 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!var3) { _fun0005_ip = 36; continue _fun0005 }
case 45:
                    return var2;
case 36:
                    var2 = undefined;
                    return var2;
case 34:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _claimBountyReward() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var7 = var6;
                    var2 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var5 = _closure1_slot4;
                    var4 = var5.isClaimingBountyReward;
                    var4 = var4.bind(var5)(var6);
                    if(var4) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = 4;
                    var4 = var4[var6];
                    var8 = var5.bind(var2)(var4);
                    var5 = var8.dispatch;
                    var4 = {};
                    var9 = 'BOUNTIES_CLAIM_REWARD_BEGIN';
                    var4['type'] = var9;
                    var9 = var7;
                    var4['bountyId'] = var9;
                    var4 = var5.bind(var8)(var4);
case 50: // try_start_0
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 9;
                    var4 = var8[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.getSession;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=136);
case 51:
                    return var4;
case 5:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                    var12 = var4;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 10;
                    var5 = var9[var5];
                    var10 = var8.bind(var2)(var5);
                    var5 = var10.getOrRefreshAdSession;
                    var11 = var5.bind(var10)();
                    var10 = 12;
                    var5 = var9[var10];
                    var18 = var8.bind(var2)(var5);
                    var14 = var18.getAdMetadataSealed;
                    var5 = 3;
                    var13 = var9[var5];
                    var13 = var8.bind(var2)(var13);
                    var13 = var13.QuestContent;
                    var13 = var13.QUEST_HOME_MOBILE_CAROUSEL;
                    var17 = var7;
                    var14 = var14.bind(var18)(var13, var17);
                    var16 = var14;
                    var10 = var9[var10];
                    var13 = var8.bind(var2)(var10);
                    var10 = var13.getAdTrafficMetadataSealed;
                    var5 = var9[var5];
                    var5 = var8.bind(var2)(var5);
                    var5 = var5.QuestContent;
                    var5 = var5.QUEST_HOME_MOBILE_CAROUSEL;
                    var15 = var10.bind(var13)(var5, var2, var17);
                    var5 = 11;
                    var5 = var9[var5];
                    var5 = var8.bind(var2)(var5);
                    var9 = var5.HTTP;
                    var8 = var9.post;
                    var5 = {};
                    var13 = _closure1_slot5;
                    var10 = var13.QUESTS_CREATIVES_CLAIM_REWARD;
                    var10 = var10.bind(var13)(var17);
                    var5['url'] = var10;
                    var10 = {};
                    var13 = null;
                    var17 = var13 != var14;
                    var14 = null;
                    if(!var17) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var14 = var16;
case 54:
                    var10['decision_metadata_sealed'] = var14;
                    var14 = var15;
                    var16 = var13 != var14;
                    var14 = null;
                    if(!var16) { _fun0007_ip = 13; continue _fun0007 }
case 56:
                    var14 = var15;
case 13:
                    var10['traffic_metadata_sealed'] = var14;
                    var11 = var11.uuid;
                    var10['client_ad_session_id'] = var11;
                    var11 = var12;
                    var13 = var13 == var11;
                    var11 = undefined;
                    if(var13) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                    var11 = var12.uuid;
case 57:
                    var10['client_heartbeat_session_id'] = var11;
                    var5['body'] = var10;
                    var10 = false;
                    var5['rejectWithError'] = var10;
                    var5 = var8.bind(var9)(var5);
                    SaveGenerator(address=415);
case 59:
                    return var5;
case 60:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var8 = var8[var6];
                    var10 = var9.bind(var2)(var8);
                    var9 = var10.dispatch;
                    var8 = {};
                    var11 = 'BOUNTIES_CLAIM_REWARD_SUCCESS';
                    var8['type'] = var11;
                    var11 = var7;
                    var8['bountyId'] = var11;
                    var8 = var9.bind(var10)(var8);
case 63: // try_end0
                    _fun0007_ip = 48; continue _fun0007;
case 61:
                    return var5;
case 52:
                    return var4;
case 64: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var3 = var4[var3];
                    var3 = var5.bind(var2)(var3);
                    var8 = var3.prototype;
                    var8 = Object.create(var8, {constructor: {value: var3}});
                    var22 = var8;
                    var21 = var9;
                    var3 = new var22[var3](var21, var20);
                    var3 = var3 instanceof Object ? var3 : var8;
                    var4 = var4[var6];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'BOUNTIES_CLAIM_REWARD_FAILURE';
                    var4['type'] = var8;
                    var4['bountyId'] = var7;
                    var4['error'] = var3;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 48:
                    return var2;
case 46:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/BountyActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchQuestHomeBounties() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestHomeBounties'] = var4;
    var4 = function fetchBountyPreview() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchBountyPreview'] = var4;
    var4 = function setBountyVideoProgress(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg2;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 10;
            var4 = var1[var3];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.getCurrentAdSession;
            var6 = var4.bind(var6)();
            var4 = null;
            if(!(var4 != var6)) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = var4[var3];
            var7 = var6.bind(var1)(var3);
            var6 = var7.getOrRefreshAdSession;
            var3 = true;
            var3 = var6.bind(var7)(var3);
            var3 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'BOUNTIES_VIDEO_PROGRESS_UPDATE';
            var2['type'] = var6;
            var6 = arg1;
            var2['bountyId'] = var6;
            var6 = var5.timestampSec;
            var2['timestampSec'] = var6;
            var6 = var5.maxTimestampSec;
            var2['maxTimestampSec'] = var6;
            var5 = var5.duration;
            var2['duration'] = var5;
            var2 = var3.bind(var4)(var2);
case 65:
            return var1;
        }
    };
    var3['setBountyVideoProgress'] = var4;
    var2 = function claimBountyReward() {
        var1 = undefined;
        var4 = _closure1_slot10;
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
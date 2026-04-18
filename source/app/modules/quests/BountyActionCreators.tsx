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
                    var9 = undefined;
                    var3 = _closure1_slot4;
                    var3 = var3.isFetchingQuestHomeBounties;
                    if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var5 = var5[var3];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN';
                    var5['type'] = var8;
                    var5 = var6.bind(var7)(var5);
case 6: // try_start_0
                    var5 = global;
                    var6 = var5.Date;
                    var5 = var6.now;
                    var9 = var5.bind(var6)();
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var10 = 4;
                    var5 = var13[var10];
                    var5 = var12.bind(var2)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.get;
                    var5 = {};
                    var8 = _closure1_slot5;
                    var8 = var8.QUESTS_GET_DECISIONS;
                    var5['url'] = var8;
                    var8 = {};
                    var11 = 5;
                    var11 = var13[var11];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.QuestPlacement;
                    var11 = var11.QUEST_HOME_MOBILE_CAROUSEL;
                    var8['placement'] = var11;
                    var8['num_decisions_requested'] = var10;
                    var5['query'] = var8;
                    var8 = false;
                    var5['rejectWithError'] = var8;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=196);
case 7:
                    return var5;
case 8:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                    var6 = var5.body;
                    var8 = var6.decisions;
                    var7 = var8.flatMap;
                    var6 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var1 = arg1;
                            var3 = var1.creative;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                            var2 = var1.creative;
                            var5 = var2.creative_type;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 6;
                            var3 = var4[var3];
                            var4 = undefined;
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.AdCreativeType;
                            var3 = var3.BOUNTY;
                            if(!(var5 === var3)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 7;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.bountyFromServer;
                            var1 = var1.creative;
                            var1 = var1.creative_content;
                            var2 = var2.bind(var3)(var1);
                            var1 = new Array(1);
                            var1[0] = var2;
                            _fun0002_ip = 14; continue _fun0002;
case 11:
                            var1 = new Array(0);
case 14:
                            return var1;
                        }
                    };
                    var10 = var7.bind(var8)(var6);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var3];
                    var8 = var7.bind(var2)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var11 = 'BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS';
                    var6['type'] = var11;
                    var6['bounties'] = var10;
                    var6['fetchedAt'] = var9;
                    var6 = var7.bind(var8)(var6);
case 15: // try_end0
                    _fun0001_ip = 4; continue _fun0001;
case 9:
                    return var5;
case 16: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = var9[var3];
                    var5 = var7.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE';
                    var3['type'] = var6;
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/BountyActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function fetchQuestHomeBounties() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchQuestHomeBounties'] = var2;
    return var1;
})();
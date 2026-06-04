// app/modules/quests/BountyStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var2 = function initializeState() {
        var1 = false;
        var _closure1_slot0 = var1;
        var1 = new Array(0);
        var _closure1_slot1 = var1;
        var1 = global;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure1_slot2 = var3;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure1_slot3 = var3;
        var3 = var1.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure1_slot4 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var2 = var2.bind(var1)();
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function BountyStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot6;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot9;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot8;
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot9;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot10;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot7;
        var5 = {};
        var1 = 'isFetchingQuestHomeBounties';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot0;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'questHomeBounties';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot1;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isBountyCompleted';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot2;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isClaimingBountyReward';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot3;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'areAllBountiesCompleted';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot1;
            var2 = var3.every;
            var1 = function(arg1) {
                var3 = _closure1_slot2;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAdDecisionByPlacementAndAdCreativeId';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure1_slot4;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var4 = var5.get;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 9:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = var2;
case 11:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getBountyVideoProgress';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.get;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'BountyStore';
    var7['displayName'] = var2;
    var2 = 6;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleLogout() {
        var2 = _closure1_slot12;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var8;
    var8 = function handleFetchQuestHomeBountiesBegin() {
        var1 = true;
        _closure1_slot0 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_BEGIN'] = var8;
    var8 = function handleFetchQuestHomeBountiesSuccess(arg1) {
        var1 = arg1;
        var2 = var1.bounties;
        var4 = var1.placement;
        var3 = var1.adDecisionsByAdCreativeId;
        var5 = false;
        _closure1_slot0 = var5;
        _closure1_slot1 = var2;
        var2 = global;
        var5 = var2.Set;
        var6 = var5.prototype;
        var6 = Object.create(var6, {constructor: {value: var5}});
        var9 = var6;
        var5 = new var9[var5](var8);
        var5 = var5 instanceof Object ? var5 : var6;
        _closure1_slot2 = var5;
        var6 = var2.Map;
        var8 = _closure1_slot4;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var9 = var5;
        var2 = new var9[var6](var8, var7);
        var2 = var2 instanceof Object ? var2 : var5;
        _closure1_slot4 = var2;
        var1 = var2.set;
        var1 = var1.bind(var2)(var4, var3);
        var1 = undefined;
        return var1;
    };
    var2['BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_SUCCESS'] = var8;
    var8 = function handleFetchQuestHomeBountiesFailure(arg1) {
        var1 = arg1;
        var3 = var1.placement;
        var2 = false;
        _closure1_slot0 = var2;
        var2 = new Array(0);
        _closure1_slot1 = var2;
        var2 = global;
        var4 = var2.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var7 = var5;
        var4 = new var7[var4](var6);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot2 = var4;
        var5 = var2.Map;
        var6 = _closure1_slot4;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var2 = new var7[var5](var6, var5);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot4 = var2;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['BOUNTIES_FETCH_QUEST_HOME_BOUNTIES_FAILURE'] = var8;
    var8 = function handleClaimBountyRewardBegin(arg1) {
        var1 = arg1;
        var4 = var1.bountyId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot3;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.add;
        var3 = var3.bind(var1)(var4);
        _closure1_slot3 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BOUNTIES_CLAIM_REWARD_BEGIN'] = var8;
    var8 = function handleClaimBountyRewardSuccess(arg1) {
        var1 = arg1;
        var4 = var1.bountyId;
        var1 = global;
        var6 = var1.Set;
        var7 = _closure1_slot3;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var8 = var5;
        var3 = new var8[var6](var7, var6);
        var3 = var3 instanceof Object ? var3 : var5;
        var5 = var3.delete;
        var5 = var5.bind(var3)(var4);
        _closure1_slot3 = var3;
        var5 = var1.Set;
        var7 = _closure1_slot2;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var8 = var3;
        var1 = new var8[var5](var7, var6);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.add;
        var3 = var3.bind(var1)(var4);
        _closure1_slot2 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BOUNTIES_CLAIM_REWARD_SUCCESS'] = var8;
    var8 = function handleClaimBountyRewardFailure(arg1) {
        var1 = arg1;
        var4 = var1.bountyId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot3;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.delete;
        var3 = var3.bind(var1)(var4);
        _closure1_slot3 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BOUNTIES_CLAIM_REWARD_FAILURE'] = var8;
    var8 = function handleBountyVideoProgressUpdate(arg1) {
        var1 = arg1;
        var5 = var1.bountyId;
        var8 = var1.timestampSec;
        var7 = var1.maxTimestampSec;
        var6 = var1.duration;
        var1 = global;
        var4 = var1.Map;
        var10 = _closure1_slot5;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var11 = var3;
        var1 = new var11[var4](var10, var9);
        var1 = var1 instanceof Object ? var1 : var3;
        var4 = var1.set;
        var3 = {};
        var3['timestampSec'] = var8;
        var3['maxTimestampSec'] = var7;
        var3['duration'] = var6;
        var3 = var4.bind(var1)(var5, var3);
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BOUNTIES_VIDEO_PROGRESS_UPDATE'] = var8;
    var4 = function handleAdSessionReset() {
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var3 = var2;
        var1 = new var3[var1](var2);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot5 = var2;
        var1 = undefined;
        return var1;
    };
    var2['AD_SESSION_RESET'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/BountyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
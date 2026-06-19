// app/modules/quests/native/BountiesModal/bountyError.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function resolveBountyRewardClaimErrorMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var4 = var3 == var2;
            var6 = undefined;
            var1 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.code;
case 2:
            if(!(var3 != var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot4;
            var4 = var5.has;
            var1 = var2.code;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var2.message;
case 7:
            if(!(var3 == var1)) { _fun0001_ip = 9; continue _fun0001 }
case 4:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 1;
            var3 = var7[var1];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.uLjCfn;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 10; continue _fun0001;
case 9:
            var1 = var2.message;
case 10:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var7);
    var7 = var7.BOUNTY_REWARD_CLAIM_FAILED_TOAST_DURATION_MS;
    var _closure1_slot3 = var7;
    var8 = var4.Set;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = [260021];
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/BountiesModal/bountyError.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openBountyRewardClaimErrorToast(arg1) {
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 2;
        var2 = var8[var1];
        var1 = undefined;
        var4 = var7.bind(var1)(var2);
        var3 = var4.open;
        var2 = {};
        var6 = 'QUESTS_BOUNTIES_REWARD_CLAIM_FAILED';
        var2['key'] = var6;
        var9 = _closure1_slot5;
        var6 = arg1;
        var6 = var9.bind(var1)(var6);
        var2['content'] = var6;
        var6 = 3;
        var6 = var8[var6];
        var6 = var7.bind(var1)(var6);
        var2['icon'] = var6;
        var5 = _closure1_slot3;
        var2['toastDurationMs'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['openBountyRewardClaimErrorToast'] = var2;
    return var1;
})();
// app/modules/guild_onboarding/doGuildOnboardingHelpers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/doGuildOnboardingHelpers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function waitForOnboardingCompletion(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot3;
            var2 = var3.addConditionalChangeListener;
            var1 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var5 = _closure1_slot3;
                    var3 = var5.getSelfMember;
                    var1 = _closure2_slot0;
                    var8 = var3.bind(var5)(var1);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 2;
                    var1 = var3[var1];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var1);
                    var6 = var7.hasFlag;
                    var5 = null;
                    var9 = var5 == var8;
                    var1 = undefined;
                    if(var9) { _fun0001_ip = 69; continue _fun0001 }
 64:
                    var1 = var8.flags;
 69:
                    var8 = var5 != var1;
                    var5 = 0;
                    if(!var8) { _fun0001_ip = 81; continue _fun0001 }
 78:
                    var5 = var1;
 81:
                    var1 = _closure1_slot4;
                    var1 = var1.COMPLETED_ONBOARDING;
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = !var1;
                    if(var1) { _fun0001_ip = 151; continue _fun0001 }
 103:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 3;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.finishOnboarding;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure3_slot0;
                    var2 = var2.bind(var3)();
                    var1 = false;
 151:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['waitForOnboardingCompletion'] = var2;
    return var1;
})();
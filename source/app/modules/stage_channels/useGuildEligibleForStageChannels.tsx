// app/modules/stage_channels/useGuildEligibleForStageChannels.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function isGuildEligibleForStageChannels(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 27; continue _fun0001 }
 9:
            var2 = _closure1_slot2;
            var1 = new Array(1);
            var1[0] = var2;
            var4 = var1;
 27:
            var2 = var4;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var4 = var2().value;
            var2 = var1;
            var2 = var2 === var3;
            var5 = undefined;
            if(var2) { _fun0001_ip = 52; continue _fun0001 }
 49:
            var5 = var4;
 52:
            if(var2) { _fun0001_ip = 58; continue _fun0001 }
 55:
            var1.return();
 58:
            var1 = global;
            var2 = var1.Boolean;
            var4 = var5.getGuild;
            var1 = arg1;
            var4 = var4.bind(var5)(var1);
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 119; continue _fun0001 }
 90:
            var6 = var4.features;
            var5 = var6.has;
            var4 = _closure1_slot3;
            var4 = var4.COMMUNITY;
            var1 = var5.bind(var6)(var4);
 119:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = native3;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.GuildFeatures;
    var _closure1_slot3 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/useGuildEligibleForStageChannels.tsx';
    var5 = var6.bind(var7)(var5);
    var3['isGuildEligibleForStageChannels'] = var4;
    var2 = function useGuildEligibleForStageChannels(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var1 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGuildEligibleForStageChannels'] = var2;
    return var1;
})();
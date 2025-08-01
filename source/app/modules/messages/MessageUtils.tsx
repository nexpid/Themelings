// app/modules/messages/MessageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MessageUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function canViewPotentiallyNSFWChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot4;
            var1 = var2.getCurrentUser;
            var5 = var1.bind(var2)();
            var3 = _closure1_slot2;
            var2 = var3.getChannel;
            var1 = arg1;
            var7 = var2.bind(var3)(var1);
            var6 = null;
            var1 = var6 != var5;
            if(!var1) { _fun0001_ip = 46; continue _fun0001 }
 42:
            var1 = var6 != var7;
 46:
            if(!var1) { _fun0001_ip = 141; continue _fun0001 }
 49:
            var8 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var8.bind(var2)(var3);
            var2 = var3.isChannelNSFW;
            var2 = var2.bind(var3)(var7);
            var2 = !var2;
            if(var2) { _fun0001_ip = 138; continue _fun0001 }
 88:
            var3 = var5.nsfwAllowed;
            var3 = var6 != var3;
            if(!var3) { _fun0001_ip = 107; continue _fun0001 }
 101:
            var3 = var5.nsfwAllowed;
 107:
            if(!var3) { _fun0001_ip = 135; continue _fun0001 }
 110:
            var6 = _closure1_slot3;
            var5 = var6.didAgree;
            var4 = var7.getGuildId;
            var4 = var4.bind(var7)();
            var3 = var5.bind(var6)(var4);
 135:
            var2 = var3;
 138:
            var1 = var2;
 141:
            return var1;
        }
    };
    var3['canViewPotentiallyNSFWChannel'] = var4;
    var2 = function getGuildIdFromMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getChannel;
            var1 = arg1;
            var1 = var1.channel_id;
            var4 = var2.bind(var3)(var1);
            var3 = null;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0002_ip = 41; continue _fun0002 }
 36:
            var2 = var4.guild_id;
 41:
            var3 = var3 != var2;
            var1 = undefined;
            if(!var3) { _fun0002_ip = 53; continue _fun0002 }
 50:
            var1 = var2;
 53:
            return var1;
        }
    };
    var3['getGuildIdFromMessage'] = var2;
    return var1;
})();
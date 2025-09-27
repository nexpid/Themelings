// app/modules/hang_status/parseHangStatus.tsx
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
    var4 = [null, null];
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hang_status/parseHangStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function parseHangStatus(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg2;
            var5 = null;
            if(!(var5 != var4)) { _fun0001_ip = 197; continue _fun0001 }
 12:
            var7 = _closure1_slot2;
            var6 = var7.getChannel;
            var8 = _closure1_slot3;
            var3 = var8.getVoiceStateForUser;
            var2 = arg1;
            var8 = var3.bind(var8)(var2);
            var9 = var5 == var8;
            var3 = undefined;
            var2 = undefined;
            if(var9) { _fun0001_ip = 58; continue _fun0001 }
 53:
            var2 = var8.channelId;
 58:
            var2 = var6.bind(var7)(var2);
            var6 = var5 == var2;
            var5 = undefined;
            if(var6) { _fun0001_ip = 77; continue _fun0001 }
 72:
            var5 = var2.guild_id;
 77:
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var2.bind(var3)(var1);
            var3 = var1.HangStatusExperiment;
            var2 = var3.getCurrentConfig;
            var1 = {};
            var1['guildId'] = var5;
            var5 = 'parseHangStatus';
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var3 = var1.defaultStatusVariant;
            var2 = var4.split;
            var1 = ':';
            var4 = var2.bind(var4)(var1);
            var5 = var4.length;
            var2 = 1;
            var1 = var4;
            if(!(var5 > var2)) { _fun0001_ip = 195; continue _fun0001 }
 163:
            var2 = var4[var2];
            var1 = var4;
            if(!(var2 !== var3)) { _fun0001_ip = 195; continue _fun0001 }
 174:
            var2 = 0;
            var4 = var4[var2];
            var2 = new Array(2);
            var2[0] = var4;
            var2[1] = var3;
            var1 = var2;
 195:
            return var1;
 197:
            var1 = _closure1_slot4;
            return var1;
        }
    };
    var3['parseHangStatus'] = var2;
    return var1;
})();
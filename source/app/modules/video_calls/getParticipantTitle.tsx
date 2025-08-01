// app/modules/video_calls/getParticipantTitle.tsx
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
    var4 = var4.ParticipantTypes;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/getParticipantTitle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getParticipantTitle(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = arg2;
            var3 = arg3;
            var6 = var1.type;
            var5 = _closure1_slot4;
            var5 = var5.ACTIVITY;
            if(!(var6 !== var5)) { _fun0001_ip = 221; continue _fun0001 }
 34:
            var9 = _closure1_slot3;
            var7 = var9.isGuestOrLurker;
            var6 = var2.guild_id;
            var10 = var1.user;
            var5 = null;
            var11 = var5 == var10;
            var8 = undefined;
            var5 = undefined;
            if(var11) { _fun0001_ip = 72; continue _fun0001 }
 67:
            var5 = var10.id;
 72:
            var5 = var7.bind(var9)(var6, var5);
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 2;
            var6 = var9[var6];
            var9 = var7.bind(var8)(var6);
            var7 = var9.getName;
            var6 = var2.getGuildId;
            var6 = var6.bind(var2)();
            var2 = var2.id;
            var1 = var1.user;
            var2 = var7.bind(var9)(var6, var2, var1);
            var1 = '';
            if(!var5) { _fun0001_ip = 215; continue _fun0001 }
 138:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 3;
            var5 = var9[var4];
            var5 = var7.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.pFO/Pj;
            var6 = var5.bind(var6)(var4);
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = ' ';
            var1 = var5.bind(var4)(var6);
 215:
            var1 = var2 + var1;
            return var1;
 221:
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 237; continue _fun0001 }
 232:
            var2 = var3.name;
 237:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0001_ip = 249; continue _fun0001 }
 246:
            var1 = var2;
 249:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
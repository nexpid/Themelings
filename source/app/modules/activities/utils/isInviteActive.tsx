// app/modules/activities/utils/isInviteActive.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityActionTypes;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STREAM_REQUEST_MAX_AGE;
    var _closure1_slot3 = var4;
    var7 = 2;
    var4 = var6[var7];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.HOUR;
    var4 = var7 * var4;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isInviteActive.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isInviteActive(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = arg2;
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 226; continue _fun0001 }
 15:
            var3 = var2.activity;
            var3 = var5 != var3;
            var6 = null;
            if(!var3) { _fun0001_ip = 42; continue _fun0001 }
 30:
            var3 = var2.activity;
            var6 = var3.party_id;
 42:
            var4 = var5 != var6;
            if(!var4) { _fun0001_ip = 73; continue _fun0001 }
 49:
            var7 = var1.party;
            var8 = var5 == var7;
            var3 = undefined;
            if(var8) { _fun0001_ip = 69; continue _fun0001 }
 64:
            var3 = var7.id;
 69:
            var4 = var3 !== var6;
 73:
            var3 = var2.activity;
            var6 = var5 == var3;
            var8 = undefined;
            var7 = undefined;
            if(var6) { _fun0001_ip = 95; continue _fun0001 }
 90:
            var7 = var3.type;
 95:
            var3 = _closure1_slot2;
            var3 = var3.STREAM_REQUEST;
            if(!(var7 !== var3)) { _fun0001_ip = 118; continue _fun0001 }
 112:
            var3 = _closure1_slot4;
            _fun0001_ip = 122; continue _fun0001;
 118:
            var3 = _closure1_slot3;
 122:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 3;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.extractTimestamp;
            var2 = var2.id;
            var2 = var6.bind(var7)(var2);
            var3 = var2 + var3;
            var2 = global;
            var6 = var2.Date;
            var2 = var6.now;
            var2 = var2.bind(var6)();
            var3 = var3 < var2;
            var2 = var1.application_id;
            var2 = var5 != var2;
            if(!var2) { _fun0001_ip = 209; continue _fun0001 }
 196:
            var5 = var1.application_id;
            var1 = arg3;
            var2 = var5 !== var1;
 209:
            var1 = !var4;
            if(var4) { _fun0001_ip = 218; continue _fun0001 }
 215:
            var1 = !var3;
 218:
            if(!var1) { _fun0001_ip = 224; continue _fun0001 }
 221:
            var1 = !var2;
 224:
            return var1;
 226:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/threads/getThreadAutoArchiveTimeOnce.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var2 = function getThreadLastActivityTime(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.threadMetadata;
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 175; continue _fun0001 }
 18:
            var6 = _closure1_slot2;
            var5 = var6.lastMessageId;
            var4 = var1.id;
            var5 = var5.bind(var6)(var4);
            if(!(var3 == var5)) { _fun0001_ip = 50; continue _fun0001 }
 45:
            var5 = var1.id;
 50:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.extractTimestamp;
            var4 = var2.bind(var4)(var5);
            var2 = var1.threadMetadata;
            var2 = var2.archiveTimestamp;
            var2 = var3 != var2;
            var3 = 0;
            if(!var2) { _fun0001_ip = 154; continue _fun0001 }
 104:
            var2 = global;
            var5 = var2.Date;
            var1 = var1.threadMetadata;
            var8 = var1.archiveTimestamp;
            var2 = var5.prototype;
            var2 = Object.create(var2, {constructor: {value: var5}});
            var9 = var2;
            var1 = new var9[var5](var8, var7);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = var2.getTime;
            var3 = var1.bind(var2)();
 154:
            var1 = global;
            var2 = var1.Math;
            var1 = var2.max;
            var1 = var1.bind(var2)(var4, var3);
            return var1;
 175:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var6[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/threads/getThreadAutoArchiveTimeOnce.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function getThreadAutoArchiveTimeOnce(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var2 = var4.threadMetadata;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 83; continue _fun0002 }
 15:
            var1 = var4.threadMetadata;
            var5 = var1.autoArchiveDuration;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var6.bind(var3)(var2);
            var2 = var2.Millis;
            var2 = var2.MINUTE;
            var2 = var5 * var2;
            var1 = _closure1_slot3;
            var1 = var1.bind(var3)(var4);
            var1 = var1 + var2;
            return var1;
 83:
            var1 = 0;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['getThreadLastActivityTime'] = var2;
    return var1;
})();
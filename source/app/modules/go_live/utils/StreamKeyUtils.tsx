// app/modules/go_live/utils/StreamKeyUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StreamTypes;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/utils/StreamKeyUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isStreamKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 63; continue _fun0001 }
 12:
            var4 = var5.startsWith;
            var2 = _closure1_slot1;
            var2 = var2.GUILD;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0001_ip = 60; continue _fun0001 }
 39:
            var4 = var5.startsWith;
            var3 = _closure1_slot1;
            var3 = var3.CALL;
            var2 = var4.bind(var5)(var3);
 60:
            var1 = var2;
 63:
            return var1;
        }
    };
    var3['isStreamKey'] = var4;
    var4 = function decodeStreamKey(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = var3.split;
            var1 = ':';
            var5 = var2.bind(var3)(var1);
            var2 = 0;
            var7 = var5[var2];
            var3 = _closure1_slot1;
            var3 = var3.GUILD;
            if(!(var3 !== var7)) { _fun0002_ip = 157; continue _fun0002 }
 40:
            var3 = _closure1_slot1;
            var3 = var3.CALL;
            if(!(var3 !== var7)) { _fun0002_ip = 106; continue _fun0002 }
 54:
            var3 = global;
            var6 = var3.Error;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'Unknown stream type ';
            var9 = var4.bind(var3)(var7);
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var10 = var4;
            var3 = new var10[var6](var9, var8);
            var3 = var3 instanceof Object ? var3 : var4;
            throw var3;
 106:
            var6 = _closure1_slot0;
            var4 = undefined;
            var3 = 3;
            var6 = var6.bind(var4)(var5, var3);
            var3 = {};
            var4 = var6[var2];
            var3['streamType'] = var4;
            var4 = 1;
            var4 = var6[var4];
            var3['channelId'] = var4;
            var4 = 2;
            var4 = var6[var4];
            var3['ownerId'] = var4;
            return var3;
 157:
            var4 = _closure1_slot0;
            var3 = undefined;
            var1 = 4;
            var3 = var4.bind(var3)(var5, var1);
            var1 = {};
            var2 = var3[var2];
            var1['streamType'] = var2;
            var2 = 1;
            var2 = var3[var2];
            var1['guildId'] = var2;
            var2 = 2;
            var2 = var3[var2];
            var1['channelId'] = var2;
            var2 = 3;
            var2 = var3[var2];
            var1['ownerId'] = var2;
            return var1;
        }
    };
    var3['decodeStreamKey'] = var4;
    var2 = function encodeStreamKey(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.streamType;
            var4 = var1.guildId;
            var2 = var1.channelId;
            var1 = var1.ownerId;
            var6 = _closure1_slot1;
            var6 = var6.GUILD;
            if(!(var6 !== var5)) { _fun0003_ip = 140; continue _fun0003 }
 42:
            var3 = _closure1_slot1;
            var3 = var3.CALL;
            if(!(var3 !== var5)) { _fun0003_ip = 108; continue _fun0003 }
 56:
            var3 = global;
            var7 = var3.Error;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var3 = 'Unknown stream type ';
            var8 = var6.bind(var3)(var5);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var9 = var6;
            var3 = new var9[var7](var8, var7);
            var3 = var3 instanceof Object ? var3 : var6;
            throw var3;
 108:
            var7 = new Array(3);
            var7[0] = var5;
            var7[1] = var2;
            var7[2] = var1;
            var6 = var7.join;
            var3 = ':';
            var3 = var6.bind(var7)(var3);
            return var3;
 140:
            var3 = new Array(4);
            var3[0] = var5;
            var3[1] = var4;
            var3[2] = var2;
            var3[3] = var1;
            var2 = var3.join;
            var1 = ':';
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['encodeStreamKey'] = var2;
    return var1;
})();
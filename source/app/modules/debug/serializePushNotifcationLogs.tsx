// app/modules/debug/serializePushNotifcationLogs.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.DEVICE_TOKEN;
    var _closure1_slot2 = var7;
    var4 = var4.DEVICE_VOIP_TOKEN;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/debug/serializePushNotifcationLogs.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function serializePushNotificationLogs(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var4 = var3.length;
            var2 = 0;
            if(!(var2 !== var4)) { _fun0001_ip = 240; continue _fun0001 }
 26:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 1;
            var8 = var7[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var10 = var8.Storage;
            var9 = var10.get;
            var8 = _closure1_slot2;
            var9 = var9.bind(var10)(var8);
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var5 = var4.Storage;
            var4 = var5.get;
            var2 = _closure1_slot3;
            var8 = var4.bind(var5)(var2);
            var2 = null;
            var4 = var2 != var9;
            var7 = '';
            var6 = var7;
            if(!var4) { _fun0001_ip = 140; continue _fun0001 }
 116:
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = 'Device Token: ';
            var6 = var5.bind(var4)(var9);
 140:
            var2 = var2 != var8;
            var5 = var7;
            if(!var2) { _fun0001_ip = 174; continue _fun0001 }
 150:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = 'Device Voip Token: ';
            var5 = var4.bind(var2)(var8);
 174:
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.silent;
                    var9 = 'Displayed';
                    if(!var1) { _fun0002_ip = 24; continue _fun0002 }
 18:
                    var9 = 'Silent';
 24:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 76; continue _fun0002 }
 34:
                    var6 = var2.title;
                    var5 = var2.content;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var1 = ' - ';
                    var8 = var4.bind(var3)(var6, var1, var5);
                    _fun0002_ip = 116; continue _fun0002;
 76:
                    var6 = var2.channelId;
                    var5 = var2.messageId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var1 = ' - ';
                    var8 = var4.bind(var3)(var6, var1, var5);
 116:
                    var1 = global;
                    var5 = var1.Date;
                    var16 = var2.receivedTimestamp;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var17 = var4;
                    var3 = new var17[var5](var16, var15);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = var4.toISOString;
                    var16 = var3.bind(var4)();
                    var14 = var2.type;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var17 = '';
                    var15 = ' [';
                    var13 = '] ';
                    var11 = ' - ';
                    var12 = var9;
                    var10 = var8;
                    var1 = var17[var5](var16, var15, var14, var13, var12, var11, var10, var9);
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.join;
            var4 = '\n';
            var11 = var1.bind(var2)(var4);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var12 = '\n\n';
            var16 = var7;
            var15 = var6;
            var14 = var4;
            var13 = var5;
            var1 = var16[var2](var15, var14, var13, var12, var11, var10);
            return var1;
 240:
            var1 = 'No logs';
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/app_database/modules/messages/isReadableChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var4 = function isReadableChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var1 = null;
            var1 = var1 != var7;
            if(!var1) { _fun0001_ip = 104; continue _fun0001 }
 12:
            var3 = var7.type;
            var2 = _closure1_slot3;
            var2 = var2.DM;
            var2 = var3 === var2;
            if(var2) { _fun0001_ip = 56; continue _fun0001 }
 37:
            var5 = var7.type;
            var3 = _closure1_slot3;
            var3 = var3.GROUP_DM;
            var2 = var5 === var3;
 56:
            if(var2) { _fun0001_ip = 101; continue _fun0001 }
 59:
            var6 = _closure1_slot0;
            var5 = var7.type;
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            if(!var3) { _fun0001_ip = 98; continue _fun0001 }
 78:
            var6 = _closure1_slot2;
            var5 = var6.canBasicChannel;
            var4 = _closure1_slot4;
            var3 = var5.bind(var6)(var4, var7);
 98:
            var2 = var3;
 101:
            var1 = var2;
 104:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.isTextChannel;
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.ChannelTypes;
    var _closure1_slot3 = var8;
    var5 = var5.BasicPermissions;
    var8 = var5.VIEW_CHANNEL;
    var5 = var5.READ_MESSAGE_HISTORY;
    var5 = var8 | var5;
    var _closure1_slot4 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_database/modules/messages/isReadableChannel.tsx';
    var5 = var6.bind(var7)(var5);
    var3['isReadableChannel'] = var4;
    var2 = function isReadableChannelId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0002_ip = 41; continue _fun0002 }
 12:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var2 = var3.getBasicChannel;
            var3 = var2.bind(var3)(var5);
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 41:
            return var1;
        }
    };
    var3['isReadableChannelId'] = var2;
    return var1;
})();
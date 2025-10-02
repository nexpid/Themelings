// app/modules/messages/isSpam.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function isSpammer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot2;
            var2 = var4.getUser;
            var1 = arg1;
            var5 = var2.bind(var4)(var1);
            var1 = null;
            var4 = var1 == var5;
            var2 = undefined;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.hasFlag;
            var3 = _closure1_slot3;
            var3 = var3.SPAMMER;
            var2 = var4.bind(var5)(var3);
case 2:
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
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
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.UserFlags;
    var _closure1_slot3 = var8;
    var5 = var5.ChannelTypes;
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/isSpam.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function isSpamSupported(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            var1 = var1 !== var2;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var2.type;
            var2 = _closure1_slot4;
            var2 = var2.DM;
            var1 = var3 !== var2;
case 6:
            return var1;
        }
    };
    var3['isSpamSupported'] = var5;
    var3['isSpammer'] = var4;
    var2 = function isSpam(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot5;
            var1 = var4.author;
            var1 = var1.id;
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 2;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isAutomodMessageRecord;
            var2 = var2.bind(var3)(var4);
            var1 = !var2;
case 8:
            return var1;
        }
    };
    var3['isSpam'] = var2;
    return var1;
})();
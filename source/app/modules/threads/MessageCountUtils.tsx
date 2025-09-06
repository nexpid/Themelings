// app/modules/threads/MessageCountUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var5 = var4.MAX_THREAD_MESSAGE_COUNT;
    var _closure1_slot3 = var5;
    var4 = var4.MAX_THREAD_MESSAGE_COUNT_OLD;
    var _closure1_slot4 = var4;
    var5 = function shouldUseOldMaxMessageCount(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.compare;
        var2 = '992549565104128000';
        var1 = arg1;
        var2 = var3.bind(var4)(var2, var1);
        var1 = -1;
        var1 = var2 > var1;
        return var1;
    };
    var _closure1_slot5 = var5;
    var4 = function getMessageCountText(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var4 = arg2;
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 100; continue _fun0001 }
 12:
            var1 = 0;
            if(!(!(var5 < var1))) { _fun0001_ip = 100; continue _fun0001 }
 18:
            var6 = _closure1_slot5;
            var1 = undefined;
            var1 = var6.bind(var1)(var4);
            if(!(var3 != var4)) { _fun0001_ip = 39; continue _fun0001 }
 36:
            if(!var1) { _fun0001_ip = 56; continue _fun0001 }
 39:
            var1 = _closure1_slot4;
            var3 = var5 >= var1;
            var1 = '50+';
            if(var3) { _fun0001_ip = 98; continue _fun0001 }
 56:
            var2 = _closure1_slot3;
            var3 = var5 >= var2;
            var2 = '100k+';
            if(var3) { _fun0001_ip = 95; continue _fun0001 }
 73:
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = '';
            var2 = var4.bind(var3)(var5);
 95:
            var1 = var2;
 98:
            return var1;
 100:
            var1 = '0';
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var6 = function _formatMessageCountLabel(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot6;
            var6 = undefined;
            var3 = arg1;
            var1 = arg3;
            var1 = var4.bind(var6)(var3, var1);
            var3 = '0';
            if(!(var3 !== var1)) { _fun0002_ip = 79; continue _fun0002 }
 31:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var6)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var3 = {};
            var3['count'] = var1;
            var1 = arg2;
            var1 = var4.bind(var5)(var1, var3);
            _fun0002_ip = 136; continue _fun0002;
 79:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.eXHkho;
            var1 = var3.bind(var4)(var2);
 136:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/threads/MessageCountUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['shouldUseOldMaxMessageCount'] = var5;
    var3['getMessageCountText'] = var4;
    var4 = function(arg1, arg2) {
        var5 = _closure1_slot7;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 2;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.t;
        var3 = var1.iTS3XV;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var4)(var2, var3, var1);
        return var1;
    };
    var3['formatMobileMessageCountLabel'] = var4;
    var2 = function(arg1, arg2) {
        var5 = _closure1_slot7;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 2;
        var1 = var3[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var1 = var1.t;
        var3 = var1.rfAXDQ;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var4)(var2, var3, var1);
        return var1;
    };
    var3['formatMessageCountLabel'] = var2;
    return var1;
})();
// app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getMessageTimestampForChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.lastMessageId;
            var2 = var1.message;
            var1 = var1.loaded;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = null;
            if(!(var1 == var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = null;
            var3 = var1 != var5;
            if(!var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var3 = var4.extractTimestamp;
            var1 = var3.bind(var4)(var5);
case 5:
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.extractTimestamp;
            var2 = var2.id;
            var1 = var3.bind(var4)(var2);
case 7:
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/hooks/useMessageRequestTimestampText.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useMessageRequestTimestampText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var4 = undefined;
            var3 = var8.bind(var4)(var1);
            var1 = var3.useMessageRequestPreview;
            var5 = var1.bind(var3)(var5);
            var3 = _closure1_slot4;
            var1 = {};
            var7 = 3;
            var7 = var9[var7];
            var9 = var8.bind(var4)(var7);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var10;
            var6 = function() {
                var3 = _closure1_slot3;
                var2 = var3.lastMessageId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var8.bind(var9)(var7, var6);
            var1['lastMessageId'] = var6;
            var12 = var1;
            var11 = var5;
            var5 = copyDataProperties(var12, var11);
            var3 = var3.bind(var4)(var1);
            var1 = null;
            var5 = var1 == var3;
            var1 = '';
            if(var5) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var3 = var2.bind(var4)(var3);
            var2 = var3.calendar;
            var1 = var2.bind(var3)();
case 8:
            return var1;
        }
    };
    var3['useMessageRequestTimestampText'] = var4;
    var2 = function useMessageRequestRelativeTimestampText(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var5 = undefined;
            var3 = var8.bind(var5)(var1);
            var1 = var3.useMessageRequestPreview;
            var4 = var1.bind(var3)(var4);
            var3 = _closure1_slot4;
            var1 = {};
            var7 = 3;
            var7 = var9[var7];
            var9 = var8.bind(var5)(var7);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var10;
            var6 = function() {
                var3 = _closure1_slot3;
                var2 = var3.lastMessageId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var8.bind(var9)(var7, var6);
            var1['lastMessageId'] = var6;
            var12 = var1;
            var11 = var4;
            var4 = copyDataProperties(var12, var11);
            var4 = var3.bind(var5)(var1);
            var1 = null;
            var3 = var1 == var4;
            var1 = '';
            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 9:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getTimestampString;
            var1 = var2.bind(var3)(var4);
case 10:
            return var1;
        }
    };
    var3['useMessageRequestRelativeTimestampText'] = var2;
    return var1;
})();
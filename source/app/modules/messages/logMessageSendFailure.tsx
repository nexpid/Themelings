// app/modules/messages/logMessageSendFailure.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getAttachmentMimeTypes(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var2 = var1.mimeType;
                var1 = null;
                var3 = var1 != var2;
                var1 = 'unknown';
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
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
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/logMessageSendFailure.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function logMessageSendFailure(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.fileItems;
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = new Array(0);
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var5 = _closure1_slot3;
            var4 = var2.fileItems;
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
case 6:
            var4 = var2.errorMessage;
            var5 = var3 != var4;
            var1 = undefined;
            var7 = undefined;
            if(!var5) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = var4;
case 7:
            var2 = var2.failureCode;
            var3 = var3 != var2;
            var8 = undefined;
            if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var8 = var2;
case 9:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot2;
            var3 = var2.SEND_MESSAGE_FAILURE;
            var2 = {};
            var2['failure_code'] = var8;
            var2['error_message'] = var7;
            var2['attachment_mimetypes'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['logMessageSendFailure'] = var4;
    var3['getAttachmentMimeTypes'] = var2;
    return var1;
})();
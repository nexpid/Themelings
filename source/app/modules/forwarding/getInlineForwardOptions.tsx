// app/modules/forwarding/getInlineForwardOptions.tsx
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
    var4 = var4.MessageReferenceTypes;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/getInlineForwardOptions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getInlineForwardOptions(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = arg2;
            var5 = var2.targetKind;
            var6 = var2.embedIndex;
            var2 = 'media';
            if(!(var2 !== var5)) { _fun0001_ip = 78; continue _fun0001 }
 30:
            var2 = 'embed';
            if(!(var2 === var5)) { _fun0001_ip = 44; continue _fun0001 }
 38:
            var2 = null;
            if(!(var2 == var6)) { _fun0001_ip = 58; continue _fun0001 }
 44:
            var4 = 'shortcut';
            var2 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 56; continue _fun0001 }
 54:
            var2 = {};
 56:
            _fun0001_ip = 76; continue _fun0001;
 58:
            var4 = {};
            var5 = new Array(1);
            var5[0] = var6;
            var4['onlyEmbedIndices'] = var5;
            var2 = var4;
 76:
            return var2;
 78:
            var4 = var1.messageReference;
            var5 = null;
            var6 = var5 == var4;
            var7 = undefined;
            if(var6) { _fun0001_ip = 100; continue _fun0001 }
 95:
            var7 = var4.type;
 100:
            var4 = _closure1_slot2;
            var6 = var4.FORWARD;
            var4 = var1;
            if(!(var7 === var6)) { _fun0001_ip = 149; continue _fun0001 }
 120:
            var6 = var1.messageSnapshots;
            var1 = 0;
            var6 = var6[var1];
            var7 = var5 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 146; continue _fun0001 }
 141:
            var1 = var6.message;
 146:
            var4 = var1;
 149:
            var1 = {};
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 200; continue _fun0001 }
 160:
            var6 = var4.attachments;
            var5 = var6.filter;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.filename;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = 1;
                    var1 = var1[var6];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.isImageFile;
                    var1 = var1.bind(var3)(var4);
                    if(var1) { _fun0002_ip = 76; continue _fun0002 }
 48:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isVideoFile;
                    var1 = var2.bind(var3)(var4);
 76:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var4);
            var4 = var5.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var2 = var4.bind(var5)(var3);
 200:
            var1['onlyAttachmentIds'] = var2;
            return var1;
        }
    };
    var3['getInlineForwardOptions'] = var2;
    return var1;
})();
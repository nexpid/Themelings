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
case 0:
            var1 = arg1;
            var2 = arg2;
            var5 = var2.targetKind;
            var6 = var2.embedIndex;
            var2 = 'media';
            if(!(var2 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 'embed';
            if(!(var2 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = null;
            if(!(var2 == var6)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var4 = 'shortcut';
            var2 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = {};
case 7:
            _fun0001_ip = 9; continue _fun0001;
case 6:
            var4 = {};
            var5 = new Array(1);
            var5[0] = var6;
            var4['onlyEmbedIndices'] = var5;
            var2 = var4;
case 9:
            return var2;
case 2:
            var4 = var1.messageReference;
            var5 = null;
            var6 = var5 == var4;
            var7 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var4.type;
case 10:
            var4 = _closure1_slot2;
            var6 = var4.FORWARD;
            var4 = var1;
            if(!(var7 === var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var1.messageSnapshots;
            var1 = 0;
            var6 = var6[var1];
            var7 = var5 == var6;
            var1 = undefined;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = var6.message;
case 14:
            var4 = var1;
case 12:
            var1 = {};
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var4.attachments;
            var5 = var6.filter;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                    if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 18:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isVideoFile;
                    var1 = var2.bind(var3)(var4);
case 9:
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
case 16:
            var1['onlyAttachmentIds'] = var2;
            return var1;
        }
    };
    var3['getInlineForwardOptions'] = var2;
    return var1;
})();
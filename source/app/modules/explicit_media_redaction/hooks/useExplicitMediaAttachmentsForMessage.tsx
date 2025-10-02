// app/modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg3;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var6 = undefined;
            var9 = var5.bind(var6)(var3);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot2;
                var3 = var4.getMessage;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var8.bind(var9)(var3, var2);
            var2 = 2;
            var2 = var7[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.useEnabledHarmTypesBitmaskForMessage;
            var2 = var2.bind(var5)(var3);
            var _closure2_slot3 = var2;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var6 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = function(arg1) {
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 3;
                var1 = var7[var1];
                var5 = undefined;
                var4 = var6.bind(var5)(var1);
                var3 = var4.isMediaObscuredForHarmTypes;
                var2 = {};
                var1 = 4;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Attachment;
                var2['type'] = var1;
                var1 = arg1;
                var2['media'] = var1;
                var1 = _closure2_slot3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.url;
                    var1 = _closure2_slot2;
                    var1 = var4 === var1;
                    if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var3 = var3.id;
                    var2 = _closure2_slot2;
                    var1 = var3 === var2;
case 7:
                    return var1;
                }
            };
case 6:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var3.attachments;
            var3 = var2 == var4;
            var1 = undefined;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var3 = var4.filter;
            var1 = var3.bind(var4)(var5);
case 9:
            if(!(var2 == var1)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = new Array(0);
case 12:
            return var1;
case 2:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['useRedactableMediaAttachmentsForMessage'] = var4;
    var2 = function(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg3;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var _closure2_slot2 = var4;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var6 = undefined;
            var9 = var5.bind(var6)(var3);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot2;
                var3 = var4.getMessage;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var8.bind(var9)(var3, var2);
            var2 = 2;
            var2 = var7[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.useEnabledHarmTypesBitmaskForMessage;
            var2 = var2.bind(var5)(var3);
            var _closure2_slot3 = var2;
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            if(!(var6 === var4)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var5 = function(arg1) {
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 3;
                var1 = var7[var1];
                var5 = undefined;
                var4 = var6.bind(var5)(var1);
                var3 = var4.isMediaObscuredForHarmTypes;
                var2 = {};
                var1 = 4;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.ObscuredMediaTypes;
                var1 = var1.Embed;
                var2['type'] = var1;
                var1 = arg1;
                var2['media'] = var1;
                var1 = _closure2_slot3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            _fun0003_ip = 6; continue _fun0003;
case 4:
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot2;
                var1 = var2 === var1;
                return var1;
            };
case 6:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var4 = var3.embeds;
            var3 = var2 == var4;
            var1 = undefined;
            if(var3) { _fun0003_ip = 9; continue _fun0003 }
case 11:
            var3 = var4.filter;
            var1 = var3.bind(var4)(var5);
case 9:
            if(!(var2 == var1)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = new Array(0);
case 12:
            return var1;
case 2:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['useRedactableMediaEmbedsForMessage'] = var2;
    return var1;
})();
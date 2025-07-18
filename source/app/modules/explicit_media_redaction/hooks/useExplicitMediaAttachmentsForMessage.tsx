// app/modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native3;
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
 0:
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
            if(!(var2 != var3)) { _fun0001_ip = 175; continue _fun0001 }
 111:
            if(!(var6 === var4)) { _fun0001_ip = 124; continue _fun0001 }
 115:
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
            _fun0001_ip = 131; continue _fun0001;
 124:
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.url;
                    var1 = _closure2_slot2;
                    var1 = var4 === var1;
                    if(var1) { _fun0002_ip = 35; continue _fun0002 }
 22:
                    var3 = var3.id;
                    var2 = _closure2_slot2;
                    var1 = var3 === var2;
 35:
                    return var1;
                }
            };
 131:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 165; continue _fun0001 }
 140:
            var4 = var3.attachments;
            var3 = var2 == var4;
            var1 = undefined;
            if(var3) { _fun0001_ip = 165; continue _fun0001 }
 155:
            var3 = var4.filter;
            var1 = var3.bind(var4)(var5);
 165:
            if(!(var2 == var1)) { _fun0001_ip = 173; continue _fun0001 }
 169:
            var1 = new Array(0);
 173:
            return var1;
 175:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['useRedactableMediaAttachmentsForMessage'] = var4;
    var2 = function(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(!(var2 != var3)) { _fun0003_ip = 175; continue _fun0003 }
 111:
            if(!(var6 === var4)) { _fun0003_ip = 124; continue _fun0003 }
 115:
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
            _fun0003_ip = 131; continue _fun0003;
 124:
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot2;
                var1 = var2 === var1;
                return var1;
            };
 131:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0003_ip = 165; continue _fun0003 }
 140:
            var4 = var3.embeds;
            var3 = var2 == var4;
            var1 = undefined;
            if(var3) { _fun0003_ip = 165; continue _fun0003 }
 155:
            var3 = var4.filter;
            var1 = var3.bind(var4)(var5);
 165:
            if(!(var2 == var1)) { _fun0003_ip = 173; continue _fun0003 }
 169:
            var1 = new Array(0);
 173:
            return var1;
 175:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['useRedactableMediaEmbedsForMessage'] = var2;
    return var1;
})();
// app/modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function hasAttachmentsEmbedsOrComponents(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.attachments;
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.attachments;
            var5 = var2.length;
            var2 = 0;
            var1 = var5 > var2;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.embeds;
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var3.embeds;
            var6 = var5.length;
            var5 = 0;
            var2 = var6 > var5;
case 6:
            var1 = var2;
case 4:
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3.components;
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var3.components;
            var4 = var3.length;
            var3 = 0;
            var2 = var4 > var3;
case 10:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot0 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function hasAttachmentsEmbedsComponentsOrSnapshots(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            if(!(var4 != var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = 'messageSnapshots';
            var1 = var1 in var2;
            if(var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var2.message_snapshots;
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var6 = var2.messageSnapshots;
case 16:
            var1 = _closure1_slot0;
            var3 = undefined;
            var1 = var1.bind(var3)(var2);
            if(var1) { _fun0002_ip = 17; continue _fun0002 }
case 7:
            var2 = var4 != var6;
            if(!var2) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = var4 == var6;
            var3 = undefined;
            if(var4) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = var6.some;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var1 = arg1;
                var2 = var1.message;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var5.bind(var6)(var4);
case 20:
            var2 = var3;
case 18:
            var1 = var2;
case 17:
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var3['hasAttachmentsEmbedsComponentsOrSnapshots'] = var2;
    return var1;
})();
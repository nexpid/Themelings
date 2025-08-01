// app/modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function hasAttachmentsEmbedsOrComponents(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.attachments;
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0001_ip = 35; continue _fun0001 }
 18:
            var2 = var3.attachments;
            var5 = var2.length;
            var2 = 0;
            var1 = var5 > var2;
 35:
            if(var1) { _fun0001_ip = 71; continue _fun0001 }
 38:
            var2 = var3.embeds;
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 68; continue _fun0001 }
 51:
            var5 = var3.embeds;
            var6 = var5.length;
            var5 = 0;
            var2 = var6 > var5;
 68:
            var1 = var2;
 71:
            if(var1) { _fun0001_ip = 107; continue _fun0001 }
 74:
            var2 = var3.components;
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 104; continue _fun0001 }
 87:
            var3 = var3.components;
            var4 = var3.length;
            var3 = 0;
            var2 = var4 > var3;
 104:
            var1 = var2;
 107:
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
 0:
            var2 = arg1;
            var4 = null;
            if(!(var4 != var2)) { _fun0002_ip = 93; continue _fun0002 }
 9:
            var1 = 'messageSnapshots';
            var1 = var1 in var2;
            if(var1) { _fun0002_ip = 28; continue _fun0002 }
 20:
            var6 = var2.message_snapshots;
            _fun0002_ip = 34; continue _fun0002;
 28:
            var6 = var2.messageSnapshots;
 34:
            var1 = _closure1_slot0;
            var3 = undefined;
            var1 = var1.bind(var3)(var2);
            if(var1) { _fun0002_ip = 91; continue _fun0002 }
 51:
            var2 = var4 != var6;
            if(!var2) { _fun0002_ip = 88; continue _fun0002 }
 58:
            var4 = var4 == var6;
            var3 = undefined;
            if(var4) { _fun0002_ip = 85; continue _fun0002 }
 67:
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
 85:
            var2 = var3;
 88:
            var1 = var2;
 91:
            return var1;
 93:
            var1 = false;
            return var1;
        }
    };
    var3['hasAttachmentsEmbedsComponentsOrSnapshots'] = var2;
    return var1;
})();
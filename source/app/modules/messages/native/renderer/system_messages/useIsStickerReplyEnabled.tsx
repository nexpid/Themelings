// app/modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function computeIsStickerReplyEnabled(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg2;
            var2 = arg4;
            var4 = _closure1_slot4;
            var3 = var4.getCurrentUser;
            var5 = var3.bind(var4)();
            var3 = null;
            var4 = var3 != var5;
            if(!var4) { _fun0001_ip = 73; continue _fun0001 }
 31:
            var9 = _closure1_slot2;
            var8 = var9.getMember;
            var6 = var5.id;
            var5 = arg1;
            var5 = var8.bind(var9)(var5, var6);
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 70; continue _fun0001 }
 64:
            var3 = var5.isPending;
 70:
            var4 = var3;
 73:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var3 = var5.computeIsReadOnlyThread;
            var5 = var3.bind(var5)(var7);
            var6 = _closure1_slot3;
            var3 = var6.can;
            var1 = _closure1_slot5;
            var1 = var1.SEND_MESSAGES;
            var1 = var3.bind(var6)(var1, var7);
            var3 = arg3;
            var3 = var3.author;
            var3 = var3.bot;
            if(!var1) { _fun0001_ip = 153; continue _fun0001 }
 150:
            var1 = !var5;
 153:
            if(!var1) { _fun0001_ip = 159; continue _fun0001 }
 156:
            var1 = !var4;
 159:
            if(!var1) { _fun0001_ip = 165; continue _fun0001 }
 162:
            var1 = !var3;
 165:
            if(!var1) { _fun0001_ip = 171; continue _fun0001 }
 168:
            var1 = var2;
 171:
            return var1;
        }
    };
    var3['computeIsStickerReplyEnabled'] = var2;
    return var1;
})();
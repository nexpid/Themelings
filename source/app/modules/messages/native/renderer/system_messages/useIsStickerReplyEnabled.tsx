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
case 0:
            var7 = arg2;
            var2 = arg4;
            var4 = _closure1_slot4;
            var3 = var4.getCurrentUser;
            var5 = var3.bind(var4)();
            var3 = null;
            var4 = var3 != var5;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = _closure1_slot2;
            var8 = var9.getMember;
            var6 = var5.id;
            var5 = arg1;
            var5 = var8.bind(var9)(var5, var6);
            var6 = var3 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var5.isPending;
case 4:
            var4 = var3;
case 2:
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
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = !var5;
case 6:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = !var4;
case 8:
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = !var3;
case 10:
            if(!var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['computeIsStickerReplyEnabled'] = var2;
    return var1;
})();
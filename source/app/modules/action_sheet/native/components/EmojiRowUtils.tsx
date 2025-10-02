// app/modules/action_sheet/native/components/EmojiRowUtils.tsx
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
    var7 = var4.MessageFlags;
    var _closure1_slot2 = var7;
    var7 = var4.MessageStates;
    var _closure1_slot3 = var7;
    var4 = var4.MessageTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/components/EmojiRowUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var2 = arg3;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.state;
            var2 = _closure1_slot3;
            var2 = var2.SEND_FAILED;
            var1 = var4 !== var2;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var3.type;
            var2 = _closure1_slot4;
            var2 = var2.THREAD_STARTER_MESSAGE;
            var1 = var4 !== var2;
case 6:
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 1;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.hasFlag;
            var3 = var3.flags;
            var2 = _closure1_slot2;
            var2 = var2.EPHEMERAL;
            var2 = var4.bind(var5)(var3, var2);
            var1 = !var2;
case 8:
            return var1;
        }
    };
    var3['shouldShowEmojiRow'] = var2;
    return var1;
})();
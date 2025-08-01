// app/modules/threads/ThreadNotificationSettings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function computeThreadNotificationSetting(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = arguments[1];
            var4 = arguments[2];
            var6 = arguments[3];
            var8 = undefined;
            if(!(var5 === var8)) { _fun0001_ip = 25; continue _fun0001 }
 18:
            var5 = _closure1_slot4;
 25:
            if(!(var4 === var8)) { _fun0001_ip = 36; continue _fun0001 }
 29:
            var4 = _closure1_slot3;
 36:
            if(!(var6 === var8)) { _fun0001_ip = 47; continue _fun0001 }
 40:
            var6 = _closure1_slot2;
 47:
            var2 = var5.flags;
            var1 = var3.id;
            var9 = var2.bind(var5)(var1);
            var2 = null;
            if(!(var2 != var9)) { _fun0001_ip = 392; continue _fun0001 }
 71:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var10 = 5;
            var5 = var5[var10];
            var11 = var7.bind(var8)(var5);
            var7 = var11.hasFlag;
            var5 = _closure1_slot5;
            var5 = var5.ALL_MESSAGES;
            var5 = var7.bind(var11)(var9, var5);
            if(var5) { _fun0001_ip = 380; continue _fun0001 }
 122:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var10];
            var11 = var7.bind(var8)(var5);
            var7 = var11.hasFlag;
            var5 = _closure1_slot5;
            var5 = var5.ONLY_MENTIONS;
            var5 = var7.bind(var11)(var9, var5);
            if(var5) { _fun0001_ip = 368; continue _fun0001 }
 167:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var10];
            var8 = var7.bind(var8)(var5);
            var7 = var8.hasFlag;
            var5 = _closure1_slot5;
            var5 = var5.NO_MESSAGES;
            var5 = var7.bind(var8)(var9, var5);
            if(var5) { _fun0001_ip = 356; continue _fun0001 }
 212:
            var5 = var6.getChannel;
            var3 = var3.parent_id;
            var3 = var5.bind(var6)(var3);
            if(!(var2 != var3)) { _fun0001_ip = 344; continue _fun0001 }
 232:
            var6 = var4.isGuildOrCategoryOrChannelMuted;
            var5 = var3.guild_id;
            var2 = var3.id;
            var2 = var6.bind(var4)(var5, var2);
            if(var2) { _fun0001_ip = 332; continue _fun0001 }
 257:
            var2 = var4.resolvedMessageNotifications;
            var3 = var2.bind(var4)(var3);
            var2 = _closure1_slot6;
            var2 = var2.NO_MESSAGES;
            if(!(var3 !== var2)) { _fun0001_ip = 320; continue _fun0001 }
 282:
            var2 = _closure1_slot6;
            var2 = var2.ONLY_MENTIONS;
            if(!(var3 !== var2)) { _fun0001_ip = 308; continue _fun0001 }
 296:
            var2 = _closure1_slot5;
            var2 = var2.ALL_MESSAGES;
            _fun0001_ip = 318; continue _fun0001;
 308:
            var3 = _closure1_slot5;
            var2 = var3.ONLY_MENTIONS;
 318:
            _fun0001_ip = 330; continue _fun0001;
 320:
            var3 = _closure1_slot5;
            var2 = var3.NO_MESSAGES;
 330:
            return var2;
 332:
            var2 = _closure1_slot5;
            var2 = var2.NO_MESSAGES;
            return var2;
 344:
            var2 = _closure1_slot5;
            var2 = var2.NO_MESSAGES;
            return var2;
 356:
            var2 = _closure1_slot5;
            var2 = var2.NO_MESSAGES;
            return var2;
 368:
            var2 = _closure1_slot5;
            var2 = var2.ONLY_MENTIONS;
            return var2;
 380:
            var1 = _closure1_slot5;
            var1 = var1.ALL_MESSAGES;
            return var1;
 392:
            var1 = _closure1_slot5;
            var1 = var1.NO_MESSAGES;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThreadMemberFlags;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserNotificationSettings;
    var _closure1_slot6 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/threads/ThreadNotificationSettings.tsx';
    var5 = var6.bind(var7)(var5);
    var3['computeThreadNotificationSetting'] = var4;
    var2 = function useThreadNotificationSetting(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot4;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot3;
        var3[1] = var7;
        var2 = _closure1_slot2;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useThreadNotificationSetting'] = var2;
    return var1;
})();
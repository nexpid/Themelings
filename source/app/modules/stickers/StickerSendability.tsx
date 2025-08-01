// app/modules/stickers/StickerSendability.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var6 = 0;
    var4 = var8[var6];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var5 = {};
    var5['SENDABLE'] = var6;
    var4 = 'SENDABLE';
    var5[var6] = var4;
    var6 = 1;
    var5['SENDABLE_WITH_PREMIUM'] = var6;
    var4 = 'SENDABLE_WITH_PREMIUM';
    var5[var6] = var4;
    var6 = 2;
    var5['NONSENDABLE'] = var6;
    var4 = 'NONSENDABLE';
    var5[var6] = var4;
    var6 = 3;
    var5['SENDABLE_WITH_BOOSTED_GUILD'] = var6;
    var4 = 'SENDABLE_WITH_BOOSTED_GUILD';
    var5[var6] = var4;
    var _closure1_slot5 = var5;
    var4 = function getStickerSendability(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var9 = arg2;
            var8 = arg3;
            var6 = null;
            if(!(var6 != var9)) { _fun0001_ip = 333; continue _fun0001 }
 18:
            var5 = _closure1_slot1;
            var1 = _closure1_slot3;
            var3 = 1;
            var3 = var1[var3];
            var7 = undefined;
            var5 = var5.bind(var7)(var3);
            var3 = var5.canUseCustomStickersEverywhere;
            var5 = var3.bind(var5)(var9);
            var3 = _closure1_slot0;
            var10 = 2;
            var1 = var1[var10];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isStandardSticker;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0001_ip = 321; continue _fun0001 }
 87:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var10];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isGuildSticker;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0001_ip = 122; continue _fun0001 }
 118:
            if(!(var6 == var8)) { _fun0001_ip = 137; continue _fun0001 }
 122:
            var1 = _closure1_slot5;
            var1 = var1.NONSENDABLE;
            _fun0001_ip = 319; continue _fun0001;
 137:
            var3 = var4.available;
            if(var3) { _fun0001_ip = 161; continue _fun0001 }
 146:
            var3 = _closure1_slot5;
            var3 = var3.SENDABLE_WITH_BOOSTED_GUILD;
            _fun0001_ip = 316; continue _fun0001;
 161:
            var10 = var8.guild_id;
            if(!(var6 != var10)) { _fun0001_ip = 197; continue _fun0001 }
 170:
            var11 = var8.guild_id;
            var10 = '';
            if(!(var10 !== var11)) { _fun0001_ip = 197; continue _fun0001 }
 183:
            var10 = var8.guild_id;
            var4 = var4.guild_id;
            if(!(var10 !== var4)) { _fun0001_ip = 303; continue _fun0001 }
 197:
            var4 = var8.guild_id;
            if(!(var6 != var4)) { _fun0001_ip = 277; continue _fun0001 }
 206:
            var6 = _closure1_slot2;
            var10 = _closure1_slot3;
            var4 = 3;
            var4 = var10[var4];
            var7 = var6.bind(var7)(var4);
            var6 = var7.can;
            var4 = {};
            var10 = _closure1_slot4;
            var10 = var10.USE_EXTERNAL_STICKERS;
            var4['permission'] = var10;
            var4['user'] = var9;
            var4['context'] = var8;
            var4 = var6.bind(var7)(var4);
            if(var4) { _fun0001_ip = 277; continue _fun0001 }
 265:
            var4 = _closure1_slot5;
            var4 = var4.NONSENDABLE;
            _fun0001_ip = 301; continue _fun0001;
 277:
            var6 = _closure1_slot5;
            if(var5) { _fun0001_ip = 292; continue _fun0001 }
 284:
            var5 = var6.SENDABLE_WITH_PREMIUM;
            _fun0001_ip = 298; continue _fun0001;
 292:
            var5 = var6.SENDABLE;
 298:
            var4 = var5;
 301:
            _fun0001_ip = 313; continue _fun0001;
 303:
            var5 = _closure1_slot5;
            var4 = var5.SENDABLE;
 313:
            var3 = var4;
 316:
            var1 = var3;
 319:
            _fun0001_ip = 331; continue _fun0001;
 321:
            var2 = _closure1_slot5;
            var1 = var2.SENDABLE;
 331:
            return var1;
 333:
            var1 = _closure1_slot5;
            var1 = var1.NONSENDABLE;
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stickers/StickerSendability.tsx';
    var6 = var7.bind(var8)(var6);
    var3['StickerSendability'] = var5;
    var3['getStickerSendability'] = var4;
    var2 = function(arg1, arg2, arg3) {
        var6 = _closure1_slot6;
        var5 = undefined;
        var4 = arg1;
        var3 = arg2;
        var2 = arg3;
        var2 = var6.bind(var5)(var4, var3, var2);
        var1 = _closure1_slot5;
        var1 = var1.SENDABLE;
        var1 = var2 === var1;
        return var1;
    };
    var3['isSendableSticker'] = var2;
    return var1;
})();
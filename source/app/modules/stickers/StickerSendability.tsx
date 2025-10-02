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
case 0:
            var4 = arg1;
            var9 = arg2;
            var8 = arg3;
            var6 = null;
            if(!(var6 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
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
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var10];
            var3 = var3.bind(var7)(var1);
            var1 = var3.isGuildSticker;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var6 == var8)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var1 = _closure1_slot5;
            var1 = var1.NONSENDABLE;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var3 = var4.available;
            if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = _closure1_slot5;
            var3 = var3.SENDABLE_WITH_BOOSTED_GUILD;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var10 = var8.guild_id;
            if(!(var6 != var10)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var11 = var8.guild_id;
            var10 = '';
            if(!(var10 !== var11)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var10 = var8.guild_id;
            var4 = var4.guild_id;
            if(!(var10 !== var4)) { _fun0001_ip = 16; continue _fun0001 }
case 13:
            var4 = var8.guild_id;
            if(!(var6 != var4)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
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
            if(var4) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var4 = _closure1_slot5;
            var4 = var4.NONSENDABLE;
            _fun0001_ip = 20; continue _fun0001;
case 17:
            var6 = _closure1_slot5;
            if(var5) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var5 = var6.SENDABLE_WITH_PREMIUM;
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var5 = var6.SENDABLE;
case 23:
            var4 = var5;
case 20:
            _fun0001_ip = 24; continue _fun0001;
case 16:
            var5 = _closure1_slot5;
            var4 = var5.SENDABLE;
case 24:
            var3 = var4;
case 12:
            var1 = var3;
case 9:
            _fun0001_ip = 25; continue _fun0001;
case 4:
            var2 = _closure1_slot5;
            var1 = var2.SENDABLE;
case 25:
            return var1;
case 2:
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
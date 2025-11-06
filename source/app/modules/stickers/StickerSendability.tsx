// app/modules/stickers/StickerSendability.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var8[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var9 = 1;
    var4 = var8[var9];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var6 = 2;
    var4 = var8[var6];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var5 = {};
    var5['SENDABLE'] = var10;
    var4 = 'SENDABLE';
    var5[var10] = var4;
    var5['SENDABLE_WITH_PREMIUM'] = var9;
    var4 = 'SENDABLE_WITH_PREMIUM';
    var5[var9] = var4;
    var5['NONSENDABLE'] = var6;
    var4 = 'NONSENDABLE';
    var5[var6] = var4;
    var6 = 3;
    var5['SENDABLE_WITH_BOOSTED_GUILD'] = var6;
    var4 = 'SENDABLE_WITH_BOOSTED_GUILD';
    var5[var6] = var4;
    var _closure1_slot7 = var5;
    var4 = function getStickerSendability(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = arg2;
            var10 = arg3;
            var4 = null;
            if(!(var4 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot1;
            var1 = _closure1_slot3;
            var5 = 3;
            var5 = var1[var5];
            var9 = undefined;
            var6 = var6.bind(var9)(var5);
            var5 = var6.canUseCustomStickersEverywhere;
            var7 = var5.bind(var6)(var11);
            var5 = _closure1_slot0;
            var6 = 4;
            var1 = var1[var6];
            var5 = var5.bind(var9)(var1);
            var1 = var5.isStandardSticker;
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var1 = _closure1_slot3;
            var1 = var1[var6];
            var5 = var5.bind(var9)(var1);
            var1 = var5.isGuildSticker;
            var1 = var1.bind(var5)(var2);
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var4 == var10)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var1 = _closure1_slot7;
            var1 = var1.NONSENDABLE;
            _fun0001_ip = 9; continue _fun0001;
case 8:
            var8 = _closure1_slot4;
            var6 = var8.getSelfMember;
            var5 = var2.guild_id;
            var5 = var6.bind(var8)(var5);
            if(!(var4 != var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var2.available;
            if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = _closure1_slot7;
            var5 = var5.SENDABLE_WITH_BOOSTED_GUILD;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var6 = var10.guild_id;
            if(!(var4 != var6)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var8 = var10.guild_id;
            var6 = '';
            if(!(var6 !== var8)) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var8 = var10.guild_id;
            var6 = var2.guild_id;
            if(!(var8 !== var6)) { _fun0001_ip = 18; continue _fun0001 }
case 15:
            var6 = var10.guild_id;
            if(!(var4 != var6)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var8 = _closure1_slot2;
            var12 = _closure1_slot3;
            var6 = 5;
            var6 = var12[var6];
            var9 = var8.bind(var9)(var6);
            var8 = var9.can;
            var6 = {};
            var12 = _closure1_slot6;
            var12 = var12.USE_EXTERNAL_STICKERS;
            var6['permission'] = var12;
            var6['user'] = var11;
            var6['context'] = var10;
            var6 = var8.bind(var9)(var6);
            if(var6) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var6 = _closure1_slot7;
            var6 = var6.NONSENDABLE;
            _fun0001_ip = 22; continue _fun0001;
case 19:
            var8 = _closure1_slot7;
            if(var7) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var7 = var8.SENDABLE_WITH_PREMIUM;
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var7 = var8.SENDABLE;
case 25:
            var6 = var7;
case 22:
            _fun0001_ip = 26; continue _fun0001;
case 18:
            var7 = _closure1_slot7;
            var6 = var7.SENDABLE;
case 26:
            var5 = var6;
case 14:
            _fun0001_ip = 27; continue _fun0001;
case 10:
            var6 = _closure1_slot7;
            var5 = var6.NONSENDABLE;
case 27:
            var1 = var5;
case 9:
            _fun0001_ip = 28; continue _fun0001;
case 4:
            var6 = _closure1_slot5;
            var5 = var6.getStickerPack;
            var2 = var2.pack_id;
            var2 = var5.bind(var6)(var2);
            if(!(var4 != var2)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var2 = _closure1_slot7;
            var2 = var2.SENDABLE;
            _fun0001_ip = 31; continue _fun0001;
case 29:
            var3 = _closure1_slot7;
            var2 = var3.NONSENDABLE;
case 31:
            var1 = var2;
case 28:
            return var1;
case 2:
            var1 = _closure1_slot7;
            var1 = var1.NONSENDABLE;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stickers/StickerSendability.tsx';
    var6 = var7.bind(var8)(var6);
    var3['StickerSendability'] = var5;
    var3['getStickerSendability'] = var4;
    var2 = function(arg1, arg2, arg3) {
        var6 = _closure1_slot8;
        var5 = undefined;
        var4 = arg1;
        var3 = arg2;
        var2 = arg3;
        var2 = var6.bind(var5)(var4, var3, var2);
        var1 = _closure1_slot7;
        var1 = var1.SENDABLE;
        var1 = var2 === var1;
        return var1;
    };
    var3['isSendableSticker'] = var2;
    return var1;
})();
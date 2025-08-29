// app/modules/icymi/native/util/getIconForChannel.tsx
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
    var4 = var4.ChannelTypes;
    var _closure1_slot2 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/util/getIconForChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getIconForChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.type;
            var2 = _closure1_slot2;
            var2 = var2.GUILD_ANNOUNCEMENT;
            if(!(var2 !== var3)) { _fun0001_ip = 284; continue _fun0001 }
 28:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_VOICE;
            if(!(var2 !== var3)) { _fun0001_ip = 254; continue _fun0001 }
 45:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_STAGE_VOICE;
            if(!(var2 !== var3)) { _fun0001_ip = 224; continue _fun0001 }
 62:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_TEXT;
            if(!(var2 !== var3)) { _fun0001_ip = 194; continue _fun0001 }
 76:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_FORUM;
            if(!(var2 !== var3)) { _fun0001_ip = 164; continue _fun0001 }
 90:
            var2 = _closure1_slot2;
            var2 = var2.GUILD_MEDIA;
            if(!(var2 !== var3)) { _fun0001_ip = 134; continue _fun0001 }
 104:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.TextIcon;
            return var2;
 134:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ImageIcon;
            return var2;
 164:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ForumIcon;
            return var2;
 194:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.TextIcon;
            return var2;
 224:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.StageIcon;
            return var2;
 254:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.VoiceNormalIcon;
            return var2;
 284:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.AnnouncementsIcon;
            return var1;
        }
    };
    var3['getIconForChannel'] = var2;
    return var1;
})();
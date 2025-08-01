// app/modules/guild_role_subscriptions/native/components/EmojiIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/EmojiIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EmojiIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.guildId;
            var5 = var1.id;
            var10 = var1.size;
            var6 = undefined;
            if(!(var10 === var6)) { _fun0001_ip = 27; continue _fun0001 }
 24:
            var10 = 20;
 27:
            var4 = var1.useFallbackIcon;
            if(!(var4 === var6)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var4 = true;
 41:
            var12 = var1.fontSize;
            var9 = var1.lineHeight;
            if(!(var9 === var6)) { _fun0001_ip = 64; continue _fun0001 }
 57:
            var2 = 4;
            var9 = var10 + var2;
 64:
            var8 = var1.style;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 2;
            var1 = var11[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.useEmojiById;
            var13 = var1.bind(var2)(var7, var5);
            var2 = null;
            if(!(var2 != var13)) { _fun0001_ip = 319; continue _fun0001 }
 113:
            var7 = _closure1_slot3;
            var5 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 5;
            var1 = var11[var1];
            var5 = var5.bind(var6)(var1);
            var1 = {};
            var1['style'] = var8;
            var8 = {};
            var8['width'] = var10;
            var8['height'] = var10;
            var1['fastImageStyle'] = var8;
            var8 = {};
            var11 = var10;
            if(!(var2 != var12)) { _fun0001_ip = 170; continue _fun0001 }
 167:
            var11 = var12;
 170:
            var8['fontSize'] = var11;
            var8['lineHeight'] = var9;
            var1['textEmojiStyle'] = var8;
            var8 = var13.id;
            if(!(var2 == var8)) { _fun0001_ip = 224; continue _fun0001 }
 194:
            var9 = var13.surrogates;
            if(!(var2 == var9)) { _fun0001_ip = 208; continue _fun0001 }
 203:
            var9 = var13.name;
 208:
            var11 = var2 != var9;
            var8 = '';
            if(!var11) { _fun0001_ip = 222; continue _fun0001 }
 219:
            var8 = var9;
 222:
            _fun0001_ip = 229; continue _fun0001;
 224:
            var8 = var13.name;
 229:
            var1['name'] = var8;
            var8 = var13.id;
            if(!(var2 == var8)) { _fun0001_ip = 249; continue _fun0001 }
 242:
            var8 = var13.url;
            _fun0001_ip = 306; continue _fun0001;
 249:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 6;
            var9 = var12[var9];
            var12 = var11.bind(var6)(var9);
            var11 = var12.getEmojiURL;
            var9 = {};
            var14 = var13.id;
            var9['id'] = var14;
            var13 = var13.animated;
            var9['animated'] = var13;
            var9['size'] = var10;
            var8 = var11.bind(var12)(var9);
 306:
            var1['src'] = var8;
            var1 = var7.bind(var6)(var5, var1);
            _fun0001_ip = 398; continue _fun0001;
 319:
            var2 = null;
            if(!var4) { _fun0001_ip = 395; continue _fun0001 }
 324:
            var5 = _closure1_slot3;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 3;
            var3 = var9[var3];
            var4 = var8.bind(var6)(var3);
            var3 = {};
            var7 = 'contain';
            var3['resizeMode'] = var7;
            var7 = {};
            var7['width'] = var10;
            var7['height'] = var10;
            var3['style'] = var7;
            var7 = 4;
            var7 = var9[var7];
            var7 = var8.bind(var6)(var7);
            var3['source'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 395:
            var1 = var2;
 398:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
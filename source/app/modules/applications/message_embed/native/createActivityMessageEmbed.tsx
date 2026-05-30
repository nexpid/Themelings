// app/modules/applications/message_embed/native/createActivityMessageEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/message_embed/native/createActivityMessageEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityMessageEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.theme;
            var9 = var1.embedUrl;
            var8 = var1.message;
            var5 = var1.app;
            var4 = var1.params;
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var6 = undefined;
            var7 = var2.bind(var6)(var1);
            var2 = var7.createAppMessageEmbed;
            var1 = {};
            var1['theme'] = var10;
            var1['embedUrl'] = var9;
            var1['message'] = var8;
            var1['app'] = var5;
            var2 = var2.bind(var7)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var4.linkId;
            if(!(var1 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 1;
            var3 = var8[var3];
            var6 = var4.bind(var6)(var3);
            var4 = var6.getOrFetchCustomActivityLink;
            var3 = var5.id;
            var6 = var4.bind(var6)(var3, var7);
            var4 = var1 == var6;
            var3 = null;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = {};
            var12 = var4;
            var11 = var2;
            var7 = copyDataProperties(var12, var11);
            var7 = var5.name;
            var5 = 'title';
            var4[4] = var7;
            var7 = var6.title;
            var5 = 'header';
            var4[4] = var7;
            var7 = var6.description;
            var5 = 'info';
            var4[4] = var7;
            var7 = 'bot';
            var5 = 'bannerRatio';
            var4[4] = var7;
            var5 = var6.getAssetURL;
            var5 = var5.bind(var6)();
            var7 = var1 != var5;
            var6 = null;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var5;
case 8:
            var5 = 'staticBannerSrc';
            var4[4] = var6;
            var5 = 'tagline';
            var4[4] = var1;
            var3 = var4;
case 6:
            return var3;
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var3['createActivityMessageEmbed'] = var2;
    return var1;
})();
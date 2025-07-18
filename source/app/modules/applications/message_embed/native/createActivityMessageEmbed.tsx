// app/modules/applications/message_embed/native/createActivityMessageEmbed.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/message_embed/native/createActivityMessageEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityMessageEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.theme;
            var7 = var1.appId;
            var8 = var1.embedUrl;
            var6 = var1.message;
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var2 = var5.createAppMessageEmbed;
            var1 = {};
            var1['theme'] = var9;
            var1['appId'] = var7;
            var1['embedUrl'] = var8;
            var1['message'] = var6;
            var2 = var2.bind(var5)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 322; continue _fun0001 }
 90:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 2;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.extractActivityBookmarkParams;
            var5 = var5.bind(var6)(var8);
            var8 = var5.linkId;
            if(!(var1 != var8)) { _fun0001_ip = 320; continue _fun0001 }
 134:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 3;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.getOrFetchCustomActivityLink;
            var5 = var5.bind(var6)(var7, var8);
            if(!(var1 != var5)) { _fun0001_ip = 318; continue _fun0001 }
 173:
            var6 = _closure1_slot2;
            var3 = var6.getApplication;
            var6 = var3.bind(var6)(var7);
            var3 = {};
            var11 = var3;
            var10 = var2;
            var7 = copyDataProperties(var11, var10);
            var7 = var1 == var6;
            var4 = undefined;
            if(var7) { _fun0001_ip = 214; continue _fun0001 }
 209:
            var4 = var6.name;
 214:
            var7 = var1 != var4;
            var6 = null;
            if(!var7) { _fun0001_ip = 226; continue _fun0001 }
 223:
            var6 = var4;
 226:
            var4 = 'title';
            var3[var4] = var6;
            var6 = var5.title;
            var4 = 'header';
            var3[var4] = var6;
            var6 = var5.description;
            var4 = 'info';
            var3[var4] = var6;
            var6 = 'bot';
            var4 = 'bannerRatio';
            var3[var4] = var6;
            var4 = var5.getAssetURL;
            var4 = var4.bind(var5)();
            var6 = var1 != var4;
            var5 = null;
            if(!var6) { _fun0001_ip = 298; continue _fun0001 }
 295:
            var5 = var4;
 298:
            var4 = 'staticBannerSrc';
            var3[var4] = var5;
            var4 = 'tagline';
            var3[var4] = var1;
            return var3;
 318:
            return var1;
 320:
            return var2;
 322:
            return var1;
        }
    };
    var3['createActivityMessageEmbed'] = var2;
    return var1;
})();
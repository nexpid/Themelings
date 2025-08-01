// app/modules/applications/message_embed/utils/activityBookmarkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 1;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/message_embed/utils/activityBookmarkUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function extractActivityBookmarkParams(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var1 = var2[var1];
            var2 = undefined;
            var4 = var3.bind(var2)(var1);
            var3 = var4.toURLSafe;
            var1 = arg1;
            var5 = var3.bind(var4)(var1);
            var1 = {};
            var4 = null;
            var3 = var4 == var5;
            var6 = undefined;
            if(var3) { _fun0001_ip = 71; continue _fun0001 }
 51:
            var8 = var5.searchParams;
            var7 = var8.get;
            var3 = 'referrer_id';
            var6 = var7.bind(var8)(var3);
 71:
            var7 = var4 != var6;
            var3 = undefined;
            if(!var7) { _fun0001_ip = 83; continue _fun0001 }
 80:
            var3 = var6;
 83:
            var1['referrerId'] = var3;
            var3 = var4 == var5;
            var6 = undefined;
            if(var3) { _fun0001_ip = 117; continue _fun0001 }
 97:
            var8 = var5.searchParams;
            var7 = var8.get;
            var3 = 'custom_id';
            var6 = var7.bind(var8)(var3);
 117:
            var7 = var4 != var6;
            var3 = undefined;
            if(!var7) { _fun0001_ip = 129; continue _fun0001 }
 126:
            var3 = var6;
 129:
            var1['customId'] = var3;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 163; continue _fun0001 }
 143:
            var7 = var5.searchParams;
            var6 = var7.get;
            var5 = 'link_id';
            var3 = var6.bind(var7)(var5);
 163:
            var4 = var4 != var3;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 175; continue _fun0001 }
 172:
            var2 = var3;
 175:
            var1['linkId'] = var2;
            return var1;
        }
    };
    var3['extractActivityBookmarkParams'] = var2;
    return var1;
})();
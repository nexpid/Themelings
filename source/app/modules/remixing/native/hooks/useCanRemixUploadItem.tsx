// app/modules/remixing/native/hooks/useCanRemixUploadItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/hooks/useCanRemixUploadItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var10 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 1;
            var5 = var3[var5];
            var8 = undefined;
            var9 = var2.bind(var8)(var5);
            var7 = var9.useStateFromStores;
            var11 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var11;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var7.bind(var9)(var5, var1);
            var1 = 2;
            var1 = var3[var1];
            var9 = var2.bind(var8)(var1);
            var7 = var9.useIsRemixEnabledForMedia;
            var2 = {};
            var3 = null;
            var1 = var3 == var4;
            var12 = undefined;
            if(var1) { _fun0001_ip = 103; continue _fun0001 }
 98:
            var12 = var4.width;
 103:
            var13 = var3 != var12;
            var11 = 0;
            if(!var13) { _fun0001_ip = 115; continue _fun0001 }
 112:
            var11 = var12;
 115:
            var2['width'] = var11;
            var12 = var3 == var4;
            var11 = undefined;
            if(var12) { _fun0001_ip = 133; continue _fun0001 }
 128:
            var11 = var4.height;
 133:
            var12 = var3 != var11;
            var1 = 0;
            if(!var12) { _fun0001_ip = 145; continue _fun0001 }
 142:
            var1 = var11;
 145:
            var2['height'] = var1;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 3;
            var1 = var12[var1];
            var1 = var11.bind(var8)(var1);
            var1 = var1.CHAT_INPUT;
            var1 = var7.bind(var9)(var10, var2, var1);
            var2 = var3 != var4;
            if(!var2) { _fun0001_ip = 239; continue _fun0001 }
 189:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 4;
            var6 = var9[var6];
            var9 = var7.bind(var8)(var6);
            var8 = var9.checkIsFormatEligible;
            var7 = var4.uri;
            var6 = var4.filename;
            var4 = var4.mimeType;
            var2 = var8.bind(var9)(var7, var6, var4);
 239:
            if(!var1) { _fun0001_ip = 262; continue _fun0001 }
 242:
            var3 = var3 != var5;
            if(!var3) { _fun0001_ip = 259; continue _fun0001 }
 249:
            var4 = var5.isForumLikeChannel;
            var3 = var4.bind(var5)();
 259:
            var1 = !var3;
 262:
            if(!var1) { _fun0001_ip = 268; continue _fun0001 }
 265:
            var1 = var2;
 268:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
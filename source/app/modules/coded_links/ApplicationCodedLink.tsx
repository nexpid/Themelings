// app/modules/coded_links/ApplicationCodedLink.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var3, var4, var5);
    var8 = var1.Set;
    var5 = 0;
    var4 = var7[var5];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.CodedLinkType;
    var9 = var4.APP_DIRECTORY_PROFILE;
    var4 = new Array(5);
    var4[0] = var9;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var9 = var9.CodedLinkType;
    var9 = var9.ACTIVITY_BOOKMARK;
    var4[1] = var9;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var9 = var9.CodedLinkType;
    var9 = var9.APP_DIRECTORY_STOREFRONT;
    var4[2] = var9;
    var9 = var7[var5];
    var9 = var6.bind(var1)(var9);
    var9 = var9.CodedLinkType;
    var9 = var9.APP_DIRECTORY_STOREFRONT_SKU;
    var4[3] = var9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.CodedLinkType;
    var5 = var5.APP_OAUTH2_LINK;
    var4[4] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var13 = var5;
    var12 = var4;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot2 = var4;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/coded_links/ApplicationCodedLink.tsx';
    var5 = var6.bind(var7)(var5);
    var3['APP_LINK_CODED_TYPES'] = var4;
    var4 = function isApplicationCodedLink(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.isInSet;
        var2 = _closure1_slot2;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['isApplicationCodedLink'] = var4;
    var2 = function getApplicationCodedLinkData(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var7 = 0;
            var4 = var4[var7];
            var5 = undefined;
            var4 = var6.bind(var5)(var4);
            var4 = var4.CodedLinkType;
            var4 = var4.APP_DIRECTORY_PROFILE;
            if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var5)(var4);
            var4 = var4.CodedLinkType;
            var4 = var4.APP_OAUTH2_LINK;
            if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var5)(var4);
            var4 = var4.CodedLinkType;
            var4 = var4.APP_DIRECTORY_STOREFRONT;
            if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var5)(var4);
            var4 = var4.CodedLinkType;
            var4 = var4.APP_DIRECTORY_STOREFRONT_SKU;
            if(!(var4 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var7];
            var4 = var6.bind(var5)(var4);
            var4 = var4.CodedLinkType;
            var4 = var4.ACTIVITY_BOOKMARK;
            if(!(var4 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            return var5;
case 8:
            var4 = {};
            var4['type'] = var3;
            var4['applicationId'] = var2;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 3;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.extractActivityBookmarkParams;
            var6 = arg3;
            var6 = var7.bind(var8)(var6);
            var4['params'] = var6;
            return var4;
case 6:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 2;
            var1 = var6[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.parseStorefrontSkuCodedLink;
            var5 = var1.bind(var4)(var2);
            var1 = null;
            var4 = var1 == var5;
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = {};
            var4['type'] = var3;
            var6 = var5.applicationId;
            var4['applicationId'] = var6;
            var5 = var5.skuId;
            var4['skuId'] = var5;
            var1 = var4;
case 10:
            return var1;
case 2:
            var1 = {};
            var1['type'] = var3;
            var1['applicationId'] = var2;
            return var1;
        }
    };
    var3['getApplicationCodedLinkData'] = var2;
    return var1;
})();
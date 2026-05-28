// app/modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function getNotSupportedSentence(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot3;
            var2 = var4.getConfigForApplicationId;
            var2 = var2.bind(var4)(var5);
            if(!(var3 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var2.excludedPlatforms;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var6 = _closure1_slot6;
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var6 = _closure1_slot6;
case 7:
            var3 = var6.length;
            var1 = '';
            var2 = 0;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 4;
            var3 = var10[var3];
            var8 = undefined;
            var3 = var9.bind(var8)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var3 = _closure1_slot1;
            var2 = 5;
            var2 = var10[var2];
            var2 = var3.bind(var8)(var2);
            var3 = var2["5h8p5P"];
            var2 = {};
            var7 = 3;
            var7 = var10[var7];
            var9 = var9.bind(var8)(var7);
            var8 = var9.getListSummaryLabel;
            var10 = var6.map;
            var7 = function(arg1) {
                var2 = _closure1_slot5;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var7 = var10.bind(var6)(var7);
            var7 = var8.bind(var9)(var7);
            var2['platforms'] = var7;
            var6 = var6.length;
            var2['count'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function getCheckoutDisclaimerMessageForApplication(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var7 = undefined;
            var1 = var2.bind(var7)(var1);
            var4 = var1.intl;
            var3 = var4.format;
            var2 = _closure1_slot1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var2.bind(var7)(var1);
            var2 = var1.Q0dHYO;
            var1 = {};
            var6 = _closure1_slot7;
            var5 = null;
            var9 = var5 == var8;
            var5 = undefined;
            if(var9) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var8.id;
case 10:
            var5 = var6.bind(var7)(var5);
            var1['platforms_info'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.MarketingURLs;
    var _closure1_slot4 = var6;
    var9 = {};
    var6 = 2;
    var10 = var8[var6];
    var10 = var7.bind(var1)(var10);
    var10 = var10.StorefrontPlatform;
    var11 = var10.DESKTOP;
    var10 = 'PC';
    var9[10] = var10;
    var10 = var8[var6];
    var10 = var7.bind(var1)(var10);
    var10 = var10.StorefrontPlatform;
    var11 = var10.XBOX;
    var10 = 'Xbox';
    var9[10] = var10;
    var10 = var8[var6];
    var10 = var7.bind(var1)(var10);
    var10 = var10.StorefrontPlatform;
    var11 = var10.PLAYSTATION;
    var10 = 'PlayStation';
    var9[10] = var10;
    var _closure1_slot5 = var9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.StorefrontPlatform;
    var9 = var6.PLAYSTATION;
    var6 = new Array(1);
    var6[0] = var9;
    var _closure1_slot6 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getNotSupportedSentence'] = var5;
    var3['getCheckoutDisclaimerMessageForApplication'] = var4;
    var4 = function getFinePrintMessageForApplication(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var1 = arg2;
            var3 = var1.shouldAppendDisclaimer;
            var2 = null;
            var4 = var2 == var8;
            var7 = undefined;
            var1 = undefined;
            if(var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var1 = var8.name;
case 12:
            var2 = var2 != var1;
            var9 = "game's";
            if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var9 = var1;
case 14:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 4;
            var4 = var10[var1];
            var4 = var2.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = var10[var1];
            var1 = var2.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.CVITgq;
            var1 = {};
            var1['applicationName'] = var9;
            var1 = var4.bind(var5)(var2, var1);
            _fun0003_ip = 18; continue _fun0003;
case 16:
            var3 = _closure1_slot1;
            var2 = 5;
            var2 = var10[var2];
            var2 = var3.bind(var7)(var2);
            var3 = var2["3ah/a2"];
            var2 = {};
            var2['applicationName'] = var9;
            var6 = _closure1_slot8;
            var6 = var6.bind(var7)(var8);
            var2['platforms_info'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
        }
    };
    var3['getFinePrintMessageForApplication'] = var4;
    var4 = function getMobileFinePrintMessageForApplication(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg1;
            var1 = arg3;
            var1 = var1.shouldAppendDisclaimer;
            var2 = null;
            var4 = var2 == var8;
            var7 = undefined;
            var3 = undefined;
            if(var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var3 = var8.name;
case 12:
            var4 = var2 != var3;
            var2 = "game's";
            if(!var4) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var2 = var3;
case 14:
            var9 = {};
            var3 = arg2;
            var9['buyButtonLabel'] = var3;
            var3 = _closure1_slot4;
            var3 = var3.PAID_TERMS;
            var9['paidServiceTermURL'] = var3;
            var9['applicationName'] = var2;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 4;
            var2 = var10[var2];
            var2 = var3.bind(var7)(var2);
            var5 = var2.intl;
            var4 = var5.format;
            var3 = _closure1_slot1;
            var2 = 5;
            var2 = var10[var2];
            var2 = var3.bind(var7)(var2);
            if(var1) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var1 = var2.Ufm9XX;
            var1 = var4.bind(var5)(var1, var9);
            _fun0004_ip = 21; continue _fun0004;
case 19:
            var3 = var2.N6cvS+;
            var2 = {};
            var12 = var2;
            var11 = var9;
            var9 = copyDataProperties(var12, var11);
            var6 = _closure1_slot8;
            var7 = var6.bind(var7)(var8);
            var6 = 'platforms_info';
            var2[5] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var3['getMobileFinePrintMessageForApplication'] = var4;
    var4 = function getRedeemPurchaseDescriptionForApplication(arg1) {
        var5 = arg1;
        var8 = var5.name;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 4;
        var1 = var9[var1];
        var7 = undefined;
        var1 = var2.bind(var7)(var1);
        var4 = var1.intl;
        var3 = var4.format;
        var2 = _closure1_slot1;
        var1 = 5;
        var1 = var9[var1];
        var1 = var2.bind(var7)(var1);
        var2 = var1.fO4b1C;
        var1 = {};
        var1['applicationName'] = var8;
        var6 = _closure1_slot7;
        var5 = var5.id;
        var5 = var6.bind(var7)(var5);
        var1['platforms_info'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getRedeemPurchaseDescriptionForApplication'] = var4;
    var2 = function getGiftLinkAccountDescriptionForApplication(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var1 = arg2;
            var2 = var1.hasAlreadyLinked;
            var8 = var5.name;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var7 = undefined;
            var1 = var3.bind(var7)(var1);
            if(var2) { _fun0005_ip = 22; continue _fun0005 }
case 6:
            var4 = var1.vyAtfo;
            _fun0005_ip = 23; continue _fun0005;
case 22:
            var4 = var1.yqAKVO;
case 23:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var1 = var2.bind(var7)(var1);
            var3 = var1.intl;
            var2 = var3.format;
            var1 = {};
            var1['applicationName'] = var8;
            var6 = _closure1_slot7;
            var5 = var5.id;
            var5 = var6.bind(var7)(var5);
            var1['platforms_info'] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['getGiftLinkAccountDescriptionForApplication'] = var2;
    return var1;
})();
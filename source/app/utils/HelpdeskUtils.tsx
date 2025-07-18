// app/utils/HelpdeskUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function wrapURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 16; continue _fun0001 }
 9:
            var2 = _closure1_slot5;
 16:
            var1 = arg1;
            var1 = var2 + var1;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function getLocale() {
        var1 = _closure1_slot3;
        var2 = var1.locale;
        var1 = var2.toLowerCase;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot8 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.LocalizedLinks;
    var _closure1_slot4 = var8;
    var10 = var2.SUPPORT_DOMAIN;
    var9 = var2.SUPPORT_DEV_DOMAIN;
    var2 = var4.HermesInternal;
    var2 = var2.concat;
    var8 = 'https://';
    var2 = var2.bind(var8)(var10);
    var _closure1_slot5 = var2;
    var4 = var4.HermesInternal;
    var4 = var4.concat;
    var4 = var4.bind(var8)(var9);
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = function getArticleURL(arg1) {
        var3 = _closure1_slot7;
        var1 = _closure1_slot8;
        var2 = undefined;
        var7 = var1.bind(var2)();
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var5 = '/hc/';
        var4 = '/articles/';
        var1 = arg1;
        var1 = var6.bind(var5)(var7, var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['getArticleURL'] = var8;
    var8 = function getDevArticleURL(arg1) {
        var4 = _closure1_slot7;
        var2 = _closure1_slot8;
        var3 = undefined;
        var8 = var2.bind(var3)();
        var2 = global;
        var2 = var2.HermesInternal;
        var7 = var2.concat;
        var6 = '/hc/';
        var5 = '/articles/';
        var2 = arg1;
        var2 = var7.bind(var6)(var8, var5, var2);
        var1 = _closure1_slot6;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4['getDevArticleURL'] = var8;
    var8 = function getCreatorSupportArticleURL(arg1) {
        var4 = _closure1_slot7;
        var1 = _closure1_slot8;
        var3 = undefined;
        var7 = var1.bind(var3)();
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var5 = '/hc/';
        var2 = '/articles/';
        var1 = arg1;
        var2 = var6.bind(var5)(var7, var2, var1);
        var1 = 'https://creator-support.discord.com';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4['getCreatorSupportArticleURL'] = var8;
    var8 = function getTwitterURL() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 2;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var1 = _closure1_slot4;
        var1 = var1.TWITTER;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['getTwitterURL'] = var8;
    var8 = function getCommunityURL() {
        var3 = _closure1_slot7;
        var1 = _closure1_slot8;
        var2 = undefined;
        var5 = var1.bind(var2)();
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var1 = '/hc/';
        var1 = var4.bind(var1)(var5);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['getCommunityURL'] = var8;
    var8 = function getSubmitRequestURL(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var5 = undefined;
            var9 = var2.bind(var5)();
            var2 = global;
            var4 = var2.encodeURIComponent;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 3;
            var1 = var8[var1];
            var7 = var7.bind(var5)(var1);
            var1 = var7.getPlatformName;
            var1 = var1.bind(var7)();
            var8 = var4.bind(var5)(var1);
            var1 = var2.HermesInternal;
            var7 = var1.concat;
            var4 = '/hc/';
            var1 = '/requests/new?platform=';
            var1 = var7.bind(var4)(var9, var1, var8);
            var3 = var3.bind(var5)(var1);
            var4 = null;
            var1 = var3;
            if(!(var4 != var6)) { _fun0002_ip = 144; continue _fun0002 }
 107:
            var4 = var2.encodeURIComponent;
            var5 = var4.bind(var5)(var6);
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = '&device_info=';
            var2 = var4.bind(var2)(var5);
            var1 = var3 + var2;
 144:
            return var1;
        }
    };
    var4['getSubmitRequestURL'] = var8;
    var8 = function getSearchURL(arg1) {
        var1 = global;
        var4 = var1.encodeURIComponent;
        var3 = undefined;
        var2 = arg1;
        var10 = var4.bind(var3)(var2);
        var2 = _closure1_slot7;
        var4 = _closure1_slot8;
        var12 = var4.bind(var3)();
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var13 = '/hc/';
        var11 = '/search?utf8=%E2%9C%93&query=';
        var9 = '&commit=Search';
        var1 = var13[var6](var12, var11, var10, var9, var8);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['getSearchURL'] = var8;
    var8 = function getFeaturedArticlesJsonURL() {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = '/api/v2/help_center/en-us/articles.json?label_names=featured';
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var4['getFeaturedArticlesJsonURL'] = var8;
    var5 = function getAppsSupportURL(arg1) {
        var4 = _closure1_slot7;
        var1 = _closure1_slot8;
        var3 = undefined;
        var7 = var1.bind(var3)();
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var5 = '/hc/';
        var2 = '/articles/';
        var1 = arg1;
        var2 = var6.bind(var5)(var7, var2, var1);
        var1 = 'https://support-apps.discord.com';
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var4['getAppsSupportURL'] = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/HelpdeskUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SUPPORT_LOCATION'] = var2;
    return var1;
})();
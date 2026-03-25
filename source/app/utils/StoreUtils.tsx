// app/utils/StoreUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var5 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var7;
        var1 = function _httpGetWithCountryCodeQuery() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot2;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        var11 = arg1;
                        var5 = arguments[1];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var7 = undefined;
                        if(!(var5 === var7)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var5 = true;
case 4:
                        SaveGenerator(address=30);
case 6:
                        return var7;
case 7:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var6 = _closure1_slot3;
                        var3 = var6.isAuthenticated;
                        var3 = var3.bind(var6)();
                        if(!var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                        var12 = new Array(0);
                        var3 = _closure1_slot5;
                        var3 = var3.hasFetchedPaymentSources;
                        if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var5 = var12.push;
                        var3 = _closure1_slot4;
                        var3 = var3.paymentSourcesFetchRequest;
                        var6 = null;
                        if(!(var6 == var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var6 = 10;
                        var6 = var10[var6];
                        var9 = var9.bind(var7)(var6);
                        var6 = var9.fetchPaymentSources;
                        var3 = var6.bind(var9)();
case 15:
                        var3 = var5.bind(var12)(var3);
case 13:
                        var3 = _closure1_slot4;
                        var3 = var3.ipCountryCodeLoaded;
                        if(var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                        var5 = var12.push;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var3 = 10;
                        var3 = var9[var3];
                        var6 = var6.bind(var7)(var3);
                        var3 = var6.fetchIpCountryCode;
                        var3 = var3.bind(var6)();
                        var3 = var5.bind(var12)(var3);
case 17:
                        var5 = var12.push;
                        var3 = function waitForSubscriptionsToBeFetched() {
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = function() {
                                var4 = _closure1_slot2;
                                var3 = undefined;
                                var2 = function* (arg1) {
                                    var1 = function* anon_0_(arg1) {
                                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                            StartGenerator();
                                            var3 = arg1;
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                                            var _closure8_slot0 = var3;
                                            var2 = undefined;
                                            var _closure8_slot1 = var2;
                                            var7 = _closure1_slot6;
                                            var6 = var7.hasFetchedSubscriptions;
                                            var6 = var6.bind(var7)();
                                            if(var6) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                                            var6 = _closure1_slot4;
                                            var6 = var6.isSubscriptionFetching;
                                            if(var6) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                                            var6 = _closure1_slot0;
                                            var7 = _closure1_slot1;
                                            var4 = 10;
                                            var4 = var7[var4];
                                            var6 = var6.bind(var2)(var4);
                                            var4 = var6.fetchSubscriptions;
                                            var4 = var4.bind(var6)();
                                            SaveGenerator(address=89);
case 14:
                                            return var4;
case 25:
                                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                                            if(var6) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                                            var6 = var3.bind(var2)();
                                            _fun0003_ip = 28; continue _fun0003;
case 26:
                                            return var4;
case 23:
                                            var4 = function wait() {
                                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                                    var1 = _closure1_slot4;
                                                    var2 = var1.isSubscriptionFetching;
                                                    if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                                                    var3 = _closure8_slot0;
                                                    var2 = undefined;
                                                    var2 = var3.bind(var2)();
                                                    _fun0004_ip = 31; continue _fun0004;
case 29:
                                                    var2 = global;
                                                    var4 = var2.setTimeout;
                                                    var3 = _closure8_slot1;
                                                    var2 = undefined;
                                                    var1 = 50;
                                                    var1 = var4.bind(var2)(var3, var1);
case 31:
                                                    var1 = undefined;
                                                    return var1;
                                                }
                                            };
                                            _closure8_slot1 = var4;
                                            var4 = var4.bind(var2)();
                                            _fun0003_ip = 28; continue _fun0003;
case 21:
                                            var3 = var3.bind(var2)();
case 28:
                                            return var2;
case 19:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var2 = var4.bind(var3)(var2);
                                var _closure6_slot0 = var2;
                                var1 = function() {
                                    var1 = undefined;
                                    var4 = _closure6_slot0;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                return var1;
                            };
                            var1 = undefined;
                            var4 = var2.bind(var1)();
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var5 = var2;
                            var1 = new var5[var3](var4, var3);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        };
                        var3 = var3.bind(var7)();
                        var3 = var5.bind(var12)(var3);
                        var9 = global;
                        var6 = var9.Promise;
                        var5 = var6.race;
                        var10 = var9.Promise;
                        var3 = var10.allSettled;
                        var10 = var3.bind(var10)(var12);
                        var3 = new Array(2);
                        var3[0] = var10;
                        var10 = var9.Promise;
                        var9 = var10.prototype;
                        var9 = Object.create(var9, {constructor: {value: var10}});
                        var14 = function(arg1) {
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = arg1;
                            var1 = 10000;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        };
                        var15 = var9;
                        var8 = new var15[var10](var14, var13);
                        var8 = var8 instanceof Object ? var8 : var9;
                        var3[1] = var8;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address=300);
case 32:
                        return var3;
case 33:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 34; continue _fun0002 }
case 10:
                        var6 = _closure1_slot5;
                        var5 = var6.getDefaultBillingCountryCode;
                        var6 = var5.bind(var6)();
                        var5 = _closure1_slot5;
                        var5 = var5.defaultPaymentSource;
                        var8 = null;
                        var10 = var8 == var5;
                        var9 = undefined;
                        if(var10) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                        var9 = var5.id;
case 35:
                        var10 = var8 != var9;
                        var5 = null;
                        if(!var10) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                        var5 = var9;
case 37:
                        var10 = _closure1_slot6;
                        var9 = var10.getPremiumTypeSubscription;
                        var9 = var9.bind(var10)();
                        var10 = var8 != var9;
                        if(!var10) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                        var12 = var9.paymentSourceId;
                        var10 = var8 != var12;
case 39:
                        if(!var10) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                        var5 = var9.paymentSourceId;
case 41:
                        if(!(var8 === var6)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                        var9 = _closure1_slot4;
                        var10 = var9.ipCountryCode;
                        var12 = var8 != var10;
                        var9 = null;
                        if(!var12) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                        var9 = var10;
case 45:
                        var6 = var9;
case 43:
                        var9 = {};
                        if(!(var8 != var6)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                        var9['country_code'] = var6;
case 47:
                        if(!(var8 != var5)) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                        var9['payment_source_id'] = var5;
case 49:
                        if(!(var8 == var6)) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                        var6 = var11;
                        if(!(var8 != var5)) { _fun0002_ip = 53; continue _fun0002 }
case 51:
                        var10 = 'string';
                        var8 = typeof var11;
                        var5 = var11;
                        if(!(var10 === var8)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
                        var8 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        var8['url'] = var11;
                        var5 = var8;
case 54:
                        var8 = var5.query;
                        var8 = typeof var8;
                        if(!(var10 !== var8)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                        var8 = {};
                        var14 = var8;
                        var13 = var9;
                        var9 = copyDataProperties(var14, var13);
                        var13 = var5.query;
                        var14 = var8;
                        var9 = copyDataProperties(var14, var13);
                        var5['query'] = var8;
                        var6 = var5;
case 53:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var4 = 11;
                        var4 = var8[var4];
                        var4 = var5.bind(var7)(var4);
                        var5 = var4.HTTP;
                        var4 = var5.get;
                        var4 = var4.bind(var5)(var6);
                        return var4;
case 56:
                        var4 = global;
                        var6 = var4.Error;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {constructor: {value: var6}});
                        var14 = 'string query not supported';
                        var15 = var5;
                        var4 = new var15[var6](var14, var13);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
case 34:
                        return var3;
case 8:
                        return var2;
case 2:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot10 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot10 = var1;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var4);
        var1 = 0;
        var4 = var7[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var _closure1_slot2 = var4;
        var4 = 1;
        var4 = var7[var4];
        var4 = var5.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 2;
        var4 = var7[var4];
        var4 = var5.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var7[var4];
        var4 = var5.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 4;
        var4 = var7[var4];
        var4 = var5.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 5;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var8 = var4.Endpoints;
        var _closure1_slot7 = var8;
        var4 = var4.OperatingSystems;
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var7[var4];
        var5 = var5.bind(var1)(var4);
        var4 = var5.shim;
        var4 = var4.bind(var5)();
        var5 = 7;
        var4 = var7[var5];
        var4 = var6.bind(var1)(var4);
        var4 = var4.isMobile;
        var4 = !var4;
        if(!var4) { _fun0001_ip = 58; continue _fun0001 }
case 59:
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.isTablet;
        var4 = !var5;
case 58:
        if(!var4) { _fun0001_ip = 60; continue _fun0001 }
case 61:
        var5 = 8;
        var5 = var7[var5];
        var8 = var6.bind(var1)(var5);
        var5 = var8.getChromeVersion;
        var8 = var5.bind(var8)();
        var5 = -1;
        var4 = var5 !== var8;
case 60:
        var _closure1_slot9 = var4;
        var5 = 14;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'utils/StoreUtils.tsx';
        var5 = var6.bind(var7)(var5);
        var3['SUPPORTS_WEBP'] = var4;
        var4 = function getAssetURL(arg1, arg2, arg3, arg4) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var15 = arg1;
                var1 = arg2;
                var7 = arg3;
                var14 = arg4;
                var2 = global;
                var3 = var2.window;
                var3 = var3.GLOBAL_ENV;
                var13 = var3.CDN_HOST;
                var4 = null;
                if(!(var4 == var14)) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                var5 = var1.mimeType;
                if(var5) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                var5 = var1.mime_type;
case 64:
                var6 = 'mp4';
                var3 = 'video/quicktime';
                var14 = var6;
                if(!(var3 !== var5)) { _fun0005_ip = 62; continue _fun0005 }
case 66:
                var3 = 'video/mp4';
                var14 = var6;
                if(!(var3 !== var5)) { _fun0005_ip = 62; continue _fun0005 }
case 67:
                var3 = 'image/gif';
                if(!(var3 !== var5)) { _fun0005_ip = 68; continue _fun0005 }
case 27:
                var14 = 'webp';
                _fun0005_ip = 62; continue _fun0005;
case 68:
                var14 = 'gif';
case 62:
                var3 = 'webp';
                var3 = var3 !== var14;
                if(var3) { _fun0005_ip = 69; continue _fun0005 }
case 70:
                var3 = _closure1_slot9;
case 69:
                if(var3) { _fun0005_ip = 71; continue _fun0005 }
case 72:
                var14 = 'png';
case 71:
                var5 = 'string';
                var3 = typeof var1;
                var12 = var1;
                if(!(var5 !== var3)) { _fun0005_ip = 73; continue _fun0005 }
case 74:
                var12 = var1.id;
case 73:
                if(!(var4 == var13)) { _fun0005_ip = 75; continue _fun0005 }
case 76:
                var1 = var2.window;
                var1 = var1.GLOBAL_ENV;
                var8 = var1.API_ENDPOINT;
                var3 = _closure1_slot7;
                var1 = var3.STORE_ASSET;
                var6 = var1.bind(var3)(var15, var12, var14);
                var1 = var2.HermesInternal;
                var5 = var1.concat;
                var3 = '';
                var1 = 'https:';
                var3 = var5.bind(var3)(var1, var8, var6);
                _fun0005_ip = 77; continue _fun0005;
case 75:
                var1 = var2.HermesInternal;
                var11 = var1.concat;
                var25 = '';
                var24 = 'https:';
                var23 = '//';
                var21 = '/app-assets/';
                var19 = '/store/';
                var17 = '.';
                var22 = var13;
                var20 = var15;
                var18 = var12;
                var16 = var14;
                var3 = var25[var11](var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
case 77:
                var1 = var3;
                if(!(var4 != var7)) { _fun0005_ip = 78; continue _fun0005 }
case 79:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 9;
                var5 = var10[var4];
                var8 = undefined;
                var6 = var9.bind(var8)(var5);
                var5 = var6.getBestMediaProxySize;
                var4 = var10[var4];
                var8 = var9.bind(var8)(var4);
                var4 = var8.getDevicePixelRatio;
                var4 = var4.bind(var8)();
                var4 = var7 * var4;
                var5 = var5.bind(var6)(var4);
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '?size=';
                var2 = var4.bind(var2)(var5);
                var1 = var3 + var2;
case 78:
                return var1;
            }
        };
        var3['getAssetURL'] = var4;
        var4 = function httpGetWithCountryCodeQuery() {
            var1 = undefined;
            var4 = _closure1_slot10;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['httpGetWithCountryCodeQuery'] = var4;
        var4 = function nativePlatformTypeToSKUOperatingSystem(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 12;
                var2 = var2[var6];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var2 = var2.PlatformTypes;
                var2 = var2.WINDOWS;
                if(!(var2 !== var3)) { _fun0006_ip = 80; continue _fun0006 }
case 81:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PlatformTypes;
                var2 = var2.OSX;
                if(!(var2 !== var3)) { _fun0006_ip = 19; continue _fun0006 }
case 82:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.PlatformTypes;
                var2 = var2.LINUX;
                if(!(var2 !== var3)) { _fun0006_ip = 83; continue _fun0006 }
case 16:
                var2 = null;
                return var2;
case 83:
                var2 = _closure1_slot8;
                var2 = var2.LINUX;
                return var2;
case 19:
                var2 = _closure1_slot8;
                var2 = var2.MACOS;
                return var2;
case 80:
                var1 = _closure1_slot8;
                var1 = var1.WINDOWS;
                return var1;
            }
        };
        var3['nativePlatformTypeToSKUOperatingSystem'] = var4;
        var4 = function skuOperatingSystemToText(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot8;
                var2 = var2.WINDOWS;
                if(!(var2 !== var5)) { _fun0007_ip = 84; continue _fun0007 }
case 85:
                var2 = _closure1_slot8;
                var2 = var2.MACOS;
                if(!(var2 !== var5)) { _fun0007_ip = 86; continue _fun0007 }
case 87:
                var2 = _closure1_slot8;
                var2 = var2.LINUX;
                if(!(var2 !== var5)) { _fun0007_ip = 88; continue _fun0007 }
case 31:
                var2 = global;
                var4 = var2.Error;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Unknown operating system value: ';
                var8 = var3.bind(var2)(var5);
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var2 = new var9[var4](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
case 88:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 13;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.tcawo3;
                var2 = var3.bind(var4)(var2);
                return var2;
case 86:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 13;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.E4u4n5;
                var2 = var3.bind(var4)(var2);
                return var2;
case 84:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["0/xHFO"];
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3['skuOperatingSystemToText'] = var4;
        var2 = function getPrimarySKUForApplication(arg1, arg2, arg3) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg2;
                var4 = arg3;
                var2 = var3.getApplication;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var5 = null;
                var3 = var5 == var2;
                var1 = null;
                if(var3) { _fun0008_ip = 11; continue _fun0008 }
case 29:
                var3 = var2.primarySkuId;
                var3 = var5 == var3;
                var1 = null;
                if(var3) { _fun0008_ip = 11; continue _fun0008 }
case 89:
                var3 = var4.get;
                var2 = var2.primarySkuId;
                var1 = var3.bind(var4)(var2);
case 11:
                return var1;
            }
        };
        var3['getPrimarySKUForApplication'] = var2;
        return var1;
    }
})();
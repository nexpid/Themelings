// app/modules/messages/SignedAttachmentLinkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var7 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var8 = dependencyMap;
        var _closure1_slot0 = var7;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var8;
        var5 = function isAttachmentUrl(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot7;
                var4 = var5.has;
                var1 = var1.hostname;
                var1 = var4.bind(var5)(var1);
                var4 = global;
                var5 = var4.Array;
                var4 = var5.from;
                var3 = _closure1_slot5;
                var4 = var4.bind(var5)(var3);
                var3 = var4.some;
                var2 = function(arg1) {
                    var1 = _closure2_slot0;
                    var3 = var1.pathname;
                    var2 = var3.startsWith;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var3 = !var1;
                var1 = !var3;
                if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var _closure1_slot8 = var5;
        var4 = function getSignedAttachmentExpiration(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var3 = var1.searchParams;
                var2 = var3.get;
                var1 = 'ex';
                var2 = var2.bind(var3)(var1);
                var1 = global;
                var4 = var1.parseInt;
                var3 = null;
                var5 = var3 != var2;
                var3 = '';
                if(!var5) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var3 = var2;
case 4:
                var5 = undefined;
                var2 = 16;
                var3 = var4.bind(var5)(var3, var2);
                var1 = var1.isNaN;
                var2 = var1.bind(var5)(var3);
                var1 = undefined;
                if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.Millis;
                var2 = var2.SECOND;
                var1 = var3 * var2;
case 6:
                return var1;
            }
        };
        var _closure1_slot9 = var4;
        var1 = function shouldRefreshAttachmentUrl(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot9;
                var3 = undefined;
                var1 = arg1;
                var3 = var4.bind(var3)(var1);
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var2 = _closure1_slot6;
                var2 = var4 + var2;
                var1 = var3 <= var2;
case 8:
                return var1;
            }
        };
        var _closure1_slot10 = var1;
        var1 = function isAttachmentExpired(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var4 = undefined;
                var5 = var3.bind(var4)(var1);
                var3 = var5.toURLSafe;
                var1 = arg1;
                var1 = var1.url;
                var3 = var3.bind(var5)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                var2 = _closure1_slot10;
                var1 = var2.bind(var4)(var3);
case 10:
                return var1;
            }
        };
        var _closure1_slot11 = var1;
        var1 = function isEmbedMediaExpiredAttachment(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 != var2)) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 4;
                var4 = var5[var4];
                var5 = undefined;
                var6 = var6.bind(var5)(var4);
                var4 = var6.toURLSafe;
                var2 = var2.url;
                var4 = var4.bind(var6)(var2);
                var1 = var1 != var4;
                if(!var1) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                var2 = _closure1_slot8;
                var2 = var2.bind(var5)(var4);
                var6 = !var2;
                var2 = !var6;
                if(var6) { _fun0006_ip = 2; continue _fun0006 }
case 16:
                var3 = _closure1_slot10;
                var2 = var3.bind(var5)(var4);
case 2:
                var1 = var2;
case 14:
                return var1;
case 12:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot12 = var1;
        var1 = function embedHasExpiredAttachmentUrl(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = arg1;
                var5 = _closure1_slot12;
                var1 = var2.image;
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                if(var1) { _fun0007_ip = 17; continue _fun0007 }
case 9:
                var8 = var2.images;
                var5 = null;
                var6 = var5 == var8;
                var5 = undefined;
                if(var6) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                var7 = var8.some;
                var6 = _closure1_slot12;
                var5 = var7.bind(var8)(var6);
case 18:
                var1 = var5;
case 17:
                if(var1) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                var3 = _closure1_slot12;
                var2 = var2.video;
                var1 = var3.bind(var4)(var2);
case 20:
                return var1;
            }
        };
        var _closure1_slot13 = var1;
        var1 = function _refreshAttachmentUrl() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 5;
                        var2 = var8[var6];
                        var3 = undefined;
                        var2 = var7.bind(var3)(var2);
                        var5 = var2.HTTP;
                        var4 = var5.post;
                        var2 = {};
                        var9 = _closure1_slot4;
                        var9 = var9.ATTACHMENTS_REFRESH_URLS;
                        var2['url'] = var9;
                        var9 = {};
                        var10 = new Array(1);
                        var11 = arg1;
                        var10[0] = var11;
                        var9['attachment_urls'] = var10;
                        var2['body'] = var9;
                        var6 = var8[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.rejectWithMigratedError;
                        var6 = var6.bind(var7)();
                        var2['rejectWithError'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=118);
case 24:
                        return var2;
case 25:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                        var4 = var2.ok;
                        var3 = undefined;
                        if(!var4) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                        var4 = var2.body;
                        var5 = var4.refreshed_urls;
                        var4 = 0;
                        var4 = var5[var4];
                        var3 = var4.refreshed;
case 28:
                        return var3;
case 26:
                        return var2;
case 22:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot14 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot14 = var1;
        var1 = function _maybeRefreshAttachmentUrl() {
            var5 = undefined;
            var1 = undefined;
            var4 = _closure1_slot3;
            var3 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0009_ip = 30; continue _fun0009 }
case 23:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var4 = 4;
                        var5 = var5[var4];
                        var4 = undefined;
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.toURLSafe;
                        var6 = var5.bind(var6)(var2);
                        var5 = null;
                        if(!(var5 != var6)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                        var3 = _closure1_slot10;
                        var3 = var3.bind(var4)(var6);
                        if(var3) { _fun0009_ip = 33; continue _fun0009 }
case 21:
                        return var2;
case 33:
                        var3 = function refreshAttachmentUrl() {
                            var1 = undefined;
                            var4 = _closure1_slot14;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        SaveGenerator(address=85);
case 34:
                        return var3;
case 35:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                        var4 = var2;
                        if(!(var5 != var3)) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                        var4 = var3;
case 38:
                        return var4;
case 36:
                        return var3;
case 31:
                        return var2;
case 30:
                        return var1;
                    }
                };
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            _closure1_slot15 = var4;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var _closure1_slot15 = var1;
        var6 = global;
        var12 = var6.Object;
        var10 = var12.defineProperty;
        var9 = {};
        var1 = true;
        var9['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var12)(var3, var1, var9);
        var1 = 0;
        var9 = var8[var1];
        var1 = undefined;
        var9 = var11.bind(var1)(var9);
        var _closure1_slot3 = var9;
        var10 = 1;
        var9 = var8[var10];
        var9 = var7.bind(var1)(var9);
        var9 = var9.Endpoints;
        var _closure1_slot4 = var9;
        var13 = var6.Set;
        var9 = var13.prototype;
        var12 = Object.create(var9, {constructor: {value: var13}});
        var17 = ['/attachments/', '/ephemeral-attachments/'];
        var18 = var12;
        var9 = new var18[var13](var17, var16);
        var9 = var9 instanceof Object ? var9 : var12;
        var _closure1_slot5 = var9;
        var14 = 2;
        var9 = var8[var14];
        var9 = var11.bind(var1)(var9);
        var9 = var9.Millis;
        var9 = var9.HOUR;
        var9 = var10 * var9;
        var _closure1_slot6 = var9;
        var10 = var6.Set;
        var9 = var6.window;
        var9 = var9.GLOBAL_ENV;
        var9 = var9.CDN_HOST;
        var12 = new Array(2);
        var12[0] = var9;
        var9 = var6.window;
        var9 = var9.GLOBAL_ENV;
        var13 = var9.MEDIA_PROXY_ENDPOINT;
        var9 = null;
        var11 = var9 == var13;
        var9 = undefined;
        if(var11) { _fun0001_ip = 40; continue _fun0001 }
case 41:
        var11 = var13.substring;
        var9 = var11.bind(var13)(var14);
case 40:
        var12[1] = var9;
        var11 = var12.map;
        var9 = function getHostWithoutPort(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                var3 = var4.split;
                var2 = ':';
                var3 = var3.bind(var4)(var2);
                var2 = 0;
                var1 = var3[var2];
case 42:
                return var1;
            }
        };
        var11 = var11.bind(var12)(var9);
        var9 = var11.filter;
        var6 = var6.Boolean;
        var17 = var9.bind(var11)(var6);
        var9 = var10.prototype;
        var9 = Object.create(var9, {constructor: {value: var10}});
        var18 = var9;
        var6 = new var18[var10](var17, var16);
        var6 = var6 instanceof Object ? var6 : var9;
        var _closure1_slot7 = var6;
        var6 = 6;
        var6 = var8[var6];
        var8 = var7.bind(var1)(var6);
        var7 = var8.fileFinishedImporting;
        var6 = 'modules/messages/SignedAttachmentLinkUtils.tsx';
        var6 = var7.bind(var8)(var6);
        var3['isAttachmentUrl'] = var5;
        var5 = function isExternalProxiedAttachmentUrl(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isImageProxyURL;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['isExternalProxiedAttachmentUrl'] = var5;
        var5 = function removeSignedUrlParameters(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.toURLSafe;
                var2 = var2.bind(var3)(var1);
                var3 = null;
                if(!(var3 != var2)) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                var5 = ['ex', 'is', 'hm'];
                var3 = var5.length;
                var4 = 0;
                var3 = var4 < var3;
                if(!var3) { _fun0011_ip = 38; continue _fun0011 }
case 46:
                var7 = var5[var4];
                var6 = var2.searchParams;
                var3 = var6.delete;
                var3 = var3.bind(var6)(var7);
                var4 = var4 + 1;
                var3 = var5.length;
                if(var4 < var3) { _fun0011_ip = 46; continue _fun0011 }
case 38:
                return var2;
case 44:
                return var1;
            }
        };
        var3['removeSignedUrlParameters'] = var5;
        var3['getSignedAttachmentExpiration'] = var4;
        var4 = function messageHasExpiredAttachmentUrl(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var5 = var3.attachments;
                var4 = var5.some;
                var1 = _closure1_slot11;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0012_ip = 47; continue _fun0012 }
case 48:
                var4 = var3.embeds;
                var3 = var4.some;
                var2 = _closure1_slot13;
                var1 = var3.bind(var4)(var2);
case 47:
                return var1;
            }
        };
        var3['messageHasExpiredAttachmentUrl'] = var4;
        var2 = function maybeRefreshAttachmentUrl() {
            var1 = undefined;
            var4 = _closure1_slot15;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var3['maybeRefreshAttachmentUrl'] = var2;
        return var1;
    }
})();
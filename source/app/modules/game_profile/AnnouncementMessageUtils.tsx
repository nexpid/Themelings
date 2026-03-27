// app/modules/game_profile/AnnouncementMessageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.isMessageComponentsV2;
    var _closure1_slot2 = var4;
    var4 = /^#{1,3}\s+(.+)$/;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/AnnouncementMessageUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function toAnnouncementMessages(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 4;
                var2 = var5[var2];
                var5 = undefined;
                var6 = var4.bind(var5)(var2);
                var4 = var6.createMessageRecord;
                var2 = arg1;
                var8 = var4.bind(var6)(var2);
                var2 = function extractContent(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure1_slot2;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var1 = var3.content;
                        _fun0002_ip = 4; continue _fun0002;
case 2:
                        var5 = var3.components;
                        var4 = var5.filter;
                        var3 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.type;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 1;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.ComponentType;
                            var1 = var1.TEXT_DISPLAY;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.content;
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.join;
                        var2 = '\n';
                        var1 = var3.bind(var4)(var2);
case 4:
                        return var1;
                    }
                };
                var2 = var2.bind(var5)(var8);
                var3 = function extractMedia(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var8 = arg1;
                        var4 = _closure1_slot2;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var8);
                        if(!var4) { _fun0003_ip = 5; continue _fun0003 }
case 3:
                        var6 = var8.components;
                        var5 = var6.find;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.type;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 1;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.ComponentType;
                            var1 = var1.MEDIA_GALLERY;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var5 = var5.bind(var6)(var4);
                        var6 = null;
                        var7 = var6 == var5;
                        var4 = undefined;
                        if(var7) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                        var7 = var5.items;
                        var5 = 0;
                        var5 = var7[var5];
                        var7 = var6 == var5;
                        var4 = undefined;
                        if(var7) { _fun0003_ip = 4; continue _fun0003 }
case 7:
                        var4 = var5.media;
case 4:
                        if(!(var6 == var4)) { _fun0003_ip = 8; continue _fun0003 }
case 5:
                        var9 = var8.attachments;
                        var7 = var9.find;
                        var5 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isImageContentType;
                            var1 = arg1;
                            var1 = var1.content_type;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var5 = var7.bind(var9)(var5);
                        var11 = null;
                        if(!(var11 == var5)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var10 = var8.attachments;
                        var9 = var10.find;
                        var7 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isVideoContentType;
                            var1 = arg1;
                            var1 = var1.content_type;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var7 = var9.bind(var10)(var7);
                        if(!(var11 == var7)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var9 = var8.embeds;
                        var8 = var9.find;
                        var3 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.video;
                                var3 = null;
                                var1 = var3 != var1;
                                if(!var1) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                                var2 = var2.thumbnail;
                                var1 = var3 != var2;
case 13:
                                return var1;
                            }
                        };
                        var10 = var8.bind(var9)(var3);
                        var8 = var11 == var10;
                        var3 = undefined;
                        if(var8) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var3 = var10.thumbnail;
case 15:
                        var8 = var11 != var3;
                        var3 = undefined;
                        if(!var8) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var8 = {};
                        var9 = var10.thumbnail;
                        var9 = var9.proxyURL;
                        if(!(var11 == var9)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var10 = var10.thumbnail;
                        var9 = var10.url;
case 19:
                        var8['url'] = var9;
                        var9 = 'image';
                        var8['type'] = var9;
                        var3 = var8;
case 17:
                        return var3;
case 11:
                        var3 = {};
                        var7 = var7.proxy_url;
                        var3['url'] = var7;
                        var7 = 'video';
                        var3['type'] = var7;
                        return var3;
case 9:
                        var3 = {};
                        var5 = var5.proxy_url;
                        var3['url'] = var5;
                        var5 = 'image';
                        var3['type'] = var5;
                        return var3;
case 8:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 2;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getUnfurledMediaItemType;
                        var5 = var2.bind(var3)(var4);
                        var2 = 'INVALID';
                        if(!(var2 !== var5)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                        var2 = {};
                        var3 = var4.proxyUrl;
                        if(!(var6 == var3)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                        var3 = var4.url;
case 23:
                        var2['url'] = var3;
                        var3 = 'image';
                        var4 = 'VIDEO';
                        if(!(var4 === var5)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                        var3 = 'video';
case 25:
                        var2['type'] = var3;
                        return var2;
case 21:
                        return var1;
                    }
                };
                var6 = var3.bind(var5)(var8);
                var4 = var2.indexOf;
                var3 = '\n';
                var11 = var4.bind(var2)(var3);
                var3 = -1;
                var10 = var3 === var11;
                var4 = var2;
                if(var10) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                var7 = var2.slice;
                var3 = 0;
                var4 = var7.bind(var2)(var3, var11);
case 27:
                var3 = var4.match;
                var1 = _closure1_slot3;
                var4 = var3.bind(var4)(var1);
                var7 = null;
                if(!(var7 == var4)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                var1 = {};
                var1['body'] = var2;
                _fun0001_ip = 31; continue _fun0001;
case 29:
                var3 = {};
                var9 = 1;
                var12 = var4[var9];
                var4 = var12.trim;
                var4 = var4.bind(var12)();
                var3['title'] = var4;
                var4 = '';
                if(var10) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                var10 = var2.slice;
                var9 = var11 + var9;
                var10 = var10.bind(var2)(var9);
                var9 = var10.trimStart;
                var4 = var9.bind(var10)();
case 32:
                var3['body'] = var4;
                var1 = var3;
case 31:
                var4 = var1.title;
                var3 = var1.body;
                var1 = {};
                var8 = var8.id;
                var1['id'] = var8;
                var9 = var7 == var6;
                var8 = undefined;
                if(var9) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                var8 = var6.url;
case 34:
                var1['mediaUrl'] = var8;
                var7 = var7 == var6;
                var5 = undefined;
                if(var7) { _fun0001_ip = 36; continue _fun0001 }
case 37:
                var5 = var6.type;
case 36:
                var1['mediaType'] = var5;
                var1['title'] = var4;
                var1['body'] = var3;
                var1['content'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['toAnnouncementMessages'] = var2;
    return var1;
})();
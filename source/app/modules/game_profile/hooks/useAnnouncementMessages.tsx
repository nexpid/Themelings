// app/modules/game_profile/hooks/useAnnouncementMessages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function toAnnouncementMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var2 = function extractContent(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var4 = _closure1_slot4;
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
                        var3 = _closure1_slot2;
                        var1 = 3;
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
            var5 = undefined;
            var2 = var2.bind(var5)(var8);
            var1 = function extractMedia(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var8 = arg1;
                    var4 = _closure1_slot4;
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
                        var3 = _closure1_slot2;
                        var1 = 3;
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
                        var2 = _closure1_slot2;
                        var1 = 5;
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
                        var2 = _closure1_slot2;
                        var1 = 5;
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
                    var5 = _closure1_slot2;
                    var2 = 4;
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
            var6 = var1.bind(var5)(var8);
            var3 = var2.indexOf;
            var1 = '\n';
            var11 = var3.bind(var2)(var1);
            var1 = -1;
            var10 = var1 === var11;
            var4 = var2;
            if(var10) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var3 = var2.slice;
            var1 = 0;
            var4 = var3.bind(var2)(var1, var11);
case 27:
            var3 = var4.match;
            var1 = _closure1_slot6;
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
    var _closure1_slot7 = var1;
    var1 = function areMessagesEqual(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = var4.length;
            var1 = var3.length;
            if(!(var2 === var1)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var1 = var4.length;
            var2 = 0;
            var1 = var2 < var1;
            if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var1 = var4[var2];
            var5 = var1.id;
            var1 = var3[var2];
            var1 = var1.id;
            if(!(var5 === var1)) { _fun0005_ip = 42; continue _fun0005 }
case 6:
            var2 = var2 + 1;
            var1 = var4.length;
            if(var2 < var1) { _fun0005_ip = 41; continue _fun0005 }
case 40:
            var1 = true;
            return var1;
case 42:
            var1 = false;
            return var1;
case 38:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isMessageComponentsV2;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = /^#{1,3}\s+(.+)$/;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/hooks/useAnnouncementMessages.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAnnouncementMessages(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot3;
        var4 = var6.useRef;
        var2 = new Array(0);
        var2 = var4.bind(var6)(var2);
        var _closure2_slot1 = var2;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 6;
        var2 = var9[var4];
        var5 = undefined;
        var14 = var8.bind(var5)(var2);
        var13 = var14.useStateFromStores;
        var2 = _closure1_slot5;
        var12 = new Array(1);
        var12[0] = var2;
        var11 = new Array(1);
        var11[0] = var7;
        var15 = _closure1_slot8;
        var17 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                var3 = var2 != var3;
                var4 = undefined;
                if(!var3) { _fun0006_ip = 43; continue _fun0006 }
case 14:
                var6 = _closure1_slot5;
                var5 = var6.getMessages;
                var3 = _closure2_slot0;
                var4 = var5.bind(var6)(var3);
case 43:
                var2 = var2 != var4;
                if(!var2) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var5 = var4.length;
                var3 = 0;
                var2 = var5 > var3;
case 44:
                if(!var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var3 = _closure2_slot1;
                var2 = var4.toArray;
                var4 = var2.bind(var4)();
                var2 = var4.reverse;
                var5 = var2.bind(var4)();
                var4 = var5.map;
                var2 = _closure1_slot7;
                var2 = var4.bind(var5)(var2);
                var3['current'] = var2;
case 46:
                var1 = _closure2_slot1;
                var1 = var1.current;
                return var1;
            }
        };
        var19 = var14;
        var18 = var12;
        var16 = var11;
        var3 = var19[var13](var18, var17, var16, var15, var14);
        var _closure2_slot2 = var3;
        var4 = var9[var4];
        var9 = var8.bind(var5)(var4);
        var8 = var9.useStateFromStores;
        var5 = new Array(1);
        var5[0] = var2;
        var4 = new Array(2);
        var4[0] = var7;
        var2 = var3.length;
        var4[1] = var2;
        var2 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var3 = _closure2_slot2;
                var4 = var3.length;
                var3 = 0;
                if(!(!(var4 > var3))) { _fun0007_ip = 48; continue _fun0007 }
case 13:
                var4 = _closure1_slot5;
                var3 = var4.getMessages;
                var1 = _closure2_slot0;
                var3 = var3.bind(var4)(var1);
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                var1 = var3.error;
case 50:
                var4 = true;
                var1 = var4 !== var1;
                if(!var1) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var2 = var2 == var3;
                if(var2) { _fun0007_ip = 5; continue _fun0007 }
case 54:
                var3 = var3.hasFetched;
                var2 = var4 !== var3;
case 5:
                var1 = var2;
case 52:
                return var1;
case 48:
                var1 = false;
                return var1;
            }
        };
        var2 = var8.bind(var9)(var5, var2, var4);
        var5 = var6.useRef;
        var4 = null;
        var4 = var5.bind(var6)(var4);
        var _closure2_slot3 = var4;
        var5 = var6.useEffect;
        var4 = new Array(1);
        var4[0] = var7;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                var3 = _closure2_slot3;
                var4 = var3.current;
                var3 = _closure2_slot0;
                var1 = var4 !== var3;
case 55:
                if(!var1) { _fun0008_ip = 30; continue _fun0008 }
case 57:
                var1 = _closure2_slot3;
                var4 = _closure2_slot0;
                var1['current'] = var4;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchMessages;
                var1 = {};
                var1['channelId'] = var4;
                var4 = 50;
                var1['limit'] = var4;
                var1 = var2.bind(var3)(var1);
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = {};
        var1['messages'] = var3;
        var1['loading'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
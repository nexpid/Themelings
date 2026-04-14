// app/modules/game_profile/AnnouncementMessageUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = /^#{1,3}\s+(.+)$/;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/AnnouncementMessageUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function toAnnouncementMessages(arg1) {
        var3 = arg1;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 4;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.createMessageRecord;
                var8 = var4.bind(var5)(var3);
                var4 = function extractContent(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var4 = _closure1_slot3;
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
                var4 = var4.bind(var1)(var8);
                var5 = function extractMedia(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure1_slot3;
                        var7 = undefined;
                        var3 = var3.bind(var7)(var2);
                        if(!var3) { _fun0003_ip = 5; continue _fun0003 }
case 3:
                        var5 = var2.components;
                        var4 = var5.find;
                        var3 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.type;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 1;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3);
                            var1 = var1.ComponentType;
                            var1 = var1.MEDIA_GALLERY;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var5 = var4.bind(var5)(var3);
                        var4 = null;
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                        var6 = var5.items;
                        var5 = 0;
                        var5 = var6[var5];
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0003_ip = 4; continue _fun0003 }
case 7:
                        var3 = var5.media;
case 4:
                        if(!(var4 != var3)) { _fun0003_ip = 5; continue _fun0003 }
case 8:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 2;
                        var4 = var6[var4];
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.getUnfurledMediaItemType;
                        var4 = var4.bind(var5)(var3);
                        var5 = 'INVALID';
                        if(!(var5 === var4)) { _fun0003_ip = 9; continue _fun0003 }
case 5:
                        var8 = var2.attachments;
                        var6 = var8.find;
                        var5 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
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
                        var6 = var6.bind(var8)(var5);
                        var10 = null;
                        if(!(var10 == var6)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var9 = var2.attachments;
                        var8 = var9.find;
                        var5 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
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
                        var9 = var8.bind(var9)(var5);
                        if(!(var10 == var9)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var11 = var2.embeds;
                        var8 = var11.find;
                        var5 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.video;
                                var3 = null;
                                var1 = var3 != var1;
                                if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                                var2 = var2.thumbnail;
                                var1 = var3 != var2;
case 14:
                                return var1;
                            }
                        };
                        var8 = var8.bind(var11)(var5);
                        var _closure4_slot0 = var8;
                        var11 = var10 == var8;
                        var5 = undefined;
                        if(var11) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var5 = var8.thumbnail;
case 16:
                        var10 = var10 != var5;
                        var5 = undefined;
                        if(!var10) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 2;
                        var10 = var12[var10];
                        var13 = var11.bind(var7)(var10);
                        var12 = var13.embedMediaToMediaItem;
                        var11 = var8.thumbnail;
                        var10 = {};
                        var10['message'] = var2;
                        var8 = {};
                        var15 = 'embed';
                        var8['type'] = var15;
                        var16 = var2.embeds;
                        var15 = var16.findIndex;
                        var14 = function(arg1) {
                            var2 = _closure4_slot0;
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var14 = var15.bind(var16)(var14);
                        var8['embedIndex'] = var14;
                        var10['identifier'] = var8;
                        var8 = 'IMAGE';
                        var5 = var12.bind(var13)(var11, var10, var8);
case 18:
                        return var5;
case 12:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 2;
                        var5 = var10[var5];
                        var8 = var8.bind(var7)(var5);
                        var5 = var8.messageAttachmentToMediaItem;
                        var5 = var5.bind(var8)(var9, var2);
                        return var5;
case 10:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 2;
                        var1 = var8[var1];
                        var5 = var5.bind(var7)(var1);
                        var1 = var5.messageAttachmentToMediaItem;
                        var1 = var1.bind(var5)(var6, var2);
                        return var1;
case 9:
                        var1 = {};
                        var19 = var1;
                        var18 = var3;
                        var3 = copyDataProperties(var19, var18);
                        var3 = 'type';
                        var1[2] = var4;
                        var3 = {};
                        var3['message'] = var2;
                        var2 = 'sourceMetadata';
                        var1[1] = var3;
                        return var1;
                    }
                };
                var7 = var5.bind(var1)(var8);
                var6 = var4.indexOf;
                var5 = '\n';
                var13 = var6.bind(var4)(var5);
                var5 = -1;
                var12 = var5 === var13;
                var6 = var4;
                if(var12) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                var10 = var4.slice;
                var5 = 0;
                var6 = var10.bind(var4)(var5, var13);
case 20:
                var5 = var6.match;
                var2 = _closure1_slot4;
                var10 = var5.bind(var6)(var2);
                var2 = null;
                if(!(var2 == var10)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                var5 = {};
                var5['body'] = var4;
                _fun0001_ip = 24; continue _fun0001;
case 22:
                var6 = {};
                var11 = 1;
                var14 = var10[var11];
                var10 = var14.trim;
                var10 = var10.bind(var14)();
                var6['title'] = var10;
                var10 = '';
                if(var12) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                var12 = var4.slice;
                var11 = var13 + var11;
                var12 = var12.bind(var4)(var11);
                var11 = var12.trimStart;
                var10 = var11.bind(var12)();
case 25:
                var6['body'] = var10;
                var5 = var6;
case 24:
                var6 = var5.title;
                var5 = var5.body;
                var12 = var3.reactions;
                var10 = var2 == var12;
                var1 = undefined;
                if(var10) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                var11 = var12.reduce;
                var10 = function(arg1, arg2) {
                    var1 = arg2;
                    var2 = var1.count;
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                };
                var9 = 0;
                var1 = var11.bind(var12)(var10, var9);
case 27:
                var9 = var2 != var1;
                var2 = 0;
                if(!var9) { _fun0001_ip = 29; continue _fun0001 }
case 30:
                var2 = var1;
case 29:
                var1 = {};
                var8 = var8.id;
                var1['id'] = var8;
                var1['media'] = var7;
                var1['title'] = var6;
                var1['body'] = var5;
                var1['content'] = var4;
                var3 = var3.timestamp;
                var1['timestamp'] = var3;
                var1['reactionCount'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['toAnnouncementMessages'] = var4;
    var2 = function getPosterUrl(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.toURLSafe;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var6 = var3.searchParams;
            var5 = var6.append;
            var4 = 'format';
            var2 = 'webp';
            var2 = var5.bind(var6)(var4, var2);
            var2 = var3.toString;
            var1 = var2.bind(var3)();
case 31:
            return var1;
        }
    };
    var3['getPosterUrl'] = var2;
    return var1;
})();
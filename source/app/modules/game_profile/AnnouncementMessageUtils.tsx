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
    var4 = /^https?:\/\/\S+$/;
    var _closure1_slot5 = var4;
    var4 = 9;
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
                var5 = arg1;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 4;
                var2 = var7[var2];
                var17 = undefined;
                var3 = var3.bind(var17)(var2);
                var6 = _closure1_slot0;
                var2 = 5;
                var2 = var7[var2];
                var6 = var6.bind(var17)(var2);
                var2 = var6.createMessageRecord;
                var2 = var2.bind(var6)(var5);
                var2 = var3.bind(var17)(var2);
                var12 = var2.content;
                var3 = function extractContent(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var5 = _closure1_slot3;
                        var4 = undefined;
                        var4 = var5.bind(var4)(var2);
                        if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var4 = var2.content;
                        var5 = var4.length;
                        var7 = 0;
                        if(!(var7 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var6 = _closure1_slot5;
                        var5 = var6.test;
                        var3 = var4.trim;
                        var3 = var3.bind(var4)();
                        var3 = var5.bind(var6)(var3);
                        if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 4:
                        var3 = var2.embeds;
                        var6 = var3[var7];
                        var5 = null;
                        var8 = var5 == var6;
                        var3 = null;
                        if(var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var9 = new Array(0);
                        var8 = var6.rawTitle;
                        if(!(var5 != var8)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                        var10 = var9.push;
                        var12 = var6.rawTitle;
                        var8 = global;
                        var8 = var8.HermesInternal;
                        var11 = var8.concat;
                        var8 = '# ';
                        var8 = var11.bind(var8)(var12);
                        var8 = var10.bind(var9)(var8);
case 9:
                        var8 = var6.rawDescription;
                        if(!(var5 != var8)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var8 = var9.push;
                        var6 = var6.rawDescription;
                        var6 = var8.bind(var9)(var6);
case 11:
                        var6 = var9.length;
                        var7 = var6 > var7;
                        var6 = null;
                        if(!var7) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var8 = var9.join;
                        var7 = '\n';
                        var6 = var8.bind(var9)(var7);
case 13:
                        var3 = var6;
case 7:
                        if(!(var5 == var3)) { _fun0002_ip = 15; continue _fun0002 }
case 6:
                        var3 = var4;
case 15:
                        return var3;
case 2:
                        var4 = var2.components;
                        var3 = var4.filter;
                        var2 = function(arg1) {
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
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.map;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.content;
                            return var1;
                        };
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.join;
                        var1 = '\n';
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var6 = var3.bind(var17)(var2);
                var3 = function extractMedia(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure1_slot3;
                        var7 = undefined;
                        var3 = var3.bind(var7)(var2);
                        if(!var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
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
                        if(var6) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                        var6 = var5.items;
                        var5 = 0;
                        var5 = var6[var5];
                        var6 = var4 == var5;
                        var3 = undefined;
                        if(var6) { _fun0003_ip = 18; continue _fun0003 }
case 20:
                        var3 = var5.media;
case 18:
                        if(!(var4 != var3)) { _fun0003_ip = 16; continue _fun0003 }
case 21:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 2;
                        var4 = var6[var4];
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.getUnfurledMediaItemType;
                        var4 = var4.bind(var5)(var3);
                        var5 = 'INVALID';
                        if(!(var5 === var4)) { _fun0003_ip = 22; continue _fun0003 }
case 16:
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
                        var12 = null;
                        if(!(var12 == var6)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
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
                        if(!(var12 == var9)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                        var10 = var2.embeds;
                        var8 = var10.find;
                        var5 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var2 = arg1;
                                var1 = var2.video;
                                var3 = null;
                                var1 = var3 != var1;
                                if(!var1) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                                var2 = var2.thumbnail;
                                var1 = var3 != var2;
case 27:
                                return var1;
                            }
                        };
                        var5 = var8.bind(var10)(var5);
                        var _closure4_slot0 = var5;
                        var10 = var12 == var5;
                        var8 = undefined;
                        if(var10) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                        var8 = var5.thumbnail;
case 29:
                        if(!(var12 == var8)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
                        var11 = var2.embeds;
                        var10 = var11.find;
                        var8 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.image;
                            var1 = null;
                            var1 = var1 != var2;
                            return var1;
                        };
                        var8 = var10.bind(var11)(var8);
                        var _closure4_slot1 = var8;
                        var11 = var12 == var8;
                        var10 = undefined;
                        if(var11) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                        var10 = var8.image;
case 33:
                        if(!(var12 == var10)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
                        var14 = var2.embeds;
                        var11 = var14.find;
                        var10 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.thumbnail;
                            var1 = null;
                            var1 = var1 != var2;
                            return var1;
                        };
                        var11 = var11.bind(var14)(var10);
                        var _closure4_slot2 = var11;
                        var14 = var12 == var11;
                        var10 = undefined;
                        if(var14) { _fun0003_ip = 37; continue _fun0003 }
case 38:
                        var10 = var11.thumbnail;
case 37:
                        var12 = var12 != var10;
                        var10 = undefined;
                        if(!var12) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var12 = 2;
                        var12 = var15[var12];
                        var16 = var14.bind(var7)(var12);
                        var15 = var16.embedMediaToMediaItem;
                        var14 = var11.thumbnail;
                        var12 = {};
                        var12['message'] = var2;
                        var11 = {};
                        var17 = 'embed';
                        var11['type'] = var17;
                        var19 = var2.embeds;
                        var18 = var19.findIndex;
                        var17 = function(arg1) {
                            var2 = _closure4_slot2;
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var17 = var18.bind(var19)(var17);
                        var11['embedIndex'] = var17;
                        var12['identifier'] = var11;
                        var11 = 'IMAGE';
                        var10 = var15.bind(var16)(var14, var12, var11);
case 39:
                        return var10;
case 35:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 2;
                        var10 = var12[var10];
                        var14 = var11.bind(var7)(var10);
                        var12 = var14.embedMediaToMediaItem;
                        var11 = var8.image;
                        var10 = {};
                        var10['message'] = var2;
                        var8 = {};
                        var15 = 'embed';
                        var8['type'] = var15;
                        var17 = var2.embeds;
                        var16 = var17.findIndex;
                        var15 = function(arg1) {
                            var2 = _closure4_slot1;
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var15 = var16.bind(var17)(var15);
                        var8['embedIndex'] = var15;
                        var10['identifier'] = var8;
                        var8 = 'IMAGE';
                        var8 = var12.bind(var14)(var11, var10, var8);
                        return var8;
case 31:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 2;
                        var8 = var11[var8];
                        var12 = var10.bind(var7)(var8);
                        var11 = var12.embedMediaToMediaItem;
                        var10 = var5.thumbnail;
                        var8 = {};
                        var8['message'] = var2;
                        var5 = {};
                        var14 = 'embed';
                        var5['type'] = var14;
                        var15 = var2.embeds;
                        var14 = var15.findIndex;
                        var13 = function(arg1) {
                            var2 = _closure4_slot0;
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        };
                        var13 = var14.bind(var15)(var13);
                        var5['embedIndex'] = var13;
                        var8['identifier'] = var5;
                        var5 = 'IMAGE';
                        var5 = var11.bind(var12)(var10, var8, var5);
                        return var5;
case 25:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 2;
                        var5 = var10[var5];
                        var8 = var8.bind(var7)(var5);
                        var5 = var8.messageAttachmentToMediaItem;
                        var5 = var5.bind(var8)(var9, var2);
                        return var5;
case 23:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 2;
                        var1 = var8[var1];
                        var5 = var5.bind(var7)(var1);
                        var1 = var5.messageAttachmentToMediaItem;
                        var1 = var1.bind(var5)(var6, var2);
                        return var1;
case 22:
                        var1 = {};
                        var22 = var1;
                        var21 = var3;
                        var3 = copyDataProperties(var22, var21);
                        var3 = 'type';
                        var1[2] = var4;
                        var3 = {};
                        var3['message'] = var2;
                        var2 = 'sourceMetadata';
                        var1[1] = var3;
                        return var1;
                    }
                };
                var9 = var3.bind(var17)(var2);
                var7 = var6.indexOf;
                var3 = '\n';
                var14 = var7.bind(var6)(var3);
                var3 = -1;
                var13 = var3 === var14;
                var8 = var6;
                if(var13) { _fun0001_ip = 41; continue _fun0001 }
case 42:
                var7 = var6.slice;
                var3 = 0;
                var8 = var7.bind(var6)(var3, var14);
case 41:
                var7 = var8.match;
                var3 = _closure1_slot4;
                var8 = var7.bind(var8)(var3);
                var10 = null;
                if(!(var10 == var8)) { _fun0001_ip = 43; continue _fun0001 }
case 12:
                var3 = {};
                var3['body'] = var6;
                _fun0001_ip = 44; continue _fun0001;
case 43:
                var7 = {};
                var11 = 1;
                var15 = var8[var11];
                var8 = var15.trim;
                var8 = var8.bind(var15)();
                var7['title'] = var8;
                var8 = '';
                if(var13) { _fun0001_ip = 45; continue _fun0001 }
case 46:
                var13 = var6.slice;
                var11 = var14 + var11;
                var13 = var13.bind(var6)(var11);
                var11 = var13.trimStart;
                var8 = var11.bind(var13)();
case 45:
                var7['body'] = var8;
                var3 = var7;
case 44:
                var8 = var3.title;
                var7 = var3.body;
                var14 = var5.reactions;
                var11 = var10 == var14;
                var3 = undefined;
                if(var11) { _fun0001_ip = 47; continue _fun0001 }
case 48:
                var13 = var14.reduce;
                var11 = function(arg1, arg2) {
                    var1 = arg2;
                    var2 = var1.count;
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                };
                var4 = 0;
                var3 = var13.bind(var14)(var11, var4);
case 47:
                var13 = var10 != var3;
                var11 = 0;
                var4 = 0;
                if(!var13) { _fun0001_ip = 49; continue _fun0001 }
case 33:
                var4 = var3;
case 49:
                var3 = undefined;
                if(!(var6 !== var12)) { _fun0001_ip = 50; continue _fun0001 }
case 51:
                var1 = _closure1_slot3;
                var1 = var1.bind(var17)(var2);
                var3 = undefined;
                if(var1) { _fun0001_ip = 50; continue _fun0001 }
case 52:
                var1 = var2.embeds;
                var11 = var1[var11];
                var12 = var10 != var11;
                var1 = undefined;
                if(!var12) { _fun0001_ip = 53; continue _fun0001 }
case 54:
                var12 = var11.author;
                var13 = var10 == var12;
                var16 = undefined;
                if(var13) { _fun0001_ip = 55; continue _fun0001 }
case 56:
                var16 = var12.name;
case 55:
                var12 = var11.author;
                var13 = var10 == var12;
                var15 = undefined;
                if(var13) { _fun0001_ip = 57; continue _fun0001 }
case 58:
                var15 = var12.iconProxyURL;
case 57:
                if(!(var10 == var15)) { _fun0001_ip = 59; continue _fun0001 }
case 60:
                var13 = var11.author;
                var14 = var10 == var13;
                var12 = undefined;
                if(var14) { _fun0001_ip = 61; continue _fun0001 }
case 62:
                var12 = var13.iconURL;
case 61:
                var15 = var12;
case 59:
                var12 = var11.footer;
                var13 = var10 == var12;
                var14 = undefined;
                if(var13) { _fun0001_ip = 63; continue _fun0001 }
case 64:
                var14 = var12.text;
case 63:
                if(!(var10 == var14)) { _fun0001_ip = 65; continue _fun0001 }
case 66:
                var13 = var11.provider;
                var18 = var10 == var13;
                var12 = undefined;
                if(var18) { _fun0001_ip = 67; continue _fun0001 }
case 68:
                var12 = var13.name;
case 67:
                var14 = var12;
case 65:
                var12 = var11.footer;
                var18 = var10 == var12;
                var13 = undefined;
                if(var18) { _fun0001_ip = 69; continue _fun0001 }
case 70:
                var13 = var12.iconProxyURL;
case 69:
                if(!(var10 == var13)) { _fun0001_ip = 71; continue _fun0001 }
case 72:
                var18 = var11.footer;
                var19 = var10 == var18;
                var12 = undefined;
                if(var19) { _fun0001_ip = 73; continue _fun0001 }
case 74:
                var12 = var18.iconURL;
case 73:
                var13 = var12;
case 71:
                var12 = var11.url;
                var18 = var11.color;
                var19 = var10 != var18;
                var11 = undefined;
                if(!var19) { _fun0001_ip = 75; continue _fun0001 }
case 76:
                var11 = var18;
case 75:
                if(!(var10 == var16)) { _fun0001_ip = 77; continue _fun0001 }
case 78:
                if(!(var10 == var14)) { _fun0001_ip = 77; continue _fun0001 }
case 79:
                var10 = var10 != var12;
                var1 = undefined;
                if(!var10) { _fun0001_ip = 53; continue _fun0001 }
case 77:
                var10 = {};
                var10['authorName'] = var16;
                var10['authorIconUrl'] = var15;
                var10['providerName'] = var14;
                var10['providerIconUrl'] = var13;
                var10['url'] = var12;
                var10['color'] = var11;
                var1 = var10;
case 53:
                var3 = var1;
case 50:
                var1 = {};
                var10 = var2.id;
                var1['id'] = var10;
                var1['media'] = var9;
                var1['title'] = var8;
                var1['body'] = var7;
                var1['content'] = var6;
                var5 = var5.timestamp;
                var1['timestamp'] = var5;
                var1['reactionCount'] = var4;
                var1['embedSource'] = var3;
                var2 = var2.poll;
                var1['poll'] = var2;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['toAnnouncementMessages'] = var4;
    var4 = function getPollExpiryLabel(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var6 = undefined;
            var4 = var3.bind(var6)(var1);
            var3 = var4.formatExpirationLabel;
            var1 = arg1;
            var1 = var1.expiry;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0005_ip = 10; continue _fun0005 }
case 80:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.e+J3JZ;
            var1 = var3.bind(var4)(var2);
case 10:
            return var1;
        }
    };
    var3['getPollExpiryLabel'] = var4;
    var2 = function getPosterUrl(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.toURLSafe;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 == var3;
            if(var2) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var6 = var3.searchParams;
            var5 = var6.append;
            var4 = 'format';
            var2 = 'webp';
            var2 = var5.bind(var6)(var4, var2);
            var2 = var3.toString;
            var1 = var2.bind(var3)();
case 81:
            return var1;
        }
    };
    var3['getPosterUrl'] = var2;
    return var1;
})();
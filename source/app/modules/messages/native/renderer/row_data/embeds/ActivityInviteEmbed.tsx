// app/modules/messages/native/renderer/row_data/embeds/ActivityInviteEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function isCurrentPlatform(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var3 = var7.platform;
            var5 = var7.supported_platforms;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var6 = undefined;
            var4 = var4.bind(var6)(var2);
            var2 = var4.isContextlessEmbeddedActivity;
            var2 = var2.bind(var4)(var7);
            if(var2) { _fun0004_ip = 142; continue _fun0004 }
 54:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            var1 = _closure1_slot11;
            if(var2) { _fun0004_ip = 98; continue _fun0004 }
 90:
            var4 = var1.IOS;
            _fun0004_ip = 104; continue _fun0004;
 98:
            var4 = var1.ANDROID;
 104:
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0004_ip = 117; continue _fun0004 }
 113:
            var1 = var3 === var4;
 117:
            if(var1) { _fun0004_ip = 140; continue _fun0004 }
 120:
            var2 = var2 != var5;
            if(!var2) { _fun0004_ip = 137; continue _fun0004 }
 127:
            var3 = var5.includes;
            var2 = var3.bind(var5)(var4);
 137:
            var1 = var2;
 140:
            return var1;
 142:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getActivityInvitePartyAvatars(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var12 = arg2;
            var5 = arg3;
            var3 = _closure1_slot7;
            var2 = var3.getParty;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var4 = null;
            if(!(var4 == var2)) { _fun0005_ip = 37; continue _fun0005 }
 33:
            var1 = undefined;
            return var1;
 37:
            var6 = new Array(0);
            var1 = _closure1_slot16;
            var10 = undefined;
            var3 = var1.bind(var10)(var2);
            var2 = var3.bind(var10)();
            var1 = var2.done;
            if(var1) { _fun0005_ip = 113; continue _fun0005 }
 64:
            var8 = var2.value;
            var7 = _closure1_slot9;
            var1 = var7.getUser;
            var7 = var1.bind(var7)(var8);
            if(!(var4 != var7)) { _fun0005_ip = 98; continue _fun0005 }
 88:
            var1 = var6.push;
            var1 = var1.bind(var6)(var7);
 98:
            var7 = var3.bind(var10)();
            var1 = var7.done;
            var2 = var7;
            if(!var1) { _fun0005_ip = 64; continue _fun0005 }
 113:
            var1 = _closure1_slot14;
            var9 = 0;
            if(!(var9 === var5)) { _fun0005_ip = 126; continue _fun0005 }
 123:
            var5 = var1;
 126:
            var2 = _closure1_slot14;
            var3 = var1;
            if(!(var5 > var2)) { _fun0005_ip = 140; continue _fun0005 }
 137:
            var3 = var1 - 1;
 140:
            var1 = new Array(0);
            var2 = _closure1_slot16;
            var14 = var2.bind(var10)(var6);
            var6 = var14.bind(var10)();
            var2 = var6.done;
            var8 = 11;
            var13 = var6;
            var7 = 0;
            var6 = 0;
            if(var2) { _fun0005_ip = 284; continue _fun0005 }
 175:
            var17 = var13.value;
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var16 = var15.bind(var10)(var2);
            var15 = var16.ensureAvatarSource;
            var2 = var17.getAvatarSource;
            var2 = var2.bind(var17)(var10);
            var2 = var15.bind(var16)(var2);
            var15 = var7;
            if(!(var4 != var2)) { _fun0005_ip = 263; continue _fun0005 }
 226:
            var16 = var2.uri;
            var15 = var7;
            if(!(var4 != var16)) { _fun0005_ip = 263; continue _fun0005 }
 238:
            var16 = var1.push;
            var2 = var2.uri;
            var2 = var16.bind(var1)(var2);
            var15 = var7 + 1;
            var6 = var15;
            if(!(var6 !== var3)) { _fun0005_ip = 284; continue _fun0005 }
 263:
            var16 = var14.bind(var10)();
            var2 = var16.done;
            var7 = var15;
            var13 = var16;
            var6 = var7;
            if(!var2) { _fun0005_ip = 175; continue _fun0005 }
 284:
            var2 = var6;
            if(!(var6 < var3)) { _fun0005_ip = 383; continue _fun0005 }
 291:
            var7 = var6;
            var2 = var7;
            if(!(var2 < var12)) { _fun0005_ip = 383; continue _fun0005 }
 301:
            var13 = var1.push;
            var16 = _closure1_slot0;
            var6 = _closure1_slot2;
            var14 = var6[var8];
            var15 = var16.bind(var10)(var14);
            var14 = var15.ensureAvatarSource;
            var6 = var6[var8];
            var6 = var16.bind(var10)(var6);
            var6 = var6.DEFAULT_AVATARS;
            var6 = var6[var9];
            var6 = var14.bind(var15)(var6);
            var6 = var6.uri;
            var6 = var13.bind(var1)(var6);
            var6 = var7 + 1;
            var2 = var6;
            if(!(var2 < var3)) { _fun0005_ip = 383; continue _fun0005 }
 373:
            var7 = var6;
            var2 = var7;
            if(var6 < var12) { _fun0005_ip = 301; continue _fun0005 }
 383:
            if(!(var2 < var3)) { _fun0005_ip = 412; continue _fun0005 }
 387:
            if(!(var2 < var5)) { _fun0005_ip = 412; continue _fun0005 }
 391:
            var6 = var1.push;
            var6 = var6.bind(var1)(var4);
            var2 = var2 + 1;
            if(!(var2 < var3)) { _fun0005_ip = 412; continue _fun0005 }
 408:
            if(var2 < var5) { _fun0005_ip = 391; continue _fun0005 }
 412:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionTypes;
    var _closure1_slot10 = var7;
    var7 = var4.ActivityGamePlatforms;
    var _closure1_slot11 = var7;
    var7 = var4.ActivityPartyApplicationNames;
    var _closure1_slot12 = var7;
    var7 = var4.ActivityTypes;
    var _closure1_slot13 = var7;
    var4 = var4.MAX_INVITE_AVATARS_TO_SHOW;
    var _closure1_slot14 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTIVITY_INVITE_COVER_IMAGE_SIZE;
    var _closure1_slot15 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityInviteEmbed(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var2 = var2.bind(var3)();
            if(var2) { _fun0006_ip = 2334; continue _fun0006 }
 44:
            var2 = var5.author;
            var18 = null;
            if(!(var18 != var2)) { _fun0006_ip = 2334; continue _fun0006 }
 59:
            var2 = var5.activity;
            if(!(var18 != var2)) { _fun0006_ip = 2334; continue _fun0006 }
 72:
            var2 = var5.activity;
            var22 = var2.type;
            var2 = var5.activity;
            var23 = var2.party_id;
            var2 = var5.application;
            if(!(var18 == var2)) { _fun0006_ip = 164; continue _fun0006 }
 104:
            var3 = var18 != var23;
            var13 = undefined;
            var6 = undefined;
            var8 = undefined;
            if(!var3) { _fun0006_ip = 180; continue _fun0006 }
 117:
            var7 = var23.split;
            var3 = ':';
            var9 = var7.bind(var23)(var3);
            var7 = _closure1_slot3;
            var3 = 1;
            var7 = var7.bind(var1)(var9, var3);
            var3 = 0;
            var7 = var7[var3];
            var3 = _closure1_slot12;
            var6 = var3[var7];
            var13 = undefined;
            var8 = undefined;
            _fun0006_ip = 180; continue _fun0006;
 164:
            var13 = var2.id;
            var6 = var2.name;
            var8 = var2.cover_image;
 180:
            var3 = _closure1_slot5;
            var2 = var3.getId;
            var16 = var2.bind(var3)();
            var2 = var5.application;
            if(!(var18 == var2)) { _fun0006_ip = 244; continue _fun0006 }
 203:
            var9 = _closure1_slot8;
            var7 = var9.findActivity;
            var2 = var5.author;
            var3 = var2.id;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot13;
                var1 = var1.LISTENING;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var7.bind(var9)(var3, var2);
            _fun0006_ip = 385; continue _fun0006;
 244:
            var3 = var5.author;
            var7 = var3.id;
            var3 = var5.activity;
            var10 = var18 == var3;
            var9 = undefined;
            if(var10) { _fun0006_ip = 275; continue _fun0006 }
 270:
            var9 = var3.type;
 275:
            var3 = _closure1_slot10;
            var3 = var3.JOIN_REQUEST;
            var10 = var7;
            if(!(var9 === var3)) { _fun0006_ip = 359; continue _fun0006 }
 292:
            var11 = _closure1_slot6;
            var9 = var11.getChannel;
            var3 = var5.getChannelId;
            var3 = var3.bind(var5)();
            var9 = var9.bind(var11)(var3);
            if(!(var18 != var9)) { _fun0006_ip = 2332; continue _fun0006 }
 323:
            var3 = var16;
            if(!(var7 === var16)) { _fun0006_ip = 356; continue _fun0006 }
 330:
            var7 = var9.isPrivate;
            var7 = var7.bind(var9)();
            var3 = var16;
            if(!var7) { _fun0006_ip = 356; continue _fun0006 }
 346:
            var7 = var9.getRecipientId;
            var3 = var7.bind(var9)();
 356:
            var10 = var3;
 359:
            var9 = _closure1_slot8;
            var7 = var9.getApplicationActivity;
            var3 = var5.application;
            var3 = var3.id;
            var2 = var7.bind(var9)(var10, var3);
 385:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 13;
            var3 = var9[var3];
            var3 = var7.bind(var1)(var3);
            var21 = var3.bind(var1)(var2, var5, var13);
            var3 = _closure1_slot10;
            var7 = var3.LISTEN;
            var12 = var22 === var7;
            var3 = var3.JOIN_REQUEST;
            var3 = var22 === var3;
            var5 = var5.author;
            var15 = var5.id;
            var19 = var2;
            if(var21) { _fun0006_ip = 532; continue _fun0006 }
 453:
            var14 = undefined;
            if(!var12) { _fun0006_ip = 558; continue _fun0006 }
 458:
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 15;
            var2 = var17[var2];
            var7 = var11.bind(var1)(var2);
            var5 = var7.getAssetUriForEmbed;
            var10 = _closure1_slot4;
            var9 = var10.resolveAssetSource;
            var2 = 16;
            var2 = var17[var2];
            var17 = var11.bind(var1)(var2);
            var11 = var17.getSpotifyErrorSource;
            var2 = arg2;
            var2 = var11.bind(var17)(var2);
            var2 = var9.bind(var10)(var2);
            var14 = var5.bind(var7)(var2);
            _fun0006_ip = 558; continue _fun0006;
 532:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 14;
            var2 = var7[var2];
            var2 = var5.bind(var1)(var2);
            var14 = var2.bind(var1)(var19, var13);
 558:
            var2 = var18 == var14;
            if(!var2) { _fun0006_ip = 569; continue _fun0006 }
 565:
            var2 = var18 != var13;
 569:
            if(!var2) { _fun0006_ip = 628; continue _fun0006 }
 572:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var7 = var5.bind(var1)(var2);
            var5 = var7.getApplicationIconURL;
            var2 = {};
            var2['id'] = var13;
            var2['icon'] = var8;
            var8 = _closure1_slot15;
            var2['size'] = var8;
            var8 = false;
            var2['fallbackAvatar'] = var8;
            var14 = var5.bind(var7)(var2);
 628:
            if(!(var18 != var19)) { _fun0006_ip = 696; continue _fun0006 }
 632:
            var2 = var19.party;
            if(!(var18 != var2)) { _fun0006_ip = 696; continue _fun0006 }
 642:
            var2 = var19.party;
            var2 = var2.size;
            if(!(var18 != var2)) { _fun0006_ip = 696; continue _fun0006 }
 657:
            var2 = var19.party;
            var2 = var2.size;
            var5 = var2.length;
            var2 = 2;
            if(!(!(var5 < var2))) { _fun0006_ip = 696; continue _fun0006 }
 680:
            if(!var21) { _fun0006_ip = 696; continue _fun0006 }
 683:
            var2 = var19.party;
            var7 = var2.size;
            _fun0006_ip = 717; continue _fun0006;
 696:
            var2 = new Array(2);
            var5 = -1;
            var2[0] = var5;
            var2[1] = var5;
            var7 = var2;
 717:
            var5 = _closure1_slot3;
            var2 = 2;
            var5 = var5.bind(var1)(var7, var2);
            var26 = 0;
            var11 = var5[var26];
            var2 = 1;
            var7 = var5[var2];
            var9 = -1;
            var20 = var11 > var9;
            if(!var20) { _fun0006_ip = 760; continue _fun0006 }
 756:
            var20 = var7 > var26;
 760:
            if(!var20) { _fun0006_ip = 767; continue _fun0006 }
 763:
            var20 = var11 >= var7;
 767:
            var17 = var18 != var13;
            if(!var17) { _fun0006_ip = 778; continue _fun0006 }
 774:
            var17 = var18 != var23;
 778:
            if(!var17) { _fun0006_ip = 865; continue _fun0006 }
 781:
            var5 = _closure1_slot9;
            var2 = var5.getCurrentUser;
            var5 = var2.bind(var5)();
            var8 = var18 == var5;
            var2 = false;
            if(var8) { _fun0006_ip = 862; continue _fun0006 }
 803:
            var10 = _closure1_slot8;
            var8 = var10.getApplicationActivity;
            var5 = var5.id;
            var8 = var8.bind(var10)(var5, var13);
            var5 = var18 != var8;
            if(!var5) { _fun0006_ip = 841; continue _fun0006 }
 831:
            var10 = var8.party;
            var5 = var18 != var10;
 841:
            if(!var5) { _fun0006_ip = 859; continue _fun0006 }
 844:
            var8 = var8.party;
            var8 = var8.id;
            var5 = var23 === var8;
 859:
            var2 = var5;
 862:
            var17 = var2;
 865:
            var13 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 18;
            var5 = var2[var8];
            var5 = var13.bind(var1)(var5);
            var10 = var5.intl;
            var5 = var10.string;
            var2 = var2[var8];
            var2 = var13.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.hC/Ze3;
            var2 = var5.bind(var10)(var2);
            if(var12) { _fun0006_ip = 985; continue _fun0006 }
 923:
            var13 = var2;
            if(!var3) { _fun0006_ip = 1044; continue _fun0006 }
 929:
            var24 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var24.bind(var1)(var5);
            var10 = var5.intl;
            var5 = var10.string;
            var2 = var2[var8];
            var2 = var24.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.OKsSCQ;
            var13 = var5.bind(var10)(var2);
            _fun0006_ip = 1044; continue _fun0006;
 985:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var5.bind(var1)(var10);
            var24 = var10.intl;
            var10 = var24.formatToPlainString;
            var2 = var2[var8];
            var2 = var5.bind(var1)(var2);
            var2 = var2.t;
            var5 = var2./8czHx;
            var2 = {};
            var2['name'] = var6;
            var13 = var10.bind(var24)(var5, var2);
 1044:
            var5 = undefined;
            if(!var12) { _fun0006_ip = 1125; continue _fun0006 }
 1049:
            var25 = '';
            var10 = undefined;
            var2 = var25;
            if(!var21) { _fun0006_ip = 1119; continue _fun0006 }
 1061:
            var24 = var18 != var19;
            var10 = undefined;
            var2 = var25;
            if(!var24) { _fun0006_ip = 1119; continue _fun0006 }
 1073:
            var24 = var19.details;
            var24 = var18 != var24;
            var10 = undefined;
            var2 = var25;
            if(!var24) { _fun0006_ip = 1119; continue _fun0006 }
 1091:
            var24 = var19.state;
            var24 = var18 != var24;
            var10 = undefined;
            var2 = var25;
            if(!var24) { _fun0006_ip = 1119; continue _fun0006 }
 1108:
            var2 = var19.details;
            var10 = var19.state;
 1119:
            var5 = var10;
            var6 = var2;
 1125:
            if(var21) { _fun0006_ip = 1337; continue _fun0006 }
 1131:
            var2 = _closure1_slot10;
            var2 = var2.LISTEN;
            if(!(var2 !== var22)) { _fun0006_ip = 1280; continue _fun0006 }
 1148:
            var2 = _closure1_slot10;
            var2 = var2.WATCH;
            if(!(var2 !== var22)) { _fun0006_ip = 1221; continue _fun0006 }
 1162:
            var25 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var25.bind(var1)(var10);
            var24 = var10.intl;
            var10 = var24.string;
            var2 = var2[var8];
            var2 = var25.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.2Gbof3;
            var10 = var10.bind(var24)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1221:
            var27 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var27.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var27.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.B9kbnZ;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1280:
            var27 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var27.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var27.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.84qx9v;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1337:
            if(var20) { _fun0006_ip = 1993; continue _fun0006 }
 1343:
            if(var17) { _fun0006_ip = 1939; continue _fun0006 }
 1349:
            if(!(var18 != var19)) { _fun0006_ip = 1885; continue _fun0006 }
 1356:
            var2 = _closure1_slot18;
            var2 = var2.bind(var1)(var19);
            if(var2) { _fun0006_ip = 1885; continue _fun0006 }
 1371:
            var2 = var19.platform;
            if(!(var18 == var2)) { _fun0006_ip = 1407; continue _fun0006 }
 1381:
            var24 = var19.supported_platforms;
            var25 = var18 == var24;
            var2 = undefined;
            if(var25) { _fun0006_ip = 1400; continue _fun0006 }
 1396:
            var2 = var24[var26];
 1400:
            if(!(var18 != var2)) { _fun0006_ip = 1885; continue _fun0006 }
 1407:
            var24 = var19.platform;
            if(!(var18 == var24)) { _fun0006_ip = 1439; continue _fun0006 }
 1417:
            var25 = var19.supported_platforms;
            var27 = var18 == var25;
            var2 = undefined;
            if(var27) { _fun0006_ip = 1436; continue _fun0006 }
 1432:
            var2 = var25[var26];
 1436:
            var24 = var2;
 1439:
            var2 = _closure1_slot11;
            var2 = var2.DESKTOP;
            if(!(var2 !== var24)) { _fun0006_ip = 1828; continue _fun0006 }
 1456:
            var2 = _closure1_slot11;
            var2 = var2.IOS;
            if(!(var2 !== var24)) { _fun0006_ip = 1769; continue _fun0006 }
 1473:
            var2 = _closure1_slot11;
            var2 = var2.ANDROID;
            if(!(var2 !== var24)) { _fun0006_ip = 1710; continue _fun0006 }
 1490:
            var2 = _closure1_slot11;
            var2 = var2.XBOX;
            if(!(var2 !== var24)) { _fun0006_ip = 1651; continue _fun0006 }
 1507:
            var2 = _closure1_slot11;
            var2 = var2.PS4;
            if(!(var2 !== var24)) { _fun0006_ip = 1592; continue _fun0006 }
 1521:
            var2 = _closure1_slot11;
            var2 = var2.PS5;
            if(!(var2 !== var24)) { _fun0006_ip = 1592; continue _fun0006 }
 1535:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var26.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.c3EWuL;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1592:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var26.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2./ak8Mj;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1651:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var26.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.HEY5dX;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1710:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var26.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.5crb4u;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1769:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var26.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.ZozYtr;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1828:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var26.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.c3EWuL;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1885:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var26.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.c3EWuL;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1939:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var26.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.KC26NT;
            var10 = var24.bind(var25)(var2);
            _fun0006_ip = 2047; continue _fun0006;
 1993:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var24 = var2[var8];
            var24 = var26.bind(var1)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.jfrMtr;
            var10 = var24.bind(var25)(var2);
 2047:
            var2 = var18 != var23;
            if(!var2) { _fun0006_ip = 2057; continue _fun0006 }
 2054:
            var2 = var21;
 2057:
            if(!var2) { _fun0006_ip = 2073; continue _fun0006 }
 2060:
            var9 = var11 > var9;
            if(var9) { _fun0006_ip = 2070; continue _fun0006 }
 2067:
            var9 = var12;
 2070:
            var2 = var9;
 2073:
            var9 = undefined;
            if(!var2) { _fun0006_ip = 2089; continue _fun0006 }
 2078:
            var2 = _closure1_slot19;
            var9 = var2.bind(var1)(var23, var11, var7);
 2089:
            var2 = _closure1_slot10;
            var2 = var2.LISTEN;
            var11 = var21;
            if(!(var2 !== var22)) { _fun0006_ip = 2181; continue _fun0006 }
 2106:
            var2 = _closure1_slot10;
            var2 = var2.JOIN;
            if(!(var2 !== var22)) { _fun0006_ip = 2134; continue _fun0006 }
 2120:
            var2 = _closure1_slot10;
            var2 = var2.JOIN_REQUEST;
            var11 = false;
            _fun0006_ip = 2181; continue _fun0006;
 2134:
            var2 = var21;
            if(!var21) { _fun0006_ip = 2143; continue _fun0006 }
 2140:
            var2 = !var20;
 2143:
            if(!var2) { _fun0006_ip = 2150; continue _fun0006 }
 2146:
            var2 = var18 != var19;
 2150:
            if(!var2) { _fun0006_ip = 2162; continue _fun0006 }
 2153:
            var18 = _closure1_slot18;
            var2 = var18.bind(var1)(var19);
 2162:
            if(!var2) { _fun0006_ip = 2168; continue _fun0006 }
 2165:
            var2 = !var17;
 2168:
            if(!var2) { _fun0006_ip = 2178; continue _fun0006 }
 2171:
            var15 = var15 === var16;
            var2 = !var15;
 2178:
            var11 = var2;
 2181:
            var2 = {};
            var2['coverImage'] = var14;
            var2['isListening'] = var12;
            var2['joinable'] = var11;
            var14 = 'string';
            var12 = typeof var13;
            var11 = var13;
            if(!(var14 === var12)) { _fun0006_ip = 2224; continue _fun0006 }
 2214:
            var12 = var13.toUpperCase;
            var11 = var12.bind(var13)();
 2224:
            var2['headerText'] = var11;
            var2['partyStatus'] = var10;
            var2['avatarsToRender'] = var9;
            var2['maxPartySize'] = var7;
            var2['name'] = var6;
            var2['subtext'] = var5;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = var4[var8];
            var5 = var7.bind(var1)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var4[var8];
            var4 = var7.bind(var1)(var4);
            var4 = var4.t;
            if(var3) { _fun0006_ip = 2314; continue _fun0006 }
 2301:
            var3 = var4.VJlc0d;
            var3 = var5.bind(var6)(var3);
            _fun0006_ip = 2325; continue _fun0006;
 2314:
            var4 = var4.hC/Ze3;
            var3 = var5.bind(var6)(var4);
 2325:
            var2['ctaText'] = var3;
            return var2;
 2332:
            return var1;
 2334:
            return var1;
        }
    };
    var3['createActivityInviteEmbed'] = var2;
    return var1;
})();
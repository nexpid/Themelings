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
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createActivityInviteEmbed(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var13 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var2 = var2.bind(var3)();
            if(var2) { _fun0006_ip = 2955; continue _fun0006 }
 44:
            var2 = var13.author;
            var12 = null;
            if(!(var12 != var2)) { _fun0006_ip = 2955; continue _fun0006 }
 59:
            var2 = var13.activity;
            if(!(var12 != var2)) { _fun0006_ip = 2955; continue _fun0006 }
 72:
            var2 = var13.activity;
            var23 = var2.type;
            var2 = var13.activity;
            var25 = var2.party_id;
            var11 = var13.application;
            if(!(var12 == var11)) { _fun0006_ip = 168; continue _fun0006 }
 104:
            var2 = var12 != var25;
            var20 = undefined;
            var5 = undefined;
            var9 = undefined;
            var7 = undefined;
            if(!var2) { _fun0006_ip = 189; continue _fun0006 }
 119:
            var3 = var25.split;
            var2 = ':';
            var4 = var3.bind(var25)(var2);
            var3 = _closure1_slot3;
            var2 = 1;
            var3 = var3.bind(var1)(var4, var2);
            var2 = 0;
            var3 = var3[var2];
            var2 = _closure1_slot12;
            var5 = var2[var3];
            var20 = undefined;
            var9 = undefined;
            var7 = undefined;
            _fun0006_ip = 189; continue _fun0006;
 168:
            var20 = var11.id;
            var5 = var11.name;
            var7 = var11.icon;
            var9 = var11.cover_image;
 189:
            var3 = _closure1_slot5;
            var2 = var3.getId;
            var18 = var2.bind(var3)();
            var2 = var13.application;
            if(!(var12 == var2)) { _fun0006_ip = 253; continue _fun0006 }
 212:
            var6 = _closure1_slot8;
            var4 = var6.findActivity;
            var2 = var13.author;
            var3 = var2.id;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot13;
                var1 = var1.LISTENING;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var4.bind(var6)(var3, var2);
            _fun0006_ip = 413; continue _fun0006;
 253:
            var2 = var13.author;
            var3 = var2.id;
            var2 = var13.activity;
            var10 = var12 == var2;
            var6 = undefined;
            if(var10) { _fun0006_ip = 284; continue _fun0006 }
 279:
            var6 = var2.type;
 284:
            var2 = _closure1_slot10;
            var2 = var2.JOIN_REQUEST;
            if(!(var6 !== var2)) { _fun0006_ip = 320; continue _fun0006 }
 298:
            var2 = _closure1_slot10;
            var2 = var2.STREAM_REQUEST;
            var10 = var3;
            if(!(var23 === var2)) { _fun0006_ip = 387; continue _fun0006 }
 315:
            var10 = var18;
            _fun0006_ip = 387; continue _fun0006;
 320:
            var14 = _closure1_slot6;
            var6 = var14.getChannel;
            var2 = var13.getChannelId;
            var2 = var2.bind(var13)();
            var6 = var6.bind(var14)(var2);
            if(!(var12 != var6)) { _fun0006_ip = 2953; continue _fun0006 }
 351:
            var2 = var18;
            if(!(var3 === var18)) { _fun0006_ip = 384; continue _fun0006 }
 358:
            var3 = var6.isPrivate;
            var3 = var3.bind(var6)();
            var2 = var18;
            if(!var3) { _fun0006_ip = 384; continue _fun0006 }
 374:
            var3 = var6.getRecipientId;
            var2 = var3.bind(var6)();
 384:
            var10 = var2;
 387:
            var6 = _closure1_slot8;
            var3 = var6.getApplicationActivity;
            var2 = var13.application;
            var2 = var2.id;
            var4 = var3.bind(var6)(var10, var2);
 413:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var2 = var3.bind(var1)(var2);
            var22 = var2.bind(var1)(var4, var13, var20);
            var3 = _closure1_slot10;
            var2 = var3.LISTEN;
            var14 = var23 === var2;
            var2 = var3.JOIN_REQUEST;
            var2 = var23 === var2;
            var3 = var3.STREAM_REQUEST;
            var6 = var13.author;
            var17 = var6.id;
            var24 = var4;
            if(!(var23 !== var3)) { _fun0006_ip = 2450; continue _fun0006 }
 491:
            if(var22) { _fun0006_ip = 573; continue _fun0006 }
 494:
            var16 = undefined;
            if(!var14) { _fun0006_ip = 599; continue _fun0006 }
 499:
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var3 = 15;
            var3 = var21[var3];
            var6 = var19.bind(var1)(var3);
            var4 = var6.getAssetUriForEmbed;
            var15 = _closure1_slot4;
            var10 = var15.resolveAssetSource;
            var3 = 16;
            var3 = var21[var3];
            var21 = var19.bind(var1)(var3);
            var19 = var21.getSpotifyErrorSource;
            var3 = arg2;
            var3 = var19.bind(var21)(var3);
            var3 = var10.bind(var15)(var3);
            var16 = var4.bind(var6)(var3);
            _fun0006_ip = 599; continue _fun0006;
 573:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var3 = var4.bind(var1)(var3);
            var16 = var3.bind(var1)(var24, var20);
 599:
            var3 = var12 == var16;
            if(!var3) { _fun0006_ip = 610; continue _fun0006 }
 606:
            var3 = var12 != var20;
 610:
            if(!var3) { _fun0006_ip = 676; continue _fun0006 }
 613:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 17;
            var3 = var6[var3];
            var6 = var4.bind(var1)(var3);
            var4 = var6.getApplicationIconURL;
            var3 = {};
            var3['id'] = var20;
            if(!(var12 != var9)) { _fun0006_ip = 652; continue _fun0006 }
 649:
            var7 = var9;
 652:
            var3['icon'] = var7;
            var7 = _closure1_slot15;
            var3['size'] = var7;
            var7 = false;
            var3['fallbackAvatar'] = var7;
            var16 = var4.bind(var6)(var3);
 676:
            if(!(var12 != var24)) { _fun0006_ip = 744; continue _fun0006 }
 680:
            var3 = var24.party;
            if(!(var12 != var3)) { _fun0006_ip = 744; continue _fun0006 }
 690:
            var3 = var24.party;
            var3 = var3.size;
            if(!(var12 != var3)) { _fun0006_ip = 744; continue _fun0006 }
 705:
            var3 = var24.party;
            var3 = var3.size;
            var4 = var3.length;
            var3 = 2;
            if(!(!(var4 < var3))) { _fun0006_ip = 744; continue _fun0006 }
 728:
            if(!var22) { _fun0006_ip = 744; continue _fun0006 }
 731:
            var3 = var24.party;
            var6 = var3.size;
            _fun0006_ip = 765; continue _fun0006;
 744:
            var3 = new Array(2);
            var4 = -1;
            var3[0] = var4;
            var3[1] = var4;
            var6 = var3;
 765:
            var4 = _closure1_slot3;
            var3 = 2;
            var4 = var4.bind(var1)(var6, var3);
            var28 = 0;
            var10 = var4[var28];
            var3 = 1;
            var6 = var4[var3];
            var7 = -1;
            var21 = var10 > var7;
            if(!var21) { _fun0006_ip = 808; continue _fun0006 }
 804:
            var21 = var6 > var28;
 808:
            if(!var21) { _fun0006_ip = 815; continue _fun0006 }
 811:
            var21 = var10 >= var6;
 815:
            var19 = var12 != var20;
            if(!var19) { _fun0006_ip = 826; continue _fun0006 }
 822:
            var19 = var12 != var25;
 826:
            if(!var19) { _fun0006_ip = 913; continue _fun0006 }
 829:
            var4 = _closure1_slot9;
            var3 = var4.getCurrentUser;
            var4 = var3.bind(var4)();
            var9 = var12 == var4;
            var3 = false;
            if(var9) { _fun0006_ip = 910; continue _fun0006 }
 851:
            var15 = _closure1_slot8;
            var9 = var15.getApplicationActivity;
            var4 = var4.id;
            var9 = var9.bind(var15)(var4, var20);
            var4 = var12 != var9;
            if(!var4) { _fun0006_ip = 889; continue _fun0006 }
 879:
            var15 = var9.party;
            var4 = var12 != var15;
 889:
            if(!var4) { _fun0006_ip = 907; continue _fun0006 }
 892:
            var9 = var9.party;
            var9 = var9.id;
            var4 = var25 === var9;
 907:
            var3 = var4;
 910:
            var19 = var3;
 913:
            var15 = _closure1_slot0;
            var3 = _closure1_slot2;
            var20 = 18;
            var4 = var3[var20];
            var4 = var15.bind(var1)(var4);
            var9 = var4.intl;
            var4 = var9.string;
            var3 = var3[var20];
            var3 = var15.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.hC/Ze3;
            var3 = var4.bind(var9)(var3);
            if(var14) { _fun0006_ip = 1033; continue _fun0006 }
 971:
            var15 = var3;
            if(!var2) { _fun0006_ip = 1092; continue _fun0006 }
 977:
            var26 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = var3[var20];
            var4 = var26.bind(var1)(var4);
            var9 = var4.intl;
            var4 = var9.string;
            var3 = var3[var20];
            var3 = var26.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.OKsSCQ;
            var15 = var4.bind(var9)(var3);
            _fun0006_ip = 1092; continue _fun0006;
 1033:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = var3[var20];
            var9 = var4.bind(var1)(var9);
            var26 = var9.intl;
            var9 = var26.formatToPlainString;
            var3 = var3[var20];
            var3 = var4.bind(var1)(var3);
            var3 = var3.t;
            var4 = var3./8czHx;
            var3 = {};
            var3['name'] = var5;
            var15 = var9.bind(var26)(var4, var3);
 1092:
            var4 = undefined;
            if(!var14) { _fun0006_ip = 1173; continue _fun0006 }
 1097:
            var27 = '';
            var9 = undefined;
            var3 = var27;
            if(!var22) { _fun0006_ip = 1167; continue _fun0006 }
 1109:
            var26 = var12 != var24;
            var9 = undefined;
            var3 = var27;
            if(!var26) { _fun0006_ip = 1167; continue _fun0006 }
 1121:
            var26 = var24.details;
            var26 = var12 != var26;
            var9 = undefined;
            var3 = var27;
            if(!var26) { _fun0006_ip = 1167; continue _fun0006 }
 1139:
            var26 = var24.state;
            var26 = var12 != var26;
            var9 = undefined;
            var3 = var27;
            if(!var26) { _fun0006_ip = 1167; continue _fun0006 }
 1156:
            var3 = var24.details;
            var9 = var24.state;
 1167:
            var4 = var9;
            var5 = var3;
 1173:
            if(var22) { _fun0006_ip = 1385; continue _fun0006 }
 1179:
            var3 = _closure1_slot10;
            var3 = var3.LISTEN;
            if(!(var3 !== var23)) { _fun0006_ip = 1328; continue _fun0006 }
 1196:
            var3 = _closure1_slot10;
            var3 = var3.WATCH;
            if(!(var3 !== var23)) { _fun0006_ip = 1269; continue _fun0006 }
 1210:
            var27 = _closure1_slot0;
            var3 = _closure1_slot2;
            var9 = var3[var20];
            var9 = var27.bind(var1)(var9);
            var26 = var9.intl;
            var9 = var26.string;
            var3 = var3[var20];
            var3 = var27.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.2Gbof3;
            var9 = var9.bind(var26)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1269:
            var29 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var29.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var29.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.B9kbnZ;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1328:
            var29 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var29.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var29.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.84qx9v;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1385:
            if(var21) { _fun0006_ip = 2041; continue _fun0006 }
 1391:
            if(var19) { _fun0006_ip = 1987; continue _fun0006 }
 1397:
            if(!(var12 != var24)) { _fun0006_ip = 1933; continue _fun0006 }
 1404:
            var3 = _closure1_slot18;
            var3 = var3.bind(var1)(var24);
            if(var3) { _fun0006_ip = 1933; continue _fun0006 }
 1419:
            var3 = var24.platform;
            if(!(var12 == var3)) { _fun0006_ip = 1455; continue _fun0006 }
 1429:
            var26 = var24.supported_platforms;
            var27 = var12 == var26;
            var3 = undefined;
            if(var27) { _fun0006_ip = 1448; continue _fun0006 }
 1444:
            var3 = var26[var28];
 1448:
            if(!(var12 != var3)) { _fun0006_ip = 1933; continue _fun0006 }
 1455:
            var26 = var24.platform;
            if(!(var12 == var26)) { _fun0006_ip = 1487; continue _fun0006 }
 1465:
            var27 = var24.supported_platforms;
            var29 = var12 == var27;
            var3 = undefined;
            if(var29) { _fun0006_ip = 1484; continue _fun0006 }
 1480:
            var3 = var27[var28];
 1484:
            var26 = var3;
 1487:
            var3 = _closure1_slot11;
            var3 = var3.DESKTOP;
            if(!(var3 !== var26)) { _fun0006_ip = 1876; continue _fun0006 }
 1504:
            var3 = _closure1_slot11;
            var3 = var3.IOS;
            if(!(var3 !== var26)) { _fun0006_ip = 1817; continue _fun0006 }
 1521:
            var3 = _closure1_slot11;
            var3 = var3.ANDROID;
            if(!(var3 !== var26)) { _fun0006_ip = 1758; continue _fun0006 }
 1538:
            var3 = _closure1_slot11;
            var3 = var3.XBOX;
            if(!(var3 !== var26)) { _fun0006_ip = 1699; continue _fun0006 }
 1555:
            var3 = _closure1_slot11;
            var3 = var3.PS4;
            if(!(var3 !== var26)) { _fun0006_ip = 1640; continue _fun0006 }
 1569:
            var3 = _closure1_slot11;
            var3 = var3.PS5;
            if(!(var3 !== var26)) { _fun0006_ip = 1640; continue _fun0006 }
 1583:
            var28 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var28.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var28.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.c3EWuL;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1640:
            var28 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var28.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var28.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3./ak8Mj;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1699:
            var28 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var28.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var28.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.HEY5dX;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1758:
            var28 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var28.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var28.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.5crb4u;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1817:
            var28 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var28.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var28.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.ZozYtr;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1876:
            var28 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var28.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var28.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.c3EWuL;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1933:
            var28 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var28.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var28.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.c3EWuL;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 1987:
            var28 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var28.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var28.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.KC26NT;
            var9 = var26.bind(var27)(var3);
            _fun0006_ip = 2095; continue _fun0006;
 2041:
            var28 = _closure1_slot0;
            var3 = _closure1_slot2;
            var26 = var3[var20];
            var26 = var28.bind(var1)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var3 = var3[var20];
            var3 = var28.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.jfrMtr;
            var9 = var26.bind(var27)(var3);
 2095:
            var3 = var12 != var25;
            if(!var3) { _fun0006_ip = 2105; continue _fun0006 }
 2102:
            var3 = var22;
 2105:
            if(!var3) { _fun0006_ip = 2121; continue _fun0006 }
 2108:
            var7 = var10 > var7;
            if(var7) { _fun0006_ip = 2118; continue _fun0006 }
 2115:
            var7 = var14;
 2118:
            var3 = var7;
 2121:
            var7 = undefined;
            if(!var3) { _fun0006_ip = 2137; continue _fun0006 }
 2126:
            var3 = _closure1_slot19;
            var7 = var3.bind(var1)(var25, var10, var6);
 2137:
            var3 = _closure1_slot10;
            var3 = var3.LISTEN;
            var10 = var22;
            if(!(var3 !== var23)) { _fun0006_ip = 2266; continue _fun0006 }
 2154:
            var3 = _closure1_slot10;
            var3 = var3.JOIN;
            if(!(var3 !== var23)) { _fun0006_ip = 2182; continue _fun0006 }
 2168:
            var3 = _closure1_slot10;
            var3 = var3.JOIN_REQUEST;
            var10 = false;
            _fun0006_ip = 2266; continue _fun0006;
 2182:
            var3 = var22;
            if(!var22) { _fun0006_ip = 2191; continue _fun0006 }
 2188:
            var3 = !var21;
 2191:
            if(!var3) { _fun0006_ip = 2198; continue _fun0006 }
 2194:
            var3 = var12 != var24;
 2198:
            if(!var3) { _fun0006_ip = 2247; continue _fun0006 }
 2201:
            var21 = _closure1_slot18;
            var21 = var21.bind(var1)(var24);
            if(var21) { _fun0006_ip = 2244; continue _fun0006 }
 2213:
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var22 = 19;
            var22 = var25[var22];
            var23 = var23.bind(var1)(var22);
            var22 = var23.isActivityRemoteJoinable;
            var21 = var22.bind(var23)(var24);
 2244:
            var3 = var21;
 2247:
            if(!var3) { _fun0006_ip = 2253; continue _fun0006 }
 2250:
            var3 = !var19;
 2253:
            if(!var3) { _fun0006_ip = 2263; continue _fun0006 }
 2256:
            var17 = var17 === var18;
            var3 = !var17;
 2263:
            var10 = var3;
 2266:
            var19 = _closure1_slot0;
            var3 = _closure1_slot2;
            var17 = var3[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var3 = var3[var20];
            var3 = var19.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.VJlc0d;
            var3 = var17.bind(var18)(var3);
            if(!var2) { _fun0006_ip = 2373; continue _fun0006 }
 2321:
            var19 = _closure1_slot0;
            var2 = _closure1_slot2;
            var17 = var2[var20];
            var17 = var19.bind(var1)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var2 = var2[var20];
            var2 = var19.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.hC/Ze3;
            var3 = var17.bind(var18)(var2);
 2373:
            var2 = {};
            var2['coverImage'] = var16;
            var2['isListening'] = var14;
            var2['joinable'] = var10;
            var16 = 'string';
            var14 = typeof var15;
            var10 = var15;
            if(!(var16 === var14)) { _fun0006_ip = 2414; continue _fun0006 }
 2404:
            var14 = var15.toUpperCase;
            var10 = var14.bind(var15)();
 2414:
            var2['headerText'] = var10;
            var2['partyStatus'] = var9;
            var2['avatarsToRender'] = var7;
            var2['maxPartySize'] = var6;
            var2['name'] = var5;
            var2['subtext'] = var4;
            var2['ctaText'] = var3;
            return var2;
 2450:
            var3 = var12 == var11;
            var2 = null;
            if(var3) { _fun0006_ip = 2951; continue _fun0006 }
 2462:
            var5 = _closure1_slot6;
            var4 = var5.getChannel;
            var3 = var13.getChannelId;
            var3 = var3.bind(var13)();
            var14 = var4.bind(var5)(var3);
            var3 = var12 == var14;
            var2 = null;
            if(var3) { _fun0006_ip = 2951; continue _fun0006 }
 2498:
            var4 = _closure1_slot5;
            var3 = var4.getId;
            var7 = var3.bind(var4)();
            var3 = var13.author;
            var6 = var3.id;
            var5 = var11.name;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 17;
            var3 = var9[var3];
            var9 = var4.bind(var1)(var3);
            var4 = var9.getApplicationIconURL;
            var3 = {};
            var10 = var11.id;
            var3['id'] = var10;
            var10 = var11.cover_image;
            if(!(var12 == var10)) { _fun0006_ip = 2580; continue _fun0006 }
 2575:
            var10 = var11.icon;
 2580:
            var3['icon'] = var10;
            var10 = _closure1_slot15;
            var3['size'] = var10;
            var11 = false;
            var3['fallbackAvatar'] = var11;
            var12 = var4.bind(var9)(var3);
            var18 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 20;
            var3 = var10[var3];
            var3 = var18.bind(var1)(var3);
            var3 = var3.bind(var1)(var13);
            var4 = var3.text;
            var9 = var3.isDisabled;
            var3 = {};
            var3['coverImage'] = var12;
            var3['isListening'] = var11;
            var9 = !var9;
            var3['joinable'] = var9;
            var16 = _closure1_slot0;
            var9 = 18;
            var11 = var10[var9];
            var11 = var16.bind(var1)(var11);
            var17 = var11.intl;
            var15 = var17.string;
            var11 = 21;
            var12 = var10[var11];
            var12 = var18.bind(var1)(var12);
            var12 = var12.nAyuPj;
            var15 = var15.bind(var17)(var12);
            var12 = var15.toLocaleUpperCase;
            var10 = var10[var9];
            var10 = var16.bind(var1)(var10);
            var10 = var10.intl;
            var10 = var10.currentLocale;
            var10 = var12.bind(var15)(var10);
            var3['headerText'] = var10;
            if(!(var6 !== var7)) { _fun0006_ip = 2857; continue _fun0006 }
 2749:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var6 = var17[var9];
            var6 = var16.bind(var1)(var6);
            var12 = var6.intl;
            var10 = var12.formatToPlainString;
            var7 = _closure1_slot1;
            var6 = var17[var11];
            var6 = var7.bind(var1)(var6);
            var7 = var6.s7bMT0;
            var6 = {};
            var15 = 22;
            var15 = var17[var15];
            var17 = var16.bind(var1)(var15);
            var16 = var17.getName;
            var15 = var14.guild_id;
            var14 = var14.id;
            var13 = var13.author;
            var13 = var16.bind(var17)(var15, var14, var13);
            var6['username'] = var13;
            var6['applicationName'] = var5;
            var6 = var10.bind(var12)(var7, var6);
            _fun0006_ip = 2918; continue _fun0006;
 2857:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = var7[var9];
            var9 = var10.bind(var1)(var9);
            var10 = var9.intl;
            var9 = var10.formatToPlainString;
            var8 = _closure1_slot1;
            var7 = var7[var11];
            var7 = var8.bind(var1)(var7);
            var8 = var7.7pndSk;
            var7 = {};
            var7['applicationName'] = var5;
            var6 = var9.bind(var10)(var8, var7);
 2918:
            var3['partyStatus'] = var6;
            var6 = new Array(0);
            var3['avatarsToRender'] = var6;
            var6 = 0;
            var3['maxPartySize'] = var6;
            var3['name'] = var5;
            var3['ctaText'] = var4;
            var2 = var3;
 2951:
            return var2;
 2953:
            return var1;
 2955:
            return var1;
        }
    };
    var3['createActivityInviteEmbed'] = var2;
    return var1;
})();
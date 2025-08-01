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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot20;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot20;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var _closure1_slot20 = var1;
    var1 = function isCurrentPlatform(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var3 = var7.platform;
            var5 = var7.supported_platforms;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 11;
            var2 = var6[var2];
            var6 = undefined;
            var4 = var4.bind(var6)(var2);
            var2 = var4.isContextlessEmbeddedActivity;
            var2 = var2.bind(var4)(var7);
            if(var2) { _fun0004_ip = 142; continue _fun0004 }
 54:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            var1 = _closure1_slot12;
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
    var _closure1_slot21 = var1;
    var1 = function makeActivityInvitePartyAvatars(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var12 = arg2;
            var5 = arg3;
            var1 = _closure1_slot15;
            var10 = 0;
            if(!(var10 === var5)) { _fun0005_ip = 22; continue _fun0005 }
 19:
            var5 = var1;
 22:
            var2 = _closure1_slot15;
            var4 = var1;
            if(!(var5 > var2)) { _fun0005_ip = 36; continue _fun0005 }
 33:
            var4 = var1 - 1;
 36:
            var1 = new Array(0);
            var3 = _closure1_slot19;
            var9 = undefined;
            var2 = arg1;
            var14 = var3.bind(var9)(var2);
            var6 = var14.bind(var9)();
            var2 = var6.done;
            var3 = null;
            var8 = 13;
            var13 = var6;
            var7 = 0;
            var6 = 0;
            if(var2) { _fun0005_ip = 189; continue _fun0005 }
 78:
            var17 = var13.value;
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var16 = var15.bind(var9)(var2);
            var15 = var16.ensureAvatarSource;
            var2 = var17.getAvatarSource;
            var2 = var2.bind(var17)(var9);
            var2 = var15.bind(var16)(var2);
            var15 = var7;
            if(!(var3 != var2)) { _fun0005_ip = 168; continue _fun0005 }
 129:
            var16 = var2.uri;
            var15 = var7;
            if(!(var3 != var16)) { _fun0005_ip = 168; continue _fun0005 }
 142:
            var16 = var1.push;
            var2 = var2.uri;
            var2 = var16.bind(var1)(var2);
            var15 = var7 + 1;
            var6 = var15;
            if(!(var6 !== var4)) { _fun0005_ip = 189; continue _fun0005 }
 168:
            var16 = var14.bind(var9)();
            var2 = var16.done;
            var7 = var15;
            var13 = var16;
            var6 = var7;
            if(!var2) { _fun0005_ip = 78; continue _fun0005 }
 189:
            var2 = var6;
            if(!(var6 < var4)) { _fun0005_ip = 289; continue _fun0005 }
 196:
            var7 = var6;
            var2 = var7;
            if(!(var2 < var12)) { _fun0005_ip = 289; continue _fun0005 }
 206:
            var13 = var1.push;
            var16 = _closure1_slot0;
            var6 = _closure1_slot2;
            var14 = var6[var8];
            var15 = var16.bind(var9)(var14);
            var14 = var15.ensureAvatarSource;
            var6 = var6[var8];
            var6 = var16.bind(var9)(var6);
            var6 = var6.DEFAULT_AVATARS;
            var6 = var6[var10];
            var6 = var14.bind(var15)(var6);
            var6 = var6.uri;
            var6 = var13.bind(var1)(var6);
            var6 = var7 + 1;
            var2 = var6;
            if(!(var2 < var4)) { _fun0005_ip = 289; continue _fun0005 }
 279:
            var7 = var6;
            var2 = var7;
            if(var6 < var12) { _fun0005_ip = 206; continue _fun0005 }
 289:
            if(!(var2 < var4)) { _fun0005_ip = 318; continue _fun0005 }
 293:
            if(!(var2 < var5)) { _fun0005_ip = 318; continue _fun0005 }
 297:
            var6 = var1.push;
            var6 = var6.bind(var1)(var3);
            var2 = var2 + 1;
            if(!(var2 < var4)) { _fun0005_ip = 318; continue _fun0005 }
 314:
            if(var2 < var5) { _fun0005_ip = 297; continue _fun0005 }
 318:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityActionTypes;
    var _closure1_slot11 = var7;
    var7 = var4.ActivityGamePlatforms;
    var _closure1_slot12 = var7;
    var7 = var4.ActivityPartyApplicationNames;
    var _closure1_slot13 = var7;
    var7 = var4.ActivityTypes;
    var _closure1_slot14 = var7;
    var4 = var4.MAX_INVITE_AVATARS_TO_SHOW;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTIVITY_INVITE_COVER_IMAGE_SIZE;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot17 = var4;
    var4 = 22;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.makeKeyedDataComponent;
    var4 = 'activityInviteEmbed';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ActivityInviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ActivityInviteEmbed(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var2 = var3.message;
            var _closure2_slot0 = var2;
            var3 = var3.activity;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var22 = var3.type;
            var23 = var3.party_id;
            var5 = var2.application;
            var18 = null;
            if(!(var18 == var5)) { _fun0006_ip = 119; continue _fun0006 }
 56:
            var3 = var18 != var23;
            var13 = undefined;
            var8 = undefined;
            var12 = undefined;
            if(!var3) { _fun0006_ip = 142; continue _fun0006 }
 69:
            var6 = var23.split;
            var3 = ':';
            var9 = var6.bind(var23)(var3);
            var7 = _closure1_slot3;
            var6 = 1;
            var7 = var7.bind(var4)(var9, var6);
            var6 = 0;
            var6 = var7[var6];
            var3 = _closure1_slot13;
            var8 = var3[var6];
            var13 = undefined;
            var12 = undefined;
            _fun0006_ip = 142; continue _fun0006;
 119:
            var7 = var5.id;
            _closure2_slot1 = var7;
            var8 = var5.name;
            var12 = var5.cover_image;
            var13 = var7;
 142:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 23;
            var3 = var7[var3];
            var10 = var9.bind(var4)(var3);
            var3 = var10.useMessageRendererTheme;
            var24 = var3.bind(var10)();
            var11 = 14;
            var3 = var7[var11];
            var15 = var9.bind(var4)(var3);
            var14 = var15.useStateFromStores;
            var3 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var14.bind(var15)(var10, var3);
            _closure2_slot2 = var3;
            var7 = var7[var11];
            var14 = var9.bind(var4)(var7);
            var10 = var14.useStateFromStores;
            var7 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var4 = _closure2_slot0;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var14)(var9, var7);
            var7 = var2.author;
            var9 = var7.id;
            _closure2_slot3 = var9;
            var7 = var18 != var5;
            if(!var7) { _fun0006_ip = 296; continue _fun0006 }
 282:
            var5 = _closure1_slot11;
            var5 = var5.JOIN_REQUEST;
            var7 = var22 === var5;
 296:
            if(!var7) { _fun0006_ip = 303; continue _fun0006 }
 299:
            var7 = var18 != var10;
 303:
            var5 = var9;
            if(!var7) { _fun0006_ip = 349; continue _fun0006 }
 309:
            var7 = var3;
            if(!(var9 === var3)) { _fun0006_ip = 342; continue _fun0006 }
 316:
            var9 = var10.isPrivate;
            var9 = var9.bind(var10)();
            var7 = var3;
            if(!var9) { _fun0006_ip = 342; continue _fun0006 }
 332:
            var9 = var10.getRecipientId;
            var7 = var9.bind(var10)();
 342:
            _closure2_slot3 = var7;
            var5 = var7;
 349:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = var9[var11];
            var15 = var10.bind(var4)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var5;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0007_ip = 47; continue _fun0007 }
 13:
                    var5 = _closure1_slot9;
                    var4 = var5.findActivity;
                    var3 = _closure2_slot3;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure1_slot14;
                        var1 = var1.LISTENING;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0007_ip = 74; continue _fun0007;
 47:
                    var5 = _closure1_slot9;
                    var4 = var5.getApplicationActivity;
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 74:
                    return var1;
                }
            };
            var19 = var14.bind(var15)(var10, var5, var7);
            var7 = _closure1_slot1;
            var5 = 16;
            var5 = var9[var5];
            var5 = var7.bind(var4)(var5);
            var21 = var5.bind(var4)(var19, var2, var13);
            var5 = _closure1_slot11;
            var7 = var5.LISTEN;
            var14 = var22 === var7;
            var5 = var5.JOIN_REQUEST;
            var5 = var22 === var5;
            var2 = var2.author;
            var2 = var2.id;
            if(var21) { _fun0006_ip = 546; continue _fun0006 }
 470:
            var16 = undefined;
            if(!var14) { _fun0006_ip = 572; continue _fun0006 }
 475:
            var20 = _closure1_slot0;
            var25 = _closure1_slot2;
            var7 = 18;
            var7 = var25[var7];
            var10 = var20.bind(var4)(var7);
            var9 = var10.getAssetUriForEmbed;
            var17 = _closure1_slot5;
            var15 = var17.resolveAssetSource;
            var7 = 19;
            var7 = var25[var7];
            var20 = var20.bind(var4)(var7);
            var7 = var20.getSpotifyErrorSource;
            var7 = var7.bind(var20)(var24);
            var7 = var15.bind(var17)(var7);
            var16 = var9.bind(var10)(var7);
            _fun0006_ip = 572; continue _fun0006;
 546:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 17;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var16 = var7.bind(var4)(var19, var13);
 572:
            var7 = var18 == var16;
            if(!var7) { _fun0006_ip = 583; continue _fun0006 }
 579:
            var7 = var18 != var13;
 583:
            if(!var7) { _fun0006_ip = 642; continue _fun0006 }
 586:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 20;
            var7 = var10[var7];
            var10 = var9.bind(var4)(var7);
            var9 = var10.getApplicationIconURL;
            var7 = {};
            var7['id'] = var13;
            var7['icon'] = var12;
            var12 = _closure1_slot16;
            var7['size'] = var12;
            var12 = false;
            var7['fallbackAvatar'] = var12;
            var16 = var9.bind(var10)(var7);
 642:
            if(!(var18 != var19)) { _fun0006_ip = 710; continue _fun0006 }
 646:
            var7 = var19.party;
            if(!(var18 != var7)) { _fun0006_ip = 710; continue _fun0006 }
 656:
            var7 = var19.party;
            var7 = var7.size;
            if(!(var18 != var7)) { _fun0006_ip = 710; continue _fun0006 }
 671:
            var7 = var19.party;
            var7 = var7.size;
            var9 = var7.length;
            var7 = 2;
            if(!(!(var9 < var7))) { _fun0006_ip = 710; continue _fun0006 }
 694:
            if(!var21) { _fun0006_ip = 710; continue _fun0006 }
 697:
            var7 = var19.party;
            var10 = var7.size;
            _fun0006_ip = 731; continue _fun0006;
 710:
            var7 = new Array(2);
            var9 = -1;
            var7[0] = var9;
            var7[1] = var9;
            var10 = var7;
 731:
            var9 = _closure1_slot3;
            var7 = 2;
            var9 = var9.bind(var4)(var10, var7);
            var27 = 0;
            var13 = var9[var27];
            var7 = 1;
            var9 = var9[var7];
            var24 = -1;
            var20 = var13 > var24;
            if(!var20) { _fun0006_ip = 774; continue _fun0006 }
 770:
            var20 = var9 > var27;
 774:
            if(!var20) { _fun0006_ip = 781; continue _fun0006 }
 777:
            var20 = var13 >= var9;
 781:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var12 = var10.bind(var4)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0008_ip = 45; continue _fun0008 }
 18:
                    var5 = _closure1_slot9;
                    var4 = var5.getApplicationActivity;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 45:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var10, var7);
            var17 = var18 != var7;
            if(!var17) { _fun0006_ip = 845; continue _fun0006 }
 835:
            var10 = var7.party;
            var17 = var18 != var10;
 845:
            if(!var17) { _fun0006_ip = 863; continue _fun0006 }
 848:
            var7 = var7.party;
            var7 = var7.id;
            var17 = var7 === var23;
 863:
            var15 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 21;
            var11 = var7[var10];
            var11 = var15.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var7 = var7[var10];
            var7 = var15.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.hC/Ze3;
            var7 = var11.bind(var12)(var7);
            if(var14) { _fun0006_ip = 981; continue _fun0006 }
 921:
            var15 = var7;
            if(!var5) { _fun0006_ip = 1040; continue _fun0006 }
 927:
            var25 = _closure1_slot0;
            var7 = _closure1_slot2;
            var11 = var7[var10];
            var11 = var25.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var7 = var7[var10];
            var7 = var25.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.OKsSCQ;
            var15 = var11.bind(var12)(var7);
            _fun0006_ip = 1040; continue _fun0006;
 981:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var12 = var7[var10];
            var12 = var11.bind(var4)(var12);
            var25 = var12.intl;
            var12 = var25.formatToPlainString;
            var7 = var7[var10];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var11 = var7./8czHx;
            var7 = {};
            var7['name'] = var8;
            var15 = var12.bind(var25)(var11, var7);
 1040:
            var7 = undefined;
            if(!var14) { _fun0006_ip = 1121; continue _fun0006 }
 1045:
            var26 = '';
            var12 = undefined;
            var11 = var26;
            if(!var21) { _fun0006_ip = 1115; continue _fun0006 }
 1057:
            var25 = var18 != var19;
            var12 = undefined;
            var11 = var26;
            if(!var25) { _fun0006_ip = 1115; continue _fun0006 }
 1069:
            var25 = var19.details;
            var25 = var18 != var25;
            var12 = undefined;
            var11 = var26;
            if(!var25) { _fun0006_ip = 1115; continue _fun0006 }
 1087:
            var25 = var19.state;
            var25 = var18 != var25;
            var12 = undefined;
            var11 = var26;
            if(!var25) { _fun0006_ip = 1115; continue _fun0006 }
 1104:
            var11 = var19.details;
            var12 = var19.state;
 1115:
            var7 = var12;
            var8 = var11;
 1121:
            if(var21) { _fun0006_ip = 1329; continue _fun0006 }
 1127:
            var11 = _closure1_slot11;
            var11 = var11.LISTEN;
            if(!(var11 !== var22)) { _fun0006_ip = 1272; continue _fun0006 }
 1144:
            var11 = _closure1_slot11;
            var11 = var11.WATCH;
            if(!(var11 !== var22)) { _fun0006_ip = 1215; continue _fun0006 }
 1158:
            var26 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var10];
            var12 = var26.bind(var4)(var12);
            var25 = var12.intl;
            var12 = var25.string;
            var11 = var11[var10];
            var11 = var26.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.2Gbof3;
            var12 = var12.bind(var25)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1215:
            var28 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var28.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var28.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.B9kbnZ;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1272:
            var28 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var28.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var28.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.84qx9v;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1329:
            if(var20) { _fun0006_ip = 1977; continue _fun0006 }
 1335:
            if(var17) { _fun0006_ip = 1923; continue _fun0006 }
 1341:
            if(!(var18 != var19)) { _fun0006_ip = 1869; continue _fun0006 }
 1348:
            var11 = _closure1_slot21;
            var11 = var11.bind(var4)(var19);
            if(var11) { _fun0006_ip = 1869; continue _fun0006 }
 1363:
            var11 = var19.platform;
            if(!(var18 == var11)) { _fun0006_ip = 1399; continue _fun0006 }
 1373:
            var25 = var19.supported_platforms;
            var26 = var18 == var25;
            var11 = undefined;
            if(var26) { _fun0006_ip = 1392; continue _fun0006 }
 1388:
            var11 = var25[var27];
 1392:
            if(!(var18 != var11)) { _fun0006_ip = 1869; continue _fun0006 }
 1399:
            var25 = var19.platform;
            if(!(var18 == var25)) { _fun0006_ip = 1431; continue _fun0006 }
 1409:
            var26 = var19.supported_platforms;
            var28 = var18 == var26;
            var11 = undefined;
            if(var28) { _fun0006_ip = 1428; continue _fun0006 }
 1424:
            var11 = var26[var27];
 1428:
            var25 = var11;
 1431:
            var11 = _closure1_slot12;
            var11 = var11.DESKTOP;
            if(!(var11 !== var25)) { _fun0006_ip = 1812; continue _fun0006 }
 1448:
            var11 = _closure1_slot12;
            var11 = var11.IOS;
            if(!(var11 !== var25)) { _fun0006_ip = 1755; continue _fun0006 }
 1465:
            var11 = _closure1_slot12;
            var11 = var11.ANDROID;
            if(!(var11 !== var25)) { _fun0006_ip = 1698; continue _fun0006 }
 1482:
            var11 = _closure1_slot12;
            var11 = var11.XBOX;
            if(!(var11 !== var25)) { _fun0006_ip = 1641; continue _fun0006 }
 1499:
            var11 = _closure1_slot12;
            var11 = var11.PS4;
            if(!(var11 !== var25)) { _fun0006_ip = 1584; continue _fun0006 }
 1513:
            var11 = _closure1_slot12;
            var11 = var11.PS5;
            if(!(var11 !== var25)) { _fun0006_ip = 1584; continue _fun0006 }
 1527:
            var27 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var27.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.c3EWuL;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1584:
            var27 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var27.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11./ak8Mj;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1641:
            var27 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var27.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.HEY5dX;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1698:
            var27 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var27.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.5crb4u;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1755:
            var27 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var27.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.ZozYtr;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1812:
            var27 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var27.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.c3EWuL;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1869:
            var27 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var27.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.c3EWuL;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1923:
            var27 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var27.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.KC26NT;
            var12 = var25.bind(var26)(var11);
            _fun0006_ip = 2029; continue _fun0006;
 1977:
            var27 = _closure1_slot0;
            var11 = _closure1_slot2;
            var25 = var11[var10];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var11 = var11[var10];
            var11 = var27.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.jfrMtr;
            var12 = var25.bind(var26)(var11);
 2029:
            var11 = null;
            if(!var21) { _fun0006_ip = 2046; continue _fun0006 }
 2034:
            if(!(!(var13 > var24))) { _fun0006_ip = 2043; continue _fun0006 }
 2038:
            var11 = null;
            if(!var14) { _fun0006_ip = 2046; continue _fun0006 }
 2043:
            var11 = var23;
 2046:
            var1 = function useActivityInvitePartyAvatars(arg1, arg2, arg3) {
                var6 = arg2;
                var8 = arg3;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var6;
                var _closure3_slot2 = var8;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 14;
                var7 = var9[var3];
                var4 = undefined;
                var12 = var5.bind(var4)(var7);
                var11 = var12.useStateFromStores;
                var7 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() {
                    var3 = _closure1_slot8;
                    var2 = var3.getParty;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7 = var11.bind(var12)(var10, var7);
                var _closure3_slot3 = var7;
                var3 = var9[var3];
                var10 = var5.bind(var4)(var3);
                var9 = var10.useStateFromStoresArray;
                var3 = _closure1_slot10;
                var5 = new Array(1);
                var5[0] = var3;
                var4 = new Array(1);
                var4[0] = var7;
                var3 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = new Array(0);
                        var3 = _closure3_slot3;
                        var7 = null;
                        if(!(var7 != var3)) { _fun0009_ip = 96; continue _fun0009 }
 17:
                        var3 = _closure1_slot19;
                        var2 = _closure3_slot3;
                        var5 = undefined;
                        var4 = var3.bind(var5)(var2);
                        var3 = var4.bind(var5)();
                        var2 = var3.done;
                        if(var2) { _fun0009_ip = 96; continue _fun0009 }
 47:
                        var9 = var3.value;
                        var8 = _closure1_slot10;
                        var2 = var8.getUser;
                        var8 = var2.bind(var8)(var9);
                        if(!(var7 != var8)) { _fun0009_ip = 81; continue _fun0009 }
 71:
                        var2 = var1.push;
                        var2 = var2.bind(var1)(var8);
 81:
                        var8 = var4.bind(var5)();
                        var2 = var8.done;
                        var3 = var8;
                        if(!var2) { _fun0009_ip = 47; continue _fun0009 }
 96:
                        return var1;
                    }
                };
                var5 = var9.bind(var10)(var5, var3, var4);
                var _closure3_slot4 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useMemo;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var3 = _closure3_slot3;
                        var1 = null;
                        var3 = var1 != var3;
                        var6 = undefined;
                        var1 = undefined;
                        if(!var3) { _fun0010_ip = 46; continue _fun0010 }
 20:
                        var5 = _closure1_slot22;
                        var4 = _closure3_slot4;
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot2;
                        var1 = var5.bind(var6)(var4, var3, var2);
 46:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var11 = var1.bind(var4)(var11, var13, var9);
            var1 = _closure1_slot11;
            var1 = var1.LISTEN;
            var13 = var21;
            if(!(var1 !== var22)) { _fun0006_ip = 2152; continue _fun0006 }
 2077:
            var1 = _closure1_slot11;
            var1 = var1.JOIN;
            if(!(var1 !== var22)) { _fun0006_ip = 2105; continue _fun0006 }
 2091:
            var1 = _closure1_slot11;
            var1 = var1.JOIN_REQUEST;
            var13 = false;
            _fun0006_ip = 2152; continue _fun0006;
 2105:
            var1 = var21;
            if(!var21) { _fun0006_ip = 2114; continue _fun0006 }
 2111:
            var1 = !var20;
 2114:
            if(!var1) { _fun0006_ip = 2121; continue _fun0006 }
 2117:
            var1 = var18 != var19;
 2121:
            if(!var1) { _fun0006_ip = 2133; continue _fun0006 }
 2124:
            var18 = _closure1_slot21;
            var1 = var18.bind(var4)(var19);
 2133:
            if(!var1) { _fun0006_ip = 2139; continue _fun0006 }
 2136:
            var1 = !var17;
 2139:
            if(!var1) { _fun0006_ip = 2149; continue _fun0006 }
 2142:
            var2 = var2 === var3;
            var1 = !var2;
 2149:
            var13 = var1;
 2152:
            var3 = _closure1_slot17;
            var2 = _closure1_slot18;
            var1 = {};
            var1['coverImage'] = var16;
            var1['isListening'] = var14;
            var1['joinable'] = var13;
            var16 = 'string';
            var14 = typeof var15;
            var13 = var15;
            if(!(var16 === var14)) { _fun0006_ip = 2201; continue _fun0006 }
 2191:
            var14 = var15.toUpperCase;
            var13 = var14.bind(var15)();
 2201:
            var1['headerText'] = var13;
            var1['partyStatus'] = var12;
            var1['avatarsToRender'] = var11;
            var1['maxPartySize'] = var9;
            var1['name'] = var8;
            var1['subtext'] = var7;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var10];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var6[var10];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            if(var5) { _fun0006_ip = 2287; continue _fun0006 }
 2274:
            var5 = var6.VJlc0d;
            var5 = var7.bind(var8)(var5);
            _fun0006_ip = 2298; continue _fun0006;
 2287:
            var6 = var6.hC/Ze3;
            var5 = var7.bind(var8)(var6);
 2298:
            var1['ctaText'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createActivityInviteEmbed(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var2 = var2.bind(var3)();
            if(var2) { _fun0011_ip = 2413; continue _fun0011 }
 44:
            var2 = var5.author;
            var18 = null;
            if(!(var18 != var2)) { _fun0011_ip = 2413; continue _fun0011 }
 59:
            var2 = var5.activity;
            if(!(var18 != var2)) { _fun0011_ip = 2413; continue _fun0011 }
 72:
            var2 = var5.activity;
            var22 = var2.type;
            var2 = var5.activity;
            var23 = var2.party_id;
            var2 = var5.application;
            if(!(var18 == var2)) { _fun0011_ip = 164; continue _fun0011 }
 104:
            var3 = var18 != var23;
            var11 = undefined;
            var6 = undefined;
            var8 = undefined;
            if(!var3) { _fun0011_ip = 180; continue _fun0011 }
 117:
            var7 = var23.split;
            var3 = ':';
            var9 = var7.bind(var23)(var3);
            var7 = _closure1_slot3;
            var3 = 1;
            var7 = var7.bind(var1)(var9, var3);
            var3 = 0;
            var7 = var7[var3];
            var3 = _closure1_slot13;
            var6 = var3[var7];
            var11 = undefined;
            var8 = undefined;
            _fun0011_ip = 180; continue _fun0011;
 164:
            var11 = var2.id;
            var6 = var2.name;
            var8 = var2.cover_image;
 180:
            var3 = _closure1_slot6;
            var2 = var3.getId;
            var16 = var2.bind(var3)();
            var2 = var5.application;
            if(!(var18 == var2)) { _fun0011_ip = 244; continue _fun0011 }
 203:
            var9 = _closure1_slot9;
            var7 = var9.findActivity;
            var2 = var5.author;
            var3 = var2.id;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot14;
                var1 = var1.LISTENING;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var7.bind(var9)(var3, var2);
            _fun0011_ip = 385; continue _fun0011;
 244:
            var3 = var5.author;
            var7 = var3.id;
            var3 = var5.activity;
            var10 = var18 == var3;
            var9 = undefined;
            if(var10) { _fun0011_ip = 275; continue _fun0011 }
 270:
            var9 = var3.type;
 275:
            var3 = _closure1_slot11;
            var3 = var3.JOIN_REQUEST;
            var10 = var7;
            if(!(var9 === var3)) { _fun0011_ip = 359; continue _fun0011 }
 292:
            var12 = _closure1_slot7;
            var9 = var12.getChannel;
            var3 = var5.getChannelId;
            var3 = var3.bind(var5)();
            var9 = var9.bind(var12)(var3);
            if(!(var18 != var9)) { _fun0011_ip = 2411; continue _fun0011 }
 323:
            var3 = var16;
            if(!(var7 === var16)) { _fun0011_ip = 356; continue _fun0011 }
 330:
            var7 = var9.isPrivate;
            var7 = var7.bind(var9)();
            var3 = var16;
            if(!var7) { _fun0011_ip = 356; continue _fun0011 }
 346:
            var7 = var9.getRecipientId;
            var3 = var7.bind(var9)();
 356:
            var10 = var3;
 359:
            var9 = _closure1_slot9;
            var7 = var9.getApplicationActivity;
            var3 = var5.application;
            var3 = var3.id;
            var2 = var7.bind(var9)(var10, var3);
 385:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 16;
            var3 = var9[var3];
            var3 = var7.bind(var1)(var3);
            var21 = var3.bind(var1)(var2, var5, var11);
            var3 = _closure1_slot11;
            var7 = var3.LISTEN;
            var12 = var22 === var7;
            var3 = var3.JOIN_REQUEST;
            var3 = var22 === var3;
            var5 = var5.author;
            var15 = var5.id;
            var19 = var2;
            if(var21) { _fun0011_ip = 532; continue _fun0011 }
 453:
            var14 = undefined;
            if(!var12) { _fun0011_ip = 558; continue _fun0011 }
 458:
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 18;
            var2 = var17[var2];
            var7 = var13.bind(var1)(var2);
            var5 = var7.getAssetUriForEmbed;
            var10 = _closure1_slot5;
            var9 = var10.resolveAssetSource;
            var2 = 19;
            var2 = var17[var2];
            var17 = var13.bind(var1)(var2);
            var13 = var17.getSpotifyErrorSource;
            var2 = arg2;
            var2 = var13.bind(var17)(var2);
            var2 = var9.bind(var10)(var2);
            var14 = var5.bind(var7)(var2);
            _fun0011_ip = 558; continue _fun0011;
 532:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 17;
            var2 = var7[var2];
            var2 = var5.bind(var1)(var2);
            var14 = var2.bind(var1)(var19, var11);
 558:
            var2 = var18 == var14;
            if(!var2) { _fun0011_ip = 569; continue _fun0011 }
 565:
            var2 = var18 != var11;
 569:
            if(!var2) { _fun0011_ip = 628; continue _fun0011 }
 572:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 20;
            var2 = var7[var2];
            var7 = var5.bind(var1)(var2);
            var5 = var7.getApplicationIconURL;
            var2 = {};
            var2['id'] = var11;
            var2['icon'] = var8;
            var8 = _closure1_slot16;
            var2['size'] = var8;
            var8 = false;
            var2['fallbackAvatar'] = var8;
            var14 = var5.bind(var7)(var2);
 628:
            if(!(var18 != var19)) { _fun0011_ip = 696; continue _fun0011 }
 632:
            var2 = var19.party;
            if(!(var18 != var2)) { _fun0011_ip = 696; continue _fun0011 }
 642:
            var2 = var19.party;
            var2 = var2.size;
            if(!(var18 != var2)) { _fun0011_ip = 696; continue _fun0011 }
 657:
            var2 = var19.party;
            var2 = var2.size;
            var5 = var2.length;
            var2 = 2;
            if(!(!(var5 < var2))) { _fun0011_ip = 696; continue _fun0011 }
 680:
            if(!var21) { _fun0011_ip = 696; continue _fun0011 }
 683:
            var2 = var19.party;
            var7 = var2.size;
            _fun0011_ip = 717; continue _fun0011;
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
            var24 = var5[var26];
            var2 = 1;
            var7 = var5[var2];
            var9 = -1;
            var20 = var24 > var9;
            if(!var20) { _fun0011_ip = 760; continue _fun0011 }
 756:
            var20 = var7 > var26;
 760:
            if(!var20) { _fun0011_ip = 767; continue _fun0011 }
 763:
            var20 = var24 >= var7;
 767:
            var17 = var18 != var11;
            if(!var17) { _fun0011_ip = 778; continue _fun0011 }
 774:
            var17 = var18 != var23;
 778:
            if(!var17) { _fun0011_ip = 865; continue _fun0011 }
 781:
            var5 = _closure1_slot10;
            var2 = var5.getCurrentUser;
            var5 = var2.bind(var5)();
            var8 = var18 == var5;
            var2 = false;
            if(var8) { _fun0011_ip = 862; continue _fun0011 }
 803:
            var10 = _closure1_slot9;
            var8 = var10.getApplicationActivity;
            var5 = var5.id;
            var8 = var8.bind(var10)(var5, var11);
            var5 = var18 != var8;
            if(!var5) { _fun0011_ip = 841; continue _fun0011 }
 831:
            var10 = var8.party;
            var5 = var18 != var10;
 841:
            if(!var5) { _fun0011_ip = 859; continue _fun0011 }
 844:
            var8 = var8.party;
            var8 = var8.id;
            var5 = var23 === var8;
 859:
            var2 = var5;
 862:
            var17 = var2;
 865:
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 21;
            var5 = var2[var8];
            var5 = var11.bind(var1)(var5);
            var10 = var5.intl;
            var5 = var10.string;
            var2 = var2[var8];
            var2 = var11.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.hC/Ze3;
            var2 = var5.bind(var10)(var2);
            if(var12) { _fun0011_ip = 983; continue _fun0011 }
 923:
            var13 = var2;
            if(!var3) { _fun0011_ip = 1042; continue _fun0011 }
 929:
            var11 = _closure1_slot0;
            var2 = _closure1_slot2;
            var5 = var2[var8];
            var5 = var11.bind(var1)(var5);
            var10 = var5.intl;
            var5 = var10.string;
            var2 = var2[var8];
            var2 = var11.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.OKsSCQ;
            var13 = var5.bind(var10)(var2);
            _fun0011_ip = 1042; continue _fun0011;
 983:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var5.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.formatToPlainString;
            var2 = var2[var8];
            var2 = var5.bind(var1)(var2);
            var2 = var2.t;
            var5 = var2./8czHx;
            var2 = {};
            var2['name'] = var6;
            var13 = var10.bind(var11)(var5, var2);
 1042:
            var5 = undefined;
            if(!var12) { _fun0011_ip = 1123; continue _fun0011 }
 1047:
            var25 = '';
            var10 = undefined;
            var2 = var25;
            if(!var21) { _fun0011_ip = 1117; continue _fun0011 }
 1059:
            var11 = var18 != var19;
            var10 = undefined;
            var2 = var25;
            if(!var11) { _fun0011_ip = 1117; continue _fun0011 }
 1071:
            var11 = var19.details;
            var11 = var18 != var11;
            var10 = undefined;
            var2 = var25;
            if(!var11) { _fun0011_ip = 1117; continue _fun0011 }
 1089:
            var11 = var19.state;
            var11 = var18 != var11;
            var10 = undefined;
            var2 = var25;
            if(!var11) { _fun0011_ip = 1117; continue _fun0011 }
 1106:
            var2 = var19.details;
            var10 = var19.state;
 1117:
            var5 = var10;
            var6 = var2;
 1123:
            if(var21) { _fun0011_ip = 1331; continue _fun0011 }
 1129:
            var2 = _closure1_slot11;
            var2 = var2.LISTEN;
            if(!(var2 !== var22)) { _fun0011_ip = 1274; continue _fun0011 }
 1146:
            var2 = _closure1_slot11;
            var2 = var2.WATCH;
            if(!(var2 !== var22)) { _fun0011_ip = 1217; continue _fun0011 }
 1160:
            var25 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = var2[var8];
            var10 = var25.bind(var1)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var2 = var2[var8];
            var2 = var25.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.2Gbof3;
            var10 = var10.bind(var11)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1217:
            var27 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var27.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var27.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.B9kbnZ;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1274:
            var27 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var27.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var27.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.84qx9v;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1331:
            if(var20) { _fun0011_ip = 1979; continue _fun0011 }
 1337:
            if(var17) { _fun0011_ip = 1925; continue _fun0011 }
 1343:
            if(!(var18 != var19)) { _fun0011_ip = 1871; continue _fun0011 }
 1350:
            var2 = _closure1_slot21;
            var2 = var2.bind(var1)(var19);
            if(var2) { _fun0011_ip = 1871; continue _fun0011 }
 1365:
            var2 = var19.platform;
            if(!(var18 == var2)) { _fun0011_ip = 1401; continue _fun0011 }
 1375:
            var11 = var19.supported_platforms;
            var25 = var18 == var11;
            var2 = undefined;
            if(var25) { _fun0011_ip = 1394; continue _fun0011 }
 1390:
            var2 = var11[var26];
 1394:
            if(!(var18 != var2)) { _fun0011_ip = 1871; continue _fun0011 }
 1401:
            var11 = var19.platform;
            if(!(var18 == var11)) { _fun0011_ip = 1433; continue _fun0011 }
 1411:
            var25 = var19.supported_platforms;
            var27 = var18 == var25;
            var2 = undefined;
            if(var27) { _fun0011_ip = 1430; continue _fun0011 }
 1426:
            var2 = var25[var26];
 1430:
            var11 = var2;
 1433:
            var2 = _closure1_slot12;
            var2 = var2.DESKTOP;
            if(!(var2 !== var11)) { _fun0011_ip = 1814; continue _fun0011 }
 1450:
            var2 = _closure1_slot12;
            var2 = var2.IOS;
            if(!(var2 !== var11)) { _fun0011_ip = 1757; continue _fun0011 }
 1467:
            var2 = _closure1_slot12;
            var2 = var2.ANDROID;
            if(!(var2 !== var11)) { _fun0011_ip = 1700; continue _fun0011 }
 1484:
            var2 = _closure1_slot12;
            var2 = var2.XBOX;
            if(!(var2 !== var11)) { _fun0011_ip = 1643; continue _fun0011 }
 1501:
            var2 = _closure1_slot12;
            var2 = var2.PS4;
            if(!(var2 !== var11)) { _fun0011_ip = 1586; continue _fun0011 }
 1515:
            var2 = _closure1_slot12;
            var2 = var2.PS5;
            if(!(var2 !== var11)) { _fun0011_ip = 1586; continue _fun0011 }
 1529:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var26.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.c3EWuL;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1586:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var26.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2./ak8Mj;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1643:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var26.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.HEY5dX;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1700:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var26.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.5crb4u;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1757:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var26.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.ZozYtr;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1814:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var26.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.c3EWuL;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1871:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var26.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.c3EWuL;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1925:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var26.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.KC26NT;
            var10 = var11.bind(var25)(var2);
            _fun0011_ip = 2031; continue _fun0011;
 1979:
            var26 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = var2[var8];
            var11 = var26.bind(var1)(var11);
            var25 = var11.intl;
            var11 = var25.string;
            var2 = var2[var8];
            var2 = var26.bind(var1)(var2);
            var2 = var2.t;
            var2 = var2.jfrMtr;
            var10 = var11.bind(var25)(var2);
 2031:
            var2 = var18 != var23;
            if(!var2) { _fun0011_ip = 2041; continue _fun0011 }
 2038:
            var2 = var21;
 2041:
            if(!var2) { _fun0011_ip = 2057; continue _fun0011 }
 2044:
            var9 = var24 > var9;
            if(var9) { _fun0011_ip = 2054; continue _fun0011 }
 2051:
            var9 = var12;
 2054:
            var2 = var9;
 2057:
            var9 = undefined;
            if(!var2) { _fun0011_ip = 2174; continue _fun0011 }
 2062:
            var11 = _closure1_slot8;
            var2 = var11.getParty;
            var25 = var2.bind(var11)(var23);
            var11 = var18 != var25;
            var2 = undefined;
            if(!var11) { _fun0011_ip = 2171; continue _fun0011 }
 2086:
            var23 = new Array(0);
            var11 = _closure1_slot19;
            var26 = var11.bind(var1)(var25);
            var25 = var26.bind(var1)();
            var11 = var25.done;
            if(var11) { _fun0011_ip = 2160; continue _fun0011 }
 2111:
            var28 = var25.value;
            var27 = _closure1_slot10;
            var11 = var27.getUser;
            var27 = var11.bind(var27)(var28);
            if(!(var18 != var27)) { _fun0011_ip = 2145; continue _fun0011 }
 2135:
            var11 = var23.push;
            var11 = var11.bind(var23)(var27);
 2145:
            var27 = var26.bind(var1)();
            var11 = var27.done;
            var25 = var27;
            if(!var11) { _fun0011_ip = 2111; continue _fun0011 }
 2160:
            var11 = _closure1_slot22;
            var2 = var11.bind(var1)(var23, var24, var7);
 2171:
            var9 = var2;
 2174:
            var2 = _closure1_slot11;
            var2 = var2.LISTEN;
            var11 = var21;
            if(!(var2 !== var22)) { _fun0011_ip = 2266; continue _fun0011 }
 2191:
            var2 = _closure1_slot11;
            var2 = var2.JOIN;
            if(!(var2 !== var22)) { _fun0011_ip = 2219; continue _fun0011 }
 2205:
            var2 = _closure1_slot11;
            var2 = var2.JOIN_REQUEST;
            var11 = false;
            _fun0011_ip = 2266; continue _fun0011;
 2219:
            var2 = var21;
            if(!var21) { _fun0011_ip = 2228; continue _fun0011 }
 2225:
            var2 = !var20;
 2228:
            if(!var2) { _fun0011_ip = 2235; continue _fun0011 }
 2231:
            var2 = var18 != var19;
 2235:
            if(!var2) { _fun0011_ip = 2247; continue _fun0011 }
 2238:
            var18 = _closure1_slot21;
            var2 = var18.bind(var1)(var19);
 2247:
            if(!var2) { _fun0011_ip = 2253; continue _fun0011 }
 2250:
            var2 = !var17;
 2253:
            if(!var2) { _fun0011_ip = 2263; continue _fun0011 }
 2256:
            var15 = var15 === var16;
            var2 = !var15;
 2263:
            var11 = var2;
 2266:
            var2 = {};
            var2['coverImage'] = var14;
            var2['isListening'] = var12;
            var2['joinable'] = var11;
            var14 = 'string';
            var12 = typeof var13;
            var11 = var13;
            if(!(var14 === var12)) { _fun0011_ip = 2307; continue _fun0011 }
 2297:
            var12 = var13.toUpperCase;
            var11 = var12.bind(var13)();
 2307:
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
            if(var3) { _fun0011_ip = 2393; continue _fun0011 }
 2380:
            var3 = var4.VJlc0d;
            var3 = var5.bind(var6)(var3);
            _fun0011_ip = 2404; continue _fun0011;
 2393:
            var4 = var4.hC/Ze3;
            var3 = var5.bind(var6)(var4);
 2404:
            var2['ctaText'] = var3;
            return var2;
 2411:
            return var1;
 2413:
            return var1;
        }
    };
    var3['createActivityInviteEmbed'] = var2;
    return var1;
})();
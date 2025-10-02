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
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
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
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function isCurrentPlatform(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
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
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            var1 = _closure1_slot11;
            if(var2) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var4 = var1.IOS;
            _fun0004_ip = 40; continue _fun0004;
case 38:
            var4 = var1.ANDROID;
case 40:
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var1 = var3 === var4;
case 41:
            if(var1) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var2 = var2 != var5;
            if(!var2) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var3 = var5.includes;
            var2 = var3.bind(var5)(var4);
case 45:
            var1 = var2;
case 43:
            return var1;
case 36:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getActivityInvitePartyAvatars(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var12 = arg2;
            var5 = arg3;
            var3 = _closure1_slot7;
            var2 = var3.getParty;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var4 = null;
            if(!(var4 == var2)) { _fun0005_ip = 47; continue _fun0005 }
case 33:
            var1 = undefined;
            return var1;
case 47:
            var6 = new Array(0);
            var1 = _closure1_slot16;
            var10 = undefined;
            var3 = var1.bind(var10)(var2);
            var2 = var3.bind(var10)();
            var1 = var2.done;
            if(var1) { _fun0005_ip = 42; continue _fun0005 }
case 48:
            var8 = var2.value;
            var7 = _closure1_slot9;
            var1 = var7.getUser;
            var7 = var1.bind(var7)(var8);
            if(!(var4 != var7)) { _fun0005_ip = 38; continue _fun0005 }
case 49:
            var1 = var6.push;
            var1 = var1.bind(var6)(var7);
case 38:
            var7 = var3.bind(var10)();
            var1 = var7.done;
            var2 = var7;
            if(!var1) { _fun0005_ip = 48; continue _fun0005 }
case 42:
            var1 = _closure1_slot14;
            var9 = 0;
            if(!(var9 === var5)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var5 = var1;
case 50:
            var2 = _closure1_slot14;
            var3 = var1;
            if(!(var5 > var2)) { _fun0005_ip = 43; continue _fun0005 }
case 45:
            var3 = var1 - 1;
case 43:
            var1 = new Array(0);
            var2 = _closure1_slot16;
            var14 = var2.bind(var10)(var6);
            var6 = var14.bind(var10)();
            var2 = var6.done;
            var8 = 11;
            var13 = var6;
            var7 = 0;
            var6 = 0;
            if(var2) { _fun0005_ip = 52; continue _fun0005 }
case 53:
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
            if(!(var4 != var2)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var16 = var2.uri;
            var15 = var7;
            if(!(var4 != var16)) { _fun0005_ip = 54; continue _fun0005 }
case 56:
            var16 = var1.push;
            var2 = var2.uri;
            var2 = var16.bind(var1)(var2);
            var15 = var7 + 1;
            var6 = var15;
            if(!(var6 !== var3)) { _fun0005_ip = 52; continue _fun0005 }
case 54:
            var16 = var14.bind(var10)();
            var2 = var16.done;
            var7 = var15;
            var13 = var16;
            var6 = var7;
            if(!var2) { _fun0005_ip = 53; continue _fun0005 }
case 52:
            var2 = var6;
            if(!(var6 < var3)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var7 = var6;
            var2 = var7;
            if(!(var2 < var12)) { _fun0005_ip = 57; continue _fun0005 }
case 59:
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
            if(!(var2 < var3)) { _fun0005_ip = 57; continue _fun0005 }
case 60:
            var7 = var6;
            var2 = var7;
            if(var6 < var12) { _fun0005_ip = 59; continue _fun0005 }
case 57:
            if(!(var2 < var3)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            if(!(var2 < var5)) { _fun0005_ip = 61; continue _fun0005 }
case 63:
            var6 = var1.push;
            var6 = var6.bind(var1)(var4);
            var2 = var2 + 1;
            if(!(var2 < var3)) { _fun0005_ip = 61; continue _fun0005 }
case 64:
            if(var2 < var5) { _fun0005_ip = 63; continue _fun0005 }
case 61:
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
case 0:
            var13 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getIsRichPresenceActivityInviteRedesignEnabled;
            var2 = var2.bind(var3)();
            if(var2) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var2 = var13.author;
            var12 = null;
            if(!(var12 != var2)) { _fun0006_ip = 65; continue _fun0006 }
case 67:
            var2 = var13.activity;
            if(!(var12 != var2)) { _fun0006_ip = 65; continue _fun0006 }
case 68:
            var2 = var13.activity;
            var22 = var2.type;
            var2 = var13.activity;
            var25 = var2.party_id;
            var11 = var13.application;
            if(!(var12 == var11)) { _fun0006_ip = 69; continue _fun0006 }
case 40:
            var2 = var12 != var25;
            var20 = undefined;
            var5 = undefined;
            var9 = undefined;
            var7 = undefined;
            if(!var2) { _fun0006_ip = 70; continue _fun0006 }
case 71:
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
            _fun0006_ip = 70; continue _fun0006;
case 69:
            var20 = var11.id;
            var5 = var11.name;
            var7 = var11.icon;
            var9 = var11.cover_image;
case 70:
            var3 = _closure1_slot5;
            var2 = var3.getId;
            var18 = var2.bind(var3)();
            var2 = var13.application;
            if(!(var12 == var2)) { _fun0006_ip = 72; continue _fun0006 }
case 73:
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
            _fun0006_ip = 74; continue _fun0006;
case 72:
            var2 = var13.author;
            var3 = var2.id;
            var2 = var13.activity;
            var10 = var12 == var2;
            var6 = undefined;
            if(var10) { _fun0006_ip = 52; continue _fun0006 }
case 75:
            var6 = var2.type;
case 52:
            var2 = _closure1_slot10;
            var2 = var2.JOIN_REQUEST;
            if(!(var6 !== var2)) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var2 = _closure1_slot10;
            var2 = var2.STREAM_REQUEST;
            var10 = var3;
            if(!(var22 === var2)) { _fun0006_ip = 62; continue _fun0006 }
case 78:
            var10 = var18;
            _fun0006_ip = 62; continue _fun0006;
case 76:
            var14 = _closure1_slot6;
            var6 = var14.getChannel;
            var2 = var13.getChannelId;
            var2 = var2.bind(var13)();
            var6 = var6.bind(var14)(var2);
            if(!(var12 != var6)) { _fun0006_ip = 79; continue _fun0006 }
case 80:
            var2 = var18;
            if(!(var3 === var18)) { _fun0006_ip = 81; continue _fun0006 }
case 82:
            var3 = var6.isPrivate;
            var3 = var3.bind(var6)();
            var2 = var18;
            if(!var3) { _fun0006_ip = 81; continue _fun0006 }
case 83:
            var3 = var6.getRecipientId;
            var2 = var3.bind(var6)();
case 81:
            var10 = var2;
case 62:
            var6 = _closure1_slot8;
            var3 = var6.getApplicationActivity;
            var2 = var13.application;
            var2 = var2.id;
            var4 = var3.bind(var6)(var10, var2);
case 74:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var2 = var3.bind(var1)(var2);
            var24 = var2.bind(var1)(var4, var13, var20);
            var3 = _closure1_slot10;
            var2 = var3.LISTEN;
            var14 = var22 === var2;
            var2 = var3.JOIN_REQUEST;
            var2 = var22 === var2;
            var3 = var3.STREAM_REQUEST;
            var6 = var13.author;
            var17 = var6.id;
            var23 = var4;
            if(!(var22 !== var3)) { _fun0006_ip = 84; continue _fun0006 }
case 85:
            if(var24) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var16 = undefined;
            if(!var14) { _fun0006_ip = 88; continue _fun0006 }
case 89:
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
            _fun0006_ip = 88; continue _fun0006;
case 86:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var3 = var4.bind(var1)(var3);
            var16 = var3.bind(var1)(var23, var20);
case 88:
            var3 = var12 == var16;
            if(!var3) { _fun0006_ip = 90; continue _fun0006 }
case 91:
            var3 = var12 != var20;
case 90:
            if(!var3) { _fun0006_ip = 92; continue _fun0006 }
case 93:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 17;
            var3 = var6[var3];
            var6 = var4.bind(var1)(var3);
            var4 = var6.getApplicationIconURL;
            var3 = {};
            var3['id'] = var20;
            if(!(var12 != var9)) { _fun0006_ip = 94; continue _fun0006 }
case 95:
            var7 = var9;
case 94:
            var3['icon'] = var7;
            var7 = _closure1_slot15;
            var3['size'] = var7;
            var7 = false;
            var3['fallbackAvatar'] = var7;
            var16 = var4.bind(var6)(var3);
case 92:
            if(!(var12 != var23)) { _fun0006_ip = 96; continue _fun0006 }
case 97:
            var3 = var23.party;
            if(!(var12 != var3)) { _fun0006_ip = 96; continue _fun0006 }
case 98:
            var3 = var23.party;
            var3 = var3.size;
            if(!(var12 != var3)) { _fun0006_ip = 96; continue _fun0006 }
case 99:
            var3 = var23.party;
            var3 = var3.size;
            var4 = var3.length;
            var3 = 2;
            if(!(!(var4 < var3))) { _fun0006_ip = 96; continue _fun0006 }
case 100:
            if(!var24) { _fun0006_ip = 96; continue _fun0006 }
case 101:
            var3 = var23.party;
            var6 = var3.size;
            _fun0006_ip = 102; continue _fun0006;
case 96:
            var3 = new Array(2);
            var4 = -1;
            var3[0] = var4;
            var3[1] = var4;
            var6 = var3;
case 102:
            var4 = _closure1_slot3;
            var3 = 2;
            var4 = var4.bind(var1)(var6, var3);
            var28 = 0;
            var10 = var4[var28];
            var3 = 1;
            var6 = var4[var3];
            var7 = -1;
            var21 = var10 > var7;
            if(!var21) { _fun0006_ip = 103; continue _fun0006 }
case 104:
            var21 = var6 > var28;
case 103:
            if(!var21) { _fun0006_ip = 105; continue _fun0006 }
case 106:
            var21 = var10 >= var6;
case 105:
            var19 = var12 != var20;
            if(!var19) { _fun0006_ip = 107; continue _fun0006 }
case 108:
            var19 = var12 != var25;
case 107:
            if(!var19) { _fun0006_ip = 109; continue _fun0006 }
case 110:
            var4 = _closure1_slot9;
            var3 = var4.getCurrentUser;
            var4 = var3.bind(var4)();
            var9 = var12 == var4;
            var3 = false;
            if(var9) { _fun0006_ip = 111; continue _fun0006 }
case 112:
            var15 = _closure1_slot8;
            var9 = var15.getApplicationActivity;
            var4 = var4.id;
            var9 = var9.bind(var15)(var4, var20);
            var4 = var12 != var9;
            if(!var4) { _fun0006_ip = 113; continue _fun0006 }
case 114:
            var15 = var9.party;
            var4 = var12 != var15;
case 113:
            if(!var4) { _fun0006_ip = 115; continue _fun0006 }
case 116:
            var9 = var9.party;
            var9 = var9.id;
            var4 = var25 === var9;
case 115:
            var3 = var4;
case 111:
            var19 = var3;
case 109:
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
            if(var14) { _fun0006_ip = 117; continue _fun0006 }
case 118:
            var15 = var3;
            if(!var2) { _fun0006_ip = 119; continue _fun0006 }
case 120:
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
            _fun0006_ip = 119; continue _fun0006;
case 117:
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
case 119:
            var4 = undefined;
            if(!var14) { _fun0006_ip = 121; continue _fun0006 }
case 122:
            var27 = '';
            var9 = undefined;
            var3 = var27;
            if(!var24) { _fun0006_ip = 123; continue _fun0006 }
case 124:
            var26 = var12 != var23;
            var9 = undefined;
            var3 = var27;
            if(!var26) { _fun0006_ip = 123; continue _fun0006 }
case 125:
            var26 = var23.details;
            var26 = var12 != var26;
            var9 = undefined;
            var3 = var27;
            if(!var26) { _fun0006_ip = 123; continue _fun0006 }
case 126:
            var26 = var23.state;
            var26 = var12 != var26;
            var9 = undefined;
            var3 = var27;
            if(!var26) { _fun0006_ip = 123; continue _fun0006 }
case 127:
            var3 = var23.details;
            var9 = var23.state;
case 123:
            var4 = var9;
            var5 = var3;
case 121:
            if(var24) { _fun0006_ip = 128; continue _fun0006 }
case 129:
            var3 = _closure1_slot10;
            var3 = var3.LISTEN;
            if(!(var3 !== var22)) { _fun0006_ip = 130; continue _fun0006 }
case 131:
            var3 = _closure1_slot10;
            var3 = var3.WATCH;
            if(!(var3 !== var22)) { _fun0006_ip = 132; continue _fun0006 }
case 133:
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
            _fun0006_ip = 134; continue _fun0006;
case 132:
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
            _fun0006_ip = 134; continue _fun0006;
case 130:
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
            _fun0006_ip = 134; continue _fun0006;
case 128:
            if(var21) { _fun0006_ip = 135; continue _fun0006 }
case 136:
            if(var19) { _fun0006_ip = 137; continue _fun0006 }
case 138:
            if(!(var12 != var23)) { _fun0006_ip = 139; continue _fun0006 }
case 140:
            var3 = _closure1_slot18;
            var3 = var3.bind(var1)(var23);
            if(var3) { _fun0006_ip = 139; continue _fun0006 }
case 141:
            var3 = var23.platform;
            if(!(var12 == var3)) { _fun0006_ip = 142; continue _fun0006 }
case 143:
            var26 = var23.supported_platforms;
            var27 = var12 == var26;
            var3 = undefined;
            if(var27) { _fun0006_ip = 144; continue _fun0006 }
case 145:
            var3 = var26[var28];
case 144:
            if(!(var12 != var3)) { _fun0006_ip = 139; continue _fun0006 }
case 142:
            var26 = var23.platform;
            if(!(var12 == var26)) { _fun0006_ip = 146; continue _fun0006 }
case 147:
            var27 = var23.supported_platforms;
            var29 = var12 == var27;
            var3 = undefined;
            if(var29) { _fun0006_ip = 148; continue _fun0006 }
case 149:
            var3 = var27[var28];
case 148:
            var26 = var3;
case 146:
            var3 = _closure1_slot11;
            var3 = var3.DESKTOP;
            if(!(var3 !== var26)) { _fun0006_ip = 150; continue _fun0006 }
case 151:
            var3 = _closure1_slot11;
            var3 = var3.IOS;
            if(!(var3 !== var26)) { _fun0006_ip = 152; continue _fun0006 }
case 153:
            var3 = _closure1_slot11;
            var3 = var3.ANDROID;
            if(!(var3 !== var26)) { _fun0006_ip = 154; continue _fun0006 }
case 155:
            var3 = _closure1_slot11;
            var3 = var3.XBOX;
            if(!(var3 !== var26)) { _fun0006_ip = 156; continue _fun0006 }
case 157:
            var3 = _closure1_slot11;
            var3 = var3.PS4;
            if(!(var3 !== var26)) { _fun0006_ip = 158; continue _fun0006 }
case 159:
            var3 = _closure1_slot11;
            var3 = var3.PS5;
            if(!(var3 !== var26)) { _fun0006_ip = 158; continue _fun0006 }
case 160:
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
            _fun0006_ip = 134; continue _fun0006;
case 158:
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
            _fun0006_ip = 134; continue _fun0006;
case 156:
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
            _fun0006_ip = 134; continue _fun0006;
case 154:
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
            _fun0006_ip = 134; continue _fun0006;
case 152:
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
            _fun0006_ip = 134; continue _fun0006;
case 150:
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
            _fun0006_ip = 134; continue _fun0006;
case 139:
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
            _fun0006_ip = 134; continue _fun0006;
case 137:
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
            _fun0006_ip = 134; continue _fun0006;
case 135:
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
case 134:
            var3 = var12 != var25;
            if(!var3) { _fun0006_ip = 161; continue _fun0006 }
case 162:
            var3 = var24;
case 161:
            if(!var3) { _fun0006_ip = 163; continue _fun0006 }
case 164:
            var7 = var10 > var7;
            if(var7) { _fun0006_ip = 165; continue _fun0006 }
case 166:
            var7 = var14;
case 165:
            var3 = var7;
case 163:
            var7 = undefined;
            if(!var3) { _fun0006_ip = 167; continue _fun0006 }
case 168:
            var3 = _closure1_slot19;
            var7 = var3.bind(var1)(var25, var10, var6);
case 167:
            var3 = _closure1_slot10;
            var3 = var3.LISTEN;
            var10 = var24;
            if(!(var3 !== var22)) { _fun0006_ip = 169; continue _fun0006 }
case 170:
            var3 = _closure1_slot10;
            var3 = var3.JOIN;
            if(!(var3 !== var22)) { _fun0006_ip = 171; continue _fun0006 }
case 172:
            var3 = _closure1_slot10;
            var3 = var3.JOIN_REQUEST;
            var10 = false;
            _fun0006_ip = 169; continue _fun0006;
case 171:
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var3 = 19;
            var3 = var25[var3];
            var22 = var22.bind(var1)(var3);
            var3 = var22.getRemoteJoinableActivityPlatform;
            var22 = var3.bind(var22)(var23);
            var3 = var24;
            if(!var24) { _fun0006_ip = 173; continue _fun0006 }
case 174:
            var3 = !var21;
case 173:
            if(!var3) { _fun0006_ip = 175; continue _fun0006 }
case 176:
            var3 = var12 != var23;
case 175:
            if(!var3) { _fun0006_ip = 177; continue _fun0006 }
case 178:
            var21 = _closure1_slot18;
            var21 = var21.bind(var1)(var23);
            if(var21) { _fun0006_ip = 179; continue _fun0006 }
case 180:
            var21 = var12 != var22;
case 179:
            var3 = var21;
case 177:
            if(!var3) { _fun0006_ip = 181; continue _fun0006 }
case 182:
            var3 = !var19;
case 181:
            if(!var3) { _fun0006_ip = 183; continue _fun0006 }
case 184:
            var17 = var17 === var18;
            var3 = !var17;
case 183:
            var10 = var3;
case 169:
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
            if(!var2) { _fun0006_ip = 185; continue _fun0006 }
case 186:
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
case 185:
            var2 = {};
            var2['coverImage'] = var16;
            var2['isListening'] = var14;
            var2['joinable'] = var10;
            var16 = 'string';
            var14 = typeof var15;
            var10 = var15;
            if(!(var16 === var14)) { _fun0006_ip = 187; continue _fun0006 }
case 188:
            var14 = var15.toUpperCase;
            var10 = var14.bind(var15)();
case 187:
            var2['headerText'] = var10;
            var2['partyStatus'] = var9;
            var2['avatarsToRender'] = var7;
            var2['maxPartySize'] = var6;
            var2['name'] = var5;
            var2['subtext'] = var4;
            var2['ctaText'] = var3;
            return var2;
case 84:
            var3 = var12 == var11;
            var2 = null;
            if(var3) { _fun0006_ip = 189; continue _fun0006 }
case 190:
            var5 = _closure1_slot6;
            var4 = var5.getChannel;
            var3 = var13.getChannelId;
            var3 = var3.bind(var13)();
            var14 = var4.bind(var5)(var3);
            var3 = var12 == var14;
            var2 = null;
            if(var3) { _fun0006_ip = 189; continue _fun0006 }
case 191:
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
            if(!(var12 == var10)) { _fun0006_ip = 192; continue _fun0006 }
case 193:
            var10 = var11.icon;
case 192:
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
            if(!(var6 !== var7)) { _fun0006_ip = 194; continue _fun0006 }
case 195:
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
            _fun0006_ip = 196; continue _fun0006;
case 194:
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
case 196:
            var3['partyStatus'] = var6;
            var6 = new Array(0);
            var3['avatarsToRender'] = var6;
            var6 = 0;
            var3['maxPartySize'] = var6;
            var3['name'] = var5;
            var3['ctaText'] = var4;
            var2 = var3;
case 189:
            return var2;
case 79:
            return var1;
case 65:
            return var1;
        }
    };
    var3['createActivityInviteEmbed'] = var2;
    return var1;
})();
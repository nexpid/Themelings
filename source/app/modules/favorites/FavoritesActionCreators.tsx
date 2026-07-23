// app/modules/favorites/FavoritesActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var1 = function getNextPositionFromChannels(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var10 = arg1;
            var8 = var10;
            var1 = 0;
            var4 = global;
            var3 = null;
            var2 = 0;
            for(var5 in var8)
case 36:
            {
                var14 = var1;
                var2 = var14;
case 37:
                var11 = var5;
                var11 = var10[var11];
                var12 = var3 != var11;
                if(!var12) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var13 = var11.position;
                var12 = var3 != var13;
case 38:
                var1 = var14;
                if(!var12) { _fun0004_ip = 36; continue _fun0004 }
case 40:
                var13 = var4.Math;
                var12 = var13.max;
                var11 = var11.position;
                var1 = var12.bind(var13)(var14, var11);
                _fun0004_ip = 36; continue _fun0004;
            }
case 41:
            var1 = 1;
            var1 = var2 + var1;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function cleanFavoriteChannels(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var14 = arg1;
            var12 = var14;
            var1 = undefined;
            var7 = 7;
            var6 = null;
            var5 = 6;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            for(var9 in var12)
case 42:
            {
case 43:
                var16 = var9;
                var18 = var14[var16];
                if(!(var6 == var18)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                var15 = delete var14[var16];
                _fun0005_ip = 42; continue _fun0005;
case 44:
                var17 = var18.type;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var5];
                var15 = var19.bind(var1)(var15);
                var15 = var15.FavoriteChannelType;
                var15 = var15.CATEGORY;
                if(var17 === var15) { _fun0005_ip = 42; continue _fun0005 }
case 46:
                var17 = _closure1_slot4;
                var15 = var17.getChannel;
                var15 = var15.bind(var17)(var16);
                if(!(var6 == var15)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var19 = var18.channelType;
                var20 = var6 == var19;
                var17 = undefined;
                if(var20) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var17 = var19.value;
case 49:
                if(!(var6 != var17)) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var21 = _closure1_slot3;
                var20 = var21.has;
                var20 = var20.bind(var21)(var17);
                var4 = var15;
                var3 = var19;
                var2 = var17;
                if(var20) { _fun0005_ip = 42; continue _fun0005 }
case 51:
                var20 = delete var14[var16];
                var4 = var15;
                var3 = var19;
                var2 = var17;
                _fun0005_ip = 42; continue _fun0005;
case 47:
                var17 = var18.channelType;
                if(!(var6 == var17)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var19 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var7];
                var17 = var19.bind(var1)(var17);
                var20 = var17.UInt32Value;
                var19 = var20.create;
                var17 = {};
                var21 = var15.type;
                var17['value'] = var21;
                var17 = var19.bind(var20)(var17);
                var18['channelType'] = var17;
case 53:
                var17 = var15.isPrivate;
                var17 = var17.bind(var15)();
                if(var17) { _fun0005_ip = 55; continue _fun0005 }
case 24:
                var20 = _closure1_slot5;
                var19 = var20.can;
                var18 = _closure1_slot8;
                var18 = var18.VIEW_CHANNEL;
                var17 = var19.bind(var20)(var18, var15);
case 55:
                var4 = var15;
                if(var17) { _fun0005_ip = 42; continue _fun0005 }
case 56:
                var16 = delete var14[var16];
                var4 = var15;
                _fun0005_ip = 42; continue _fun0005;
            }
case 57:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function cleanupChannelParentId(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var2 = var6[var1];
            var3 = null;
            if(!(var3 != var2)) { _fun0006_ip = 48; continue _fun0006 }
case 58:
            var5 = var2.parentId;
            var4 = _closure1_slot7;
            if(!(var5 !== var4)) { _fun0006_ip = 48; continue _fun0006 }
case 33:
            var4 = var2.parentId;
            var5 = var3 != var4;
            var4 = null;
            if(!var5) { _fun0006_ip = 59; continue _fun0006 }
case 43:
            var5 = var2.parentId;
            var4 = var6[var5];
case 59:
            var3 = var3 != var4;
            if(!var3) { _fun0006_ip = 60; continue _fun0006 }
case 44:
            var5 = var4.type;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var6 = var6[var4];
            var4 = undefined;
            var4 = var7.bind(var4)(var6);
            var4 = var4.FavoriteChannelType;
            var4 = var4.CATEGORY;
            var3 = var5 === var4;
case 60:
            if(var3) { _fun0006_ip = 48; continue _fun0006 }
case 61:
            var1 = _closure1_slot7;
            var2['parentId'] = var1;
case 48:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function hasReachedLimit(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot12;
            var6 = undefined;
            var1 = var1.bind(var6)(var5);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.getFavoritesAccess;
            var1 = var1.bind(var3)();
            var3 = var1.favoriteLimit;
            var1 = 0;
            var4 = var3 <= var1;
            var1 = !var4;
            if(var4) { _fun0007_ip = 62; continue _fun0007 }
case 44:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 9;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.size;
            var2 = var2.bind(var4)(var5);
            var1 = var2 >= var3;
case 62:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function showLimitReachedAlert() {
        var3 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 10;
        var2 = var11[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var10 = _closure1_slot0;
        var5 = 11;
        var6 = var11[var5];
        var6 = var10.bind(var1)(var6);
        var8 = var6.intl;
        var7 = var8.string;
        var6 = var11[var5];
        var6 = var10.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6["+XYXtZ"];
        var6 = var7.bind(var8)(var6);
        var2['title'] = var6;
        var6 = var11[var5];
        var6 = var10.bind(var1)(var6);
        var8 = var6.intl;
        var7 = var8.formatToPlainString;
        var5 = var11[var5];
        var5 = var10.bind(var1)(var5);
        var5 = var5.t;
        var6 = var5.JaIyFi;
        var5 = {};
        var9 = 8;
        var9 = var11[var9];
        var10 = var10.bind(var1)(var9);
        var9 = var10.getFavoritesAccess;
        var9 = var9.bind(var10)();
        var9 = var9.favoriteLimit;
        var5['count'] = var9;
        var5 = var7.bind(var8)(var6, var5);
        var2['body'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function onSaveFailed() {
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 10;
        var2 = var9[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var8 = _closure1_slot0;
        var5 = 11;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.iufib1;
        var6 = var7.bind(var10)(var6);
        var2['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.eAn6z2;
        var5 = var6.bind(var7)(var5);
        var2['body'] = var5;
        var5 = function onCloseCallback() {
            var1 = global;
            var1 = var1.window;
            var2 = var1.location;
            var1 = var2.reload;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var2['onCloseCallback'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function getFavoritesCount(arg1) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.keys;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = var1.length;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function getAnalyticsChannelType(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var1 = var1.FavoriteChannelType;
            var6 = var1.CATEGORY;
            var2 = null;
            var5 = arg2;
            var1 = null;
            if(!(var5 !== var6)) { _fun0008_ip = 63; continue _fun0008 }
case 43:
            var6 = _closure1_slot4;
            var5 = var6.getChannel;
            var4 = arg1;
            var4 = var5.bind(var6)(var4);
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0008_ip = 64; continue _fun0008 }
case 65:
            var3 = var4.type;
case 64:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var2 = var3;
case 66:
            var1 = var2;
case 63:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var5 = function addFavoriteChannels(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var3 = arguments[2];
            var1 = arg2;
            var _closure2_slot0 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var3 = 'channel_context_menu';
case 68:
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var1;
            var4 = var5.filter;
            var3 = function(arg1) {
                var3 = _closure1_slot6;
                var2 = var3.isFavorite;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            _closure2_slot2 = var3;
            var4 = var3.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0009_ip = 52; continue _fun0009 }
case 30:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 12;
            var6 = var8[var4];
            var6 = var5.bind(var1)(var6);
            var7 = var6.PreloadedUserSettingsActionCreators;
            var6 = var7.updateAsync;
            var4 = var8[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.UserSettingsDelay;
            var10 = var4.FREQUENT_USER_ACTION;
            var9 = _closure1_slot16;
            var12 = 'favorites';
            var11 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var16 = arg1;
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var14 = var3.bind(var1)(var2);
                    var5 = var14.bind(var1)();
                    var3 = var5.done;
                    var2 = false;
                    var13 = 13;
                    var12 = 6;
                    var10 = null;
                    var9 = 7;
                    var8 = '';
                    var7 = var5;
                    var6 = false;
                    if(var3) { _fun0010_ip = 70; continue _fun0010 }
case 7:
                    var21 = var7.value;
                    var5 = _closure1_slot14;
                    var3 = var16.favoriteChannels;
                    var5 = var5.bind(var1)(var3);
                    var3 = var6;
                    if(var5) { _fun0010_ip = 71; continue _fun0010 }
case 41:
                    var17 = _closure1_slot4;
                    var5 = var17.getChannel;
                    var25 = var5.bind(var17)(var21);
                    var17 = var16.favoriteChannels;
                    var22 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var5 = var20[var12];
                    var5 = var22.bind(var1)(var5);
                    var19 = var5.FavoriteChannel;
                    var18 = var19.create;
                    var5 = {};
                    var5['nickname'] = var8;
                    var20 = var20[var12];
                    var20 = var22.bind(var1)(var20);
                    var20 = var20.FavoriteChannelType;
                    var20 = var20.REFERENCE_ORIGINAL;
                    var5['type'] = var20;
                    var22 = var10 != var25;
                    var20 = undefined;
                    if(!var22) { _fun0010_ip = 72; continue _fun0010 }
case 16:
                    var23 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var22 = var22[var9];
                    var22 = var23.bind(var1)(var22);
                    var24 = var22.UInt32Value;
                    var23 = var24.create;
                    var22 = {};
                    var25 = var25.type;
                    var22['value'] = var25;
                    var20 = var23.bind(var24)(var22);
case 72:
                    var5['channelType'] = var20;
                    var22 = _closure1_slot11;
                    var20 = var16.favoriteChannels;
                    var20 = var22.bind(var1)(var20);
                    var5['position'] = var20;
                    var20 = _closure2_slot0;
                    if(!(var10 == var20)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                    var20 = _closure1_slot7;
                    _fun0010_ip = 24; continue _fun0010;
case 73:
                    var20 = _closure2_slot0;
case 24:
                    var5['parentId'] = var20;
                    var5 = var18.bind(var19)(var5);
                    var17[var21] = var5;
                    var17 = _closure1_slot12;
                    var5 = var16.favoriteChannels;
                    var5 = var17.bind(var1)(var5);
                    var17 = _closure1_slot13;
                    var5 = var16.favoriteChannels;
                    var5 = var17.bind(var1)(var5, var21);
                    var22 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var17 = var5[var13];
                    var20 = var22.bind(var1)(var17);
                    var19 = var20.trackFavoritesGuildAddToFavorites;
                    var18 = _closure2_slot1;
                    var17 = _closure1_slot18;
                    var5 = var5[var12];
                    var5 = var22.bind(var1)(var5);
                    var5 = var5.FavoriteChannelType;
                    var5 = var5.REFERENCE_ORIGINAL;
                    var17 = var17.bind(var1)(var21, var5);
                    var21 = _closure1_slot17;
                    var5 = var16.favoriteChannels;
                    var5 = var21.bind(var1)(var5);
                    var5 = var19.bind(var20)(var18, var17, var5);
                    var17 = var14.bind(var1)();
                    var5 = var17.done;
                    var7 = var17;
                    var6 = true;
                    if(var5) { _fun0010_ip = 70; continue _fun0010 }
case 75:
                    _fun0010_ip = 7; continue _fun0010;
case 71:
                    var4 = _closure1_slot15;
                    var4 = var4.bind(var1)();
                    if(var3) { _fun0010_ip = 70; continue _fun0010 }
case 76:
                    return var2;
case 70:
                    return var1;
                }
            };
            var13 = var7;
            var2 = var13[var6](var12, var11, var10, var9, var8);
case 52:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function removeFavoriteChannel(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var3 = arguments[1];
            var _closure2_slot0 = var7;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0011_ip = 29; continue _fun0011 }
case 77:
            var3 = {};
case 29:
            var6 = var3.trackAnalytics;
            if(!(var6 === var1)) { _fun0011_ip = 78; continue _fun0011 }
case 3:
            var6 = true;
case 78:
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var1;
            var _closure2_slot3 = var1;
            var5 = _closure1_slot6;
            var4 = var5.getFavorite;
            var5 = var4.bind(var5)(var7);
            _closure2_slot2 = var5;
            var4 = null;
            if(!(var4 != var5)) { _fun0011_ip = 79; continue _fun0011 }
case 80:
            var4 = null;
            if(!var6) { _fun0011_ip = 81; continue _fun0011 }
case 82:
            var6 = _closure1_slot18;
            var5 = var5.type;
            var4 = var6.bind(var1)(var7, var5);
case 81:
            _closure2_slot3 = var4;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 12;
            var6 = var8[var4];
            var6 = var5.bind(var1)(var6);
            var7 = var6.PreloadedUserSettingsActionCreators;
            var6 = var7.updateAsync;
            var4 = var8[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.UserSettingsDelay;
            var10 = var4.INFREQUENT_USER_ACTION;
            var9 = _closure1_slot16;
            var12 = 'favorites';
            var11 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = arg1;
                    var4 = var2.favoriteChannels;
                    var1 = _closure2_slot0;
                    var1 = delete var4[var1];
                    var1 = _closure2_slot2;
                    var5 = var1.type;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.FavoriteChannelType;
                    var4 = var4.CATEGORY;
                    if(!(var5 === var4)) { _fun0012_ip = 83; continue _fun0012 }
case 35:
                    var8 = var2.favoriteChannels;
                    for(var4 in var8)
case 84:
                    {
case 85:
                        var11 = var4;
                        var10 = var2.favoriteChannels;
                        var10 = var10[var11];
                        var12 = var10.parentId;
                        var10 = _closure2_slot0;
                        if(var12 !== var10) { _fun0012_ip = 84; continue _fun0012 }
case 86:
                        var10 = var2.favoriteChannels;
                        var11 = var10[var11];
                        var10 = _closure1_slot7;
                        var11['parentId'] = var10;
                        _fun0012_ip = 84; continue _fun0012;
                    }
case 83:
                    var5 = _closure1_slot12;
                    var4 = var2.favoriteChannels;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot1;
                    if(!var4) { _fun0012_ip = 87; continue _fun0012 }
case 88:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 13;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.trackFavoritesGuildRemoveFromFavorites;
                    var3 = _closure2_slot3;
                    var6 = _closure1_slot17;
                    var2 = var2.favoriteChannels;
                    var2 = var6.bind(var1)(var2);
                    var2 = var4.bind(var5)(var3, var2);
case 87:
                    return var1;
                }
            };
            var13 = var7;
            var2 = var13[var6](var12, var11, var10, var9, var8);
case 79:
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var1 = function setProtoFavoriteCategoryCollapsed(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0013_ip = 7; continue _fun0013 }
case 89:
            var5 = var3.type;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var6 = var6[var4];
            var4 = undefined;
            var4 = var7.bind(var4)(var6);
            var4 = var4.FavoriteChannelType;
            var4 = var4.CATEGORY;
            var1 = var5 === var4;
case 7:
            if(!var1) { _fun0013_ip = 65; continue _fun0013 }
case 90:
            var4 = var3.collapsed;
            var1 = var4 !== var2;
case 65:
            if(!var1) { _fun0013_ip = 91; continue _fun0013 }
case 82:
            var3['collapsed'] = var2;
            var1 = true;
case 91:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function updateFavoriteCategoriesCollapsed(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 12;
        var6 = var8[var4];
        var1 = undefined;
        var6 = var5.bind(var1)(var6);
        var7 = var6.PreloadedUserSettingsActionCreators;
        var6 = var7.updateAsync;
        var4 = var8[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.UserSettingsDelay;
        var10 = var4.FREQUENT_USER_ACTION;
        var9 = _closure1_slot16;
        var12 = 'favorites';
        var11 = function(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                if(var2) { _fun0014_ip = 92; continue _fun0014 }
case 29:
                var2 = false;
                return var2;
case 92:
                return var1;
            }
        };
        var13 = var7;
        var2 = var13[var6](var12, var11, var10, var9, var8);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.THREAD_CHANNEL_TYPES;
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.FAVORITES_UNCATEGORIZED_PARENT_ID;
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Permissions;
    var _closure1_slot8 = var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/favorites/FavoritesActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function addFavoriteChannel(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0015_ip = 89; continue _fun0015 }
case 93:
            var5 = 'channel_context_menu';
case 89:
            var4 = _closure1_slot19;
            var3 = new Array(1);
            var2 = arg1;
            var3[0] = var2;
            var2 = arg2;
            var2 = var4.bind(var1)(var3, var2, var5);
            return var1;
        }
    };
    var3['addFavoriteChannel'] = var6;
    var3['addFavoriteChannels'] = var5;
    var3['removeFavoriteChannel'] = var4;
    var4 = function setFavoriteChannelNickname(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var4 = _closure1_slot6;
            var3 = var4.isFavorite;
            var3 = var3.bind(var4)(var5);
            if(!var3) { _fun0016_ip = 94; continue _fun0016 }
case 37:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var5 = var8[var3];
            var4 = undefined;
            var5 = var7.bind(var4)(var5);
            var6 = var5.PreloadedUserSettingsActionCreators;
            var5 = var6.updateAsync;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.UserSettingsDelay;
            var10 = var3.INFREQUENT_USER_ACTION;
            var9 = _closure1_slot16;
            var12 = 'favorites';
            var11 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.favoriteChannels;
                    var1 = _closure2_slot0;
                    var2 = var2[var1];
                    var4 = _closure2_slot1;
                    var1 = null;
                    var4 = var1 != var4;
                    var1 = '';
                    if(!var4) { _fun0017_ip = 95; continue _fun0017 }
case 37:
                    var1 = _closure2_slot1;
case 95:
                    var2['nickname'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var6;
            var1 = var13[var5](var12, var11, var10, var9, var8);
case 94:
            var1 = undefined;
            return var1;
        }
    };
    var3['setFavoriteChannelNickname'] = var4;
    var4 = function addFavoriteCategory(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = arguments[1];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0018_ip = 36; continue _fun0018 }
case 77:
            var3 = 'modal';
case 36:
            var _closure2_slot1 = var3;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 14;
            var4 = var8[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.fromTimestamp;
            var4 = global;
            var7 = var4.Date;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var4 = var5.bind(var6)(var4);
            _closure2_slot2 = var4;
            var5 = _closure1_slot0;
            var4 = 12;
            var6 = var8[var4];
            var6 = var5.bind(var1)(var6);
            var7 = var6.PreloadedUserSettingsActionCreators;
            var6 = var7.updateAsync;
            var4 = var8[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.UserSettingsDelay;
            var10 = var4.FREQUENT_USER_ACTION;
            var9 = _closure1_slot16;
            var12 = 'favorites';
            var11 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = arg1;
                    var5 = _closure1_slot14;
                    var4 = var3.favoriteChannels;
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    if(var4) { _fun0019_ip = 96; continue _fun0019 }
case 97:
                    var7 = var3.favoriteChannels;
                    var6 = _closure2_slot2;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 6;
                    var5 = var11[var4];
                    var5 = var10.bind(var2)(var5);
                    var12 = var5.FavoriteChannel;
                    var9 = var12.create;
                    var5 = {};
                    var13 = _closure2_slot0;
                    var5['nickname'] = var13;
                    var13 = var11[var4];
                    var13 = var10.bind(var2)(var13);
                    var13 = var13.FavoriteChannelType;
                    var13 = var13.CATEGORY;
                    var5['type'] = var13;
                    var14 = _closure1_slot11;
                    var13 = var3.favoriteChannels;
                    var13 = var14.bind(var2)(var13);
                    var5['position'] = var13;
                    var13 = _closure1_slot7;
                    var5['parentId'] = var13;
                    var5 = var9.bind(var12)(var5);
                    var7[var6] = var5;
                    var5 = 13;
                    var5 = var11[var5];
                    var7 = var10.bind(var2)(var5);
                    var6 = var7.trackFavoritesGuildAddToFavorites;
                    var5 = _closure2_slot1;
                    var9 = _closure1_slot18;
                    var8 = _closure2_slot2;
                    var4 = var11[var4];
                    var4 = var10.bind(var2)(var4);
                    var4 = var4.FavoriteChannelType;
                    var4 = var4.CATEGORY;
                    var4 = var9.bind(var2)(var8, var4);
                    var8 = _closure1_slot17;
                    var3 = var3.favoriteChannels;
                    var3 = var8.bind(var2)(var3);
                    var3 = var6.bind(var7)(var5, var4, var3);
                    return var2;
case 96:
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var2)();
                    var1 = false;
                    return var1;
                }
            };
            var13 = var7;
            var2 = var13[var6](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['addFavoriteCategory'] = var4;
    var4 = function removeFavoriteCategory(arg1) {
        var3 = _closure1_slot20;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['removeFavoriteCategory'] = var4;
    var4 = function setFavoriteCategoryCollapsed(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var4 = _closure1_slot6;
            var3 = var4.getFavorite;
            var4 = var3.bind(var4)(var5);
            var3 = null;
            var3 = var3 != var4;
            if(!var3) { _fun0020_ip = 9; continue _fun0020 }
case 98:
            var5 = var4.type;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var6 = var6[var4];
            var4 = undefined;
            var4 = var7.bind(var4)(var6);
            var4 = var4.FavoriteChannelType;
            var4 = var4.CATEGORY;
            var3 = var5 === var4;
case 9:
            if(!var3) { _fun0020_ip = 99; continue _fun0020 }
case 100:
            var3 = _closure1_slot22;
            var2 = undefined;
            var1 = function(arg1) {
                var4 = _closure1_slot21;
                var1 = arg1;
                var3 = var1.favoriteChannels;
                var2 = _closure2_slot0;
                var3 = var3[var2];
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var3.bind(var2)(var1);
case 99:
            var1 = undefined;
            return var1;
        }
    };
    var3['setFavoriteCategoryCollapsed'] = var4;
    var4 = function setAllFavoriteCategoriesCollapsed(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot22;
        var1 = undefined;
        var2 = function(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var12 = arg1;
                var10 = var12.favoriteChannels;
                var2 = false;
                var3 = undefined;
                var1 = false;
                for(var7 in var10)
case 97:
                {
                    var1 = var2;
case 95:
                    var14 = var7;
                    var15 = _closure1_slot21;
                    var13 = var12.favoriteChannels;
                    var14 = var13[var14];
                    var13 = _closure2_slot0;
                    var13 = var15.bind(var3)(var14, var13);
                    if(!var13) { _fun0021_ip = 97; continue _fun0021 }
case 101:
                    var2 = true;
                    _fun0021_ip = 97; continue _fun0021;
                }
case 102:
                return var1;
            }
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['setAllFavoriteCategoriesCollapsed'] = var4;
    var4 = function updateFavoriteChannels(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = var2.length;
            var2 = 0;
            if(!(var2 !== var3)) { _fun0022_ip = 103; continue _fun0022 }
case 29:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 12;
            var5 = var8[var3];
            var4 = undefined;
            var5 = var7.bind(var4)(var5);
            var6 = var5.PreloadedUserSettingsActionCreators;
            var5 = var6.updateAsync;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.UserSettingsDelay;
            var10 = var3.FREQUENT_USER_ACTION;
            var9 = _closure1_slot16;
            var12 = 'favorites';
            var11 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var8 = arg1;
                    var4 = _closure1_slot9;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var4 = var7.bind(var1)();
                    var3 = var4.done;
                    var6 = null;
                    var5 = var4;
                    var4 = undefined;
                    if(var3) { _fun0023_ip = 104; continue _fun0023 }
case 98:
                    var3 = var5.value;
                    var11 = var3.id;
                    var9 = var3.position;
                    if(!(var6 != var9)) { _fun0023_ip = 105; continue _fun0023 }
case 106:
                    var9 = var8.favoriteChannels;
                    var10 = var9[var11];
                    var9 = var3.position;
                    var10['position'] = var9;
case 105:
                    var9 = var3.parent_id;
                    if(!(var1 !== var9)) { _fun0023_ip = 52; continue _fun0023 }
case 85:
                    var9 = var8.favoriteChannels;
                    var10 = var9[var11];
                    var3 = var3.parent_id;
                    var9 = var3;
                    if(!(var6 == var3)) { _fun0023_ip = 86; continue _fun0023 }
case 107:
                    var9 = _closure1_slot7;
case 86:
                    var10['parentId'] = var9;
                    var10 = _closure1_slot13;
                    var9 = var8.favoriteChannels;
                    var9 = var10.bind(var1)(var9, var11);
                    var4 = var3;
case 52:
                    var9 = var7.bind(var1)();
                    var3 = var9.done;
                    var5 = var9;
                    if(!var3) { _fun0023_ip = 98; continue _fun0023 }
case 104:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.trackFavoritesGuildOrderUpdated;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var13 = var6;
            var1 = var13[var5](var12, var11, var10, var9, var8);
case 103:
            var1 = undefined;
            return var1;
        }
    };
    var3['updateFavoriteChannels'] = var4;
    var4 = function updateFavoriteChannelParent(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 12;
        var6 = var8[var4];
        var1 = undefined;
        var6 = var5.bind(var1)(var6);
        var7 = var6.PreloadedUserSettingsActionCreators;
        var6 = var7.updateAsync;
        var4 = var8[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.UserSettingsDelay;
        var10 = var4.FREQUENT_USER_ACTION;
        var9 = _closure1_slot16;
        var12 = 'favorites';
        var11 = function(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = arg1;
                var4 = var2.favoriteChannels;
                var3 = _closure2_slot0;
                var4 = var4[var3];
                var5 = _closure2_slot1;
                var3 = null;
                if(!(var3 == var5)) { _fun0024_ip = 108; continue _fun0024 }
case 3:
                var3 = _closure1_slot7;
                _fun0024_ip = 98; continue _fun0024;
case 108:
                var3 = _closure2_slot1;
case 98:
                var4['parentId'] = var3;
                var4 = _closure1_slot13;
                var3 = var2.favoriteChannels;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var13 = var7;
        var2 = var13[var6](var12, var11, var10, var9, var8);
        return var1;
    };
    var3['updateFavoriteChannelParent'] = var4;
    var4 = function toggleFavoriteGuildMuted() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 12;
        var6 = var5[var3];
        var1 = undefined;
        var6 = var4.bind(var1)(var6);
        var7 = var6.PreloadedUserSettingsActionCreators;
        var6 = var7.updateAsync;
        var3 = var5[var3];
        var3 = var4.bind(var1)(var3);
        var3 = var3.UserSettingsDelay;
        var9 = var3.INFREQUENT_USER_ACTION;
        var8 = _closure1_slot16;
        var11 = 'favorites';
        var10 = function(arg1) {
            var2 = arg1;
            var1 = var2.muted;
            var1 = !var1;
            var2['muted'] = var1;
            var1 = undefined;
            return var1;
        };
        var12 = var7;
        var2 = var12[var6](var11, var10, var9, var8, var7);
        return var1;
    };
    var3['toggleFavoriteGuildMuted'] = var4;
    var2 = function setFavoritesGuildVisibility(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = arguments[1];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0025_ip = 92; continue _fun0025 }
case 77:
            var3 = 'settings_page';
case 92:
            var _closure2_slot1 = var3;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 12;
            var6 = var8[var4];
            var6 = var5.bind(var1)(var6);
            var7 = var6.PreloadedUserSettingsActionCreators;
            var6 = var7.updateAsync;
            var4 = var8[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.UserSettingsDelay;
            var10 = var4.INFREQUENT_USER_ACTION;
            var9 = _closure1_slot16;
            var12 = 'favorites';
            var11 = function(arg1) {
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var2 = var6[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var8 = var2.BoolValue;
                var7 = var8.create;
                var3 = {};
                var5 = _closure2_slot0;
                var3['value'] = var5;
                var7 = var7.bind(var8)(var3);
                var3 = arg1;
                var3['guildVisible'] = var7;
                var3 = 13;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.trackFavoritesGuildVisibilitySettingToggled;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            };
            var13 = var7;
            var2 = var13[var6](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['setFavoritesGuildVisibility'] = var2;
    return var1;
})();
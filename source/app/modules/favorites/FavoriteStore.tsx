// app/modules/favorites/FavoriteStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function initializeFromUserSettings() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = _closure1_slot7;
            var1 = var1.settings;
            var5 = var1.favorites;
            var1 = null;
            var4 = var1 == var5;
            var9 = undefined;
            var2 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var5.muted;
case 6:
            var6 = var1 != var2;
            if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = var2;
case 8:
            var2 = {};
            var4 = var1 == var5;
            var13 = undefined;
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var13 = var5.favoriteChannels;
case 10:
            if(!(var1 != var13)) { _fun0002_ip = 12; continue _fun0002 }
case 5:
            var11 = var13;
            var4 = '';
            for(var7 in var11)
case 13:
            {
case 14:
                var15 = var7;
                var17 = var13[var15];
                var14 = {};
                var14['id'] = var15;
                var18 = var17.nickname;
                var16 = null;
                if(!(var4 !== var18)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var16 = var17.nickname;
case 15:
                var14['nickname'] = var16;
                var16 = var17.type;
                var14['type'] = var16;
                var18 = var17.channelType;
                var19 = var1 == var18;
                var16 = undefined;
                if(var19) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var16 = var18.value;
case 17:
                var14['channelType'] = var16;
                var16 = var17.position;
                var14['order'] = var16;
                var19 = var17.parentId;
                var18 = _closure1_slot9;
                var16 = null;
                if(!(var19 !== var18)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var16 = var17.parentId;
case 19:
                var14['parentId'] = var16;
                var2[var15] = var14;
                _fun0002_ip = 13; continue _fun0002;
            }
case 12:
            var7 = var1 == var5;
            var4 = undefined;
            if(var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var5 = var5.guildVisible;
            var7 = var1 == var5;
            var4 = undefined;
            if(var7) { _fun0002_ip = 21; continue _fun0002 }
case 23:
            var4 = var5.value;
case 21:
            var5 = var4;
            if(!(var1 == var5)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 9;
            var1 = var8[var1];
            var7 = var7.bind(var9)(var1);
            var1 = var7.isEmpty;
            var1 = var1.bind(var7)(var2);
            var5 = !var1;
case 24:
            var1 = false;
            var4 = var1 === var4;
            var1 = _closure1_slot13;
            var1 = var1 !== var6;
            if(var1) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var7 = _closure1_slot14;
            var1 = var7 !== var5;
case 26:
            if(var1) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var7 = _closure1_slot15;
            var1 = var7 !== var4;
case 28:
            if(var1) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 9;
            var7 = var10[var7];
            var9 = var8.bind(var9)(var7);
            var8 = var9.isEqual;
            var7 = _closure1_slot12;
            var7 = var8.bind(var9)(var7, var2);
            var1 = !var7;
case 30:
            if(!var1) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            _closure1_slot13 = var6;
            _closure1_slot14 = var5;
            _closure1_slot15 = var4;
            _closure1_slot12 = var2;
            var1 = true;
case 32:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var4.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var4.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.createChannelRecord;
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.FAVORITES_UNCATEGORIZED_PARENT_ID;
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.ChannelTypes;
    var _closure1_slot10 = var8;
    var7 = var7.FAVORITES;
    var _closure1_slot11 = var7;
    var7 = {};
    var _closure1_slot12 = var7;
    var7 = false;
    var _closure1_slot13 = var7;
    var _closure1_slot14 = var7;
    var _closure1_slot15 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var4.bind(var1)(var7);
    var7 = var7.Store;
    var2 = function(arg1) {
        var4 = function FavoriteStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot16;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 36; continue _fun0003;
case 34:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 36:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var3 = var5.waitFor;
            var1 = _closure1_slot7;
            var1 = var3.bind(var5)(var1);
            var4 = _closure1_slot17;
            var1 = undefined;
            var3 = var4.bind(var1)();
            var3 = var5.syncWith;
            var6 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var6;
            var2 = var3.bind(var5)(var2, var4);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFavoriteChannels';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'favoriteGuildMuted';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'favoriteGuildEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'favoriteGuildExplicitlyHidden';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isFavorite';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                var2 = _closure1_slot12;
                var2 = var2[var4];
                var1 = var3 != var2;
case 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getFavorite';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var1 = undefined;
                return var1;
case 39:
                var1 = _closure1_slot12;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getCategoryRecord';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot12;
                var2 = var3 in var1;
                var7 = null;
                var1 = null;
                if(!var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var2 = _closure1_slot12;
                var2 = var2[var3];
                var6 = var2.type;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 10;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var2 = var2.FavoriteChannelType;
                var2 = var2.CATEGORY;
                var1 = null;
                if(!(var6 === var2)) { _fun0006_ip = 41; continue _fun0006 }
case 43:
                var2 = _closure1_slot12;
                var6 = var2[var3];
                var3 = _closure1_slot8;
                var2 = {};
                var8 = var6.id;
                var2['id'] = var8;
                var8 = var6.nickname;
                var9 = var7 != var8;
                var7 = '';
                if(!var9) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var7 = var8;
case 44:
                var2['name'] = var7;
                var7 = _closure1_slot10;
                var7 = var7.GUILD_CATEGORY;
                var2['type'] = var7;
                var6 = var6.order;
                var2['position'] = var6;
                var5 = _closure1_slot11;
                var2['guild_id'] = var5;
                var1 = var3.bind(var4)(var2);
case 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getNickname';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = this;
                var2 = var3.getFavorite;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                var2 = var4.nickname;
case 46:
                var3 = var3 != var2;
                var1 = undefined;
                if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var1 = var2;
case 48:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getFavoritesCount';
        var5['key'] = var7;
        var7 = function value() {
            var4 = this;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = var4.getFavoriteChannels;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            var1 = var1.length;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'hasStoredFavorites';
        var5['key'] = var7;
        var6 = function value() {
            var4 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isEmpty;
            var1 = var4.getFavoriteChannels;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var7);
    var2 = 'FavoriteStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var12 = var4.bind(var1)(var2);
    var2 = var8.prototype;
    var4 = Object.create(var2, {constructor: {value: var8}});
    var11 = {};
    var13 = var4;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/FavoriteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
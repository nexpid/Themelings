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
            var7 = var1.favorites;
            var1 = null;
            var4 = var1 == var7;
            var9 = undefined;
            var2 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var7.muted;
case 6:
            var6 = var1 != var2;
            if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = var2;
case 8:
            var4 = {};
            var2 = {};
            var5 = var1 == var7;
            var18 = undefined;
            if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var18 = var7.favoriteChannels;
case 10:
            if(!(var1 != var18)) { _fun0002_ip = 12; continue _fun0002 }
case 4:
            var16 = var18;
            var12 = '';
            var11 = 9;
            var10 = undefined;
            var8 = undefined;
            var5 = undefined;
            for(var13 in var16)
case 13:
            {
case 14:
                var22 = var13;
                var19 = var18[var22];
                var21 = {};
                var21['id'] = var22;
                var23 = var19.nickname;
                var20 = null;
                if(!(var12 !== var23)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var20 = var19.nickname;
case 15:
                var21['nickname'] = var20;
                var20 = var19.type;
                var21['type'] = var20;
                var20 = var19.position;
                var21['order'] = var20;
                var24 = var19.parentId;
                var23 = _closure1_slot9;
                var20 = null;
                if(!(var24 !== var23)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var20 = var19.parentId;
case 17:
                var21['parentId'] = var20;
                var4[var22] = var21;
                var20 = var19.type;
                var23 = _closure1_slot0;
                var19 = _closure1_slot1;
                var19 = var19[var11];
                var19 = var23.bind(var9)(var19);
                var19 = var19.FavoriteChannelType;
                var19 = var19.CATEGORY;
                if(var20 !== var19) { _fun0002_ip = 13; continue _fun0002 }
case 19:
                var23 = _closure1_slot8;
                var19 = {};
                var20 = var21.id;
                var19['id'] = var20;
                var20 = var21.nickname;
                var25 = var1 != var20;
                var24 = var12;
                if(!var25) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var24 = var20;
case 20:
                var19['name'] = var24;
                var24 = _closure1_slot10;
                var24 = var24.GUILD_CATEGORY;
                var19['type'] = var24;
                var24 = var21.order;
                var19['position'] = var24;
                var24 = _closure1_slot11;
                var19['guild_id'] = var24;
                var19 = var23.bind(var9)(var19);
                var10 = var21;
                var8 = var20;
                var5 = var19;
                if(var1 == var5) { _fun0002_ip = 13; continue _fun0002 }
case 22:
                var2[var22] = var19;
                var10 = var21;
                var8 = var20;
                var5 = var19;
                _fun0002_ip = 13; continue _fun0002;
            }
case 12:
            var8 = var1 == var7;
            var5 = undefined;
            if(var8) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var7 = var7.guildVisible;
            var8 = var1 == var7;
            var5 = undefined;
            if(var8) { _fun0002_ip = 23; continue _fun0002 }
case 25:
            var5 = var7.value;
case 23:
            if(!(var1 == var5)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 10;
            var1 = var8[var1];
            var7 = var7.bind(var9)(var1);
            var1 = var7.isEmpty;
            var1 = var1.bind(var7)(var4);
            var5 = !var1;
case 26:
            var1 = _closure1_slot14;
            var1 = var1 !== var6;
            if(var1) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var7 = _closure1_slot15;
            var1 = var7 !== var5;
case 28:
            if(var1) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 10;
            var7 = var10[var7];
            var9 = var8.bind(var9)(var7);
            var8 = var9.isEqual;
            var7 = _closure1_slot12;
            var7 = var8.bind(var9)(var7, var4);
            var1 = !var7;
case 30:
            if(!var1) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            _closure1_slot14 = var6;
            _closure1_slot15 = var5;
            _closure1_slot12 = var4;
            _closure1_slot13 = var2;
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
    var7 = {};
    var _closure1_slot13 = var7;
    var7 = false;
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
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'favoriteGuildEnabled';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
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
        var1[4] = var5;
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
        var1[5] = var5;
        var5 = {};
        var7 = 'getFavoriteCategories';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getCategoryRecord';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var1 = var2;
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
                if(var5) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var2 = var4.nickname;
case 43:
                var3 = var3 != var2;
                var1 = undefined;
                if(!var3) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var1 = var2;
case 45:
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
            var1 = 10;
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
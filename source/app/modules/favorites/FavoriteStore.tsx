// app/modules/favorites/FavoriteStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var4 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function initializeFromUserSettings() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = _closure1_slot7;
            var1 = var1.settings;
            var2 = var1.favorites;
            var10 = null;
            var4 = var10 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var4) { _fun0002_ip = 38; continue _fun0002 }
 32:
            var3 = var2.muted;
 38:
            var2 = var10 != var3;
            if(!var2) { _fun0002_ip = 48; continue _fun0002 }
 45:
            var2 = var3;
 48:
            _closure1_slot12 = var2;
            var2 = {};
            _closure1_slot11 = var2;
            var2 = _closure1_slot7;
            var2 = var2.settings;
            var2 = var2.favorites;
            var3 = var10 == var2;
            var9 = undefined;
            if(var3) { _fun0002_ip = 89; continue _fun0002 }
 83:
            var9 = var2.favoriteChannels;
 89:
            if(!(var10 != var9)) { _fun0002_ip = 213; continue _fun0002 }
 93:
            var7 = var9;
            var3 = '0';
            var2 = '';
            for(var4 in var7)
 114:
            {
 123:
                var14 = var4;
                var16 = var9[var14];
                var13 = _closure1_slot11;
                var12 = {};
                var12['id'] = var14;
                var17 = var16.nickname;
                var15 = null;
                if(!(var2 !== var17)) { _fun0002_ip = 158; continue _fun0002 }
 152:
                var15 = var16.nickname;
 158:
                var12['nickname'] = var15;
                var15 = var16.type;
                var12['type'] = var15;
                var15 = var16.position;
                var12['order'] = var15;
                var17 = var16.parentId;
                var15 = null;
                if(!(var3 !== var17)) { _fun0002_ip = 200; continue _fun0002 }
 194:
                var15 = var16.parentId;
 200:
                var12['parentId'] = var15;
                var13[var14] = var12;
                _fun0002_ip = 114; continue _fun0002;
            }
 211:
            return var1;
 213:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var8 = var7.ChannelTypes;
    var _closure1_slot9 = var8;
    var7 = var7.FAVORITES;
    var _closure1_slot10 = var7;
    var7 = {};
    var _closure1_slot11 = var7;
    var7 = false;
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var4.bind(var1)(var7);
    var7 = var7.Store;
    var2 = function(arg1) {
        var4 = function FavoriteStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
            var4 = _closure1_slot14;
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
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFavoriteChannels';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'favoriteServerMuted';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isFavorite';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0004_ip = 27; continue _fun0004 }
 12:
                var2 = _closure1_slot11;
                var2 = var2[var4];
                var1 = var3 != var2;
 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getFavorite';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var1 = null;
                if(!(var1 == var2)) { _fun0005_ip = 13; continue _fun0005 }
 9:
                var1 = undefined;
                return var1;
 13:
                var1 = _closure1_slot11;
                var1 = var1[var2];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCategoryRecord';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var1 = _closure1_slot11;
                var2 = var3 in var1;
                var7 = null;
                var1 = null;
                if(!var2) { _fun0006_ip = 161; continue _fun0006 }
 24:
                var2 = _closure1_slot11;
                var2 = var2[var3];
                var6 = var2.type;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 8;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var8.bind(var4)(var2);
                var2 = var2.FavoriteChannelType;
                var2 = var2.CATEGORY;
                var1 = null;
                if(!(var6 === var2)) { _fun0006_ip = 161; continue _fun0006 }
 77:
                var2 = _closure1_slot11;
                var6 = var2[var3];
                var3 = _closure1_slot8;
                var2 = {};
                var8 = var6.id;
                var2['id'] = var8;
                var8 = var6.nickname;
                var9 = var7 != var8;
                var7 = '';
                if(!var9) { _fun0006_ip = 120; continue _fun0006 }
 117:
                var7 = var8;
 120:
                var2['name'] = var7;
                var7 = _closure1_slot9;
                var7 = var7.GUILD_CATEGORY;
                var2['type'] = var7;
                var6 = var6.order;
                var2['position'] = var6;
                var5 = _closure1_slot10;
                var2['guild_id'] = var5;
                var1 = var3.bind(var4)(var2);
 161:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getNickname';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = this;
                var2 = var3.getFavorite;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if(var5) { _fun0007_ip = 34; continue _fun0007 }
 28:
                var2 = var4.nickname;
 34:
                var3 = var3 != var2;
                var1 = undefined;
                if(!var3) { _fun0007_ip = 46; continue _fun0007 }
 43:
                var1 = var2;
 46:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var7);
    var2 = 'FavoriteStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var12 = var4.bind(var1)(var2);
    var2 = var8.prototype;
    var4 = Object.create(var2, {constructor: {value: var8}});
    var11 = {};
    var13 = var4;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/favorites/FavoriteStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
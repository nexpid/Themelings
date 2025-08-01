// app/modules/opt_in_channels/FavoritesSuggestionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function handleChange() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot6;
            var1 = var3.getChannelId;
            var4 = var1.bind(var3)();
            var5 = null;
            if(!(var5 != var4)) { _fun0002_ip = 324; continue _fun0002 }
 26:
            var3 = _closure1_slot5;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            if(!(var5 != var1)) { _fun0002_ip = 324; continue _fun0002 }
 47:
            var3 = var1.guild_id;
            if(!(var5 != var3)) { _fun0002_ip = 324; continue _fun0002 }
 59:
            var3 = var1.guild_id;
            var6 = _closure1_slot10;
            var6 = var6[var4];
            if(!(var5 == var6)) { _fun0002_ip = 86; continue _fun0002 }
 76:
            var7 = _closure1_slot10;
            var6 = 0;
            var7[var4] = var6;
 86:
            var6 = var1.isThread;
            var6 = var6.bind(var1)();
            if(var6) { _fun0002_ip = 328; continue _fun0002 }
 102:
            var7 = _closure1_slot7;
            var6 = var7.isOptInEnabled;
            var6 = var6.bind(var7)(var3);
            if(!var6) { _fun0002_ip = 147; continue _fun0002 }
 120:
            var7 = _closure1_slot7;
            var6 = var7.isChannelOrParentOptedIn;
            var1 = var1.id;
            var1 = var6.bind(var7)(var3, var1);
            if(!var1) { _fun0002_ip = 328; continue _fun0002 }
 147:
            var6 = _closure1_slot10;
            var1 = var6[var4];
            var1 = var1 + 1;
            var6[var4] = var1;
            var1 = _closure1_slot8;
            var1 = var1[var3];
            if(!(var5 == var1)) { _fun0002_ip = 210; continue _fun0002 }
 174:
            var6 = _closure1_slot8;
            var1 = global;
            var1 = var1.Set;
            var7 = var1.prototype;
            var7 = Object.create(var7, {constructor: {value: var1}});
            var10 = var7;
            var1 = new var10[var1](var9);
            var1 = var1 instanceof Object ? var1 : var7;
            var6[var3] = var1;
 210:
            var6 = _closure1_slot7;
            var1 = var6.isFavorite;
            var1 = var1.bind(var6)(var3, var4);
            if(var1) { _fun0002_ip = 306; continue _fun0002 }
 229:
            var1 = _closure1_slot9;
            var1 = var1[var3];
            if(!(var5 != var1)) { _fun0002_ip = 264; continue _fun0002 }
 241:
            var1 = _closure1_slot9;
            var6 = var1[var3];
            var1 = var6.has;
            var6 = var1.bind(var6)(var4);
            var1 = undefined;
            if(var6) { _fun0002_ip = 304; continue _fun0002 }
 264:
            var6 = _closure1_slot10;
            var7 = var6[var4];
            var6 = 50;
            var6 = var7 > var6;
            var1 = undefined;
            if(!var6) { _fun0002_ip = 304; continue _fun0002 }
 284:
            var6 = _closure1_slot8;
            var7 = var6[var3];
            var6 = var7.add;
            var6 = var6.bind(var7)(var4);
            var1 = true;
 304:
            return var1;
 306:
            var1 = _closure1_slot8;
            var6 = var1[var3];
            var1 = var6.delete;
            var1 = var1.bind(var6)(var4);
 324:
            var1 = undefined;
            return var1;
 328:
            var1 = _closure1_slot10;
            var1 = delete var1[var4];
            var1 = _closure1_slot8;
            var1 = var1[var3];
            var1 = var5 != var1;
            if(!var1) { _fun0002_ip = 369; continue _fun0002 }
 351:
            var2 = _closure1_slot8;
            var3 = var2[var3];
            var2 = var3.delete;
            var1 = var2.bind(var3)(var4);
 369:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {};
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = {};
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function FavoritesSuggestionStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot11;
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
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var6 = this;
                var5 = var6.syncWith;
                var3 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = _closure1_slot12;
                var3 = var5.bind(var6)(var4, var3);
                var3 = null;
                if(!(var3 != var1)) { _fun0004_ip = 272; continue _fun0004 }
 46:
                var11 = var1.suggestedChannels;
                var10 = var1.dismissedSuggestions;
                var1 = var1.channelOpensByChannelId;
                if(!(var3 != var11)) { _fun0004_ip = 163; continue _fun0004 }
 68:
                var8 = var11;
                var4 = global;
                for(var5 in var8)
 81:
                {
 90:
                    var14 = var5;
                    var13 = _closure1_slot8;
                    var16 = var4.Set;
                    var18 = var11[var14];
                    var15 = var16.prototype;
                    var15 = Object.create(var15, {constructor: {value: var16}});
                    var19 = var15;
                    var12 = new var19[var16](var18, var17);
                    var12 = var12 instanceof Object ? var12 : var15;
                    if(!(var3 == var12)) { _fun0004_ip = 157; continue _fun0004 }
 131:
                    var15 = var4.Set;
                    var16 = var15.prototype;
                    var16 = Object.create(var16, {constructor: {value: var15}});
                    var19 = var16;
                    var15 = new var19[var15](var18);
                    var12 = var15 instanceof Object ? var15 : var16;
 157:
                    var13[var14] = var12;
                    _fun0004_ip = 81; continue _fun0004;
                }
 163:
                if(!(var3 != var10)) { _fun0004_ip = 262; continue _fun0004 }
 167:
                var8 = var10;
                var4 = global;
                for(var5 in var8)
 180:
                {
 189:
                    var13 = var5;
                    var12 = _closure1_slot9;
                    var15 = var4.Set;
                    var18 = var10[var13];
                    var14 = var15.prototype;
                    var14 = Object.create(var14, {constructor: {value: var15}});
                    var19 = var14;
                    var11 = new var19[var15](var18, var17);
                    var11 = var11 instanceof Object ? var11 : var14;
                    if(!(var3 == var11)) { _fun0004_ip = 256; continue _fun0004 }
 230:
                    var14 = var4.Set;
                    var15 = var14.prototype;
                    var15 = Object.create(var15, {constructor: {value: var14}});
                    var19 = var15;
                    var14 = new var19[var14](var18);
                    var11 = var14 instanceof Object ? var14 : var15;
 256:
                    var12[var13] = var11;
                    _fun0004_ip = 180; continue _fun0004;
                }
 262:
                if(!(var3 == var1)) { _fun0004_ip = 268; continue _fun0004 }
 266:
                var1 = {};
 268:
                _closure1_slot10 = var1;
 272:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSuggestedChannelId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = null;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var2 = {};
            var1['suggestedChannels'] = var2;
            var2 = {};
            var1['dismissedSuggestions'] = var2;
            var2 = {};
            var1['channelOpensByChannelId'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'FavoritesSuggestionStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = 9;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var4 = function handleFavoriteSuggestionDimissed(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var3 = var1.channelId;
            var4 = _closure1_slot9;
            var5 = var4[var2];
            var4 = null;
            if(!(var4 == var5)) { _fun0005_ip = 66; continue _fun0005 }
 30:
            var5 = _closure1_slot9;
            var4 = global;
            var4 = var4.Set;
            var6 = var4.prototype;
            var6 = Object.create(var6, {constructor: {value: var4}});
            var8 = var6;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var6;
            var5[var2] = var4;
 66:
            var4 = _closure1_slot9;
            var5 = var4[var2];
            var4 = var5.add;
            var4 = var4.bind(var5)(var3);
            var1 = _closure1_slot8;
            var2 = var1[var2];
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = true;
            return var1;
        }
    };
    var2['DISMISS_FAVORITE_SUGGESTION'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/opt_in_channels/FavoritesSuggestionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
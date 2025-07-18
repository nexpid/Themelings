// app/modules/icymi/ICYMIPopularGuildsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = new Array(0);
    var _closure1_slot8 = var8;
    var8 = new Array(0);
    var _closure1_slot9 = var8;
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ICYMIPopularGuildsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot11;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
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
        var1 = 'getOnboardingCategoryIds';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getOnboardingGuilds';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCurrentOnboardingGuildOffset';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ICYMIPopularGuildsStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function loadOnboardingPopularGuilds(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.categoryIds;
            var8 = var1.guilds;
            var3 = var1.offset;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var1;
            var7 = 0;
            if(!(var7 === var3)) { _fun0003_ip = 58; continue _fun0003 }
 39:
            _closure1_slot8 = var5;
            var5 = new Array(0);
            _closure1_slot9 = var5;
            _closure1_slot10 = var7;
 58:
            var5 = global;
            var10 = var5.Set;
            var11 = _closure1_slot9;
            var9 = var11.map;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var14 = var9.bind(var11)(var6);
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var15 = var9;
            var6 = new var15[var10](var14, var13);
            var6 = var6 instanceof Object ? var6 : var9;
            _closure2_slot0 = var6;
            var9 = var5.Set;
            var6 = _closure1_slot7;
            var5 = var6.getGuildIds;
            var14 = var5.bind(var6)();
            var6 = var9.prototype;
            var6 = Object.create(var6, {constructor: {value: var9}});
            var15 = var6;
            var5 = new var15[var9](var14, var13);
            var5 = var5 instanceof Object ? var5 : var6;
            _closure2_slot1 = var5;
            var6 = var8.map;
            var5 = function(arg1) {
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 6;
                var1 = var6[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var1);
                var2 = var3.fromClientDiscoverableGuild;
                var1 = 7;
                var1 = var6[var1];
                var5 = var5.bind(var4)(var1);
                var4 = var5.makeDiscoverableGuild;
                var1 = arg1;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var8)(var5);
            var5 = var6.filter;
            var4 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var5 = _closure2_slot1;
                    var4 = var5.has;
                    var1 = var2.id;
                    var1 = var4.bind(var5)(var1);
                    var1 = !var1;
                    if(!var1) { _fun0004_ip = 53; continue _fun0004 }
 31:
                    var4 = _closure2_slot0;
                    var3 = var4.has;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
 53:
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var4);
            var13 = _closure1_slot9;
            var4 = new Array(0);
            var14 = var4;
            var12 = 0;
            var12 = arraySpread(var14, var13, var12);
            var14 = var4;
            var13 = var6;
            var5 = arraySpread(var14, var13, var12);
            _closure1_slot9 = var4;
            _closure1_slot10 = var3;
            return var1;
        }
    };
    var2['LOAD_ICYMI_POPULAR_GUILDS'] = var9;
    var4 = function handleLogout() {
        var1 = new Array(0);
        _closure1_slot8 = var1;
        var1 = new Array(0);
        _closure1_slot9 = var1;
        var1 = 0;
        _closure1_slot10 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/ICYMIPopularGuildsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
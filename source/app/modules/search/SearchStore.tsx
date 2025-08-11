// app/modules/search/SearchStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function setSelectedSearchContextId(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot13;
            if(!(var2 !== var3)) { _fun0002_ip = 22; continue _fun0002 }
 14:
            _closure1_slot13 = var2;
            var1 = undefined;
            return var1;
 22:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.FAVORITES;
    var _closure1_slot10 = var8;
    var2 = var2.SearchTypes;
    var _closure1_slot11 = var2;
    var2 = false;
    var _closure1_slot12 = var2;
    var2 = null;
    var _closure1_slot13 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SearchStore() {
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
                var1 = _closure1_slot14;
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
            var4 = var5.waitFor;
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var1 = _closure1_slot7;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSelectedSearchContextId';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SearchStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = true;
            _closure1_slot12 = var2;
            var2 = _closure1_slot13;
            var3 = null;
            var2 = var3 != var2;
            if(!var2) { _fun0004_ip = 164; continue _fun0004 }
 25:
            var7 = _closure1_slot13;
            var5 = var3 == var7;
            var4 = null;
            if(var5) { _fun0004_ip = 150; continue _fun0004 }
 38:
            var5 = _closure1_slot11;
            var5 = var5.DMS;
            if(!(var7 !== var5)) { _fun0004_ip = 137; continue _fun0004 }
 52:
            var5 = _closure1_slot10;
            if(!(var7 !== var5)) { _fun0004_ip = 125; continue _fun0004 }
 60:
            var6 = _closure1_slot9;
            var5 = var6.getGuild;
            var5 = var5.bind(var6)(var7);
            if(!(var3 == var5)) { _fun0004_ip = 113; continue _fun0004 }
 78:
            var6 = _closure1_slot8;
            var5 = var6.getChannel;
            var5 = var5.bind(var6)(var7);
            var5 = var3 != var5;
            var3 = null;
            if(!var5) { _fun0004_ip = 111; continue _fun0004 }
 101:
            var5 = _closure1_slot11;
            var3 = var5.CHANNEL;
 111:
            _fun0004_ip = 123; continue _fun0004;
 113:
            var5 = _closure1_slot11;
            var3 = var5.GUILD;
 123:
            _fun0004_ip = 135; continue _fun0004;
 125:
            var5 = _closure1_slot11;
            var3 = var5.FAVORITES;
 135:
            _fun0004_ip = 147; continue _fun0004;
 137:
            var5 = _closure1_slot11;
            var3 = var5.DMS;
 147:
            var4 = var3;
 150:
            var3 = _closure1_slot11;
            var3 = var3.CHANNEL;
            var2 = var4 === var3;
 164:
            if(!var2) { _fun0004_ip = 212; continue _fun0004 }
 167:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 9;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getIsSearchDesktopXDMExperimentEnabled;
            var3 = {};
            var6 = 'SearchStore_handleConnectionOpen';
            var3['location'] = var6;
            var2 = var4.bind(var5)(var3);
 212:
            if(!var2) { _fun0004_ip = 236; continue _fun0004 }
 215:
            var3 = _closure1_slot15;
            var1 = _closure1_slot11;
            var2 = var1.DMS;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 236:
            var1 = undefined;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleSearchScreenOpen(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot15;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SEARCH_SCREEN_OPEN'] = var9;
    var4 = function handleChannelSelect(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var5 = var1.channelId;
            var1 = null;
            if(!(var1 == var3)) { _fun0005_ip = 107; continue _fun0005 }
 19:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 9;
            var2 = var4[var2];
            var4 = undefined;
            var7 = var6.bind(var4)(var2);
            var6 = var7.getIsSearchDesktopXDMExperimentEnabled;
            var2 = {};
            var8 = 'SearchStore_handleChannelSelect';
            var2['location'] = var8;
            var8 = _closure1_slot12;
            var2['autoTrackExposure'] = var8;
            var6 = var6.bind(var7)(var2);
            var2 = _closure1_slot15;
            if(var6) { _fun0005_ip = 90; continue _fun0005 }
 83:
            var5 = var2.bind(var4)(var5);
            _fun0005_ip = 121; continue _fun0005;
 90:
            var1 = _closure1_slot11;
            var1 = var1.DMS;
            var1 = var2.bind(var4)(var1);
            _fun0005_ip = 121; continue _fun0005;
 107:
            var2 = _closure1_slot15;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
 121:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/SearchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/forums/ForumChannelStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var8 = 0;
    var7 = var6[var8];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var9 = 1;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var4 = var4.Set;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var14 = var9;
    var4 = new var14[var4](var13);
    var9 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot5 = var9;
    var4 = {};
    var10 = 3;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.ForumLayout;
    var10 = var10.LIST;
    var4['layoutType'] = var10;
    var10 = 4;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.ThreadSortOrder;
    var10 = var10.CREATION_DATE;
    var4['sortOrder'] = var10;
    var4['tagFilter'] = var9;
    var4['scrollPosition'] = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ThreadSearchTagSetting;
    var8 = var8.MATCH_SOME;
    var4['tagSetting'] = var8;
    var _closure1_slot6 = var4;
    var4 = function ForumChannelStoreState(arg1, arg2) {
        var3 = this;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot3;
        var4 = _closure1_slot9;
        var1 = undefined;
        var4 = var5.bind(var1)(var3, var4);
        var4 = arg1;
        var3['set'] = var4;
        var4 = arg2;
        var3['get'] = var4;
        var4 = {};
        var3['channelStates'] = var4;
        var4 = function(arg1, arg2) {
            var4 = arg1;
            var5 = _closure2_slot0;
            var1 = var5.get;
            var1 = var1.bind(var5)();
            var3 = var5.getChannelState;
            var5 = var3.bind(var5)(var4);
            var3 = {};
            var6 = var1.channelStates;
            var7 = var3;
            var1 = copyDataProperties(var7, var6);
            var _closure3_slot0 = var3;
            var1 = {};
            var7 = var1;
            var6 = var5;
            var5 = copyDataProperties(var7, var6);
            var6 = arg2;
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var3[var4] = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = var3.set;
                var1 = {};
                var4 = _closure3_slot0;
                var1['channelStates'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3['setChannelState'] = var4;
        var4 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arg1;
                var2 = null;
                if(!(var2 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = var1.channelStates;
                var1 = var1[var6];
                if(!(var2 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure1_slot4;
                var4 = var5.getChannel;
                var4 = var4.bind(var5)(var6);
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 7;
                var5 = var7[var5];
                var7 = undefined;
                var6 = var6.bind(var7)(var5);
                var5 = var2 != var4;
                var2 = '[Forum Channel Store] The channel should not be missing.';
                var2 = var6.bind(var7)(var5, var2);
                var2 = {};
                var5 = var4.getDefaultLayout;
                var5 = var5.bind(var4)();
                var2['layoutType'] = var5;
                var5 = var4.getDefaultSortOrder;
                var5 = var5.bind(var4)();
                var2['sortOrder'] = var5;
                var3 = _closure1_slot5;
                var2['tagFilter'] = var3;
                var3 = 0;
                var2['scrollPosition'] = var3;
                var3 = var4.getDefaultTagSetting;
                var3 = var3.bind(var4)();
                var2['tagSetting'] = var3;
                var1 = var2;
case 4:
                return var1;
case 2:
                var1 = _closure1_slot6;
                return var1;
            }
        };
        var3['getChannelState'] = var4;
        var4 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg1;
                var5 = arg2;
                var3 = _closure2_slot0;
                var2 = var3.getChannelState;
                var2 = var2.bind(var3)(var4);
                var3 = global;
                var6 = var3.Set;
                var8 = var2.tagFilter;
                var3 = var6.prototype;
                var3 = Object.create(var3, {constructor: {value: var6}});
                var9 = var3;
                var2 = new var9[var6](var8, var7);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var3.has;
                var2 = var2.bind(var3)(var5);
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = var3.add;
                var2 = var2.bind(var3)(var5);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var2 = var3.delete;
                var2 = var2.bind(var3)(var5);
case 8:
                var2 = _closure2_slot0;
                var1 = var2.setTagFilter;
                var1 = var1.bind(var2)(var4, var3);
                var1 = undefined;
                return var1;
            }
        };
        var3['toggleTagFilter'] = var4;
        var4 = function(arg1, arg2) {
            var4 = arg2;
            var5 = _closure2_slot0;
            var3 = var5.setChannelState;
            var2 = {};
            var2['tagFilter'] = var4;
            var1 = arg1;
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.setFilterTagIds;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var3['setTagFilter'] = var4;
        var4 = function(arg1, arg2) {
            var4 = arg2;
            var5 = _closure2_slot0;
            var3 = var5.setChannelState;
            var2 = {};
            var2['sortOrder'] = var4;
            var1 = arg1;
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.setSortOrder;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var3['setSortOrder'] = var4;
        var4 = function(arg1, arg2) {
            var4 = arg2;
            var5 = _closure2_slot0;
            var3 = var5.setChannelState;
            var2 = {};
            var2['layoutType'] = var4;
            var1 = arg1;
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.setLayout;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var3['setLayoutType'] = var4;
        var4 = function(arg1, arg2) {
            var4 = arg2;
            var5 = _closure2_slot0;
            var3 = var5.setChannelState;
            var2 = {};
            var2['tagSetting'] = var4;
            var1 = arg1;
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.setTagSetting;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var3['setTagSetting'] = var4;
        var2 = function(arg1, arg2) {
            var4 = _closure2_slot0;
            var3 = var4.setChannelState;
            var2 = {};
            var1 = arg2;
            var2['scrollPosition'] = var1;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            var1 = undefined;
            return var1;
        };
        var3['setScrollPosition'] = var2;
        return var1;
    };
    var _closure1_slot9 = var4;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.create;
    var4 = function(arg1, arg2) {
        var4 = _closure1_slot7;
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var6 = arg1;
        var5 = arg2;
        var7 = var2;
        var1 = new var7[var4](var6, var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumChannelStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot8;
            var7 = undefined;
            var3 = var3.bind(var7)();
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 10;
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var8;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5, var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var1 = var3.getChannelState;
            var1 = var1.bind(var3)(var4);
            _fun0003_ip = 11; continue _fun0003;
case 9:
            var1 = _closure1_slot6;
case 11:
            return var1;
        }
    };
    var3['useForumChannelStore'] = var4;
    var2 = function() {
        var1 = _closure1_slot8;
        return var1;
    };
    var3['useForumChannelStoreApi'] = var2;
    return var1;
})();
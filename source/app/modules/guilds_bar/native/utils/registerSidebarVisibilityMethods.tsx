// app/modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.setGetVisibleChannelIds;
    var _closure1_slot0 = var7;
    var4 = var4.setGetVisibleGuildIds;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildsNodeType;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function registerGuildVisibilityMethod(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.current;
            var _closure2_slot0 = var3;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var2 = undefined;
            var1 = function() {
                var1 = _closure2_slot0;
                var3 = var1.getItems;
                var5 = var3.bind(var1)();
                var3 = var1.getScrollPosition;
                var3 = var3.bind(var1)();
                var _closure3_slot0 = var3;
                var1 = var1.containerSize;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot2;
                var3 = var4.getGuilds;
                var3 = var3.bind(var4)();
                var _closure3_slot2 = var3;
                var3 = _closure1_slot3;
                var1 = var3.getGuildsTree;
                var1 = var1.bind(var3)();
                var _closure3_slot3 = var1;
                var1 = global;
                var3 = var1.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var7 = var4;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot4 = var3;
                var4 = var5.forEach;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var5 = _closure3_slot3;
                        var3 = var5.getNode;
                        var1 = var2.recyclerKey;
                        var3 = var3.bind(var5)(var1);
                        var1 = undefined;
                        if(!(var1 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var5 = var2.layoutStart;
                        var2 = var2.layoutSize;
                        var6 = var5 + var2;
                        var2 = _closure3_slot0;
                        var2 = var6 >= var2;
                        if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var6 = _closure3_slot0;
                        var4 = _closure3_slot1;
                        var4 = var6 + var4;
                        var2 = var5 <= var4;
case 6:
                        if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 8:
                        var2 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var1 = arg1;
                                var3 = var1.type;
                                var2 = _closure1_slot4;
                                var2 = var2.FOLDER;
                                if(!(var3 !== var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                                var3 = new Array(1);
                                var3[0] = var1;
                                _fun0003_ip = 11; continue _fun0003;
case 9:
                                var3 = var1.children;
case 11:
                                var2 = var3.forEach;
                                var1 = function(arg1) {
                                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                        var1 = arg1;
                                        var3 = var1.type;
                                        var2 = _closure1_slot4;
                                        var2 = var2.GUILD;
                                        var2 = var3 === var2;
                                        if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                                        var4 = var1.id;
                                        var3 = _closure3_slot2;
                                        var2 = var4 in var3;
case 12:
                                        if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                                        var3 = _closure3_slot4;
                                        var2 = var3.add;
                                        var1 = var1.id;
                                        var1 = var2.bind(var3)(var1);
case 14:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var2.bind(var1)(var3);
case 4:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2);
                var2 = var1.Array;
                var1 = var2.from;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var1 = var3.bind(var2)(var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['registerGuildVisibilityMethod'] = var4;
    var2 = function registerFastListChannelVisibilityMethod(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = arg1;
            var3 = var2.current;
            var _closure2_slot1 = var3;
            var2 = null;
            if(!(var2 != var3)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var3 = _closure1_slot0;
            var2 = undefined;
            var1 = function() {
                var1 = _closure2_slot1;
                var3 = var1.getItems;
                var4 = var3.bind(var1)();
                var3 = var1.getScrollPosition;
                var3 = var3.bind(var1)();
                var _closure3_slot0 = var3;
                var1 = var1.containerSize;
                var _closure3_slot1 = var1;
                var1 = new Array(0);
                var _closure3_slot2 = var1;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var1 = undefined;
                        var3 = undefined;
                        var6 = undefined;
                        var5 = undefined;
case 18: // try_start_0 // try_start_1
                        var9 = _closure2_slot0;
                        var8 = var9.getChannelFromSectionRow;
                        var4 = var2;
                        var7 = var4.section;
                        var4 = var4.item;
                        var7 = var8.bind(var9)(var7, var4);
                        var6 = var7;
                        var4 = null;
                        var7 = var4 == var7;
                        var4 = undefined;
                        if(var7) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                        var4 = var6.channel;
case 19:
                        var3 = var4;
case 21: // try_end0
                        _fun0006_ip = 14; continue _fun0006;
case 22: // catch_target0
                        CatchBlockStart(arg_register=3);
case 14: // try_end1
                        var6 = var3;
                        var4 = null;
                        if(!(var4 != var6)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                        var6 = var2.layoutStart;
                        var5 = var6;
                        var2 = var2.layoutSize;
                        var7 = var6 + var2;
                        var6 = _closure3_slot0;
                        var6 = var7 >= var6;
                        var4 = var6;
                        if(!var6) { _fun0006_ip = 25; continue _fun0006 }
case 26:
                        var6 = var5;
                        var7 = _closure3_slot0;
                        var5 = _closure3_slot1;
                        var5 = var7 + var5;
                        var4 = var6 <= var5;
case 25:
                        if(!var4) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var5 = _closure3_slot2;
                        var4 = var5.push;
                        var2 = var3;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var2);
case 27:
                        return var1;
case 23:
                        return var1;
case 29: // catch_target1
                        CatchBlockStart(arg_register=1);
                        var4 = var3;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                        throw var2;
case 30:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var2)(var1);
case 16:
            var1 = undefined;
            return var1;
        }
    };
    var3['registerFastListChannelVisibilityMethod'] = var2;
    return var1;
})();
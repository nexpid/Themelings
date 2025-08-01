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
 0:
            var2 = arg1;
            var3 = var2.current;
            var _closure2_slot0 = var3;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 41; continue _fun0001 }
 20:
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
 0:
                        var2 = arg1;
                        var5 = _closure3_slot3;
                        var3 = var5.getNode;
                        var1 = var2.recyclerKey;
                        var3 = var3.bind(var5)(var1);
                        var1 = undefined;
                        if(!(var1 !== var3)) { _fun0002_ip = 93; continue _fun0002 }
 33:
                        var5 = var2.layoutStart;
                        var2 = var2.layoutSize;
                        var6 = var5 + var2;
                        var2 = _closure3_slot0;
                        var2 = var6 >= var2;
                        if(!var2) { _fun0002_ip = 76; continue _fun0002 }
 60:
                        var6 = _closure3_slot0;
                        var4 = _closure3_slot1;
                        var4 = var6 + var4;
                        var2 = var5 <= var4;
 76:
                        if(!var2) { _fun0002_ip = 93; continue _fun0002 }
 79:
                        var2 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var1 = arg1;
                                var3 = var1.type;
                                var2 = _closure1_slot4;
                                var2 = var2.FOLDER;
                                if(!(var3 !== var2)) { _fun0003_ip = 35; continue _fun0003 }
 25:
                                var3 = new Array(1);
                                var3[0] = var1;
                                _fun0003_ip = 40; continue _fun0003;
 35:
                                var3 = var1.children;
 40:
                                var2 = var3.forEach;
                                var1 = function(arg1) {
                                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                        var1 = arg1;
                                        var3 = var1.type;
                                        var2 = _closure1_slot4;
                                        var2 = var2.GUILD;
                                        var2 = var3 === var2;
                                        if(!var2) { _fun0004_ip = 44; continue _fun0004 }
 28:
                                        var4 = var1.id;
                                        var3 = _closure3_slot2;
                                        var2 = var4 in var3;
 44:
                                        if(!var2) { _fun0004_ip = 69; continue _fun0004 }
 47:
                                        var3 = _closure3_slot4;
                                        var2 = var3.add;
                                        var1 = var1.id;
                                        var1 = var2.bind(var3)(var1);
 69:
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
 93:
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
 41:
            var1 = undefined;
            return var1;
        }
    };
    var3['registerGuildVisibilityMethod'] = var4;
    var4 = function registerFastListChannelVisibilityMethod(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = arg1;
            var3 = var2.current;
            var _closure2_slot1 = var3;
            var2 = null;
            if(!(var2 != var3)) { _fun0005_ip = 48; continue _fun0005 }
 27:
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
 0:
                        var2 = arg1;
                        var1 = undefined;
                        var3 = undefined;
                        var6 = undefined;
                        var5 = undefined;
 11: // try_start_0 // try_start_1
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
                        if(var7) { _fun0006_ip = 62; continue _fun0006 }
 57:
                        var4 = var6.channel;
 62:
                        var3 = var4;
 65: // try_end0
                        _fun0006_ip = 69; continue _fun0006;
 67: // catch_target0
                        CatchBlockStart(arg_register=3);
 69: // try_end1
                        var6 = var3;
                        var4 = null;
                        if(!(var4 != var6)) { _fun0006_ip = 160; continue _fun0006 }
 78:
                        var6 = var2.layoutStart;
                        var5 = var6;
                        var2 = var2.layoutSize;
                        var7 = var6 + var2;
                        var6 = _closure3_slot0;
                        var6 = var7 >= var6;
                        var4 = var6;
                        if(!var6) { _fun0006_ip = 133; continue _fun0006 }
 114:
                        var6 = var5;
                        var7 = _closure3_slot0;
                        var5 = _closure3_slot1;
                        var5 = var7 + var5;
                        var4 = var6 <= var5;
 133:
                        if(!var4) { _fun0006_ip = 158; continue _fun0006 }
 136:
                        var5 = _closure3_slot2;
                        var4 = var5.push;
                        var2 = var3;
                        var2 = var2.id;
                        var2 = var4.bind(var5)(var2);
 158:
                        return var1;
 160:
                        return var1;
 162: // catch_target1
                        CatchBlockStart(arg_register=1);
                        var4 = var3;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0006_ip = 175; continue _fun0006 }
 173:
                        throw var2;
 175:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var2)(var1);
 48:
            var1 = undefined;
            return var1;
        }
    };
    var3['registerFastListChannelVisibilityMethod'] = var4;
    var2 = function registerFlashListChannelVisibilityMethod(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var1 = undefined;
        var2 = function() {
            var4 = _closure2_slot1;
            var3 = var4.get;
            var3 = var3.bind(var4)();
            var _closure3_slot0 = var3;
            var4 = _closure2_slot0;
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure3_slot0;
                    var3 = var4.includes;
                    var1 = var2.index;
                    var1 = var3.bind(var4)(var1);
                    if(!var1) { _fun0007_ip = 41; continue _fun0007 }
 28:
                    var3 = var2.kind;
                    var2 = 'channel';
                    var1 = var2 === var3;
 41:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['registerFlashListChannelVisibilityMethod'] = var2;
    return var1;
})();
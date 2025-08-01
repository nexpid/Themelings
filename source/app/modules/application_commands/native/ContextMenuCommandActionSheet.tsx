// app/modules/application_commands/native/ContextMenuCommandActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CONTEXT_MENU_COMMANDS_QUERY_LIMIT;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ContextMenuCommandActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContextMenuCommandActionSheet(arg1) {
        var1 = arg1;
        var17 = var1.channel;
        var _closure2_slot0 = var17;
        var13 = var1.commandType;
        var16 = var1.commandTargetId;
        var _closure2_slot1 = var16;
        var12 = var1.onBack;
        var15 = var1.onPressAppCommand;
        var _closure2_slot2 = var15;
        var6 = _closure1_slot0;
        var10 = _closure1_slot3;
        var3 = 4;
        var3 = var10[var3];
        var4 = undefined;
        var8 = var6.bind(var4)(var3);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var5 = _closure2_slot0;
                var1 = null;
                var5 = var1 == var5;
                var1 = undefined;
                if(var5) { _fun0001_ip = 44; continue _fun0001 }
 30:
                var5 = _closure2_slot0;
                var4 = var5.getGuildId;
                var1 = var4.bind(var5)();
 44:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5 = var7.bind(var8)(var5, var3);
        var _closure2_slot3 = var5;
        var7 = _closure1_slot2;
        var3 = 5;
        var3 = var10[var3];
        var8 = var7.bind(var4)(var3);
        var7 = var8.useDiscovery;
        var3 = {};
        var9 = {};
        var9['channel'] = var17;
        var11 = 'channel';
        var9['type'] = var11;
        var3['context'] = var9;
        var9 = {};
        var11 = new Array(1);
        var11[0] = var13;
        var9['commandTypes'] = var11;
        var3['filters'] = var9;
        var9 = {};
        var11 = _closure1_slot6;
        var9['limit'] = var11;
        var3['options'] = var9;
        var11 = true;
        var3['allowFetch'] = var11;
        var7 = var7.bind(var8)(var3);
        var13 = var7.commands;
        var _closure2_slot4 = var13;
        var3 = var7.sectionDescriptors;
        var _closure2_slot5 = var3;
        var14 = var7.loading;
        var _closure2_slot6 = var14;
        var9 = _closure1_slot4;
        var8 = var9.useMemo;
        var7 = new Array(1);
        var7[0] = var3;
        var3 = function() {
            var2 = {};
            var _closure3_slot0 = var2;
            var4 = _closure2_slot5;
            var3 = var4.forEach;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = _closure3_slot0;
                var1 = var3.id;
                var2[var1] = var3;
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var1 = {};
            var1['sections'] = var2;
            return var1;
        };
        var3 = var8.bind(var9)(var3, var7);
        var3 = var3.sections;
        var _closure2_slot7 = var3;
        var8 = var9.useCallback;
        var7 = new Array(3);
        var7[0] = var17;
        var7[1] = var16;
        var7[2] = var5;
        var5 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var6 = arg1;
                var2 = var6.type;
                var1 = 'command';
                if(!(var1 === var2)) { _fun0002_ip = 122; continue _fun0002 }
 16:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 6;
                var1 = var4[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var1);
                var1 = {};
                var6 = var6.command;
                var1['command'] = var6;
                var6 = {};
                var1['optionValues'] = var6;
                var7 = {};
                var8 = _closure2_slot0;
                var7['channel'] = var8;
                var8 = _closure2_slot3;
                var7['guild'] = var8;
                var1['context'] = var7;
                var6 = _closure2_slot1;
                var1['commandTargetId'] = var6;
                var1 = var5.bind(var2)(var1);
                var1 = 7;
                var1 = var4[var1];
                var2 = var3.bind(var2)(var1);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
 122:
                var1 = undefined;
                return var1;
            }
        };
        var16 = var8.bind(var9)(var5, var7);
        var _closure2_slot8 = var16;
        var8 = var9.useCallback;
        var7 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var3 = var2.type;
                var1 = 'command';
                if(!(var1 !== var3)) { _fun0003_ip = 23; continue _fun0003 }
 16:
                var1 = var2.type;
                _fun0003_ip = 34; continue _fun0003;
 23:
                var2 = var2.command;
                var1 = var2.id;
 34:
                return var1;
            }
        };
        var5 = new Array(0);
        var8 = var8.bind(var9)(var7, var5);
        var7 = var9.useCallback;
        var5 = new Array(3);
        var5[0] = var16;
        var5[1] = var15;
        var5[2] = var3;
        var3 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var7 = var1.item;
                var _closure3_slot0 = var7;
                var6 = var1.start;
                var5 = var1.end;
                var2 = var7.type;
                var1 = 'placeholder';
                if(!(var1 !== var2)) { _fun0004_ip = 207; continue _fun0004 }
 40:
                var1 = 'no_commands';
                if(!(var1 !== var2)) { _fun0004_ip = 154; continue _fun0004 }
 50:
                var1 = 'command';
                if(!(var1 !== var2)) { _fun0004_ip = 62; continue _fun0004 }
 58:
                var1 = undefined;
                return var1;
 62:
                var4 = _closure1_slot7;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var9 = var7.command;
                var1['item'] = var9;
                var8 = function onPress() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 23; continue _fun0005 }
 13:
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
 23:
                        var3 = _closure2_slot8;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1['onPress'] = var8;
                var8 = _closure2_slot7;
                var7 = var7.command;
                var7 = var7.applicationId;
                var7 = var8[var7];
                var1['section'] = var7;
                var1['start'] = var6;
                var1['end'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
 154:
                var4 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.ContextMenuCommandEmptyItem;
                var1 = {};
                var1['start'] = var6;
                var1['end'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
 207:
                var4 = _closure1_slot7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.ContextMenuCommandLoadingItem;
                var1 = {};
                var1['start'] = var6;
                var1['end'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var7 = var7.bind(var9)(var3, var5);
        var5 = var9.useMemo;
        var3 = new Array(2);
        var3[0] = var14;
        var3[1] = var13;
        var2 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure2_slot6;
                if(var2) { _fun0006_ip = 73; continue _fun0006 }
 10:
                var2 = _closure2_slot4;
                var3 = var2.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0006_ip = 48; continue _fun0006 }
 25:
                var3 = _closure2_slot4;
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = {};
                    var2 = 'command';
                    var1['type'] = var2;
                    var2 = arg1;
                    var1['command'] = var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                _fun0006_ip = 71; continue _fun0006;
 48:
                var3 = {};
                var2 = 'no_commands';
                var3['type'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 71:
                _fun0006_ip = 94; continue _fun0006;
 73:
                var3 = {};
                var2 = 'placeholder';
                var3['type'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 94:
                return var1;
            }
        };
        var9 = var5.bind(var9)(var2, var3);
        var3 = _closure1_slot7;
        var2 = _closure1_slot1;
        var5 = 9;
        var1 = var10[var5];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var13 = 10;
        var14 = var10[var13];
        var14 = var6.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var10[var13];
        var13 = var6.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.PHjkRE;
        var13 = var14.bind(var15)(var13);
        var1['title'] = var13;
        var1['onBack'] = var12;
        var1['scrollable'] = var11;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.UserProfileStackedActionSheetList;
        var5 = {};
        var5['data'] = var9;
        var5['keyExtractor'] = var8;
        var5['renderItem'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
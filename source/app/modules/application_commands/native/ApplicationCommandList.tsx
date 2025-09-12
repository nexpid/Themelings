// app/modules/application_commands/native/ApplicationCommandList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FlatList;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AUTOCOMPLETE_ROW_HEIGHT;
    var4 = 3;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.jsx;
    var _closure1_slot6 = var8;
    var4 = var4 * var7;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.style;
            var8 = var1.channel;
            var5 = var1.onPressCommandItem;
            var _closure2_slot0 = var5;
            var2 = var1.query;
            var7 = var1.ItemSeparatorComponent;
            var6 = var1.getItemLayout;
            var3 = var1.onCommandsChange;
            var _closure2_slot1 = var3;
            var12 = _closure1_slot2;
            var16 = _closure1_slot3;
            var4 = 4;
            var9 = var16[var4];
            var4 = undefined;
            var13 = var12.bind(var4)(var9);
            var12 = var13.useQuery;
            var9 = {};
            var9['channel'] = var8;
            var8 = 'channel';
            var9['type'] = var8;
            var8 = {};
            var8['text'] = var2;
            var15 = _closure1_slot0;
            var2 = 5;
            var2 = var16[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.ApplicationCommandType;
            var14 = var2.CHAT;
            var2 = new Array(1);
            var2[0] = var14;
            var8['commandTypes'] = var2;
            var2 = {'placeholderCount': 3, 'limit': 7};
            var14 = 6;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.ScoreMethod;
            var14 = var14.COMMAND_OR_APPLICATION;
            var2['scoreMethod'] = var14;
            var2 = var12.bind(var13)(var9, var8, var2);
            var9 = var2.commands;
            var _closure2_slot2 = var9;
            var14 = var2.sections;
            var _closure2_slot3 = var14;
            var2 = var2.scrollDown;
            var _closure2_slot4 = var2;
            var13 = _closure1_slot4;
            var12 = var13.useCallback;
            var8 = new Array(2);
            var8[0] = var14;
            var8[1] = var5;
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var9 = var1.item;
                    var _closure3_slot0 = var9;
                    var7 = var1.index;
                    var4 = undefined;
                    var _closure3_slot1 = var4;
                    var3 = var9.inputType;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 7;
                    var2 = var8[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.ApplicationCommandInputType;
                    var2 = var2.PLACEHOLDER;
                    if(!(var3 !== var2)) { _fun0002_ip = 178; continue _fun0002 }
 70:
                    var5 = _closure2_slot3;
                    var3 = null;
                    var3 = var3 == var5;
                    var8 = undefined;
                    if(var3) { _fun0002_ip = 109; continue _fun0002 }
 88:
                    var5 = _closure2_slot3;
                    var3 = var5.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.applicationId;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var8 = var3.bind(var5)(var2);
 109:
                    _closure3_slot1 = var8;
                    var5 = _closure1_slot6;
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 9;
                    var2 = var10[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var2['command'] = var9;
                    var2['section'] = var8;
                    var6 = function onPress() {
                        var4 = _closure2_slot0;
                        var3 = _closure3_slot0;
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var6 = 0;
                    var6 = var6 === var7;
                    var2['highlighted'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 178:
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 8;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var8 = var12.bind(var13)(var5, var8);
            var12 = var13.useEffect;
            var5 = null;
            var5 = var5 == var9;
            var14 = undefined;
            if(var5) { _fun0001_ip = 280; continue _fun0001 }
 275:
            var14 = var9.length;
 280:
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 58; continue _fun0003 }
 13:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var6 = var1 == var2;
                    var2 = undefined;
                    var4 = undefined;
                    if(var6) { _fun0003_ip = 41; continue _fun0003 }
 32:
                    var5 = _closure2_slot2;
                    var4 = var5.length;
 41:
                    var5 = var1 != var4;
                    var1 = 0;
                    if(!var5) { _fun0003_ip = 53; continue _fun0003 }
 50:
                    var1 = var4;
 53:
                    var1 = var3.bind(var2)(var1);
 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var3, var5);
            var12 = _closure1_slot4;
            var5 = var12.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.nativeEvent;
                    var2 = var3.layoutMeasurement;
                    var1 = var3.contentSize;
                    var3 = var3.contentOffset;
                    var3 = var3.y;
                    var2 = var2.height;
                    var2 = var3 + var2;
                    var3 = var1.height;
                    var1 = _closure1_slot7;
                    var1 = var3 - var1;
                    if(!(var2 >= var1)) { _fun0004_ip = 73; continue _fun0004 }
 60:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var5.bind(var12)(var2, var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var1['style'] = var11;
            var10 = function keyExtractor(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var1['keyExtractor'] = var10;
            var1['data'] = var9;
            var1['renderItem'] = var8;
            var1['ItemSeparatorComponent'] = var7;
            var1['getItemLayout'] = var6;
            var1['onScroll'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
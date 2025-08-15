// app/modules/interaction_components/native/actions/StringSelectActionComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var6;
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
        var4 = var8.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = metroImportAll;
        var9 = var4.bind(var1)(var7);
        var _closure1_slot4 = var9;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.requireNativeComponent;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot5 = var4;
        var4 = 4;
        var10 = var6[var4];
        var11 = var5.bind(var1)(var10);
        var10 = var11.isAndroid;
        var10 = var10.bind(var11)();
        if(var10) { _fun0001_ip = 165; continue _fun0001 }
 157:
        var9 = var9.Fragment;
        _fun0001_ip = 177; continue _fun0001;
 165:
        var10 = 5;
        var10 = var6[var10];
        var9 = var8.bind(var1)(var10);
 177:
        var _closure1_slot6 = var9;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var4 = var9.isAndroid;
        var4 = var4.bind(var9)();
        if(var4) { _fun0001_ip = 215; continue _fun0001 }
 202:
        var4 = 'DCDSelectActionComponentView';
        var4 = var7.bind(var1)(var4);
        _fun0001_ip = 227; continue _fun0001;
 215:
        var7 = 6;
        var7 = var6[var7];
        var4 = var8.bind(var1)(var7);
 227:
        var _closure1_slot7 = var4;
        var4 = 12;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/interaction_components/native/actions/StringSelectActionComponent.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function StringSelectActionComponent(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var9 = arg1;
                var _closure2_slot0 = var9;
                var10 = var9.type;
                var _closure2_slot1 = var10;
                var13 = var9.options;
                var _closure2_slot2 = var13;
                var8 = _closure1_slot4;
                var1 = var8.useState;
                var3 = var1.bind(var8)();
                var2 = _closure1_slot3;
                var4 = undefined;
                var1 = 2;
                var2 = var2.bind(var4)(var3, var1);
                var6 = 0;
                var12 = var2[var6];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot3 = var1;
                var3 = var8.useMemo;
                var2 = new Array(1);
                var2[0] = var13;
                var1 = function() {
                    var4 = _closure2_slot2;
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.default;
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.value;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var8 = var3.bind(var8)(var1, var2);
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 7;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useComponentStateContext;
                var1 = var1.bind(var2)();
                var _closure2_slot4 = var1;
                var3 = _closure1_slot1;
                var2 = 8;
                var2 = var11[var2];
                var11 = var3.bind(var4)(var2);
                var3 = null;
                var14 = var3 == var1;
                var2 = undefined;
                if(var14) { _fun0002_ip = 168; continue _fun0002 }
 162:
                var2 = var1.modal;
 168:
                var3 = var3 != var2;
                var2 = 'StringSelectActionComponent must be rendered inside a modal ComponentStateContext';
                var2 = var11.bind(var4)(var3, var2);
                var3 = var1.useComponentState;
                var2 = var8.length;
                var6 = var2 > var6;
                var2 = undefined;
                if(!var6) { _fun0002_ip = 217; continue _fun0002 }
 204:
                var6 = {};
                var6['type'] = var10;
                var6['values'] = var8;
                var2 = var6;
 217:
                var3 = var3.bind(var1)(var9, var2);
                var2 = var3.state;
                var _closure2_slot5 = var2;
                var11 = var3.visualState;
                var3 = var3.executeStateUpdate;
                var _closure2_slot6 = var3;
                var6 = _closure1_slot4;
                var8 = var6.useMemo;
                var3 = new Array(3);
                var3[0] = var13;
                var3[1] = var10;
                var3[2] = var2;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = _closure2_slot5;
                        var3 = null;
                        var3 = var3 == var4;
                        var4 = undefined;
                        if(var3) { _fun0003_ip = 29; continue _fun0003 }
 20:
                        var3 = _closure2_slot5;
                        var4 = var3.type;
 29:
                        var3 = _closure2_slot1;
                        if(!(var4 !== var3)) { _fun0003_ip = 43; continue _fun0003 }
 37:
                        var4 = new Array(0);
                        _fun0003_ip = 52; continue _fun0003;
 43:
                        var2 = _closure2_slot5;
                        var4 = var2.values;
 52:
                        var3 = var4.map;
                        var2 = function(arg1) {
                            var2 = arg1;
                            var _closure4_slot0 = var2;
                            var3 = _closure2_slot2;
                            var2 = var3.findIndex;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.value;
                                var1 = _closure4_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            var2 = -1;
                            var1 = arg1;
                            var1 = var2 !== var1;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var10 = var8.bind(var6)(var2, var3);
                var1 = var1.modal;
                var1 = var1.customId;
                var _closure2_slot7 = var1;
                var3 = var6.useCallback;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = _closure2_slot3;
                    var1 = var1.layout;
                    var2 = var1.height;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = new Array(0);
                var6 = var3.bind(var6)(var2, var1);
                var3 = _closure1_slot5;
                var2 = _closure1_slot6;
                var1 = {};
                var1['onLayout'] = var6;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = {};
                var13 = '100%';
                var8['width'] = var13;
                var8['height'] = var12;
                var5['style'] = var8;
                var8 = {};
                var16 = var8;
                var15 = var9;
                var9 = copyDataProperties(var16, var15);
                var9 = 'state';
                var8[var9] = var11;
                var9 = 'selectedOptions';
                var8[var9] = var10;
                var5['model'] = var8;
                var7 = function onTap() {
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var4 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 11;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 10;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var8 = _closure2_slot7;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'StringSelectComponentActionSheet:';
                    var3 = var3.bind(var2)(var8);
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2['selectionActionComponent'] = var8;
                    var8 = _closure2_slot4;
                    var8 = var8.channelId;
                    var2['channelId'] = var8;
                    var8 = _closure2_slot7;
                    var2['containerId'] = var8;
                    var7 = _closure2_slot6;
                    var2['onSubmit'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var5['onTap'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();
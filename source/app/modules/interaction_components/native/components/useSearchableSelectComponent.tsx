// app/modules/interaction_components/native/components/useSearchableSelectComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/components/useSearchableSelectComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSearchableSelectComponent(arg1) {
        var2 = arg1;
        var1 = var2.selectActionComponent;
        var _closure2_slot0 = var1;
        var15 = var2.messageId;
        var _closure2_slot1 = var15;
        var4 = var2.messageFlags;
        var _closure2_slot2 = var4;
        var4 = var2.applicationId;
        var _closure2_slot3 = var4;
        var4 = var2.channelId;
        var _closure2_slot4 = var4;
        var14 = var2.guildId;
        var _closure2_slot5 = var14;
        var4 = var2.queryOptions;
        var _closure2_slot6 = var4;
        var10 = _closure1_slot4;
        var6 = var10.useState;
        var2 = '';
        var2 = var6.bind(var10)(var2);
        var12 = _closure1_slot3;
        var9 = undefined;
        var8 = 2;
        var2 = var12.bind(var9)(var2, var8);
        var6 = 0;
        var11 = var2[var6];
        var _closure2_slot7 = var11;
        var7 = 1;
        var2 = var2[var7];
        var13 = _closure1_slot0;
        var5 = _closure1_slot2;
        var5 = var5[var8];
        var13 = var13.bind(var9)(var5);
        var5 = var13.getInitialSnowflakeSelectOptions;
        var5 = var5.bind(var13)(var1, var15, var14);
        var _closure2_slot8 = var5;
        var13 = var10.useState;
        var5 = function() {
            var1 = global;
            var3 = var1.Map;
            var4 = _closure2_slot8;
            var2 = var4.map;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.value;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            };
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var5 = var13.bind(var10)(var5);
        var8 = var12.bind(var9)(var5, var8);
        var5 = var8[var6];
        var _closure2_slot9 = var5;
        var8 = var8[var7];
        var _closure2_slot10 = var8;
        var9 = var10.useMemo;
        var8 = new Array(2);
        var8[0] = var11;
        var8[1] = var4;
        var4 = function() {
            var3 = _closure2_slot6;
            var2 = _closure2_slot7;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var4 = var9.bind(var10)(var4, var8);
        var1 = var1.maxValues;
        var1 = var1 > var7;
        var _closure2_slot11 = var1;
        var1 = function submitSelection(arg1) {
            var2 = arg1;
            var7 = {};
            var9 = _closure2_slot0;
            var1 = var9.type;
            var7['type'] = var1;
            var1 = var2.values;
            var12 = var1.bind(var2)();
            var1 = new Array(0);
            var11 = 0;
            var13 = var1;
            var2 = arraySpread(var13, var12, var11);
            var7['selectedOptions'] = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var3 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.executeMessageComponentInteraction;
            var3 = {};
            var10 = var9.type;
            var3['componentType'] = var10;
            var10 = _closure2_slot1;
            var3['messageId'] = var10;
            var10 = _closure2_slot2;
            var3['messageFlags'] = var10;
            var10 = var9.customId;
            var3['customId'] = var10;
            var9 = var9.id;
            var3['componentId'] = var9;
            var9 = _closure2_slot3;
            var3['applicationId'] = var9;
            var9 = _closure2_slot4;
            var3['channelId'] = var9;
            var8 = _closure2_slot5;
            var3['guildId'] = var8;
            var3['localState'] = var7;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var _closure2_slot12 = var1;
        var1 = {};
        var1['options'] = var4;
        var4 = var5.values;
        var17 = var4.bind(var5)();
        var4 = new Array(0);
        var18 = var4;
        var16 = 0;
        var5 = arraySpread(var18, var17, var16);
        var1['selectedOptions'] = var4;
        var4 = function isSelected(arg1) {
            var3 = _closure2_slot9;
            var2 = var3.has;
            var1 = arg1;
            var1 = var1.value;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['isSelected'] = var4;
        var4 = function onPressOptionItem(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var5 = arg2;
                var _closure3_slot0 = var5;
                var6 = _closure2_slot9;
                var4 = var6.has;
                var3 = var5.value;
                var3 = var4.bind(var6)(var3);
                var _closure3_slot1 = var3;
                var4 = _closure2_slot11;
                if(var4) { _fun0001_ip = 136; continue _fun0001 }
 42:
                var6 = _closure2_slot12;
                var4 = global;
                var4 = var4.Map;
                if(var3) { _fun0001_ip = 107; continue _fun0001 }
 57:
                var8 = var5.value;
                var7 = new Array(2);
                var7[0] = var8;
                var7[1] = var5;
                var5 = new Array(1);
                var5[0] = var7;
                var7 = var4.prototype;
                var7 = Object.create(var7, {constructor: {value: var4}});
                var10 = var7;
                var9 = var5;
                var5 = new var10[var4](var9, var8);
                var5 = var5 instanceof Object ? var5 : var7;
                _fun0001_ip = 127; continue _fun0001;
 107:
                var7 = var4.prototype;
                var7 = Object.create(var7, {constructor: {value: var4}});
                var10 = var7;
                var4 = new var10[var4](var9);
                var5 = var4 instanceof Object ? var4 : var7;
 127:
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                _fun0001_ip = 186; continue _fun0001;
 136:
                var3 = !var3;
                if(!var3) { _fun0001_ip = 165; continue _fun0001 }
 142:
                var4 = _closure2_slot9;
                var5 = var4.size;
                var4 = _closure2_slot0;
                var4 = var4.maxValues;
                var3 = var5 >= var4;
 165:
                if(var3) { _fun0001_ip = 186; continue _fun0001 }
 168:
                var3 = _closure2_slot10;
                var2 = undefined;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = global;
                        var3 = var1.Map;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {constructor: {value: var3}});
                        var7 = arg1;
                        var8 = var2;
                        var1 = new var8[var3](var7, var6);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var3 = _closure3_slot1;
                        if(var3) { _fun0002_ip = 63; continue _fun0002 }
 41:
                        var5 = var1.set;
                        var4 = _closure3_slot0;
                        var3 = var4.value;
                        var3 = var5.bind(var1)(var3, var4);
                        _fun0002_ip = 82; continue _fun0002;
 63:
                        var3 = var1.delete;
                        var2 = _closure3_slot0;
                        var2 = var2.value;
                        var2 = var3.bind(var1)(var2);
 82:
                        return var1;
                    }
                };
                var1 = var3.bind(var2)(var1);
 186:
                var1 = undefined;
                return var1;
            }
        };
        var1['onPressOptionItem'] = var4;
        var3 = function submitSelection() {
            var3 = _closure2_slot12;
            var2 = _closure2_slot9;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['submitSelection'] = var3;
        var1['setQuery'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
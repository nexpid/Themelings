// app/modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var10 = 2;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var12 = 64;
    var9['minHeight'] = var12;
    var4['selectionOptionItemWithDescription'] = var9;
    var9 = {};
    var12 = 56;
    var9['paddingLeft'] = var12;
    var4['selectionOptionItemWithEmoji'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['selectionOptionItemDescription'] = var9;
    var9 = {'flexShrink': 0, 'borderRadius': null, 'overflow': 'hidden'};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderRadius'] = var10;
    var4['emojiWrapper'] = var9;
    var9 = {'fontSize': 16, 'color': '#000000'};
    var4['textEmoji'] = var9;
    var9 = {'width': 24, 'height': 24};
    var4['fastImageEmoji'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.selectionActionComponent;
            var _closure2_slot0 = var10;
            var11 = var1.labelComponent;
            var5 = var1.channelId;
            var9 = var1.containerId;
            var2 = var1.onSubmit;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot6;
            var4 = undefined;
            var8 = var3.bind(var4)();
            var _closure2_slot2 = var8;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 5;
            var3 = var14[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.getInitialStringSelectOptions;
            var17 = var3.bind(var7)(var10, var9);
            var15 = _closure1_slot4;
            var7 = var15.useState;
            var3 = global;
            var3 = var3.Set;
            var9 = var3.prototype;
            var9 = Object.create(var9, {constructor: {value: var3}});
            var18 = var9;
            var3 = new var18[var3](var17, var16);
            var3 = var3 instanceof Object ? var3 : var9;
            var9 = var7.bind(var15)(var3);
            var7 = _closure1_slot3;
            var3 = 2;
            var9 = var7.bind(var4)(var9, var3);
            var3 = 0;
            var7 = var9[var3];
            var _closure2_slot3 = var7;
            var3 = 1;
            var3 = var9[var3];
            var _closure2_slot4 = var3;
            var12 = var15.useMemo;
            var9 = new Array(1);
            var9[0] = var10;
            var3 = function() {
                var1 = _closure2_slot0;
                var2 = var1.maxValues;
                var1 = 1;
                var1 = var2 > var1;
                return var1;
            };
            var12 = var12.bind(var15)(var3, var9);
            var _closure2_slot5 = var12;
            var9 = var15.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                var5 = {};
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var3 = var4[var1];
                var1 = undefined;
                var3 = var6.bind(var1)(var3);
                var3 = var3.ComponentType;
                var3 = var3.STRING_SELECT;
                var5['type'] = var3;
                var3 = arg1;
                var5['values'] = var3;
                var3 = _closure2_slot1;
                var3 = var3.bind(var1)(var5);
                var3 = _closure1_slot1;
                var2 = 7;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = var9.bind(var15)(var2, var3);
            var _closure2_slot6 = var2;
            var9 = var15.useCallback;
            var3 = new Array(4);
            var3[0] = var7;
            var3[1] = var12;
            var3[2] = var10;
            var3[3] = var2;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg2;
                    var _closure3_slot0 = var4;
                    var6 = _closure2_slot3;
                    var5 = var6.has;
                    var3 = var4.value;
                    var3 = var5.bind(var6)(var3);
                    var3 = !var3;
                    var _closure3_slot1 = var3;
                    var5 = _closure2_slot5;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure2_slot6;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = new Array(0);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var7 = var4.value;
                    var4 = new Array(1);
                    var4[0] = var7;
                    var5 = var4;
case 6:
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    _fun0002_ip = 7; continue _fun0002;
case 2:
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot3;
                    var5 = var4.size;
                    var4 = _closure2_slot0;
                    var4 = var4.maxValues;
                    var3 = var5 >= var4;
case 8:
                    if(var3) { _fun0002_ip = 7; continue _fun0002 }
case 10:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = global;
                            var3 = var1.Set;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {constructor: {value: var3}});
                            var5 = arg1;
                            var6 = var2;
                            var1 = new var6[var3](var5, var4);
                            var1 = var1 instanceof Object ? var1 : var2;
                            var3 = _closure3_slot1;
                            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var4 = var1.delete;
                            var3 = _closure3_slot0;
                            var3 = var3.value;
                            var3 = var4.bind(var1)(var3);
                            _fun0003_ip = 13; continue _fun0003;
case 11:
                            var3 = var1.add;
                            var2 = _closure3_slot0;
                            var2 = var2.value;
                            var2 = var3.bind(var1)(var2);
case 13:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var2)(var1);
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var9.bind(var15)(var2, var3);
            var9 = var15.useMemo;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var1 = _closure2_slot0;
                var3 = var1.options;
                var2 = var3.some;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.description;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var9.bind(var15)(var2, var3);
            var12 = var15.useMemo;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var1 = _closure2_slot0;
                var3 = var1.options;
                var2 = var3.some;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.emoji;
                    var1 = null;
                    var1 = var1 != var2;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var15)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPressOptionItem'] = var13;
            var13 = function renderIcon(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var2 = var6.emoji;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = var6.emoji;
                    var7 = var7.src;
                    var2['src'] = var7;
                    var6 = var6.emoji;
                    var6 = var6.name;
                    var2['name'] = var6;
                    var6 = _closure2_slot2;
                    var7 = var6.emojiWrapper;
                    var2['style'] = var7;
                    var7 = var6.textEmoji;
                    var2['textEmojiStyle'] = var7;
                    var6 = var6.fastImageEmoji;
                    var2['fastImageStyle'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 14:
                    return var1;
                }
            };
            var1['renderIcon'] = var13;
            var12 = !var12;
            var1['skipIcon'] = var12;
            var12 = function renderDescription(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var6 = arg1;
                    var1 = var6.description;
                    var4 = null;
                    var2 = var4 != var1;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                    var3 = var6.description;
                    var2 = '';
                    var1 = null;
                    if(!(var2 !== var3)) { _fun0005_ip = 16; continue _fun0005 }
case 18:
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
                    var7 = _closure2_slot2;
                    var7 = var7.selectionOptionItemDescription;
                    var2['style'] = var7;
                    var6 = var6.description;
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 16:
                    return var1;
                }
            };
            var1['renderDescription'] = var12;
            var1['selectionActionComponent'] = var10;
            var1['labelComponent'] = var11;
            var10 = var10.options;
            var1['options'] = var10;
            if(!var9) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var9 = var8.selectionOptionItemWithDescription;
case 19:
            var8 = new Array(1);
            var8[0] = var9;
            var1['itemStyle'] = var8;
            var7 = var7.size;
            var1['selectedCount'] = var7;
            var7 = function isSelected(arg1) {
                var3 = _closure2_slot3;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.value;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['isSelected'] = var7;
            var7 = function submitSelection() {
                var3 = _closure2_slot6;
                var6 = _closure2_slot3;
                var2 = new Array(0);
                var5 = 0;
                var7 = var2;
                var1 = arraySpread(var7, var6, var5);
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['submitSelection'] = var7;
            var6 = function itemAccessibilityLabel(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var3 = var7[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.t;
                    var2 = var1.ZbrH2d;
                    var1 = {};
                    var7 = var5.emoji;
                    var8 = null;
                    var8 = var8 == var7;
                    if(var8) { _fun0006_ip = 13; continue _fun0006 }
case 21:
                    var6 = var7.name;
case 13:
                    var1['emojiName'] = var6;
                    var6 = var5.label;
                    var1['optionName'] = var6;
                    var5 = var5.description;
                    var1['optionDescription'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1['itemAccessibilityLabel'] = var6;
            var1['channelId'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
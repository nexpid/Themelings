// app/modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/components/StringSelectComponentActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.messageId;
            var _closure2_slot0 = var16;
            var15 = var1.messageFlags;
            var _closure2_slot1 = var15;
            var12 = var1.applicationId;
            var _closure2_slot2 = var12;
            var5 = var1.channelId;
            var _closure2_slot3 = var5;
            var2 = var1.guildId;
            var _closure2_slot4 = var2;
            var10 = var1.selectionActionComponent;
            var _closure2_slot5 = var10;
            var3 = _closure1_slot6;
            var4 = undefined;
            var8 = var3.bind(var4)();
            var _closure2_slot6 = var8;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 5;
            var3 = var13[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.getInitialStringSelectOptions;
            var19 = var3.bind(var7)(var10, var16);
            var14 = _closure1_slot4;
            var7 = var14.useState;
            var3 = global;
            var3 = var3.Set;
            var9 = var3.prototype;
            var9 = Object.create(var9, {constructor: {value: var3}});
            var20 = var9;
            var3 = new var20[var3](var19, var18);
            var3 = var3 instanceof Object ? var3 : var9;
            var9 = var7.bind(var14)(var3);
            var7 = _closure1_slot3;
            var3 = 2;
            var9 = var7.bind(var4)(var9, var3);
            var3 = 0;
            var7 = var9[var3];
            var _closure2_slot7 = var7;
            var3 = 1;
            var3 = var9[var3];
            var _closure2_slot8 = var3;
            var11 = var14.useMemo;
            var9 = new Array(1);
            var9[0] = var10;
            var3 = function() {
                var1 = _closure2_slot5;
                var2 = var1.maxValues;
                var1 = 1;
                var1 = var2 > var1;
                return var1;
            };
            var11 = var11.bind(var14)(var3, var9);
            var _closure2_slot9 = var11;
            var9 = var14.useCallback;
            var17 = var10.type;
            var3 = new Array(8);
            var3[0] = var17;
            var17 = var10.customId;
            var3[1] = var17;
            var17 = var10.id;
            var3[2] = var17;
            var3[3] = var16;
            var3[4] = var15;
            var3[5] = var12;
            var3[6] = var5;
            var3[7] = var2;
            var2 = function(arg1) {
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var9.bind(var1)(var3);
                var5 = var6.executeMessageComponentInteraction;
                var3 = {};
                var8 = _closure2_slot5;
                var10 = var8.type;
                var3['componentType'] = var10;
                var10 = _closure2_slot0;
                var3['messageId'] = var10;
                var10 = _closure2_slot1;
                var3['messageFlags'] = var10;
                var10 = var8.customId;
                var3['customId'] = var10;
                var8 = var8.id;
                var3['componentId'] = var8;
                var8 = _closure2_slot2;
                var3['applicationId'] = var8;
                var8 = _closure2_slot3;
                var3['channelId'] = var8;
                var7 = _closure2_slot4;
                var3['guildId'] = var7;
                var7 = {};
                var8 = 7;
                var8 = var4[var8];
                var8 = var9.bind(var1)(var8);
                var8 = var8.ComponentType;
                var8 = var8.STRING_SELECT;
                var7['type'] = var8;
                var8 = arg1;
                var7['values'] = var8;
                var3['localState'] = var7;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot1;
                var2 = 8;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = var9.bind(var14)(var2, var3);
            var _closure2_slot10 = var2;
            var9 = var14.useCallback;
            var3 = new Array(4);
            var3[0] = var7;
            var3[1] = var11;
            var3[2] = var10;
            var3[3] = var2;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg2;
                    var _closure3_slot0 = var4;
                    var6 = _closure2_slot7;
                    var5 = var6.has;
                    var3 = var4.value;
                    var3 = var5.bind(var6)(var3);
                    var3 = !var3;
                    var _closure3_slot1 = var3;
                    var5 = _closure2_slot9;
                    if(var5) { _fun0002_ip = 83; continue _fun0002 }
 45:
                    var6 = _closure2_slot10;
                    if(var3) { _fun0002_ip = 58; continue _fun0002 }
 52:
                    var5 = new Array(0);
                    _fun0002_ip = 74; continue _fun0002;
 58:
                    var7 = var4.value;
                    var4 = new Array(1);
                    var4[0] = var7;
                    var5 = var4;
 74:
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    _fun0002_ip = 130; continue _fun0002;
 83:
                    if(!var3) { _fun0002_ip = 109; continue _fun0002 }
 86:
                    var4 = _closure2_slot7;
                    var5 = var4.size;
                    var4 = _closure2_slot5;
                    var4 = var4.maxValues;
                    var3 = var5 >= var4;
 109:
                    if(var3) { _fun0002_ip = 130; continue _fun0002 }
 112:
                    var3 = _closure2_slot8;
                    var2 = undefined;
                    var1 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = global;
                            var3 = var1.Set;
                            var1 = var3.prototype;
                            var2 = Object.create(var1, {constructor: {value: var3}});
                            var5 = arg1;
                            var6 = var2;
                            var1 = new var6[var3](var5, var4);
                            var1 = var1 instanceof Object ? var1 : var2;
                            var3 = _closure3_slot1;
                            if(var3) { _fun0003_ip = 62; continue _fun0003 }
 41:
                            var4 = var1.delete;
                            var3 = _closure3_slot0;
                            var3 = var3.value;
                            var3 = var4.bind(var1)(var3);
                            _fun0003_ip = 81; continue _fun0003;
 62:
                            var3 = var1.add;
                            var2 = _closure3_slot0;
                            var2 = var2.value;
                            var2 = var3.bind(var1)(var2);
 81:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var2)(var1);
 130:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var9.bind(var14)(var2, var3);
            var9 = var14.useMemo;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var1 = _closure2_slot5;
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
            var9 = var9.bind(var14)(var2, var3);
            var11 = var14.useMemo;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                var1 = _closure2_slot5;
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
            var11 = var11.bind(var14)(var2, var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = 9;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPressOptionItem'] = var12;
            var12 = function renderIcon(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var6 = arg1;
                    var2 = var6.emoji;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0004_ip = 126; continue _fun0004 }
 18:
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 10;
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
                    var6 = _closure2_slot6;
                    var7 = var6.emojiWrapper;
                    var2['style'] = var7;
                    var7 = var6.textEmoji;
                    var2['textEmojiStyle'] = var7;
                    var6 = var6.fastImageEmoji;
                    var2['fastImageStyle'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 126:
                    return var1;
                }
            };
            var1['renderIcon'] = var12;
            var11 = !var11;
            var1['skipIcon'] = var11;
            var11 = function renderDescription(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var6 = arg1;
                    var1 = var6.description;
                    var4 = null;
                    var2 = var4 != var1;
                    var1 = null;
                    if(!var2) { _fun0005_ip = 112; continue _fun0005 }
 19:
                    var3 = var6.description;
                    var2 = '';
                    var1 = null;
                    if(!(var2 !== var3)) { _fun0005_ip = 112; continue _fun0005 }
 34:
                    var5 = _closure1_slot5;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
                    var7 = _closure2_slot6;
                    var7 = var7.selectionOptionItemDescription;
                    var2['style'] = var7;
                    var6 = var6.description;
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 112:
                    return var1;
                }
            };
            var1['renderDescription'] = var11;
            var1['selectionActionComponent'] = var10;
            var10 = var10.options;
            var1['options'] = var10;
            if(!var9) { _fun0001_ip = 462; continue _fun0001 }
 456:
            var9 = var8.selectionOptionItemWithDescription;
 462:
            var8 = new Array(1);
            var8[0] = var9;
            var1['itemStyle'] = var8;
            var7 = var7.size;
            var1['selectedCount'] = var7;
            var7 = function isSelected(arg1) {
                var3 = _closure2_slot7;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.value;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['isSelected'] = var7;
            var7 = function submitSelection() {
                var3 = _closure2_slot10;
                var6 = _closure2_slot7;
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
 0:
                    var5 = arg1;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 12;
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
                    if(var8) { _fun0006_ip = 82; continue _fun0006 }
 77:
                    var6 = var7.name;
 82:
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
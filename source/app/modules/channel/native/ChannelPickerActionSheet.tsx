// app/modules/channel/native/ChannelPickerActionSheet.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/native/ChannelPickerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelPickerActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var19 = var1.bottom;
            var16 = var5.header;
            var1 = var5.guild;
            var _closure2_slot1 = var1;
            var15 = var5.channels;
            var _closure2_slot2 = var15;
            var1 = var5.onSelect;
            var _closure2_slot3 = var1;
            var17 = var5.selectedChannel;
            var12 = null;
            var1 = var12 != var16;
            var7 = undefined;
            if(!var1) { _fun0001_ip = 214; continue _fun0001 }
 94:
            var8 = var16.title;
            var1 = var16.onClose;
            var _closure2_slot4 = var1;
            var1 = var12 != var1;
            var6 = undefined;
            if(!var1) { _fun0001_ip = 167; continue _fun0001 }
 118:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ActionSheetCloseButton;
            var1 = {};
            var10 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot4;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['onPress'] = var10;
            var6 = var3.bind(var4)(var2, var1);
 167:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 7;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheetTitleHeader;
            var1 = {};
            var1['title'] = var8;
            var1['trailing'] = var6;
            var7 = var3.bind(var4)(var2, var1);
 214:
            var1 = var5.noChannelOptionLabel;
            var1 = var12 != var1;
            var14 = undefined;
            if(!var1) { _fun0001_ip = 335; continue _fun0001 }
 229:
            var3 = _closure1_slot5;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 8;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.TableRadioRow;
            var1 = {};
            var8 = '';
            var1['value'] = var8;
            var5 = var5.noChannelOptionLabel;
            var1['label'] = var5;
            var5 = 9;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TableRowIcon;
            var5 = {};
            var10 = _closure1_slot1;
            var8 = 10;
            var8 = var11[var8];
            var8 = var10.bind(var4)(var8);
            var5['source'] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['icon'] = var5;
            var14 = var3.bind(var4)(var2, var1);
 335:
            var3 = _closure1_slot5;
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 11;
            var1 = var18[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.RedesignCompat;
            var1 = {};
            var5 = 12;
            var5 = var18[var5];
            var5 = var10.bind(var4)(var5);
            var6 = var5.ActionSheet;
            var5 = {};
            var8 = true;
            var5['scrollable'] = var8;
            var5['header'] = var7;
            var7 = 13;
            var7 = var18[var7];
            var7 = var10.bind(var4)(var7);
            var8 = var7.BottomSheetScrollView;
            var7 = {};
            var11 = {};
            var11['paddingBottom'] = var19;
            var7['contentContainerStyle'] = var11;
            var11 = _closure1_slot6;
            var9 = 14;
            var9 = var18[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.TableRadioGroup;
            var9 = {};
            var19 = var12 == var17;
            var18 = undefined;
            if(var19) { _fun0001_ip = 468; continue _fun0001 }
 463:
            var18 = var17.id;
 468:
            var19 = var12 != var18;
            var17 = '';
            if(!var19) { _fun0001_ip = 482; continue _fun0001 }
 479:
            var17 = var18;
 482:
            var9['defaultValue'] = var17;
            var17 = var12 == var16;
            var12 = undefined;
            if(var17) { _fun0001_ip = 501; continue _fun0001 }
 496:
            var12 = var16.title;
 501:
            var9['accessibilityLabel'] = var12;
            var12 = function onChange(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var1 = '';
                    if(!(var1 === var2)) { _fun0002_ip = 36; continue _fun0002 }
 17:
                    var2 = _closure2_slot0;
                    var2 = var2.noChannelOptionLabel;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0002_ip = 115; continue _fun0002 }
 36:
                    var6 = _closure2_slot2;
                    var5 = var6.find;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = null;
                    if(!(var4 != var5)) { _fun0002_ip = 111; continue _fun0002 }
 67:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 6;
                    var6 = var6[var4];
                    var4 = undefined;
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.hideActionSheet;
                    var6 = var6.bind(var7)();
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var4)(var5);
 111:
                    var2 = undefined;
                    return var2;
 115:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = _closure2_slot0;
                    var1 = var2.onSelect;
                    var1 = var1.bind(var2)(var3);
                    var1 = undefined;
                    return var1;
                }
            };
            var9['onChange'] = var12;
            var12 = new Array(2);
            var12[0] = var14;
            var14 = var15.map;
            var13 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 15;
                    var2 = var9[var2];
                    var5 = undefined;
                    var4 = var8.bind(var5)(var2);
                    var3 = var4.getChannelIconWithGuild;
                    var2 = _closure2_slot1;
                    var10 = var3.bind(var4)(var1, var2);
                    var4 = _closure1_slot5;
                    var2 = 8;
                    var2 = var9[var2];
                    var2 = var8.bind(var5)(var2);
                    var3 = var2.TableRadioRow;
                    var2 = {};
                    var6 = var1.id;
                    var2['value'] = var6;
                    var6 = 16;
                    var6 = var9[var6];
                    var11 = var8.bind(var5)(var6);
                    var9 = var11.computeChannelName;
                    var8 = _closure1_slot4;
                    var6 = _closure1_slot3;
                    var6 = var9.bind(var11)(var1, var8, var6);
                    var2['label'] = var6;
                    var6 = null;
                    var8 = var6 != var10;
                    if(!var8) { _fun0003_ip = 168; continue _fun0003 }
 126:
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 9;
                    var7 = var11[var7];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.TableRowIcon;
                    var7 = {};
                    var7['source'] = var10;
                    var6 = var9.bind(var5)(var8, var7);
 168:
                    var2['icon'] = var6;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var13 = var14.bind(var15)(var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var7['children'] = var9;
            var7 = var3.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
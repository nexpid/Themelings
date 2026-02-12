// app/modules/oauth2/native/WebhookGuildChannelSelector.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var5 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.createChannelRecord;
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.jsx;
    var _closure1_slot10 = var9;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var10 = {'flexDirection': 'column', 'gap': 8};
    var2['selectorGroup'] = var10;
    var10 = {};
    var11 = 9;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var10['borderRadius'] = var13;
    var2['select'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_SUBTLE;
    var10['color'] = var13;
    var13 = '500';
    var10['fontWeight'] = var13;
    var2['label'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var10['color'] = var11;
    var2['error'] = var10;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot12 = var2;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.FormRow;
    var8 = var5.Arrow;
    var5 = {};
    var5 = var9.bind(var1)(var8, var5);
    var _closure1_slot13 = var5;
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/oauth2/native/WebhookGuildChannelSelector.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function WebhookGuildChannelSelector(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.selectedGuildId;
            var _closure2_slot0 = var13;
            var4 = var1.selectedChannelId;
            var _closure2_slot1 = var4;
            var10 = var1.onChannelChange;
            var _closure2_slot2 = var10;
            var17 = var1.error;
            var1 = _closure1_slot12;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var9 = _closure1_slot5;
            var3 = var9.useState;
            var1 = null;
            var8 = var3.bind(var9)(var1);
            var6 = _closure1_slot4;
            var3 = 2;
            var8 = var6.bind(var5)(var8, var3);
            var3 = 0;
            var3 = var8[var3];
            var _closure2_slot3 = var3;
            var6 = 1;
            var6 = var8[var6];
            var _closure2_slot4 = var6;
            var8 = var9.useRef;
            var6 = false;
            var6 = var8.bind(var9)(var6);
            var _closure2_slot5 = var6;
            var12 = var9.useCallback;
            var8 = new Array(4);
            var8[0] = var3;
            var8[1] = var10;
            var8[2] = var4;
            var8[3] = var13;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var8 = null;
                    var1 = var8 != var1;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot3;
                    var3 = var2.guildId;
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
case 2:
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var1 = 11;
                    var3 = var13[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openLazy;
                    var12 = _closure1_slot0;
                    var2 = 13;
                    var2 = var13[var2];
                    var9 = var12.bind(var1)(var2);
                    var2 = 12;
                    var3 = var13[var2];
                    var2 = var13.paths;
                    var3 = var9.bind(var1)(var3, var2);
                    var2 = {};
                    var9 = 14;
                    var10 = var13[var9];
                    var10 = var12.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9.Re/64R;
                    var9 = var10.bind(var11)(var9);
                    var2['title'] = var9;
                    var9 = _closure2_slot3;
                    var11 = var9.channels;
                    var10 = var11.map;
                    var9 = function(arg1) {
                        var2 = arg1;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 15;
                        var4 = var5[var4];
                        var5 = undefined;
                        var7 = var6.bind(var5)(var4);
                        var6 = var7.computeChannelName;
                        var4 = _closure1_slot7;
                        var5 = var4.bind(var5)(var2);
                        var4 = _closure1_slot9;
                        var3 = _closure1_slot8;
                        var3 = var6.bind(var7)(var5, var4, var3);
                        var1['label'] = var3;
                        var2 = var2.id;
                        var1['value'] = var2;
                        return var1;
                    };
                    var9 = var10.bind(var11)(var9);
                    var2['items'] = var9;
                    var7 = function onItemSelect(arg1) {
                        var3 = _closure2_slot2;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 11;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.hideActionSheet;
                        var2 = 'WebhookGuildChannelSelector';
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onItemSelect'] = var7;
                    var7 = _closure2_slot1;
                    var7 = var8 != var7;
                    if(!var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot1;
case 6:
                    var2['selectedItem'] = var1;
                    var1 = 'WebhookGuildChannelSelector';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var12.bind(var9)(var6, var8);
            var14 = var9.useEffect;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var13;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = function _updateChannels() {
                        var4 = undefined;
                        var1 = undefined;
                        var3 = _closure1_slot3;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    StartGenerator();
                                    var7 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 16;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var4 = var4.bind(var3)(var2);
                                    var2 = var4.fetchChannels;
                                    var2 = var2.bind(var4)(var7);
                                    SaveGenerator(address=50);
case 10:
                                    return var2;
case 11:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                                    var5 = _closure2_slot0;
                                    if(!(var5 === var7)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                                    var6 = var2.sort;
                                    var5 = function(arg1, arg2) {
                                        var1 = arg1;
                                        var3 = var1.name;
                                        var2 = var3.localeCompare;
                                        var1 = arg2;
                                        var1 = var1.name;
                                        var1 = var2.bind(var3)(var1);
                                        return var1;
                                    };
                                    var5 = var6.bind(var2)(var5);
                                    var6 = _closure2_slot4;
                                    var5 = {};
                                    var5['guildId'] = var7;
                                    var5['channels'] = var2;
                                    var5 = var6.bind(var3)(var5);
                                    var5 = _closure2_slot5;
                                    var4 = true;
                                    var5['current'] = var4;
case 14:
                                    return var3;
case 12:
                                    return var2;
case 8:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var4 = var3.bind(var4)(var2);
                        _closure3_slot0 = var4;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var _closure3_slot0 = var1;
                    var5 = _closure2_slot4;
                    var1 = undefined;
                    var3 = null;
                    var5 = var5.bind(var1)(var3);
                    var5 = _closure2_slot0;
                    if(!(var3 != var5)) { _fun0003_ip = 16; continue _fun0003 }
case 2:
                    var5 = _closure2_slot0;
                    var4 = function updateChannels(arg1) {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var1)(var5);
                    _fun0003_ip = 17; continue _fun0003;
case 16:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
case 17:
                    return var1;
                }
            };
            var6 = var14.bind(var9)(var6, var8);
            var8 = var9.useEffect;
            var6 = new Array(4);
            var6[0] = var3;
            var6[1] = var10;
            var6[2] = var4;
            var6[3] = var13;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(!var2) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var2 = _closure2_slot3;
                    var5 = var2.channels;
                    var4 = var5.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0005_ip = 18; continue _fun0005 }
case 13:
                    var4 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0005_ip = 18; continue _fun0005;
case 20:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0005_ip = 18; continue _fun0005 }
case 22:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 18:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var6);
            if(!(var1 != var13)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var4 = var1 == var3;
            var16 = undefined;
            if(var4) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var4 = var3.channels;
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var16 = var3.bind(var4)(var2);
case 25:
            var4 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var11.selectorGroup;
            var2['style'] = var6;
            var9 = _closure1_slot10;
            var19 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 17;
            var6 = var10[var6];
            var6 = var19.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'eyebrow', 'color': 'text-default'};
            var14 = 14;
            var15 = var10[var14];
            var15 = var19.bind(var5)(var15);
            var18 = var15.intl;
            var15 = var18.string;
            var10 = var10[var14];
            var10 = var19.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.8qKd+J;
            var10 = var15.bind(var18)(var10);
            var6['children'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(4);
            var6[0] = var8;
            var9 = var1 != var17;
            var8 = null;
            if(!var9) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var9 = '';
            var8 = null;
            if(!(var9 !== var17)) { _fun0001_ip = 27; continue _fun0001 }
case 29:
            var15 = _closure1_slot10;
            var10 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 18;
            var9 = var18[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.LegacyText;
            var9 = {};
            var18 = var11.error;
            var9['style'] = var18;
            var9['children'] = var17;
            var8 = var15.bind(var5)(var10, var9);
case 27:
            var6[1] = var8;
            var10 = _closure1_slot10;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 10;
            var8 = var15[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.FormRow;
            var8 = {};
            var17 = var1 == var16;
            var15 = undefined;
            if(var17) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var15 = var16.name;
case 30:
            if(!(var1 == var15)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = var16[var14];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var14];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.Re/64R;
            var15 = var17.bind(var18)(var16);
case 32:
            var8['label'] = var15;
            var13 = var1 == var13;
            var8['disabled'] = var13;
            var13 = _closure1_slot13;
            var8['trailing'] = var13;
            var13 = var11.select;
            var8['DEPRECATED_style'] = var13;
            var8['onPress'] = var12;
            var8 = var10.bind(var5)(var9, var8);
            var6[2] = var8;
            var9 = _closure1_slot10;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 18;
            var7 = var10[var7];
            var7 = var13.bind(var5)(var7);
            var8 = var7.LegacyText;
            var7 = {};
            var11 = var11.label;
            var7['style'] = var11;
            var11 = var10[var14];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var14];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.kQXMfN;
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[3] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 23:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useStyles'] = var2;
    return var1;
})();
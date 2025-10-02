// app/modules/oauth2/native/WebhookGuildChannelSelector.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
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
    var2 = var11.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var11.bind(var1)(var2);
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
    var2 = var11.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var11.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot10 = var5;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {'flexDirection': 'column', 'gap': 8};
    var2['selectorGroup'] = var9;
    var9 = {};
    var10 = 9;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOBILE_PRIMARY;
    var9['backgroundColor'] = var12;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderRadius'] = var12;
    var2['select'] = var9;
    var9 = {};
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_SECONDARY;
    var9['color'] = var12;
    var12 = '500';
    var9['fontWeight'] = var12;
    var2['label'] = var9;
    var9 = {};
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var9['color'] = var10;
    var2['error'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot12 = var2;
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
            var9 = var1.selectedGuildId;
            var _closure2_slot0 = var9;
            var4 = var1.selectedChannelId;
            var _closure2_slot1 = var4;
            var12 = var1.onChannelChange;
            var _closure2_slot2 = var12;
            var16 = var1.error;
            var1 = _closure1_slot12;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var8 = _closure1_slot5;
            var3 = var8.useState;
            var1 = null;
            var7 = var3.bind(var8)(var1);
            var6 = _closure1_slot4;
            var3 = 2;
            var7 = var6.bind(var5)(var7, var3);
            var3 = 0;
            var3 = var7[var3];
            var _closure2_slot3 = var3;
            var6 = 1;
            var6 = var7[var6];
            var _closure2_slot4 = var6;
            var7 = var8.useRef;
            var6 = false;
            var6 = var7.bind(var8)(var6);
            var _closure2_slot5 = var6;
            var13 = var8.useCallback;
            var7 = new Array(4);
            var7[0] = var3;
            var7[1] = var12;
            var7[2] = var4;
            var7[3] = var9;
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
                    var1 = 10;
                    var3 = var13[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openLazy;
                    var12 = _closure1_slot0;
                    var2 = 12;
                    var2 = var13[var2];
                    var9 = var12.bind(var1)(var2);
                    var2 = 11;
                    var3 = var13[var2];
                    var2 = var13.paths;
                    var3 = var9.bind(var1)(var3, var2);
                    var2 = {};
                    var9 = 13;
                    var10 = var13[var9];
                    var10 = var12.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9.Re/64e;
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
                        var4 = 14;
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
                        var2 = 10;
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
            var15 = var13.bind(var8)(var6, var7);
            var13 = var8.useEffect;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var9;
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
                                    var2 = 15;
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
case 17:
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
                    _fun0003_ip = 18; continue _fun0003;
case 16:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
case 18:
                    return var1;
                }
            };
            var6 = var13.bind(var8)(var6, var7);
            var7 = var8.useEffect;
            var6 = new Array(4);
            var6[0] = var3;
            var6[1] = var12;
            var6[2] = var4;
            var6[3] = var9;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    if(!var2) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var2 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
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
                    if(var2) { _fun0005_ip = 19; continue _fun0005 }
case 23:
                    var4 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0005_ip = 19; continue _fun0005;
case 21:
                    var2 = _closure2_slot1;
                    if(!(var3 != var2)) { _fun0005_ip = 19; continue _fun0005 }
case 24:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var4, var6);
            if(!(var1 != var9)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var4 = var1 == var3;
            var17 = undefined;
            if(var4) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var4 = var3.channels;
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot1;
                var1 = var2 === var1;
                return var1;
            };
            var17 = var3.bind(var4)(var2);
case 27:
            var4 = _closure1_slot11;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var11.selectorGroup;
            var2['style'] = var6;
            var8 = _closure1_slot10;
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 16;
            var6 = var12[var6];
            var6 = var19.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'eyebrow', 'color': 'header-secondary'};
            var14 = 13;
            var13 = var12[var14];
            var13 = var19.bind(var5)(var13);
            var18 = var13.intl;
            var13 = var18.string;
            var12 = var12[var14];
            var12 = var19.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.8qKd+P;
            var12 = var13.bind(var18)(var12);
            var6['children'] = var12;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(4);
            var6[0] = var7;
            var8 = var1 != var16;
            var7 = null;
            if(!var8) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var8 = '';
            var7 = null;
            if(!(var8 !== var16)) { _fun0001_ip = 29; continue _fun0001 }
case 31:
            var13 = _closure1_slot10;
            var12 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = 17;
            var8 = var18[var8];
            var8 = var12.bind(var5)(var8);
            var12 = var8.LegacyText;
            var8 = {};
            var18 = var11.error;
            var8['style'] = var18;
            var8['children'] = var16;
            var7 = var13.bind(var5)(var12, var8);
case 29:
            var6[1] = var7;
            var12 = _closure1_slot10;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var16 = 18;
            var7 = var7[var16];
            var7 = var8.bind(var5)(var7);
            var8 = var7.FormRow;
            var7 = {};
            var18 = var1 == var17;
            var13 = undefined;
            if(var18) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var13 = var17.name;
case 32:
            if(!(var1 == var13)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var14];
            var18 = var20.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var14];
            var17 = var20.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.Re/64e;
            var13 = var18.bind(var19)(var17);
case 34:
            var7['label'] = var13;
            var9 = var1 == var9;
            var7['disabled'] = var9;
            var9 = _closure1_slot10;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var16 = var10[var16];
            var16 = var13.bind(var5)(var16);
            var16 = var16.FormRow;
            var17 = var16.Arrow;
            var16 = {};
            var16 = var9.bind(var5)(var17, var16);
            var7['trailing'] = var16;
            var16 = var11.select;
            var7['DEPRECATED_style'] = var16;
            var7['onPress'] = var15;
            var7 = var12.bind(var5)(var8, var7);
            var6[2] = var7;
            var7 = 17;
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
            var10 = var10.kQXMfH;
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[3] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 25:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useStyles'] = var2;
    return var1;
})();
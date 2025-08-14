// app/modules/guild_settings/native/GuildSettingsModalChannels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot7;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot6;
            var1 = _closure1_slot28;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot7;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0002_ip = 76; continue _fun0002;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function ChannelItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var6 = var1.style;
            var24 = var1.channelIconStyle;
            var16 = var1.actionIconStyle;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var12 = var1.sortingEnabled;
            var2 = var1.onPress;
            var _closure2_slot1 = var2;
            var5 = var1.sortHandlers;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 15;
            var1 = var3[var1];
            var4 = undefined;
            var8 = var2.bind(var4)(var1);
            var7 = var8.useLegacyClassComponentStyles;
            var1 = _closure1_slot23;
            var19 = var7.bind(var8)(var1);
            var10 = 19;
            var1 = var3[var10];
            var7 = var2.bind(var4)(var1);
            var1 = var7.useThemeContext;
            var1 = var1.bind(var7)();
            var9 = var1.theme;
            var1 = 25;
            var1 = var3[var1];
            var8 = var2.bind(var4)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot14;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot0;
                    var2 = var1.parent_id;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 66; continue _fun0004 }
 19:
                    var4 = _closure1_slot14;
                    var3 = var4.canWithPartialContext;
                    var1 = _closure1_slot19;
                    var2 = var1.MANAGE_CHANNELS;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var5 = var5.parent_id;
                    var1['channelId'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0004_ip = 110; continue _fun0004;
 66:
                    var5 = _closure1_slot14;
                    var4 = var5.canWithPartialContext;
                    var2 = _closure1_slot19;
                    var3 = var2.MANAGE_CHANNELS;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.guild_id;
                    var2['guildId'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 110:
                    return var1;
                }
            };
            var15 = var7.bind(var8)(var3, var1, var2);
            if(var15) { _fun0003_ip = 178; continue _fun0003 }
 176:
            var5 = undefined;
 178:
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 26;
            var2 = var7[var1];
            var3 = var8.bind(var4)(var2);
            var2 = var3.getChannelIcon;
            var25 = var2.bind(var3)(var11);
            var1 = var7[var1];
            var2 = var8.bind(var4)(var1);
            var1 = var2.getChannelIconComponent;
            var23 = var1.bind(var2)(var11);
            var3 = _closure1_slot21;
            var2 = _closure1_slot11;
            var1 = {};
            var13 = 'button';
            var1['accessibilityRole'] = var13;
            var7 = var7[var10];
            var8 = var8.bind(var4)(var7);
            var7 = var8.isThemeDark;
            var8 = var7.bind(var8)(var9);
            var9 = _closure1_slot0;
            var14 = _closure1_slot3;
            var7 = 20;
            var7 = var14[var7];
            var13 = var9.bind(var4)(var7);
            var10 = var13.hex2rgb;
            var9 = _closure1_slot1;
            var7 = 17;
            var7 = var14[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.unsafe_rawColors;
            if(var8) { _fun0003_ip = 341; continue _fun0003 }
 317:
            var9 = var7.PRIMARY_200;
            var8 = 0.6;
            var8 = var10.bind(var13)(var9, var8);
            _fun0003_ip = 363; continue _fun0003;
 341:
            var9 = var7.PRIMARY_700;
            var7 = 0.6;
            var8 = var10.bind(var13)(var9, var7);
 363:
            var14 = null;
            var9 = var14 != var8;
            var7 = undefined;
            if(!var9) { _fun0003_ip = 377; continue _fun0003 }
 374:
            var7 = var8;
 377:
            var1['underlayColor'] = var7;
            var1['style'] = var6;
            var31 = var1;
            var30 = var5;
            var5 = copyDataProperties(var31, var30);
            var7 = _closure1_slot21;
            var6 = _closure1_slot10;
            var5 = {};
            var8 = null;
            if(!var12) { _fun0003_ip = 435; continue _fun0003 }
 411:
            var8 = null;
            if(var15) { _fun0003_ip = 435; continue _fun0003 }
 416:
            var9 = {};
            var10 = 0.3;
            var9['opacity'] = var10;
            var8 = var9;
 435:
            var5['style'] = var8;
            var10 = _closure1_slot21;
            var9 = _closure1_slot0;
            var8 = _closure1_slot3;
            var13 = 21;
            var8 = var8[var13];
            var8 = var9.bind(var4)(var8);
            var9 = var8.FormRow;
            var8 = {};
            if(!(var14 == var23)) { _fun0003_ip = 558; continue _fun0003 }
 475:
            var22 = _closure1_slot21;
            var21 = _closure1_slot0;
            var28 = _closure1_slot3;
            var20 = var28[var13];
            var20 = var21.bind(var4)(var20);
            var20 = var20.FormRow;
            var21 = var20.Icon;
            var20 = {};
            var27 = _closure1_slot1;
            var26 = 22;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.Sizes;
            var26 = var26.SMALL_20;
            var20['size'] = var26;
            var20['source'] = var25;
            var20['style'] = var24;
            var20 = var22.bind(var4)(var21, var20);
            _fun0003_ip = 582; continue _fun0003;
 558:
            var22 = _closure1_slot21;
            var21 = {};
            var21['style'] = var24;
            var24 = 'sm';
            var21['size'] = var24;
            var20 = var22.bind(var4)(var23, var21);
 582:
            var8['leading'] = var20;
            var19 = var19.formRowStyle;
            var8['style'] = var19;
            var11 = var11.name;
            var8['label'] = var11;
            var11 = undefined;
            if(var12) { _fun0003_ip = 618; continue _fun0003 }
 611:
            var11 = function() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
 618:
            var8['onPress'] = var11;
            var11 = null;
            if(!var15) { _fun0003_ip = 697; continue _fun0003 }
 627:
            var11 = null;
            if(!var12) { _fun0003_ip = 697; continue _fun0003 }
 632:
            var15 = _closure1_slot21;
            var14 = _closure1_slot0;
            var19 = _closure1_slot3;
            var13 = var19[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.FormRow;
            var14 = var13.Icon;
            var13 = {};
            var18 = _closure1_slot1;
            var17 = 23;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var13['source'] = var17;
            var13['style'] = var16;
            var11 = var15.bind(var4)(var14, var13);
 697:
            var8['trailing'] = var11;
            var11 = undefined;
            if(!var12) { _fun0003_ip = 710; continue _fun0003 }
 707:
            var11 = 1;
 710:
            var8['numberOfLines'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function isValidDrop(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var4 = null;
            var1 = var4 != var2;
            if(!var1) { _fun0005_ip = 108; continue _fun0005 }
 12:
            var3 = var2.parentId;
            if(!(var4 != var3)) { _fun0005_ip = 73; continue _fun0005 }
 22:
            var5 = _closure1_slot14;
            var4 = var5.can;
            var3 = _closure1_slot19;
            var3 = var3.MANAGE_CHANNELS;
            var7 = _closure1_slot12;
            var6 = var7.getChannel;
            var2 = var2.parentId;
            var2 = var6.bind(var7)(var2);
            var2 = var4.bind(var5)(var3, var2);
            _fun0005_ip = 105; continue _fun0005;
 73:
            var6 = _closure1_slot14;
            var5 = var6.can;
            var3 = _closure1_slot19;
            var4 = var3.MANAGE_CHANNELS;
            var3 = arg2;
            var2 = var5.bind(var6)(var4, var3);
 105:
            var1 = var2;
 108:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function CreateButton(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.guild;
            var _closure2_slot0 = var4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 15;
            var1 = var3[var1];
            var5 = undefined;
            var6 = var2.bind(var5)(var1);
            var2 = var6.useLegacyClassComponentStyles;
            var1 = _closure1_slot23;
            var6 = var2.bind(var6)(var1);
            var2 = _closure1_slot1;
            var1 = 29;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.bottom;
            var _closure2_slot1 = var1;
            var7 = _closure1_slot9;
            var3 = var7.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot1;
                var2 = 16;
                var2 = var2 + var3;
                var1['bottom'] = var2;
                return var1;
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot14;
            var2 = var3.can;
            var1 = _closure1_slot19;
            var1 = var1.MANAGE_CHANNELS;
            var2 = var2.bind(var3)(var1, var4);
            var1 = null;
            if(!var2) { _fun0006_ip = 331; continue _fun0006 }
 147:
            var4 = _closure1_slot21;
            var3 = _closure1_slot10;
            var2 = {};
            var8 = var6.floatingActionButtonContainer;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot21;
            var10 = _closure1_slot0;
            var12 = _closure1_slot3;
            var6 = 30;
            var6 = var12[var6];
            var6 = var10.bind(var5)(var6);
            var7 = var6.Button;
            var6 = {};
            var13 = 18;
            var14 = var12[var13];
            var14 = var10.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var12[var13];
            var13 = var10.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.CumH4u;
            var13 = var14.bind(var15)(var13);
            var6['text'] = var13;
            var11 = function onPress() {
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var1 = 31;
                var2 = var12[var1];
                var1 = undefined;
                var4 = var11.bind(var1)(var2);
                var3 = var4.showSimpleActionSheet;
                var2 = {};
                var5 = 'GuildSettingsChannelsCreate';
                var2['key'] = var5;
                var5 = {};
                var8 = 18;
                var6 = var12[var8];
                var6 = var11.bind(var1)(var6);
                var10 = var6.intl;
                var9 = var10.string;
                var6 = var12[var8];
                var6 = var11.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.CumH4u;
                var6 = var9.bind(var10)(var6);
                var5['title'] = var6;
                var2['header'] = var5;
                var6 = {};
                var5 = var12[var8];
                var5 = var11.bind(var1)(var5);
                var10 = var5.intl;
                var9 = var10.string;
                var5 = var12[var8];
                var5 = var11.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.vHCZws;
                var5 = var9.bind(var10)(var5);
                var6['label'] = var5;
                var5 = function onPress() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 32;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.open;
                    var2 = _closure1_slot18;
                    var10 = var2.GUILD_CATEGORY;
                    var2 = _closure2_slot0;
                    var9 = var2.id;
                    var11 = var6;
                    var8 = null;
                    var7 = null;
                    var2 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
                };
                var6['onPress'] = var5;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var9 = var12[var8];
                var9 = var11.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.GK18KC;
                var8 = var9.bind(var10)(var8);
                var6['label'] = var8;
                var7 = function onPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 32;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.open;
                    var2 = _closure2_slot0;
                    var8 = var2.id;
                    var10 = var5;
                    var9 = null;
                    var7 = null;
                    var6 = null;
                    var2 = var10[var4](var9, var8, var7, var6, var5);
                    return var1;
                };
                var6['onPress'] = var7;
                var5[1] = var6;
                var2['options'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6['onPress'] = var11;
            var11 = _closure1_slot21;
            var9 = 33;
            var9 = var12[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.PlusSmallIcon;
            var9 = {};
            var12 = 'white';
            var9['color'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['icon'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 331:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var22 = true;
    var4['value'] = var22;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var17 = 1;
    var4 = var6[var17];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot9 = var7;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot10 = var8;
    var14 = var4.StyleSheet;
    var4 = var4.TouchableHighlight;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var13 = 12;
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelTypes;
    var _closure1_slot18 = var8;
    var8 = var4.Permissions;
    var _closure1_slot19 = var8;
    var15 = var4.Fonts;
    var4 = var4.NULL_STRING_CHANNEL_ID;
    var _closure1_slot20 = var4;
    var18 = 14;
    var4 = var6[var18];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot21 = var8;
    var4 = var4.jsxs;
    var _closure1_slot22 = var4;
    var4 = 15;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createLegacyClassComponentStyles;
    var4 = {};
    var10 = {};
    var16 = 16;
    var11 = var6[var16];
    var21 = var12.bind(var1)(var11);
    var20 = var15.PRIMARY_SEMIBOLD;
    var11 = 17;
    var19 = var6[var11];
    var19 = var12.bind(var1)(var19);
    var19 = var19.colors;
    var19 = var19.HEADER_PRIMARY;
    var25 = var21.bind(var1)(var20, var19, var16);
    var26 = var10;
    var19 = copyDataProperties(var26, var25);
    var20 = 'capitalize';
    var19 = 'textTransform';
    var10[var19] = var20;
    var4['headerRight'] = var10;
    var10 = {};
    var10['flex'] = var17;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var17;
    var4['containerView'] = var10;
    var10 = {};
    var17 = var6[var16];
    var21 = var12.bind(var1)(var17);
    var20 = var15.DISPLAY_EXTRABOLD;
    var17 = var6[var11];
    var17 = var12.bind(var1)(var17);
    var17 = var17.colors;
    var25 = var17.HEADER_SECONDARY;
    var17 = {};
    var17['uppercase'] = var22;
    var27 = undefined;
    var26 = var20;
    var24 = var13;
    var23 = var17;
    var25 = var27[var21](var26, var25, var24, var23, var22);
    var26 = var10;
    var17 = copyDataProperties(var26, var25);
    var4['categoryText'] = var10;
    var10 = {'paddingTop': 36, 'paddingBottom': 8};
    var4['categoryView'] = var10;
    var10 = {};
    var10['paddingTop'] = var16;
    var4['sortingCategoryView'] = var10;
    var10 = {};
    var16 = var6[var16];
    var17 = var12.bind(var1)(var16);
    var16 = var15.PRIMARY_SEMIBOLD;
    var15 = var6[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.HEADER_SECONDARY;
    var25 = var17.bind(var1)(var16, var15, var18);
    var26 = var10;
    var15 = copyDataProperties(var26, var25);
    var4['edit'] = var10;
    var10 = {};
    var14 = var14.hairlineWidth;
    var14 = -var14;
    var10['marginTop'] = var14;
    var4['row'] = var10;
    var10 = {};
    var10['paddingVertical'] = var13;
    var4['formRowStyle'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.GREEN_360;
    var10['backgroundColor'] = var11;
    var11 = 0.3;
    var10['opacity'] = var11;
    var4['dropHighlight'] = var10;
    var10 = {'position': 'absolute', 'bottom': 16, 'right': 0, 'left': 0, 'flexDirection': 'row', 'justifyContent': 'center'};
    var4['floatingActionButtonContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot23 = var4;
    var8 = var7.PureComponent;
    var4 = function(arg1) {
        var4 = function Category() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot4;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot27;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot8;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot5;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var5 = this;
                var2 = _closure1_slot23;
                var1 = var5.context;
                var4 = undefined;
                var19 = var2.bind(var4)(var1);
                var1 = var5.props;
                var16 = var1.category;
                var _closure3_slot0 = var16;
                var13 = var1.onPress;
                var _closure3_slot1 = var13;
                var20 = var1.sortingEnabled;
                var15 = var1.editStyle;
                var17 = var1.actionIconStyle;
                var10 = null;
                var12 = null;
                if(!var20) { _fun0007_ip = 84; continue _fun0007 }
 73:
                var1 = var5.props;
                var12 = var1.sortHandlers;
 84:
                var3 = _closure1_slot21;
                var2 = _closure1_slot11;
                var1 = {};
                var6 = 'button';
                var1['accessibilityRole'] = var6;
                var9 = {};
                var6 = 'activate';
                var9['name'] = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var6 = 18;
                var18 = var8[var6];
                var18 = var7.bind(var4)(var18);
                var21 = var18.intl;
                var18 = var21.string;
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.bt75u7;
                var6 = var18.bind(var21)(var6);
                var9['label'] = var6;
                var6 = new Array(1);
                var6[0] = var9;
                var1['accessibilityActions'] = var6;
                var6 = function onAccessibilityAction(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var3 = var1.actionName;
                        var5 = undefined;
                        var2 = 'activate';
                        var1 = undefined;
                        if(!(var2 === var3)) { _fun0008_ip = 65; continue _fun0008 }
 26:
                        var4 = _closure3_slot1;
                        var2 = null;
                        var4 = var2 == var4;
                        var2 = undefined;
                        if(var4) { _fun0008_ip = 62; continue _fun0008 }
 44:
                        var4 = _closure3_slot1;
                        var3 = _closure3_slot0;
                        var3 = var3.id;
                        var2 = var4.bind(var5)(var3);
 62:
                        var1 = var2;
 65:
                        return var1;
                    }
                };
                var1['onAccessibilityAction'] = var6;
                var6 = 19;
                var6 = var8[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.isThemeDark;
                var5 = var5.context;
                var5 = var5.theme;
                var6 = var6.bind(var7)(var5);
                var7 = _closure1_slot0;
                var18 = _closure1_slot3;
                var5 = 20;
                var5 = var18[var5];
                var9 = var7.bind(var4)(var5);
                var8 = var9.hex2rgb;
                var7 = _closure1_slot1;
                var5 = 17;
                var5 = var18[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.unsafe_rawColors;
                if(var6) { _fun0007_ip = 304; continue _fun0007 }
 280:
                var7 = var5.PRIMARY_200;
                var6 = 0.6;
                var6 = var8.bind(var9)(var7, var6);
                _fun0007_ip = 326; continue _fun0007;
 304:
                var7 = var5.PRIMARY_700;
                var5 = 0.6;
                var6 = var8.bind(var9)(var7, var5);
 326:
                var7 = var10 != var6;
                var5 = undefined;
                if(!var7) { _fun0007_ip = 338; continue _fun0007 }
 335:
                var5 = var6;
 338:
                var1['underlayColor'] = var5;
                var23 = var1;
                var22 = var12;
                var5 = copyDataProperties(var23, var22);
                var7 = _closure1_slot21;
                var6 = _closure1_slot10;
                var5 = {};
                var9 = _closure1_slot0;
                var18 = _closure1_slot3;
                var8 = 21;
                var8 = var18[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.FormTitle;
                var8 = {};
                var16 = var16.name;
                var8['title'] = var16;
                var16 = 1;
                var8['numberOfLines'] = var16;
                var16 = var19.categoryText;
                var8['textStyle'] = var16;
                var18 = var19.categoryView;
                var16 = new Array(2);
                var16[0] = var18;
                var18 = null;
                if(!var20) { _fun0007_ip = 444; continue _fun0007 }
 438:
                var18 = var19.sortingCategoryView;
 444:
                var16[1] = var18;
                var8['viewStyle'] = var16;
                if(!(var10 == var13)) { _fun0007_ip = 520; continue _fun0007 }
 457:
                var12 = var10 != var12;
                var10 = null;
                if(!var12) { _fun0007_ip = 518; continue _fun0007 }
 466:
                var16 = _closure1_slot21;
                var19 = _closure1_slot1;
                var20 = _closure1_slot3;
                var12 = 22;
                var12 = var20[var12];
                var13 = var19.bind(var4)(var12);
                var12 = {};
                var18 = 23;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var12['source'] = var18;
                var12['style'] = var17;
                var10 = var16.bind(var4)(var13, var12);
 518:
                _fun0007_ip = 551; continue _fun0007;
 520:
                var13 = _closure1_slot21;
                var12 = _closure1_slot25;
                var11 = {};
                var11['style'] = var15;
                var14 = function onPress() {
                    var3 = _closure3_slot1;
                    var1 = _closure3_slot0;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var11['onPress'] = var14;
                var10 = var13.bind(var4)(var12, var11);
 551:
                var8['icon'] = var10;
                var8 = var7.bind(var4)(var9, var8);
                var5['children'] = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = 'children';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var8);
    var _closure1_slot24 = var9;
    var4 = 24;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ThemeContext;
    var9['contextType'] = var8;
    var9 = var7.PureComponent;
    var8 = function(arg1) {
        var4 = function SectionEditAction() {
            var5 = this;
            var4 = undefined;
            var1 = undefined;
            var6 = _closure1_slot4;
            var3 = _closure2_slot0;
            var6 = var6.bind(var4)(var5, var3);
            var2 = _closure1_slot27;
            var1 = arguments;
            var1 = var2.bind(var4)(var5, var3, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot8;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot5;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            var1 = this;
            var1 = var1.props;
            var8 = var1.style;
            var6 = var1.onPress;
            var4 = _closure1_slot21;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 27;
            var1 = var12[var1];
            var3 = undefined;
            var1 = var11.bind(var3)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var7 = 'button';
            var1['accessibilityRole'] = var7;
            var1['onPress'] = var6;
            var7 = _closure1_slot21;
            var5 = 28;
            var5 = var12[var5];
            var5 = var11.bind(var3)(var5);
            var6 = var5.LegacyText;
            var5 = {};
            var5['style'] = var8;
            var8 = 18;
            var9 = var12[var8];
            var9 = var11.bind(var3)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.t;
            var8 = var8.bt75u7;
            var8 = var9.bind(var10)(var8);
            var5['children'] = var8;
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var8.bind(var1)(var9);
    var _closure1_slot25 = var9;
    var8 = var6[var4];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ThemeContext;
    var9['contextType'] = var8;
    var8 = var7.PureComponent;
    var7 = function(arg1) {
        var4 = function GuildSettingsModalChannels(arg1) {
            var6 = this;
            var11 = 0;
            var7 = copyRestArgs(var11);
            var3 = _closure1_slot4;
            var5 = _closure2_slot0;
            var4 = undefined;
            var3 = var3.bind(var4)(var6, var5);
            var3 = _closure1_slot27;
            var1 = new Array(0);
            var11 = var1;
            var10 = var7;
            var9 = 0;
            var7 = arraySpread(var11, var10, var9);
            var1 = var3.bind(var4)(var6, var5, var1);
            var _closure3_slot0 = var1;
            var3 = {};
            var4 = null;
            var3['hovering'] = var4;
            var1['state'] = var3;
            var3 = function(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var8 = arg2;
                    var9 = arg3;
                    var4 = _closure1_slot23;
                    var1 = _closure3_slot0;
                    var2 = var1.context;
                    var6 = undefined;
                    var7 = var4.bind(var6)(var2);
                    var1 = var1.props;
                    var2 = var1.sortingType;
                    var4 = var1.order;
                    var13 = var1.channelList;
                    var5 = var1.guild;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0009_ip = 266; continue _fun0009 }
 69:
                    if(!(var1 != var4)) { _fun0009_ip = 266; continue _fun0009 }
 76:
                    if(!(var1 != var13)) { _fun0009_ip = 266; continue _fun0009 }
 83:
                    var10 = _closure1_slot17;
                    var2 = var10.getLocalChannel;
                    var12 = var2.bind(var10)(var8);
                    var2 = var1 != var9;
                    var11 = null;
                    if(!var2) { _fun0009_ip = 122; continue _fun0009 }
 107:
                    var10 = _closure1_slot17;
                    var2 = var10.getLocalChannel;
                    var11 = var2.bind(var10)(var9);
 122:
                    var2 = var1 != var9;
                    var10 = -1;
                    if(!var2) { _fun0009_ip = 146; continue _fun0009 }
 135:
                    var2 = var4.indexOf;
                    var10 = var2.bind(var4)(var9);
 146:
                    var2 = var4.indexOf;
                    var16 = var2.bind(var4)(var8);
                    var4 = _closure1_slot30;
                    var8 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var2 = 34;
                    var2 = var14[var2];
                    var8 = var8.bind(var6)(var2);
                    var2 = var8.getDropData;
                    var20 = var8;
                    var19 = var11;
                    var18 = var10;
                    var17 = var12;
                    var15 = var13;
                    var2 = var20[var2](var19, var18, var17, var16, var15, var14);
                    var4 = var4.bind(var6)(var2, var5);
                    var2 = null;
                    if(!var4) { _fun0009_ip = 264; continue _fun0009 }
 217:
                    var5 = _closure1_slot21;
                    var4 = _closure1_slot10;
                    var3 = {};
                    var8 = var7.dropHighlight;
                    var7 = new Array(2);
                    var7[0] = var8;
                    var8 = {};
                    var9 = arg1;
                    var8['height'] = var9;
                    var7[1] = var8;
                    var3['style'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 264:
                    return var2;
 266:
                    return var1;
                }
            };
            var1['renderActiveDivider'] = var3;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.section;
                    var1 = var1.category;
                    var3 = var1.id;
                    var4 = _closure1_slot23;
                    var1 = _closure3_slot0;
                    var2 = var1.context;
                    var5 = undefined;
                    var9 = var4.bind(var5)(var2);
                    var1 = var1.props;
                    var8 = var1.sortingType;
                    var12 = var1.channels;
                    var6 = null;
                    var1 = 'null';
                    var10 = null;
                    if(!(var1 !== var3)) { _fun0010_ip = 89; continue _fun0010 }
 74:
                    var2 = _closure1_slot17;
                    var1 = var2.getLocalChannel;
                    var10 = var1.bind(var2)(var3);
 89:
                    if(!(var6 == var10)) { _fun0010_ip = 158; continue _fun0010 }
 93:
                    var3 = _closure1_slot21;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var13 = var6 == var8;
                    var4 = null;
                    if(!var13) { _fun0010_ip = 146; continue _fun0010 }
 112:
                    var12 = var12.null;
                    var13 = var12.length;
                    var12 = 0;
                    var12 = var13 > var12;
                    var4 = null;
                    if(!var12) { _fun0010_ip = 146; continue _fun0010 }
 134:
                    var12 = {};
                    var13 = 36;
                    var12['marginTop'] = var13;
                    var4 = var12;
 146:
                    var1['style'] = var4;
                    var1 = var3.bind(var5)(var2, var1);
                    _fun0010_ip = 245; continue _fun0010;
 158:
                    var4 = _closure1_slot21;
                    var3 = _closure1_slot24;
                    var2 = {};
                    var2['category'] = var10;
                    var10 = var6 != var8;
                    if(!var10) { _fun0010_ip = 200; continue _fun0010 }
 180:
                    var12 = var8.has;
                    var11 = _closure1_slot18;
                    var11 = var11.GUILD_CATEGORY;
                    var10 = var12.bind(var8)(var11);
 200:
                    var2['sortingEnabled'] = var10;
                    var9 = var9.edit;
                    var2['editStyle'] = var9;
                    var8 = var6 == var8;
                    var6 = undefined;
                    if(!var8) { _fun0010_ip = 235; continue _fun0010 }
 225:
                    var7 = _closure3_slot0;
                    var6 = var7.handleChannelPress;
 235:
                    var2['onPress'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 245:
                    return var1;
                }
            };
            var1['renderSectionHeader'] = var3;
            var3 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.item;
                    var10 = var1.channel;
                    var9 = var1.sortingType;
                    var3 = _closure1_slot23;
                    var1 = _closure3_slot0;
                    var1 = var1.context;
                    var5 = undefined;
                    var6 = var3.bind(var5)(var1);
                    var8 = null;
                    if(!(var8 == var10)) { _fun0011_ip = 69; continue _fun0011 }
 51:
                    var4 = _closure1_slot21;
                    var3 = _closure1_slot10;
                    var1 = {};
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0011_ip = 122; continue _fun0011;
 69:
                    var4 = _closure1_slot21;
                    var3 = _closure1_slot29;
                    var2 = {};
                    var2['channel'] = var10;
                    var8 = var8 != var9;
                    var2['sortingEnabled'] = var8;
                    var7 = _closure3_slot0;
                    var7 = var7.handleChannelPress;
                    var2['onPress'] = var7;
                    var6 = var6.row;
                    var2['style'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 122:
                    return var1;
                }
            };
            var1['renderItem'] = var3;
            var3 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.setState;
                var1 = {};
                var4 = arg1;
                var1['hovering'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1['handleHoverChange'] = var3;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var7 = var1.guild;
                    var5 = new Array(0);
                    var3 = _closure1_slot14;
                    var2 = var3.can;
                    var1 = _closure1_slot19;
                    var1 = var1.MANAGE_CHANNELS;
                    var1 = var2.bind(var3)(var1, var7);
                    if(!var1) { _fun0012_ip = 159; continue _fun0012 }
 55:
                    var2 = var5.push;
                    var1 = {};
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var3 = 18;
                    var7 = var9[var3];
                    var8 = undefined;
                    var7 = var11.bind(var8)(var7);
                    var10 = var7.intl;
                    var7 = var10.string;
                    var3 = var9[var3];
                    var3 = var11.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.ffgJrq;
                    var3 = var7.bind(var10)(var3);
                    var1['label'] = var3;
                    var7 = _closure1_slot1;
                    var3 = 35;
                    var3 = var9[var3];
                    var3 = var7.bind(var8)(var3);
                    var1['icon'] = var3;
                    var3 = function onPress() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 36;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.startReordering;
                        var2 = _closure1_slot18;
                        var2 = var2.GUILD_CATEGORY;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['onPress'] = var3;
                    var1 = var2.bind(var5)(var1);
 159:
                    var3 = var5.push;
                    var2 = {};
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var7 = 18;
                    var8 = var11[var7];
                    var1 = undefined;
                    var8 = var10.bind(var1)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var11[var7];
                    var8 = var10.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.nIfr0d;
                    var8 = var9.bind(var12)(var8);
                    var2['label'] = var8;
                    var8 = _closure1_slot1;
                    var6 = 37;
                    var6 = var11[var6];
                    var6 = var8.bind(var1)(var6);
                    var2['icon'] = var6;
                    var6 = function onPress() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 36;
                        var3 = var3[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var3);
                        var6 = var7.startReordering;
                        var3 = _closure1_slot18;
                        var11 = var3.GUILD_TEXT;
                        var3 = _closure1_slot18;
                        var10 = var3.GUILD_ANNOUNCEMENT;
                        var3 = _closure1_slot18;
                        var9 = var3.GUILD_FORUM;
                        var2 = _closure1_slot18;
                        var8 = var2.GUILD_MEDIA;
                        var12 = var7;
                        var2 = var12[var6](var11, var10, var9, var8, var7);
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var2 = var3.bind(var5)(var2);
                    var3 = var5.push;
                    var2 = {};
                    var6 = var11[var7];
                    var6 = var10.bind(var1)(var6);
                    var12 = var6.intl;
                    var9 = var12.string;
                    var6 = var11[var7];
                    var6 = var10.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.CYnO4u;
                    var6 = var9.bind(var12)(var6);
                    var2['label'] = var6;
                    var6 = 38;
                    var6 = var11[var6];
                    var6 = var8.bind(var1)(var6);
                    var2['icon'] = var6;
                    var4 = function onPress() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 36;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.startReordering;
                        var3 = _closure1_slot18;
                        var3 = var3.GUILD_VOICE;
                        var2 = _closure1_slot18;
                        var2 = var2.GUILD_STAGE_VOICE;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2['onPress'] = var4;
                    var2 = var3.bind(var5)(var2);
                    var2 = 31;
                    var2 = var11[var2];
                    var4 = var10.bind(var1)(var2);
                    var3 = var4.showSimpleActionSheet;
                    var2 = {};
                    var6 = 'GuildSettingsChannelsSort';
                    var2['key'] = var6;
                    var6 = {};
                    var8 = var11[var7];
                    var8 = var10.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.0dOFq6;
                    var7 = var8.bind(var9)(var7);
                    var6['title'] = var7;
                    var2['header'] = var6;
                    var2['options'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['handleSortStart'] = var3;
            var2 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = arg1;
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var8 = var1.order;
                    var9 = var1.channels;
                    var22 = var1.channelList;
                    var4 = var1.guild;
                    var _closure4_slot0 = var4;
                    var5 = _closure1_slot17;
                    var3 = var5.getLocalChannel;
                    var1 = var2.from;
                    var1 = var8[var1];
                    var21 = var3.bind(var5)(var1);
                    var _closure4_slot1 = var21;
                    var3 = var5.getLocalChannel;
                    var1 = var2.to;
                    var1 = var8[var1];
                    var3 = var3.bind(var5)(var1);
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var5 = 34;
                    var8 = var1[var5];
                    var1 = undefined;
                    var11 = var10.bind(var1)(var8);
                    var10 = var11.getDropData;
                    var25 = var2.from;
                    var23 = var2.to;
                    var27 = var11;
                    var26 = var21;
                    var24 = var3;
                    var2 = var27[var10](var26, var25, var24, var23, var22, var21);
                    var13 = null;
                    if(!(var13 != var2)) { _fun0013_ip = 733; continue _fun0013 }
 155:
                    if(!(var3 !== var21)) { _fun0013_ip = 733; continue _fun0013 }
 162:
                    if(!(var13 != var21)) { _fun0013_ip = 733; continue _fun0013 }
 169:
                    if(!(var13 != var3)) { _fun0013_ip = 733; continue _fun0013 }
 176:
                    var3 = _closure1_slot30;
                    var3 = var3.bind(var1)(var2, var4);
                    if(!var3) { _fun0013_ip = 733; continue _fun0013 }
 192:
                    var11 = var2.referenceId;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var5];
                    var8 = var4.bind(var1)(var3);
                    var5 = var8.getDnDUpdates;
                    var3 = var13 != var11;
                    var4 = null;
                    if(!var3) { _fun0013_ip = 245; continue _fun0013 }
 230:
                    var10 = _closure1_slot17;
                    var3 = var10.getLocalChannel;
                    var4 = var3.bind(var10)(var11);
 245:
                    var24 = var2.parentId;
                    var27 = var8;
                    var26 = var21;
                    var25 = var4;
                    var23 = var9;
                    var5 = var27[var5](var26, var25, var24, var23, var22);
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var1 = arg1;
                            var4 = var1.id;
                            var3 = _closure1_slot12;
                            var1 = var3.getChannel;
                            var3 = var1.bind(var3)(var4);
                            var1 = null;
                            if(!(var1 != var3)) { _fun0014_ip = 137; continue _fun0014 }
 31:
                            var6 = _closure1_slot12;
                            var5 = var6.getChannel;
                            var4 = var3.parent_id;
                            var5 = var5.bind(var6)(var4);
                            var4 = var3.type;
                            var3 = _closure1_slot18;
                            var3 = var3.GUILD_CATEGORY;
                            if(!(var4 !== var3)) { _fun0014_ip = 102; continue _fun0014 }
 70:
                            if(!(var1 != var5)) { _fun0014_ip = 102; continue _fun0014 }
 74:
                            var4 = _closure1_slot14;
                            var3 = var4.can;
                            var1 = _closure1_slot19;
                            var1 = var1.MANAGE_CHANNELS;
                            var1 = var3.bind(var4)(var1, var5);
                            _fun0014_ip = 135; continue _fun0014;
 102:
                            var5 = _closure1_slot14;
                            var4 = var5.can;
                            var2 = _closure1_slot19;
                            var3 = var2.MANAGE_CHANNELS;
                            var2 = _closure4_slot0;
                            var1 = var4.bind(var5)(var3, var2);
 135:
                            return var1;
 137:
                            var1 = false;
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var _closure4_slot3 = var4;
                    var3 = var21.parent_id;
                    var2 = var2.parentId;
                    if(!(var3 !== var2)) { _fun0013_ip = 322; continue _fun0013 }
 304:
                    var3 = var4.find;
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var2 = arg1;
                            var4 = var2.id;
                            var3 = _closure4_slot1;
                            var3 = var3.id;
                            if(!(var4 === var3)) { _fun0015_ip = 240; continue _fun0015 }
 27:
                            var6 = _closure1_slot12;
                            var5 = var6.getChannel;
                            var3 = var2.parent_id;
                            var12 = var5.bind(var6)(var3);
                            var6 = null;
                            if(!(var6 != var12)) { _fun0015_ip = 118; continue _fun0015 }
 56:
                            var8 = _closure1_slot14;
                            var7 = var8.can;
                            var3 = _closure1_slot19;
                            var5 = var3.MANAGE_ROLES;
                            var3 = _closure4_slot1;
                            var3 = var7.bind(var8)(var5, var3);
                            if(!var3) { _fun0015_ip = 118; continue _fun0015 }
 89:
                            var7 = _closure1_slot14;
                            var5 = var7.can;
                            var3 = _closure1_slot19;
                            var3 = var3.MANAGE_ROLES;
                            var3 = var5.bind(var7)(var3, var12);
                            if(var3) { _fun0015_ip = 122; continue _fun0015 }
 118:
                            var3 = true;
                            return var3;
 122:
                            var9 = _closure1_slot2;
                            var10 = _closure1_slot3;
                            var7 = 39;
                            var3 = var10[var7];
                            var8 = undefined;
                            var11 = var9.bind(var8)(var3);
                            var5 = var11.areChannelsLocked;
                            var3 = _closure4_slot1;
                            var5 = var5.bind(var11)(var3, var12);
                            var7 = var10[var7];
                            var8 = var9.bind(var8)(var7);
                            var7 = var8.areChannelsLocked;
                            var10 = _closure1_slot12;
                            var9 = var10.getChannel;
                            var4 = var3.parent_id;
                            var4 = var9.bind(var10)(var4);
                            var4 = var7.bind(var8)(var3, var4);
                            var3 = var3.parent_id;
                            var3 = var6 == var3;
                            if(!var3) { _fun0015_ip = 217; continue _fun0015 }
 214:
                            var3 = !var5;
 217:
                            if(var3) { _fun0015_ip = 229; continue _fun0015 }
 220:
                            if(!var4) { _fun0015_ip = 226; continue _fun0015 }
 223:
                            var4 = !var5;
 226:
                            var3 = var4;
 229:
                            if(!var3) { _fun0015_ip = 236; continue _fun0015 }
 232:
                            var _closure4_slot2 = var2;
 236:
                            var1 = true;
                            return var1;
 240:
                            var1 = false;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
 322:
                    var5 = function saveUpdates() {
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 36;
                        var2 = var5[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var6 = var7.localChannelUpdate;
                        var3 = _closure4_slot3;
                        var3 = var6.bind(var7)(var3);
                        var3 = 40;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.batchChannelUpdate;
                        var3 = _closure4_slot1;
                        var3 = var3.guild_id;
                        var2 = _closure4_slot3;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var _closure4_slot4 = var5;
                    var2 = _closure4_slot2;
                    if(!(var13 == var2)) { _fun0013_ip = 350; continue _fun0013 }
 341:
                    var2 = var5.bind(var1)();
                    _fun0013_ip = 733; continue _fun0013;
 350:
                    var4 = _closure1_slot12;
                    var3 = var4.getChannel;
                    var2 = _closure4_slot2;
                    var2 = var2.parent_id;
                    var18 = var3.bind(var4)(var2);
                    var3 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var2 = 41;
                    var2 = var14[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var15 = _closure1_slot0;
                    var11 = 18;
                    var8 = var14[var11];
                    var8 = var15.bind(var1)(var8);
                    var10 = var8.intl;
                    var9 = var10.string;
                    var8 = var14[var11];
                    var8 = var15.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.YWMtRU;
                    var8 = var9.bind(var10)(var8);
                    var2['title'] = var8;
                    var8 = var14[var11];
                    var8 = var15.bind(var1)(var8);
                    var12 = var8.intl;
                    var10 = var12.format;
                    var8 = var14[var11];
                    var8 = var15.bind(var1)(var8);
                    var8 = var8.t;
                    var9 = var8.iKW+jY;
                    var8 = {};
                    var16 = 42;
                    var14 = var14[var16];
                    var20 = var15.bind(var1)(var14);
                    var19 = var20.computeChannelName;
                    var25 = _closure1_slot16;
                    var24 = _closure1_slot15;
                    var23 = true;
                    var27 = var20;
                    var26 = var21;
                    var14 = var27[var19](var26, var25, var24, var23, var22);
                    var8['channelName'] = var14;
                    var14 = var13 != var18;
                    var13 = '';
                    if(!var14) { _fun0013_ip = 590; continue _fun0013 }
 552:
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot3;
                    var14 = var14[var16];
                    var17 = var15.bind(var1)(var14);
                    var16 = var17.computeChannelName;
                    var15 = _closure1_slot16;
                    var14 = _closure1_slot15;
                    var13 = var16.bind(var17)(var18, var15, var14);
 590:
                    var8['categoryName'] = var13;
                    var8 = var10.bind(var12)(var9, var8);
                    var2['body'] = var8;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var8 = var7[var11];
                    var8 = var10.bind(var1)(var8);
                    var12 = var8.intl;
                    var9 = var12.string;
                    var8 = var7[var11];
                    var8 = var10.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.eW8Gy8;
                    var8 = var9.bind(var12)(var8);
                    var2['confirmText'] = var8;
                    var8 = var7[var11];
                    var8 = var10.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var7[var11];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.s4uM3d;
                    var7 = var8.bind(var9)(var7);
                    var2['cancelText'] = var7;
                    var6 = function onConfirm() {
                        var3 = _closure4_slot2;
                        var2 = true;
                        var3['lock_permissions'] = var2;
                        var2 = _closure4_slot4;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2['onConfirm'] = var6;
                    var2['onCancel'] = var5;
                    var2 = var3.bind(var4)(var2);
 733:
                    return var1;
                }
            };
            var1['handleDrop'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.updateNavigation;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.updateNavigation;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'updateNavigation';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var5 = _closure1_slot23;
                var4 = var2.context;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var _closure3_slot1 = var4;
                var2 = var2.props;
                var7 = var2.sortingType;
                var11 = var2.order;
                var4 = var2.navigation;
                var13 = var2.guild;
                var8 = var2.channels;
                var12 = var2.user;
                var5 = null;
                var2 = var5 != var3;
                if(!var2) { _fun0016_ip = 93; continue _fun0016 }
 83:
                var10 = var3.sortingType;
                var2 = var7 === var10;
 93:
                if(!var2) { _fun0016_ip = 106; continue _fun0016 }
 96:
                var10 = var3.order;
                var2 = var11 === var10;
 106:
                if(!var2) { _fun0016_ip = 118; continue _fun0016 }
 109:
                var10 = var3.guild;
                var2 = var13 === var10;
 118:
                if(!var2) { _fun0016_ip = 131; continue _fun0016 }
 121:
                var3 = var3.channels;
                var2 = var8 === var3;
 131:
                if(var2) { _fun0016_ip = 309; continue _fun0016 }
 137:
                var3 = var4.setOptions;
                var2 = {};
                var11 = var5 != var7;
                var10 = undefined;
                if(!var11) { _fun0016_ip = 161; continue _fun0016 }
 154:
                var10 = function() {
                    var1 = null;
                    return var1;
                };
 161:
                var2['headerLeft'] = var10;
                if(!(var5 == var7)) { _fun0016_ip = 223; continue _fun0016 }
 170:
                var11 = _closure1_slot2;
                var14 = _closure1_slot3;
                var10 = 39;
                var10 = var14[var10];
                var11 = var11.bind(var1)(var10);
                var10 = var11.canManageACategory;
                var8 = var8._categories;
                var10 = var10.bind(var11)(var12, var13, var8);
                var8 = undefined;
                if(!var10) { _fun0016_ip = 221; continue _fun0016 }
 214:
                var8 = function() {
                    var4 = _closure1_slot21;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var1 = 43;
                    var1 = var10[var1];
                    var3 = undefined;
                    var1 = var9.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var6 = _closure3_slot1;
                    var6 = var6.headerRight;
                    var1['textStyle'] = var6;
                    var6 = 18;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.0dOFq6;
                    var6 = var7.bind(var8)(var6);
                    var1['text'] = var6;
                    var5 = _closure3_slot0;
                    var5 = var5.handleSortStart;
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
 221:
                _fun0016_ip = 230; continue _fun0016;
 223:
                var8 = function() {
                    var4 = _closure1_slot21;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var1 = 43;
                    var1 = var10[var1];
                    var3 = undefined;
                    var1 = var9.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var6 = _closure3_slot1;
                    var6 = var6.headerRight;
                    var1['textStyle'] = var6;
                    var6 = 18;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.i4jeWV;
                    var6 = var7.bind(var8)(var6);
                    var1['text'] = var6;
                    var5 = _closure3_slot0;
                    var5 = var5.handleSortStop;
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
 230:
                var2['headerRight'] = var8;
                var7 = var5 != var7;
                var5 = undefined;
                if(!var7) { _fun0016_ip = 299; continue _fun0016 }
 244:
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 18;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.OGiMXF;
                var5 = var7.bind(var8)(var6);
 299:
                var2['headerTitle'] = var5;
                var2 = var3.bind(var4)(var2);
 309:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var12 = this;
                var2 = _closure1_slot23;
                var1 = var12.context;
                var4 = undefined;
                var5 = var2.bind(var4)(var1);
                var1 = var12.props;
                var3 = var1.channels;
                var15 = var1.order;
                var8 = var1.sortingType;
                var11 = var1.guild;
                var1 = var12.state;
                var2 = var1.hovering;
                var1 = function getListViewData(arg1, arg2, arg3) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var3 = arg1;
                        var _closure4_slot0 = var3;
                        var1 = arg2;
                        var _closure4_slot1 = var1;
                        var1 = arg3;
                        var _closure4_slot2 = var1;
                        var1 = new Array(0);
                        var _closure4_slot3 = var1;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0018_ip = 72; continue _fun0018 }
 37:
                        var4 = -1;
                        var _closure4_slot4 = var4;
                        var4 = var3._categories;
                        var3 = var4.forEach;
                        var2 = function(arg1) {
                            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                                var1 = arg1;
                                var5 = var1.channel;
                                var1 = undefined;
                                var _closure5_slot0 = var1;
                                var4 = var5.id;
                                var2 = 'null';
                                if(!(var2 !== var4)) { _fun0019_ip = 61; continue _fun0019 }
 29:
                                var6 = _closure1_slot14;
                                var4 = var6.can;
                                var2 = _closure1_slot19;
                                var2 = var2.VIEW_CHANNEL;
                                var2 = var4.bind(var6)(var2, var5);
                                if(!var2) { _fun0019_ip = 159; continue _fun0019 }
 61:
                                var6 = _closure4_slot4;
                                var4 = 1;
                                var4 = var6 + var4;
                                _closure4_slot4 = var4;
                                var4 = {};
                                var6 = new Array(0);
                                var4['data'] = var6;
                                var4['category'] = var5;
                                var6 = var5.id;
                                var4['key'] = var6;
                                var6 = _closure4_slot4;
                                var4['index'] = var6;
                                _closure5_slot0 = var4;
                                var6 = _closure4_slot0;
                                var5 = var5.id;
                                var6 = var6[var5];
                                var5 = var6.forEach;
                                var3 = function(arg1) {
                                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                                        var1 = arg1;
                                        var5 = var1.channel;
                                        var2 = _closure4_slot1;
                                        var1 = null;
                                        var1 = var1 == var2;
                                        if(var1) { _fun0020_ip = 43; continue _fun0020 }
 24:
                                        var6 = _closure4_slot1;
                                        var3 = var6.has;
                                        var2 = var5.type;
                                        var1 = var3.bind(var6)(var2);
 43:
                                        if(!var1) { _fun0020_ip = 131; continue _fun0020 }
 46:
                                        var1 = _closure4_slot4;
                                        var1 = var1 + 1;
                                        _closure4_slot4 = var1;
                                        var1 = _closure5_slot0;
                                        var3 = var1.data;
                                        var2 = var3.push;
                                        var1 = {};
                                        var6 = var5.id;
                                        var1['key'] = var6;
                                        var1['channel'] = var5;
                                        var6 = _closure4_slot1;
                                        var1['sortingType'] = var6;
                                        var6 = _closure4_slot2;
                                        var5 = var5.id;
                                        var5 = var6 === var5;
                                        var1['isHovered'] = var5;
                                        var4 = _closure4_slot4;
                                        var1['index'] = var4;
                                        var1 = var2.bind(var3)(var1);
 131:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure4_slot3;
                                var2 = var3.push;
                                var2 = var2.bind(var3)(var4);
 159:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
 72:
                        return var1;
                    }
                };
                var7 = var1.bind(var4)(var3, var8, var2);
                var3 = _closure1_slot22;
                var2 = _closure1_slot10;
                var1 = {};
                var5 = var5.containerView;
                var1['style'] = var5;
                var10 = _closure1_slot21;
                var9 = _closure1_slot1;
                var13 = _closure1_slot3;
                var5 = 44;
                var5 = var13[var5];
                var9 = var9.bind(var4)(var5);
                var5 = {};
                var5['sections'] = var7;
                var7 = null;
                var13 = var7 != var8;
                var5['sortingEnabled'] = var13;
                var13 = var12.renderSectionHeader;
                var5['renderSectionHeader'] = var13;
                var13 = var12.renderItem;
                var5['renderItem'] = var13;
                var13 = var12.handleDrop;
                var5['onRowMoved'] = var13;
                var14 = _closure1_slot20;
                var13 = new Array(1);
                var13[0] = var14;
                var16 = 1;
                var18 = var13;
                var17 = var15;
                var14 = arraySpread(var18, var17, var16);
                var5['order'] = var13;
                var13 = var12.handleHoverChange;
                var5['onHoverChange'] = var13;
                var13 = var12.renderActiveDivider;
                var5['renderActiveDivider'] = var13;
                var13 = var12.props;
                var13 = var13.contentContainerStyle;
                var5['contentContainerStyle'] = var13;
                var12 = var12.props;
                var12 = var12.fontScale;
                var5['fontScale'] = var12;
                var9 = var10.bind(var4)(var9, var5);
                var5 = new Array(3);
                var5[0] = var9;
                var7 = var7 == var8;
                if(!var7) { _fun0017_ip = 297; continue _fun0017 }
 277:
                var10 = _closure1_slot21;
                var9 = _closure1_slot31;
                var8 = {};
                var8['guild'] = var11;
                var7 = var10.bind(var4)(var9, var8);
 297:
                var5[1] = var7;
                var8 = _closure1_slot21;
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var6 = 45;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.NavScrim;
                var6 = {};
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleChannelPress';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 46;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleSortStop';
        var5['key'] = var7;
        var7 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 36;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.stopReordering;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleStartSorting';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 36;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.startReordering;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var7.bind(var1)(var8);
    var _closure1_slot26 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 50;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsModalChannelsConnected(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var17 = var2.contentContainerStyle;
            var _closure2_slot1 = var17;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var5 = 47;
            var6 = var4[var5];
            var5 = undefined;
            var7 = var3.bind(var5)(var6);
            var6 = var7.useNavigation;
            var14 = var6.bind(var7)();
            var7 = 25;
            var6 = var4[var7];
            var10 = var3.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot13;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var9.bind(var10)(var8, var6);
            var6 = var4[var7];
            var11 = var3.bind(var5)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot17;
            var9 = new Array(1);
            var9[0] = var6;
            var8 = function() {
                var1 = _closure1_slot17;
                var1 = var1.channels;
                return var1;
            };
            var12 = var10.bind(var11)(var9, var8);
            var8 = var4[var7];
            var11 = var3.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot16;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot16;
                var1 = var3.getCurrentUser;
                var1 = var1.bind(var3)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 48;
                var2 = var4[var2];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var2 = null;
                var3 = var2 != var1;
                var2 = 'GuildSettingsModalChannelsConnected: currentUser cannot be undefined';
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var11 = var10.bind(var11)(var9, var8);
            var8 = var4[var7];
            var15 = var3.bind(var5)(var8);
            var10 = var15.useStateFromStores;
            var9 = new Array(1);
            var9[0] = var6;
            var8 = function() {
                var1 = _closure1_slot17;
                var1 = var1.channelList;
                return var1;
            };
            var10 = var10.bind(var15)(var9, var8);
            var8 = var4[var7];
            var16 = var3.bind(var5)(var8);
            var15 = var16.useStateFromStores;
            var9 = new Array(1);
            var9[0] = var6;
            var8 = function() {
                var1 = _closure1_slot17;
                var1 = var1.order;
                return var1;
            };
            var9 = var15.bind(var16)(var9, var8);
            var7 = var4[var7];
            var15 = var3.bind(var5)(var7);
            var8 = var15.useStateFromStores;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var1 = _closure1_slot17;
                var1 = var1.sortingType;
                return var1;
            };
            var8 = var8.bind(var15)(var7, var6);
            var _closure2_slot2 = var8;
            var7 = _closure1_slot1;
            var6 = 29;
            var6 = var4[var6];
            var6 = var7.bind(var5)(var6);
            var16 = var6.bind(var5)();
            var _closure2_slot3 = var16;
            var15 = _closure1_slot9;
            var7 = var15.useMemo;
            var6 = new Array(3);
            var6[0] = var17;
            var16 = var16.bottom;
            var6[1] = var16;
            var6[2] = var8;
            var1 = function() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0022_ip = 19; continue _fun0022 }
 13:
                    var1 = _closure2_slot1;
                    _fun0022_ip = 68; continue _fun0022;
 19:
                    var3 = _closure2_slot1;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var4 = _closure2_slot3;
                    var5 = var4.bottom;
                    var4 = 32;
                    var5 = var5 + var4;
                    var4 = 44;
                    var4 = var5 + var4;
                    var3['paddingBottom'] = var4;
                    var2[1] = var3;
                    var1 = var2;
 68:
                    return var1;
                }
            };
            var7 = var7.bind(var15)(var1, var6);
            var1 = 49;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useFontScale;
            var6 = var1.bind(var3)();
            var4 = null;
            var3 = var4 == var9;
            var1 = null;
            if(var3) { _fun0021_ip = 483; continue _fun0021 }
 388:
            var3 = var4 == var10;
            var1 = null;
            if(var3) { _fun0021_ip = 483; continue _fun0021 }
 397:
            var3 = var4 == var12;
            var1 = null;
            if(var3) { _fun0021_ip = 483; continue _fun0021 }
 406:
            var3 = var4 == var13;
            var1 = null;
            if(var3) { _fun0021_ip = 483; continue _fun0021 }
 415:
            var3 = var4 == var11;
            var1 = null;
            if(var3) { _fun0021_ip = 483; continue _fun0021 }
 424:
            var4 = _closure1_slot21;
            var3 = _closure1_slot26;
            var2 = {};
            var2['navigation'] = var14;
            var2['guild'] = var13;
            var2['channels'] = var12;
            var2['user'] = var11;
            var2['channelList'] = var10;
            var2['order'] = var9;
            var2['sortingType'] = var8;
            var2['contentContainerStyle'] = var7;
            var2['fontScale'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 483:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
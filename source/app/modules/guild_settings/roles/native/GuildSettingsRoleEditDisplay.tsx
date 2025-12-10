// app/modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Platform;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isEveryoneRole;
    var _closure1_slot5 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RoleColorsStyle;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STYLE_CONFIGS;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.Fonts;
    var7 = var4.DEFAULT_ROLE_COLOR;
    var _closure1_slot9 = var7;
    var4 = var4.MAX_ROLE_LENGTH;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_GRADIENT_ROLE_COLORS;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TitleStyleType;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.jsxs;
    var _closure1_slot14 = var7;
    var4 = var4.Fragment;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = 16;
    var9['paddingVertical'] = var13;
    var4['input'] = var9;
    var14 = 'row';
    var13 = 'center';
    var9 = {'flexGrow': 1, 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'paddingRight': 8};
    var4['labelRow'] = var9;
    var9 = {'paddingTop': 2, 'opacity': 0.5};
    var4['roleIcon'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['trailingColorContainer'] = var9;
    var9 = {'position': 'absolute', 'top': '50%', 'right': 8};
    var16 = {};
    var15 = -6;
    var16['translateY'] = var15;
    var15 = new Array(1);
    var15[0] = var16;
    var9['transform'] = var15;
    var4['ercRow'] = var9;
    var9 = {'marginHorizontal': 0, 'marginVertical': 0, 'marginRight': 8, 'minWidth': 24, 'height': 24, 'borderRadius': 3};
    var4['colorBlock'] = var9;
    var9 = {};
    var15 = 'capitalize';
    var9['textTransform'] = var15;
    var4['iconFormLabel'] = var9;
    var9 = {};
    var10 = var10.PRIMARY_SEMIBOLD;
    var9['fontFamily'] = var10;
    var9['flex'] = var12;
    var10 = 10;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.RED_400;
    var9['color'] = var15;
    var4['deleteText'] = var9;
    var9 = {};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_FEEDBACK_INFO;
    var9['backgroundColor'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9['padding'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var9['marginHorizontal'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var16 = var15.PX_12;
    var15 = -1;
    var15 = var15 * var16;
    var9['marginTop'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var9['marginBottom'] = var15;
    var15 = 'flex';
    var9['display'] = var15;
    var9['flexDirection'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9['gap'] = var14;
    var9['justifyContent'] = var13;
    var9['alignItems'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var9['borderWidth'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.ICON_FEEDBACK_INFO;
    var9['borderColor'] = var10;
    var4['holographicInfo'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleEditDisplay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = var4.guild;
            var _closure2_slot0 = var2;
            var11 = var4.role;
            var _closure2_slot1 = var11;
            var34 = var4.name;
            var14 = var4.mentionable;
            var22 = var4.hoist;
            var33 = var4.onNameChanged;
            var13 = var4.onMentionableChanged;
            var21 = var4.onHoistChanged;
            var1 = var4.onRoleColorChanged;
            var _closure2_slot2 = var1;
            var3 = var4.locked;
            var31 = var4.autoFocusInput;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var5 = _closure1_slot16;
            var26 = var5.bind(var4)();
            var5 = _closure1_slot5;
            var17 = var5.bind(var4)(var11);
            var16 = var17;
            if(var17) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = var3;
case 2:
            var10 = var11.id;
            _closure2_slot3 = var10;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 11;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var5 = var8.useHasEnhancedRoleColorsForRole;
            var3 = var2.id;
            var5 = var5.bind(var8)(var3, var11);
            var3 = 12;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getRoleStyleData;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var8)(var6, var3);
            var6 = null;
            if(!(var6 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var5 = _closure1_slot7;
            var9 = var5.SOLID;
            _fun0001_ip = 7; continue _fun0001;
case 6:
            var9 = var3.currentStyle;
case 7:
            _closure2_slot4 = var9;
            var8 = _closure1_slot8;
            var7 = var8.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot4;
                var1 = var2 === var1;
                return var1;
            };
            var24 = var7.bind(var8)(var5);
            var5 = var6 == var3;
            var32 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var3.styleColors;
            var5 = var6 == var3;
            var32 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var32 = var3[var9];
case 8:
            var3 = var6 == var32;
            var29 = undefined;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var29 = var32.primary_color;
case 11:
            if(!(var6 != var29)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = 0;
            if(!(var3 === var29)) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var29 = _closure1_slot9;
case 15:
            _closure2_slot5 = var29;
            if(!(var6 != var32)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var6 == var32;
            var3 = undefined;
            if(var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var32.secondary_color;
case 18:
            if(!(var6 == var3)) { _fun0001_ip = 20; continue _fun0001 }
case 16:
            var32 = _closure1_slot11;
case 20:
            _closure2_slot6 = var32;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 13;
            var3 = var8[var3];
            var7 = var5.bind(var4)(var3);
            var3 = var7.canGuildUseRoleIcons;
            var7 = var3.bind(var7)(var2, var11);
            var3 = 14;
            var3 = var8[var3];
            var12 = var5.bind(var4)(var3);
            var5 = var12.useRoleIcon;
            var3 = {};
            var8 = var2.id;
            var3['guildId'] = var8;
            var8 = var11.id;
            var3['roleId'] = var8;
            var8 = 26;
            var3['size'] = var8;
            var25 = var5.bind(var12)(var3);
            if(!(var6 == var25)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var12 = _closure1_slot13;
            var23 = _closure1_slot1;
            var20 = _closure1_slot2;
            var18 = 15;
            var3 = var20[var18];
            var5 = var23.bind(var4)(var3);
            var3 = {};
            var19 = 16;
            var19 = var20[var19];
            var19 = var23.bind(var4)(var19);
            var3['source'] = var19;
            var19 = _closure1_slot0;
            var18 = var20[var18];
            var18 = var19.bind(var4)(var18);
            var18 = var18.IconSizes;
            var18 = var18.MEDIUM;
            var3['size'] = var18;
            var25 = var12.bind(var4)(var5, var3);
case 21:
            var5 = _closure1_slot3;
            var18 = var5.useCallback;
            var12 = new Array(5);
            var12[0] = var10;
            var12[1] = var32;
            var12[2] = var29;
            var12[3] = var9;
            var12[4] = var1;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot7;
                    var2 = var2.SOLID;
                    if(!(var4 !== var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot7;
                    var2 = var2.GRADIENT;
                    if(!(var4 === var2)) { _fun0002_ip = 7; continue _fun0002 }
case 25:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 17;
                    var4 = var2[var4];
                    var9 = undefined;
                    var8 = var5.bind(var9)(var4);
                    var7 = var8.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 19;
                    var4 = var2[var4];
                    var5 = var5.bind(var9)(var4);
                    var4 = 21;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var5 = var5.bind(var9)(var4, var2);
                    var4 = {};
                    var2 = _closure2_slot6;
                    var4['colors'] = var2;
                    var2 = function onSelect(arg1) {
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var6 = var7.updateRoleColors;
                        var5 = _closure2_slot3;
                        var3 = _closure1_slot7;
                        var4 = var3.GRADIENT;
                        var3 = arg1;
                        var3 = var6.bind(var7)(var5, var3, var4);
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var4['onSelect'] = var2;
                    var2 = 'RoleColorPicker';
                    var2 = var7.bind(var8)(var5, var2, var4);
                    _fun0002_ip = 7; continue _fun0002;
case 23:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 17;
                    var4 = var2[var4];
                    var8 = undefined;
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var3 = 19;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 18;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot5;
                    var2['color'] = var6;
                    var1 = function onSelect(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 20;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.updateRoleColor;
                        var4 = _closure2_slot3;
                        var3 = arg1;
                        var3 = var5.bind(var6)(var4, var3);
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var2['onSelect'] = var1;
                    var1 = 'RoleColorPicker';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 7:
                    var1 = undefined;
                    return var1;
                }
            };
            var35 = var18.bind(var5)(var3, var12);
            var3 = var5.useCallback;
            var12 = var2.id;
            var2 = new Array(5);
            var2[0] = var12;
            var2[1] = var11;
            var2[2] = var10;
            var2[3] = var9;
            var2[4] = var1;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 19;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 22;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var1)(var3, var2);
                var3 = {};
                var7 = _closure2_slot0;
                var7 = var7.id;
                var3['guildId'] = var7;
                var7 = _closure2_slot1;
                var3['role'] = var7;
                var2 = _closure2_slot4;
                var3['roleStyle'] = var2;
                var2 = function onStyleChanged(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.updateRoleStyles;
                    var4 = _closure2_slot3;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var4, var3);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3['onStyleChanged'] = var2;
                var2 = 'EnhancedRoleColorsSelectStyleModal';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var28 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot15;
            var1 = {};
            var20 = _closure1_slot13;
            var27 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 23;
            var5 = var23[var18];
            var5 = var27.bind(var4)(var5);
            var10 = var5.FormSection;
            var5 = {};
            var12 = _closure1_slot12;
            var12 = var12.ANDROID_NO_BORDER;
            var5['titleStyleType'] = var12;
            var19 = 24;
            var12 = var23[var19];
            var12 = var27.bind(var4)(var12);
            var37 = var12.intl;
            var30 = var37.string;
            var12 = var23[var19];
            var12 = var27.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.dLbkBk;
            var12 = var30.bind(var37)(var12);
            var5['title'] = var12;
            var12 = true;
            var5['thinTitle'] = var12;
            var12 = var23[var18];
            var12 = var27.bind(var4)(var12);
            var30 = var12.FormInput;
            var12 = {};
            var37 = var26.input;
            var12['style'] = var37;
            var12['value'] = var34;
            var12['disabled'] = var16;
            var12['onChange'] = var33;
            var33 = false;
            var12['showTopContainer'] = var33;
            var33 = _closure1_slot10;
            var12['maxLength'] = var33;
            var12['autoFocus'] = var31;
            var31 = 25;
            var31 = var23[var31];
            var31 = var27.bind(var4)(var31);
            var31 = var31.ClearButtonVisibility;
            var31 = var31.ALWAYS;
            var12['clearButtonVisibility'] = var31;
            var12 = var20.bind(var4)(var30, var12);
            var5['children'] = var12;
            var10 = var20.bind(var4)(var10, var5);
            var5 = new Array(6);
            var5[0] = var10;
            var10 = _closure1_slot1;
            var8 = var23[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var8['role'] = var11;
            var8 = var20.bind(var4)(var10, var8);
            var5[1] = var8;
            var8 = var23[var18];
            var8 = var27.bind(var4)(var8);
            var10 = var8.FormSection;
            var8 = {};
            var11 = var23[var18];
            var11 = var27.bind(var4)(var11);
            var12 = var11.FormRow;
            var11 = {};
            var30 = var23[var19];
            var30 = var27.bind(var4)(var30);
            var33 = var30.intl;
            var31 = var33.string;
            var30 = var23[var19];
            var30 = var27.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.9wVJRB;
            var30 = var31.bind(var33)(var30);
            var11['label'] = var30;
            var11['onPress'] = var28;
            var23 = var23[var18];
            var23 = var27.bind(var4)(var23);
            var23 = var23.FormRow;
            var23 = var23.Arrow;
            var11['trailing'] = var23;
            var27 = var6 == var24;
            var23 = undefined;
            if(var27) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var23 = var24.labelString;
case 26:
            var27 = var6 != var23;
            var23 = '';
            if(!var27) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var28 = _closure1_slot0;
            var27 = _closure1_slot2;
            var27 = var27[var19];
            var27 = var28.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var24 = var24.labelString;
            var23 = var27.bind(var28)(var24);
case 28:
            var11['subLabel'] = var23;
            var11['disabled'] = var16;
            var12 = var20.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var12 = _closure1_slot7;
            var12 = var12.HOLOGRAPHIC;
            var12 = var9 !== var12;
            if(!var12) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var24 = _closure1_slot13;
            var31 = _closure1_slot0;
            var27 = _closure1_slot2;
            var20 = var27[var18];
            var20 = var31.bind(var4)(var20);
            var23 = var20.FormRow;
            var20 = {};
            var28 = var27[var19];
            var28 = var31.bind(var4)(var28);
            var30 = var28.intl;
            var28 = var30.string;
            var27 = var27[var19];
            var27 = var31.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.5NC5YW;
            var27 = var28.bind(var30)(var27);
            var20['label'] = var27;
            var20['onPress'] = var35;
            var30 = _closure1_slot14;
            var28 = _closure1_slot4;
            var27 = {};
            var31 = var26.trailingColorContainer;
            var27['style'] = var31;
            var31 = _closure1_slot7;
            var31 = var31.GRADIENT;
            if(!(var9 !== var31)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var34 = _closure1_slot13;
            var33 = _closure1_slot1;
            var37 = _closure1_slot2;
            var31 = 30;
            var31 = var37[var31];
            var33 = var33.bind(var4)(var31);
            var31 = {};
            var31['color'] = var29;
            var37 = var26.colorBlock;
            var31['style'] = var37;
            var31['onSelect'] = var35;
            var33 = var34.bind(var4)(var33, var31);
            _fun0001_ip = 34; continue _fun0001;
case 32:
            var35 = _closure1_slot13;
            var34 = _closure1_slot1;
            var37 = _closure1_slot2;
            var31 = 27;
            var31 = var37[var31];
            var34 = var34.bind(var4)(var31);
            var31 = {};
            var38 = var6 == var32;
            var37 = undefined;
            if(var38) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var37 = var32.primary_color;
case 35:
            var39 = new Array(3);
            var39[0] = var37;
            var38 = var6 == var32;
            var37 = undefined;
            if(var38) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var37 = var32.secondary_color;
case 37:
            var39[1] = var37;
            var38 = var6 == var32;
            var37 = undefined;
            if(var38) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var37 = var32.tertiary_color;
case 39:
            var39[2] = var37;
            var38 = var39.filter;
            var40 = _closure1_slot0;
            var41 = _closure1_slot2;
            var37 = 28;
            var37 = var41[var37];
            var37 = var40.bind(var4)(var37);
            var37 = var37.isNotNullish;
            var38 = var38.bind(var39)(var37);
            var37 = var38.map;
            var36 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var36 = var37.bind(var38)(var36);
            var31['colors'] = var36;
            var36 = {'x': 0, 'y': 0};
            var31['start'] = var36;
            var36 = {'x': 1, 'y': 0};
            var31['end'] = var36;
            var36 = var26.colorBlock;
            var31['style'] = var36;
            var33 = var35.bind(var4)(var34, var31);
case 34:
            var31 = new Array(2);
            var31[0] = var33;
            var35 = _closure1_slot13;
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var33 = var33[var18];
            var33 = var34.bind(var4)(var33);
            var33 = var33.FormRow;
            var34 = var33.Arrow;
            var33 = {};
            var33 = var35.bind(var4)(var34, var33);
            var31[1] = var33;
            var27['children'] = var31;
            var27 = var30.bind(var4)(var28, var27);
            var20['trailing'] = var27;
            var27 = _closure1_slot7;
            var27 = var27.GRADIENT;
            if(!(var9 !== var27)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var28 = _closure1_slot0;
            var30 = _closure1_slot2;
            var27 = 29;
            var27 = var30[var27];
            var28 = var28.bind(var4)(var27);
            var27 = var28.int2hex;
            var27 = var27.bind(var28)(var29);
            _fun0001_ip = 43; continue _fun0001;
case 41:
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var31 = 29;
            var28 = var28[var31];
            var33 = var29.bind(var4)(var28);
            var29 = var33.int2hex;
            var28 = var6 == var32;
            var34 = undefined;
            if(var28) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var34 = var32.primary_color;
case 44:
            var35 = var6 != var34;
            var28 = 0;
            if(!var35) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var28 = var34;
case 46:
            var33 = var29.bind(var33)(var28);
            var29 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var31];
            var29 = var29.bind(var4)(var28);
            var28 = var29.int2hex;
            var34 = var6 == var32;
            var31 = undefined;
            if(var34) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var31 = var32.secondary_color;
case 48:
            var32 = var6 != var31;
            var30 = 0;
            if(!var32) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var30 = var31;
case 50:
            var43 = var28.bind(var29)(var30);
            var28 = global;
            var28 = var28.HermesInternal;
            var31 = var28.concat;
            var46 = '[';
            var44 = ', ';
            var42 = ']';
            var45 = var33;
            var27 = var46[var31](var45, var44, var43, var42, var41);
case 43:
            var20['subLabel'] = var27;
            var20['disabled'] = var16;
            var12 = var24.bind(var4)(var23, var20);
case 30:
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var3.bind(var4)(var10, var8);
            var5[2] = var8;
            var8 = _closure1_slot7;
            var8 = var8.HOLOGRAPHIC;
            var8 = var9 === var8;
            if(!var8) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var11 = _closure1_slot14;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var26.holographicInfo;
            var9['style'] = var12;
            var24 = _closure1_slot13;
            var28 = _closure1_slot0;
            var31 = _closure1_slot2;
            var12 = 31;
            var12 = var31[var12];
            var12 = var28.bind(var4)(var12);
            var20 = var12.CircleInformationIcon;
            var12 = {};
            var23 = 'sm';
            var12['size'] = var23;
            var30 = _closure1_slot1;
            var23 = 10;
            var23 = var31[var23];
            var23 = var30.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.ICON_FEEDBACK_INFO;
            var12['color'] = var23;
            var20 = var24.bind(var4)(var20, var12);
            var12 = new Array(2);
            var12[0] = var20;
            var20 = 32;
            var20 = var31[var20];
            var20 = var28.bind(var4)(var20);
            var23 = var20.Text;
            var20 = {};
            var27 = 'text-sm/normal';
            var20['variant'] = var27;
            var27 = var31[var19];
            var27 = var28.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = 33;
            var27 = var31[var27];
            var27 = var30.bind(var4)(var27);
            var27 = var27.tBhCyr;
            var27 = var28.bind(var29)(var27);
            var20['children'] = var27;
            var20 = var24.bind(var4)(var23, var20);
            var12[1] = var20;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 52:
            var5[3] = var8;
            var6 = null;
            if(!var7) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var9 = _closure1_slot13;
            var24 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = var12[var18];
            var7 = var24.bind(var4)(var7);
            var8 = var7.FormSection;
            var7 = {};
            var10 = var12[var18];
            var10 = var24.bind(var4)(var10);
            var11 = var10.FormRow;
            var10 = {};
            var10['disabled'] = var16;
            var20 = var12[var18];
            var20 = var24.bind(var4)(var20);
            var23 = var20.FormLabel;
            var20 = {};
            var27 = var26.iconFormLabel;
            var20['style'] = var27;
            var27 = var12[var19];
            var27 = var24.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.string;
            var27 = var12[var19];
            var27 = var24.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.B9grJw;
            var27 = var28.bind(var29)(var27);
            var20['text'] = var27;
            var20 = var9.bind(var4)(var23, var20);
            var10['label'] = var20;
            var23 = _closure1_slot4;
            var20 = {};
            var26 = var26.roleIcon;
            var20['style'] = var26;
            var20['children'] = var25;
            var20 = var9.bind(var4)(var23, var20);
            var10['trailing'] = var20;
            var20 = var12[var19];
            var20 = var24.bind(var4)(var20);
            var23 = var20.intl;
            var20 = var23.string;
            var12 = var12[var19];
            var12 = var24.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.ZTpgyG;
            var12 = var20.bind(var23)(var12);
            var10['subLabel'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 54:
            var5[4] = var6;
            var8 = _closure1_slot14;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = var9[var18];
            var6 = var10.bind(var4)(var6);
            var7 = var6.FormSection;
            var6 = {};
            var20 = _closure1_slot13;
            var9 = var9[var18];
            var9 = var10.bind(var4)(var9);
            var12 = var9.FormSwitchRow;
            var9 = {};
            var10 = var16;
            if(var16) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var10 = var17;
case 56:
            var9['disabled'] = var10;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var23 = var10[var19];
            var23 = var11.bind(var4)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var10[var19];
            var23 = var11.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.iVW5w4;
            var23 = var24.bind(var25)(var23);
            var9['label'] = var23;
            var9['value'] = var22;
            var9['onValueChange'] = var21;
            var21 = var10[var19];
            var21 = var11.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var10[var19];
            var21 = var11.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.vceJPk;
            var21 = var22.bind(var23)(var21);
            var9['subLabel'] = var21;
            var12 = var20.bind(var4)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var12 = _closure1_slot13;
            var20 = var10[var18];
            var20 = var11.bind(var4)(var20);
            var21 = var20.FormDivider;
            var20 = {};
            var20 = var12.bind(var4)(var21, var20);
            var9[1] = var20;
            var10 = var10[var18];
            var10 = var11.bind(var4)(var10);
            var11 = var10.FormSwitchRow;
            var10 = {};
            if(var16) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var16 = var17;
case 58:
            var10['disabled'] = var16;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = var15[var19];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var15[var19];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.DTXoJQ;
            var15 = {};
            var15 = var17.bind(var18)(var16, var15);
            var10['label'] = var15;
            var10['value'] = var14;
            var10['onValueChange'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
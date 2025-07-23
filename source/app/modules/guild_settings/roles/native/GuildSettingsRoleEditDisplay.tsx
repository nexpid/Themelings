// app/modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx
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
    var7 = var6[var1];
    var4 = native4;
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
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RoleColorsStyle;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.STYLE_CONFIGS;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.Fonts;
    var7 = var4.DEFAULT_ROLE_COLOR;
    var _closure1_slot8 = var7;
    var4 = var4.MAX_ROLE_LENGTH;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_GRADIENT_ROLE_COLORS;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TitleStyleType;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 8;
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
    var10 = 9;
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
    var15 = var15.INFO_HELP_BACKGROUND;
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
    var10 = var10.INFO_HELP_FOREGROUND;
    var9['borderColor'] = var10;
    var4['holographicInfo'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsRoleEditDisplay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = var4.guild;
            var _closure2_slot0 = var2;
            var24 = var4.role;
            var _closure2_slot1 = var24;
            var36 = var4.name;
            var14 = var4.mentionable;
            var22 = var4.hoist;
            var35 = var4.onNameChanged;
            var13 = var4.onMentionableChanged;
            var21 = var4.onHoistChanged;
            var1 = var4.onRoleColorChanged;
            var _closure2_slot2 = var1;
            var3 = var4.locked;
            var33 = var4.autoFocusInput;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var5 = _closure1_slot15;
            var26 = var5.bind(var4)();
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 10;
            var5 = var7[var5];
            var8 = var6.bind(var4)(var5);
            var7 = var8.isEveryoneRoleId;
            var6 = var2.id;
            var5 = var24.id;
            var17 = var7.bind(var8)(var6, var5);
            var16 = var17;
            if(var17) { _fun0001_ip = 161; continue _fun0001 }
 158:
            var16 = var3;
 161:
            var8 = var24.id;
            _closure2_slot3 = var8;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 11;
            var3 = var9[var3];
            var6 = var7.bind(var4)(var3);
            var5 = var6.useHasEnhancedRoleColorsForRole;
            var3 = var2.id;
            var5 = var5.bind(var6)(var3, var24);
            var3 = 12;
            var3 = var9[var3];
            var11 = var7.bind(var4)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getRoleStyleData;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var10.bind(var11)(var6, var3);
            var6 = 13;
            var6 = var9[var6];
            var9 = var7.bind(var4)(var6);
            var7 = var9.useERSMobileEditingExperiment;
            var6 = 'GuildSettingsRoleEditDisplay';
            var28 = var7.bind(var9)(var6);
            var6 = null;
            if(!(var6 != var3)) { _fun0001_ip = 287; continue _fun0001 }
 284:
            if(var5) { _fun0001_ip = 299; continue _fun0001 }
 287:
            var5 = _closure1_slot6;
            var10 = var5.SOLID;
            _fun0001_ip = 305; continue _fun0001;
 299:
            var10 = var3.currentStyle;
 305:
            _closure2_slot4 = var10;
            var9 = _closure1_slot7;
            var7 = var9.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot4;
                var1 = var2 === var1;
                return var1;
            };
            var29 = var7.bind(var9)(var5);
            var5 = var6 == var3;
            var34 = undefined;
            if(var5) { _fun0001_ip = 358; continue _fun0001 }
 339:
            var3 = var3.styleColors;
            var5 = var6 == var3;
            var34 = undefined;
            if(var5) { _fun0001_ip = 358; continue _fun0001 }
 354:
            var34 = var3[var10];
 358:
            var3 = var6 == var34;
            var31 = undefined;
            if(var3) { _fun0001_ip = 373; continue _fun0001 }
 367:
            var31 = var34.primary_color;
 373:
            if(!(var6 != var31)) { _fun0001_ip = 383; continue _fun0001 }
 377:
            var3 = 0;
            if(!(var3 === var31)) { _fun0001_ip = 387; continue _fun0001 }
 383:
            var31 = _closure1_slot8;
 387:
            _closure2_slot5 = var31;
            if(!(var6 != var34)) { _fun0001_ip = 414; continue _fun0001 }
 395:
            var5 = var6 == var34;
            var3 = undefined;
            if(var5) { _fun0001_ip = 410; continue _fun0001 }
 404:
            var3 = var34.secondary_color;
 410:
            if(!(var6 == var3)) { _fun0001_ip = 418; continue _fun0001 }
 414:
            var34 = _closure1_slot10;
 418:
            _closure2_slot6 = var34;
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 14;
            var3 = var9[var3];
            var7 = var5.bind(var4)(var3);
            var3 = var7.canGuildUseRoleIcons;
            var7 = var3.bind(var7)(var2, var24);
            var3 = 15;
            var3 = var9[var3];
            var9 = var5.bind(var4)(var3);
            var5 = var9.useRoleIcon;
            var3 = {};
            var11 = var2.id;
            var3['guildId'] = var11;
            var11 = var24.id;
            var3['roleId'] = var11;
            var30 = 26;
            var3['size'] = var30;
            var25 = var5.bind(var9)(var3);
            if(!(var6 == var25)) { _fun0001_ip = 586; continue _fun0001 }
 509:
            var9 = _closure1_slot12;
            var19 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 16;
            var3 = var18[var11];
            var5 = var19.bind(var4)(var3);
            var3 = {};
            var12 = 17;
            var12 = var18[var12];
            var12 = var19.bind(var4)(var12);
            var3['source'] = var12;
            var12 = _closure1_slot0;
            var11 = var18[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.IconSizes;
            var11 = var11.MEDIUM;
            var3['size'] = var11;
            var25 = var9.bind(var4)(var5, var3);
 586:
            var5 = _closure1_slot3;
            var11 = var5.useCallback;
            var9 = new Array(5);
            var9[0] = var8;
            var9[1] = var34;
            var9[2] = var31;
            var9[3] = var10;
            var9[4] = var1;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot6;
                    var2 = var2.SOLID;
                    if(!(var4 !== var2)) { _fun0002_ip = 146; continue _fun0002 }
 26:
                    var4 = _closure2_slot4;
                    var2 = _closure1_slot6;
                    var2 = var2.GRADIENT;
                    if(!(var4 === var2)) { _fun0002_ip = 243; continue _fun0002 }
 47:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 18;
                    var4 = var2[var4];
                    var9 = undefined;
                    var8 = var5.bind(var9)(var4);
                    var7 = var8.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 20;
                    var4 = var2[var4];
                    var5 = var5.bind(var9)(var4);
                    var4 = 22;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var5 = var5.bind(var9)(var4, var2);
                    var4 = {};
                    var2 = _closure2_slot6;
                    var4['colors'] = var2;
                    var2 = function onSelect(arg1) {
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var2);
                        var6 = var7.updateRoleColors;
                        var5 = _closure2_slot3;
                        var3 = _closure1_slot6;
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
                    _fun0002_ip = 243; continue _fun0002;
 146:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 18;
                    var4 = var2[var4];
                    var8 = undefined;
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var3 = 20;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 19;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot5;
                    var2['color'] = var6;
                    var1 = function onSelect(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 21;
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
 243:
                    var1 = undefined;
                    return var1;
                }
            };
            var37 = var11.bind(var5)(var3, var9);
            var3 = var5.useCallback;
            var9 = var2.id;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var24;
            var2[2] = var8;
            var2[3] = var10;
            var2[4] = var1;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 20;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 23;
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
                    var1 = 21;
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
            var32 = var3.bind(var5)(var1, var2);
            var1 = _closure1_slot6;
            var1 = var1.SOLID;
            var9 = var10 !== var1;
            if(!var9) { _fun0001_ip = 699; continue _fun0001 }
 696:
            var9 = !var28;
 699:
            var3 = _closure1_slot13;
            var2 = _closure1_slot14;
            var1 = {};
            var23 = _closure1_slot12;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var18 = 24;
            var5 = var8[var18];
            var5 = var11.bind(var4)(var5);
            var12 = var5.FormSection;
            var5 = {};
            var19 = _closure1_slot11;
            var19 = var19.ANDROID_NO_BORDER;
            var5['titleStyleType'] = var19;
            var19 = 25;
            var20 = var8[var19];
            var20 = var11.bind(var4)(var20);
            var39 = var20.intl;
            var27 = var39.string;
            var20 = var8[var19];
            var20 = var11.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.dLbkBg;
            var20 = var27.bind(var39)(var20);
            var5['title'] = var20;
            var20 = true;
            var5['thinTitle'] = var20;
            var20 = var8[var18];
            var20 = var11.bind(var4)(var20);
            var27 = var20.FormInput;
            var20 = {};
            var39 = var26.input;
            var20['style'] = var39;
            var20['value'] = var36;
            var20['disabled'] = var16;
            var20['onChange'] = var35;
            var35 = false;
            var20['showTopContainer'] = var35;
            var35 = _closure1_slot9;
            var20['maxLength'] = var35;
            var20['autoFocus'] = var33;
            var30 = var8[var30];
            var30 = var11.bind(var4)(var30);
            var30 = var30.ClearButtonVisibility;
            var30 = var30.ALWAYS;
            var20['clearButtonVisibility'] = var30;
            var20 = var23.bind(var4)(var27, var20);
            var5['children'] = var20;
            var12 = var23.bind(var4)(var12, var5);
            var5 = new Array(6);
            var5[0] = var12;
            var20 = _closure1_slot1;
            var12 = 27;
            var12 = var8[var12];
            var20 = var20.bind(var4)(var12);
            var12 = {};
            var12['role'] = var24;
            var12 = var23.bind(var4)(var20, var12);
            var5[1] = var12;
            var8 = var8[var18];
            var8 = var11.bind(var4)(var8);
            var11 = var8.FormSection;
            var8 = {};
            var20 = var28;
            if(!var20) { _fun0001_ip = 1170; continue _fun0001 }
 984:
            var24 = _closure1_slot12;
            var30 = _closure1_slot0;
            var27 = _closure1_slot2;
            var12 = var27[var18];
            var12 = var30.bind(var4)(var12);
            var23 = var12.FormRow;
            var12 = {};
            var33 = var27[var19];
            var33 = var30.bind(var4)(var33);
            var36 = var33.intl;
            var35 = var36.string;
            var33 = var27[var19];
            var33 = var30.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33.9wVJRE;
            var33 = var35.bind(var36)(var33);
            var12['label'] = var33;
            var12['onPress'] = var32;
            var27 = var27[var18];
            var27 = var30.bind(var4)(var27);
            var27 = var27.FormRow;
            var27 = var27.Arrow;
            var12['trailing'] = var27;
            var30 = var6 == var29;
            var27 = undefined;
            if(var30) { _fun0001_ip = 1106; continue _fun0001 }
 1100:
            var27 = var29.labelString;
 1106:
            var30 = var6 != var27;
            var27 = '';
            if(!var30) { _fun0001_ip = 1155; continue _fun0001 }
 1117:
            var32 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var19];
            var30 = var32.bind(var4)(var30);
            var32 = var30.intl;
            var30 = var32.string;
            var29 = var29.labelString;
            var27 = var30.bind(var32)(var29);
 1155:
            var12['subLabel'] = var27;
            var12['disabled'] = var16;
            var20 = var24.bind(var4)(var23, var12);
 1170:
            var12 = new Array(2);
            var12[0] = var20;
            var20 = _closure1_slot6;
            var20 = var20.HOLOGRAPHIC;
            var20 = var10 !== var20;
            if(var20) { _fun0001_ip = 1198; continue _fun0001 }
 1195:
            var20 = !var28;
 1198:
            if(!var20) { _fun0001_ip = 2052; continue _fun0001 }
 1204:
            var27 = _closure1_slot12;
            var33 = _closure1_slot0;
            var29 = _closure1_slot2;
            var23 = var29[var18];
            var23 = var33.bind(var4)(var23);
            var24 = var23.FormRow;
            var23 = {};
            var30 = var29[var19];
            var30 = var33.bind(var4)(var30);
            var32 = var30.intl;
            var30 = var32.string;
            var29 = var29[var19];
            var29 = var33.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.5NC5YW;
            var29 = var30.bind(var32)(var29);
            var23['label'] = var29;
            var23['onPress'] = var37;
            var32 = _closure1_slot13;
            var30 = _closure1_slot4;
            var29 = {};
            var33 = var26.trailingColorContainer;
            var29['style'] = var33;
            var33 = _closure1_slot6;
            var33 = var33.GRADIENT;
            if(!(var10 !== var33)) { _fun0001_ip = 1389; continue _fun0001 }
 1319:
            var33 = _closure1_slot6;
            var33 = var33.HOLOGRAPHIC;
            if(!(var10 !== var33)) { _fun0001_ip = 1389; continue _fun0001 }
 1333:
            var36 = _closure1_slot12;
            var35 = _closure1_slot1;
            var39 = _closure1_slot2;
            var33 = 31;
            var33 = var39[var33];
            var35 = var35.bind(var4)(var33);
            var33 = {};
            var33['color'] = var31;
            var39 = var26.colorBlock;
            var33['style'] = var39;
            var33['onSelect'] = var37;
            var35 = var36.bind(var4)(var35, var33);
            _fun0001_ip = 1577; continue _fun0001;
 1389:
            var37 = _closure1_slot12;
            var36 = _closure1_slot1;
            var39 = _closure1_slot2;
            var33 = 28;
            var33 = var39[var33];
            var36 = var36.bind(var4)(var33);
            var33 = {};
            var40 = var6 == var34;
            var39 = undefined;
            if(var40) { _fun0001_ip = 1430; continue _fun0001 }
 1424:
            var39 = var34.primary_color;
 1430:
            var41 = new Array(3);
            var41[0] = var39;
            var40 = var6 == var34;
            var39 = undefined;
            if(var40) { _fun0001_ip = 1453; continue _fun0001 }
 1447:
            var39 = var34.secondary_color;
 1453:
            var41[1] = var39;
            var40 = var6 == var34;
            var39 = undefined;
            if(var40) { _fun0001_ip = 1472; continue _fun0001 }
 1466:
            var39 = var34.tertiary_color;
 1472:
            var41[2] = var39;
            var40 = var41.filter;
            var42 = _closure1_slot0;
            var43 = _closure1_slot2;
            var39 = 29;
            var39 = var43[var39];
            var39 = var42.bind(var4)(var39);
            var39 = var39.isNotNullish;
            var40 = var40.bind(var41)(var39);
            var39 = var40.map;
            var38 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 30;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.int2hex;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var38 = var39.bind(var40)(var38);
            var33['colors'] = var38;
            var38 = {'x': 0, 'y': 0};
            var33['start'] = var38;
            var38 = {'x': 1, 'y': 0};
            var33['end'] = var38;
            var38 = var26.colorBlock;
            var33['style'] = var38;
            var35 = var37.bind(var4)(var36, var33);
 1577:
            var33 = new Array(3);
            var33[0] = var35;
            var35 = var9;
            if(!var9) { _fun0001_ip = 1690; continue _fun0001 }
 1591:
            var38 = _closure1_slot12;
            var40 = _closure1_slot0;
            var43 = _closure1_slot2;
            var36 = 32;
            var36 = var43[var36];
            var36 = var40.bind(var4)(var36);
            var37 = var36.Text;
            var36 = {};
            var39 = 'text-sm/normal';
            var36['variant'] = var39;
            var39 = var43[var19];
            var39 = var40.bind(var4)(var39);
            var41 = var39.intl;
            var40 = var41.string;
            var42 = _closure1_slot1;
            var39 = 33;
            var39 = var43[var39];
            var39 = var42.bind(var4)(var39);
            var39 = var39.vQz+6e;
            var39 = var40.bind(var41)(var39);
            var36['children'] = var39;
            var35 = var38.bind(var4)(var37, var36);
 1690:
            var33[1] = var35;
            var37 = _closure1_slot12;
            var36 = _closure1_slot0;
            var35 = _closure1_slot2;
            var35 = var35[var18];
            var35 = var36.bind(var4)(var35);
            var35 = var35.FormRow;
            var36 = var35.Arrow;
            var35 = {};
            var35 = var37.bind(var4)(var36, var35);
            var33[2] = var35;
            var29['children'] = var33;
            var29 = var32.bind(var4)(var30, var29);
            var23['trailing'] = var29;
            var29 = _closure1_slot6;
            var29 = var29.SOLID;
            if(!(var10 !== var29)) { _fun0001_ip = 1828; continue _fun0001 }
 1768:
            if(var28) { _fun0001_ip = 1828; continue _fun0001 }
 1771:
            var32 = _closure1_slot0;
            var28 = _closure1_slot2;
            var29 = var28[var19];
            var29 = var32.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var28[var19];
            var28 = var32.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.ZTpgyM;
            var28 = var29.bind(var30)(var28);
            _fun0001_ip = 2028; continue _fun0001;
 1828:
            var29 = _closure1_slot6;
            var29 = var29.GRADIENT;
            if(!(var10 !== var29)) { _fun0001_ip = 1878; continue _fun0001 }
 1842:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var29 = 30;
            var29 = var32[var29];
            var30 = var30.bind(var4)(var29);
            var29 = var30.int2hex;
            var29 = var29.bind(var30)(var31);
            _fun0001_ip = 2025; continue _fun0001;
 1878:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var33 = 30;
            var30 = var30[var33];
            var35 = var31.bind(var4)(var30);
            var31 = var35.int2hex;
            var30 = var6 == var34;
            var36 = undefined;
            if(var30) { _fun0001_ip = 1919; continue _fun0001 }
 1913:
            var36 = var34.primary_color;
 1919:
            var37 = var6 != var36;
            var30 = 0;
            if(!var37) { _fun0001_ip = 1931; continue _fun0001 }
 1928:
            var30 = var36;
 1931:
            var35 = var31.bind(var35)(var30);
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var33];
            var31 = var31.bind(var4)(var30);
            var30 = var31.int2hex;
            var36 = var6 == var34;
            var33 = undefined;
            if(var36) { _fun0001_ip = 1974; continue _fun0001 }
 1968:
            var33 = var34.secondary_color;
 1974:
            var34 = var6 != var33;
            var32 = 0;
            if(!var34) { _fun0001_ip = 1986; continue _fun0001 }
 1983:
            var32 = var33;
 1986:
            var45 = var30.bind(var31)(var32);
            var30 = global;
            var30 = var30.HermesInternal;
            var33 = var30.concat;
            var48 = '[';
            var46 = ', ';
            var44 = ']';
            var47 = var35;
            var29 = var48[var33](var47, var46, var45, var44, var43);
 2025:
            var28 = var29;
 2028:
            var23['subLabel'] = var28;
            var28 = var16;
            if(var16) { _fun0001_ip = 2042; continue _fun0001 }
 2039:
            var28 = var9;
 2042:
            var23['disabled'] = var28;
            var20 = var27.bind(var4)(var24, var23);
 2052:
            var12[1] = var20;
            var8['children'] = var12;
            var8 = var3.bind(var4)(var11, var8);
            var5[2] = var8;
            var8 = !var9;
            if(var9) { _fun0001_ip = 2090; continue _fun0001 }
 2076:
            var9 = _closure1_slot6;
            var9 = var9.HOLOGRAPHIC;
            var8 = var10 === var9;
 2090:
            if(!var8) { _fun0001_ip = 2298; continue _fun0001 }
 2096:
            var11 = _closure1_slot13;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var26.holographicInfo;
            var9['style'] = var12;
            var24 = _closure1_slot12;
            var28 = _closure1_slot0;
            var31 = _closure1_slot2;
            var12 = 34;
            var12 = var31[var12];
            var12 = var28.bind(var4)(var12);
            var20 = var12.CircleInformationIcon;
            var12 = {};
            var23 = 'sm';
            var12['size'] = var23;
            var30 = _closure1_slot1;
            var23 = 9;
            var23 = var31[var23];
            var23 = var30.bind(var4)(var23);
            var23 = var23.colors;
            var23 = var23.INFO_HELP_FOREGROUND;
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
            var27 = var27.tBhCys;
            var27 = var28.bind(var29)(var27);
            var20['children'] = var27;
            var20 = var24.bind(var4)(var23, var20);
            var12[1] = var20;
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 2298:
            var5[3] = var8;
            var6 = null;
            if(!var7) { _fun0001_ip = 2543; continue _fun0001 }
 2310:
            var9 = _closure1_slot12;
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
            var27 = var27.B9grJy;
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
            var12 = var12.ZTpgyM;
            var12 = var20.bind(var23)(var12);
            var10['subLabel'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 2543:
            var5[4] = var6;
            var8 = _closure1_slot13;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = var9[var18];
            var6 = var10.bind(var4)(var6);
            var7 = var6.FormSection;
            var6 = {};
            var20 = _closure1_slot12;
            var9 = var9[var18];
            var9 = var10.bind(var4)(var9);
            var12 = var9.FormSwitchRow;
            var9 = {};
            var10 = var16;
            if(var16) { _fun0001_ip = 2606; continue _fun0001 }
 2603:
            var10 = var17;
 2606:
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
            var23 = var23.iVW5w8;
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
            var21 = var21.vceJPj;
            var21 = var22.bind(var23)(var21);
            var9['subLabel'] = var21;
            var12 = var20.bind(var4)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var12 = _closure1_slot12;
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
            if(var16) { _fun0001_ip = 2796; continue _fun0001 }
 2793:
            var16 = var17;
 2796:
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
            var16 = var15.DTXoJS;
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
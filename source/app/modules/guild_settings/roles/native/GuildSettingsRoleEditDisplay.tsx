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
    var9 = {'paddingTop': 2, 'opacity': 0.5};
    var4['roleIcon'] = var9;
    var14 = 'row';
    var13 = 'center';
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['trailingColorContainer'] = var9;
    var9 = {'marginHorizontal': 0, 'marginVertical': 0, 'marginRight': 8, 'minWidth': 24, 'height': 24, 'borderRadius': 3};
    var4['colorBlock'] = var9;
    var9 = {};
    var10 = 9;
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
    var _closure1_slot15 = var4;
    var4 = 35;
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
            var12 = var4.role;
            var _closure2_slot1 = var12;
            var24 = var4.name;
            var18 = var4.formErrors;
            var14 = var4.mentionable;
            var22 = var4.hoist;
            var23 = var4.onNameChanged;
            var13 = var4.onMentionableChanged;
            var21 = var4.onHoistChanged;
            var1 = var4.onRoleColorChanged;
            var _closure2_slot2 = var1;
            var3 = var4.locked;
            var20 = var4.autoFocusInput;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var5 = _closure1_slot15;
            var26 = var5.bind(var4)();
            var5 = _closure1_slot5;
            var17 = var5.bind(var4)(var12);
            var16 = var17;
            if(var17) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = var3;
case 2:
            var6 = var12.id;
            _closure2_slot3 = var6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 10;
            var3 = var8[var3];
            var9 = var7.bind(var4)(var3);
            var5 = var9.useHasEnhancedRoleColorsForRole;
            var3 = var2.id;
            var5 = var5.bind(var9)(var3, var12);
            var3 = 11;
            var3 = var8[var3];
            var9 = var7.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getRoleStyleData;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var8.bind(var9)(var7, var3);
            var7 = null;
            if(!(var7 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var5 = _closure1_slot7;
            var10 = var5.SOLID;
            _fun0001_ip = 7; continue _fun0001;
case 6:
            var10 = var3.currentStyle;
case 7:
            _closure2_slot4 = var10;
            var9 = _closure1_slot8;
            var8 = var9.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot4;
                var1 = var2 === var1;
                return var1;
            };
            var28 = var8.bind(var9)(var5);
            var5 = var7 == var3;
            var34 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var3.styleColors;
            var5 = var7 == var3;
            var34 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var34 = var3[var10];
case 8:
            var3 = var7 == var34;
            var31 = undefined;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var31 = var34.primary_color;
case 11:
            if(!(var7 != var31)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = 0;
            if(!(var3 === var31)) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var31 = _closure1_slot9;
case 15:
            _closure2_slot5 = var31;
            if(!(var7 != var34)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var7 == var34;
            var3 = undefined;
            if(var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var34.secondary_color;
case 18:
            if(!(var7 == var3)) { _fun0001_ip = 20; continue _fun0001 }
case 16:
            var34 = _closure1_slot11;
case 20:
            _closure2_slot6 = var34;
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 12;
            var3 = var9[var3];
            var8 = var5.bind(var4)(var3);
            var3 = var8.canGuildUseRoleIcons;
            var8 = var3.bind(var8)(var2, var12);
            var3 = 13;
            var3 = var9[var3];
            var9 = var5.bind(var4)(var3);
            var5 = var9.useRoleIcon;
            var3 = {};
            var11 = var2.id;
            var3['guildId'] = var11;
            var11 = var12.id;
            var3['roleId'] = var11;
            var11 = 26;
            var3['size'] = var11;
            var25 = var5.bind(var9)(var3);
            if(!(var7 == var25)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = _closure1_slot12;
            var27 = _closure1_slot0;
            var29 = _closure1_slot2;
            var19 = 14;
            var3 = var29[var19];
            var3 = var27.bind(var4)(var3);
            var5 = var3.Icon;
            var3 = {};
            var32 = _closure1_slot1;
            var30 = 15;
            var30 = var29[var30];
            var30 = var32.bind(var4)(var30);
            var3['source'] = var30;
            var19 = var29[var19];
            var19 = var27.bind(var4)(var19);
            var19 = var19.IconSizes;
            var19 = var19.MEDIUM;
            var3['size'] = var19;
            var25 = var9.bind(var4)(var5, var3);
case 21:
            var5 = _closure1_slot3;
            var19 = var5.useCallback;
            var9 = new Array(5);
            var9[0] = var6;
            var9[1] = var34;
            var9[2] = var31;
            var9[3] = var10;
            var9[4] = var1;
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
                    if(!(var4 === var2)) { _fun0002_ip = 6; continue _fun0002 }
case 25:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 16;
                    var4 = var2[var4];
                    var9 = undefined;
                    var8 = var5.bind(var9)(var4);
                    var7 = var8.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var4 = var2[var4];
                    var5 = var5.bind(var9)(var4);
                    var4 = 20;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var5 = var5.bind(var9)(var4, var2);
                    var4 = {};
                    var2 = _closure2_slot6;
                    var4['colors'] = var2;
                    var2 = function onSelect(arg1) {
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
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
                    _fun0002_ip = 6; continue _fun0002;
case 23:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 16;
                    var4 = var2[var4];
                    var8 = undefined;
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var3 = 18;
                    var3 = var2[var3];
                    var7 = var7.bind(var8)(var3);
                    var3 = 17;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot5;
                    var2['color'] = var6;
                    var1 = function onSelect(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
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
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = var19.bind(var5)(var3, var9);
            var3 = var5.useCallback;
            var9 = var2.id;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var12;
            var2[2] = var6;
            var2[3] = var10;
            var2[4] = var1;
            var1 = function() {
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var4 = var2[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var4 = _closure1_slot0;
                var3 = 18;
                var3 = var2[var3];
                var4 = var4.bind(var1)(var3);
                var3 = 21;
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
                    var1 = 19;
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
            var27 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot14;
            var1 = {};
            var9 = _closure1_slot12;
            var35 = _closure1_slot0;
            var29 = _closure1_slot2;
            var5 = 22;
            var5 = var29[var5];
            var5 = var35.bind(var4)(var5);
            var6 = var5.TextInput;
            var5 = {};
            var19 = 23;
            var32 = var29[var19];
            var32 = var35.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var29 = var29[var19];
            var29 = var35.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.dLbkBk;
            var29 = var32.bind(var33)(var29);
            var5['label'] = var29;
            var5['value'] = var24;
            var5['isDisabled'] = var16;
            var5['onChange'] = var23;
            var23 = _closure1_slot10;
            var5['maxLength'] = var23;
            var5['autoFocus'] = var20;
            var23 = var18.name;
            var20 = var7 == var23;
            var18 = undefined;
            if(var20) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var20 = 0;
            var18 = var23[var20];
case 26:
            var5['errorMessage'] = var18;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(6);
            var5[0] = var6;
            var24 = _closure1_slot12;
            var9 = _closure1_slot1;
            var29 = _closure1_slot2;
            var6 = 24;
            var6 = var29[var6];
            var9 = var9.bind(var4)(var6);
            var6 = {};
            var6['role'] = var12;
            var6 = var24.bind(var4)(var9, var6);
            var5[1] = var6;
            var18 = _closure1_slot13;
            var35 = _closure1_slot0;
            var6 = 25;
            var9 = var29[var6];
            var9 = var35.bind(var4)(var9);
            var12 = var9.TableRowGroup;
            var9 = {};
            var20 = var29[var11];
            var20 = var35.bind(var4)(var20);
            var23 = var20.TableRow;
            var20 = {};
            var32 = var29[var19];
            var32 = var35.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var29 = var29[var19];
            var29 = var35.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29["9wVJRB"];
            var29 = var32.bind(var33)(var29);
            var20['label'] = var29;
            var20['onPress'] = var27;
            var29 = true;
            var20['arrow'] = var29;
            var32 = var7 == var28;
            var27 = undefined;
            if(var32) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var27 = var28.labelString;
case 28:
            var32 = var7 != var27;
            var27 = '';
            if(!var32) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var33 = _closure1_slot0;
            var32 = _closure1_slot2;
            var32 = var32[var19];
            var32 = var33.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var28 = var28.labelString;
            var27 = var32.bind(var33)(var28);
case 30:
            var20['subLabel'] = var27;
            var20['disabled'] = var16;
            var23 = var24.bind(var4)(var23, var20);
            var20 = new Array(2);
            var20[0] = var23;
            var23 = _closure1_slot7;
            var23 = var23.HOLOGRAPHIC;
            var23 = var10 !== var23;
            if(!var23) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var28 = _closure1_slot12;
            var36 = _closure1_slot0;
            var32 = _closure1_slot2;
            var24 = var32[var11];
            var24 = var36.bind(var4)(var24);
            var27 = var24.TableRow;
            var24 = {};
            var33 = var32[var19];
            var33 = var36.bind(var4)(var33);
            var35 = var33.intl;
            var33 = var35.string;
            var32 = var32[var19];
            var32 = var36.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32["5NC5YW"];
            var32 = var33.bind(var35)(var32);
            var24['label'] = var32;
            var24['onPress'] = var30;
            var24['arrow'] = var29;
            var30 = _closure1_slot4;
            var29 = {};
            var32 = var26.trailingColorContainer;
            var29['style'] = var32;
            var32 = _closure1_slot7;
            var32 = var32.GRADIENT;
            if(!(var10 !== var32)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var35 = _closure1_slot12;
            var33 = _closure1_slot1;
            var36 = _closure1_slot2;
            var32 = 30;
            var32 = var36[var32];
            var33 = var33.bind(var4)(var32);
            var32 = {};
            var32['color'] = var31;
            var36 = var26.colorBlock;
            var32['style'] = var36;
            var32 = var35.bind(var4)(var33, var32);
            _fun0001_ip = 36; continue _fun0001;
case 34:
            var36 = _closure1_slot12;
            var35 = _closure1_slot1;
            var38 = _closure1_slot2;
            var33 = 27;
            var33 = var38[var33];
            var35 = var35.bind(var4)(var33);
            var33 = {};
            var39 = var7 == var34;
            var38 = undefined;
            if(var39) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var38 = var34.primary_color;
case 37:
            var40 = new Array(3);
            var40[0] = var38;
            var39 = var7 == var34;
            var38 = undefined;
            if(var39) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var38 = var34.secondary_color;
case 39:
            var40[1] = var38;
            var39 = var7 == var34;
            var38 = undefined;
            if(var39) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var38 = var34.tertiary_color;
case 41:
            var40[2] = var38;
            var39 = var40.filter;
            var41 = _closure1_slot0;
            var42 = _closure1_slot2;
            var38 = 28;
            var38 = var42[var38];
            var38 = var41.bind(var4)(var38);
            var38 = var38.isNotNullish;
            var39 = var39.bind(var40)(var38);
            var38 = var39.map;
            var37 = function(arg1) {
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
            var37 = var38.bind(var39)(var37);
            var33['colors'] = var37;
            var37 = {'x': 0, 'y': 0};
            var33['start'] = var37;
            var37 = {'x': 1, 'y': 0};
            var33['end'] = var37;
            var37 = var26.colorBlock;
            var33['style'] = var37;
            var32 = var36.bind(var4)(var35, var33);
case 36:
            var29['children'] = var32;
            var29 = var28.bind(var4)(var30, var29);
            var24['trailing'] = var29;
            var29 = _closure1_slot7;
            var29 = var29.GRADIENT;
            if(!(var10 !== var29)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var29 = 29;
            var29 = var32[var29];
            var30 = var30.bind(var4)(var29);
            var29 = var30.int2hex;
            var29 = var29.bind(var30)(var31);
            _fun0001_ip = 45; continue _fun0001;
case 43:
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var33 = 29;
            var30 = var30[var33];
            var35 = var31.bind(var4)(var30);
            var31 = var35.int2hex;
            var30 = var7 == var34;
            var36 = undefined;
            if(var30) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var36 = var34.primary_color;
case 46:
            var37 = var7 != var36;
            var30 = 0;
            if(!var37) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var30 = var36;
case 48:
            var35 = var31.bind(var35)(var30);
            var31 = _closure1_slot0;
            var30 = _closure1_slot2;
            var30 = var30[var33];
            var31 = var31.bind(var4)(var30);
            var30 = var31.int2hex;
            var36 = var7 == var34;
            var33 = undefined;
            if(var36) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var33 = var34.secondary_color;
case 50:
            var34 = var7 != var33;
            var32 = 0;
            if(!var34) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var32 = var33;
case 52:
            var44 = var30.bind(var31)(var32);
            var30 = global;
            var30 = var30.HermesInternal;
            var33 = var30.concat;
            var47 = '[';
            var45 = ', ';
            var43 = ']';
            var46 = var35;
            var29 = var47[var33](var46, var45, var44, var43, var42);
case 45:
            var24['subLabel'] = var29;
            var24['disabled'] = var16;
            var23 = var28.bind(var4)(var27, var24);
case 32:
            var20[1] = var23;
            var9['children'] = var20;
            var9 = var18.bind(var4)(var12, var9);
            var5[2] = var9;
            var9 = _closure1_slot7;
            var9 = var9.HOLOGRAPHIC;
            var9 = var10 === var9;
            if(!var9) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var18 = _closure1_slot13;
            var12 = _closure1_slot4;
            var10 = {};
            var20 = var26.holographicInfo;
            var10['style'] = var20;
            var27 = _closure1_slot12;
            var29 = _closure1_slot0;
            var32 = _closure1_slot2;
            var20 = 31;
            var20 = var32[var20];
            var20 = var29.bind(var4)(var20);
            var23 = var20.CircleInformationIcon;
            var20 = {};
            var24 = 'sm';
            var20['size'] = var24;
            var31 = _closure1_slot1;
            var24 = 9;
            var24 = var32[var24];
            var24 = var31.bind(var4)(var24);
            var24 = var24.colors;
            var24 = var24.ICON_FEEDBACK_INFO;
            var20['color'] = var24;
            var23 = var27.bind(var4)(var23, var20);
            var20 = new Array(2);
            var20[0] = var23;
            var23 = 32;
            var23 = var32[var23];
            var23 = var29.bind(var4)(var23);
            var24 = var23.Text;
            var23 = {};
            var28 = 'text-sm/normal';
            var23['variant'] = var28;
            var28 = var32[var19];
            var28 = var29.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = 33;
            var28 = var32[var28];
            var28 = var31.bind(var4)(var28);
            var28 = var28.tBhCyr;
            var28 = var29.bind(var30)(var28);
            var23['children'] = var28;
            var23 = var27.bind(var4)(var24, var23);
            var20[1] = var23;
            var10['children'] = var20;
            var9 = var18.bind(var4)(var12, var10);
case 54:
            var5[3] = var9;
            var7 = null;
            if(!var8) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var10 = _closure1_slot12;
            var24 = _closure1_slot0;
            var18 = _closure1_slot2;
            var8 = var18[var6];
            var8 = var24.bind(var4)(var8);
            var9 = var8.TableRowGroup;
            var8 = {};
            var11 = var18[var11];
            var11 = var24.bind(var4)(var11);
            var12 = var11.TableRow;
            var11 = {};
            var11['disabled'] = var16;
            var20 = var18[var19];
            var20 = var24.bind(var4)(var20);
            var27 = var20.intl;
            var23 = var27.string;
            var20 = var18[var19];
            var20 = var24.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.B9grJw;
            var20 = var23.bind(var27)(var20);
            var11['label'] = var20;
            var23 = _closure1_slot4;
            var20 = {};
            var26 = var26.roleIcon;
            var20['style'] = var26;
            var20['children'] = var25;
            var20 = var10.bind(var4)(var23, var20);
            var11['trailing'] = var20;
            var20 = var18[var19];
            var20 = var24.bind(var4)(var20);
            var23 = var20.intl;
            var20 = var23.string;
            var18 = var18[var19];
            var18 = var24.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.ZTpgyG;
            var18 = var20.bind(var23)(var18);
            var11['subLabel'] = var18;
            var11 = var10.bind(var4)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 56:
            var5[4] = var7;
            var8 = _closure1_slot13;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = var9[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var20 = _closure1_slot12;
            var18 = 34;
            var9 = var9[var18];
            var9 = var10.bind(var4)(var9);
            var12 = var9.TableSwitchRow;
            var9 = {};
            var10 = var16;
            if(var16) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var10 = var17;
case 58:
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
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot12;
            var10 = var10[var18];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TableSwitchRow;
            var10 = {};
            if(var16) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var16 = var17;
case 60:
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
            var9[1] = var10;
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
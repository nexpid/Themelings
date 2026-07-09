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
    var15 = var15.space;
    var15 = var15.PX_8;
    var9['padding'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var9['marginHorizontal'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.space;
    var16 = var15.PX_12;
    var15 = -1;
    var15 = var15 * var16;
    var9['marginTop'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.space;
    var15 = var15.PX_12;
    var9['marginBottom'] = var15;
    var15 = 'flex';
    var9['display'] = var15;
    var9['flexDirection'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.space;
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
            var3 = arg1;
            var2 = var3.guild;
            var _closure2_slot0 = var2;
            var11 = var3.role;
            var _closure2_slot1 = var11;
            var24 = var3.name;
            var18 = var3.formErrors;
            var14 = var3.mentionable;
            var22 = var3.hoist;
            var23 = var3.onNameChanged;
            var13 = var3.onMentionableChanged;
            var21 = var3.onHoistChanged;
            var1 = var3.locked;
            var20 = var3.autoFocusInput;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var3 = _closure1_slot15;
            var27 = var3.bind(var4)();
            var3 = _closure1_slot5;
            var17 = var3.bind(var4)(var11);
            var16 = var17;
            if(var17) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var16 = var1;
case 2:
            var1 = var11.id;
            _closure2_slot2 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 10;
            var3 = var7[var3];
            var8 = var6.bind(var4)(var3);
            var5 = var8.useHasEnhancedRoleColorsForRole;
            var3 = var2.id;
            var5 = var5.bind(var8)(var3, var11);
            var3 = 11;
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
            _closure2_slot3 = var10;
            var8 = _closure1_slot8;
            var6 = var8.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot3;
                var1 = var2 === var1;
                return var1;
            };
            var29 = var6.bind(var8)(var5);
            var5 = var7 == var3;
            var35 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = var3.styleColors;
            var5 = var7 == var3;
            var35 = undefined;
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var35 = var3[var10];
case 8:
            var3 = var7 == var35;
            var32 = undefined;
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var32 = var35.primary_color;
case 11:
            if(!(var7 != var32)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = 0;
            if(!(var3 === var32)) { _fun0001_ip = 15; continue _fun0001 }
case 13:
            var32 = _closure1_slot9;
case 15:
            _closure2_slot4 = var32;
            if(!(var7 != var35)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var7 == var35;
            var3 = undefined;
            if(var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var35.secondary_color;
case 18:
            if(!(var7 == var3)) { _fun0001_ip = 20; continue _fun0001 }
case 16:
            var35 = _closure1_slot11;
case 20:
            _closure2_slot5 = var35;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var8 = var5.bind(var4)(var3);
            var3 = var8.canGuildUseRoleIcons;
            var8 = var3.bind(var8)(var2, var11);
            var3 = 13;
            var3 = var6[var3];
            var6 = var5.bind(var4)(var3);
            var5 = var6.useRoleIcon;
            var3 = {};
            var9 = var2.id;
            var3['guildId'] = var9;
            var9 = var11.id;
            var3['roleId'] = var9;
            var12 = 26;
            var3['size'] = var12;
            var26 = var5.bind(var6)(var3);
            if(!(var7 == var26)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = _closure1_slot12;
            var19 = _closure1_slot0;
            var25 = _closure1_slot2;
            var9 = 14;
            var3 = var25[var9];
            var3 = var19.bind(var4)(var3);
            var5 = var3.Icon;
            var3 = {};
            var30 = _closure1_slot1;
            var28 = 15;
            var28 = var25[var28];
            var28 = var30.bind(var4)(var28);
            var3['source'] = var28;
            var9 = var25[var9];
            var9 = var19.bind(var4)(var9);
            var9 = var9.IconSizes;
            var9 = var9.MEDIUM;
            var3['size'] = var9;
            var26 = var6.bind(var4)(var5, var3);
case 21:
            var5 = _closure1_slot3;
            var9 = var5.useCallback;
            var6 = new Array(4);
            var6[0] = var1;
            var6[1] = var35;
            var6[2] = var32;
            var6[3] = var10;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure2_slot3;
                    var2 = _closure1_slot7;
                    var2 = var2.SOLID;
                    if(!(var4 !== var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var4 = _closure2_slot3;
                    var2 = _closure1_slot7;
                    var2 = var2.GRADIENT;
                    if(!(var4 === var2)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
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
                    var2 = _closure2_slot5;
                    var4['colors'] = var2;
                    var2 = function onSelect(arg1) {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 19;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.updateRoleColors;
                        var4 = _closure2_slot2;
                        var2 = _closure1_slot7;
                        var3 = var2.GRADIENT;
                        var2 = arg1;
                        var2 = var5.bind(var6)(var4, var2, var3);
                        return var1;
                    };
                    var4['onSelect'] = var2;
                    var2 = 'RoleColorPicker';
                    var2 = var7.bind(var8)(var5, var2, var4);
                    _fun0002_ip = 25; continue _fun0002;
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
                    var6 = _closure2_slot4;
                    var2['color'] = var6;
                    var1 = function onSelect(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.updateRoleColor;
                        var3 = _closure2_slot2;
                        var2 = arg1;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var2['onSelect'] = var1;
                    var1 = 'RoleColorPicker';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = var9.bind(var5)(var3, var6);
            var3 = var5.useCallback;
            var6 = var2.id;
            var2 = new Array(4);
            var2[0] = var6;
            var2[1] = var11;
            var2[2] = var1;
            var2[3] = var10;
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
                var2 = _closure2_slot3;
                var3['roleStyle'] = var2;
                var2 = function onStyleChanged(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.updateRoleStyles;
                    var3 = _closure2_slot2;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var3['onStyleChanged'] = var2;
                var2 = 'EnhancedRoleColorsSelectStyleModal';
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var28 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot14;
            var1 = {};
            var9 = _closure1_slot12;
            var34 = _closure1_slot0;
            var25 = _closure1_slot2;
            var5 = 22;
            var5 = var25[var5];
            var5 = var34.bind(var4)(var5);
            var6 = var5.TextInput;
            var5 = {};
            var19 = 23;
            var30 = var25[var19];
            var30 = var34.bind(var4)(var30);
            var33 = var30.intl;
            var30 = var33.string;
            var25 = var25[var19];
            var25 = var34.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.dLbkBk;
            var25 = var30.bind(var33)(var25);
            var5['label'] = var25;
            var5['value'] = var24;
            var5['isDisabled'] = var16;
            var5['onChange'] = var23;
            var23 = _closure1_slot10;
            var5['maxLength'] = var23;
            var5['autoFocus'] = var20;
            var23 = var18.name;
            var20 = var7 == var23;
            var18 = undefined;
            if(var20) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var20 = 0;
            var18 = var23[var20];
case 27:
            var5['errorMessage'] = var18;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(6);
            var5[0] = var6;
            var25 = _closure1_slot12;
            var9 = _closure1_slot1;
            var30 = _closure1_slot2;
            var6 = 24;
            var6 = var30[var6];
            var9 = var9.bind(var4)(var6);
            var6 = {};
            var6['role'] = var11;
            var6 = var25.bind(var4)(var9, var6);
            var5[1] = var6;
            var20 = _closure1_slot13;
            var36 = _closure1_slot0;
            var6 = 25;
            var9 = var30[var6];
            var9 = var36.bind(var4)(var9);
            var18 = var9.TableRowGroup;
            var9 = {};
            var11 = false;
            var9['hasIcons'] = var11;
            var23 = var30[var12];
            var23 = var36.bind(var4)(var23);
            var24 = var23.TableRow;
            var23 = {};
            var33 = var30[var19];
            var33 = var36.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var30 = var30[var19];
            var30 = var36.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30["9wVJRB"];
            var30 = var33.bind(var34)(var30);
            var23['label'] = var30;
            var23['onPress'] = var28;
            var30 = true;
            var23['arrow'] = var30;
            var33 = var7 == var29;
            var28 = undefined;
            if(var33) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var28 = var29.labelString;
case 29:
            var33 = var7 != var28;
            var28 = '';
            if(!var33) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var34 = _closure1_slot0;
            var33 = _closure1_slot2;
            var33 = var33[var19];
            var33 = var34.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var29 = var29.labelString;
            var28 = var33.bind(var34)(var29);
case 31:
            var23['subLabel'] = var28;
            var23['disabled'] = var16;
            var24 = var25.bind(var4)(var24, var23);
            var23 = new Array(2);
            var23[0] = var24;
            var24 = _closure1_slot7;
            var24 = var24.HOLOGRAPHIC;
            var24 = var10 !== var24;
            if(!var24) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var29 = _closure1_slot12;
            var37 = _closure1_slot0;
            var33 = _closure1_slot2;
            var25 = var33[var12];
            var25 = var37.bind(var4)(var25);
            var28 = var25.TableRow;
            var25 = {};
            var34 = var33[var19];
            var34 = var37.bind(var4)(var34);
            var36 = var34.intl;
            var34 = var36.string;
            var33 = var33[var19];
            var33 = var37.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33["5NC5YW"];
            var33 = var34.bind(var36)(var33);
            var25['label'] = var33;
            var25['onPress'] = var31;
            var25['arrow'] = var30;
            var31 = _closure1_slot4;
            var30 = {};
            var33 = var27.trailingColorContainer;
            var30['style'] = var33;
            var33 = _closure1_slot7;
            var33 = var33.GRADIENT;
            if(!(var10 !== var33)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var36 = _closure1_slot12;
            var34 = _closure1_slot1;
            var37 = _closure1_slot2;
            var33 = 30;
            var33 = var37[var33];
            var34 = var34.bind(var4)(var33);
            var33 = {};
            var33['color'] = var32;
            var37 = var27.colorBlock;
            var33['style'] = var37;
            var33 = var36.bind(var4)(var34, var33);
            _fun0001_ip = 37; continue _fun0001;
case 35:
            var37 = _closure1_slot12;
            var36 = _closure1_slot1;
            var39 = _closure1_slot2;
            var34 = 27;
            var34 = var39[var34];
            var36 = var36.bind(var4)(var34);
            var34 = {};
            var40 = var7 == var35;
            var39 = undefined;
            if(var40) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var39 = var35.primary_color;
case 38:
            var41 = new Array(3);
            var41[0] = var39;
            var40 = var7 == var35;
            var39 = undefined;
            if(var40) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var39 = var35.secondary_color;
case 40:
            var41[1] = var39;
            var40 = var7 == var35;
            var39 = undefined;
            if(var40) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var39 = var35.tertiary_color;
case 42:
            var41[2] = var39;
            var40 = var41.filter;
            var42 = _closure1_slot0;
            var43 = _closure1_slot2;
            var39 = 28;
            var39 = var43[var39];
            var39 = var42.bind(var4)(var39);
            var39 = var39.isNotNullish;
            var40 = var40.bind(var41)(var39);
            var39 = var40.map;
            var38 = function(arg1) {
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
            var38 = var39.bind(var40)(var38);
            var34['colors'] = var38;
            var38 = {'x': 0, 'y': 0};
            var34['start'] = var38;
            var38 = {'x': 1, 'y': 0};
            var34['end'] = var38;
            var38 = var27.colorBlock;
            var34['style'] = var38;
            var33 = var37.bind(var4)(var36, var34);
case 37:
            var30['children'] = var33;
            var30 = var29.bind(var4)(var31, var30);
            var25['trailing'] = var30;
            var30 = _closure1_slot7;
            var30 = var30.GRADIENT;
            if(!(var10 !== var30)) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var31 = _closure1_slot0;
            var33 = _closure1_slot2;
            var30 = 29;
            var30 = var33[var30];
            var31 = var31.bind(var4)(var30);
            var30 = var31.int2hex;
            var30 = var30.bind(var31)(var32);
            _fun0001_ip = 46; continue _fun0001;
case 44:
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var34 = 29;
            var31 = var31[var34];
            var36 = var32.bind(var4)(var31);
            var32 = var36.int2hex;
            var31 = var7 == var35;
            var37 = undefined;
            if(var31) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var37 = var35.primary_color;
case 47:
            var38 = var7 != var37;
            var31 = 0;
            if(!var38) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var31 = var37;
case 49:
            var36 = var32.bind(var36)(var31);
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var31 = var31[var34];
            var32 = var32.bind(var4)(var31);
            var31 = var32.int2hex;
            var37 = var7 == var35;
            var34 = undefined;
            if(var37) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var34 = var35.secondary_color;
case 51:
            var35 = var7 != var34;
            var33 = 0;
            if(!var35) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var33 = var34;
case 53:
            var45 = var31.bind(var32)(var33);
            var31 = global;
            var31 = var31.HermesInternal;
            var34 = var31.concat;
            var48 = '[';
            var46 = ', ';
            var44 = ']';
            var47 = var36;
            var30 = var48[var34](var47, var46, var45, var44, var43);
case 46:
            var25['subLabel'] = var30;
            var25['disabled'] = var16;
            var24 = var29.bind(var4)(var28, var25);
case 33:
            var23[1] = var24;
            var9['children'] = var23;
            var9 = var20.bind(var4)(var18, var9);
            var5[2] = var9;
            var9 = _closure1_slot7;
            var9 = var9.HOLOGRAPHIC;
            var9 = var10 === var9;
            if(!var9) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var20 = _closure1_slot13;
            var18 = _closure1_slot4;
            var10 = {};
            var23 = var27.holographicInfo;
            var10['style'] = var23;
            var28 = _closure1_slot12;
            var30 = _closure1_slot0;
            var33 = _closure1_slot2;
            var23 = 31;
            var23 = var33[var23];
            var23 = var30.bind(var4)(var23);
            var24 = var23.CircleInformationIcon;
            var23 = {};
            var25 = 'sm';
            var23['size'] = var25;
            var32 = _closure1_slot1;
            var25 = 9;
            var25 = var33[var25];
            var25 = var32.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.ICON_FEEDBACK_INFO;
            var23['color'] = var25;
            var24 = var28.bind(var4)(var24, var23);
            var23 = new Array(2);
            var23[0] = var24;
            var24 = 32;
            var24 = var33[var24];
            var24 = var30.bind(var4)(var24);
            var25 = var24.Text;
            var24 = {};
            var29 = 'text-sm/normal';
            var24['variant'] = var29;
            var29 = var33[var19];
            var29 = var30.bind(var4)(var29);
            var31 = var29.intl;
            var30 = var31.string;
            var29 = 33;
            var29 = var33[var29];
            var29 = var32.bind(var4)(var29);
            var29 = var29.tBhCyr;
            var29 = var30.bind(var31)(var29);
            var24['children'] = var29;
            var24 = var28.bind(var4)(var25, var24);
            var23[1] = var24;
            var10['children'] = var23;
            var9 = var20.bind(var4)(var18, var10);
case 55:
            var5[3] = var9;
            var7 = null;
            if(!var8) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var10 = _closure1_slot12;
            var25 = _closure1_slot0;
            var20 = _closure1_slot2;
            var8 = var20[var6];
            var8 = var25.bind(var4)(var8);
            var9 = var8.TableRowGroup;
            var8 = {};
            var8['hasIcons'] = var11;
            var12 = var20[var12];
            var12 = var25.bind(var4)(var12);
            var18 = var12.TableRow;
            var12 = {};
            var12['disabled'] = var16;
            var23 = var20[var19];
            var23 = var25.bind(var4)(var23);
            var28 = var23.intl;
            var24 = var28.string;
            var23 = var20[var19];
            var23 = var25.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.B9grJw;
            var23 = var24.bind(var28)(var23);
            var12['label'] = var23;
            var24 = _closure1_slot4;
            var23 = {};
            var27 = var27.roleIcon;
            var23['style'] = var27;
            var23['children'] = var26;
            var23 = var10.bind(var4)(var24, var23);
            var12['trailing'] = var23;
            var23 = var20[var19];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var20 = var20[var19];
            var20 = var25.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.ZTpgyG;
            var20 = var23.bind(var24)(var20);
            var12['subLabel'] = var20;
            var12 = var10.bind(var4)(var18, var12);
            var8['children'] = var12;
            var7 = var10.bind(var4)(var9, var8);
case 57:
            var5[4] = var7;
            var8 = _closure1_slot13;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = var9[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var6['hasIcons'] = var11;
            var20 = _closure1_slot12;
            var18 = 34;
            var9 = var9[var18];
            var9 = var10.bind(var4)(var9);
            var12 = var9.TableSwitchRow;
            var9 = {};
            var10 = var16;
            if(var16) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var10 = var17;
case 59:
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
            if(var16) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var16 = var17;
case 61:
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
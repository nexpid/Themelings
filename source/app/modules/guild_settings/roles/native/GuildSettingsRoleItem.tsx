// app/modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
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
        var4 = var13.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var15 = 1;
        var7 = var6[var15];
        var4 = metroImportAll;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.View;
        var _closure1_slot5 = var8;
        var11 = var4.StyleSheet;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.DEFAULT_ROLE_COLOR_HEX;
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot7 = var8;
        var4 = var4.jsxs;
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var9 = var5.bind(var1)(var4);
        var8 = var9.createStyles;
        var4 = {};
        var10 = {'flexDirection': 'row', 'gap': 4, 'alignItems': 'center'};
        var4['row'] = var10;
        var10 = {};
        var12 = 6;
        var14 = var6[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.INTERACTIVE_TEXT_DEFAULT;
        var10['tintColor'] = var14;
        var14 = var6[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BACKGROUND_BASE_LOWEST;
        var10['backgroundColor'] = var14;
        var14 = 20;
        var10['borderRadius'] = var14;
        var16 = 8;
        var10['padding'] = var16;
        var4['everyone'] = var10;
        var10 = {};
        var16 = 7;
        var16 = var6[var16];
        var16 = var5.bind(var1)(var16);
        var16 = var16.TextStyleSheet;
        var18 = var16.text-md/semibold;
        var17 = null;
        var19 = var17 == var18;
        var16 = undefined;
        if(var19) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var16 = var18.lineHeight;
case 2:
        var17 = var17 != var16;
        if(!var17) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var14 = var16;
case 4:
        var14 = var14 + var15;
        var10['lineHeight'] = var14;
        var4['label'] = var10;
        var10 = {};
        var14 = var6[var12];
        var14 = var13.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.ICON_MUTED;
        var10['tintColor'] = var14;
        var4['sparkleIcon'] = var10;
        var10 = {'width': 32, 'height': 32, 'borderRadius': null, 'overflow': 'hidden', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.radii;
        var12 = var12.round;
        var10['borderRadius'] = var12;
        var4['container'] = var10;
        var10 = {};
        var21 = var11.absoluteFillObject;
        var22 = var10;
        var11 = copyDataProperties(var22, var21);
        var4['gradient'] = var10;
        var10 = {};
        var11 = 'white';
        var10['tintColor'] = var11;
        var4['image'] = var10;
        var4 = var8.bind(var9)(var4);
        var _closure1_slot9 = var4;
        var4 = var7.memo;
        var2 = function GuildSettingsRoleItem(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 8;
                var1 = var11[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var2.guildId;
                var13 = null;
                var1 = var3.bind(var4)(var1, var13);
                var3 = _closure1_slot9;
                var20 = var3.bind(var4)();
                var15 = var2.role;
                var _closure2_slot0 = var15;
                var18 = var2.sorting;
                var14 = var2.locked;
                var3 = var2.onPress;
                var _closure2_slot1 = var3;
                var19 = var2.onLongPress;
                var25 = var2.onMoveUp;
                var _closure2_slot2 = var25;
                var10 = var2.onMoveDown;
                var _closure2_slot3 = var10;
                var9 = var2.sortHandlers;
                var7 = var2.isEveryoneRole;
                var23 = var2.guildId;
                var _closure2_slot4 = var23;
                var16 = var2.numMembers;
                var5 = var2.isLastRole;
                var6 = var2.isFirstRole;
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var11[var2];
                var11 = var3.bind(var4)(var2);
                var3 = var11.useRoleIcon;
                var2 = {};
                var2['guildId'] = var23;
                var12 = var15.id;
                var2['roleId'] = var12;
                var24 = 32;
                var2['size'] = var24;
                var2 = var3.bind(var11)(var2);
                var11 = var15.tags;
                var12 = var13 == var11;
                var3 = undefined;
                if(var12) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = var11.guild_connections;
case 6:
                var3 = var13 === var3;
                var _closure2_slot5 = var3;
                var12 = new Array(0);
                if(!(var13 != var25)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var17 = var12.push;
                var11 = {};
                var22 = 'moveup';
                var11['name'] = var22;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var22 = 11;
                var26 = var29[var22];
                var26 = var28.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var22 = var29[var22];
                var22 = var28.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.Yl8E4h;
                var22 = var26.bind(var27)(var22);
                var11['label'] = var22;
                var11 = var17.bind(var12)(var11);
case 8:
                if(!(var13 != var10)) { _fun0002_ip = 10; continue _fun0002 }
case 3:
                var17 = var12.push;
                var11 = {};
                var22 = 'movedown';
                var11['name'] = var22;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var22 = 11;
                var26 = var29[var22];
                var26 = var28.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var22 = var29[var22];
                var22 = var28.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22["5PbXSy"];
                var22 = var26.bind(var27)(var22);
                var11['label'] = var22;
                var11 = var17.bind(var12)(var11);
case 10:
                var22 = _closure1_slot4;
                var17 = var22.useCallback;
                var11 = new Array(2);
                var11[0] = var25;
                var11[1] = var10;
                var10 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var2 = var1.actionName;
                        var1 = 'moveup';
                        if(!(var1 !== var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var1 = 'movedown';
                        if(!(var1 === var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var3 = _closure2_slot3;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 13; continue _fun0003 }
case 15:
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        _fun0003_ip = 13; continue _fun0003;
case 11:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0003_ip = 13; continue _fun0003 }
case 16:
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = var17.bind(var22)(var10, var11);
                if(!var18) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                if(var14) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                var22 = {};
                var10 = 'button';
                var22['accessibilityRole'] = var10;
                var27 = _closure1_slot0;
                var10 = _closure1_slot2;
                var32 = 11;
                var17 = var10[var32];
                var17 = var27.bind(var4)(var17);
                var26 = var17.intl;
                var25 = var26.string;
                var17 = var10[var32];
                var17 = var27.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17["0dOFq+"];
                var17 = var25.bind(var26)(var17);
                var22['accessibilityLabel'] = var17;
                var17 = var10[var32];
                var17 = var27.bind(var4)(var17);
                var26 = var17.intl;
                var25 = var26.string;
                var17 = var10[var32];
                var17 = var27.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.BGMUFB;
                var17 = var25.bind(var26)(var17);
                var22['accessibilityHint'] = var17;
                var22['accessibilityActions'] = var12;
                var22['onAccessibilityAction'] = var11;
                var11 = 100;
                var22['delayLongPress'] = var11;
                var11 = 0.8;
                var22['activeOpacity'] = var11;
                var11 = _closure1_slot1;
                var33 = 6;
                var10 = var10[var33];
                var10 = var11.bind(var4)(var10);
                var10 = var10.space;
                var10 = var10.PX_4;
                var22['hitSlop'] = var10;
                var36 = var22;
                var35 = var9;
                var9 = copyDataProperties(var36, var35);
                var25 = var15.managed;
                if(!var25) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var25 = !var3;
case 20:
                var10 = undefined;
                var11 = var22;
                var17 = true;
                var9 = false;
                if(var25) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var27 = _closure1_slot7;
                var29 = _closure1_slot0;
                var28 = _closure1_slot2;
                var25 = 15;
                var25 = var28[var25];
                var25 = var29.bind(var4)(var25);
                var26 = var25.IconButton;
                var25 = {};
                var30 = 16;
                var30 = var28[var30];
                var30 = var29.bind(var4)(var30);
                var31 = var30.TrashIcon;
                var30 = {};
                var34 = 'xs';
                var30['size'] = var34;
                var34 = _closure1_slot1;
                var33 = var28[var33];
                var33 = var34.bind(var4)(var33);
                var33 = var33.colors;
                var33 = var33.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
                var30['color'] = var33;
                var30 = var27.bind(var4)(var31, var30);
                var25['icon'] = var30;
                var30 = var28[var32];
                var30 = var29.bind(var4)(var30);
                var31 = var30.intl;
                var30 = var31.formatToPlainString;
                var28 = var28[var32];
                var28 = var29.bind(var4)(var28);
                var28 = var28.t;
                var29 = var28.FiMFTZ;
                var28 = {};
                var32 = var15.name;
                var28['name'] = var32;
                var28 = var30.bind(var31)(var29, var28);
                var25['accessibilityLabel'] = var28;
                var28 = 'sm';
                var25['size'] = var28;
                var28 = 'destructive';
                var25['variant'] = var28;
                var28 = function handleDeleteRow() {
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 10;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var12 = _closure1_slot0;
                    var9 = 11;
                    var10 = var7[var9];
                    var10 = var12.bind(var1)(var10);
                    var14 = var10.intl;
                    var13 = var14.formatToPlainString;
                    var10 = var7[var9];
                    var10 = var12.bind(var1)(var10);
                    var10 = var10.t;
                    var11 = var10.FiMFTZ;
                    var10 = {};
                    var15 = _closure2_slot0;
                    var15 = var15.name;
                    var10['name'] = var15;
                    var10 = var13.bind(var14)(var11, var10);
                    var2['title'] = var10;
                    var10 = var7[var9];
                    var10 = var12.bind(var1)(var10);
                    var13 = var10.intl;
                    var11 = var13.string;
                    var10 = var7[var9];
                    var10 = var12.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.qALKny;
                    var10 = var11.bind(var13)(var10);
                    var2['body'] = var10;
                    var10 = var7[var9];
                    var10 = var12.bind(var1)(var10);
                    var13 = var10.intl;
                    var11 = var13.string;
                    var10 = var7[var9];
                    var10 = var12.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.gm1Vej;
                    var10 = var11.bind(var13)(var10);
                    var2['cancelText'] = var10;
                    var10 = var7[var9];
                    var10 = var12.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var7[var9];
                    var9 = var12.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9.p89ACt;
                    var9 = var10.bind(var11)(var9);
                    var2['confirmText'] = var9;
                    var9 = _closure1_slot3;
                    var8 = function* () {
                        var1 = function* anon_0_() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                                var2 = _closure2_slot5;
                                if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 12;
                                var3 = var3[var2];
                                var2 = undefined;
                                var7 = var5.bind(var2)(var3);
                                var6 = var7.putRoleConnectionsConfigurations;
                                var5 = _closure2_slot4;
                                var2 = _closure2_slot0;
                                var3 = var2.id;
                                var2 = new Array(0);
                                var2 = var6.bind(var7)(var5, var3, var2);
                                SaveGenerator(address=79);
case 28:
                                return var2;
case 29:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0004_ip = 30; continue _fun0004 }
case 26:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 13;
                                var5 = var5[var3];
                                var3 = undefined;
                                var7 = var6.bind(var3)(var5);
                                var6 = var7.deleteRole;
                                var5 = _closure2_slot4;
                                var4 = _closure2_slot0;
                                var4 = var4.id;
                                var4 = var6.bind(var7)(var5, var4);
                                return var3;
case 30:
                                return var2;
case 24:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var8 = var9.bind(var1)(var8);
                    var _closure3_slot0 = var8;
                    var5 = function() {
                        var1 = undefined;
                        var4 = _closure3_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var5 = 14;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.Colors;
                    var5 = var5.RED;
                    var2['confirmColor'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var25['onPress'] = var28;
                var10 = var27.bind(var4)(var26, var25);
                var11 = var22;
                var17 = true;
                var9 = false;
                _fun0002_ip = 22; continue _fun0002;
case 17:
                var10 = undefined;
                var11 = undefined;
                var17 = false;
                var9 = false;
                if(var18) { _fun0002_ip = 22; continue _fun0002 }
case 31:
                var9 = true;
                var10 = undefined;
                var11 = undefined;
                var17 = false;
case 22:
                var12 = var2;
                if(!(var13 == var12)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                var3 = var15.tags;
                var22 = var13 == var3;
                var2 = undefined;
                if(var22) { _fun0002_ip = 34; continue _fun0002 }
case 35:
                var2 = var3.guild_connections;
case 34:
                if(!(var13 !== var2)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                if(!var1) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var1 = var15.colors;
                if(!(var13 != var1)) { _fun0002_ip = 38; continue _fun0002 }
case 40:
                var1 = var15.colors;
                var1 = var1.secondary_color;
                if(!(var13 == var1)) { _fun0002_ip = 41; continue _fun0002 }
case 38:
                var3 = _closure1_slot7;
                var2 = _closure1_slot5;
                var1 = {};
                var25 = var20.container;
                var22 = new Array(2);
                var22[0] = var25;
                var25 = {};
                var26 = var15.colorString;
                if(!(var13 == var26)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                var26 = _closure1_slot6;
                _fun0002_ip = 44; continue _fun0002;
case 42:
                var26 = var15.colorString;
case 44:
                var25['backgroundColor'] = var26;
                var22[1] = var25;
                var1['style'] = var22;
                var26 = _closure1_slot7;
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var22 = 21;
                var22 = var27[var22];
                var22 = var25.bind(var4)(var22);
                var25 = var22.ShieldUserIcon;
                var22 = {};
                var27 = 'md';
                var22['size'] = var27;
                var27 = var20.image;
                var22['style'] = var27;
                var22 = var26.bind(var4)(var25, var22);
                var1['children'] = var22;
                var1 = var3.bind(var4)(var2, var1);
                _fun0002_ip = 45; continue _fun0002;
case 41:
                var22 = _closure1_slot8;
                var3 = _closure1_slot5;
                var2 = {};
                var25 = var20.container;
                var2['style'] = var25;
                var28 = _closure1_slot7;
                var26 = _closure1_slot1;
                var29 = _closure1_slot2;
                var25 = 18;
                var25 = var29[var25];
                var26 = var26.bind(var4)(var25);
                var25 = {};
                var27 = var15.colors;
                var27 = var27.primary_color;
                var32 = new Array(3);
                var32[0] = var27;
                var27 = var15.colors;
                var27 = var27.secondary_color;
                var32[1] = var27;
                var27 = var15.colors;
                var27 = var27.tertiary_color;
                var32[2] = var27;
                var31 = var32.filter;
                var27 = _closure1_slot0;
                var30 = 19;
                var30 = var29[var30];
                var30 = var27.bind(var4)(var30);
                var30 = var30.isNotNullish;
                var32 = var31.bind(var32)(var30);
                var31 = var32.map;
                var30 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.int2hex;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var30 = var31.bind(var32)(var30);
                var25['colors'] = var30;
                var30 = {'x': 0, 'y': 0};
                var25['start'] = var30;
                var30 = {'x': 1, 'y': 0};
                var25['end'] = var30;
                var30 = var20.gradient;
                var25['style'] = var30;
                var26 = var28.bind(var4)(var26, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var26 = 21;
                var26 = var29[var26];
                var26 = var27.bind(var4)(var26);
                var27 = var26.ShieldUserIcon;
                var26 = {};
                var29 = 'md';
                var26['size'] = var29;
                var29 = var20.image;
                var26['style'] = var29;
                var26 = var28.bind(var4)(var27, var26);
                var25[1] = var26;
                var2['children'] = var25;
                var1 = var22.bind(var4)(var3, var2);
case 45:
                _fun0002_ip = 46; continue _fun0002;
case 36:
                var22 = _closure1_slot7;
                var3 = _closure1_slot1;
                var25 = _closure1_slot2;
                var2 = 17;
                var2 = var25[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['size'] = var24;
                var2['guildId'] = var23;
                var2['role'] = var15;
                var1 = var22.bind(var4)(var3, var2);
case 46:
                var12 = var1;
case 32:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var22 = _closure1_slot2;
                var1 = 22;
                var1 = var22[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1['onLongPress'] = var19;
                var19 = undefined;
                if(var18) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                var19 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 49:
                        var1 = undefined;
                        return var1;
                    }
                };
case 47:
                var1['onPress'] = var19;
                if(!var18) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                var18 = !var17;
case 51:
                var1['disabled'] = var18;
                var1['draggable'] = var17;
                var1['dragHandlePressableProps'] = var11;
                var1['trailing'] = var10;
                var1['arrow'] = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot5;
                if(var7) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                var9 = {};
                var9['children'] = var12;
                _fun0002_ip = 55; continue _fun0002;
case 53:
                var12 = {};
                var17 = var20.everyone;
                var12['style'] = var17;
                var19 = _closure1_slot7;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 23;
                var17 = var21[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.GroupIcon;
                var17 = {};
                var17 = var19.bind(var4)(var18, var17);
                var12['children'] = var17;
                var9 = var12;
case 55:
                var9 = var11.bind(var4)(var10, var9);
                var1['icon'] = var9;
                var11 = _closure1_slot8;
                var10 = _closure1_slot5;
                var9 = {};
                var12 = var20.row;
                var9['style'] = var12;
                var18 = _closure1_slot7;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 7;
                var12 = var19[var12];
                var12 = var17.bind(var4)(var12);
                var17 = var12.Text;
                var12 = {'lineClamp': 1, 'style': null, 'variant': 'text-md/semibold', 'color': 'interactive-text-active'};
                var19 = var20.label;
                var12['style'] = var19;
                var19 = var15.name;
                var12['children'] = var19;
                var17 = var18.bind(var4)(var17, var12);
                var12 = new Array(3);
                var12[0] = var17;
                var17 = var15.tags;
                var18 = var13 == var17;
                var15 = undefined;
                if(var18) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                var15 = var17.subscription_listing_id;
case 56:
                var17 = var13 != var15;
                var15 = null;
                if(!var17) { _fun0002_ip = 58; continue _fun0002 }
case 59:
                var19 = _closure1_slot7;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 24;
                var17 = var25[var21];
                var17 = var24.bind(var4)(var17);
                var18 = var17.Icon;
                var17 = {};
                var21 = var25[var21];
                var21 = var24.bind(var4)(var21);
                var21 = var21.Icon;
                var21 = var21.Sizes;
                var21 = var21.REFRESH_SMALL_16;
                var17['size'] = var21;
                var22 = _closure1_slot1;
                var21 = 25;
                var21 = var25[var21];
                var21 = var22.bind(var4)(var21);
                var17['source'] = var21;
                var21 = 11;
                var22 = var25[var21];
                var22 = var24.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.a2Ak8b;
                var21 = var22.bind(var23)(var21);
                var17['aria-label'] = var21;
                var20 = var20.sparkleIcon;
                var17['style'] = var20;
                var15 = var19.bind(var4)(var18, var17);
case 58:
                var12[1] = var15;
                var13 = null;
                if(!var14) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                var17 = _closure1_slot7;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 26;
                var14 = var18[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.LockIcon;
                var14 = {'size': 'xxs', 'color': 'icon-subtle'};
                var13 = var17.bind(var4)(var15, var14);
case 60:
                var12[2] = var13;
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var1['label'] = var9;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 11;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                if(var7) { _fun0002_ip = 62; continue _fun0002 }
case 63:
                var13 = var10.formatToPlainString;
                var7 = var12[var8];
                var7 = var11.bind(var4)(var7);
                var7 = var7.t;
                var9 = var7.AWmdd9;
                var7 = {};
                var14 = global;
                var14 = var14.HermesInternal;
                var15 = var14.concat;
                var14 = '';
                var14 = var15.bind(var14)(var16);
                var7['count'] = var14;
                var7 = var13.bind(var10)(var9, var7);
                _fun0002_ip = 64; continue _fun0002;
case 62:
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8["72gF3G"];
                var7 = var9.bind(var10)(var8);
case 64:
                var1['subLabel'] = var7;
                var1['start'] = var6;
                var1['end'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 27;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();
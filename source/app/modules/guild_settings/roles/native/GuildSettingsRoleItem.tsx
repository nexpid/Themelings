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
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.View;
        var _closure1_slot4 = var8;
        var11 = var4.StyleSheet;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.DEFAULT_ROLE_COLOR_HEX;
        var _closure1_slot5 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.jsx;
        var _closure1_slot6 = var8;
        var4 = var4.jsxs;
        var _closure1_slot7 = var4;
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
        var _closure1_slot8 = var4;
        var4 = var7.memo;
        var2 = function GuildSettingsRoleItem(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 8;
                var1 = var10[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var2.guildId;
                var14 = null;
                var1 = var3.bind(var4)(var1, var14);
                var3 = _closure1_slot8;
                var21 = var3.bind(var4)();
                var17 = var2.role;
                var _closure2_slot0 = var17;
                var19 = var2.sorting;
                var15 = var2.locked;
                var3 = var2.onPress;
                var _closure2_slot1 = var3;
                var20 = var2.onLongPress;
                var9 = var2.sortHandlers;
                var7 = var2.isEveryoneRole;
                var24 = var2.guildId;
                var _closure2_slot2 = var24;
                var16 = var2.numMembers;
                var5 = var2.isLastRole;
                var6 = var2.isFirstRole;
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var10[var2];
                var10 = var3.bind(var4)(var2);
                var3 = var10.useRoleIcon;
                var2 = {};
                var2['guildId'] = var24;
                var11 = var17.id;
                var2['roleId'] = var11;
                var25 = 32;
                var2['size'] = var25;
                var2 = var3.bind(var10)(var2);
                var10 = var17.tags;
                var11 = var14 == var10;
                var3 = undefined;
                if(var11) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = var10.guild_connections;
case 6:
                var3 = var14 === var3;
                var _closure2_slot3 = var3;
                var10 = {};
                var11 = 'longpress';
                var10['name'] = var11;
                var23 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = 11;
                var13 = var11[var12];
                var13 = var23.bind(var4)(var13);
                var18 = var13.intl;
                var13 = var18.string;
                var11 = var11[var12];
                var11 = var23.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["0dOFq+"];
                var11 = var13.bind(var18)(var11);
                var10['label'] = var11;
                var11 = new Array(1);
                var11[0] = var10;
                if(!var19) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                if(var15) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                var23 = {'accessibilityRole': 'button', 'accessibilityLabel': null, 'accessibilityActions': null, 'delayLongPress': 100, 'activeOpacity': 0.8};
                var27 = _closure1_slot0;
                var10 = _closure1_slot2;
                var13 = var10[var12];
                var13 = var27.bind(var4)(var13);
                var26 = var13.intl;
                var18 = var26.string;
                var13 = var10[var12];
                var13 = var27.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13["0dOFq+"];
                var13 = var18.bind(var26)(var13);
                var23['accessibilityLabel'] = var13;
                var23['accessibilityActions'] = var11;
                var11 = _closure1_slot1;
                var33 = 6;
                var10 = var10[var33];
                var10 = var11.bind(var4)(var10);
                var10 = var10.space;
                var10 = var10.PX_4;
                var23['hitSlop'] = var10;
                var36 = var23;
                var35 = var9;
                var9 = copyDataProperties(var36, var35);
                var26 = var17.managed;
                if(!var26) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var26 = !var3;
case 11:
                var10 = undefined;
                var11 = var23;
                var18 = true;
                var9 = false;
                if(var26) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var28 = _closure1_slot6;
                var30 = _closure1_slot0;
                var29 = _closure1_slot2;
                var26 = 15;
                var26 = var29[var26];
                var26 = var30.bind(var4)(var26);
                var27 = var26.IconButton;
                var26 = {};
                var31 = 16;
                var31 = var29[var31];
                var31 = var30.bind(var4)(var31);
                var32 = var31.TrashIcon;
                var31 = {};
                var34 = 'xs';
                var31['size'] = var34;
                var34 = _closure1_slot1;
                var33 = var29[var33];
                var33 = var34.bind(var4)(var33);
                var33 = var33.colors;
                var33 = var33.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT;
                var31['color'] = var33;
                var31 = var28.bind(var4)(var32, var31);
                var26['icon'] = var31;
                var31 = var29[var12];
                var31 = var30.bind(var4)(var31);
                var32 = var31.intl;
                var31 = var32.formatToPlainString;
                var29 = var29[var12];
                var29 = var30.bind(var4)(var29);
                var29 = var29.t;
                var30 = var29.FiMFTZ;
                var29 = {};
                var33 = var17.name;
                var29['name'] = var33;
                var29 = var31.bind(var32)(var30, var29);
                var26['accessibilityLabel'] = var29;
                var29 = 'sm';
                var26['size'] = var29;
                var29 = 'destructive';
                var26['variant'] = var29;
                var29 = function onPress() {
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
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                                var2 = _closure2_slot3;
                                if(!var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 12;
                                var3 = var3[var2];
                                var2 = undefined;
                                var7 = var5.bind(var2)(var3);
                                var6 = var7.putRoleConnectionsConfigurations;
                                var5 = _closure2_slot2;
                                var2 = _closure2_slot0;
                                var3 = var2.id;
                                var2 = new Array(0);
                                var2 = var6.bind(var7)(var5, var3, var2);
                                SaveGenerator(address=79);
case 19:
                                return var2;
case 20:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 17:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 13;
                                var5 = var5[var3];
                                var3 = undefined;
                                var7 = var6.bind(var3)(var5);
                                var6 = var7.deleteRole;
                                var5 = _closure2_slot2;
                                var4 = _closure2_slot0;
                                var4 = var4.id;
                                var4 = var6.bind(var7)(var5, var4);
                                return var3;
case 21:
                                return var2;
case 15:
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
                var26['onPress'] = var29;
                var10 = var28.bind(var4)(var27, var26);
                var11 = var23;
                var18 = true;
                var9 = false;
                _fun0002_ip = 13; continue _fun0002;
case 8:
                var10 = undefined;
                var11 = undefined;
                var18 = false;
                var9 = false;
                if(var19) { _fun0002_ip = 13; continue _fun0002 }
case 22:
                var9 = true;
                var10 = undefined;
                var11 = undefined;
                var18 = false;
case 13:
                var13 = var2;
                if(!(var14 == var13)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var3 = var17.tags;
                var23 = var14 == var3;
                var2 = undefined;
                if(var23) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var2 = var3.guild_connections;
case 25:
                if(!(var14 !== var2)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                if(!var1) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var1 = var17.colors;
                if(!(var14 != var1)) { _fun0002_ip = 29; continue _fun0002 }
case 31:
                var1 = var17.colors;
                var1 = var1.secondary_color;
                if(!(var14 == var1)) { _fun0002_ip = 32; continue _fun0002 }
case 29:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var26 = var21.container;
                var23 = new Array(2);
                var23[0] = var26;
                var26 = {};
                var27 = var17.colorString;
                if(!(var14 == var27)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var27 = _closure1_slot5;
                _fun0002_ip = 35; continue _fun0002;
case 33:
                var27 = var17.colorString;
case 35:
                var26['backgroundColor'] = var27;
                var23[1] = var26;
                var1['style'] = var23;
                var27 = _closure1_slot6;
                var26 = _closure1_slot0;
                var28 = _closure1_slot2;
                var23 = 21;
                var23 = var28[var23];
                var23 = var26.bind(var4)(var23);
                var26 = var23.ShieldUserIcon;
                var23 = {};
                var28 = 'md';
                var23['size'] = var28;
                var28 = var21.image;
                var23['style'] = var28;
                var23 = var27.bind(var4)(var26, var23);
                var1['children'] = var23;
                var1 = var3.bind(var4)(var2, var1);
                _fun0002_ip = 36; continue _fun0002;
case 32:
                var23 = _closure1_slot7;
                var3 = _closure1_slot4;
                var2 = {};
                var26 = var21.container;
                var2['style'] = var26;
                var29 = _closure1_slot6;
                var27 = _closure1_slot1;
                var30 = _closure1_slot2;
                var26 = 18;
                var26 = var30[var26];
                var27 = var27.bind(var4)(var26);
                var26 = {};
                var28 = var17.colors;
                var28 = var28.primary_color;
                var33 = new Array(3);
                var33[0] = var28;
                var28 = var17.colors;
                var28 = var28.secondary_color;
                var33[1] = var28;
                var28 = var17.colors;
                var28 = var28.tertiary_color;
                var33[2] = var28;
                var32 = var33.filter;
                var28 = _closure1_slot0;
                var31 = 19;
                var31 = var30[var31];
                var31 = var28.bind(var4)(var31);
                var31 = var31.isNotNullish;
                var33 = var32.bind(var33)(var31);
                var32 = var33.map;
                var31 = function(arg1) {
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
                var31 = var32.bind(var33)(var31);
                var26['colors'] = var31;
                var31 = {'x': 0, 'y': 0};
                var26['start'] = var31;
                var31 = {'x': 1, 'y': 0};
                var26['end'] = var31;
                var31 = var21.gradient;
                var26['style'] = var31;
                var27 = var29.bind(var4)(var27, var26);
                var26 = new Array(2);
                var26[0] = var27;
                var27 = 21;
                var27 = var30[var27];
                var27 = var28.bind(var4)(var27);
                var28 = var27.ShieldUserIcon;
                var27 = {};
                var30 = 'md';
                var27['size'] = var30;
                var30 = var21.image;
                var27['style'] = var30;
                var27 = var29.bind(var4)(var28, var27);
                var26[1] = var27;
                var2['children'] = var26;
                var1 = var23.bind(var4)(var3, var2);
case 36:
                _fun0002_ip = 37; continue _fun0002;
case 27:
                var23 = _closure1_slot6;
                var3 = _closure1_slot1;
                var26 = _closure1_slot2;
                var2 = 17;
                var2 = var26[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['size'] = var25;
                var2['guildId'] = var24;
                var2['role'] = var17;
                var1 = var23.bind(var4)(var3, var2);
case 37:
                var13 = var1;
case 23:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var23 = _closure1_slot2;
                var1 = 22;
                var1 = var23[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1['onLongPress'] = var20;
                var20 = undefined;
                if(var19) { _fun0002_ip = 38; continue _fun0002 }
case 39:
                var20 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                        var3 = _closure2_slot1;
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
case 40:
                        var1 = undefined;
                        return var1;
                    }
                };
case 38:
                var1['onPress'] = var20;
                if(!var19) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                var19 = !var18;
case 42:
                var1['disabled'] = var19;
                var1['draggable'] = var18;
                var1['dragHandlePressableProps'] = var11;
                var1['trailing'] = var10;
                var1['arrow'] = var9;
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                if(var7) { _fun0002_ip = 44; continue _fun0002 }
case 45:
                var9 = {};
                var9['children'] = var13;
                _fun0002_ip = 46; continue _fun0002;
case 44:
                var13 = {};
                var18 = var21.everyone;
                var13['style'] = var18;
                var20 = _closure1_slot6;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 23;
                var18 = var22[var18];
                var18 = var19.bind(var4)(var18);
                var19 = var18.GroupIcon;
                var18 = {};
                var18 = var20.bind(var4)(var19, var18);
                var13['children'] = var18;
                var9 = var13;
case 46:
                var9 = var11.bind(var4)(var10, var9);
                var1['icon'] = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var9 = {};
                var13 = var21.row;
                var9['style'] = var13;
                var19 = _closure1_slot6;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 7;
                var13 = var20[var13];
                var13 = var18.bind(var4)(var13);
                var18 = var13.Text;
                var13 = {'lineClamp': 1, 'style': null, 'variant': 'text-md/semibold', 'color': 'interactive-text-active'};
                var20 = var21.label;
                var13['style'] = var20;
                var20 = var17.name;
                var13['children'] = var20;
                var18 = var19.bind(var4)(var18, var13);
                var13 = new Array(3);
                var13[0] = var18;
                var18 = var17.tags;
                var19 = var14 == var18;
                var17 = undefined;
                if(var19) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                var17 = var18.subscription_listing_id;
case 47:
                var18 = var14 != var17;
                var17 = null;
                if(!var18) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                var20 = _closure1_slot6;
                var25 = _closure1_slot0;
                var22 = _closure1_slot2;
                var23 = 24;
                var18 = var22[var23];
                var18 = var25.bind(var4)(var18);
                var19 = var18.Icon;
                var18 = {};
                var23 = var22[var23];
                var23 = var25.bind(var4)(var23);
                var23 = var23.Icon;
                var23 = var23.Sizes;
                var23 = var23.REFRESH_SMALL_16;
                var18['size'] = var23;
                var24 = _closure1_slot1;
                var23 = 25;
                var23 = var22[var23];
                var23 = var24.bind(var4)(var23);
                var18['source'] = var23;
                var23 = var22[var12];
                var23 = var25.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var12];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.a2Ak8b;
                var22 = var23.bind(var24)(var22);
                var18['aria-label'] = var22;
                var21 = var21.sparkleIcon;
                var18['style'] = var21;
                var17 = var20.bind(var4)(var19, var18);
case 49:
                var13[1] = var17;
                var14 = null;
                if(!var15) { _fun0002_ip = 51; continue _fun0002 }
case 52:
                var18 = _closure1_slot6;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 26;
                var15 = var19[var15];
                var15 = var17.bind(var4)(var15);
                var17 = var15.LockIcon;
                var15 = {'size': 'xxs', 'color': 'icon-subtle'};
                var14 = var18.bind(var4)(var17, var15);
case 51:
                var13[2] = var14;
                var9['children'] = var13;
                var9 = var11.bind(var4)(var10, var9);
                var1['label'] = var9;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var12];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                if(var7) { _fun0002_ip = 53; continue _fun0002 }
case 54:
                var13 = var10.formatToPlainString;
                var7 = var8[var12];
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
                _fun0002_ip = 55; continue _fun0002;
case 53:
                var9 = var10.string;
                var8 = var8[var12];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8["72gF3G"];
                var7 = var9.bind(var10)(var8);
case 55:
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
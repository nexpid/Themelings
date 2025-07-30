// app/modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
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
    var14 = 0;
    var4 = var6[var14];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var17 = 1;
    var7 = var6[var17];
    var4 = native4;
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
    var10 = {};
    var12 = 0.6;
    var10['opacity'] = var12;
    var4['disabled'] = var10;
    var10 = {'flexDirection': 'row', 'gap': 4, 'alignItems': 'center'};
    var4['row'] = var10;
    var10 = {};
    var15 = 12;
    var10['marginBottom'] = var15;
    var4['lastRow'] = var10;
    var16 = 20;
    var10 = {'paddingHorizontal': 20, 'paddingTop': 20};
    var4['rowContainer'] = var10;
    var10 = {};
    var12 = 6;
    var18 = var6[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_NORMAL;
    var10['tintColor'] = var18;
    var18 = var6[var12];
    var18 = var13.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var18;
    var10['borderRadius'] = var16;
    var18 = 8;
    var10['padding'] = var18;
    var4['everyone'] = var10;
    var10 = {};
    var10['flex'] = var17;
    var4['rowContents'] = var10;
    var10 = {};
    var10['lineHeight'] = var16;
    var4['label'] = var10;
    var10 = {};
    var16 = 16;
    var10['lineHeight'] = var16;
    var4['subLabel'] = var10;
    var10 = {'height': 13, 'width': 8};
    var4['arrow'] = var10;
    var10 = {};
    var10['marginRight'] = var15;
    var4['dragIconContainer'] = var10;
    var10 = {'width': 16, 'height': 16};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.RED_400;
    var10['tintColor'] = var15;
    var4['deleteIcon'] = var10;
    var10 = {};
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.ICON_MUTED;
    var10['tintColor'] = var15;
    var4['sparkleIcon'] = var10;
    var10 = {};
    var10['marginLeft'] = var14;
    var4['divider'] = var10;
    var10 = {'width': 32, 'height': 32, 'borderRadius': null, 'overflow': 'hidden', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var10['borderRadius'] = var12;
    var4['container'] = var10;
    var10 = {};
    var20 = var11.absoluteFillObject;
    var21 = var10;
    var11 = copyDataProperties(var21, var20);
    var4['gradient'] = var10;
    var10 = {};
    var11 = 'white';
    var10['tintColor'] = var11;
    var4['image'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function GuildSettingsRoleItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 7;
            var1 = var10[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var2 = var3.guildId;
            var1 = null;
            var2 = var4.bind(var5)(var2, var1);
            var4 = _closure1_slot8;
            var21 = var4.bind(var5)();
            var15 = var3.role;
            var _closure2_slot0 = var15;
            var22 = var3.sorting;
            var16 = var3.locked;
            var4 = var3.onPress;
            var _closure2_slot1 = var4;
            var19 = var3.onLongPress;
            var26 = var3.sortHandlers;
            var8 = var3.isEveryoneRole;
            var24 = var3.guildId;
            var _closure2_slot2 = var24;
            var17 = var3.numMembers;
            var6 = var3.isLastRole;
            var7 = var3.isFirstRole;
            var4 = _closure1_slot0;
            var3 = 8;
            var3 = var10[var3];
            var10 = var4.bind(var5)(var3);
            var4 = var10.useRoleIcon;
            var3 = {};
            var3['guildId'] = var24;
            var11 = var15.id;
            var3['roleId'] = var11;
            var25 = 32;
            var3['size'] = var25;
            var3 = var4.bind(var10)(var3);
            var10 = var15.tags;
            var11 = var1 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 198; continue _fun0001 }
 192:
            var4 = var10.guild_connections;
 198:
            var27 = var1 === var4;
            var _closure2_slot3 = var27;
            var4 = {};
            var10 = 'longpress';
            var4['name'] = var10;
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = 10;
            var11 = var10[var13];
            var11 = var14.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var13];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.0dOFq6;
            var10 = var11.bind(var12)(var10);
            var4['label'] = var10;
            var28 = new Array(1);
            var28[0] = var4;
            var11 = undefined;
            var12 = undefined;
            var18 = false;
            var10 = true;
            if(!var22) { _fun0001_ip = 528; continue _fun0001 }
 299:
            if(var16) { _fun0001_ip = 1676; continue _fun0001 }
 305:
            if(var8) { _fun0001_ip = 1676; continue _fun0001 }
 311:
            var23 = {'accessibilityRole': 'button', 'accessibilityActions': null, 'delayLongPress': 100, 'activeOpacity': 0.8};
            var23['accessibilityActions'] = var28;
            var35 = var23;
            var34 = var26;
            var26 = copyDataProperties(var35, var34);
            var26 = var15.managed;
            if(!var26) { _fun0001_ip = 353; continue _fun0001 }
 350:
            var26 = !var27;
 353:
            var11 = undefined;
            var12 = var23;
            var18 = true;
            var10 = false;
            if(var26) { _fun0001_ip = 528; continue _fun0001 }
 368:
            var28 = _closure1_slot6;
            var32 = _closure1_slot0;
            var29 = _closure1_slot2;
            var26 = 14;
            var26 = var29[var26];
            var26 = var32.bind(var5)(var26);
            var27 = var26.IconButton;
            var26 = {};
            var30 = 15;
            var30 = var29[var30];
            var30 = var32.bind(var5)(var30);
            var31 = var30.TrashIcon;
            var30 = {};
            var33 = 'xs';
            var30['size'] = var33;
            var30 = var28.bind(var5)(var31, var30);
            var26['icon'] = var30;
            var30 = var29[var13];
            var30 = var32.bind(var5)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var29[var13];
            var29 = var32.bind(var5)(var29);
            var29 = var29.t;
            var29 = var29.YsFpa2;
            var29 = var30.bind(var31)(var29);
            var26['accessibilityLabel'] = var29;
            var29 = 'sm';
            var26['size'] = var29;
            var29 = 'destructive';
            var26['variant'] = var29;
            var29 = function onPress() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var12 = _closure1_slot0;
                var9 = 10;
                var10 = var7[var9];
                var10 = var12.bind(var1)(var10);
                var14 = var10.intl;
                var13 = var14.formatToPlainString;
                var10 = var7[var9];
                var10 = var12.bind(var1)(var10);
                var10 = var10.t;
                var11 = var10.FiMFTU;
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
                var10 = var10.qALKn5;
                var10 = var11.bind(var13)(var10);
                var2['body'] = var10;
                var10 = var7[var9];
                var10 = var12.bind(var1)(var10);
                var13 = var10.intl;
                var11 = var13.string;
                var10 = var7[var9];
                var10 = var12.bind(var1)(var10);
                var10 = var10.t;
                var10 = var10.gm1Ven;
                var10 = var11.bind(var13)(var10);
                var2['cancelText'] = var10;
                var10 = var7[var9];
                var10 = var12.bind(var1)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var7[var9];
                var9 = var12.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.p89ACg;
                var9 = var10.bind(var11)(var9);
                var2['confirmText'] = var9;
                var9 = _closure1_slot3;
                var8 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 141; continue _fun0002 }
 10:
                            var2 = _closure2_slot3;
                            if(!var2) { _fun0002_ip = 85; continue _fun0002 }
 20:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 11;
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
 77:
                            return var2;
 79:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0002_ip = 138; continue _fun0002 }
 85:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 12;
                            var5 = var5[var3];
                            var3 = undefined;
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.deleteRole;
                            var5 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var4 = var6.bind(var7)(var5, var4);
                            return var3;
 138:
                            return var2;
 141:
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
                var5 = 13;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.Colors;
                var5 = var5.RED;
                var2['confirmColor'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var26['onPress'] = var29;
            var11 = var28.bind(var5)(var27, var26);
            var12 = var23;
            var18 = true;
            var10 = false;
 528:
            var14 = var3;
            if(!(var1 == var14)) { _fun0001_ip = 1033; continue _fun0001 }
 538:
            var4 = var15.tags;
            var23 = var1 == var4;
            var3 = undefined;
            if(var23) { _fun0001_ip = 559; continue _fun0001 }
 553:
            var3 = var4.guild_connections;
 559:
            if(!(var1 !== var3)) { _fun0001_ip = 985; continue _fun0001 }
 566:
            if(!var2) { _fun0001_ip = 596; continue _fun0001 }
 569:
            var2 = var15.colors;
            if(!(var1 != var2)) { _fun0001_ip = 596; continue _fun0001 }
 578:
            var2 = var15.colors;
            var2 = var2.secondary_color;
            if(!(var1 == var2)) { _fun0001_ip = 726; continue _fun0001 }
 596:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {};
            var26 = var21.container;
            var23 = new Array(2);
            var23[0] = var26;
            var26 = {};
            var27 = var15.colorString;
            if(!(var1 == var27)) { _fun0001_ip = 637; continue _fun0001 }
 631:
            var27 = _closure1_slot5;
            _fun0001_ip = 643; continue _fun0001;
 637:
            var27 = var15.colorString;
 643:
            var26['backgroundColor'] = var27;
            var23[1] = var26;
            var2['style'] = var23;
            var27 = _closure1_slot6;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 20;
            var23 = var28[var23];
            var23 = var26.bind(var5)(var23);
            var26 = var23.ShieldUserIcon;
            var23 = {};
            var28 = 'md';
            var23['size'] = var28;
            var28 = var21.image;
            var23['style'] = var28;
            var23 = var27.bind(var5)(var26, var23);
            var2['children'] = var23;
            var2 = var4.bind(var5)(var3, var2);
            _fun0001_ip = 983; continue _fun0001;
 726:
            var23 = _closure1_slot7;
            var4 = _closure1_slot4;
            var3 = {};
            var26 = var21.container;
            var3['style'] = var26;
            var29 = _closure1_slot6;
            var27 = _closure1_slot1;
            var30 = _closure1_slot2;
            var26 = 17;
            var26 = var30[var26];
            var27 = var27.bind(var5)(var26);
            var26 = {};
            var28 = var15.colors;
            var28 = var28.primary_color;
            var33 = new Array(3);
            var33[0] = var28;
            var28 = var15.colors;
            var28 = var28.secondary_color;
            var33[1] = var28;
            var28 = var15.colors;
            var28 = var28.tertiary_color;
            var33[2] = var28;
            var32 = var33.filter;
            var28 = _closure1_slot0;
            var31 = 18;
            var31 = var30[var31];
            var31 = var28.bind(var5)(var31);
            var31 = var31.isNotNullish;
            var33 = var32.bind(var33)(var31);
            var32 = var33.map;
            var31 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
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
            var27 = var29.bind(var5)(var27, var26);
            var26 = new Array(2);
            var26[0] = var27;
            var27 = 20;
            var27 = var30[var27];
            var27 = var28.bind(var5)(var27);
            var28 = var27.ShieldUserIcon;
            var27 = {};
            var30 = 'md';
            var27['size'] = var30;
            var30 = var21.image;
            var27['style'] = var30;
            var27 = var29.bind(var5)(var28, var27);
            var26[1] = var27;
            var3['children'] = var26;
            var2 = var23.bind(var5)(var4, var3);
 983:
            _fun0001_ip = 1030; continue _fun0001;
 985:
            var23 = _closure1_slot6;
            var4 = _closure1_slot1;
            var26 = _closure1_slot2;
            var3 = 16;
            var3 = var26[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['size'] = var25;
            var3['guildId'] = var24;
            var3['role'] = var15;
            var2 = var23.bind(var5)(var4, var3);
 1030:
            var14 = var2;
 1033:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 21;
            var2 = var23[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var2['onLongPress'] = var19;
            var19 = undefined;
            if(var22) { _fun0001_ip = 1082; continue _fun0001 }
 1075:
            var19 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 28; continue _fun0003 }
 13:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 28:
                    var1 = undefined;
                    return var1;
                }
            };
 1082:
            var2['onPress'] = var19;
            var2['draggable'] = var18;
            var2['dragHandlePressableProps'] = var12;
            var2['trailing'] = var11;
            var2['arrow'] = var10;
            var12 = _closure1_slot6;
            var11 = _closure1_slot4;
            if(var8) { _fun0001_ip = 1125; continue _fun0001 }
 1117:
            var10 = {};
            var10['children'] = var14;
            _fun0001_ip = 1182; continue _fun0001;
 1125:
            var14 = {};
            var18 = var21.everyone;
            var14['style'] = var18;
            var20 = _closure1_slot6;
            var19 = _closure1_slot0;
            var22 = _closure1_slot2;
            var18 = 22;
            var18 = var22[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.GroupIcon;
            var18 = {};
            var18 = var20.bind(var5)(var19, var18);
            var14['children'] = var18;
            var10 = var14;
 1182:
            var10 = var12.bind(var5)(var11, var10);
            var2['icon'] = var10;
            var12 = _closure1_slot7;
            var11 = _closure1_slot4;
            var10 = {};
            var14 = var21.row;
            var10['style'] = var14;
            var19 = _closure1_slot6;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var14 = 23;
            var14 = var20[var14];
            var14 = var18.bind(var5)(var14);
            var18 = var14.Text;
            var14 = {'lineClamp': 1, 'style': null, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var20 = var21.label;
            var14['style'] = var20;
            var20 = var15.name;
            var14['children'] = var20;
            var18 = var19.bind(var5)(var18, var14);
            var14 = new Array(3);
            var14[0] = var18;
            var18 = var15.tags;
            var19 = var1 == var18;
            var15 = undefined;
            if(var19) { _fun0001_ip = 1310; continue _fun0001 }
 1304:
            var15 = var18.subscription_listing_id;
 1310:
            var18 = var1 != var15;
            var15 = null;
            if(!var18) { _fun0001_ip = 1460; continue _fun0001 }
 1322:
            var20 = _closure1_slot6;
            var24 = _closure1_slot1;
            var22 = _closure1_slot2;
            var23 = 24;
            var18 = var22[var23];
            var19 = var24.bind(var5)(var18);
            var18 = {};
            var23 = var22[var23];
            var23 = var24.bind(var5)(var23);
            var23 = var23.Sizes;
            var23 = var23.REFRESH_SMALL_16;
            var18['size'] = var23;
            var23 = 25;
            var23 = var22[var23];
            var23 = var24.bind(var5)(var23);
            var18['source'] = var23;
            var25 = _closure1_slot0;
            var23 = var22[var13];
            var23 = var25.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var13];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.a2Ak8f;
            var22 = var23.bind(var24)(var22);
            var18['aria-label'] = var22;
            var21 = var21.sparkleIcon;
            var18['style'] = var21;
            var15 = var20.bind(var5)(var19, var18);
 1460:
            var14[1] = var15;
            var15 = null;
            if(!var16) { _fun0001_ip = 1519; continue _fun0001 }
 1469:
            var19 = _closure1_slot6;
            var18 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 26;
            var16 = var20[var16];
            var16 = var18.bind(var5)(var16);
            var18 = var16.LockIcon;
            var16 = {'size': 'xxs', 'color': 'icon-secondary'};
            var15 = var19.bind(var5)(var18, var16);
 1519:
            var14[2] = var15;
            var10['children'] = var14;
            var10 = var12.bind(var5)(var11, var10);
            var2['label'] = var10;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var13];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            if(var8) { _fun0001_ip = 1623; continue _fun0001 }
 1562:
            var14 = var11.formatToPlainString;
            var8 = var9[var13];
            var8 = var12.bind(var5)(var8);
            var8 = var8.t;
            var10 = var8.AWmdd3;
            var8 = {};
            var15 = global;
            var15 = var15.HermesInternal;
            var16 = var15.concat;
            var15 = '';
            var15 = var16.bind(var15)(var17);
            var8['count'] = var15;
            var8 = var14.bind(var11)(var10, var8);
            _fun0001_ip = 1655; continue _fun0001;
 1623:
            var10 = var11.string;
            var9 = var9[var13];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.72gF3N;
            var8 = var10.bind(var11)(var9);
 1655:
            var2['subLabel'] = var8;
            var2['start'] = var7;
            var2['end'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1676:
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
})();
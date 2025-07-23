// app/components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function ChannelPermissionSyncModule(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.channel;
            var _closure2_slot0 = var7;
            var10 = var2.category;
            var _closure2_slot1 = var10;
            var8 = var2.locked;
            var2 = _closure1_slot17;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var6 = _closure1_slot6;
            var3 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var10;
            var1 = function() {
                var3 = _closure1_slot1;
                var11 = _closure1_slot3;
                var1 = 13;
                var2 = var11[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var10 = _closure1_slot0;
                var7 = 14;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var12 = var8.intl;
                var9 = var12.string;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.YWMtRU;
                var8 = var9.bind(var12)(var8);
                var2['title'] = var8;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var13 = var8.intl;
                var12 = var13.format;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var8 = var8.t;
                var9 = var8.iKW+jY;
                var8 = {};
                var15 = 15;
                var14 = var11[var15];
                var21 = var10.bind(var1)(var14);
                var20 = var21.computeChannelName;
                var25 = _closure2_slot0;
                var24 = _closure1_slot12;
                var23 = _closure1_slot11;
                var22 = true;
                var26 = var21;
                var16 = var26[var20](var25, var24, var23, var22, var21);
                var8['channelName'] = var16;
                var15 = var11[var15];
                var18 = var10.bind(var1)(var15);
                var17 = var18.computeChannelName;
                var16 = _closure2_slot1;
                var15 = _closure1_slot12;
                var14 = _closure1_slot11;
                var14 = var17.bind(var18)(var16, var15, var14);
                var8['categoryName'] = var14;
                var8 = var12.bind(var13)(var9, var8);
                var2['body'] = var8;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var12 = var8.intl;
                var9 = var12.string;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.eW8Gy8;
                var8 = var9.bind(var12)(var8);
                var2['confirmText'] = var8;
                var8 = var11[var7];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var1)(var7);
                var7 = var7.t;
                var7 = var7.s4uM3d;
                var7 = var8.bind(var9)(var7);
                var2['cancelText'] = var7;
                var7 = _closure1_slot5;
                var6 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 252; continue _fun0002 }
 10:
                            var3 = _closure2_slot1;
                            var2 = var3.guild_id;
                            var10 = {};
                            var13 = var3.permissionOverwrites;
                            var14 = var10;
                            var3 = copyDataProperties(var14, var13);
                            var6 = null;
                            var3 = var6 != var2;
                            if(!var3) { _fun0002_ip = 54; continue _fun0002 }
 46:
                            var5 = var10[var2];
                            var3 = var6 == var5;
 54:
                            if(!var3) { _fun0002_ip = 97; continue _fun0002 }
 57:
                            var6 = _closure1_slot2;
                            var5 = _closure1_slot3;
                            var3 = 16;
                            var5 = var5[var3];
                            var3 = undefined;
                            var5 = var6.bind(var3)(var5);
                            var3 = var5.makeEveryoneOverwrite;
                            var3 = var3.bind(var5)(var2);
                            var10[var2] = var3;
 97:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var3 = 17;
                            var5 = var5[var3];
                            var3 = undefined;
                            var9 = var6.bind(var3)(var5);
                            var7 = var9.checkDefaultChannelThresholdMetAfterChannelPermissionDeny;
                            var6 = _closure2_slot0;
                            var5 = var10[var2];
                            var5 = var5.deny;
                            var2 = var10[var2];
                            var2 = var2.allow;
                            var2 = var7.bind(var9)(var6, var5, var2);
                            SaveGenerator(address=163);
 161:
                            return var2;
 163:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 249; continue _fun0002 }
 169:
                            if(!var2) { _fun0002_ip = 246; continue _fun0002 }
 172:
                            var6 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var5 = 18;
                            var5 = var11[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.saveChannel;
                            var4 = _closure2_slot0;
                            var5 = var4.id;
                            var4 = {};
                            var9 = _closure1_slot1;
                            var8 = 19;
                            var8 = var11[var8];
                            var9 = var9.bind(var3)(var8);
                            var8 = var9.values;
                            var8 = var8.bind(var9)(var10);
                            var4['permissionOverwrites'] = var8;
                            var4 = var6.bind(var7)(var5, var4);
 246:
                            return var3;
 249:
                            return var2;
 252:
                            return var1;
                        }
                    };
                    return var1;
                };
                var6 = var7.bind(var1)(var6);
                var _closure3_slot0 = var6;
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
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11 = var3.bind(var6)(var1, var2);
            var6 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 15;
            var1 = var9[var1];
            var7 = var6.bind(var4)(var1);
            var3 = var7.computeChannelName;
            var2 = _closure1_slot12;
            var1 = _closure1_slot11;
            var15 = var3.bind(var7)(var10, var2, var1);
            var3 = _closure1_slot15;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var5.tableRowGroupContainer;
            var1['style'] = var5;
            var7 = _closure1_slot15;
            var5 = 20;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TableRowGroup;
            var5 = {};
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var16 = 14;
            var12 = var9[var16];
            var12 = var10.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.formatToPlainString;
            var9 = var9[var16];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            if(var8) { _fun0001_ip = 232; continue _fun0001 }
 209:
            var10 = var9.OIhm0N;
            var8 = {};
            var8['categoryName'] = var15;
            var8 = var12.bind(var14)(var10, var8);
            _fun0001_ip = 253; continue _fun0001;
 232:
            var10 = var9.ETJqLi;
            var9 = {};
            var9['categoryName'] = var15;
            var8 = var12.bind(var14)(var10, var9);
 253:
            var5['title'] = var8;
            var10 = _closure1_slot15;
            var15 = _closure1_slot0;
            var12 = _closure1_slot3;
            var8 = 21;
            var8 = var12[var8];
            var8 = var15.bind(var4)(var8);
            var9 = var8.TableRow;
            var8 = {};
            var17 = _closure1_slot15;
            var13 = 22;
            var13 = var12[var13];
            var13 = var15.bind(var4)(var13);
            var14 = var13.RefreshIcon;
            var13 = {};
            var13 = var17.bind(var4)(var14, var13);
            var8['icon'] = var13;
            var13 = var12[var16];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var12[var16];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.NVwuHh;
            var12 = var13.bind(var14)(var12);
            var8['label'] = var12;
            var8['onPress'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function CategorySync(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var7 = var1.channel;
            var6 = var1.category;
            var3 = var1.isEditing;
            var2 = var1.locked;
            var4 = null;
            var5 = var4 == var6;
            var1 = null;
            if(var5) { _fun0003_ip = 77; continue _fun0003 }
 37:
            var1 = null;
            if(var3) { _fun0003_ip = 77; continue _fun0003 }
 42:
            var5 = _closure1_slot15;
            var4 = _closure1_slot18;
            var3 = {};
            var3['channel'] = var7;
            var3['category'] = var6;
            var3['locked'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 77:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function AddPermission(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var1 = var1.isEditing;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var2 = function handleCreatePermissionOverwrite(arg1) {
                var4 = _closure2_slot0;
                var3 = var4.push;
                var1 = _closure1_slot14;
                var2 = var1.NEW_PERMISSION;
                var1 = {};
                var5 = arg1;
                var1['type'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var _closure2_slot1 = var2;
            var2 = _closure1_slot17;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 23;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            _closure2_slot0 = var2;
            if(var1) { _fun0004_ip = 460; continue _fun0004 }
 79:
            var3 = _closure1_slot15;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var5.tableRowGroupContainer;
            var1['style'] = var5;
            var7 = _closure1_slot16;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var5 = 20;
            var5 = var17[var5];
            var5 = var16.bind(var4)(var5);
            var6 = var5.TableRowGroup;
            var5 = {};
            var13 = 14;
            var8 = var17[var13];
            var8 = var16.bind(var4)(var8);
            var10 = var8.intl;
            var9 = var10.string;
            var8 = var17[var13];
            var8 = var16.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.vPHdPz;
            var8 = var9.bind(var10)(var8);
            var5['title'] = var8;
            var11 = _closure1_slot15;
            var9 = 21;
            var8 = var17[var9];
            var8 = var16.bind(var4)(var8);
            var10 = var8.TableRow;
            var8 = {};
            var20 = _closure1_slot15;
            var14 = 24;
            var18 = var17[var14];
            var18 = var16.bind(var4)(var18);
            var19 = var18.PlusMediumIcon;
            var18 = {};
            var18 = var20.bind(var4)(var19, var18);
            var8['icon'] = var18;
            var18 = var17[var13];
            var18 = var16.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var17[var13];
            var18 = var16.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.fVWxvb;
            var18 = var19.bind(var20)(var18);
            var8['label'] = var18;
            var18 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure1_slot13;
                var2 = var1.ROLE;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8['onPress'] = var18;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot15;
            var9 = var17[var9];
            var9 = var16.bind(var4)(var9);
            var10 = var9.TableRow;
            var9 = {};
            var18 = _closure1_slot15;
            var14 = var17[var14];
            var14 = var16.bind(var4)(var14);
            var15 = var14.PlusMediumIcon;
            var14 = {};
            var14 = var18.bind(var4)(var15, var14);
            var9['icon'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.riesLi;
            var13 = var14.bind(var15)(var13);
            var9['label'] = var13;
            var12 = function onPress() {
                var3 = _closure2_slot1;
                var1 = _closure1_slot13;
                var2 = var1.MEMBER;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9['onPress'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 460:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function RoleRow(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var1 = var2.role;
            var5 = var1.id;
            var14 = var1.name;
            var12 = var1.colorString;
            var1 = var2.channel;
            var9 = var2.isEditing;
            var8 = var2.onSelect;
            var6 = var2.onDelete;
            var10 = _closure1_slot0;
            var15 = _closure1_slot3;
            var2 = 25;
            var2 = var15[var2];
            var4 = undefined;
            var3 = var10.bind(var4)(var2);
            var2 = var3.isEveryoneRoleId;
            var1 = var1.guild_id;
            var7 = var2.bind(var3)(var1, var5);
            var3 = _closure1_slot15;
            var1 = 21;
            var1 = var15[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var11 = _closure1_slot15;
            var5 = 26;
            var5 = var15[var5];
            var5 = var10.bind(var4)(var5);
            var10 = var5.RoleLabel;
            var5 = {};
            var5['name'] = var14;
            var5['color'] = var12;
            var5 = var11.bind(var4)(var10, var5);
            var1['label'] = var5;
            var5 = !var9;
            var1['arrow'] = var5;
            var5 = null;
            if(!var9) { _fun0005_ip = 297; continue _fun0005 }
 172:
            var5 = null;
            if(var7) { _fun0005_ip = 297; continue _fun0005 }
 177:
            var12 = _closure1_slot15;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var10 = 27;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.CircleMinusIcon;
            var10 = {};
            var14 = _closure1_slot1;
            var13 = 12;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.colors;
            var13 = var13.INFO_DANGER_FOREGROUND;
            var10['color'] = var13;
            var13 = 14;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.N86XcH;
            var13 = var14.bind(var15)(var13);
            var10['accessibilityLabel'] = var13;
            var5 = var12.bind(var4)(var11, var10);
 297:
            var1['icon'] = var5;
            var5 = var8;
            if(!var9) { _fun0005_ip = 316; continue _fun0005 }
 307:
            var5 = var8;
            if(var7) { _fun0005_ip = 316; continue _fun0005 }
 313:
            var5 = var6;
 316:
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function RoleOverwrites(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var1 = var2.guild;
            var _closure2_slot0 = var1;
            var3 = var2.channel;
            var _closure2_slot1 = var3;
            var4 = var2.isEditing;
            var _closure2_slot2 = var4;
            var4 = var2.onSelectRow;
            var _closure2_slot3 = var4;
            var2 = var2.onDeleteRow;
            var _closure2_slot4 = var2;
            var2 = _closure1_slot17;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 28;
            var2 = var9[var2];
            var10 = var7.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getRoles;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var9.bind(var10)(var7, var2);
            var _closure2_slot5 = var2;
            var2 = {};
            var15 = var3.permissionOverwrites;
            var16 = var2;
            var3 = copyDataProperties(var16, var15);
            var3 = var1.id;
            var7 = var2[var3];
            var3 = null;
            if(!(var3 == var7)) { _fun0006_ip = 195; continue _fun0006 }
 150:
            var3 = var1.id;
            var9 = _closure1_slot2;
            var10 = _closure1_slot3;
            var7 = 16;
            var7 = var10[var7];
            var9 = var9.bind(var4)(var7);
            var7 = var9.makeEveryoneOverwrite;
            var1 = var1.id;
            var1 = var7.bind(var9)(var1);
            var2[var3] = var1;
 195:
            var3 = _closure1_slot1;
            var14 = _closure1_slot3;
            var1 = 19;
            var1 = var14[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 29;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.PermissionOverwriteType;
                var1 = var1.ROLE;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                var2 = _closure2_slot5;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2[var1];
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var13 = _closure1_slot0;
            var1 = 30;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var1 = var1.isNotNullish;
            var3 = var2.bind(var3)(var1);
            var2 = var3.sortBy;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.position;
                var1 = -var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var10 = var1.bind(var2)();
            var3 = _closure1_slot15;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = var6.tableRowGroupContainer;
            var1['style'] = var6;
            var7 = _closure1_slot15;
            var5 = 20;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var6 = var5.TableRowGroup;
            var5 = {};
            var9 = 14;
            var11 = var14[var9];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.LPJmLy;
            var9 = var11.bind(var12)(var9);
            var5['title'] = var9;
            var9 = var10.map;
            var8 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot15;
                var4 = _closure1_slot21;
                var3 = {};
                var3['role'] = var1;
                var7 = _closure2_slot1;
                var3['channel'] = var7;
                var6 = _closure2_slot2;
                var3['isEditing'] = var6;
                var6 = function onSelect() {
                    var3 = _closure2_slot3;
                    var1 = _closure3_slot0;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['onSelect'] = var6;
                var2 = function onDelete() {
                    var3 = _closure2_slot4;
                    var1 = _closure3_slot0;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['onDelete'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var8 = var9.bind(var10)(var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function MemberRow(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var8 = var1.guildId;
            var10 = var1.user;
            var6 = var1.isEditing;
            var5 = var1.onSelect;
            var7 = var1.onDelete;
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 31;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var10.id;
            var1['userId'] = var10;
            var1['guildId'] = var8;
            if(!var6) { _fun0007_ip = 81; continue _fun0007 }
 78:
            var5 = var7;
 81:
            var1['onPress'] = var5;
            var5 = !var6;
            var1['arrow'] = var5;
            var5 = null;
            if(!var6) { _fun0007_ip = 218; continue _fun0007 }
 98:
            var8 = _closure1_slot15;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 27;
            var6 = var13[var6];
            var6 = var12.bind(var3)(var6);
            var7 = var6.CircleMinusIcon;
            var6 = {};
            var10 = _closure1_slot1;
            var9 = 12;
            var9 = var13[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.colors;
            var9 = var9.INFO_DANGER_FOREGROUND;
            var6['color'] = var9;
            var9 = 14;
            var10 = var13[var9];
            var10 = var12.bind(var3)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.t;
            var9 = var9.N86XcH;
            var9 = var10.bind(var11)(var9);
            var6['accessibilityLabel'] = var9;
            var5 = var8.bind(var3)(var7, var6);
 218:
            var1['leading'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function MemberOverwrites(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var3 = var2.guild_id;
            var _closure2_slot0 = var3;
            var2 = var2.permissionOverwrites;
            var3 = var1.isEditing;
            var _closure2_slot1 = var3;
            var3 = var1.onSelectRow;
            var _closure2_slot2 = var3;
            var1 = var1.onDeleteRow;
            var _closure2_slot3 = var1;
            var1 = _closure1_slot17;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = 19;
            var1 = var8[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.bind(var5)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 29;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.PermissionOverwriteType;
                var1 = var1.MEMBER;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot12;
                var2 = var3.getUser;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var1 = 30;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var3 = var2.bind(var3)(var1);
            var2 = var3.sortBy;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.username;
                var1 = var2.toLowerCase;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var11 = var1.bind(var2)();
            var2 = var11.length;
            var1 = 0;
            var2 = var2 <= var1;
            var1 = null;
            if(var2) { _fun0008_ip = 345; continue _fun0008 }
 205:
            var4 = _closure1_slot15;
            var3 = _closure1_slot7;
            var2 = {};
            var7 = var7.tableRowGroupContainer;
            var2['style'] = var7;
            var8 = _closure1_slot15;
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var6 = 20;
            var6 = var15[var6];
            var6 = var14.bind(var5)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var10 = 14;
            var12 = var15[var10];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var15[var10];
            var10 = var14.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.9Oq93t;
            var10 = var12.bind(var13)(var10);
            var6['title'] = var10;
            var10 = var11.map;
            var9 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot15;
                var4 = _closure1_slot23;
                var3 = {};
                var7 = _closure2_slot0;
                var3['guildId'] = var7;
                var3['user'] = var1;
                var6 = _closure2_slot1;
                var3['isEditing'] = var6;
                var6 = function onSelect() {
                    var3 = _closure2_slot2;
                    var1 = _closure3_slot0;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['onSelect'] = var6;
                var2 = function onDelete() {
                    var3 = _closure2_slot3;
                    var1 = _closure3_slot0;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['onDelete'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 345:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PermissionOverrideType;
    var _closure1_slot13 = var7;
    var4 = var4.ChannelSettingsSections;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var4['tableRowGroupContainer'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['marginHorizontal'] = var10;
    var4['tableContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelSettingsPermissionsOverview(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var9 = var1.channelId;
            var _closure2_slot0 = var9;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var1 = function handlePressRow(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0010_ip = 54; continue _fun0010 }
 10:
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var1 = _closure1_slot14;
                    var2 = var1.PERMISSION_OVERRIDES;
                    var1 = {};
                    var5 = arg1;
                    var1['type'] = var5;
                    var5 = arg2;
                    var1['id'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure2_slot9 = var1;
            var1 = function handleClearPermissionOverwrite(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var8 = arg1;
                    var _closure3_slot0 = var8;
                    var1 = _closure2_slot5;
                    var4 = null;
                    var6 = var4 == var1;
                    var1 = undefined;
                    var2 = undefined;
                    if(var6) { _fun0011_ip = 37; continue _fun0011 }
 29:
                    var3 = _closure2_slot5;
                    var2 = var3[var8];
 37:
                    var7 = _closure1_slot12;
                    var3 = var7.getUser;
                    var3 = var3.bind(var7)(var8);
                    if(!(var4 == var2)) { _fun0011_ip = 75; continue _fun0011 }
 59:
                    var4 = var4 == var3;
                    var13 = undefined;
                    if(var4) { _fun0011_ip = 73; continue _fun0011 }
 68:
                    var13 = var3.username;
 73:
                    _fun0011_ip = 80; continue _fun0011;
 75:
                    var13 = var2.name;
 80:
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var2 = 13;
                    var2 = var10[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 14;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var12 = var7.intl;
                    var11 = var12.formatToPlainString;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.t;
                    var8 = var7.txPV7u;
                    var7 = {};
                    var7['name'] = var13;
                    var7 = var11.bind(var12)(var8, var7);
                    var2['title'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.gm1Ven;
                    var7 = var8.bind(var11)(var7);
                    var2['cancelText'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.p89ACg;
                    var6 = var7.bind(var8)(var6);
                    var2['confirmText'] = var6;
                    var5 = function onConfirm() {
                        var5 = _closure3_slot0;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 34;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.clearPermissionOverwrite;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2, var5);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var _closure2_slot10 = var1;
            var1 = _closure1_slot17;
            var6 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 23;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useNavigation;
            var8 = var1.bind(var4)();
            _closure2_slot1 = var8;
            var1 = 28;
            var4 = var3[var1];
            var14 = var2.bind(var5)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var4;
            var11 = new Array(1);
            var11[0] = var9;
            var9 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var13.bind(var14)(var12, var9, var11);
            var _closure2_slot2 = var12;
            var9 = var3[var1];
            var13 = var2.bind(var5)(var9);
            var11 = var13.useStateFromStores;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure1_slot8;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0012_ip = 40; continue _fun0012 }
 30:
                    var4 = _closure2_slot2;
                    var1 = var4.parent_id;
 40:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var15 = var11.bind(var13)(var9, var4);
            var _closure2_slot3 = var15;
            var4 = var3[var1];
            var13 = var2.bind(var5)(var4);
            var11 = var13.useStateFromStores;
            var4 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot2;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0013_ip = 39; continue _fun0013 }
 30:
                    var4 = _closure2_slot2;
                    var1 = var4.guild_id;
 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var14 = var11.bind(var13)(var9, var4);
            var _closure2_slot4 = var14;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0014_ip = 45; continue _fun0014 }
 18:
                    var4 = _closure1_slot9;
                    var3 = var4.getRoles;
                    var2 = _closure2_slot4;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 45:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            _closure2_slot5 = var1;
            var4 = _closure1_slot6;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var15;
            var1 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0015_ip = 61; continue _fun0015 }
 16:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var3 = 16;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.areChannelsLocked;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot3;
                    var1 = var4.bind(var5)(var3, var2);
 61:
                    return var1;
                }
            };
            var13 = var3.bind(var4)(var1, var2);
            var3 = _closure1_slot6;
            var2 = var3.useState;
            var1 = false;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var5)(var3, var1);
            var1 = 0;
            var11 = var2[var1];
            _closure2_slot6 = var11;
            var1 = 1;
            var1 = var2[var1];
            var _closure2_slot7 = var1;
            var4 = _closure1_slot6;
            var3 = var4.useCallback;
            var2 = function() {
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 32;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.DeprecatedLayoutAnimation;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            var _closure2_slot8 = var1;
            var4 = _closure1_slot6;
            var3 = var4.useLayoutEffect;
            var2 = new Array(3);
            var2[0] = var8;
            var2[1] = var11;
            var2[2] = var1;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var4 = _closure1_slot15;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 33;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.HeaderTextButton;
                        var1 = {};
                        var11 = arg1;
                        var12 = var1;
                        var6 = copyDataProperties(var12, var11);
                        var8 = _closure2_slot8;
                        var7 = 'onPress';
                        var1[var7] = var8;
                        var6 = _closure2_slot6;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var5 = 14;
                        var7 = var10[var5];
                        var7 = var9.bind(var3)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var5 = var10[var5];
                        var5 = var9.bind(var3)(var5);
                        var5 = var5.t;
                        if(var6) { _fun0016_ip = 127; continue _fun0016 }
 114:
                        var6 = var5.bt75u7;
                        var6 = var7.bind(var8)(var6);
                        _fun0016_ip = 138; continue _fun0016;
 127:
                        var5 = var5.i4jeWV;
                        var6 = var7.bind(var8)(var5);
 138:
                        var5 = 'label';
                        var1[var5] = var6;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            var3 = null;
            var2 = var3 == var12;
            var1 = null;
            if(var2) { _fun0009_ip = 662; continue _fun0009 }
 442:
            var2 = var3 == var14;
            var1 = null;
            if(var2) { _fun0009_ip = 662; continue _fun0009 }
 454:
            var4 = _closure1_slot16;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var6.tableContainer;
            var2['style'] = var6;
            var9 = _closure1_slot15;
            var8 = _closure1_slot19;
            var6 = {};
            var6['channel'] = var12;
            var6['category'] = var15;
            var6['isEditing'] = var11;
            var6['locked'] = var13;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(4);
            var6[0] = var8;
            var13 = _closure1_slot15;
            var9 = _closure1_slot20;
            var8 = {};
            var8['isEditing'] = var11;
            var8 = var13.bind(var5)(var9, var8);
            var6[1] = var8;
            var13 = _closure1_slot15;
            var9 = _closure1_slot22;
            var8 = {};
            var8['guild'] = var14;
            var8['channel'] = var12;
            var8['isEditing'] = var11;
            var14 = function onSelectRow(arg1) {
                var4 = _closure2_slot9;
                var1 = _closure1_slot13;
                var3 = var1.ROLE;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var8['onSelectRow'] = var14;
            var14 = function onDeleteRow(arg1) {
                var3 = _closure2_slot10;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8['onDeleteRow'] = var14;
            var8 = var13.bind(var5)(var9, var8);
            var6[2] = var8;
            var9 = _closure1_slot15;
            var8 = _closure1_slot24;
            var7 = {};
            var7['channel'] = var12;
            var7['isEditing'] = var11;
            var11 = function onSelectRow(arg1) {
                var4 = _closure2_slot9;
                var1 = _closure1_slot13;
                var3 = var1.MEMBER;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var7['onSelectRow'] = var11;
            var10 = function onDeleteRow(arg1) {
                var3 = _closure2_slot10;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onDeleteRow'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[3] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 662:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
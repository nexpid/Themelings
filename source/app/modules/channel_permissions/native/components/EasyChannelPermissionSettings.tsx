// app/modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx
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
    var1 = function ChannelPermissionSettingsBasicView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var _closure2_slot0 = var3;
            var23 = var1.privateToggleState;
            var _closure2_slot1 = var23;
            var1 = var1.setPrivateToggleState;
            var _closure2_slot2 = var1;
            var5 = undefined;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var1 = function renderRowItem(arg1) {
                var1 = arg1;
                var5 = _closure1_slot22;
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 23;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['item'] = var1;
                var6 = _closure2_slot0;
                var7 = var6.id;
                var2['channelId'] = var7;
                var7 = true;
                var2['showType'] = var7;
                var2['showRemove'] = var7;
                var6 = var6.guild_id;
                var2['guildId'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var _closure2_slot8 = var1;
            var1 = _closure1_slot25;
            var15 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 16;
            var1 = var6[var1];
            var2 = var4.bind(var5)(var1);
            var1 = var2.useNavigation;
            var1 = var1.bind(var2)();
            var _closure2_slot3 = var1;
            var2 = 17;
            var2 = var6[var2];
            var7 = var4.bind(var5)(var2);
            var6 = var7.useStateFromStoresObject;
            var2 = _closure1_slot13;
            var4 = new Array(2);
            var4[0] = var2;
            var2 = _closure1_slot12;
            var4[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot13;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = var5.getGuildId;
                    var1 = var1.bind(var5)();
                    var3 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['guild'] = var3;
                    var2 = null;
                    var5 = var2 != var3;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 71; continue _fun0002 }
 51:
                    var5 = _closure1_slot12;
                    var4 = var5.getSortedRoles;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
 71:
                    var1['sortedGuildRoles'] = var2;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var4, var2);
            var11 = var2.guild;
            var _closure2_slot4 = var11;
            var2 = var2.sortedGuildRoles;
            var _closure2_slot5 = var2;
            var7 = _closure1_slot6;
            var6 = var7.useLayoutEffect;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var4 = _closure2_slot3;
                var3 = var4.setOptions;
                var2 = {};
                var1 = undefined;
                var2['headerRight'] = var1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var6.bind(var7)(var1, var4);
            var7 = _closure1_slot6;
            var6 = var7.useMemo;
            var4 = new Array(3);
            var4[0] = var11;
            var4[1] = var2;
            var4[2] = var3;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 82; continue _fun0003 }
 13:
                    var2 = _closure2_slot5;
                    if(!(var3 != var2)) { _fun0003_ip = 82; continue _fun0003 }
 21:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var5 = var6.getExistingRolesRows;
                    var10 = _closure2_slot4;
                    var9 = _closure2_slot5;
                    var2 = _closure2_slot0;
                    var7 = var2.accessPermissions;
                    var11 = var6;
                    var8 = var2;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    _fun0003_ip = 86; continue _fun0003;
 82:
                    var1 = new Array(0);
 86:
                    return var1;
                }
            };
            var18 = var6.bind(var7)(var1, var4);
            var1 = null;
            if(!(var1 != var11)) { _fun0001_ip = 1555; continue _fun0001 }
 248:
            if(!(var1 != var2)) { _fun0001_ip = 1555; continue _fun0001 }
 255:
            var2 = var3.isCategory;
            var24 = var2.bind(var3)();
            var6 = _closure1_slot11;
            var4 = var6.getMemberIds;
            var7 = var1 == var11;
            var2 = undefined;
            if(var7) { _fun0001_ip = 289; continue _fun0001 }
 284:
            var2 = var11.id;
 289:
            var13 = var4.bind(var6)(var2);
            var6 = _closure1_slot2;
            var2 = _closure1_slot3;
            var4 = 18;
            var7 = var2[var4];
            var12 = var6.bind(var5)(var7);
            var8 = var12.getExistingMembersRows;
            var29 = var3.accessPermissions;
            var33 = var12;
            var32 = var13;
            var31 = var3;
            var30 = var11;
            var12 = var33[var8](var32, var31, var30, var29, var28);
            var7 = function() {
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 257; continue _fun0004 }
 10:
                            var6 = _closure1_slot2;
                            var5 = _closure1_slot3;
                            var8 = 18;
                            var2 = var5[var8];
                            var3 = undefined;
                            var9 = var6.bind(var3)(var2);
                            var7 = var9.isPrivateGuildChannel;
                            var10 = _closure2_slot0;
                            var7 = var7.bind(var9)(var10);
                            var9 = var10.accessPermissions;
                            var5 = var5[var8];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.flipEveryonePermission;
                            var7 = var5.bind(var6)(var10, var9, var7);
                            var6 = _closure1_slot15;
                            var5 = var6.getCurrentUser;
                            var11 = var5.bind(var6)();
                            var12 = _closure1_slot14;
                            var10 = var12.can;
                            var5 = _closure1_slot18;
                            var6 = var5.ADMINISTRATOR;
                            var5 = _closure2_slot4;
                            var6 = var10.bind(var12)(var6, var5);
                            var5 = _closure2_slot7;
                            if(var5) { _fun0004_ip = 137; continue _fun0004 }
 131:
                            var10 = null;
                            var5 = var10 == var11;
 137:
                            if(var5) { _fun0004_ip = 143; continue _fun0004 }
 140:
                            var5 = var6;
 143:
                            if(var5) { _fun0004_ip = 192; continue _fun0004 }
 146:
                            var6 = _closure1_slot2;
                            var5 = _closure1_slot3;
                            var5 = var5[var8];
                            var8 = var6.bind(var3)(var5);
                            var6 = var8.grantUserChannelAccess;
                            var5 = _closure2_slot0;
                            var5 = var6.bind(var8)(var5, var9);
                            SaveGenerator(address=183);
 181:
                            return var5;
 183:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(!var6) { _fun0004_ip = 192; continue _fun0004 }
 189:
                            return var5;
 192:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var4 = 19;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.savePermissionUpdates;
                            var2 = _closure2_slot0;
                            var4 = var2.id;
                            var2 = new Array(1);
                            var2[0] = var7;
                            var2 = var5.bind(var6)(var4, var2);
                            SaveGenerator(address=245);
 243:
                            return var2;
 245:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0004_ip = 254; continue _fun0004 }
 251:
                            return var3;
 254:
                            return var2;
 257:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var7 = var7.bind(var5)();
            _closure2_slot6 = var7;
            var7 = function() {
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 491; continue _fun0005 }
 10:
                            var2 = _closure2_slot0;
                            var3 = var2.guild_id;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0005_ip = 105; continue _fun0005 }
 28:
                            var2 = _closure2_slot1;
                            if(var2) { _fun0005_ip = 105; continue _fun0005 }
 35:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var3 = 20;
                            var4 = var4[var3];
                            var3 = undefined;
                            var7 = var5.bind(var3)(var4);
                            var5 = var7.checkDefaultChannelThresholdMetAfterChannelPermissionDeny;
                            var4 = _closure2_slot0;
                            var2 = _closure1_slot18;
                            var2 = var2.VIEW_CHANNEL;
                            var2 = var5.bind(var7)(var4, var2);
                            SaveGenerator(address=90);
 88:
                            return var2;
 90:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0005_ip = 102; continue _fun0005 }
 96:
                            if(var2) { _fun0005_ip = 105; continue _fun0005 }
 99:
                            return var3;
 102:
                            return var2;
 105:
                            var7 = _closure2_slot1;
                            var9 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var11 = 21;
                            var4 = var3[var11];
                            var2 = undefined;
                            var4 = var9.bind(var2)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var3[var11];
                            var3 = var9.bind(var2)(var3);
                            var3 = var3.t;
                            if(var7) { _fun0005_ip = 176; continue _fun0005 }
 161:
                            var7 = var3.47gQYG;
                            var10 = var4.bind(var5)(var7);
                            _fun0005_ip = 189; continue _fun0005;
 176:
                            var3 = var3.vw48TU;
                            var10 = var4.bind(var5)(var3);
 189:
                            var4 = _closure2_slot1;
                            var9 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var5 = var3[var11];
                            var5 = var9.bind(var2)(var5);
                            var7 = var5.intl;
                            var5 = var7.format;
                            var3 = var3[var11];
                            var3 = var9.bind(var2)(var3);
                            var3 = var3.t;
                            if(var4) { _fun0005_ip = 269; continue _fun0005 }
 237:
                            var9 = var3.rKzX1N;
                            var4 = {};
                            var12 = _closure2_slot0;
                            var12 = var12.name;
                            var4['channelName'] = var12;
                            var9 = var5.bind(var7)(var9, var4);
                            _fun0005_ip = 299; continue _fun0005;
 269:
                            var4 = var3.hGzPn5;
                            var3 = {};
                            var12 = _closure2_slot0;
                            var12 = var12.name;
                            var3['channelName'] = var12;
                            var9 = var5.bind(var7)(var4, var3);
 299:
                            var4 = _closure2_slot2;
                            var3 = _closure2_slot1;
                            var3 = !var3;
                            var3 = var4.bind(var2)(var3);
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var3 = 22;
                            var3 = var7[var3];
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.show;
                            var3 = {};
                            var3['title'] = var10;
                            var3['body'] = var9;
                            var10 = _closure1_slot0;
                            var8 = var7[var11];
                            var8 = var10.bind(var2)(var8);
                            var12 = var8.intl;
                            var9 = var12.string;
                            var8 = var7[var11];
                            var8 = var10.bind(var2)(var8);
                            var8 = var8.t;
                            var8 = var8.ETE/oK;
                            var8 = var9.bind(var12)(var8);
                            var3['cancelText'] = var8;
                            var8 = var7[var11];
                            var8 = var10.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var7[var11];
                            var7 = var10.bind(var2)(var7);
                            var7 = var7.t;
                            var7 = var7.p89ACg;
                            var7 = var8.bind(var9)(var7);
                            var3['confirmText'] = var7;
                            var6 = _closure2_slot6;
                            var3['onConfirm'] = var6;
                            var6 = false;
                            var3['hideActionSheet'] = var6;
                            var6 = function onCancel() {
                                var3 = _closure2_slot2;
                                var5 = _closure1_slot2;
                                var4 = _closure1_slot3;
                                var1 = 18;
                                var4 = var4[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var4);
                                var4 = var5.isPrivateGuildChannel;
                                var2 = _closure2_slot0;
                                var2 = var4.bind(var5)(var2);
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var3['onCancel'] = var6;
                            var3 = var4.bind(var5)(var3);
                            return var2;
 491:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var22 = var7.bind(var5)();
            var4 = var2[var4];
            var7 = var6.bind(var5)(var4);
            var4 = var7.isPrivateGuildChannel;
            var8 = var4.bind(var7)(var3);
            _closure2_slot7 = var8;
            var4 = 24;
            var7 = var2[var4];
            var14 = var6.bind(var5)(var7);
            var13 = var14.canEveryoneRole;
            var7 = _closure1_slot18;
            var7 = var7.VIEW_CHANNEL;
            var13 = var13.bind(var14)(var7, var11);
            var4 = var2[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.canEveryoneRole;
            var4 = _closure1_slot18;
            var4 = var4.ADMINISTRATOR;
            var7 = var6.bind(var7)(var4, var11);
            var3 = var3.type;
            var11 = _closure1_slot0;
            var16 = 21;
            var4 = var2[var16];
            var4 = var11.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var2[var16];
            var2 = var11.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.hfbjIC;
            var4 = var4.bind(var6)(var2);
            var2 = _closure1_slot17;
            var2 = var2.GUILD_CATEGORY;
            if(!(var3 !== var2)) { _fun0001_ip = 598; continue _fun0001 }
 527:
            var2 = _closure1_slot17;
            var2 = var2.GUILD_VOICE;
            var19 = var4;
            if(!(var3 === var2)) { _fun0001_ip = 650; continue _fun0001 }
 544:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var3 = var2[var16];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var16];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.cLjvKi;
            var19 = var3.bind(var4)(var2);
            _fun0001_ip = 650; continue _fun0001;
 598:
            var6 = _closure1_slot0;
            var2 = _closure1_slot3;
            var3 = var2[var16];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var16];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.RQUk6+;
            var19 = var3.bind(var4)(var2);
 650:
            var4 = _closure1_slot23;
            var20 = _closure1_slot0;
            var25 = _closure1_slot3;
            var2 = 25;
            var2 = var25[var2];
            var2 = var20.bind(var5)(var2);
            var3 = var2.Stack;
            var2 = {};
            var14 = {};
            var11 = _closure1_slot1;
            var6 = 15;
            var17 = var25[var6];
            var17 = var11.bind(var5)(var17);
            var17 = var17.spacing;
            var17 = var17.PX_16;
            var14['paddingHorizontal'] = var17;
            var2['style'] = var14;
            var6 = var25[var6];
            var6 = var11.bind(var5)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_16;
            var2['spacing'] = var6;
            var17 = _closure1_slot22;
            var11 = 26;
            var6 = var25[var11];
            var6 = var20.bind(var5)(var6);
            var14 = var6.TableRowGroup;
            var6 = {};
            var6['title'] = var19;
            var21 = _closure1_slot22;
            var19 = 27;
            var19 = var25[var19];
            var19 = var20.bind(var5)(var19);
            var20 = var19.TableSwitchRow;
            var19 = {};
            var28 = _closure1_slot0;
            var25 = _closure1_slot3;
            var26 = var25[var16];
            var26 = var28.bind(var5)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var16];
            var25 = var28.bind(var5)(var25);
            var25 = var25.t;
            if(var24) { _fun0001_ip = 850; continue _fun0001 }
 837:
            var24 = var25.aUI70t;
            var24 = var26.bind(var27)(var24);
            _fun0001_ip = 861; continue _fun0001;
 850:
            var25 = var25.lEPAZ2;
            var24 = var26.bind(var27)(var25);
 861:
            var19['label'] = var24;
            var19['value'] = var23;
            var19['onValueChange'] = var22;
            var19 = var21.bind(var5)(var20, var19);
            var6['children'] = var19;
            var14 = var17.bind(var5)(var14, var6);
            var6 = new Array(6);
            var6[0] = var14;
            var14 = var7;
            if(!var14) { _fun0001_ip = 1047; continue _fun0001 }
 907:
            var20 = _closure1_slot22;
            var19 = _closure1_slot7;
            var17 = {};
            var21 = var15.adminWarning;
            var17['style'] = var21;
            var23 = _closure1_slot22;
            var22 = _closure1_slot1;
            var24 = _closure1_slot3;
            var25 = 28;
            var21 = var24[var25];
            var22 = var22.bind(var5)(var21);
            var21 = {};
            var27 = _closure1_slot0;
            var25 = var24[var25];
            var25 = var27.bind(var5)(var25);
            var25 = var25.HelpMessageTypes;
            var25 = var25.WARNING;
            var21['messageType'] = var25;
            var25 = var24[var16];
            var25 = var27.bind(var5)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var24[var16];
            var24 = var27.bind(var5)(var24);
            var24 = var24.t;
            var24 = var24.5f3HIC;
            var24 = var25.bind(var26)(var24);
            var21['children'] = var24;
            var21 = var23.bind(var5)(var22, var21);
            var17['children'] = var21;
            var14 = var20.bind(var5)(var19, var17);
 1047:
            var6[1] = var14;
            var7 = !var7;
            if(!var7) { _fun0001_ip = 1060; continue _fun0001 }
 1057:
            var7 = !var13;
 1060:
            if(!var7) { _fun0001_ip = 1066; continue _fun0001 }
 1063:
            var7 = !var8;
 1066:
            if(!var7) { _fun0001_ip = 1214; continue _fun0001 }
 1072:
            var14 = _closure1_slot22;
            var13 = _closure1_slot7;
            var8 = {};
            var15 = var15.adminWarning;
            var8['style'] = var15;
            var19 = _closure1_slot22;
            var17 = _closure1_slot1;
            var20 = _closure1_slot3;
            var21 = 28;
            var15 = var20[var21];
            var17 = var17.bind(var5)(var15);
            var15 = {};
            var23 = _closure1_slot0;
            var21 = var20[var21];
            var21 = var23.bind(var5)(var21);
            var21 = var21.HelpMessageTypes;
            var21 = var21.WARNING;
            var15['messageType'] = var21;
            var21 = var20[var16];
            var21 = var23.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var16];
            var20 = var23.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.ZAk4Q0;
            var20 = var21.bind(var22)(var20);
            var15['children'] = var20;
            var15 = var19.bind(var5)(var17, var15);
            var8['children'] = var15;
            var7 = var14.bind(var5)(var13, var8);
 1214:
            var6[2] = var7;
            var15 = _closure1_slot22;
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var13 = var7[var11];
            var13 = var8.bind(var5)(var13);
            var14 = var13.TableRowGroup;
            var13 = {};
            var20 = _closure1_slot22;
            var17 = 29;
            var17 = var7[var17];
            var17 = var8.bind(var5)(var17);
            var19 = var17.TableRow;
            var17 = {};
            var21 = true;
            var17['arrow'] = var21;
            var23 = _closure1_slot22;
            var21 = 30;
            var21 = var7[var21];
            var21 = var8.bind(var5)(var21);
            var22 = var21.CirclePlusIcon;
            var21 = {};
            var21 = var23.bind(var5)(var22, var21);
            var17['icon'] = var21;
            var21 = var7[var16];
            var21 = var8.bind(var5)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var7[var16];
            var21 = var8.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.dMJ3Y2;
            var21 = var22.bind(var23)(var21);
            var17['label'] = var21;
            var21 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 53; continue _fun0006 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 31;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openAddMembersActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var17['onPress'] = var21;
            var17 = var20.bind(var5)(var19, var17);
            var13['children'] = var17;
            var13 = var15.bind(var5)(var14, var13);
            var6[3] = var13;
            var15 = _closure1_slot22;
            var13 = var7[var11];
            var13 = var8.bind(var5)(var13);
            var14 = var13.TableRowGroup;
            var13 = {};
            var17 = var7[var16];
            var17 = var8.bind(var5)(var17);
            var19 = var17.intl;
            var17 = var19.string;
            var16 = var7[var16];
            var16 = var8.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.ES4CCw;
            var16 = var17.bind(var19)(var16);
            var13['title'] = var16;
            var17 = var18.map;
            var16 = function(arg1) {
                var3 = _closure2_slot8;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var16 = var17.bind(var18)(var16);
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var6[4] = var13;
            var9 = _closure1_slot22;
            var7 = var7[var11];
            var7 = var8.bind(var5)(var7);
            var8 = var7.TableRowGroup;
            var7 = {};
            var11 = var12.map;
            var10 = function(arg1) {
                var3 = _closure2_slot8;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[5] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 1555:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function onBack() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot3;
        var1 = 22;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.close;
        var1 = var1.bind(var2)();
        var1 = false;
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var9 = 1;
    var4 = var6[var9];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var8 = 2;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SettingMode;
    var _closure1_slot16 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot17 = var7;
    var7 = var4.Permissions;
    var _closure1_slot18 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot19 = var7;
    var7 = var4.ChannelSettingsSections;
    var _closure1_slot20 = var7;
    var4 = var4.SettingsPaneTypes;
    var _closure1_slot21 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot22 = var7;
    var4 = var4.jsxs;
    var _closure1_slot23 = var4;
    var4 = {};
    var4['BASIC'] = var10;
    var7 = 'BASIC';
    var4[var10] = var7;
    var4['ADVANCED'] = var9;
    var7 = 'ADVANCED';
    var4[var9] = var7;
    var4['MODERATORS'] = var8;
    var7 = 'MODERATORS';
    var4[var8] = var7;
    var _closure1_slot24 = var4;
    var4 = 14;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'paddingTop': 16};
    var10 = 15;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {'marginTop': 16, 'flex': 1};
    var4['content'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9['marginTop'] = var10;
    var4['adminWarning'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot25 = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_permissions/native/components/EasyChannelPermissionSettings.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EasyChannelPermissionSettings(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var _closure2_slot0 = var3;
            var4 = var1.origin;
            var _closure2_slot1 = var4;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 32;
            var1 = var6[var1];
            var8 = var3.bind(var5)(var1);
            var7 = var8.useNavigatorBackPressHandler;
            var1 = _closure1_slot27;
            var1 = var7.bind(var8)(var1);
            var1 = _closure1_slot25;
            var10 = var1.bind(var5)();
            var1 = 17;
            var7 = var6[var1];
            var12 = var3.bind(var5)(var7);
            var9 = var12.useStateFromStores;
            var7 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var9.bind(var12)(var8, var7);
            var _closure2_slot2 = var16;
            var1 = var6[var1];
            var7 = var3.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot9;
                var1 = var1.advancedMode;
                return var1;
            };
            var3 = var6.bind(var7)(var3, var1);
            var7 = _closure1_slot6;
            var6 = var7.useState;
            var1 = null;
            if(!(var1 != var16)) { _fun0007_ip = 197; continue _fun0007 }
 184:
            var8 = var16.isGuildStageVoice;
            var8 = var8.bind(var16)();
            if(var8) { _fun0007_ip = 220; continue _fun0007 }
 197:
            var8 = _closure1_slot24;
            if(var3) { _fun0007_ip = 212; continue _fun0007 }
 204:
            var3 = var8.BASIC;
            _fun0007_ip = 218; continue _fun0007;
 212:
            var3 = var8.ADVANCED;
 218:
            _fun0007_ip = 230; continue _fun0007;
 220:
            var8 = _closure1_slot24;
            var3 = var8.MODERATORS;
 230:
            var3 = var6.bind(var7)(var3);
            var13 = _closure1_slot4;
            var9 = 2;
            var3 = var13.bind(var5)(var3, var9);
            var8 = 0;
            var12 = var3[var8];
            _closure2_slot3 = var12;
            var7 = 1;
            var3 = var3[var7];
            _closure2_slot4 = var3;
            var15 = _closure1_slot6;
            var14 = var15.useState;
            var17 = _closure1_slot2;
            var3 = _closure1_slot3;
            var6 = 18;
            var6 = var3[var6];
            var17 = var17.bind(var5)(var6);
            var6 = var17.isPrivateGuildChannel;
            var6 = var6.bind(var17)(var16);
            var6 = var14.bind(var15)(var6);
            var6 = var13.bind(var5)(var6, var9);
            var15 = var6[var8];
            var14 = var6[var7];
            _closure2_slot5 = var14;
            var9 = _closure1_slot6;
            var7 = var9.useEffect;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var9 = _closure2_slot1;
                    var1 = _closure1_slot20;
                    var8 = var1.OVERVIEW;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot19;
                    var3 = var2.SETTINGS_PANE_VIEWED;
                    var2 = {};
                    var7 = 'channel';
                    var2['settings_type'] = var7;
                    var7 = null;
                    if(!(var9 === var8)) { _fun0008_ip = 85; continue _fun0008 }
 75:
                    var8 = _closure1_slot21;
                    var7 = var8.CHANNEL_SETTINGS;
 85:
                    var2['origin_pane'] = var7;
                    var6 = _closure1_slot20;
                    var6 = var6.PERMISSIONS;
                    var2['destination_pane'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var4 = var7.bind(var9)(var4, var6);
            var9 = _closure1_slot6;
            var7 = var9.useCallback;
            var6 = new Array(1);
            var6[0] = var16;
            var4 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure1_slot24;
                    var2 = var2.ADVANCED;
                    if(!(var3 !== var2)) { _fun0009_ip = 100; continue _fun0009 }
 20:
                    var4 = _closure2_slot5;
                    var8 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var5 = 18;
                    var7 = var6[var5];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.isPrivateGuildChannel;
                    var2 = _closure2_slot2;
                    var2 = var7.bind(var8)(var2);
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure1_slot0;
                    var2 = 19;
                    var2 = var6[var2];
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.setAdvancedMode;
                    var2 = false;
                    var2 = var4.bind(var5)(var2);
                    _fun0009_ip = 135; continue _fun0009;
 100:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.setAdvancedMode;
                    var1 = true;
                    var1 = var2.bind(var4)(var1);
 135:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var4, var6);
            var13 = _closure1_slot0;
            var18 = 21;
            var4 = var3[var18];
            var4 = var13.bind(var5)(var4);
            var9 = var4.intl;
            var6 = var9.string;
            var4 = var3[var18];
            var4 = var13.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.Mw/UDA;
            var4 = var6.bind(var9)(var4);
            var9 = new Array(2);
            var9[0] = var4;
            var4 = var3[var18];
            var4 = var13.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var3 = var3[var18];
            var3 = var13.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.0a6awc;
            var3 = var4.bind(var6)(var3);
            var9[1] = var3;
            var3 = var1 == var16;
            var4 = undefined;
            if(var3) { _fun0007_ip = 522; continue _fun0007 }
 512:
            var3 = var16.isGuildStageVoice;
            var4 = var3.bind(var16)();
 522:
            var3 = true;
            if(!(var3 === var4)) { _fun0007_ip = 592; continue _fun0007 }
 528:
            var4 = var9.push;
            var17 = _closure1_slot0;
            var3 = _closure1_slot3;
            var6 = var3[var18];
            var6 = var17.bind(var5)(var6);
            var13 = var6.intl;
            var6 = var13.string;
            var3 = var3[var18];
            var3 = var17.bind(var5)(var3);
            var3 = var3.t;
            var3 = var3.YIIUJy;
            var3 = var6.bind(var13)(var3);
            var3 = var4.bind(var9)(var3);
 592:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 34;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.useSegmentedControlState;
            var3 = {};
            var3['pageWidth'] = var8;
            var3['defaultIndex'] = var12;
            var3['onSetActiveIndex'] = var7;
            var8 = var9.map;
            var7 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['id'] = var2;
                var1['label'] = var2;
                var2 = null;
                var1['page'] = var2;
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var3['items'] = var7;
            var18 = var4.bind(var6)(var3);
            var6 = _closure1_slot6;
            var4 = var6.useEffect;
            var3 = new Array(2);
            var3[0] = var16;
            var3[1] = var12;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 33;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot19;
                    var3 = var2.CHANNEL_PERMISSIONS_PAGE_VIEWED;
                    var2 = {};
                    var9 = _closure2_slot3;
                    var8 = _closure1_slot24;
                    var8 = var8.BASIC;
                    if(!(var9 !== var8)) { _fun0010_ip = 76; continue _fun0010 }
 64:
                    var8 = _closure1_slot16;
                    var8 = var8.ADVANCED;
                    _fun0010_ip = 86; continue _fun0010;
 76:
                    var9 = _closure1_slot16;
                    var8 = var9.BASIC;
 86:
                    var2['mode'] = var8;
                    var8 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var7 = 18;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.isPrivateGuildChannel;
                    var6 = _closure2_slot2;
                    var6 = var7.bind(var8)(var6);
                    var2['channel_is_private'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var2, var3);
            var2 = var1 != var16;
            var1 = null;
            if(!var2) { _fun0007_ip = 1016; continue _fun0007 }
 708:
            var4 = _closure1_slot23;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var10.container;
            var2['style'] = var6;
            var8 = _closure1_slot22;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = {};
            var17 = _closure1_slot1;
            var19 = _closure1_slot3;
            var13 = 15;
            var13 = var19[var13];
            var13 = var17.bind(var5)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_12;
            var9['paddingHorizontal'] = var13;
            var6['style'] = var9;
            var17 = _closure1_slot22;
            var13 = _closure1_slot0;
            var9 = 35;
            var9 = var19[var9];
            var9 = var13.bind(var5)(var9);
            var13 = var9.SegmentedControl;
            var9 = {};
            var9['state'] = var18;
            var9 = var17.bind(var5)(var13, var9);
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot22;
            var8 = _closure1_slot8;
            var7 = {};
            var10 = var10.content;
            var7['style'] = var10;
            var10 = _closure1_slot24;
            var10 = var10.BASIC;
            if(!(var12 !== var10)) { _fun0007_ip = 962; continue _fun0007 }
 867:
            var10 = _closure1_slot24;
            var10 = var10.MODERATORS;
            if(!(var12 !== var10)) { _fun0007_ip = 924; continue _fun0007 }
 881:
            var13 = _closure1_slot22;
            var12 = _closure1_slot1;
            var17 = _closure1_slot3;
            var10 = 37;
            var10 = var17[var10];
            var12 = var12.bind(var5)(var10);
            var10 = {};
            var17 = var16.id;
            var10['channelId'] = var17;
            var10 = var13.bind(var5)(var12, var10);
            _fun0007_ip = 960; continue _fun0007;
 924:
            var17 = _closure1_slot22;
            var13 = _closure1_slot1;
            var18 = _closure1_slot3;
            var12 = 36;
            var12 = var18[var12];
            var13 = var13.bind(var5)(var12);
            var12 = {};
            var12['channel'] = var16;
            var10 = var17.bind(var5)(var13, var12);
 960:
            _fun0007_ip = 992; continue _fun0007;
 962:
            var13 = _closure1_slot22;
            var12 = _closure1_slot26;
            var11 = {};
            var11['channel'] = var16;
            var11['privateToggleState'] = var15;
            var11['setPrivateToggleState'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 992:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1016:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
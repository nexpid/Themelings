// app/modules/stage_channels/native/channel_permissions/ViewModerators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var7;
    var2 = function openAddModeratorsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var7 = arguments[1];
            var1 = undefined;
            if(!(var7 === var1)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var7 = false;
 14:
            var5 = _closure1_slot1;
            var2 = _closure1_slot3;
            var4 = 8;
            var4 = var2[var4];
            var10 = var5.bind(var1)(var4);
            var9 = var10.track;
            var4 = _closure1_slot8;
            var6 = var4.OPEN_POPOUT;
            var4 = {};
            var11 = 'Grant Channel Access';
            var4['type'] = var11;
            var4 = var9.bind(var10)(var6, var4);
            var4 = 9;
            var4 = var2[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var4 = _closure1_slot0;
            var3 = 11;
            var3 = var2[var3];
            var4 = var4.bind(var1)(var3);
            var3 = 10;
            var3 = var2[var3];
            var2 = var2.paths;
            var4 = var4.bind(var1)(var3, var2);
            var9 = var8.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'channel-add-moderators-';
            var3 = var3.bind(var2)(var9);
            var2 = {};
            var2['channel'] = var8;
            var2['canSkip'] = var7;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.RowType;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stage_channels/native/channel_permissions/ViewModerators.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ViewModerators(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var6 = undefined;
            var _closure2_slot2 = var6;
            var _closure2_slot3 = var6;
            var1 = function renderRowItem(arg1) {
                var1 = arg1;
                var5 = _closure1_slot10;
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 24;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var7 = _closure2_slot0;
                var8 = var7.guild_id;
                var2['guildId'] = var8;
                var2['item'] = var1;
                var7 = var7.id;
                var2['channelId'] = var7;
                var7 = true;
                var2['showType'] = var7;
                var7 = _closure2_slot2;
                var2['showRemove'] = var7;
                var6 = _closure2_slot3;
                var2['onRemove'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var _closure2_slot4 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 12;
            var1 = var3[var1];
            var4 = var2.bind(var6)(var1);
            var1 = var4.useNavigation;
            var5 = var1.bind(var4)();
            var4 = var5.setOptions;
            var1 = {};
            var8 = function headerRight() {
                var1 = null;
                return var1;
            };
            var1['headerRight'] = var8;
            var1 = var4.bind(var5)(var1);
            var1 = var12.getGuildId;
            var1 = var1.bind(var12)();
            var _closure2_slot1 = var1;
            var4 = 13;
            var4 = var3[var4];
            var9 = var2.bind(var6)(var4);
            var8 = var9.useStateFromStoresObject;
            var4 = _closure1_slot7;
            var5 = new Array(2);
            var5[0] = var4;
            var4 = _closure1_slot6;
            var5[1] = var4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = {};
                    var6 = _closure1_slot7;
                    var2 = var6.getGuild;
                    var5 = _closure2_slot1;
                    var2 = var2.bind(var6)(var5);
                    var1['guild'] = var2;
                    var2 = null;
                    var5 = var2 != var5;
                    var2 = undefined;
                    if(!var5) { _fun0003_ip = 60; continue _fun0003 }
 41:
                    var5 = _closure1_slot6;
                    var4 = var5.getSortedRoles;
                    var3 = _closure2_slot1;
                    var2 = var4.bind(var5)(var3);
 60:
                    var1['sortedGuildRoles'] = var2;
                    return var1;
                }
            };
            var1 = var8.bind(var9)(var5, var1, var4);
            var10 = var1.guild;
            var9 = var1.sortedGuildRoles;
            var1 = 14;
            var1 = var3[var1];
            var3 = var2.bind(var6)(var1);
            var2 = var3.useCanUpdateStageChannelModerators;
            var1 = var12.id;
            var18 = var2.bind(var3)(var1);
            _closure2_slot2 = var18;
            var1 = null;
            if(!(var1 != var10)) { _fun0002_ip = 864; continue _fun0002 }
 219:
            if(!(var1 != var9)) { _fun0002_ip = 864; continue _fun0002 }
 226:
            var2 = var12.isGuildStageVoice;
            var2 = var2.bind(var12)();
            var5 = _closure1_slot5;
            var4 = var5.getMemberIds;
            var8 = var1 == var10;
            var3 = undefined;
            if(var8) { _fun0002_ip = 260; continue _fun0002 }
 255:
            var3 = var10.id;
 260:
            var17 = var4.bind(var5)(var3);
            var5 = _closure1_slot2;
            var3 = _closure1_slot3;
            var4 = 15;
            var8 = var3[var4];
            var16 = var5.bind(var6)(var8);
            var15 = var16.getExistingMembersRows;
            var14 = _closure1_slot0;
            var8 = 16;
            var13 = var3[var8];
            var13 = var14.bind(var6)(var13);
            var23 = var13.MODERATE_STAGE_CHANNEL_PERMISSIONS;
            var27 = var16;
            var26 = var17;
            var25 = var12;
            var24 = var10;
            var13 = var27[var15](var26, var25, var24, var23, var22);
            var4 = var3[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.getExistingRolesRowWithPermissionDisabled;
            var3 = var3[var8];
            var3 = var14.bind(var6)(var3);
            var23 = var3.MODERATE_STAGE_CHANNEL_PERMISSIONS;
            var27 = var5;
            var26 = var10;
            var25 = var9;
            var24 = var12;
            var19 = var27[var4](var26, var25, var24, var23, var22);
            var3 = function handleRemovePermission(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var14 = arg1;
                    var _closure3_slot0 = var14;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.removeModeratorOverwrite;
                    var4 = var14.id;
                    var3 = var14.rowType;
                    var2 = _closure1_slot9;
                    var2 = var2.ROLE;
                    if(!(var3 !== var2)) { _fun0004_ip = 99; continue _fun0004 }
 65:
                    var3 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 17;
                    var2 = var9[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.PermissionOverwriteType;
                    var3 = var2.MEMBER;
                    _fun0004_ip = 131; continue _fun0004;
 99:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var2 = 17;
                    var2 = var10[var2];
                    var2 = var9.bind(var1)(var2);
                    var2 = var2.PermissionOverwriteType;
                    var3 = var2.ROLE;
 131:
                    var2 = _closure2_slot0;
                    var2 = var6.bind(var7)(var4, var3, var2);
                    var _closure3_slot2 = var2;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 18;
                    var2 = var7[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var6 = _closure1_slot0;
                    var9 = 19;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var12 = var10.intl;
                    var11 = var12.string;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.GuPYQE;
                    var10 = var11.bind(var12)(var10);
                    var2['title'] = var10;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var13 = var10.intl;
                    var12 = var13.format;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var10 = var10.t;
                    var11 = var10.xERCnZ;
                    var10 = {};
                    var14 = var14.name;
                    var10['name'] = var14;
                    var10 = var12.bind(var13)(var11, var10);
                    var2['body'] = var10;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var12 = var10.intl;
                    var11 = var12.string;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.ETE/oK;
                    var10 = var11.bind(var12)(var10);
                    var2['cancelText'] = var10;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var7[var9];
                    var9 = var6.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9.fKxYb2;
                    var9 = var10.bind(var11)(var9);
                    var2['confirmText'] = var9;
                    var9 = _closure1_slot4;
                    var8 = function* () {
                        var1 = function* anon_0_() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0005_ip = 260; continue _fun0005 }
 10:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 14;
                                var2 = var3[var2];
                                var3 = undefined;
                                var7 = var5.bind(var3)(var2);
                                var6 = var7.isEmptyOverwrite;
                                var2 = _closure3_slot2;
                                var2 = var6.bind(var7)(var2);
                                if(var2) { _fun0005_ip = 125; continue _fun0005 }
 56:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var2 = 21;
                                var2 = var7[var2];
                                var8 = var6.bind(var3)(var2);
                                var7 = var8.savePermissionUpdates;
                                var2 = _closure2_slot0;
                                var6 = var2.id;
                                var9 = _closure3_slot2;
                                var2 = new Array(1);
                                var2[0] = var9;
                                var2 = var7.bind(var8)(var6, var2);
                                SaveGenerator(address=116);
 114:
                                return var2;
 116:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(!var6) { _fun0005_ip = 188; continue _fun0005 }
 122:
                                return var2;
 125:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var2 = 20;
                                var2 = var7[var2];
                                var8 = var6.bind(var3)(var2);
                                var7 = var8.clearPermissionOverwrite;
                                var2 = _closure2_slot0;
                                var6 = var2.id;
                                var2 = _closure3_slot2;
                                var2 = var2.id;
                                var2 = var7.bind(var8)(var6, var2);
                                SaveGenerator(address=182);
 180:
                                return var2;
 182:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0005_ip = 257; continue _fun0005 }
 188:
                                var8 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var7 = 22;
                                var7 = var6[var7];
                                var8 = var8.bind(var3)(var7);
                                var7 = var8.memberOrRoleRemovedToast;
                                var5 = _closure3_slot0;
                                var5 = var5.name;
                                var5 = var7.bind(var8)(var5);
                                var5 = _closure1_slot1;
                                var4 = 9;
                                var4 = var6[var4];
                                var5 = var5.bind(var3)(var4);
                                var4 = var5.hideActionSheet;
                                var4 = var4.bind(var5)();
                                return var3;
 257:
                                return var2;
 260:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var8 = var9.bind(var1)(var8);
                    var _closure3_slot1 = var8;
                    var5 = function() {
                        var1 = undefined;
                        var4 = _closure3_slot1;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var5 = false;
                    var2['hideActionSheet'] = var5;
                    var5 = 23;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.ButtonColors;
                    var5 = var5.RED;
                    var2['confirmColor'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            _closure2_slot3 = var3;
            if(!var2) { _fun0002_ip = 862; continue _fun0002 }
 392:
            var5 = _closure1_slot11;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var3 = 25;
            var3 = var17[var3];
            var3 = var16.bind(var6)(var3);
            var4 = var3.Stack;
            var3 = {};
            var9 = {};
            var9['paddingHorizontal'] = var8;
            var3['style'] = var9;
            var3['spacing'] = var8;
            var10 = _closure1_slot10;
            var8 = 26;
            var7 = var17[var8];
            var7 = var16.bind(var6)(var7);
            var9 = var7.TableRowGroup;
            var7 = {};
            var12 = 19;
            var14 = var17[var12];
            var14 = var16.bind(var6)(var14);
            var20 = var14.intl;
            var15 = var20.string;
            var14 = var17[var12];
            var14 = var16.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.f7VbhI;
            var14 = var15.bind(var20)(var14);
            var7['title'] = var14;
            var14 = 27;
            var14 = var17[var14];
            var14 = var16.bind(var6)(var14);
            var15 = var14.TableRow;
            var14 = {};
            var20 = 28;
            var20 = var17[var20];
            var20 = var16.bind(var6)(var20);
            var21 = var20.CirclePlusIcon;
            var20 = {};
            var20 = var10.bind(var6)(var21, var20);
            var14['icon'] = var20;
            var20 = var17[var12];
            var20 = var16.bind(var6)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var17[var12];
            var20 = var16.bind(var6)(var20);
            var20 = var20.t;
            var20 = var20.n3bcy8;
            var20 = var21.bind(var22)(var20);
            var14['label'] = var20;
            var20 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 31; continue _fun0006 }
 13:
                    var3 = _closure1_slot12;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var14['onPress'] = var20;
            var18 = !var18;
            var14['disabled'] = var18;
            var18 = true;
            var14['arrow'] = var18;
            var14 = var10.bind(var6)(var15, var14);
            var7['children'] = var14;
            var9 = var10.bind(var6)(var9, var7);
            var7 = new Array(3);
            var7[0] = var9;
            var9 = var17[var8];
            var9 = var16.bind(var6)(var9);
            var14 = var9.TableRowGroup;
            var9 = {};
            var15 = var17[var12];
            var15 = var16.bind(var6)(var15);
            var20 = var15.intl;
            var18 = var20.string;
            var15 = var17[var12];
            var15 = var16.bind(var6)(var15);
            var15 = var15.t;
            var15 = var15.ghdVJC;
            var15 = var18.bind(var20)(var15);
            var9['title'] = var15;
            var18 = var19.map;
            var15 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var15 = var18.bind(var19)(var15);
            var9['children'] = var15;
            var9 = var10.bind(var6)(var14, var9);
            var7[1] = var9;
            var8 = var17[var8];
            var8 = var16.bind(var6)(var8);
            var9 = var8.TableRowGroup;
            var8 = {};
            var14 = var17[var12];
            var14 = var16.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var12 = var17[var12];
            var12 = var16.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12.ghdVJC;
            var12 = var14.bind(var15)(var12);
            var8['title'] = var12;
            var12 = var13.map;
            var11 = function(arg1) {
                var3 = _closure2_slot4;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var11 = var12.bind(var13)(var11);
            var8['children'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[2] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 862:
            return var2;
 864:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['openAddModeratorsActionSheet'] = var2;
    return var1;
})();
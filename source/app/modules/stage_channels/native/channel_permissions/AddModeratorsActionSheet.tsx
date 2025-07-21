// app/modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RowType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 8;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOBILE_SECONDARY;
    var9['backgroundColor'] = var11;
    var9['flex'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddModeratorsActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.channel;
            var _closure2_slot0 = var16;
            var8 = var1.canSkip;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var1 = function _handleAddModeratorsPressed() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 215; continue _fun0002 }
 12:
                            var2 = undefined;
                            var3 = undefined;
                            var4 = 0;
                            var _closure5_slot0 = var4;
                            var _closure5_slot1 = var4;
                            var4 = global;
                            var8 = var4.Object;
                            var7 = var8.values;
                            var4 = _closure2_slot1;
                            var8 = var7.bind(var8)(var4);
                            var7 = var8.filter;
                            var4 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.row;
                                var2 = var1.id;
                                var1 = null;
                                var1 = var1 != var2;
                                return var1;
                            };
                            var8 = var7.bind(var8)(var4);
                            var7 = var8.map;
                            var4 = function(arg1) {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                    var1 = arg1;
                                    var2 = var1.row;
                                    var4 = var2.rowType;
                                    var1 = _closure1_slot8;
                                    var1 = var1.ROLE;
                                    if(!(var4 !== var1)) { _fun0003_ip = 119; continue _fun0003 }
 32:
                                    var1 = _closure5_slot0;
                                    var1 = var1 + 1;
                                    _closure5_slot0 = var1;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var1 = 11;
                                    var1 = var9[var1];
                                    var4 = undefined;
                                    var7 = var8.bind(var4)(var1);
                                    var6 = var7.createModeratorOverwrite;
                                    var5 = var2.id;
                                    var1 = 12;
                                    var1 = var9[var1];
                                    var1 = var8.bind(var4)(var1);
                                    var1 = var1.PermissionOverwriteType;
                                    var4 = var1.MEMBER;
                                    var1 = _closure2_slot0;
                                    var1 = var6.bind(var7)(var5, var4, var1);
                                    _fun0003_ip = 204; continue _fun0003;
 119:
                                    var4 = _closure5_slot1;
                                    var4 = var4 + 1;
                                    _closure5_slot1 = var4;
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var3 = 11;
                                    var4 = var8[var3];
                                    var3 = undefined;
                                    var6 = var7.bind(var3)(var4);
                                    var5 = var6.createModeratorOverwrite;
                                    var4 = var2.id;
                                    var2 = 12;
                                    var2 = var8[var2];
                                    var2 = var7.bind(var3)(var2);
                                    var2 = var2.PermissionOverwriteType;
                                    var3 = var2.ROLE;
                                    var2 = _closure2_slot0;
                                    var1 = var5.bind(var6)(var4, var3, var2);
 204:
                                    return var1;
                                }
                            };
                            var3 = var7.bind(var8)(var4);
 85: // try_start_0
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 13;
                            var7 = var9[var7];
                            var8 = var8.bind(var2)(var7);
                            var7 = var8.savePermissionUpdates;
                            var6 = _closure2_slot0;
                            var6 = var6.id;
                            var3 = var7.bind(var8)(var6, var3);
                            SaveGenerator(address=133);
 131:
                            return var3;
 133:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0002_ip = 207; continue _fun0002 }
 139:
                            var8 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var7 = 14;
                            var7 = var6[var7];
                            var9 = var8.bind(var2)(var7);
                            var8 = var9.memberOrRoleAddedToast;
                            var7 = _closure5_slot1;
                            var5 = _closure5_slot0;
                            var5 = var8.bind(var9)(var7, var5);
                            var5 = _closure1_slot1;
                            var4 = 15;
                            var4 = var6[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.hideActionSheet;
                            var4 = var4.bind(var5)();
 205: // try_end0
                            _fun0002_ip = 212; continue _fun0002;
 207:
                            return var3;
 210: // catch_target0
                            CatchBlockStart(arg_register=2);
 212:
                            return var2;
 215:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot2 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot2 = var1;
            var1 = _closure1_slot10;
            var9 = var1.bind(var5)();
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var1 = {};
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var5)(var3, var1);
            var3 = 0;
            var12 = var2[var3];
            _closure2_slot1 = var12;
            var1 = 1;
            var11 = var2[var1];
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var7 = var2.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 44; continue _fun0004 }
 30:
                    var5 = _closure2_slot0;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
 44:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var14 = var6.bind(var7)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var17 = true;
            var2 = var1.bind(var5)(var16, var17);
            var1 = null;
            var4 = var1 != var2;
            var10 = '';
            if(!var4) { _fun0001_ip = 184; continue _fun0001 }
 181:
            var10 = var2;
 184:
            if(!(var1 != var14)) { _fun0001_ip = 663; continue _fun0001 }
 191:
            var2 = global;
            var4 = var2.Object;
            var2 = var4.keys;
            var2 = var2.bind(var4)(var12);
            var2 = var2.length;
            var15 = var3 === var2;
            var4 = _closure1_slot9;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var2 = 16;
            var2 = var20[var2];
            var2 = var19.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {'scrollable': true, 'header': null, 'startExpanded': true};
            var6 = 17;
            var6 = var20[var6];
            var6 = var19.bind(var5)(var6);
            var7 = var6.BottomSheetTitleHeader;
            var6 = {};
            var23 = 18;
            var21 = var20[var23];
            var21 = var19.bind(var5)(var21);
            var24 = var21.intl;
            var22 = var24.string;
            var21 = var20[var23];
            var21 = var19.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.n3bcy8;
            var21 = var22.bind(var24)(var21);
            var6['title'] = var21;
            var6['subtitle'] = var10;
            var10 = 19;
            var10 = var20[var10];
            var10 = var19.bind(var5)(var10);
            var10 = var10.Button;
            if(!var8) { _fun0001_ip = 358; continue _fun0001 }
 355:
            if(var15) { _fun0001_ip = 441; continue _fun0001 }
 358:
            var8 = {};
            var19 = 'sm';
            var8['size'] = var19;
            var8['disabled'] = var15;
            var21 = _closure1_slot0;
            var15 = _closure1_slot2;
            var19 = var15[var23];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var15 = var15[var23];
            var15 = var21.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.OYkgVl;
            var15 = var19.bind(var20)(var15);
            var8['text'] = var15;
            var15 = function handleAddModeratorsPressed() {
                var1 = undefined;
                var4 = _closure2_slot2;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var8['onPress'] = var15;
            _fun0001_ip = 521; continue _fun0001;
 441:
            var15 = {};
            var19 = 'sm';
            var15['size'] = var19;
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var20 = var19[var23];
            var20 = var22.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var23];
            var19 = var22.bind(var5)(var19);
            var19 = var19.t;
            var19 = var19.5WxrcX;
            var19 = var20.bind(var21)(var19);
            var15['text'] = var19;
            var18 = function handleSkip() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var15['onPress'] = var18;
            var8 = var15;
 521:
            var8 = var4.bind(var5)(var10, var8);
            var6['trailing'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['header'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.container;
            var6['style'] = var9;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 20;
            var9 = var15[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var9['inActionSheet'] = var17;
            var9['channel'] = var16;
            var9['guild'] = var14;
            var14 = _closure1_slot0;
            var13 = 21;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.MODERATE_STAGE_CHANNEL_PERMISSIONS;
            var9['permission'] = var13;
            var9['pendingAdditions'] = var12;
            var9['setPendingAdditions'] = var11;
            var9 = var8.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 663:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
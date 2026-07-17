// app/modules/channel_permissions/native/components/ChannelOverwritesItem.tsx
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
    var1 = function RemoveIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.item;
            var _closure2_slot0 = var9;
            var2 = var1.channelId;
            var _closure2_slot1 = var2;
            var1 = var1.onRemove;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot9;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot7;
            var7 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 10;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var12 = var9.disabled;
            var2['disabled'] = var12;
            var12 = 'button';
            var2['accessibilityRole'] = var12;
            var12 = 7;
            var13 = var11[var12];
            var13 = var7.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var11[var12];
            var12 = var7.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.N86XcP;
            var12 = var13.bind(var14)(var12);
            var2['accessibilityLabel'] = var12;
            var8 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot0;
                    var6 = var2.id;
                    var5 = var2.name;
                    var4 = _closure2_slot1;
                    var3 = function removeMemberOrRole(arg1, arg2, arg3) {
                        var8 = arg1;
                        var13 = arg2;
                        var _closure4_slot0 = var8;
                        var _closure4_slot1 = var13;
                        var1 = arg3;
                        var _closure4_slot2 = var1;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var1 = 6;
                        var2 = var10[var1];
                        var1 = undefined;
                        var4 = var9.bind(var1)(var2);
                        var3 = var4.showConfirmModal;
                        var2 = {};
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var7 = var6.concat;
                        var6 = 'remove-channel-overwrite-';
                        var6 = var7.bind(var6)(var8);
                        var2['key'] = var6;
                        var6 = 7;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var11 = var7.intl;
                        var8 = var11.string;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.GuPYQB;
                        var7 = var8.bind(var11)(var7);
                        var2['title'] = var7;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var12 = var7.intl;
                        var11 = var12.format;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var7 = var7.t;
                        var8 = var7.xERCnZ;
                        var7 = {};
                        var7['name'] = var13;
                        var7 = var11.bind(var12)(var8, var7);
                        var2['content'] = var7;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.fKxYb0;
                        var6 = var7.bind(var8)(var6);
                        var2['confirmText'] = var6;
                        var5 = function onConfirm() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.clearPermissionOverwrite;
                            var3 = _closure4_slot2;
                            var2 = _closure4_slot0;
                            var4 = var4.bind(var5)(var3, var2);
                            var3 = var4.then;
                            var2 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 9;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.memberOrRoleRemovedToast;
                                var2 = _closure4_slot1;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var2['onConfirm'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = undefined;
                    var3 = var3.bind(var2)(var6, var5, var4);
                    return var2;
case 4:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2['onPress'] = var8;
            var8 = _closure1_slot7;
            var6 = 11;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.CircleXIcon;
            var6 = {};
            var11 = var9.disabled;
            var9 = undefined;
            if(!var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var10.rowRemoveIconDisabled;
case 6:
            var6['style'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function RoleItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var8 = var1.disabled;
            var15 = var1.item;
            var17 = var1.subLabel;
            var14 = var1.channelId;
            var18 = var1.showType;
            var12 = var1.showRemove;
            var16 = var1.start;
            var13 = var1.end;
            var10 = var1.trailing;
            var9 = var1.onPress;
            var7 = var1.accessibilityRole;
            var6 = var1.accessibilityState;
            var5 = var1.accessible;
            var4 = _closure1_slot7;
            var20 = _closure1_slot0;
            var22 = _closure1_slot3;
            var1 = 12;
            var1 = var22[var1];
            var3 = undefined;
            var1 = var20.bind(var3)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var21 = _closure1_slot7;
            var19 = 13;
            var19 = var22[var19];
            var19 = var20.bind(var3)(var19);
            var20 = var19.ShieldUserIcon;
            var19 = {};
            var22 = 'lg';
            var19['size'] = var22;
            var22 = var15.colorString;
            var19['color'] = var22;
            var19 = var21.bind(var3)(var20, var19);
            var1['icon'] = var19;
            var19 = var15.name;
            var1['label'] = var19;
            if(!var18) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var19 = _closure1_slot2;
            var20 = _closure1_slot3;
            var18 = 14;
            var18 = var20[var18];
            var20 = var19.bind(var3)(var18);
            var19 = var20.getRowTypeLabel;
            var18 = var15.rowType;
            var17 = var19.bind(var20)(var18);
case 8:
            var1['subLabel'] = var17;
            var1['start'] = var16;
            var1['end'] = var13;
            if(!var12) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var13 = _closure1_slot7;
            var12 = _closure1_slot10;
            var11 = {};
            var11['item'] = var15;
            var11['channelId'] = var14;
            var10 = var13.bind(var3)(var12, var11);
case 10:
            var1['trailing'] = var10;
            var1['onPress'] = var9;
            var1['disabled'] = var8;
            var1['accessibilityRole'] = var7;
            var1['accessibilityState'] = var6;
            var1['accessible'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function MemberItem(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var16 = var1.item;
            var15 = var1.channelId;
            var12 = var1.showRemove;
            var14 = var1.onRemove;
            var26 = var1.guildId;
            var17 = var1.start;
            var13 = var1.end;
            var10 = var1.trailing;
            var9 = var1.onPress;
            var8 = var1.disabled;
            var7 = var1.accessibilityRole;
            var6 = var1.accessibilityState;
            var5 = var1.accessible;
            var1 = _closure1_slot9;
            var4 = undefined;
            var24 = var1.bind(var4)();
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var18 = var24.nameWrapper;
            var1['style'] = var18;
            var20 = _closure1_slot7;
            var19 = _closure1_slot0;
            var21 = _closure1_slot3;
            var18 = 15;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'style': null, 'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'interactive-text-active'};
            var22 = var24.name;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = var24.memberName;
            var21[1] = var22;
            var18['style'] = var21;
            var21 = var16.name;
            var18['children'] = var21;
            var19 = var20.bind(var4)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var21 = var16.rowType;
            var19 = _closure1_slot6;
            var20 = var19.OWNER;
            var22 = null;
            var19 = null;
            if(!(var21 === var20)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var23 = _closure1_slot7;
            var27 = _closure1_slot0;
            var28 = _closure1_slot3;
            var25 = 16;
            var20 = var28[var25];
            var20 = var27.bind(var4)(var20);
            var21 = var20.Icon;
            var20 = {};
            var25 = var28[var25];
            var25 = var27.bind(var4)(var25);
            var25 = var25.Icon;
            var25 = var25.Sizes;
            var25 = var25.REFRESH_SMALL_16;
            var20['size'] = var25;
            var27 = _closure1_slot1;
            var25 = 17;
            var25 = var28[var25];
            var25 = var27.bind(var4)(var25);
            var20['source'] = var25;
            var25 = true;
            var20['disableColor'] = var25;
            var24 = var24.ownerIcon;
            var20['style'] = var24;
            var19 = var23.bind(var4)(var21, var20);
case 12:
            var18[1] = var19;
            var1['children'] = var18;
            var18 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot7;
            var20 = _closure1_slot0;
            var19 = _closure1_slot3;
            var1 = 12;
            var1 = var19[var1];
            var1 = var20.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var21 = _closure1_slot7;
            var24 = 16;
            var19 = var19[var24];
            var19 = var20.bind(var4)(var19);
            var20 = var19.Avatar;
            var19 = {};
            var27 = _closure1_slot5;
            var25 = var27.getUser;
            var23 = var16.id;
            var25 = var25.bind(var27)(var23);
            var23 = var22 == var25;
            var22 = undefined;
            if(var23) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var23 = var25.getAvatarSource;
            var22 = var23.bind(var25)(var26);
case 14:
            var19['source'] = var22;
            var23 = _closure1_slot0;
            var22 = _closure1_slot3;
            var22 = var22[var24];
            var22 = var23.bind(var4)(var22);
            var22 = var22.AvatarSizes;
            var22 = var22.SMALL;
            var19['size'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var1['icon'] = var19;
            var1['label'] = var18;
            var18 = var16.username;
            var1['subLabel'] = var18;
            var1['start'] = var17;
            var1['end'] = var13;
            if(!var12) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var13 = _closure1_slot7;
            var12 = _closure1_slot10;
            var11 = {};
            var11['item'] = var16;
            var11['channelId'] = var15;
            var11['onRemove'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 16:
            var1['trailing'] = var10;
            var1['onPress'] = var9;
            var1['disabled'] = var8;
            var1['accessibilityRole'] = var7;
            var1['accessibilityState'] = var6;
            var1['accessible'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function EmptyRoleItem(arg1) {
        var1 = arg1;
        var5 = var1.item;
        var1 = _closure1_slot9;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var11 = _closure1_slot0;
        var12 = _closure1_slot3;
        var1 = 12;
        var1 = var12[var1];
        var1 = var11.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var8 = _closure1_slot7;
        var10 = 16;
        var6 = var12[var10];
        var6 = var11.bind(var4)(var6);
        var7 = var6.Icon;
        var6 = {};
        var14 = _closure1_slot1;
        var13 = 18;
        var13 = var12[var13];
        var13 = var14.bind(var4)(var13);
        var6['source'] = var13;
        var13 = var5.colorString;
        var6['color'] = var13;
        var10 = var12[var10];
        var10 = var11.bind(var4)(var10);
        var10 = var10.IconSizes;
        var10 = var10.MEDIUM;
        var6['size'] = var10;
        var9 = var9.roleIcon;
        var6['style'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var1['icon'] = var6;
        var5 = var5.name;
        var1['label'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var4 = function ChannelOverwritesItem(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var5 = var4.item;
            var3 = null;
            var2 = Object.create(var3);
            var1 = 0;
            var2['item'] = var1;
            var10 = {};
            var9 = var4;
            var8 = var2;
            var1 = copyDataProperties(var10, var9, var8);
            var6 = var5.rowType;
            var4 = _closure1_slot6;
            var4 = var4.ADMINISTRATOR;
            if(!(var4 !== var6)) { _fun0005_ip = 18; continue _fun0005 }
case 3:
            var4 = _closure1_slot6;
            var4 = var4.ROLE;
            if(!(var4 !== var6)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var4 = _closure1_slot6;
            var4 = var4.OWNER;
            if(!(var4 !== var6)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var4 = _closure1_slot6;
            var4 = var4.MEMBER;
            if(!(var4 !== var6)) { _fun0005_ip = 20; continue _fun0005 }
case 22:
            var4 = _closure1_slot6;
            var4 = var4.EMPTY_STATE;
            if(!(var4 !== var6)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
            return var3;
case 23:
            var7 = _closure1_slot7;
            var6 = _closure1_slot13;
            var4 = {};
            var4['item'] = var5;
            var10 = var4;
            var9 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var4);
            return var3;
case 20:
            var7 = _closure1_slot7;
            var6 = _closure1_slot12;
            var4 = {};
            var4['item'] = var5;
            var10 = var4;
            var9 = var1;
            var3 = copyDataProperties(var10, var9);
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var4);
            return var3;
case 18:
            var4 = _closure1_slot7;
            var3 = _closure1_slot11;
            var2 = {};
            var2['item'] = var5;
            var10 = var2;
            var9 = var1;
            var1 = copyDataProperties(var10, var9);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot14 = var4;
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
    var5 = var9.bind(var1)(var5);
    var11 = 1;
    var5 = var7[var11];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.RowType;
    var _closure1_slot6 = var5;
    var12 = 4;
    var5 = var7[var12];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot7 = var8;
    var5 = var5.jsxs;
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flexDirection': 'row', 'alignItems': 'flex-end', 'marginRight': 16};
    var5['nameWrapper'] = var10;
    var10 = {};
    var10['paddingRight'] = var12;
    var5['name'] = var10;
    var10 = {};
    var10['flexShrink'] = var11;
    var5['memberName'] = var10;
    var10 = {};
    var11 = 'center';
    var10['alignSelf'] = var11;
    var5['ownerIcon'] = var10;
    var10 = {'height': 30, 'width': 30};
    var5['roleIcon'] = var10;
    var10 = {};
    var11 = 0.3;
    var10['opacity'] = var11;
    var5['rowRemoveIconDisabled'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot9 = var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/channel_permissions/native/components/ChannelOverwritesItem.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function ChannelOverwritesCheckboxItem(arg1) {
        var3 = arg1;
        var8 = var3.checked;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['checked'] = var1;
        var15 = {};
        var14 = var3;
        var13 = var2;
        var14 = copyDataProperties(var15, var14, var13);
        var6 = _closure1_slot0;
        var9 = _closure1_slot3;
        var1 = 19;
        var1 = var9[var1];
        var4 = undefined;
        var3 = var6.bind(var4)(var1);
        var2 = var3.useCheckboxA11yNative;
        var1 = {};
        var1['checked'] = var8;
        var1 = var2.bind(var3)(var1);
        var11 = var1.accessibilityRole;
        var10 = var1.accessibilityState;
        var3 = _closure1_slot7;
        var2 = _closure1_slot14;
        var1 = {};
        var15 = var1;
        var7 = copyDataProperties(var15, var14);
        var12 = true;
        var7 = 'accessible';
        var1[6] = var12;
        var7 = 'accessibilityRole';
        var1[6] = var11;
        var7 = 'accessibilityState';
        var1[6] = var10;
        var7 = _closure1_slot7;
        var5 = 20;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.FormCheckbox;
        var5 = {};
        var5['checked'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = 'trailing';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ChannelOverwritesCheckboxItem'] = var2;
    return var1;
})();
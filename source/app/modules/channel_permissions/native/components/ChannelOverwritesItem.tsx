// app/modules/channel_permissions/native/components/ChannelOverwritesItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function RemoveIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var2) { _fun0001_ip = 227; continue _fun0001 }
 58:
            var4 = _closure1_slot7;
            var7 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 11;
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
            var12 = var12.N86XcH;
            var12 = var13.bind(var14)(var12);
            var2['accessibilityLabel'] = var12;
            var8 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 49; continue _fun0002 }
 13:
                    var2 = _closure2_slot0;
                    var6 = var2.id;
                    var5 = var2.name;
                    var4 = _closure2_slot1;
                    var3 = function removeMemberOrRole(arg1, arg2, arg3) {
                        var13 = arg2;
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var13;
                        var1 = arg3;
                        var _closure4_slot2 = var1;
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 6;
                        var2 = var7[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var6 = _closure1_slot0;
                        var8 = 7;
                        var9 = var7[var8];
                        var9 = var6.bind(var1)(var9);
                        var11 = var9.intl;
                        var10 = var11.string;
                        var9 = var7[var8];
                        var9 = var6.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.GuPYQE;
                        var9 = var10.bind(var11)(var9);
                        var2['title'] = var9;
                        var9 = var7[var8];
                        var9 = var6.bind(var1)(var9);
                        var12 = var9.intl;
                        var11 = var12.format;
                        var9 = var7[var8];
                        var9 = var6.bind(var1)(var9);
                        var9 = var9.t;
                        var10 = var9.xERCnZ;
                        var9 = {};
                        var9['name'] = var13;
                        var9 = var11.bind(var12)(var10, var9);
                        var2['body'] = var9;
                        var9 = var7[var8];
                        var9 = var6.bind(var1)(var9);
                        var11 = var9.intl;
                        var10 = var11.string;
                        var9 = var7[var8];
                        var9 = var6.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.ETE/oK;
                        var9 = var10.bind(var11)(var9);
                        var2['cancelText'] = var9;
                        var9 = var7[var8];
                        var9 = var6.bind(var1)(var9);
                        var10 = var9.intl;
                        var9 = var10.string;
                        var8 = var7[var8];
                        var8 = var6.bind(var1)(var8);
                        var8 = var8.t;
                        var8 = var8.fKxYb2;
                        var8 = var9.bind(var10)(var8);
                        var2['confirmText'] = var8;
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
                        var5 = false;
                        var2['hideActionSheet'] = var5;
                        var5 = 10;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.ButtonColors;
                        var5 = var5.RED;
                        var2['confirmColor'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = undefined;
                    var3 = var3.bind(var2)(var6, var5, var4);
                    return var2;
 49:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2['onPress'] = var8;
            var8 = _closure1_slot7;
            var6 = 12;
            var6 = var11[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.CircleXIcon;
            var6 = {};
            var11 = var9.disabled;
            var9 = undefined;
            if(!var11) { _fun0001_ip = 207; continue _fun0001 }
 201:
            var9 = var10.rowRemoveIconDisabled;
 207:
            var6['style'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 227:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function RoleItem(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = var1.disabled;
            var12 = var1.item;
            var14 = var1.subLabel;
            var11 = var1.channelId;
            var15 = var1.showType;
            var9 = var1.showRemove;
            var13 = var1.start;
            var10 = var1.end;
            var7 = var1.trailing;
            var6 = var1.onPress;
            var4 = _closure1_slot7;
            var17 = _closure1_slot0;
            var19 = _closure1_slot3;
            var1 = 13;
            var1 = var19[var1];
            var3 = undefined;
            var1 = var17.bind(var3)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var18 = _closure1_slot7;
            var16 = 14;
            var16 = var19[var16];
            var16 = var17.bind(var3)(var16);
            var17 = var16.ShieldUserIcon;
            var16 = {};
            var19 = 'lg';
            var16['size'] = var19;
            var19 = var12.colorString;
            var16['color'] = var19;
            var16 = var18.bind(var3)(var17, var16);
            var1['icon'] = var16;
            var16 = var12.name;
            var1['label'] = var16;
            if(!var15) { _fun0003_ip = 195; continue _fun0003 }
 158:
            var16 = _closure1_slot2;
            var17 = _closure1_slot3;
            var15 = 15;
            var15 = var17[var15];
            var17 = var16.bind(var3)(var15);
            var16 = var17.getRowTypeLabel;
            var15 = var12.rowType;
            var14 = var16.bind(var17)(var15);
 195:
            var1['subLabel'] = var14;
            var1['start'] = var13;
            var1['end'] = var10;
            if(!var9) { _fun0003_ip = 235; continue _fun0003 }
 211:
            var10 = _closure1_slot7;
            var9 = _closure1_slot10;
            var8 = {};
            var8['item'] = var12;
            var8['channelId'] = var11;
            var7 = var10.bind(var3)(var9, var8);
 235:
            var1['trailing'] = var7;
            var1['onPress'] = var6;
            var1['disabled'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function MemberItem(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var13 = var1.item;
            var12 = var1.channelId;
            var9 = var1.showRemove;
            var11 = var1.onRemove;
            var23 = var1.guildId;
            var14 = var1.start;
            var10 = var1.end;
            var7 = var1.trailing;
            var6 = var1.onPress;
            var5 = var1.disabled;
            var1 = _closure1_slot9;
            var4 = undefined;
            var21 = var1.bind(var4)();
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var15 = var21.nameWrapper;
            var1['style'] = var15;
            var17 = _closure1_slot7;
            var16 = _closure1_slot0;
            var18 = _closure1_slot3;
            var15 = 16;
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'style': null, 'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var19 = var21.name;
            var18 = new Array(2);
            var18[0] = var19;
            var19 = var21.memberName;
            var18[1] = var19;
            var15['style'] = var18;
            var18 = var13.name;
            var15['children'] = var18;
            var16 = var17.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var18 = var13.rowType;
            var16 = _closure1_slot6;
            var17 = var16.OWNER;
            var19 = null;
            var16 = null;
            if(!(var18 === var17)) { _fun0004_ip = 298; continue _fun0004 }
 208:
            var20 = _closure1_slot7;
            var24 = _closure1_slot1;
            var25 = _closure1_slot3;
            var22 = 17;
            var17 = var25[var22];
            var18 = var24.bind(var4)(var17);
            var17 = {};
            var22 = var25[var22];
            var22 = var24.bind(var4)(var22);
            var22 = var22.Sizes;
            var22 = var22.REFRESH_SMALL_16;
            var17['size'] = var22;
            var22 = 18;
            var22 = var25[var22];
            var22 = var24.bind(var4)(var22);
            var17['source'] = var22;
            var22 = true;
            var17['disableColor'] = var22;
            var21 = var21.ownerIcon;
            var17['style'] = var21;
            var16 = var20.bind(var4)(var18, var17);
 298:
            var15[1] = var16;
            var1['children'] = var15;
            var15 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var16 = _closure1_slot3;
            var1 = 13;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var18 = _closure1_slot7;
            var17 = _closure1_slot1;
            var21 = 19;
            var16 = var16[var21];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var24 = _closure1_slot5;
            var22 = var24.getUser;
            var20 = var13.id;
            var22 = var22.bind(var24)(var20);
            var20 = var19 == var22;
            var19 = undefined;
            if(var20) { _fun0004_ip = 406; continue _fun0004 }
 395:
            var20 = var22.getAvatarSource;
            var19 = var20.bind(var22)(var23);
 406:
            var16['source'] = var19;
            var20 = _closure1_slot0;
            var19 = _closure1_slot3;
            var19 = var19[var21];
            var19 = var20.bind(var4)(var19);
            var19 = var19.AvatarSizes;
            var19 = var19.SMALL;
            var16['size'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var1['icon'] = var16;
            var1['label'] = var15;
            var15 = var13.username;
            var1['subLabel'] = var15;
            var1['start'] = var14;
            var1['end'] = var10;
            if(!var9) { _fun0004_ip = 507; continue _fun0004 }
 478:
            var10 = _closure1_slot7;
            var9 = _closure1_slot10;
            var8 = {};
            var8['item'] = var13;
            var8['channelId'] = var12;
            var8['onRemove'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 507:
            var1['trailing'] = var7;
            var1['onPress'] = var6;
            var1['disabled'] = var5;
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
        var1 = 13;
        var1 = var12[var1];
        var1 = var11.bind(var4)(var1);
        var2 = var1.TableRow;
        var1 = {};
        var8 = _closure1_slot7;
        var14 = _closure1_slot1;
        var10 = 17;
        var6 = var12[var10];
        var7 = var14.bind(var4)(var6);
        var6 = {};
        var13 = 20;
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
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RowType;
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'flex-end', 'marginRight': 16};
    var4['nameWrapper'] = var9;
    var9 = {};
    var9['paddingRight'] = var11;
    var4['name'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['memberName'] = var9;
    var9 = {};
    var10 = 'center';
    var9['alignSelf'] = var10;
    var4['ownerIcon'] = var9;
    var9 = {'height': 30, 'width': 30};
    var4['roleIcon'] = var9;
    var9 = {};
    var10 = 0.3;
    var9['opacity'] = var10;
    var4['rowRemoveIconDisabled'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_permissions/native/components/ChannelOverwritesItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelOverwritesItem(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
            if(!(var4 !== var6)) { _fun0005_ip = 183; continue _fun0005 }
 57:
            var4 = _closure1_slot6;
            var4 = var4.ROLE;
            if(!(var4 !== var6)) { _fun0005_ip = 183; continue _fun0005 }
 71:
            var4 = _closure1_slot6;
            var4 = var4.OWNER;
            if(!(var4 !== var6)) { _fun0005_ip = 149; continue _fun0005 }
 85:
            var4 = _closure1_slot6;
            var4 = var4.MEMBER;
            if(!(var4 !== var6)) { _fun0005_ip = 149; continue _fun0005 }
 99:
            var4 = _closure1_slot6;
            var4 = var4.EMPTY_STATE;
            if(!(var4 !== var6)) { _fun0005_ip = 115; continue _fun0005 }
 113:
            return var3;
 115:
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
 149:
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
 183:
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
    var3['default'] = var2;
    return var1;
})();
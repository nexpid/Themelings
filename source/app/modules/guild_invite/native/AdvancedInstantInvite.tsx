// app/modules/guild_invite/native/AdvancedInstantInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function findOptionLabel(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2.label;
case 2:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
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
    var9 = {};
    var9['flexGrow'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_invite/native/AdvancedInstantInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AdvancedInstantInvite(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var18 = var1.channel;
            var25 = var1.guild;
            var _closure2_slot0 = var25;
            var6 = var1.style;
            var10 = var1.maxAge;
            var _closure2_slot1 = var10;
            var31 = var1.onChangeMaxAge;
            var _closure2_slot2 = var31;
            var3 = var1.maxUsesOptions;
            var _closure2_slot3 = var3;
            var2 = var1.maxUses;
            var _closure2_slot4 = var2;
            var32 = var1.onChangeMaxUses;
            var _closure2_slot5 = var32;
            var24 = var1.temporary;
            var23 = var1.onChangeTemporary;
            var19 = var1.flags;
            var _closure2_slot6 = var19;
            var4 = var1.onChangeFlags;
            var _closure2_slot7 = var4;
            var13 = var1.roleIds;
            var _closure2_slot8 = var13;
            var16 = var1.onChangeRoleIds;
            var _closure2_slot9 = var16;
            var4 = undefined;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var1 = _closure1_slot9;
            var5 = var1.bind(var4)();
            var9 = null;
            var1 = var9 != var18;
            var7 = undefined;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 6;
            var1 = var12[var1];
            var8 = var8.bind(var4)(var1);
            var1 = var8.getChannelIconComponent;
            var7 = var1.bind(var8)(var18);
case 4:
            var1 = var9 != var18;
            var21 = ' ';
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 7;
            var1 = var12[var1];
            var17 = var8.bind(var4)(var1);
            var14 = var17.computeChannelName;
            var42 = _closure1_slot6;
            var41 = _closure1_slot5;
            var40 = true;
            var44 = var17;
            var43 = var18;
            var21 = var44[var14](var43, var42, var41, var40, var39);
case 6:
            var8 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 8;
            var1 = var17[var1];
            var12 = var8.bind(var4)(var1);
            var1 = var12.useInviteApplicationBypassInfo;
            var1 = var1.bind(var12)(var25);
            var12 = var1.canCreateApplicationBypassInvites;
            var14 = var1.isManualApprovalGuild;
            var1 = 9;
            var1 = var17[var1];
            var17 = var8.bind(var4)(var1);
            var8 = var17.useMaxAgeOptions;
            var1 = {};
            var20 = var9 == var25;
            var18 = undefined;
            if(var20) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var18 = var25.id;
case 8:
            var1['guildId'] = var18;
            var18 = 'AdvancedInstantInvite';
            var1['location'] = var18;
            var8 = var8.bind(var17)(var1);
            _closure2_slot10 = var8;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var1 = 10;
            var1 = var18[var1];
            var17 = var17.bind(var4)(var1);
            var18 = var9 != var25;
            var1 = null;
            if(!var18) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var25;
case 10:
            var22 = var17.bind(var4)(var1);
            _closure2_slot11 = var22;
            var17 = var22.length;
            var1 = 0;
            var18 = var17 > var1;
            var20 = _closure1_slot3;
            var26 = var20.useCallback;
            var17 = new Array(4);
            var17[0] = var25;
            var17[1] = var22;
            var17[2] = var13;
            var17[3] = var16;
            var16 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure2_slot9;
                    var2 = var4 != var3;
case 12:
                    if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 11;
                    var4 = var2[var4];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 13;
                    var3 = var2[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = 12;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var11 = var4.bind(var7)(var3, var2);
                    var3 = {};
                    var2 = _closure2_slot11;
                    var3['assignableRoles'] = var2;
                    var2 = _closure2_slot8;
                    var3['selectedRoleIds'] = var2;
                    var1 = _closure2_slot9;
                    var3['onSave'] = var1;
                    var10 = 'SelectInviteRolesActionSheet';
                    var8 = 'stack';
                    var12 = var6;
                    var9 = var3;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var26.bind(var20)(var16, var17);
            var27 = var20.useCallback;
            var17 = new Array(3);
            var17[0] = var10;
            var17[1] = var8;
            var17[2] = var31;
            var16 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 13:
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 11;
                    var3 = var11[var3];
                    var10 = undefined;
                    var6 = var4.bind(var10)(var3);
                    var5 = var6.openLazy;
                    var9 = _closure1_slot0;
                    var2 = 13;
                    var2 = var11[var2];
                    var4 = var9.bind(var10)(var2);
                    var2 = 14;
                    var3 = var11[var2];
                    var2 = var11.paths;
                    var4 = var4.bind(var10)(var3, var2);
                    var3 = {};
                    var2 = 15;
                    var7 = var11[var2];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var2 = var11[var2];
                    var2 = var9.bind(var10)(var2);
                    var2 = var2.t;
                    var2 = var2.gKmKP0;
                    var2 = var7.bind(var8)(var2);
                    var3['title'] = var2;
                    var2 = _closure2_slot10;
                    var3['options'] = var2;
                    var2 = _closure2_slot1;
                    var3['value'] = var2;
                    var1 = _closure2_slot2;
                    var3['onChange'] = var1;
                    var14 = 'InviteMaxAgeActionSheet';
                    var12 = 'stack';
                    var16 = var6;
                    var15 = var4;
                    var13 = var3;
                    var1 = var16[var5](var15, var14, var13, var12, var11);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var34 = var27.bind(var20)(var16, var17);
            var27 = var20.useCallback;
            var17 = new Array(3);
            var17[0] = var2;
            var17[1] = var3;
            var17[2] = var32;
            var16 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 16; continue _fun0005 }
case 13:
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 11;
                    var3 = var11[var3];
                    var10 = undefined;
                    var6 = var4.bind(var10)(var3);
                    var5 = var6.openLazy;
                    var9 = _closure1_slot0;
                    var2 = 13;
                    var2 = var11[var2];
                    var4 = var9.bind(var10)(var2);
                    var2 = 14;
                    var3 = var11[var2];
                    var2 = var11.paths;
                    var4 = var4.bind(var10)(var3, var2);
                    var3 = {};
                    var2 = 15;
                    var7 = var11[var2];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var2 = var11[var2];
                    var2 = var9.bind(var10)(var2);
                    var2 = var2.t;
                    var2 = var2["+3vH1h"];
                    var2 = var7.bind(var8)(var2);
                    var3['title'] = var2;
                    var2 = _closure2_slot3;
                    var3['options'] = var2;
                    var2 = _closure2_slot4;
                    var3['value'] = var2;
                    var1 = _closure2_slot5;
                    var3['onChange'] = var1;
                    var14 = 'InviteMaxUsesActionSheet';
                    var12 = 'stack';
                    var16 = var6;
                    var15 = var4;
                    var13 = var3;
                    var1 = var16[var5](var15, var14, var13, var12, var11);
case 16:
                    var1 = undefined;
                    return var1;
                }
            };
            var33 = var27.bind(var20)(var16, var17);
            var17 = var20.useMemo;
            var16 = new Array(2);
            var16[0] = var22;
            var16[1] = var13;
            var13 = function() {
                var2 = global;
                var5 = var2.Set;
                var6 = _closure2_slot11;
                var4 = var6.map;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var7 = var4.bind(var6)(var3);
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var3;
                var3 = _closure2_slot8;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = var1.length;
                return var1;
            };
            var20 = var17.bind(var20)(var13, var16);
            var27 = undefined;
            if(!(var1 !== var20)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var13 = _closure1_slot0;
            var22 = _closure1_slot2;
            var1 = 15;
            var16 = var22[var1];
            var16 = var13.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var1 = var22[var1];
            var1 = var13.bind(var4)(var1);
            var1 = var1.t;
            var13 = var1.eXU3/V;
            var1 = {};
            var1['count'] = var20;
            var27 = var16.bind(var17)(var13, var1);
case 17:
            var1 = _closure1_slot10;
            var39 = var1.bind(var4)(var8, var10);
            var38 = var1.bind(var4)(var3, var2);
            if(!(var9 == var25)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = var9 != var7;
            var28 = undefined;
            if(!var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 17;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRowIcon;
            var1 = {};
            var1['IconComponent'] = var7;
            var28 = var3.bind(var4)(var2, var1);
case 21:
            _fun0002_ip = 23; continue _fun0002;
case 19:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var7 = 16;
            var1 = var10[var7];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['guild'] = var25;
            var8 = _closure1_slot0;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.GuildIconSizes;
            var7 = var7.SMALL_32;
            var1['size'] = var7;
            var28 = var3.bind(var4)(var2, var1);
case 23:
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var5.container;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 18;
            var5 = var17[var5];
            var5 = var20.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var10 = _closure1_slot1;
            var8 = 19;
            var8 = var17[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.space;
            var8 = var8.PX_24;
            var5['spacing'] = var8;
            var10 = 20;
            var8 = var17[var10];
            var8 = var20.bind(var4)(var8);
            var13 = var8.TableRowGroup;
            var8 = {};
            var16 = 15;
            var22 = var17[var16];
            var22 = var20.bind(var4)(var22);
            var30 = var22.intl;
            var29 = var30.string;
            var22 = var17[var16];
            var22 = var20.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.LUo0Q8;
            var22 = var29.bind(var30)(var22);
            var8['title'] = var22;
            var22 = var9 != var28;
            var8['hasIcons'] = var22;
            var22 = 21;
            var17 = var17[var22];
            var17 = var20.bind(var4)(var17);
            var20 = var17.TableRow;
            var17 = {};
            var17['icon'] = var28;
            var17['label'] = var21;
            var28 = var9 == var25;
            var21 = undefined;
            if(var28) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var21 = var25.name;
case 24:
            var17['subLabel'] = var21;
            var17 = var3.bind(var4)(var20, var17);
            var8['children'] = var17;
            var13 = var3.bind(var4)(var13, var8);
            var8 = new Array(5);
            var8[0] = var13;
            var21 = _closure1_slot8;
            var37 = _closure1_slot0;
            var28 = _closure1_slot2;
            var13 = var28[var10];
            var13 = var37.bind(var4)(var13);
            var20 = var13.TableRowGroup;
            var17 = {};
            var13 = var28[var16];
            var13 = var37.bind(var4)(var13);
            var29 = var13.intl;
            var25 = var29.string;
            var13 = var28[var16];
            var13 = var37.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13["4QuV7G"];
            var13 = var25.bind(var29)(var13);
            var17['title'] = var13;
            var13 = false;
            var17['hasIcons'] = var13;
            var30 = _closure1_slot7;
            var25 = var28[var22];
            var25 = var37.bind(var4)(var25);
            var29 = var25.TableRow;
            var25 = {};
            var35 = var28[var16];
            var35 = var37.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var28 = var28[var16];
            var28 = var37.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.gKmKP0;
            var28 = var35.bind(var36)(var28);
            var25['label'] = var28;
            var35 = var9 != var39;
            var28 = undefined;
            if(!var35) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var37 = _closure1_slot7;
            var36 = _closure1_slot0;
            var35 = _closure1_slot2;
            var35 = var35[var22];
            var35 = var36.bind(var4)(var35);
            var35 = var35.TableRow;
            var36 = var35.TrailingText;
            var35 = {};
            var35['text'] = var39;
            var28 = var37.bind(var4)(var36, var35);
case 26:
            var25['trailing'] = var28;
            var28 = true;
            var25['arrow'] = var28;
            var25['onPress'] = var34;
            var31 = var9 == var31;
            var25['disabled'] = var31;
            var29 = var30.bind(var4)(var29, var25);
            var25 = new Array(2);
            var25[0] = var29;
            var31 = _closure1_slot7;
            var37 = _closure1_slot0;
            var34 = _closure1_slot2;
            var29 = var34[var22];
            var29 = var37.bind(var4)(var29);
            var30 = var29.TableRow;
            var29 = {};
            var35 = var34[var16];
            var35 = var37.bind(var4)(var35);
            var36 = var35.intl;
            var35 = var36.string;
            var34 = var34[var16];
            var34 = var37.bind(var4)(var34);
            var34 = var34.t;
            var34 = var34["+3vH1h"];
            var34 = var35.bind(var36)(var34);
            var29['label'] = var34;
            var35 = var9 != var38;
            var34 = undefined;
            if(!var35) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var37 = _closure1_slot7;
            var36 = _closure1_slot0;
            var35 = _closure1_slot2;
            var35 = var35[var22];
            var35 = var36.bind(var4)(var35);
            var35 = var35.TableRow;
            var36 = var35.TrailingText;
            var35 = {};
            var35['text'] = var38;
            var34 = var37.bind(var4)(var36, var35);
case 28:
            var29['trailing'] = var34;
            var29['arrow'] = var28;
            var29['onPress'] = var33;
            var32 = var9 == var32;
            var29['disabled'] = var32;
            var29 = var31.bind(var4)(var30, var29);
            var25[1] = var29;
            var17['children'] = var25;
            var17 = var21.bind(var4)(var20, var17);
            var8[1] = var17;
            var17 = null;
            if(!var18) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var21 = _closure1_slot7;
            var32 = _closure1_slot0;
            var29 = _closure1_slot2;
            var18 = var29[var10];
            var18 = var32.bind(var4)(var18);
            var20 = var18.TableRowGroup;
            var18 = {};
            var18['hasIcons'] = var13;
            var22 = var29[var22];
            var22 = var32.bind(var4)(var22);
            var25 = var22.TableRow;
            var22 = {};
            var30 = var29[var16];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var29 = var29[var16];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.rPYJxL;
            var29 = var30.bind(var31)(var29);
            var22['label'] = var29;
            var22['arrow'] = var28;
            var22['subLabel'] = var27;
            var22['onPress'] = var26;
            var22 = var21.bind(var4)(var25, var22);
            var18['children'] = var22;
            var17 = var21.bind(var4)(var20, var18);
case 30:
            var8[2] = var17;
            var14 = !var14;
            if(!var14) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var14 = var9 != var23;
case 32:
            if(!var14) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var20 = _closure1_slot7;
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = var25[var10];
            var17 = var28.bind(var4)(var17);
            var18 = var17.TableRowGroup;
            var17 = {};
            var17['hasIcons'] = var13;
            var21 = var25[var16];
            var21 = var28.bind(var4)(var21);
            var26 = var21.intl;
            var22 = var26.string;
            var21 = var25[var16];
            var21 = var28.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.A53l87;
            var21 = var22.bind(var26)(var21);
            var17['helperText'] = var21;
            var21 = 22;
            var21 = var25[var21];
            var21 = var28.bind(var4)(var21);
            var22 = var21.TableSwitchRow;
            var21 = {};
            var26 = var25[var16];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var16];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.dy1ico;
            var25 = var26.bind(var27)(var25);
            var21['label'] = var25;
            var21['value'] = var24;
            var21['onValueChange'] = var23;
            var21 = var20.bind(var4)(var22, var21);
            var17['children'] = var21;
            var14 = var20.bind(var4)(var18, var17);
case 34:
            var8[3] = var14;
            var9 = null;
            if(!var12) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var12 = _closure1_slot7;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = var21[var10];
            var10 = var20.bind(var4)(var10);
            var11 = var10.TableRowGroup;
            var10 = {};
            var10['hasIcons'] = var13;
            var13 = var21[var16];
            var13 = var20.bind(var4)(var13);
            var17 = var13.intl;
            var14 = var17.string;
            var13 = var21[var16];
            var13 = var20.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.jvd/LF;
            var13 = var14.bind(var17)(var13);
            var10['helperText'] = var13;
            var13 = 22;
            var13 = var21[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.TableSwitchRow;
            var13 = {};
            var17 = var21[var16];
            var17 = var20.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var21[var16];
            var16 = var20.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16["1i1bUl"];
            var16 = var17.bind(var18)(var16);
            var13['label'] = var16;
            var16 = 23;
            var16 = var21[var16];
            var18 = var20.bind(var4)(var16);
            var17 = var18.hasFlag;
            var16 = 24;
            var16 = var21[var16];
            var16 = var20.bind(var4)(var16);
            var16 = var16.GuildInviteFlags;
            var16 = var16.IS_APPLICATION_BYPASS;
            var16 = var17.bind(var18)(var19, var16);
            var13['value'] = var16;
            var15 = function onValueChange(arg1) {
                var3 = _closure2_slot7;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 23;
                var5 = var8[var2];
                var2 = undefined;
                var7 = var4.bind(var2)(var5);
                var6 = var7.setFlag;
                var5 = _closure2_slot6;
                var1 = 24;
                var1 = var8[var1];
                var1 = var4.bind(var2)(var1);
                var1 = var1.GuildInviteFlags;
                var4 = var1.IS_APPLICATION_BYPASS;
                var1 = arg1;
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var13['onValueChange'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 36:
            var8[4] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
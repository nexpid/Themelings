// app/modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var12 = var4.Fonts;
    var4 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = 9;
    var11 = var6[var13];
    var11 = var14.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var9['color'] = var11;
    var11 = var12.PRIMARY_MEDIUM;
    var9['fontFamily'] = var11;
    var11 = 12;
    var9['fontSize'] = var11;
    var15 = 16;
    var9['lineHeight'] = var15;
    var4['name'] = var9;
    var9 = {};
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_MUTED;
    var9['color'] = var13;
    var12 = var12.PRIMARY_MEDIUM;
    var9['fontFamily'] = var12;
    var9['fontSize'] = var11;
    var4['discriminator'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'flexGrow': 1, 'alignItems': 'center', 'justifyContent': 'flex-end', 'marginRight': 12};
    var4['roleCountContainer'] = var9;
    var9 = {};
    var9['paddingRight'] = var10;
    var4['roleCountText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.selectionActionComponent;
            var _closure2_slot0 = var14;
            var13 = var1.labelComponent;
            var6 = var1.channelId;
            var _closure2_slot1 = var6;
            var3 = var1.guildId;
            var _closure2_slot2 = var3;
            var12 = var1.containerId;
            var10 = var1.onSubmit;
            var5 = var1.allowEmpty;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot12;
            var2 = var2.bind(var4)();
            var _closure2_slot3 = var2;
            var8 = _closure1_slot6;
            var2 = var8.getGuild;
            var20 = var2.bind(var8)(var3);
            var _closure2_slot4 = var20;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var9 = var8.bind(var4)(var2);
            var2 = null;
            var2 = var2 == var20;
            var8 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var20.id;
case 2:
            var11 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = 11;
            var2 = var17[var2];
            var2 = var11.bind(var4)(var2);
            var2 = var2.MIN_REREQUEST_TIME;
            var2 = var9.bind(var4)(var8, var2);
            _closure2_slot5 = var2;
            var19 = _closure1_slot3;
            var9 = var19.useCallback;
            var8 = new Array(2);
            var8[0] = var14;
            var8[1] = var6;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.queryMentionables;
                var2 = _closure2_slot0;
                var3 = var2.type;
                var2 = _closure2_slot1;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var11 = var9.bind(var19)(var2, var8);
            var2 = _closure1_slot1;
            var8 = 12;
            var8 = var17[var8];
            var9 = var2.bind(var4)(var8);
            var8 = {};
            var8['selectActionComponent'] = var14;
            var8['containerId'] = var12;
            var8['guildId'] = var3;
            var8['queryOptions'] = var11;
            var8['onSubmit'] = var10;
            var8 = var9.bind(var4)(var8);
            var12 = var8.options;
            var11 = var8.selectedOptions;
            var10 = var8.isSelected;
            var16 = var8.onPressOptionItem;
            var9 = var8.submitSelection;
            var8 = var8.setQuery;
            var18 = var19.useCallback;
            var15 = new Array(2);
            var15[0] = var20;
            var15[1] = var3;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 13;
                    var2 = var2[var7];
                    var5 = undefined;
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.SelectOptionType;
                    var2 = var2.USER;
                    if(!(var3 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = var1.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.SelectOptionType;
                    var2 = var2.ROLE;
                    if(!(var3 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    return var5;
case 6:
                    var4 = _closure2_slot4;
                    var2 = null;
                    var4 = var2 != var4;
                    var8 = undefined;
                    if(!var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var10 = _closure1_slot5;
                    var9 = var10.getRole;
                    var4 = _closure2_slot4;
                    var7 = var4.id;
                    var4 = var1.value;
                    var8 = var9.bind(var10)(var7, var4);
case 8:
                    var4 = _closure2_slot4;
                    if(!(var2 != var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    if(!(var2 != var8)) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 15;
                    var4 = var4[var7];
                    var9 = var9.bind(var5)(var4);
                    var4 = var9.canGuildUseRoleIcons;
                    var3 = _closure2_slot4;
                    var3 = var4.bind(var9)(var3, var8);
                    if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getRoleIconData;
                    var3 = var3.bind(var4)(var8);
                    if(!(var2 == var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var3 = {};
case 15:
                    var4 = var3.customIconSrc;
                    var9 = var3.unicodeEmoji;
                    var3 = var2 != var4;
                    var10 = undefined;
                    if(!var3) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var3 = {};
                    var3['uri'] = var4;
                    var10 = var3;
case 17:
                    if(!(var2 == var10)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    if(!(var2 == var9)) { _fun0002_ip = 19; continue _fun0002 }
case 13:
                    var7 = _closure1_slot10;
                    var4 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 17;
                    var3 = var11[var3];
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.ShieldUserIcon;
                    var3 = {};
                    var12 = var2 == var8;
                    var11 = undefined;
                    if(var12) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var11 = var8.colorString;
case 21:
                    if(!(var2 == var11)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var11 = _closure1_slot9;
case 23:
                    var3['color'] = var11;
                    var3 = var7.bind(var5)(var4, var3);
                    return var3;
case 19:
                    var7 = _closure1_slot10;
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var3 = 16;
                    var3 = var11[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = {};
                    var3['source'] = var10;
                    var3['unicodeEmoji'] = var9;
                    var9 = 24;
                    var3['size'] = var9;
                    var8 = var8.name;
                    var3['name'] = var8;
                    var3 = var7.bind(var5)(var4, var3);
                    return var3;
case 10:
                    return var2;
case 4:
                    var3 = _closure1_slot8;
                    var2 = var3.getUser;
                    var1 = var1.value;
                    var11 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var11)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var4 = _closure1_slot7;
                    var3 = var4.isMobileOnline;
                    var2 = var11.id;
                    var10 = var3.bind(var4)(var2);
                    var3 = var4.isVROnline;
                    var2 = var11.id;
                    var9 = var3.bind(var4)(var2);
                    var3 = var4.getStatus;
                    var2 = var11.id;
                    var7 = var3.bind(var4)(var2);
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 14;
                    var2 = var2[var8];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.Avatar;
                    var2 = {};
                    var2['user'] = var11;
                    var2['isMobileOnline'] = var10;
                    var2['isVROnline'] = var9;
                    var2['status'] = var7;
                    var7 = _closure2_slot2;
                    var10 = var1 != var7;
                    var7 = undefined;
                    if(!var10) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var7 = _closure2_slot2;
case 27:
                    var2['guildId'] = var7;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var7.bind(var5)(var6);
                    var6 = var6.AvatarSizes;
                    var6 = var6.XSMALL;
                    var2['size'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 25:
                    return var1;
                }
            };
            var15 = var18.bind(var19)(var3, var15);
            var3 = _closure1_slot10;
            var1 = 18;
            var1 = var17[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPressOptionItem'] = var16;
            var1['renderIcon'] = var15;
            var15 = function renderDescription(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var5 = var2.type;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.SelectOptionType;
                    var3 = var3.USER;
                    if(!(var5 !== var3)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    return var4;
case 29:
                    var5 = _closure1_slot8;
                    var3 = var5.getUser;
                    var2 = var2.value;
                    var5 = var3.bind(var5)(var2);
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 19;
                    var1 = var6[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var1['user'] = var5;
                    var5 = _closure2_slot3;
                    var6 = var5.name;
                    var1['usernameStyle'] = var6;
                    var6 = var5.discriminator;
                    var1['discriminatorStyle'] = var6;
                    var5 = var5.name;
                    var1['nicknameStyle'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1['renderDescription'] = var15;
            var15 = function renderOptionSuffix(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.type;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.SelectOptionType;
                    var2 = var2.ROLE;
                    if(!(var4 !== var2)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    return var1;
case 29:
                    var4 = _closure2_slot4;
                    var2 = null;
                    var7 = var2 != var4;
                    var4 = undefined;
                    if(!var7) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var9 = _closure1_slot5;
                    var8 = var9.getRole;
                    var7 = _closure2_slot4;
                    var7 = var7.id;
                    var3 = var3.value;
                    var4 = var8.bind(var9)(var7, var3);
case 31:
                    var3 = var2 == var4;
                    var10 = null;
                    if(var3) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var3 = _closure2_slot5;
                    var7 = var2 == var3;
                    var3 = undefined;
                    if(var7) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var7 = _closure2_slot5;
                    var4 = var4.id;
                    var3 = var7[var4];
case 35:
                    var10 = var3;
case 33:
                    if(!(var2 != var10)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var11 = _closure2_slot3;
                    var6 = var11.roleCountContainer;
                    var2['style'] = var6;
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 20;
                    var5 = var9[var5];
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.Text;
                    var5 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
                    var11 = var11.roleCountText;
                    var5['style'] = var11;
                    var5['children'] = var10;
                    var6 = var8.bind(var1)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = 21;
                    var6 = var9[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.UserIcon;
                    var6 = {};
                    var9 = 'xs';
                    var6['size'] = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2['children'] = var5;
                    var2 = var4.bind(var1)(var3, var2);
                    return var2;
case 37:
                    return var1;
                }
            };
            var1['renderOptionSuffix'] = var15;
            var1['selectionActionComponent'] = var14;
            var1['labelComponent'] = var13;
            var1['options'] = var12;
            var12 = var11.length;
            var1['selectedCount'] = var12;
            var1['selectedOptions'] = var11;
            var1['isSelected'] = var10;
            var1['submitSelection'] = var9;
            var1['onQueryChange'] = var8;
            var7 = function itemAccessibilityLabel(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var9 = arg1;
                    var3 = var9.type;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var5 = 13;
                    var1 = var1[var5];
                    var6 = undefined;
                    var1 = var4.bind(var6)(var1);
                    var1 = var1.SelectOptionType;
                    var1 = var1.USER;
                    if(!(var3 !== var1)) { _fun0005_ip = 39; continue _fun0005 }
case 30:
                    var3 = var9.type;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var4.bind(var6)(var1);
                    var1 = var1.SelectOptionType;
                    var1 = var1.ROLE;
                    if(!(var3 !== var1)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    return var6;
case 40:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 22;
                    var4 = var7[var1];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.t;
                    var3 = var1.F6ejkk;
                    var1 = {};
                    var7 = var9.label;
                    var1['roleName'] = var7;
                    var1 = var4.bind(var5)(var3, var1);
                    return var1;
case 39:
                    var4 = _closure1_slot8;
                    var3 = var4.getUser;
                    var1 = var9.value;
                    var7 = var3.bind(var4)(var1);
                    var8 = null;
                    if(!(var8 != var7)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var1 = var7.bot;
                    if(var1) { _fun0005_ip = 44; continue _fun0005 }
case 42:
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 22;
                    var4 = var10[var1];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var10[var1];
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.t;
                    var3 = var1.AydQ7a;
                    var1 = {};
                    var10 = var9.label;
                    var1['username'] = var10;
                    var11 = var8 == var7;
                    var10 = undefined;
                    if(var11) { _fun0005_ip = 45; continue _fun0005 }
case 13:
                    var10 = var7.discriminator;
case 45:
                    var1['discriminator'] = var10;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0005_ip = 46; continue _fun0005;
case 44:
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 22;
                    var4 = var10[var2];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var10[var2];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.t;
                    var3 = var2.zogo/8;
                    var2 = {};
                    var9 = var9.label;
                    var2['username'] = var9;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var6 = var7.discriminator;
case 47:
                    var2['discriminator'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
case 46:
                    return var1;
                }
            };
            var1['itemAccessibilityLabel'] = var7;
            var1['channelId'] = var6;
            var1['allowEmpty'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
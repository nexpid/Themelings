// app/modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var14 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = var4.DEFAULT_ROLE_COLOR;
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
    var11 = var11.INTERACTIVE_NORMAL;
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
    var13 = var13.INTERACTIVE_MUTED;
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
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.messageId;
            var11 = var1.messageFlags;
            var10 = var1.applicationId;
            var5 = var1.channelId;
            var _closure2_slot0 = var5;
            var3 = var1.guildId;
            var _closure2_slot1 = var3;
            var12 = var1.selectionActionComponent;
            var _closure2_slot2 = var12;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var2 = _closure1_slot12;
            var2 = var2.bind(var4)();
            var _closure2_slot3 = var2;
            var7 = _closure1_slot6;
            var2 = var7.getGuild;
            var18 = var2.bind(var7)(var3);
            var _closure2_slot4 = var18;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var8 = var7.bind(var4)(var2);
            var2 = null;
            var2 = var2 == var18;
            var7 = undefined;
            if(var2) { _fun0001_ip = 124; continue _fun0001 }
 119:
            var7 = var18.id;
 124:
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 11;
            var2 = var15[var2];
            var2 = var9.bind(var4)(var2);
            var2 = var2.MIN_REREQUEST_TIME;
            var2 = var8.bind(var4)(var7, var2);
            _closure2_slot5 = var2;
            var17 = _closure1_slot3;
            var8 = var17.useCallback;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var5;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.queryMentionables;
                var2 = _closure2_slot2;
                var3 = var2.type;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var9 = var8.bind(var17)(var2, var7);
            var2 = _closure1_slot1;
            var7 = 12;
            var7 = var15[var7];
            var8 = var2.bind(var4)(var7);
            var7 = {};
            var7['selectActionComponent'] = var12;
            var7['messageId'] = var13;
            var7['messageFlags'] = var11;
            var7['applicationId'] = var10;
            var7['channelId'] = var5;
            var7['guildId'] = var3;
            var7['queryOptions'] = var9;
            var7 = var8.bind(var4)(var7);
            var11 = var7.options;
            var10 = var7.selectedOptions;
            var9 = var7.isSelected;
            var14 = var7.onPressOptionItem;
            var8 = var7.submitSelection;
            var7 = var7.setQuery;
            var16 = var17.useCallback;
            var13 = new Array(2);
            var13[0] = var18;
            var13[1] = var3;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                    if(!(var3 !== var2)) { _fun0002_ip = 468; continue _fun0002 }
 52:
                    var3 = var1.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.SelectOptionType;
                    var2 = var2.ROLE;
                    if(!(var3 !== var2)) { _fun0002_ip = 92; continue _fun0002 }
 90:
                    return var5;
 92:
                    var4 = _closure2_slot4;
                    var2 = null;
                    var4 = var2 != var4;
                    var8 = undefined;
                    if(!var4) { _fun0002_ip = 140; continue _fun0002 }
 110:
                    var10 = _closure1_slot5;
                    var9 = var10.getRole;
                    var4 = _closure2_slot4;
                    var7 = var4.id;
                    var4 = var1.value;
                    var8 = var9.bind(var10)(var7, var4);
 140:
                    var4 = _closure2_slot4;
                    if(!(var2 != var4)) { _fun0002_ip = 466; continue _fun0002 }
 151:
                    if(!(var2 != var8)) { _fun0002_ip = 466; continue _fun0002 }
 158:
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 15;
                    var4 = var4[var7];
                    var9 = var9.bind(var5)(var4);
                    var4 = var9.canGuildUseRoleIcons;
                    var3 = _closure2_slot4;
                    var3 = var4.bind(var9)(var3, var8);
                    if(!var3) { _fun0002_ip = 276; continue _fun0002 }
 197:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getRoleIconData;
                    var3 = var3.bind(var4)(var8);
                    if(!(var2 == var3)) { _fun0002_ip = 231; continue _fun0002 }
 229:
                    var3 = {};
 231:
                    var4 = var3.customIconSrc;
                    var9 = var3.unicodeEmoji;
                    var3 = var2 != var4;
                    var10 = undefined;
                    if(!var3) { _fun0002_ip = 262; continue _fun0002 }
 252:
                    var3 = {};
                    var3['uri'] = var4;
                    var10 = var3;
 262:
                    if(!(var2 == var10)) { _fun0002_ip = 407; continue _fun0002 }
 269:
                    if(!(var2 == var9)) { _fun0002_ip = 407; continue _fun0002 }
 276:
                    var14 = {};
                    var3 = var8.colorString;
                    if(!(var2 == var3)) { _fun0002_ip = 323; continue _fun0002 }
 288:
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 17;
                    var4 = var11[var4];
                    var11 = var7.bind(var5)(var4);
                    var7 = var11.int2hex;
                    var4 = _closure1_slot9;
                    var3 = var7.bind(var11)(var4);
 323:
                    var14['tintColor'] = var3;
                    var7 = _closure1_slot10;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 18;
                    var3 = var13[var11];
                    var4 = var12.bind(var5)(var3);
                    var3 = {};
                    var3['style'] = var14;
                    var11 = var13[var11];
                    var11 = var12.bind(var5)(var11);
                    var11 = var11.Sizes;
                    var11 = var11.MEDIUM;
                    var3['size'] = var11;
                    var11 = 19;
                    var11 = var13[var11];
                    var11 = var12.bind(var5)(var11);
                    var3['source'] = var11;
                    var3 = var7.bind(var5)(var4, var3);
                    return var3;
 407:
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
 466:
                    return var2;
 468:
                    var3 = _closure1_slot8;
                    var2 = var3.getUser;
                    var1 = var1.value;
                    var10 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var10)) { _fun0002_ip = 637; continue _fun0002 }
 497:
                    var4 = _closure1_slot7;
                    var3 = var4.isMobileOnline;
                    var2 = var10.id;
                    var9 = var3.bind(var4)(var2);
                    var3 = var4.getStatus;
                    var2 = var10.id;
                    var7 = var3.bind(var4)(var2);
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var8 = 14;
                    var2 = var2[var8];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var2['user'] = var10;
                    var2['isMobileOnline'] = var9;
                    var2['status'] = var7;
                    var7 = _closure2_slot1;
                    var10 = var1 != var7;
                    var7 = undefined;
                    if(!var10) { _fun0002_ip = 592; continue _fun0002 }
 588:
                    var7 = _closure2_slot1;
 592:
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
 637:
                    return var1;
                }
            };
            var13 = var16.bind(var17)(var3, var13);
            var3 = _closure1_slot10;
            var1 = 20;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPressOptionItem'] = var14;
            var1['renderIcon'] = var13;
            var13 = function renderDescription(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                    if(!(var5 !== var3)) { _fun0003_ip = 51; continue _fun0003 }
 49:
                    return var4;
 51:
                    var5 = _closure1_slot8;
                    var3 = var5.getUser;
                    var2 = var2.value;
                    var5 = var3.bind(var5)(var2);
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 21;
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
            var1['renderDescription'] = var13;
            var13 = function renderOptionSuffix(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                    if(!(var4 !== var2)) { _fun0004_ip = 51; continue _fun0004 }
 49:
                    return var1;
 51:
                    var4 = _closure2_slot4;
                    var2 = null;
                    var7 = var2 != var4;
                    var4 = undefined;
                    if(!var7) { _fun0004_ip = 99; continue _fun0004 }
 69:
                    var9 = _closure1_slot5;
                    var8 = var9.getRole;
                    var7 = _closure2_slot4;
                    var7 = var7.id;
                    var3 = var3.value;
                    var4 = var8.bind(var9)(var7, var3);
 99:
                    var3 = var2 == var4;
                    var10 = null;
                    if(var3) { _fun0004_ip = 137; continue _fun0004 }
 108:
                    var3 = _closure2_slot5;
                    var7 = var2 == var3;
                    var3 = undefined;
                    if(var7) { _fun0004_ip = 134; continue _fun0004 }
 121:
                    var7 = _closure2_slot5;
                    var4 = var4.id;
                    var3 = var7[var4];
 134:
                    var10 = var3;
 137:
                    if(!(var2 != var10)) { _fun0004_ip = 291; continue _fun0004 }
 144:
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var11 = _closure2_slot3;
                    var6 = var11.roleCountContainer;
                    var2['style'] = var6;
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 22;
                    var5 = var9[var5];
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.Text;
                    var5 = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                    var11 = var11.roleCountText;
                    var5['style'] = var11;
                    var5['children'] = var10;
                    var6 = var8.bind(var1)(var6, var5);
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = 23;
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
 291:
                    return var1;
                }
            };
            var1['renderOptionSuffix'] = var13;
            var1['selectionActionComponent'] = var12;
            var1['options'] = var11;
            var11 = var10.length;
            var1['selectedCount'] = var11;
            var1['selectedOptions'] = var10;
            var1['isSelected'] = var9;
            var1['submitSelection'] = var8;
            var1['onQueryChange'] = var7;
            var6 = function itemAccessibilityLabel(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                    if(!(var3 !== var1)) { _fun0005_ip = 161; continue _fun0005 }
 49:
                    var3 = var9.type;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var5];
                    var1 = var4.bind(var6)(var1);
                    var1 = var1.SelectOptionType;
                    var1 = var1.ROLE;
                    if(!(var3 !== var1)) { _fun0005_ip = 89; continue _fun0005 }
 87:
                    return var6;
 89:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 24;
                    var4 = var7[var1];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var7[var1];
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.t;
                    var3 = var1.F6ejkp;
                    var1 = {};
                    var7 = var9.label;
                    var1['roleName'] = var7;
                    var1 = var4.bind(var5)(var3, var1);
                    return var1;
 161:
                    var4 = _closure1_slot8;
                    var3 = var4.getUser;
                    var1 = var9.value;
                    var7 = var3.bind(var4)(var1);
                    var8 = null;
                    if(!(var8 != var7)) { _fun0005_ip = 196; continue _fun0005 }
 187:
                    var1 = var7.bot;
                    if(var1) { _fun0005_ip = 287; continue _fun0005 }
 196:
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 24;
                    var4 = var10[var1];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var1 = var10[var1];
                    var1 = var3.bind(var6)(var1);
                    var1 = var1.t;
                    var3 = var1.AydQ7e;
                    var1 = {};
                    var10 = var9.label;
                    var1['username'] = var10;
                    var11 = var8 == var7;
                    var10 = undefined;
                    if(var11) { _fun0005_ip = 274; continue _fun0005 }
 268:
                    var10 = var7.discriminator;
 274:
                    var1['discriminator'] = var10;
                    var1 = var4.bind(var5)(var3, var1);
                    _fun0005_ip = 376; continue _fun0005;
 287:
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 24;
                    var4 = var10[var2];
                    var4 = var3.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.formatToPlainString;
                    var2 = var10[var2];
                    var2 = var3.bind(var6)(var2);
                    var2 = var2.t;
                    var3 = var2.zogo//;
                    var2 = {};
                    var9 = var9.label;
                    var2['username'] = var9;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0005_ip = 365; continue _fun0005 }
 359:
                    var6 = var7.discriminator;
 365:
                    var2['discriminator'] = var6;
                    var1 = var4.bind(var5)(var3, var2);
 376:
                    return var1;
                }
            };
            var1['itemAccessibilityLabel'] = var6;
            var1['channelId'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
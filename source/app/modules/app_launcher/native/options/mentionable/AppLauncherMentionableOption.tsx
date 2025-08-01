// app/modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function MentionableIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.mentionable;
            var10 = var1.guildId;
            var1 = _closure1_slot10;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var1 = var13[var1];
            var8 = var11.bind(var5)(var1);
            var4 = var8.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var4.bind(var8)(var3, var1);
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var1 = 10;
            var1 = var13[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var12 = _closure1_slot9;
            var8 = 11;
            var8 = var13[var8];
            var8 = var11.bind(var5)(var8);
            var11 = var8.UserCircleIcon;
            var8 = {'size': 'sm', 'color': 'interactive-normal'};
            var8 = var12.bind(var5)(var11, var8);
            var1['icon'] = var8;
            var6 = var6.iconWrapper;
            var1['wrapperStyle'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 419; continue _fun0001 }
 173:
            var4 = var2.type;
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 12;
            var3 = var3[var6];
            var3 = var8.bind(var5)(var3);
            var3 = var3.MentionableItemTypes;
            var3 = var3.USER;
            if(!(var3 !== var4)) { _fun0001_ip = 329; continue _fun0001 }
 214:
            var8 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var8.bind(var5)(var3);
            var3 = var3.MentionableItemTypes;
            var3 = var3.ROLE;
            if(!(var3 !== var4)) { _fun0001_ip = 278; continue _fun0001 }
 247:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.MentionableItemTypes;
            var3 = var3.GLOBAL;
            return var1;
 278:
            var8 = var2.result;
            var6 = _closure1_slot9;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 14;
            var3 = var11[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.RoleIcon;
            var3 = {};
            var3['role'] = var8;
            var3 = var6.bind(var5)(var4, var3);
            return var3;
 329:
            var2 = var2.result;
            var11 = var2.user;
            var4 = _closure1_slot9;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 13;
            var2 = var8[var6];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['user'] = var11;
            var2['guildId'] = var10;
            var9 = !var9;
            var2['animate'] = var9;
            var7 = _closure1_slot0;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.AvatarSizes;
            var6 = var6.REFRESH_MEDIUM_32;
            var2['size'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 419:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StatusTypes;
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
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_MOD_SUBTLE;
    var9['backgroundColor'] = var10;
    var4['iconWrapper'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherMentionableOption(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var13 = var3.style;
            var12 = var3.option;
            var _closure2_slot0 = var12;
            var1 = var3.initialValue;
            var _closure2_slot1 = var1;
            var14 = var3.onMentionablePress;
            var _closure2_slot2 = var14;
            var2 = var3.onActionSheetDismiss;
            var _closure2_slot3 = var2;
            var2 = var3.channel;
            var _closure2_slot4 = var2;
            var5 = var3.autoFocus;
            var8 = var3.hasError;
            var3 = var3.onPress;
            var _closure2_slot5 = var3;
            var10 = var2.guild_id;
            var _closure2_slot6 = var10;
            var9 = _closure1_slot4;
            var3 = var9.useState;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 310; continue _fun0003 }
 16:
                    var3 = _closure2_slot1;
                    var4 = var3.type;
                    var3 = 'roleMention';
                    if(!(var3 !== var4)) { _fun0003_ip = 273; continue _fun0003 }
 36:
                    var3 = _closure2_slot1;
                    var4 = var3.type;
                    var3 = 'userMention';
                    if(!(var3 !== var4)) { _fun0003_ip = 159; continue _fun0003 }
 55:
                    var3 = _closure2_slot1;
                    var4 = var3.type;
                    var3 = 'textMention';
                    if(!(var3 === var4)) { _fun0003_ip = 310; continue _fun0003 }
 77:
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 12;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var4 = var4.MentionableItemTypes;
                    var4 = var4.GLOBAL;
                    var3['type'] = var4;
                    var4 = {};
                    var5 = _closure2_slot1;
                    var6 = var5.text;
                    var4['text'] = var6;
                    var5 = var5.text;
                    var4['test'] = var5;
                    var5 = '';
                    var4['description'] = var5;
                    var3['result'] = var4;
                    return var3;
 159:
                    var6 = _closure1_slot7;
                    var4 = var6.getUser;
                    var3 = _closure2_slot1;
                    var3 = var3.userId;
                    var6 = var4.bind(var6)(var3);
                    if(!(var1 != var6)) { _fun0003_ip = 310; continue _fun0003 }
 190:
                    var3 = {};
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 12;
                    var7 = var7[var4];
                    var4 = undefined;
                    var4 = var8.bind(var4)(var7);
                    var4 = var4.MentionableItemTypes;
                    var4 = var4.USER;
                    var3['type'] = var4;
                    var4 = {};
                    var4['user'] = var6;
                    var6 = 0;
                    var4['score'] = var6;
                    var5 = _closure1_slot8;
                    var5 = var5.UNKNOWN;
                    var4['status'] = var5;
                    var5 = '';
                    var4['nick'] = var5;
                    var3['result'] = var4;
                    return var3;
 273:
                    var6 = _closure1_slot6;
                    var5 = var6.getRole;
                    var4 = _closure2_slot6;
                    var2 = _closure2_slot1;
                    var2 = var2.roleId;
                    var2 = var5.bind(var6)(var4, var2);
                    if(!(var1 == var2)) { _fun0003_ip = 312; continue _fun0003 }
 310:
                    return var1;
 312:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.MentionableItemTypes;
                    var3 = var3.ROLE;
                    var1['type'] = var3;
                    var1['result'] = var2;
                    return var1;
                }
            };
            var11 = var3.bind(var9)(var2);
            var3 = _closure1_slot3;
            var4 = undefined;
            var2 = 2;
            var3 = var3.bind(var4)(var11, var2);
            var2 = 0;
            var11 = var3[var2];
            var _closure2_slot7 = var11;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot8 = var2;
            var3 = var9.useEffect;
            var2 = new Array(4);
            var2[0] = var14;
            var14 = var12.name;
            var2[1] = var14;
            var2[2] = var1;
            var2[3] = var11;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 24; continue _fun0004 }
 16:
                    var4 = _closure2_slot7;
                    var3 = var1 == var4;
 24:
                    if(!var3) { _fun0004_ip = 45; continue _fun0004 }
 27:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var2['mentionable'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = var9.useMemo;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var10;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 229; continue _fun0005 }
 16:
                    var2 = _closure2_slot7;
                    var4 = var2.type;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 12;
                    var3 = var3[var8];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.MentionableItemTypes;
                    var3 = var3.USER;
                    if(!(var3 !== var4)) { _fun0005_ip = 168; continue _fun0005 }
 66:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.MentionableItemTypes;
                    var3 = var3.ROLE;
                    if(!(var3 !== var4)) { _fun0005_ip = 151; continue _fun0005 }
 99:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.MentionableItemTypes;
                    var3 = var3.GLOBAL;
                    if(!(var3 !== var4)) { _fun0005_ip = 134; continue _fun0005 }
 132:
                    return var5;
 134:
                    var3 = _closure2_slot7;
                    var3 = var3.result;
                    var3 = var3.text;
                    return var3;
 151:
                    var3 = _closure2_slot7;
                    var3 = var3.result;
                    var3 = var3.name;
                    return var3;
 168:
                    var3 = _closure2_slot7;
                    var3 = var3.result;
                    var6 = var3.user;
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 15;
                    var2 = var8[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = {};
                    var7 = _closure2_slot6;
                    var2['guildId'] = var7;
                    var2['user'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
 229:
                    return var1;
                }
            };
            var9 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 16;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['style'] = var13;
            var1['option'] = var12;
            var1['hasError'] = var8;
            var8 = null;
            var12 = var8 != var11;
            var1['selected'] = var12;
            var12 = var8 != var11;
            var8 = undefined;
            if(!var12) { _fun0002_ip = 285; continue _fun0002 }
 282:
            var8 = var9;
 285:
            var1['selectedItemName'] = var8;
            var9 = _closure1_slot9;
            var8 = _closure1_slot11;
            var7 = {};
            var7['mentionable'] = var11;
            var7['guildId'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var1['leading'] = var7;
            var6 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0006_ip = 23; continue _fun0006 }
 13:
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 23:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 17;
                    var3 = var8[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 19;
                    var2 = var8[var2];
                    var9 = var3.bind(var1)(var2);
                    var2 = 18;
                    var4 = var8[var2];
                    var2 = var8.paths;
                    var4 = var9.bind(var1)(var4, var2);
                    var2 = 12;
                    var2 = var8[var2];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY;
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2['option'] = var8;
                    var8 = _closure2_slot4;
                    var2['channel'] = var8;
                    var8 = function onMentionablePress(arg1) {
                        var1 = arg1;
                        var4 = var1.mentionable;
                        var3 = _closure2_slot8;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var4);
                        var3 = _closure2_slot2;
                        var2 = {};
                        var2['mentionable'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onMentionablePress'] = var8;
                    var7 = _closure2_slot3;
                    var2['onActionSheetDismiss'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var1['autoFocus'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
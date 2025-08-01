// app/modules/guilds_bar/native/GuildsBarPendingGuild.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.getGuildIconSource;
    var _closure1_slot5 = var10;
    var4 = var4.getGuildIconURL;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.GUILD_ITEM_SIZE;
    var _closure1_slot8 = var11;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {};
    var10['width'] = var11;
    var10['height'] = var11;
    var4['guildIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarPendingGuild(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var17 = var1.guildId;
            var _closure2_slot0 = var17;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var18 = 7;
            var1 = var5[var18];
            var4 = undefined;
            var7 = var6.bind(var4)(var1);
            var2 = var7.useGuildsBarAnimatedWrapperStyles;
            var1 = true;
            var7 = var2.bind(var7)(var1, var1);
            var2 = 8;
            var1 = var5[var2];
            var12 = var6.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var1;
            var8 = new Array(1);
            var8[0] = var17;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getGuildId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var11 = var11.bind(var12)(var10, var1, var8);
            var _closure2_slot1 = var11;
            var1 = var5[var2];
            var14 = var6.bind(var4)(var1);
            var13 = var14.useStateFromStores;
            var1 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var1;
            var10 = new Array(1);
            var10[0] = var17;
            var8 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getRequest;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var13.bind(var14)(var12, var8, var10);
            var _closure2_slot2 = var16;
            var2 = var5[var2];
            var13 = var6.bind(var4)(var2);
            var12 = var13.useStateFromStores;
            var10 = new Array(1);
            var10[0] = var1;
            var8 = new Array(2);
            var8[0] = var17;
            var8[1] = var11;
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var5[var1];
            var20 = var2.bind(var4)(var1);
            var22 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot4;
                    var2 = var5.getJoinRequestGuild;
                    var1 = _closure2_slot0;
                    var7 = var2.bind(var5)(var1);
                    var5 = null;
                    var1 = var5 != var7;
                    var6 = undefined;
                    var2 = undefined;
                    if(!var1) { _fun0002_ip = 57; continue _fun0002 }
 38:
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot8;
                    var1 = _closure2_slot1;
                    var2 = var9.bind(var6)(var7, var8, var1);
 57:
                    var1 = {};
                    var9 = var5 == var7;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 73; continue _fun0002 }
 68:
                    var8 = var7.name;
 73:
                    var1['guildName'] = var8;
                    var1['icon'] = var2;
                    var8 = var5 != var2;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 166; continue _fun0002 }
 91:
                    var5 = var5 != var7;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 166; continue _fun0002 }
 100:
                    var5 = _closure1_slot5;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 9;
                    var8 = var10[var4];
                    var8 = var9.bind(var6)(var8);
                    var8 = var8.ImageSizes;
                    var4 = var10[var4];
                    var4 = var9.bind(var6)(var4);
                    var4 = var4.GuildIconSizes;
                    var4 = var4.LARGE;
                    var4 = var8[var4];
                    var3 = _closure2_slot1;
                    var2 = var5.bind(var6)(var7, var4, var3);
 166:
                    var1['asset'] = var2;
                    return var1;
                }
            };
            var24 = var13;
            var23 = var10;
            var21 = var8;
            var1 = var24[var12](var23, var22, var21, var20, var19);
            var15 = var1.asset;
            var12 = var1.icon;
            var13 = var1.guildName;
            var1 = 11;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = 0;
            var1['mentionCount'] = var5;
            var5 = null;
            var8 = var5 == var16;
            var6 = undefined;
            if(var8) { _fun0001_ip = 285; continue _fun0001 }
 279:
            var6 = var16.applicationStatus;
 285:
            var1['joinRequestState'] = var6;
            var1 = var2.bind(var4)(var1);
            var6 = var1.badge;
            var14 = var1.cutouts;
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var2 = new Array(2);
            var2[0] = var17;
            var19 = var5 == var16;
            var1 = undefined;
            if(var19) { _fun0001_ip = 339; continue _fun0001 }
 333:
            var1 = var16.applicationStatus;
 339:
            var2[1] = var1;
            var1 = function() {
                var1 = {};
                var2 = function onPress() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure2_slot2;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        var5 = undefined;
                        if(var3) { _fun0003_ip = 30; continue _fun0003 }
 20:
                        var3 = _closure2_slot2;
                        var5 = var3.applicationStatus;
 30:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 12;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.GuildJoinRequestApplicationStatuses;
                        var4 = var4.STARTED;
                        if(!(var4 !== var5)) { _fun0003_ip = 295; continue _fun0003 }
 72:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.GuildJoinRequestApplicationStatuses;
                        var4 = var4.SUBMITTED;
                        if(!(var4 !== var5)) { _fun0003_ip = 258; continue _fun0003 }
 108:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.GuildJoinRequestApplicationStatuses;
                        var4 = var4.APPROVED;
                        if(!(var4 !== var5)) { _fun0003_ip = 227; continue _fun0003 }
 141:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.GuildJoinRequestApplicationStatuses;
                        var4 = var4.REJECTED;
                        if(!(var4 === var5)) { _fun0003_ip = 330; continue _fun0003 }
 177:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openMemberVerificationRejectedAlert;
                        var4 = {};
                        var7 = _closure2_slot0;
                        var4['guildId'] = var7;
                        var7 = true;
                        var4['canWithdraw'] = var7;
                        var4 = var5.bind(var6)(var4);
                        _fun0003_ip = 330; continue _fun0003;
 227:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 14;
                        var4 = var6[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var1)(var4);
                        _fun0003_ip = 330; continue _fun0003;
 258:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openMemberVerificationPendingAlert;
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var6)(var4);
                        _fun0003_ip = 330; continue _fun0003;
 295:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 13;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.openMemberVerificationIncompleteAlert;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
 330:
                        return var1;
                    }
                };
                var1['onPress'] = var2;
                return var1;
            };
            var8 = var8.bind(var10)(var1, var2);
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var10 = 15;
            var10 = var1[var10];
            var10 = var2.bind(var4)(var10);
            var10 = var10.bind(var4)(var17, var12, var15);
            var16 = _closure1_slot3;
            var15 = var16.useMemo;
            var12 = new Array(1);
            var12[0] = var17;
            var3 = function() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var _closure3_slot0 = var5;
                var1 = {};
                var4 = var5.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.label;
                    var1['name'] = var3;
                    var2 = var2.label;
                    var1['label'] = var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['accessibilityActions'] = var3;
                var2 = function onAccessibilityAction(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure3_slot0;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.label;
                            var1 = _closure4_slot0;
                            var1 = var1.nativeEvent;
                            var1 = var1.actionName;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var2.bind(var3)(var1);
                        var4 = null;
                        var1 = var4 == var2;
                        if(var1) { _fun0004_ip = 52; continue _fun0004 }
 43:
                        var3 = var2.action;
                        var1 = var4 == var3;
 52:
                        if(var1) { _fun0004_ip = 64; continue _fun0004 }
 55:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
 64:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onAccessibilityAction'] = var2;
                return var1;
            };
            var3 = var15.bind(var16)(var3, var12);
            var16 = var3.accessibilityActions;
            var15 = var3.onAccessibilityAction;
            var12 = _closure1_slot0;
            var3 = 17;
            var3 = var1[var3];
            var12 = var12.bind(var4)(var3);
            var3 = var12.useSharedValue;
            var12 = var3.bind(var12)(var17);
            var3 = _closure1_slot9;
            var1 = var1[var18];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['id'] = var17;
            var1['accessibilityActions'] = var16;
            var1['onAccessibilityAction'] = var15;
            var1['cutouts'] = var14;
            var1['selected'] = var11;
            var1['sharedId'] = var12;
            var12 = !var11;
            var1['circle'] = var12;
            var1['overState'] = var4;
            var12 = false;
            var1['unread'] = var12;
            var14 = var5 != var13;
            var12 = '';
            if(!var14) { _fun0001_ip = 529; continue _fun0001 }
 526:
            var12 = var13;
 529:
            var1['label'] = var12;
            var1['config'] = var8;
            var1['styles'] = var7;
            var1['externalChildren'] = var6;
            if(!(var5 == var10)) { _fun0001_ip = 628; continue _fun0001 }
 551:
            var7 = _closure1_slot9;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var8 = 9;
            var5 = var12[var8];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['value'] = var13;
            var5['selected'] = var11;
            var5['animate'] = var11;
            var11 = _closure1_slot0;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.GuildIconSizes;
            var8 = var8.LARGE;
            var5['size'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            _fun0001_ip = 678; continue _fun0001;
 628:
            var8 = _closure1_slot9;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 18;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['source'] = var10;
            var9 = _closure1_slot10;
            var9 = var9.guildIcon;
            var6['style'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 678:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarPendingGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
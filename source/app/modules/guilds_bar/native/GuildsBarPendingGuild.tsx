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
case 0:
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
case 0:
                    var5 = _closure1_slot4;
                    var2 = var5.getJoinRequestGuild;
                    var1 = _closure2_slot0;
                    var7 = var2.bind(var5)(var1);
                    var5 = null;
                    var1 = var5 != var7;
                    var6 = undefined;
                    var2 = undefined;
                    if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var9 = _closure1_slot6;
                    var8 = _closure1_slot8;
                    var1 = _closure2_slot1;
                    var2 = var9.bind(var6)(var7, var8, var1);
case 2:
                    var1 = {};
                    var9 = var5 == var7;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var8 = var7.name;
case 4:
                    var1['guildName'] = var8;
                    var1['icon'] = var2;
                    var8 = var5 != var2;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = var5 != var7;
                    var2 = undefined;
                    if(!var5) { _fun0002_ip = 6; continue _fun0002 }
case 8:
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
case 6:
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
            if(var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = var16.applicationStatus;
case 9:
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
            if(var19) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var16.applicationStatus;
case 11:
            var2[1] = var1;
            var1 = function() {
                var1 = {};
                var2 = function onPress() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        var5 = undefined;
                        if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var3 = _closure2_slot2;
                        var5 = var3.applicationStatus;
case 13:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 12;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.GuildJoinRequestApplicationStatuses;
                        var4 = var4.STARTED;
                        if(!(var4 !== var5)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.GuildJoinRequestApplicationStatuses;
                        var4 = var4.SUBMITTED;
                        if(!(var4 !== var5)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.GuildJoinRequestApplicationStatuses;
                        var4 = var4.APPROVED;
                        if(!(var4 !== var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var1)(var4);
                        var4 = var4.GuildJoinRequestApplicationStatuses;
                        var4 = var4.REJECTED;
                        if(!(var4 === var5)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
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
                        _fun0003_ip = 21; continue _fun0003;
case 19:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 14;
                        var4 = var6[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var1)(var4);
                        _fun0003_ip = 21; continue _fun0003;
case 17:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.openMemberVerificationPendingAlert;
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var6)(var4);
                        _fun0003_ip = 21; continue _fun0003;
case 15:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 13;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.openMemberVerificationIncompleteAlert;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
case 21:
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
case 0:
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
                        if(var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var3 = var2.action;
                        var1 = var4 == var3;
case 23:
                        if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                        var1 = var2.action;
                        var1 = var1.bind(var2)();
case 25:
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
            if(!var14) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var12 = var13;
case 27:
            var1['label'] = var12;
            var1['config'] = var8;
            var1['styles'] = var7;
            var1['externalChildren'] = var6;
            if(!(var5 == var10)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
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
            _fun0001_ip = 31; continue _fun0001;
case 29:
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
case 31:
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
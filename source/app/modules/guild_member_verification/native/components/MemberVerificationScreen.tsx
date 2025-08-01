// app/modules/guild_member_verification/native/components/MemberVerificationScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function MemberVerificationRouteView(arg1) {
        var4 = _closure1_slot11;
        var2 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 9;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var6 = arg1;
        var7 = var1;
        var5 = copyDataProperties(var7, var6);
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function ExistingJoinRequestHandler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.guildId;
            var _closure2_slot0 = var11;
            var10 = var1.onClose;
            var _closure2_slot1 = var10;
            var2 = var1.children;
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 10;
            var7 = var8[var3];
            var4 = undefined;
            var13 = var6.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var13)(var9, var7);
            var _closure2_slot2 = var12;
            var7 = var8[var3];
            var15 = var6.bind(var4)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var7;
            var9 = new Array(1);
            var9[0] = var12;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = null;
                    var4 = var2 != var1;
                    var1 = null;
                    if(!var4) { _fun0002_ip = 62; continue _fun0002 }
 18:
                    var5 = _closure1_slot7;
                    var4 = var5.getDefaultChannel;
                    var3 = _closure2_slot2;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var4 = var2 == var3;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 59; continue _fun0002 }
 54:
                    var2 = var3.id;
 59:
                    var1 = var2;
 62:
                    return var1;
                }
            };
            var9 = var14.bind(var15)(var13, var7, var9);
            var _closure2_slot3 = var9;
            var3 = var8[var3];
            var13 = var6.bind(var4)(var3);
            var7 = var13.useStateFromStores;
            var3 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getRequest;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var7.bind(var13)(var6, var3);
            var7 = _closure1_slot1;
            var3 = 11;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.bind(var4)(var6);
            var _closure2_slot4 = var3;
            var13 = _closure1_slot4;
            var8 = var13.useEffect;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var3;
            var7[2] = var10;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    var5 = undefined;
                    if(var3) { _fun0003_ip = 30; continue _fun0003 }
 20:
                    var3 = _closure2_slot4;
                    var5 = var3.applicationStatus;
 30:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var7 = 12;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.GuildJoinRequestApplicationStatuses;
                    var4 = var4.SUBMITTED;
                    if(!(var4 !== var5)) { _fun0003_ip = 160; continue _fun0003 }
 69:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var4 = var6.bind(var1)(var4);
                    var4 = var4.GuildJoinRequestApplicationStatuses;
                    var4 = var4.REJECTED;
                    if(!(var4 === var5)) { _fun0003_ip = 203; continue _fun0003 }
 102:
                    var4 = _closure2_slot1;
                    var4 = var4.bind(var1)();
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
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
                    _fun0003_ip = 203; continue _fun0003;
 160:
                    var4 = _closure2_slot1;
                    var4 = var4.bind(var1)();
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 13;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openMemberVerificationPendingAlert;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
 203:
                    return var1;
                }
            };
            var6 = var8.bind(var13)(var6, var7);
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = new Array(4);
            var6[0] = var12;
            var6[1] = var11;
            var6[2] = var10;
            var6[3] = var9;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0004_ip = 29; continue _fun0004 }
 13:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0004_ip = 29; continue _fun0004 }
 21:
                    var2 = _closure2_slot3;
                    if(!(var3 == var2)) { _fun0004_ip = 49; continue _fun0004 }
 29:
                    var2 = _closure2_slot0;
                    if(!(var3 == var2)) { _fun0004_ip = 109; continue _fun0004 }
 37:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0004_ip = 109; continue _fun0004;
 49:
                    var5 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.transitionTo;
                    var6 = _closure1_slot10;
                    var5 = var6.CHANNEL;
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot3;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
 109:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var5, var6);
            var5 = null;
            var6 = var5 == var3;
            var5 = undefined;
            if(var6) { _fun0001_ip = 301; continue _fun0001 }
 295:
            var5 = var3.applicationStatus;
 301:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var7 = 12;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.GuildJoinRequestApplicationStatuses;
            var3 = var3.SUBMITTED;
            if(!(var3 !== var5)) { _fun0001_ip = 405; continue _fun0001 }
 337:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.GuildJoinRequestApplicationStatuses;
            var3 = var3.APPROVED;
            if(!(var3 !== var5)) { _fun0001_ip = 405; continue _fun0001 }
 370:
            var6 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.GuildJoinRequestApplicationStatuses;
            var3 = var3.REJECTED;
            if(!(var3 !== var5)) { _fun0001_ip = 405; continue _fun0001 }
 403:
            return var2;
 405:
            var3 = _closure1_slot11;
            var2 = _closure1_slot13;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var4['flex'] = var9;
    var9 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['flexLoading'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var4['scrollContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = function Loading() {
        var1 = _closure1_slot12;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var5.flexLoading;
        var1['style'] = var5;
        var7 = _closure1_slot11;
        var6 = _closure1_slot6;
        var5 = {'animating': true, 'color': null, 'size': 'large'};
        var9 = _closure1_slot1;
        var10 = _closure1_slot3;
        var8 = 8;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.unsafe_rawColors;
        var8 = var8.BRAND_500;
        var5['color'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var4;
    var4 = 17;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.makeAuthenticated;
    var2 = function MemberVerificationRouteContainer(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var7 = var2.navigation;
            var _closure2_slot0 = var7;
            var2 = var2.route;
            var2 = var2.params;
            var13 = var2.guildId;
            var3 = _closure1_slot12;
            var5 = undefined;
            var9 = var3.bind(var5)();
            var6 = _closure1_slot4;
            var4 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var9 = var2.routes;
                    var5 = var2.index;
                    var3 = var9.length;
                    var2 = 1;
                    if(!(!(var3 > var2))) { _fun0006_ip = 92; continue _fun0006 }
 40:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 15;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.navigateToRootTab;
                    var3 = {};
                    var7 = 'messages';
                    var3['screen'] = var7;
                    var3 = var4.bind(var6)(var3);
                    _fun0006_ip = 220; continue _fun0006;
 92:
                    var2 = var5 - var2;
                    var3 = var9[var2];
                    var8 = null;
                    var4 = var8 == var3;
                    var6 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0006_ip = 118; continue _fun0006 }
 113:
                    var2 = var3.name;
 118:
                    var7 = 'member-verification';
                    if(!(var7 === var2)) { _fun0006_ip = 206; continue _fun0006 }
 128:
                    var4 = 0;
                    var3 = var5;
                    if(!(var3 >= var4)) { _fun0006_ip = 220; continue _fun0006 }
 137:
                    var10 = var9[var3];
                    var2 = var3;
                    if(!(var8 != var10)) { _fun0006_ip = 220; continue _fun0006 }
 148:
                    var10 = var10.name;
                    if(!(var7 === var10)) { _fun0006_ip = 166; continue _fun0006 }
 157:
                    var3 = var2 - 1;
                    if(var3 >= var4) { _fun0006_ip = 137; continue _fun0006 }
 164:
                    _fun0006_ip = 220; continue _fun0006;
 166:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var3 = 15;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.popScreens;
                    var2 = var5 - var2;
                    var2 = var3.bind(var4)(var2);
                    _fun0006_ip = 220; continue _fun0006;
 206:
                    var2 = _closure2_slot0;
                    var1 = var2.goBack;
                    var1 = var1.bind(var2)();
 220:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var4.bind(var6)(var1, var3);
            var1 = null;
            if(!(var1 != var13)) { _fun0005_ip = 182; continue _fun0005 }
 81:
            var4 = _closure1_slot11;
            var3 = _closure1_slot15;
            var1 = {};
            var1['guildId'] = var13;
            var1['onClose'] = var12;
            var8 = _closure1_slot11;
            var7 = _closure1_slot1;
            var10 = _closure1_slot3;
            var6 = 16;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var9 = var9.flex;
            var6['style'] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot14;
            var9 = {};
            var9['guildId'] = var13;
            var9['onClose'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0005_ip = 198; continue _fun0005;
 182:
            var4 = _closure1_slot11;
            var3 = _closure1_slot13;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
 198:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/MemberVerificationScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx
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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HappeningNowCardTrackingType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var4 = var4.LARGE;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'display': 'flex', 'alignItems': 'center'};
    var4['content'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.index;
            var _closure2_slot0 = var14;
            var13 = var2.userId;
            var _closure2_slot1 = var13;
            var18 = var2.guildId;
            var _closure2_slot2 = var18;
            var8 = var2.fullwidth;
            var6 = var2.panelVariant;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var2 = _closure1_slot11;
            var9 = var2.bind(var5)();
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 9;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var7 = var2.analyticsLocations;
            _closure2_slot3 = var7;
            var3 = _closure1_slot0;
            var2 = 10;
            var4 = var10[var2];
            var16 = var3.bind(var5)(var4);
            var15 = var16.useStateFromStores;
            var4 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var4;
            var11 = new Array(1);
            var11[0] = var13;
            var4 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getUser;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var15.bind(var16)(var12, var4, var11);
            _closure2_slot4 = var19;
            var4 = _closure1_slot3;
            var12 = var4.useCallback;
            var11 = new Array(5);
            var11[0] = var14;
            var11[1] = var18;
            var11[2] = var13;
            var11[3] = var19;
            var11[4] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot8;
                    var5 = var3.ACTIVITY_CARD_CLICKED;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var4['order'] = var8;
                    var8 = _closure2_slot2;
                    var4['guild_id'] = var8;
                    var8 = _closure1_slot7;
                    var8 = var8.INDIVIDUAL_USER_CARD;
                    var4['type'] = var8;
                    var9 = _closure2_slot1;
                    var8 = new Array(1);
                    var8[0] = var9;
                    var4['highlighted_user_ids'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 13;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 12;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.default;
                        var2 = {};
                        var4 = _closure2_slot4;
                        var4 = var4.id;
                        var2['userId'] = var4;
                        var4 = _closure2_slot4;
                        var2['localUser'] = var4;
                        var1 = _closure2_slot3;
                        var2['sourceAnalyticsLocations'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var7 = var12.bind(var4)(var7, var11);
            var2 = var10[var2];
            var12 = var3.bind(var5)(var2);
            var11 = var12.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var2;
            var3 = new Array(2);
            var3[0] = var18;
            var3[1] = var19;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = {};
                    var4 = _closure1_slot5;
                    var5 = var4.getStatus;
                    var3 = _closure2_slot4;
                    var3 = var3.id;
                    var6 = _closure2_slot2;
                    var3 = var5.bind(var4)(var3, var6);
                    var1['status'] = var3;
                    var5 = var4.getActivities;
                    var3 = _closure2_slot4;
                    var3 = var3.id;
                    var3 = var5.bind(var4)(var3, var6);
                    var1['activities'] = var3;
                    var3 = var4.isMobileOnline;
                    var2 = _closure2_slot4;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['isMobileOnline'] = var2;
                    _fun0003_ip = 8; continue _fun0003;
case 6:
                    var1 = {};
case 8:
                    return var1;
                }
            };
            var2 = var11.bind(var12)(var10, var2, var3);
            var15 = var2.status;
            _closure2_slot5 = var15;
            var14 = var2.activities;
            var13 = var2.isMobileOnline;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var15;
            var2[1] = var19;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 9; continue _fun0004 }
case 7:
                    var4 = _closure2_slot4;
                    var3 = var4.isSystemUser;
                    var3 = var3.bind(var4)();
                    var1 = null;
                    if(var3) { _fun0004_ip = 10; continue _fun0004 }
case 9:
                    var1 = _closure2_slot5;
case 10:
                    return var1;
                }
            };
            var12 = var3.bind(var4)(var1, var2);
            var1 = null;
            if(!(var1 != var19)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 14;
            var2 = var10[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var4.getName;
            var2 = var2.bind(var4)(var19);
            var11 = new Array(2);
            var11[0] = var2;
            var4 = _closure1_slot0;
            var2 = 15;
            var2 = var10[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getStatusLabel;
            var2 = var2.bind(var4)(var15);
            var11[1] = var2;
            var4 = var11.join;
            var2 = ', ';
            var11 = var4.bind(var11)(var2);
            var4 = _closure1_slot9;
            var2 = 16;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['onPress'] = var7;
            var7 = 'small';
            if(!var8) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var7 = 'full';
case 13:
            var2['width'] = var7;
            var2['panelVariant'] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.content;
            var6['style'] = var9;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var9 = 7;
            var9 = var16[var9];
            var10 = var15.bind(var5)(var9);
            var9 = {};
            var9['user'] = var19;
            var19 = var19.avatarDecoration;
            var9['avatarDecoration'] = var19;
            var9['guildId'] = var18;
            var17 = _closure1_slot10;
            var9['size'] = var17;
            var9['isMobileOnline'] = var13;
            var13 = 17;
            var13 = var16[var13];
            var13 = var15.bind(var5)(var13);
            var13 = var13.bind(var5)(var14);
            var9['streaming'] = var13;
            var9['status'] = var12;
            var9['accessibilityLabel'] = var11;
            var11 = true;
            var9['autoStatusCutout'] = var11;
            var9 = var8.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 11:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
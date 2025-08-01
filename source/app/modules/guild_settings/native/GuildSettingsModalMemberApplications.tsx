// app/modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.ActivityIndicator;
    var _closure1_slot4 = var5;
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.TABLE_ROW_HEIGHT;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot8 = var5;
    var5 = var2.jsxs;
    var _closure1_slot9 = var5;
    var2 = var2.Fragment;
    var _closure1_slot10 = var2;
    var2 = 5;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {'paddingHorizontal': null, 'flex': 1, 'marginTop': 16};
    var11 = 6;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['paddingHorizontal'] = var13;
    var2['containerInner'] = var10;
    var10 = {};
    var13 = 32;
    var10['padding'] = var13;
    var2['spinnerContainer'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_BRAND;
    var10['color'] = var11;
    var2['spinner'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot11 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.user;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.getGlobalName;
            var8 = var1.bind(var2)(var10);
            var3 = _closure1_slot9;
            var2 = _closure1_slot5;
            var1 = {};
            var12 = _closure1_slot8;
            var6 = _closure1_slot0;
            var11 = 8;
            var5 = var5[var11];
            var5 = var6.bind(var4)(var5);
            var9 = var5.Text;
            var5 = {};
            var6 = 'text-md/semibold';
            var5['variant'] = var6;
            var6 = null;
            var13 = var8;
            if(!(var6 == var13)) { _fun0001_ip = 103; continue _fun0001 }
 98:
            var13 = var10.username;
 103:
            var5['children'] = var13;
            var9 = var12.bind(var4)(var9, var5);
            var5 = new Array(2);
            var5[0] = var9;
            var6 = var6 != var8;
            if(!var6) { _fun0001_ip = 179; continue _fun0001 }
 128:
            var9 = _closure1_slot8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {};
            var11 = 'text-xs/medium';
            var7['variant'] = var11;
            var10 = var10.username;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 179:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot12 = var2;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = var3.joinRequest;
            var _closure2_slot0 = var2;
            var7 = var3.start;
            var6 = var3.end;
            var5 = _closure1_slot3;
            var4 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var4.bind(var5)(var1, var3);
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 261; continue _fun0002 }
 67:
            var11 = var2.user;
            if(!(var1 != var11)) { _fun0002_ip = 259; continue _fun0002 }
 79:
            var2 = var1 != var11;
            var16 = null;
            if(!var2) { _fun0002_ip = 121; continue _fun0002 }
 88:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.getUserAvatarSource;
            var16 = var2.bind(var3)(var11);
 121:
            var5 = _closure1_slot8;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 11;
            var2 = var15[var2];
            var4 = undefined;
            var2 = var14.bind(var4)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var10 = true;
            var2['arrow'] = var10;
            var12 = _closure1_slot1;
            var13 = 12;
            var10 = var15[var13];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var10['source'] = var16;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.AvatarSizes;
            var13 = var13.SMALL;
            var10['size'] = var13;
            var10 = var5.bind(var4)(var12, var10);
            var2['icon'] = var10;
            var10 = _closure1_slot12;
            var9 = {};
            var9['user'] = var11;
            var9 = var5.bind(var4)(var10, var9);
            var2['label'] = var9;
            var2['onPress'] = var8;
            var2['start'] = var7;
            var2['end'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 259:
            return var1;
 261:
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot13 = var5;
    var5 = var8.memo;
    var4 = function GuildSettingsModalMemberApplications(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var12 = var1.guildId;
            var11 = var1.applicationStatus;
            var _closure2_slot0 = var11;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var5 = undefined;
            var3 = var7.bind(var5)(var1);
            var1 = var3.useNavigation;
            var3 = var1.bind(var3)();
            var _closure2_slot1 = var3;
            var1 = _closure1_slot11;
            var8 = var1.bind(var5)();
            var4 = _closure1_slot1;
            var1 = 14;
            var1 = var9[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var17 = var1.bottom;
            var1 = 15;
            var1 = var9[var1];
            var10 = var7.bind(var5)(var1);
            var4 = var10.useSortedMemberApplications;
            var1 = {};
            var1['guildId'] = var12;
            var1['applicationStatus'] = var11;
            var13 = 16;
            var13 = var9[var13];
            var13 = var7.bind(var5)(var13);
            var13 = var13.GuildJoinRequestSortOrders;
            var13 = var13.TIMESTAMP_DESC;
            var1['sortOrder'] = var13;
            var1 = var4.bind(var10)(var1);
            var16 = var1.guildJoinRequests;
            var _closure2_slot2 = var16;
            var1 = 17;
            var1 = var9[var1];
            var10 = var7.bind(var5)(var1);
            var4 = var10.usePaginatedMemberApplications;
            var1 = {};
            var1['guildId'] = var12;
            var1['guildJoinRequests'] = var16;
            var1 = var4.bind(var10)(var1);
            var4 = var1.fetchNextPage;
            var _closure2_slot3 = var4;
            var1 = 18;
            var1 = var9[var1];
            var10 = var7.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isFetching;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var9.bind(var10)(var7, var1);
            var7 = _closure1_slot3;
            var10 = var7.useCallback;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var4;
            var4 = function() {
                var4 = _closure2_slot3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.GuildJoinRequestSortOrders;
                var3 = var3.TIMESTAMP_DESC;
                var2 = _closure2_slot0;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var14 = var10.bind(var7)(var4, var9);
            var _closure2_slot4 = var14;
            var9 = var7.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure2_slot1;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function headerRight() {
                    var1 = null;
                    return var1;
                };
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var9.bind(var7)(var3, var4);
            var9 = var7.useEffect;
            var4 = new Array(2);
            var4[0] = var14;
            var3 = var16.length;
            var4[1] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot2;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0004_ip = 28; continue _fun0004 }
 18:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var7)(var3, var4);
            var9 = var7.useCallback;
            var3 = var16.length;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = var2.item;
                var5 = var2.index;
                var4 = _closure1_slot8;
                var3 = _closure1_slot13;
                var2 = {};
                var2['joinRequest'] = var1;
                var1 = 0;
                var1 = var1 === var5;
                var2['start'] = var1;
                var1 = _closure2_slot2;
                var6 = var1.length;
                var1 = 1;
                var1 = var6 - var1;
                var1 = var5 === var1;
                var2['end'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var15 = var9.bind(var7)(var3, var4);
            var4 = var7.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.joinRequestId;
                return var1;
            };
            var2 = new Array(0);
            var18 = var4.bind(var7)(var3, var2);
            if(var1) { _fun0003_ip = 744; continue _fun0003 }
 409:
            var3 = _closure1_slot9;
            var2 = _closure1_slot10;
            var1 = {};
            var9 = _closure1_slot8;
            var7 = _closure1_slot5;
            var4 = {};
            var10 = var8.containerInner;
            var4['style'] = var10;
            var11 = var16.length;
            var10 = 0;
            if(!(var10 === var11)) { _fun0003_ip = 564; continue _fun0003 }
 450:
            var12 = _closure1_slot8;
            var11 = _closure1_slot1;
            var22 = _closure1_slot2;
            var10 = 20;
            var10 = var22[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var21 = _closure1_slot0;
            var13 = 21;
            var13 = var22[var13];
            var13 = var21.bind(var5)(var13);
            var13 = var13.NoResults;
            var10['Illustration'] = var13;
            var13 = 22;
            var19 = var22[var13];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var13 = var22[var13];
            var13 = var21.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13./wqiSk;
            var13 = var19.bind(var20)(var13);
            var10['title'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            _fun0003_ip = 672; continue _fun0003;
 564:
            var13 = _closure1_slot8;
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 19;
            var11 = var19[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.FlashList;
            var11 = {};
            var11['keyExtractor'] = var18;
            var11['data'] = var16;
            var11['renderItem'] = var15;
            var15 = _closure1_slot6;
            var11['estimatedItemSize'] = var15;
            var15 = {};
            var18 = _closure1_slot1;
            var16 = 6;
            var16 = var19[var16];
            var16 = var18.bind(var5)(var16);
            var16 = var16.spacing;
            var16 = var16.PX_16;
            var16 = var17 + var16;
            var15['paddingBottom'] = var16;
            var11['contentContainerStyle'] = var15;
            var11['onEndReached'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 672:
            var4['children'] = var10;
            var7 = var9.bind(var5)(var7, var4);
            var4 = new Array(2);
            var4[0] = var7;
            var10 = _closure1_slot8;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 23;
            var7 = var11[var7];
            var7 = var9.bind(var5)(var7);
            var9 = var7.NavScrim;
            var7 = {};
            var7 = var10.bind(var5)(var9, var7);
            var4[1] = var7;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 809; continue _fun0003;
 744:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var8.spinnerContainer;
            var2['style'] = var7;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = 'large';
            var6['size'] = var9;
            var8 = var8.spinner;
            var8 = var8.color;
            var6['color'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 809:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 24;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MemberApplicationUser'] = var2;
    return var1;
})();
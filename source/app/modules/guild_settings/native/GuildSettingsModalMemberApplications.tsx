// app/modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
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
    var2 = native4;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.TABLE_ROW_HEIGHT;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot6 = var5;
    var5 = var2.jsxs;
    var _closure1_slot7 = var5;
    var2 = var2.Fragment;
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var7[var2];
    var9 = var6.bind(var1)(var2);
    var5 = var9.createStyles;
    var2 = {};
    var10 = {'paddingHorizontal': null, 'flex': 1, 'marginTop': 16};
    var11 = 5;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var10['paddingHorizontal'] = var11;
    var2['containerInner'] = var10;
    var2 = var5.bind(var9)(var2);
    var _closure1_slot9 = var2;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.user;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.getGlobalName;
            var8 = var1.bind(var2)(var10);
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var12 = _closure1_slot6;
            var6 = _closure1_slot0;
            var11 = 7;
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
            var9 = _closure1_slot6;
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
    var _closure1_slot10 = var2;
    var9 = var8.memo;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.joinRequest;
            var7 = var1.start;
            var6 = var1.end;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 237; continue _fun0002 }
 28:
            var10 = var2.user;
            if(!(var1 != var10)) { _fun0002_ip = 235; continue _fun0002 }
 40:
            var2 = var1 != var10;
            var15 = null;
            if(!var2) { _fun0002_ip = 85; continue _fun0002 }
 49:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.getUserAvatarSource;
            var15 = var2.bind(var3)(var10);
 85:
            var5 = _closure1_slot6;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 9;
            var2 = var14[var2];
            var4 = undefined;
            var2 = var13.bind(var4)(var2);
            var3 = var2.TableRow;
            var2 = {};
            var9 = true;
            var2['arrow'] = var9;
            var11 = _closure1_slot1;
            var12 = 10;
            var9 = var14[var12];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['source'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.AvatarSizes;
            var12 = var12.SMALL;
            var9['size'] = var12;
            var9 = var5.bind(var4)(var11, var9);
            var2['icon'] = var9;
            var9 = _closure1_slot10;
            var8 = {};
            var8['user'] = var10;
            var8 = var5.bind(var4)(var9, var8);
            var2['label'] = var8;
            var8 = function onPress() {
                var1 = undefined;
                return var1;
            };
            var2['onPress'] = var8;
            var2['start'] = var7;
            var2['end'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 235:
            return var1;
 237:
            return var1;
        }
    };
    var5 = var9.bind(var8)(var5);
    var _closure1_slot11 = var5;
    var5 = var8.memo;
    var4 = function GuildSettingsModalMemberApplications(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var8 = var2.guildId;
            var10 = var2.applicationStatus;
            var _closure2_slot0 = var10;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var4 = undefined;
            var3 = var5.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot1 = var2;
            var3 = _closure1_slot9;
            var9 = var3.bind(var4)();
            var11 = _closure1_slot1;
            var3 = 12;
            var3 = var7[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var16 = var3.bottom;
            var3 = 13;
            var3 = var7[var3];
            var12 = var5.bind(var4)(var3);
            var11 = var12.useSortedMemberApplications;
            var3 = {};
            var3['guildId'] = var8;
            var3['applicationStatus'] = var10;
            var13 = 14;
            var13 = var7[var13];
            var13 = var5.bind(var4)(var13);
            var13 = var13.GuildJoinRequestSortOrders;
            var13 = var13.TIMESTAMP_DESC;
            var3['sortOrder'] = var13;
            var3 = var11.bind(var12)(var3);
            var15 = var3.guildJoinRequests;
            var _closure2_slot2 = var15;
            var3 = 15;
            var3 = var7[var3];
            var7 = var5.bind(var4)(var3);
            var5 = var7.usePaginatedMemberApplications;
            var3 = {};
            var3['guildId'] = var8;
            var3['guildJoinRequests'] = var15;
            var3 = var5.bind(var7)(var3);
            var3 = var3.fetchNextPage;
            var _closure2_slot3 = var3;
            var5 = _closure1_slot3;
            var8 = var5.useCallback;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var3;
            var3 = function() {
                var4 = _closure2_slot3;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.GuildJoinRequestSortOrders;
                var3 = var3.TIMESTAMP_DESC;
                var2 = _closure2_slot0;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var13 = var8.bind(var5)(var3, var7);
            var _closure2_slot4 = var13;
            var7 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
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
            var2 = var7.bind(var5)(var2, var3);
            var7 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var13;
            var2 = var15.length;
            var3[1] = var2;
            var2 = function() {
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
            var2 = var7.bind(var5)(var2, var3);
            var7 = var5.useCallback;
            var2 = var15.length;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = var2.item;
                var5 = var2.index;
                var4 = _closure1_slot6;
                var3 = _closure1_slot11;
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
            var14 = var7.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.joinRequestId;
                return var1;
            };
            var1 = new Array(0);
            var17 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var1 = {};
            var8 = _closure1_slot6;
            var7 = _closure1_slot4;
            var5 = {};
            var9 = var9.containerInner;
            var5['style'] = var9;
            var10 = var15.length;
            var9 = 0;
            if(!(var9 === var10)) { _fun0003_ip = 516; continue _fun0003 }
 402:
            var11 = _closure1_slot6;
            var10 = _closure1_slot1;
            var21 = _closure1_slot2;
            var9 = 17;
            var9 = var21[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var20 = _closure1_slot0;
            var12 = 18;
            var12 = var21[var12];
            var12 = var20.bind(var4)(var12);
            var12 = var12.NoResults;
            var9['Illustration'] = var12;
            var12 = 19;
            var18 = var21[var12];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var12 = var21[var12];
            var12 = var20.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12./wqiSk;
            var12 = var18.bind(var19)(var12);
            var9['title'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            _fun0003_ip = 624; continue _fun0003;
 516:
            var12 = _closure1_slot6;
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 16;
            var10 = var18[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.FlashList;
            var10 = {};
            var10['keyExtractor'] = var17;
            var10['data'] = var15;
            var10['renderItem'] = var14;
            var14 = _closure1_slot5;
            var10['estimatedItemSize'] = var14;
            var14 = {};
            var17 = _closure1_slot1;
            var15 = 5;
            var15 = var18[var15];
            var15 = var17.bind(var4)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_16;
            var15 = var16 + var15;
            var14['paddingBottom'] = var15;
            var10['contentContainerStyle'] = var14;
            var10['onEndReached'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 624:
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 20;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NavScrim;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MemberApplicationUser'] = var2;
    return var1;
})();
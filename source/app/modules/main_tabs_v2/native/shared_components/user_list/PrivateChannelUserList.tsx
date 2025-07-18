// app/modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var8 = var4.RelationshipTypes;
    var _closure1_slot7 = var8;
    var4 = var4.MAX_GROUP_DM_PARTICIPANTS;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function PrivateChannelUserList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var16 = var1.channelId;
            var _closure2_slot0 = var16;
            var8 = var1.disableStickySections;
            var7 = var1.listStyleOverride;
            var6 = var1.disableBottomSafeZone;
            var5 = var1.insetEnd;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 6;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var15 = var3.analyticsLocations;
            var _closure2_slot1 = var15;
            var11 = _closure1_slot0;
            var3 = 7;
            var12 = var10[var3];
            var17 = var11.bind(var4)(var12);
            var14 = var17.useStateFromStores;
            var12 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var14.bind(var17)(var13, var12);
            var _closure2_slot2 = var12;
            var3 = var10[var3];
            var17 = var11.bind(var4)(var3);
            var14 = var17.useStateFromStoresArray;
            var3 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var3;
            var11 = new Array(1);
            var11[0] = var12;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0002_ip = 22; continue _fun0002 }
 13:
                    var1 = new Array(0);
                    _fun0002_ip = 163; continue _fun0002;
 22:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 8;
                    var4 = var7[var4];
                    var6 = undefined;
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure2_slot2;
                    var3 = var3.recipients;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.map;
                    var8 = _closure1_slot6;
                    var3 = var8.getUser;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.unshift;
                    var3 = var8.getCurrentUser;
                    var3 = var3.bind(var8)();
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.filter;
                    var5 = _closure1_slot0;
                    var2 = 9;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.isNotNullish;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.sortBy;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.username;
                        var1 = var2.toLowerCase;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.value;
                    var1 = var2.bind(var3)();
 163:
                    return var1;
                }
            };
            var19 = var14.bind(var17)(var13, var3, var11);
            var _closure2_slot3 = var19;
            var3 = 10;
            var3 = var10[var3];
            var9 = var9.bind(var4)(var3);
            var3 = {};
            var3['channel'] = var12;
            var3 = var9.bind(var4)(var3);
            var9 = var3.listActionRenderer;
            var10 = var3.listActionHeight;
            var3 = null;
            var13 = var3 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 248; continue _fun0001 }
 238:
            var13 = var12.isMultiUserDM;
            var11 = var13.bind(var12)();
 248:
            var18 = var3 != var11;
            if(!var18) { _fun0001_ip = 258; continue _fun0001 }
 255:
            var18 = var11;
 258:
            _closure2_slot4 = var18;
            var17 = undefined;
            if(!var18) { _fun0001_ip = 285; continue _fun0001 }
 267:
            var13 = var3 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 282; continue _fun0001 }
 276:
            var11 = var12.ownerId;
 282:
            var17 = var11;
 285:
            _closure2_slot5 = var17;
            var13 = var3 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 304; continue _fun0001 }
 298:
            var11 = var12.userLimit;
 304:
            var12 = var3 != var11;
            var3 = 0;
            if(!var12) { _fun0001_ip = 316; continue _fun0001 }
 313:
            var3 = var11;
 316:
            _closure2_slot6 = var3;
            var14 = _closure1_slot3;
            var13 = var14.useMemo;
            var12 = new Array(1);
            var12[0] = var19;
            var11 = function() {
                var1 = _closure2_slot3;
                var2 = var1.length;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var13 = var13.bind(var14)(var11, var12);
            var12 = var14.useCallback;
            var11 = new Array(3);
            var11[0] = var18;
            var11[1] = var19;
            var11[2] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var2 = var7[var1];
                    var4 = undefined;
                    var2 = var6.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.9Oq93t;
                    var8 = var2.bind(var3)(var1);
                    var1 = _closure2_slot3;
                    var7 = var1.length;
                    var1 = global;
                    var2 = var1.HermesInternal;
                    var6 = var2.concat;
                    var3 = '';
                    var2 = ' — ';
                    var2 = var6.bind(var3)(var8, var2, var7);
                    var6 = _closure2_slot4;
                    var3 = var2;
                    if(!var6) { _fun0003_ip = 156; continue _fun0003 }
 112:
                    var7 = _closure2_slot6;
                    var6 = 0;
                    if(!(!(var7 > var6))) { _fun0003_ip = 128; continue _fun0003 }
 122:
                    var5 = _closure1_slot8;
                    _fun0003_ip = 132; continue _fun0003;
 128:
                    var5 = _closure2_slot6;
 132:
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = '/';
                    var1 = var4.bind(var1)(var5);
                    var3 = var2 + var1;
 156:
                    var1 = {};
                    var2 = 'section';
                    var1['type'] = var2;
                    var2 = {};
                    var2['title'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var11 = var12.bind(var14)(var3, var11);
            var12 = var14.useCallback;
            var3 = new Array(5);
            var3[0] = var19;
            var3[1] = var18;
            var3[2] = var17;
            var3[3] = var16;
            var3[4] = var15;
            var2 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg2;
                    var1 = 0;
                    var4 = var1 === var5;
                    var2 = _closure2_slot3;
                    var6 = var2.length;
                    var3 = 1;
                    var3 = var6 - var3;
                    var3 = var5 === var3;
                    var6 = var2[var5];
                    var2 = null;
                    if(!(var2 == var6)) { _fun0004_ip = 68; continue _fun0004 }
 42:
                    var2 = {};
                    var5 = 'placeholder';
                    var2['type'] = var5;
                    var5 = {};
                    var5['start'] = var4;
                    var5['end'] = var3;
                    var2['props'] = var5;
                    return var2;
 68:
                    var5 = _closure2_slot4;
                    if(!var5) { _fun0004_ip = 88; continue _fun0004 }
 75:
                    var2 = var6.id;
                    var1 = _closure2_slot5;
                    var5 = var2 === var1;
 88:
                    var1 = {};
                    var2 = 'user';
                    var1['type'] = var2;
                    var2 = {};
                    var8 = _closure1_slot7;
                    var8 = var8.NONE;
                    var2['type'] = var8;
                    var2['user'] = var6;
                    var8 = _closure1_slot5;
                    var7 = var8.getNickname;
                    var6 = var6.id;
                    var6 = var7.bind(var8)(var6);
                    var2['nickname'] = var6;
                    var6 = true;
                    var2['isNameplatedRow'] = var6;
                    var6 = function onPress(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var4 = arg1;
                        var4 = var4.id;
                        var2['userId'] = var4;
                        var5 = _closure2_slot1;
                        var2['sourceAnalyticsLocations'] = var5;
                        var4 = _closure2_slot0;
                        var2['channelId'] = var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var2['isOwner'] = var5;
                    var2['start'] = var4;
                    var2['end'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var12 = var12.bind(var14)(var2, var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 13;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.UsersFastList;
            var1 = {};
            var1['sections'] = var13;
            var1['getItemProps'] = var12;
            var1['getSectionProps'] = var11;
            var1['listHeaderSize'] = var10;
            var1['renderListHeader'] = var9;
            var1['disableStickySections'] = var8;
            var8 = true;
            var1['disableBackgroundOverlay'] = var8;
            var1['listStyleOverride'] = var7;
            var1['disableBottomSafeZone'] = var6;
            var1['insetEnd'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
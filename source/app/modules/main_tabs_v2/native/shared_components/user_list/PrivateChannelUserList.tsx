// app/modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx
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
            var9 = var1.disableStickySections;
            var8 = var1.listStyleOverride;
            var7 = var1.disableBottomSafeZone;
            var6 = var1.insetEnd;
            var12 = var1.headerShown;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 52; continue _fun0001 }
 50:
            var12 = true;
 52:
            var3 = var1.hideTitle;
            var _closure2_slot1 = var3;
            var5 = var1.inActionSheet;
            var19 = var1.onUserPress;
            var _closure2_slot2 = var19;
            var18 = var1.opensUserProfileOnUserPress;
            if(!(var18 === var4)) { _fun0001_ip = 90; continue _fun0001 }
 88:
            var18 = true;
 90:
            var _closure2_slot3 = var18;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 6;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.bind(var4)();
            var17 = var10.analyticsLocations;
            _closure2_slot4 = var17;
            var15 = _closure1_slot0;
            var10 = 7;
            var14 = var13[var10];
            var22 = var15.bind(var4)(var14);
            var21 = var22.useStateFromStores;
            var14 = _closure1_slot4;
            var20 = new Array(1);
            var20[0] = var14;
            var14 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var21.bind(var22)(var20, var14);
            _closure2_slot5 = var14;
            var10 = var13[var10];
            var22 = var15.bind(var4)(var10);
            var21 = var22.useStateFromStoresArray;
            var10 = _closure1_slot6;
            var20 = new Array(1);
            var20[0] = var10;
            var15 = new Array(1);
            var15[0] = var14;
            var10 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot5;
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
                    var3 = _closure2_slot5;
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
            var22 = var21.bind(var22)(var20, var10, var15);
            _closure2_slot6 = var22;
            var10 = 10;
            var10 = var13[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var14;
            var12 = !var12;
            var10['disable'] = var12;
            var11 = var11.bind(var4)(var10);
            var10 = var11.listActionRenderer;
            var11 = var11.listActionHeight;
            var13 = null;
            var15 = var13 == var14;
            var12 = undefined;
            if(var15) { _fun0001_ip = 322; continue _fun0001 }
 312:
            var15 = var14.isMultiUserDM;
            var12 = var15.bind(var14)();
 322:
            var21 = var13 != var12;
            if(!var21) { _fun0001_ip = 332; continue _fun0001 }
 329:
            var21 = var12;
 332:
            _closure2_slot7 = var21;
            var20 = undefined;
            if(!var21) { _fun0001_ip = 359; continue _fun0001 }
 341:
            var15 = var13 == var14;
            var12 = undefined;
            if(var15) { _fun0001_ip = 356; continue _fun0001 }
 350:
            var12 = var14.ownerId;
 356:
            var20 = var12;
 359:
            _closure2_slot8 = var20;
            var15 = var13 == var14;
            var12 = undefined;
            if(var15) { _fun0001_ip = 378; continue _fun0001 }
 372:
            var12 = var14.userLimit;
 378:
            var13 = var13 != var12;
            var23 = 0;
            if(!var13) { _fun0001_ip = 390; continue _fun0001 }
 387:
            var23 = var12;
 390:
            _closure2_slot9 = var23;
            var15 = _closure1_slot3;
            var14 = var15.useMemo;
            var13 = new Array(1);
            var13[0] = var22;
            var12 = function() {
                var1 = _closure2_slot6;
                var2 = var1.length;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var14 = var14.bind(var15)(var12, var13);
            var13 = var15.useCallback;
            var12 = new Array(4);
            var12[0] = var21;
            var12[1] = var22;
            var12[2] = var23;
            var12[3] = var3;
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
                    var1 = _closure2_slot6;
                    var7 = var1.length;
                    var1 = global;
                    var2 = var1.HermesInternal;
                    var6 = var2.concat;
                    var4 = '';
                    var2 = ' — ';
                    var2 = var6.bind(var4)(var8, var2, var7);
                    var6 = _closure2_slot7;
                    var4 = var2;
                    if(!var6) { _fun0003_ip = 156; continue _fun0003 }
 112:
                    var7 = _closure2_slot9;
                    var6 = 0;
                    if(!(!(var7 > var6))) { _fun0003_ip = 128; continue _fun0003 }
 122:
                    var6 = _closure1_slot8;
                    _fun0003_ip = 132; continue _fun0003;
 128:
                    var6 = _closure2_slot9;
 132:
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = '/';
                    var1 = var5.bind(var1)(var6);
                    var4 = var2 + var1;
 156:
                    var1 = {};
                    var2 = 'section';
                    var1['type'] = var2;
                    var2 = {};
                    var2['title'] = var4;
                    var3 = _closure2_slot1;
                    var2['hideTitle'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var12 = var13.bind(var15)(var3, var12);
            var13 = var15.useCallback;
            var3 = new Array(7);
            var3[0] = var22;
            var3[1] = var21;
            var3[2] = var20;
            var3[3] = var19;
            var3[4] = var18;
            var3[5] = var17;
            var3[6] = var16;
            var2 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var5 = arg2;
                    var _closure3_slot0 = var5;
                    var1 = 0;
                    var4 = var1 === var5;
                    var2 = _closure2_slot6;
                    var3 = var2.length;
                    var2 = 1;
                    var2 = var3 - var2;
                    var3 = var5 === var2;
                    var2 = _closure2_slot6;
                    var7 = var2[var5];
                    var2 = null;
                    if(!(var2 == var7)) { _fun0004_ip = 78; continue _fun0004 }
 52:
                    var2 = {};
                    var5 = 'placeholder';
                    var2['type'] = var5;
                    var5 = {};
                    var5['start'] = var4;
                    var5['end'] = var3;
                    var2['props'] = var5;
                    return var2;
 78:
                    var5 = _closure2_slot7;
                    if(!var5) { _fun0004_ip = 98; continue _fun0004 }
 85:
                    var2 = var7.id;
                    var1 = _closure2_slot8;
                    var5 = var2 === var1;
 98:
                    var1 = {};
                    var2 = 'user';
                    var1['type'] = var2;
                    var2 = {};
                    var9 = _closure1_slot7;
                    var9 = var9.NONE;
                    var2['type'] = var9;
                    var2['user'] = var7;
                    var9 = _closure1_slot5;
                    var8 = var9.getNickname;
                    var7 = var7.id;
                    var7 = var8.bind(var9)(var7);
                    var2['nickname'] = var7;
                    var7 = true;
                    var2['isNameplatedRow'] = var7;
                    var6 = function onPress(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var5 = arg1;
                            var2 = _closure2_slot2;
                            var1 = null;
                            if(!(var1 != var2)) { _fun0005_ip = 44; continue _fun0005 }
 16:
                            var3 = _closure2_slot2;
                            var2 = {};
                            var2['user'] = var5;
                            var1 = _closure3_slot0;
                            var2['index'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
 44:
                            var1 = _closure2_slot3;
                            if(!var1) { _fun0005_ip = 109; continue _fun0005 }
 51:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var5 = var5.id;
                            var1['userId'] = var5;
                            var5 = _closure2_slot4;
                            var1['sourceAnalyticsLocations'] = var5;
                            var4 = _closure2_slot0;
                            var1['channelId'] = var4;
                            var1 = var2.bind(var3)(var1);
 109:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onPress'] = var6;
                    var2['isOwner'] = var5;
                    var2['start'] = var4;
                    var2['end'] = var3;
                    var1['props'] = var2;
                    return var1;
                }
            };
            var13 = var13.bind(var15)(var2, var3);
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 13;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.UsersFastList;
            var1 = {};
            var1['sections'] = var14;
            var1['getItemProps'] = var13;
            var1['getSectionProps'] = var12;
            var1['listHeaderSize'] = var11;
            var1['renderListHeader'] = var10;
            var1['disableStickySections'] = var9;
            var9 = true;
            var1['disableBackgroundOverlay'] = var9;
            var1['listStyleOverride'] = var8;
            var1['disableBottomSafeZone'] = var7;
            var1['insetEnd'] = var6;
            var1['inActionSheet'] = var5;
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
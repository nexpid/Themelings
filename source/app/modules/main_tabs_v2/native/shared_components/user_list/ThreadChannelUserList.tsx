// app/modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function ThreadChannelUserList(arg1) {
        var1 = arg1;
        var18 = var1.channelId;
        var _closure2_slot0 = var18;
        var19 = var1.guildId;
        var _closure2_slot1 = var19;
        var8 = var1.disableStickySections;
        var7 = var1.listStyleOverride;
        var6 = var1.disableBottomSafeZone;
        var5 = var1.insetEnd;
        var10 = _closure1_slot1;
        var14 = _closure1_slot2;
        var2 = 7;
        var2 = var14[var2];
        var4 = undefined;
        var2 = var10.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var3 = var2.analyticsLocations;
        var _closure2_slot2 = var3;
        var2 = _closure1_slot0;
        var9 = 8;
        var11 = var14[var9];
        var16 = var2.bind(var4)(var11);
        var15 = var16.useStateFromStores;
        var11 = _closure1_slot6;
        var12 = new Array(1);
        var12[0] = var11;
        var11 = function() {
            var3 = _closure1_slot6;
            var2 = var3.getGuild;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var15 = var15.bind(var16)(var12, var11);
        var11 = 9;
        var11 = var14[var11];
        var12 = var2.bind(var4)(var11);
        var11 = var12.useThreadMemberListSections;
        var15 = var11.bind(var12)(var18, var15);
        var _closure2_slot3 = var15;
        var9 = var14[var9];
        var16 = var2.bind(var4)(var9);
        var12 = var16.useStateFromStores;
        var9 = _closure1_slot4;
        var11 = new Array(1);
        var11[0] = var9;
        var9 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var20 = var12.bind(var16)(var11, var9);
        var _closure2_slot4 = var20;
        var9 = 10;
        var9 = var14[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.bind(var4)();
        var _closure2_slot5 = var9;
        var17 = _closure1_slot3;
        var10 = var17.useRef;
        var11 = 0;
        var10 = var10.bind(var17)(var11);
        var _closure2_slot6 = var10;
        var10 = var17.useRef;
        var10 = var10.bind(var17)(var11);
        var _closure2_slot7 = var10;
        var11 = var17.useMemo;
        var10 = new Array(3);
        var10[0] = var18;
        var10[1] = var19;
        var10[2] = var9;
        var9 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var2 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var5 = _closure1_slot4;
                    var3 = var5.getChannel;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var5)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0001_ip = 116; continue _fun0001 }
 30:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.subscribeChannelDimensions;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1['guildId'] = var5;
                    var5 = _closure2_slot0;
                    var1['channelId'] = var5;
                    var5 = _closure2_slot7;
                    var5 = var5.current;
                    var1['y'] = var5;
                    var5 = _closure2_slot6;
                    var5 = var5.current;
                    var1['height'] = var5;
                    var4 = _closure2_slot5;
                    var1['rowHeight'] = var4;
                    var1 = var2.bind(var3)(var1);
 116:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = 50;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var11 = var11.bind(var17)(var9, var10);
        var _closure2_slot8 = var11;
        var12 = var17.useCallback;
        var10 = new Array(1);
        var10[0] = var11;
        var9 = function(arg1) {
            var3 = _closure2_slot6;
            var2 = arg1;
            var2 = var2.nativeEvent;
            var2 = var2.layout;
            var2 = var2.height;
            var3['current'] = var2;
            var2 = _closure2_slot8;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var10 = var12.bind(var17)(var9, var10);
        var16 = var17.useCallback;
        var12 = new Array(1);
        var12[0] = var11;
        var9 = function(arg1) {
            var3 = _closure2_slot7;
            var2 = arg1;
            var2 = var2.nativeEvent;
            var2 = var2.contentOffset;
            var2 = var2.y;
            var3['current'] = var2;
            var2 = _closure2_slot8;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var9 = var16.bind(var17)(var9, var12);
        var16 = var17.useEffect;
        var12 = new Array(2);
        var12[0] = var20;
        var12[1] = var11;
        var11 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot4;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 23; continue _fun0002 }
 13:
                var2 = _closure2_slot8;
                var1 = undefined;
                var1 = var2.bind(var1)();
 23:
                var1 = undefined;
                return var1;
            }
        };
        var11 = var16.bind(var17)(var11, var12);
        var16 = var17.useCallback;
        var12 = new Array(1);
        var12[0] = var15;
        var11 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot3;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 != var2)) { _fun0003_ip = 46; continue _fun0003 }
 20:
                var7 = var2.label;
                var2 = var2.userIds;
                var6 = var2.length;
                if(!(var1 != var7)) { _fun0003_ip = 46; continue _fun0003 }
 40:
                var1 = 0;
                if(!(var1 === var6)) { _fun0003_ip = 50; continue _fun0003 }
 46:
                var1 = undefined;
                return var1;
 50:
                var1 = {};
                var2 = 'section';
                var1['type'] = var2;
                var2 = {};
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var4 = '';
                var3 = ' — ';
                var3 = var5.bind(var4)(var7, var3, var6);
                var2['title'] = var3;
                var1['props'] = var2;
                return var1;
            }
        };
        var11 = var16.bind(var17)(var11, var12);
        var16 = var17.useCallback;
        var12 = new Array(4);
        var12[0] = var15;
        var12[1] = var19;
        var12[2] = var18;
        var12[3] = var3;
        var3 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = arg2;
                var3 = _closure2_slot3;
                var1 = arg1;
                var1 = var3[var1];
                var1 = var1.userIds;
                var5 = _closure1_slot7;
                var4 = var5.getUser;
                var3 = var1[var2];
                var12 = var4.bind(var5)(var3);
                var8 = null;
                var3 = var8 != var12;
                var6 = undefined;
                var7 = undefined;
                if(!var3) { _fun0004_ip = 83; continue _fun0004 }
 58:
                var11 = _closure1_slot5;
                var5 = var11.getMember;
                var4 = _closure2_slot1;
                var3 = var12.id;
                var7 = var5.bind(var11)(var4, var3);
 83:
                var3 = 0;
                var5 = var3 === var2;
                var3 = var1.length;
                var1 = 1;
                var1 = var3 - var1;
                var4 = var2 === var1;
                if(!(var8 == var12)) { _fun0004_ip = 138; continue _fun0004 }
 109:
                var1 = {};
                var2 = 'placeholder';
                var1['type'] = var2;
                var2 = {};
                var2['start'] = var5;
                var2['end'] = var4;
                var1['props'] = var2;
                _fun0004_ip = 306; continue _fun0004;
 138:
                var2 = {};
                var3 = 'user';
                var2['type'] = var3;
                var3 = {};
                var11 = _closure1_slot8;
                var11 = var11.NONE;
                var3['type'] = var11;
                var3['user'] = var12;
                var9 = _closure2_slot1;
                var3['guildId'] = var9;
                var11 = var8 == var7;
                var9 = undefined;
                if(var11) { _fun0004_ip = 191; continue _fun0004 }
 185:
                var9 = var7.nick;
 191:
                if(!(var8 == var9)) { _fun0004_ip = 226; continue _fun0004 }
 195:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 13;
                var10 = var13[var10];
                var11 = var11.bind(var6)(var10);
                var10 = var11.getGlobalName;
                var9 = var10.bind(var11)(var12);
 226:
                var3['nickname'] = var9;
                var10 = var8 == var7;
                var9 = undefined;
                if(var10) { _fun0004_ip = 246; continue _fun0004 }
 240:
                var9 = var7.colorString;
 246:
                var3['usernameColor'] = var9;
                var8 = var8 == var7;
                var6 = undefined;
                if(var8) { _fun0004_ip = 266; continue _fun0004 }
 260:
                var6 = var7.colorStrings;
 266:
                var3['roleColors'] = var6;
                var6 = true;
                var3['isNameplatedRow'] = var6;
                var6 = function onPress(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = arg1;
                    var4 = var4.id;
                    var2['userId'] = var4;
                    var5 = _closure2_slot2;
                    var2['sourceAnalyticsLocations'] = var5;
                    var4 = _closure2_slot0;
                    var2['channelId'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3['onPress'] = var6;
                var3['start'] = var5;
                var3['end'] = var4;
                var2['props'] = var3;
                var1 = var2;
 306:
                return var1;
            }
        };
        var12 = var16.bind(var17)(var3, var12);
        var3 = _closure1_slot9;
        var1 = 15;
        var1 = var14[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.UsersFastList;
        var1 = {};
        var14 = var15.map;
        var13 = function(arg1) {
            var1 = arg1;
            var1 = var1.userIds;
            var1 = var1.length;
            return var1;
        };
        var13 = var14.bind(var15)(var13);
        var1['sections'] = var13;
        var1['getItemProps'] = var12;
        var1['getSectionProps'] = var11;
        var1['onLayout'] = var10;
        var1['onScroll'] = var9;
        var1['disableStickySections'] = var8;
        var8 = true;
        var1['disableBackgroundOverlay'] = var8;
        var1['listStyleOverride'] = var7;
        var1['disableBottomSafeZone'] = var6;
        var1['insetEnd'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
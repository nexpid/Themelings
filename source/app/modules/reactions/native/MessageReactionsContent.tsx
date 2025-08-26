// app/modules/reactions/native/MessageReactionsContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var8;
    var5 = function useReactors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var13 = var3.channelId;
            var _closure2_slot0 = var13;
            var2 = var3.messageId;
            var _closure2_slot1 = var2;
            var4 = var3.reaction;
            var _closure2_slot2 = var4;
            var6 = var3.reactionType;
            var _closure2_slot3 = var6;
            var9 = _closure1_slot0;
            var7 = _closure1_slot3;
            var5 = 15;
            var8 = var7[var5];
            var5 = undefined;
            var12 = var9.bind(var5)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot13;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = new Array(4);
            var8[0] = var13;
            var8[1] = var2;
            var2 = var4.emoji;
            var8[2] = var2;
            var8[3] = var6;
            var13 = _closure1_slot1;
            var2 = 17;
            var2 = var7[var2];
            var14 = var13.bind(var5)(var2);
            var16 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var7 = _closure1_slot13;
                    var6 = var7.getReactions;
                    var12 = _closure2_slot0;
                    var11 = _closure2_slot1;
                    var3 = _closure2_slot2;
                    var10 = var3.emoji;
                    var9 = _closure1_slot15;
                    var8 = _closure2_slot3;
                    var13 = var7;
                    var6 = var13[var6](var12, var11, var10, var9, var8, var7);
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var4 = null;
                    var5 = var4 == var6;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 82; continue _fun0002 }
 73:
                    var5 = var6.values;
                    var1 = var5.bind(var6)();
 82:
                    if(!(var4 == var1)) { _fun0002_ip = 90; continue _fun0002 }
 86:
                    var1 = new Array(0);
 90:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var18 = var12;
            var17 = var10;
            var15 = var8;
            var2 = var18[var11](var17, var16, var15, var14, var13);
            var1 = {};
            var1['reactors'] = var2;
            var8 = 18;
            var7 = var7[var8];
            var7 = var9.bind(var5)(var7);
            var7 = var7.ReactionTypes;
            var7 = var7.VOTE;
            if(!(var6 !== var7)) { _fun0001_ip = 231; continue _fun0001 }
 182:
            var7 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var8];
            var3 = var7.bind(var5)(var3);
            var3 = var3.ReactionTypes;
            var3 = var3.BURST;
            if(!(var6 !== var3)) { _fun0001_ip = 223; continue _fun0001 }
 215:
            var3 = var4.count;
            _fun0001_ip = 229; continue _fun0001;
 223:
            var3 = var4.burst_count;
 229:
            _fun0001_ip = 269; continue _fun0001;
 231:
            var6 = var4.count_details;
            var4 = null;
            var7 = var4 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 254; continue _fun0001 }
 248:
            var5 = var6.vote;
 254:
            var6 = var4 != var5;
            var4 = 0;
            if(!var6) { _fun0001_ip = 266; continue _fun0001 }
 263:
            var4 = var5;
 266:
            var3 = var4;
 269:
            var2 = var2.length;
            var2 = var3 > var2;
            var1['reactorsHasMore'] = var2;
            return var1;
        }
    };
    var _closure1_slot26 = var5;
    var4 = function useReactorsOnScrollNative(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var12 = var2.channelId;
            var _closure2_slot0 = var12;
            var11 = var2.messageId;
            var _closure2_slot1 = var11;
            var10 = var2.reactionSelected;
            var _closure2_slot2 = var10;
            var6 = var2.reactors;
            var9 = var2.reactorsHasMore;
            var _closure2_slot3 = var9;
            var4 = var2.reactionType;
            var _closure2_slot4 = var4;
            var3 = undefined;
            var _closure2_slot6 = var3;
            var _closure2_slot7 = var3;
            var _closure2_slot8 = var3;
            var _closure2_slot9 = var3;
            var8 = _closure1_slot5;
            var7 = var8.useRef;
            var5 = false;
            var5 = var7.bind(var8)(var5);
            var _closure2_slot5 = var5;
            var7 = var6.length;
            var5 = 0;
            var5 = var7 > var5;
            var8 = null;
            if(!var5) { _fun0003_ip = 137; continue _fun0003 }
 116:
            var7 = var6.length;
            var5 = 1;
            var5 = var7 - var5;
            var5 = var6[var5];
            var8 = var5.id;
 137:
            _closure2_slot6 = var8;
            var7 = _closure1_slot5;
            var6 = var7.useCallback;
            var5 = new Array(6);
            var5[0] = var12;
            var5[1] = var11;
            var5[2] = var10;
            var5[3] = var9;
            var5[4] = var8;
            var5[5] = var4;
            var4 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var1 = arg2;
                    var2 = var2 / var1;
                    var1 = 0.75;
                    var1 = var2 > var1;
                    if(!var1) { _fun0004_ip = 34; continue _fun0004 }
 27:
                    var1 = _closure2_slot3;
 34:
                    if(!var1) { _fun0004_ip = 52; continue _fun0004 }
 37:
                    var2 = _closure2_slot5;
                    var2 = var2.current;
                    var1 = !var2;
 52:
                    if(!var1) { _fun0004_ip = 186; continue _fun0004 }
 58:
                    var2 = _closure2_slot5;
                    var1 = true;
                    var2['current'] = var1;
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getReactors;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['channelId'] = var6;
                    var6 = _closure2_slot1;
                    var1['messageId'] = var6;
                    var6 = _closure2_slot2;
                    var6 = var6.emoji;
                    var1['emoji'] = var6;
                    var5 = _closure1_slot15;
                    var1['limit'] = var5;
                    var5 = _closure2_slot6;
                    var1['after'] = var5;
                    var4 = _closure2_slot4;
                    var1['type'] = var4;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function() {
                        var2 = _closure2_slot5;
                        var1 = false;
                        var2['current'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 186:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4, var5);
            _closure2_slot7 = var4;
            var6 = _closure1_slot5;
            var5 = var6.useRef;
            var5 = var5.bind(var6)(var4);
            _closure2_slot8 = var5;
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = function() {
                var2 = _closure2_slot8;
                var1 = _closure2_slot7;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var6.bind(var7)(var4, var5);
            var4 = _closure1_slot1;
            var5 = _closure1_slot3;
            var2 = 20;
            var6 = var5[var2];
            var7 = var4.bind(var3)(var6);
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.debounce;
                var2 = function(arg1, arg2) {
                    var4 = _closure2_slot8;
                    var3 = var4.current;
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = 16;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var7.bind(var3)(var6);
            _closure2_slot9 = var6;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var1 = function() {
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.contentOffset;
                    var4 = var2.y;
                    var1 = var1.contentSize;
                    var3 = var1.height;
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4, var3);
                    return var1;
                };
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot27 = var4;
    var1 = function useRenderFooter(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot20;
        var3 = undefined;
        var5 = var4.bind(var3)();
        var _closure2_slot2 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = _closure2_slot1;
                if(var1) { _fun0005_ip = 27; continue _fun0005 }
 10:
                var1 = _closure2_slot0;
                var4 = var1.length;
                var3 = 0;
                var1 = null;
                if(!(var3 === var4)) { _fun0005_ip = 70; continue _fun0005 }
 27:
                var5 = _closure1_slot17;
                var4 = _closure1_slot6;
                var3 = {};
                var2 = _closure2_slot2;
                var2 = var2.loadingSpinner;
                var3['style'] = var2;
                var2 = 'large';
                var3['size'] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
 70:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function useRenderItem(arg1, arg2, arg3, arg4, arg5) {
        var11 = arg1;
        var8 = arg2;
        var10 = arg3;
        var7 = arg4;
        var9 = arg5;
        var _closure2_slot0 = var11;
        var _closure2_slot1 = var8;
        var _closure2_slot2 = var10;
        var _closure2_slot3 = var7;
        var _closure2_slot4 = var9;
        var3 = _closure1_slot20;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var _closure2_slot5 = var6;
        var5 = _closure1_slot1;
        var12 = _closure1_slot3;
        var3 = 22;
        var3 = var12[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var5 = var3.analyticsLocations;
        var _closure2_slot6 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var2 = new Array(7);
        var2[0] = var11;
        var2[1] = var10;
        var2[2] = var9;
        var2[3] = var8;
        var2[4] = var7;
        var2[5] = var6;
        var2[6] = var5;
        var1 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var9 = arg2;
                var1 = _closure2_slot0;
                var18 = var1[var9];
                var _closure3_slot0 = var18;
                var3 = var18.id;
                var _closure3_slot1 = var3;
                var2 = var1.length;
                var1 = 1;
                var8 = var2 - var1;
                var4 = _closure1_slot11;
                var2 = var4.getChannel;
                var1 = _closure2_slot2;
                var4 = var2.bind(var4)(var1);
                var6 = null;
                var1 = var6 != var4;
                var2 = null;
                if(!var1) { _fun0006_ip = 83; continue _fun0006 }
 73:
                var1 = var4.getGuildId;
                var2 = var1.bind(var4)();
 83:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 23;
                var1 = var4[var1];
                var4 = undefined;
                var10 = var5.bind(var4)(var1);
                var5 = var10.getNickname;
                var1 = _closure2_slot2;
                var17 = var5.bind(var10)(var2, var1, var18);
                var20 = var2;
                if(!(var6 == var17)) { _fun0006_ip = 160; continue _fun0006 }
 129:
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 24;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getGlobalName;
                var17 = var1.bind(var2)(var18);
 160:
                var1 = var6 != var20;
                var22 = null;
                if(!var1) { _fun0006_ip = 185; continue _fun0006 }
 169:
                var2 = _closure1_slot12;
                var1 = var2.getMember;
                var22 = var1.bind(var2)(var20, var3);
 185:
                var1 = _closure2_slot3;
                var2 = var1.burst_count;
                var1 = 0;
                if(!(!(var2 > var1))) { _fun0006_ip = 235; continue _fun0006 }
 201:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 18;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.ReactionTypes;
                var1 = var1.NORMAL;
                _fun0006_ip = 267; continue _fun0006;
 235:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 18;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.ReactionTypes;
                var1 = var2.BURST;
 267:
                var _closure3_slot2 = var1;
                var3 = _closure1_slot18;
                var2 = _closure1_slot9;
                var1 = {};
                var21 = _closure2_slot5;
                var5 = var21.listRow;
                var1['style'] = var5;
                var11 = _closure1_slot17;
                var15 = _closure1_slot1;
                var23 = _closure1_slot3;
                var5 = 25;
                var5 = var23[var5];
                var10 = var15.bind(var4)(var5);
                var5 = {};
                var16 = _closure1_slot17;
                var19 = 26;
                var14 = var23[var19];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var21 = var21.avatar;
                var14['style'] = var21;
                var21 = _closure1_slot0;
                var19 = var23[var19];
                var19 = var21.bind(var4)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.SMALL;
                var14['size'] = var19;
                var19 = var18.getAvatarSource;
                var21 = var19.bind(var18)(var20);
                var19 = var21;
                if(!(var6 != var20)) { _fun0006_ip = 450; continue _fun0006 }
 396:
                var23 = var6 == var22;
                var20 = undefined;
                if(var23) { _fun0006_ip = 411; continue _fun0006 }
 405:
                var20 = var22.avatar;
 411:
                var19 = var21;
                if(!(var6 != var20)) { _fun0006_ip = 450; continue _fun0006 }
 418:
                var21 = _closure1_slot1;
                var23 = _closure1_slot3;
                var20 = 27;
                var20 = var23[var20];
                var21 = var21.bind(var4)(var20);
                var20 = var21.getGuildMemberAvatarSource;
                var19 = var20.bind(var21)(var22, var18);
 450:
                var14['source'] = var19;
                var14 = var16.bind(var4)(var15, var14);
                var5['leading'] = var14;
                var16 = _closure1_slot17;
                var15 = _closure1_slot1;
                var19 = _closure1_slot3;
                var14 = 28;
                var14 = var19[var14];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var14['user'] = var18;
                var14['nick'] = var17;
                var14 = var16.bind(var4)(var15, var14);
                var5['label'] = var14;
                var14 = _closure2_slot4;
                var13 = null;
                if(!var14) { _fun0006_ip = 622; continue _fun0006 }
 519:
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var14 = 29;
                var14 = var16[var14];
                var15 = var15.bind(var4)(var14);
                var14 = var15.isAndroid;
                var14 = var14.bind(var15)();
                var13 = null;
                if(!var14) { _fun0006_ip = 622; continue _fun0006 }
 553:
                var16 = _closure1_slot17;
                var15 = _closure1_slot8;
                var14 = {};
                var17 = function onPress() {
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 19;
                    var1 = var9[var4];
                    var7 = undefined;
                    var3 = var8.bind(var7)(var1);
                    var2 = var3.removeReaction;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var1['channelId'] = var6;
                    var6 = _closure2_slot1;
                    var1['messageId'] = var6;
                    var5 = _closure2_slot3;
                    var5 = var5.emoji;
                    var1['emoji'] = var5;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.ReactionLocations;
                    var4 = var4.MESSAGE;
                    var1['location'] = var4;
                    var4 = _closure3_slot0;
                    var4 = var4.id;
                    var1['userId'] = var4;
                    var4 = {};
                    var6 = _closure3_slot2;
                    var5 = 18;
                    var5 = var9[var5];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.ReactionTypes;
                    var5 = var5.BURST;
                    var5 = var6 === var5;
                    var4['burst'] = var5;
                    var1['options'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var14['onPress'] = var17;
                var19 = _closure1_slot17;
                var18 = _closure1_slot0;
                var20 = _closure1_slot3;
                var17 = 30;
                var17 = var20[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.XSmallIcon;
                var17 = {};
                var17 = var19.bind(var4)(var18, var17);
                var14['children'] = var17;
                var13 = var16.bind(var4)(var15, var14);
 622:
                var5['trailing'] = var13;
                var12 = function onLongPress() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 31;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var4 = _closure3_slot1;
                    var2['userId'] = var4;
                    var6 = _closure2_slot2;
                    var2['channelId'] = var6;
                    var6 = _closure2_slot1;
                    var2['messageId'] = var6;
                    var5 = _closure3_slot0;
                    var2['localUser'] = var5;
                    var4 = _closure2_slot6;
                    var2['sourceAnalyticsLocations'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var5['onLongPress'] = var12;
                var10 = var11.bind(var4)(var10, var5);
                var5 = new Array(2);
                var5[0] = var10;
                var6 = null;
                if(!(var9 !== var8)) { _fun0006_ip = 691; continue _fun0006 }
 659:
                var9 = _closure1_slot17;
                var8 = _closure1_slot1;
                var10 = _closure1_slot3;
                var7 = 32;
                var7 = var10[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var6 = var9.bind(var4)(var8, var7);
 691:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function useRenderQuickActions(arg1, arg2, arg3, arg4) {
        var8 = arg1;
        var7 = arg2;
        var6 = arg3;
        var9 = arg4;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var6;
        var _closure2_slot3 = var9;
        var4 = _closure1_slot20;
        var3 = undefined;
        var5 = var4.bind(var3)();
        var _closure2_slot4 = var5;
        var4 = _closure1_slot5;
        var3 = var4.useCallback;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure2_slot3;
                var2 = arg2;
                var2 = var3[var2];
                var _closure3_slot0 = var2;
                var2 = _closure2_slot2;
                var3 = var2.burst_count;
                var2 = 0;
                if(!(!(var3 > var2))) { _fun0007_ip = 75; continue _fun0007 }
 36:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.ReactionTypes;
                var2 = var2.NORMAL;
                _fun0007_ip = 112; continue _fun0007;
 75:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 18;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.ReactionTypes;
                var2 = var3.BURST;
 112:
                var _closure3_slot1 = var2;
                var4 = _closure1_slot17;
                var3 = _closure1_slot9;
                var2 = {};
                var1 = _closure2_slot4;
                var1 = var1.buttonRow;
                var2['style'] = var1;
                var7 = _closure1_slot17;
                var10 = _closure1_slot1;
                var11 = _closure1_slot3;
                var1 = 33;
                var5 = var11[var1];
                var1 = undefined;
                var6 = var10.bind(var1)(var5);
                var5 = {};
                var12 = _closure1_slot0;
                var9 = 34;
                var13 = var11[var9];
                var13 = var12.bind(var1)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var9 = var11[var9];
                var9 = var12.bind(var1)(var9);
                var9 = var9.t;
                var9 = var9.N86XcH;
                var9 = var13.bind(var14)(var9);
                var5['title'] = var9;
                var9 = 30;
                var9 = var11[var9];
                var9 = var12.bind(var1)(var9);
                var9 = var9.XSmallIcon;
                var5['IconComponent'] = var9;
                var9 = 14;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var9 = var9.unsafe_rawColors;
                var9 = var9.RED_400;
                var5['color'] = var9;
                var8 = function onPress() {
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var4 = 19;
                    var1 = var9[var4];
                    var7 = undefined;
                    var3 = var8.bind(var7)(var1);
                    var2 = var3.removeReaction;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['channelId'] = var6;
                    var6 = _closure2_slot1;
                    var1['messageId'] = var6;
                    var5 = _closure2_slot2;
                    var5 = var5.emoji;
                    var1['emoji'] = var5;
                    var4 = var9[var4];
                    var4 = var8.bind(var7)(var4);
                    var4 = var4.ReactionLocations;
                    var4 = var4.MESSAGE;
                    var1['location'] = var4;
                    var4 = _closure3_slot0;
                    var4 = var4.id;
                    var1['userId'] = var4;
                    var4 = {};
                    var6 = _closure3_slot1;
                    var5 = 18;
                    var5 = var9[var5];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.ReactionTypes;
                    var5 = var5.BURST;
                    var5 = var6 === var5;
                    var4['burst'] = var5;
                    var1['options'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5['onPress'] = var8;
                var8 = 48;
                var5['height'] = var8;
                var5 = var7.bind(var1)(var6, var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function ReactionTab(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var12 = var1.reaction;
            var11 = var1.index;
            var9 = var1.reactionSelectedIndex;
            var1 = _closure1_slot20;
            var5 = undefined;
            var17 = var1.bind(var5)();
            var1 = var12.burst_count;
            var13 = 0;
            var16 = var1 > var13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 35;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.useEmojiColorPalette;
            var1 = var12.burst_colors;
            var7 = null;
            if(!(var7 == var1)) { _fun0008_ip = 87; continue _fun0008 }
 83:
            var1 = new Array(0);
 87:
            var2 = var2.bind(var3)(var1);
            var3 = var7 == var2;
            var1 = undefined;
            if(var3) { _fun0008_ip = 107; continue _fun0008 }
 101:
            var1 = var2.accentColor;
 107:
            var1 = var7 != var1;
            var15 = null;
            if(!var1) { _fun0008_ip = 131; continue _fun0008 }
 116:
            var1 = {};
            var3 = var2.accentColor;
            var1['color'] = var3;
            var15 = var1;
 131:
            var1 = var7 != var2;
            var10 = null;
            if(!var1) { _fun0008_ip = 191; continue _fun0008 }
 140:
            var1 = {};
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 36;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.hexOpacityToRgba;
            var3 = var2.backgroundColor;
            var2 = var2.opacity;
            var2 = var4.bind(var6)(var3, var2);
            var1['backgroundColor'] = var2;
            var10 = var1;
 191:
            var6 = var12.emoji;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 15;
            var1 = var3[var1];
            var18 = var2.bind(var5)(var1);
            var14 = var18.useStateFromStores;
            var1 = _closure1_slot10;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var1 = _closure1_slot10;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var19 = var14.bind(var18)(var4, var1);
            var1 = 37;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.AnimateEmoji;
            var1 = var2.useSetting;
            var18 = var1.bind(var2)();
            var1 = var6.id;
            var1 = var7 != var1;
            var14 = undefined;
            if(!var1) { _fun0008_ip = 363; continue _fun0008 }
 291:
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 27;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.getEmojiURL;
            var1 = {};
            var4 = var6.id;
            var1['id'] = var4;
            var4 = var6.animated;
            if(!var4) { _fun0008_ip = 340; continue _fun0008 }
 337:
            var4 = !var19;
 340:
            if(!var4) { _fun0008_ip = 346; continue _fun0008 }
 343:
            var4 = var18;
 346:
            var1['animated'] = var4;
            var4 = 48;
            var1['size'] = var4;
            var14 = var2.bind(var3)(var1);
 363:
            var4 = _closure1_slot18;
            var3 = _closure1_slot9;
            var2 = {};
            var18 = var17.tabContainer;
            var1 = new Array(3);
            var1[0] = var18;
            var18 = var11 === var9;
            var9 = null;
            if(!var18) { _fun0008_ip = 402; continue _fun0008 }
 396:
            var9 = var17.tabContainerSelected;
 402:
            var1[1] = var9;
            var9 = null;
            if(!var18) { _fun0008_ip = 419; continue _fun0008 }
 411:
            var9 = null;
            if(!var16) { _fun0008_ip = 419; continue _fun0008 }
 416:
            var9 = var10;
 419:
            var1[2] = var9;
            var2['style'] = var1;
            var1 = true;
            var2['accessible'] = var1;
            var1 = var6.name;
            var2['accessibilityLabel'] = var1;
            var1 = {};
            var1['selected'] = var18;
            var2['accessibilityState'] = var1;
            var10 = _closure1_slot17;
            var9 = _closure1_slot1;
            var11 = _closure1_slot3;
            var1 = 38;
            var1 = var11[var1];
            var9 = var9.bind(var5)(var1);
            var1 = {};
            var1['src'] = var14;
            var14 = var6.name;
            var1['name'] = var14;
            var19 = var17.emoji;
            var14 = new Array(2);
            var14[0] = var19;
            var19 = var17.emojiText;
            var14[1] = var19;
            var1['textEmojiStyle'] = var14;
            var19 = var17.emoji;
            var14 = new Array(2);
            var14[0] = var19;
            var19 = var17.emojiImage;
            var14[1] = var19;
            var1['fastImageStyle'] = var14;
            var9 = var10.bind(var5)(var9, var1);
            var1 = new Array(2);
            var1[0] = var9;
            var10 = _closure1_slot17;
            var9 = _closure1_slot0;
            var8 = 12;
            var8 = var11[var8];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {};
            var11 = 'text-md/bold';
            var8['variant'] = var11;
            var14 = var17.reactionCountText;
            var11 = new Array(3);
            var11[0] = var14;
            var14 = null;
            if(!var18) { _fun0008_ip = 629; continue _fun0008 }
 623:
            var14 = var17.reactionCountTextSelected;
 629:
            var11[1] = var14;
            var14 = null;
            if(!var16) { _fun0008_ip = 641; continue _fun0008 }
 638:
            var14 = var15;
 641:
            var11[2] = var14;
            var8['style'] = var11;
            var11 = var12.burst_count;
            if(!(!(var11 > var13))) { _fun0008_ip = 667; continue _fun0008 }
 659:
            var11 = var12.count;
            _fun0008_ip = 673; continue _fun0008;
 667:
            var11 = var12.burst_count;
 673:
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var1[1] = var8;
            var2['children'] = var1;
            var1 = var6.id;
            if(!(var7 == var1)) { _fun0008_ip = 705; continue _fun0008 }
 700:
            var1 = var6.name;
 705:
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var14.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var13 = 1;
    var6 = var8[var13];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.ActivityIndicator;
    var _closure1_slot6 = var9;
    var9 = var6.Dimensions;
    var _closure1_slot7 = var9;
    var9 = var6.Platform;
    var9 = var6.Pressable;
    var _closure1_slot8 = var9;
    var6 = var6.View;
    var _closure1_slot9 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot11 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot12 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot13 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var14.bind(var1)(var6);
    var _closure1_slot14 = var6;
    var15 = 8;
    var6 = var8[var15];
    var6 = var7.bind(var1)(var6);
    var9 = var6.DEFAULT_NUM_REACTION_USERS;
    var _closure1_slot15 = var9;
    var6 = var6.Permissions;
    var _closure1_slot16 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var16 = var6.ACTION_SHEET_BACKGROUND_COLOR;
    var12 = 10;
    var6 = var8[var12];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot17 = var9;
    var6 = var6.jsxs;
    var _closure1_slot18 = var6;
    var6 = 11;
    var6 = var8[var6];
    var10 = var14.bind(var1)(var6);
    var9 = var10.createAnimatedComponent;
    var6 = 12;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Text;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot19 = var6;
    var6 = 13;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {};
    var11['flex'] = var13;
    var6['container'] = var11;
    var11 = {};
    var13 = 32;
    var11['padding'] = var13;
    var13 = 14;
    var17 = var8[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var11['borderTopLeftRadius'] = var17;
    var17 = var8[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var11['borderTopRightRadius'] = var17;
    var6['containerEmpty'] = var11;
    var11 = {};
    var17 = 48;
    var11['height'] = var17;
    var11['backgroundColor'] = var16;
    var6['listRow'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'borderRadius': null, 'padding': 8, 'marginTop': 8};
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var11['borderRadius'] = var16;
    var6['tabContainer'] = var11;
    var11 = {};
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_TERTIARY;
    var11['backgroundColor'] = var16;
    var6['tabContainerSelected'] = var11;
    var11 = {'padding': 0, 'marginHorizontal': 8, 'marginBottom': 8};
    var6['tab'] = var11;
    var11 = {};
    var16 = 'transparent';
    var11['borderBottomColor'] = var16;
    var6['tabSelected'] = var11;
    var11 = {};
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var11['borderRadius'] = var16;
    var6['tabActive'] = var11;
    var11 = {'display': 'flex', 'flexDirection': 'column'};
    var6['reactionTab'] = var11;
    var11 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var6['removeButtonContainer'] = var11;
    var11 = {'backgroundColor': null, 'borderRadius': null, 'height': 32, 'overflow': 'hidden', 'minWidth': 42, 'marginRight': 20, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 12};
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.STATUS_DANGER_BACKGROUND;
    var11['backgroundColor'] = var16;
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xxl;
    var11['borderRadius'] = var16;
    var6['removeAllButton'] = var11;
    var11 = {};
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_NORMAL;
    var11['color'] = var16;
    var6['reactionCountText'] = var11;
    var11 = {};
    var16 = var8[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_ACTIVE;
    var11['color'] = var16;
    var6['reactionCountTextSelected'] = var11;
    var11 = {};
    var11['marginRight'] = var15;
    var6['emoji'] = var11;
    var11 = {'lineHeight': 24, 'fontSize': 20, 'textAlign': 'center'};
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_NORMAL;
    var11['color'] = var13;
    var6['emojiText'] = var11;
    var11 = {'resizeMode': 'contain', 'width': 24, 'height': 24};
    var6['emojiImage'] = var11;
    var11 = {};
    var13 = 16;
    var11['padding'] = var13;
    var6['emojiTextIdentifier'] = var11;
    var11 = {};
    var11['marginRight'] = var12;
    var6['avatar'] = var11;
    var11 = {'flexDirection': 'row', 'justifyContent': 'flex-end', 'alignItems': 'center'};
    var6['buttonRow'] = var11;
    var11 = {'height': 48, 'padding': 6};
    var6['loadingSpinner'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot20 = var6;
    var6 = {};
    var9 = 'function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}';
    var6['code'] = var9;
    var _closure1_slot21 = var6;
    var6 = {};
    var9 = "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}";
    var6['code'] = var9;
    var _closure1_slot22 = var6;
    var6 = function RemoveAllButton(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var1 = var2.reactions;
            var _closure2_slot0 = var1;
            var12 = var2.reactionSelectedIndex;
            var _closure2_slot1 = var12;
            var1 = var2.channelId;
            var _closure2_slot2 = var1;
            var2 = var2.messageId;
            var _closure2_slot3 = var2;
            var2 = _closure1_slot20;
            var5 = undefined;
            var9 = var2.bind(var5)();
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var2 = 15;
            var2 = var17[var2];
            var6 = var16.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var6)(var3, var1, var2);
            var3 = _closure1_slot1;
            var1 = 39;
            var1 = var17[var1];
            var1 = var3.bind(var5)(var1);
            var2 = var1.bind(var5)(var2);
            var1 = _closure1_slot10;
            var18 = var1.useReducedMotion;
            var _closure2_slot4 = var18;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var1 = true;
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot4;
            var1 = 2;
            var3 = var3.bind(var5)(var4, var1);
            var4 = 0;
            var1 = var3[var4];
            var _closure2_slot5 = var1;
            var1 = 1;
            var1 = var3[var1];
            var _closure2_slot6 = var1;
            var6 = 11;
            var1 = var17[var6];
            var8 = var16.bind(var5)(var1);
            var3 = var8.useSharedValue;
            var1 = 64;
            var14 = var3.bind(var8)(var1);
            var _closure2_slot7 = var14;
            var1 = var17[var6];
            var8 = var16.bind(var5)(var1);
            var3 = var8.useAnimatedStyle;
            var1 = function b() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot4;
                    if(var2) { _fun0010_ip = 72; continue _fun0010 }
 12:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 40;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.withTiming;
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = {};
                    var7 = 200;
                    var2['duration'] = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    _fun0010_ip = 85; continue _fun0010;
 72:
                    var4 = _closure2_slot7;
                    var3 = var4.get;
                    var2 = var3.bind(var4)();
 85:
                    var1['maxWidth'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var11['useReducedMotion'] = var18;
            var11['buttonWidth'] = var14;
            var15 = 40;
            var13 = var17[var15];
            var13 = var16.bind(var5)(var13);
            var13 = var13.withTiming;
            var11['withTiming'] = var13;
            var1['__closure'] = var11;
            var11 = 16499689496895.0;
            var1['__workletHash'] = var11;
            var11 = _closure1_slot21;
            var1['__initData'] = var11;
            var11 = var3.bind(var8)(var1);
            var1 = var17[var6];
            var3 = var16.bind(var5)(var1);
            var1 = var3.useSharedValue;
            var1 = var1.bind(var3)(var4);
            var _closure2_slot8 = var1;
            var3 = var17[var6];
            var8 = var16.bind(var5)(var3);
            var4 = var8.useAnimatedStyle;
            var3 = function T() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = {'opacity': null, 'color': 'white', 'fontSize': 14, 'marginLeft': 8, 'textAlignVertical': 'center'};
                    var2 = _closure2_slot4;
                    if(var2) { _fun0011_ip = 84; continue _fun0011 }
 24:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 40;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.withTiming;
                    var4 = _closure2_slot8;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = {};
                    var7 = 125;
                    var2['duration'] = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    _fun0011_ip = 97; continue _fun0011;
 84:
                    var4 = _closure2_slot8;
                    var3 = var4.get;
                    var2 = var3.bind(var4)();
 97:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var13 = {};
            var13['useReducedMotion'] = var18;
            var13['textOpacity'] = var1;
            var15 = var17[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.withTiming;
            var13['withTiming'] = var15;
            var3['__closure'] = var13;
            var13 = 8698187840986.0;
            var3['__workletHash'] = var13;
            var13 = _closure1_slot22;
            var3['__initData'] = var13;
            var13 = var4.bind(var8)(var3);
            var8 = _closure1_slot5;
            var4 = var8.useCallback;
            var3 = new Array(2);
            var3[0] = var14;
            var3[1] = var1;
            var1 = function() {
                var4 = _closure2_slot6;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var5 = _closure2_slot7;
                var4 = var5.set;
                var3 = 32;
                var3 = var4.bind(var5)(var3);
                var4 = _closure2_slot8;
                var3 = var4.set;
                var2 = 0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var4.bind(var8)(var1, var3);
            var _closure2_slot9 = var1;
            var8 = _closure1_slot5;
            var4 = var8.useEffect;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var1;
            var1 = function() {
                var2 = _closure2_slot9;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            if(!var2) { _fun0009_ip = 776; continue _fun0009 }
 517:
            var4 = _closure1_slot17;
            var3 = _closure1_slot8;
            var2 = {};
            var7 = function onPress() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0012_ip = 84; continue _fun0012 }
 10:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 19;
                    var2 = var3[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.removeEmojiReactions;
                    var5 = _closure2_slot2;
                    var4 = _closure2_slot3;
                    var8 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var8[var2];
                    var2 = var2.emoji;
                    var2 = var6.bind(var7)(var5, var4, var2);
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var3)();
                    _fun0012_ip = 154; continue _fun0012;
 84:
                    var4 = _closure2_slot6;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var4 = _closure2_slot7;
                    var3 = var4.set;
                    var6 = _closure1_slot7;
                    var5 = var6.get;
                    var2 = 'window';
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.width;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot8;
                    var2 = var3.set;
                    var1 = 1;
                    var1 = var2.bind(var3)(var1);
 154:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var7;
            var8 = _closure1_slot18;
            var15 = _closure1_slot1;
            var17 = _closure1_slot3;
            var6 = var17[var6];
            var6 = var15.bind(var5)(var6);
            var7 = var6.View;
            var6 = {};
            var12 = var9.removeAllButton;
            var9 = new Array(2);
            var9[0] = var12;
            var9[1] = var11;
            var6['style'] = var9;
            var12 = _closure1_slot17;
            var16 = _closure1_slot0;
            var9 = 41;
            var9 = var17[var9];
            var9 = var16.bind(var5)(var9);
            var11 = var9.TrashIcon;
            var9 = {};
            var14 = 14;
            var14 = var17[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.WHITE_500;
            var9['color'] = var14;
            var14 = 'sm';
            var9['size'] = var14;
            var11 = var12.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot17;
            var11 = _closure1_slot19;
            var10 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'white'};
            var10['style'] = var13;
            var13 = 34;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.zx/e4O;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 776:
            return var1;
        }
    };
    var _closure1_slot23 = var6;
    var6 = function ReactionTabs(arg1) {
        var13 = arg1;
        var1 = _closure1_slot20;
        var4 = undefined;
        var19 = var1.bind(var4)();
        var17 = var13.reactions;
        var14 = var13.reactionSelectedIndex;
        var _closure2_slot0 = var14;
        var1 = var13.setReactionSelectedIndex;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot18;
        var2 = _closure1_slot9;
        var1 = {};
        var5 = var19.reactionTab;
        var1['style'] = var5;
        var8 = _closure1_slot17;
        var7 = _closure1_slot1;
        var18 = _closure1_slot3;
        var5 = 42;
        var5 = var18[var5];
        var6 = var7.bind(var4)(var5);
        var5 = {};
        var12 = var17.map;
        var11 = function(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = arg1;
                var5 = _closure1_slot17;
                var4 = _closure1_slot31;
                var3 = {};
                var3['reaction'] = var1;
                var2 = arg2;
                var3['index'] = var2;
                var2 = _closure2_slot0;
                var3['reactionSelectedIndex'] = var2;
                var2 = var1.emoji;
                var2 = var2.id;
                var6 = null;
                var6 = var6 != var2;
                var8 = '';
                var7 = var8;
                if(!var6) { _fun0013_ip = 70; continue _fun0013 }
 67:
                var7 = var2;
 70:
                var1 = var1.emoji;
                var6 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = ':';
                var2 = var2.bind(var8)(var7, var1, var6);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            }
        };
        var11 = var12.bind(var17)(var11);
        var5['tabs'] = var11;
        var11 = var19.tab;
        var5['tabStyle'] = var11;
        var11 = var19.tabActive;
        var5['tabStyleActive'] = var11;
        var11 = var19.tabSelected;
        var5['tabStyleSelected'] = var11;
        var5['tabIndexSelected'] = var14;
        var9 = function onSelect(arg1) {
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 43;
            var3 = var6[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.triggerHapticFeedback;
            var5 = _closure1_slot1;
            var2 = 44;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.IMPACT_LIGHT;
            var2 = var3.bind(var4)(var2);
            var3 = _closure2_slot1;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5['onSelect'] = var9;
        var16 = _closure1_slot0;
        var15 = 16;
        var9 = var18[var15];
        var9 = var16.bind(var4)(var9);
        var9 = var9.MAX_REACTIONS;
        var5['initialNumTabsToRender'] = var9;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var8 = _closure1_slot17;
        var6 = 32;
        var6 = var18[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var9 = true;
        var6['outer'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var8 = _closure1_slot18;
        var7 = _closure1_slot9;
        var6 = {};
        var9 = var19.removeButtonContainer;
        var6['style'] = var9;
        var12 = _closure1_slot17;
        var9 = 12;
        var9 = var18[var9];
        var9 = var16.bind(var4)(var9);
        var11 = var9.Text;
        var9 = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
        var19 = var19.emojiTextIdentifier;
        var9['style'] = var19;
        var15 = var18[var15];
        var16 = var16.bind(var4)(var15);
        var15 = var16.getReactionEmojiName;
        var14 = var17[var14];
        var14 = var14.emoji;
        var14 = var15.bind(var16)(var14);
        var9['children'] = var14;
        var11 = var12.bind(var4)(var11, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var12 = _closure1_slot17;
        var11 = _closure1_slot23;
        var10 = {};
        var21 = var10;
        var20 = var13;
        var13 = copyDataProperties(var21, var20);
        var10 = var12.bind(var4)(var11, var10);
        var9[1] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var6;
    var6 = 50;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var11 = var6.Storage;
    var10 = var11.get;
    var9 = 'MessageReactionsContent_SwipableBounced';
    var6 = false;
    var6 = var10.bind(var11)(var9, var6);
    var _closure1_slot25 = var6;
    var6 = 56;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/reactions/native/MessageReactionsContent.tsx';
    var6 = var7.bind(var8)(var6);
    var3['useReactors'] = var5;
    var3['useReactorsOnScrollNative'] = var4;
    var4 = function() {
        var1 = _closure1_slot20;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var9 = _closure1_slot1;
        var15 = _closure1_slot3;
        var1 = 45;
        var1 = var15[var1];
        var1 = var9.bind(var4)(var1);
        var5 = var1.bind(var4)();
        var14 = _closure1_slot0;
        var1 = 46;
        var1 = var15[var1];
        var2 = var14.bind(var4)(var1);
        var1 = var2.useNoResultsSource;
        var11 = var1.bind(var2)();
        var3 = _closure1_slot17;
        var1 = 47;
        var1 = var15[var1];
        var1 = var14.bind(var4)(var1);
        var2 = var1.BottomSheet;
        var1 = {};
        var6 = true;
        var1['scrollable'] = var6;
        var6 = var5.bottom;
        var5 = 338;
        var5 = var5 + var6;
        var1['startHeight'] = var5;
        var7 = _closure1_slot17;
        var5 = 48;
        var5 = var15[var5];
        var5 = var14.bind(var4)(var5);
        var6 = var5.BottomSheetView;
        var5 = {};
        var10 = var10.containerEmpty;
        var5['style'] = var10;
        var10 = _closure1_slot17;
        var8 = 49;
        var8 = var15[var8];
        var9 = var9.bind(var4)(var8);
        var8 = {};
        var8['source'] = var11;
        var11 = 34;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var16 = var12.intl;
        var13 = var16.string;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12.HmPOrq;
        var12 = var13.bind(var16)(var12);
        var8['title'] = var12;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.pTJ5Jy;
        var11 = var12.bind(var13)(var11);
        var8['body'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['MessageReactionsEmpty'] = var4;
    var2 = function(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg1;
            var15 = var3.channelId;
            var _closure2_slot0 = var15;
            var16 = var3.messageId;
            var6 = var3.emoji;
            var19 = var3.reactions;
            var1 = var3.isSelectedBurst;
            var5 = var3.disableManage;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0014_ip = 53; continue _fun0014 }
 51:
            var5 = false;
 53:
            var7 = var3.disableTabs;
            if(!(var7 === var4)) { _fun0014_ip = 67; continue _fun0014 }
 65:
            var7 = false;
 67:
            var3 = _closure1_slot20;
            var8 = var3.bind(var4)();
            var3 = {};
            var3['reactions'] = var19;
            var3['emoji'] = var6;
            var3['isSelectedBurst'] = var1;
            var1 = function useReactionSelected(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.reactions;
                    var _closure3_slot0 = var4;
                    var3 = var1.emoji;
                    var _closure3_slot1 = var3;
                    var1 = var1.isSelectedBurst;
                    var5 = undefined;
                    if(!(var1 === var5)) { _fun0015_ip = 39; continue _fun0015 }
 37:
                    var1 = false;
 39:
                    var _closure3_slot2 = var1;
                    var6 = _closure1_slot5;
                    var3 = var6.useState;
                    var2 = function() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0016_ip = 51; continue _fun0016 }
 13:
                            var3 = _closure3_slot0;
                            var2 = var3.findIndex;
                            var1 = function(arg1) {
                                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                                    var2 = arg1;
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var1 = 16;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var6 = var4.bind(var1)(var3);
                                    var5 = var6.emojiEquals;
                                    var4 = var2.emoji;
                                    var3 = _closure3_slot1;
                                    var3 = var5.bind(var6)(var4, var3);
                                    var5 = var2.burst_count;
                                    var2 = null;
                                    var6 = var2 != var5;
                                    var4 = 0;
                                    var2 = 0;
                                    if(!var6) { _fun0017_ip = 75; continue _fun0017 }
 72:
                                    var2 = var5;
 75:
                                    var2 = var2 > var4;
                                    var1 = _closure3_slot2;
                                    if(var1) { _fun0017_ip = 97; continue _fun0017 }
 86:
                                    var1 = !var2;
                                    if(var2) { _fun0017_ip = 95; continue _fun0017 }
 92:
                                    var1 = var3;
 95:
                                    _fun0017_ip = 106; continue _fun0017;
 97:
                                    if(!var2) { _fun0017_ip = 103; continue _fun0017 }
 100:
                                    var2 = var3;
 103:
                                    var1 = var2;
 106:
                                    return var1;
                                }
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = 0;
                            var3 = var2 >= var1;
                            if(!var3) { _fun0016_ip = 49; continue _fun0016 }
 46:
                            var1 = var2;
 49:
                            return var1;
 51:
                            var1 = 0;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var6)(var2);
                    var2 = _closure1_slot4;
                    var1 = 2;
                    var1 = var2.bind(var5)(var3, var1);
                    var2 = 0;
                    var6 = var1[var2];
                    var7 = 1;
                    var2 = var1[var7];
                    var1 = global;
                    var5 = var1.Math;
                    var3 = var5.min;
                    var1 = var4.length;
                    var1 = var1 - var7;
                    var3 = var3.bind(var5)(var6, var1);
                    var1 = {};
                    var4 = var4[var3];
                    var1['reactionSelected'] = var4;
                    var1['reactionSelectedIndex'] = var3;
                    var1['setReactionSelectedIndex'] = var2;
                    return var1;
                }
            };
            var1 = var1.bind(var4)(var3);
            var23 = var1.reactionSelected;
            var18 = var1.reactionSelectedIndex;
            var17 = var1.setReactionSelectedIndex;
            var1 = var23.me_vote;
            var6 = null;
            if(!(var6 == var1)) { _fun0014_ip = 217; continue _fun0014 }
 137:
            var3 = var23.burst_count;
            var1 = 0;
            if(!(!(var3 > var1))) { _fun0014_ip = 183; continue _fun0014 }
 149:
            var3 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 18;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ReactionTypes;
            var22 = var1.NORMAL;
            _fun0014_ip = 215; continue _fun0014;
 183:
            var3 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 18;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ReactionTypes;
            var22 = var1.BURST;
 215:
            _fun0014_ip = 249; continue _fun0014;
 217:
            var3 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 18;
            var1 = var9[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ReactionTypes;
            var22 = var1.VOTE;
 249:
            var3 = _closure1_slot26;
            var1 = {};
            var1['channelId'] = var15;
            var1['messageId'] = var16;
            var1['reaction'] = var23;
            var1['reactionType'] = var22;
            var1 = var3.bind(var4)(var1);
            var11 = var1.reactors;
            var20 = var1.reactorsHasMore;
            var3 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 15;
            var1 = var10[var1];
            var21 = var3.bind(var4)(var1);
            var14 = var21.useStateFromStores;
            var1 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var1;
            var9 = new Array(1);
            var9[0] = var15;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var14.bind(var21)(var13, var1, var9);
            var1 = 51;
            var1 = var10[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsActiveChannelOrUnarchivableThread;
            var3 = var1.bind(var3)(var9);
            var9 = _closure1_slot1;
            var1 = 45;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var14 = var1.bind(var4)();
            var1 = function useCanManageMessages(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 15;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot14;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() {
                    var4 = _closure1_slot14;
                    var3 = var4.canWithPartialContext;
                    var1 = _closure1_slot16;
                    var2 = var1.MANAGE_MESSAGES;
                    var1 = {};
                    var5 = _closure3_slot0;
                    var1['channelId'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var1 = var1.bind(var4)(var15);
            if(!var1) { _fun0014_ip = 410; continue _fun0014 }
 407:
            var1 = !var5;
 410:
            if(!var1) { _fun0014_ip = 416; continue _fun0014 }
 413:
            var1 = var3;
 416:
            var3 = var23.emoji;
            var9 = var3.id;
            if(!(var6 == var9)) { _fun0014_ip = 442; continue _fun0014 }
 431:
            var3 = var23.emoji;
            var9 = var3.name;
 442:
            var10 = {};
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var13 = 34;
            var21 = var5[var13];
            var21 = var3.bind(var4)(var21);
            var24 = var21.intl;
            var21 = var24.string;
            var13 = var5[var13];
            var13 = var3.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.gHp0Cw;
            var13 = var21.bind(var24)(var13);
            var10['accessibilityLabel'] = var13;
            var13 = 48;
            var10['footerSize'] = var13;
            var14 = var14.bottom;
            var10['insetBottom'] = var14;
            var21 = _closure1_slot27;
            var14 = {};
            var14['channelId'] = var15;
            var14['messageId'] = var16;
            var14['reactionSelected'] = var23;
            var14['reactors'] = var11;
            var14['reactorsHasMore'] = var20;
            var14['reactionType'] = var22;
            var14 = var21.bind(var4)(var14);
            var10['onScroll'] = var14;
            var14 = _closure1_slot28;
            var14 = var14.bind(var4)(var11, var20);
            var10['renderFooter'] = var14;
            var14 = _closure1_slot29;
            var30 = undefined;
            var29 = var11;
            var28 = var16;
            var27 = var15;
            var26 = var23;
            var25 = var1;
            var14 = var30[var14](var29, var28, var27, var26, var25, var24);
            var10['renderItem'] = var14;
            var14 = _closure1_slot30;
            var29 = var15;
            var28 = var16;
            var27 = var23;
            var26 = var11;
            var14 = var30[var14](var29, var28, var27, var26, var25);
            var10['renderQuickActions'] = var14;
            var10['itemSize'] = var13;
            var13 = var11.length;
            var11 = new Array(1);
            var11[0] = var13;
            var10['sections'] = var11;
            var8 = var8.container;
            var10['style'] = var8;
            var13 = _closure1_slot5;
            var11 = var13.useCallback;
            var8 = function() {
                var5 = true;
                _closure1_slot25 = var5;
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 50;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = 'MessageReactionsContent_SwipableBounced';
                var2 = var3.bind(var4)(var2, var5);
                return var1;
            };
            var2 = new Array(0);
            var11 = var11.bind(var13)(var8, var2);
            var2 = 29;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isIOS;
            var5 = var2.bind(var3)();
            if(!var5) { _fun0014_ip = 721; continue _fun0014 }
 718:
            var5 = var1;
 721:
            var3 = _closure1_slot17;
            var14 = _closure1_slot0;
            var20 = _closure1_slot3;
            var1 = 47;
            var1 = var20[var1];
            var1 = var14.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var13 = true;
            var1['scrollable'] = var13;
            var8 = 52;
            var8 = var20[var8];
            var8 = var14.bind(var4)(var8);
            var8 = var8.BACKDROP_OPACITY;
            var1['backdropOpacity'] = var8;
            var8 = 18;
            var8 = var20[var8];
            var8 = var14.bind(var4)(var8);
            var8 = var8.ReactionTypes;
            var14 = var8.BURST;
            var8 = null;
            if(!(var22 === var14)) { _fun0014_ip = 869; continue _fun0014 }
 813:
            var21 = _closure1_slot17;
            var20 = _closure1_slot1;
            var24 = _closure1_slot3;
            var14 = 53;
            var14 = var24[var14];
            var20 = var20.bind(var4)(var14);
            var14 = {};
            var23 = var23.emoji;
            var14['emoji'] = var23;
            var14['reactionType'] = var22;
            var14['messageId'] = var16;
            var14['channelId'] = var15;
            var8 = var21.bind(var4)(var20, var14);
 869:
            var1['backdropChildren'] = var8;
            var6 = null;
            if(!(var13 !== var7)) { _fun0014_ip = 919; continue _fun0014 }
 880:
            var14 = _closure1_slot17;
            var8 = _closure1_slot24;
            var7 = {};
            var7['reactions'] = var19;
            var7['reactionSelectedIndex'] = var18;
            var7['setReactionSelectedIndex'] = var17;
            var7['messageId'] = var16;
            var7['channelId'] = var15;
            var6 = var14.bind(var4)(var8, var7);
 919:
            var1['header'] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot1;
            var14 = _closure1_slot3;
            if(var5) { _fun0014_ip = 976; continue _fun0014 }
 938:
            var5 = 55;
            var5 = var14[var5];
            var6 = var7.bind(var4)(var5);
            var5 = {};
            var5['inActionSheet'] = var13;
            var29 = var5;
            var28 = var10;
            var15 = copyDataProperties(var29, var28);
            var5 = var8.bind(var4)(var6, var5, var9);
            _fun0014_ip = 1029; continue _fun0014;
 976:
            var6 = 54;
            var6 = var14[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['inActionSheet'] = var13;
            var12 = _closure1_slot25;
            var12 = !var12;
            var6['bounceFirstRowOnMount'] = var12;
            var6['onBounceSwipable'] = var11;
            var29 = var6;
            var28 = var10;
            var10 = copyDataProperties(var29, var28);
            var5 = var8.bind(var4)(var7, var6, var9);
 1029:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MessageReactionsContent'] = var2;
    return var1;
})();
// app/modules/video_calls/native/components/ActivityTile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ActivityTileInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.participant;
            var _closure2_slot0 = var11;
            var20 = var1.style;
            var10 = var1.channel;
            var _closure2_slot1 = var10;
            var7 = var1.onSingleTap;
            var _closure2_slot2 = var7;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var1 = function handleCanJoin() {
                var1 = undefined;
                var4 = _closure2_slot9;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot8 = var1;
            var1 = function _handleCanJoin() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 175; continue _fun0002 }
 10:
                            var2 = _closure2_slot4;
                            var5 = null;
                            var2 = var5 != var2;
                            if(!var2) { _fun0002_ip = 34; continue _fun0002 }
 26:
                            var4 = _closure2_slot3;
                            var2 = var5 != var4;
 34:
                            if(!var2) { _fun0002_ip = 167; continue _fun0002 }
 40:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 25;
                            var2 = var6[var2];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var2);
                            var2 = {};
                            var7 = _closure2_slot4;
                            var7 = var7.applicationId;
                            var2['applicationId'] = var7;
                            var7 = _closure2_slot1;
                            var7 = var7.id;
                            var2['activityChannelId'] = var7;
                            var7 = _closure2_slot6;
                            var7 = var7.location;
                            var2['locationObject'] = var7;
                            var7 = _closure2_slot5;
                            var2['analyticsLocations'] = var7;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=126);
 124:
                            return var2;
 126:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 172; continue _fun0002 }
 132:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 26;
                            var4 = var7[var4];
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.setOrientationLockState;
                            var3 = _closure2_slot3;
                            var3 = var4.bind(var5)(var3);
 167:
                            var3 = undefined;
                            return var3;
 172:
                            return var2;
 175:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot9 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot9 = var1;
            var23 = function handleTileOrButtonPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = {};
                    var5 = _closure2_slot7;
                    var3['embeddedActivityJoinability'] = var5;
                    var5 = _closure2_slot8;
                    var3['handleCanJoin'] = var5;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0003_ip = 71; continue _fun0003 }
 63:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
 71:
                    return var1;
                }
            };
            var1 = _closure1_slot14;
            var8 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var6 = var11.applicationId;
            var1 = new Array(1);
            var1[0] = var6;
            var4 = var4.bind(var5)(var1);
            var1 = _closure1_slot4;
            var6 = 1;
            var1 = var1.bind(var5)(var4, var6);
            var4 = 0;
            var13 = var1[var4];
            _closure2_slot3 = var13;
            var1 = function useUsersForActivityParticipant(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 14;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.useStateFromStoresArray;
                var5 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() {
                    var1 = _closure3_slot0;
                    var3 = var1.participants;
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.from;
                    var3 = var1.bind(var2)(var3);
                    var2 = var3.map;
                    var1 = function(arg1) {
                        var3 = _closure1_slot7;
                        var2 = var3.getUser;
                        var1 = arg1;
                        var1 = var1.userId;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.isNotNullish;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var26 = var1.bind(var5)(var11);
            var1 = 17;
            var1 = var3[var1];
            var12 = var2.bind(var5)(var1);
            var11 = var12.getName;
            var1 = var10.getGuildId;
            var3 = var1.bind(var10)();
            var2 = var10.id;
            var15 = null;
            var14 = var15 == var26;
            var1 = undefined;
            if(var14) { _fun0001_ip = 222; continue _fun0001 }
 218:
            var1 = var26[var4];
 222:
            var12 = var11.bind(var12)(var3, var2, var1);
            if(!(var15 == var12)) { _fun0001_ip = 277; continue _fun0001 }
 233:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.getName;
            var11 = var15 == var26;
            var1 = undefined;
            if(var11) { _fun0001_ip = 272; continue _fun0001 }
 268:
            var1 = var26[var4];
 272:
            var12 = var2.bind(var3)(var1);
 277:
            var16 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 19;
            var1 = var11[var1];
            var1 = var16.bind(var5)(var1);
            var2 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var1 = 14;
            var1 = var11[var1];
            var17 = var3.bind(var5)(var1);
            var14 = var17.useStateFromStores;
            var1 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getEmbeddedActivitiesForChannel;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var3 = var2.bind(var3)(var1);
                var2 = var3.find;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var2 = var1.applicationId;
                        var4 = _closure2_slot3;
                        var1 = null;
                        var4 = var1 == var4;
                        var1 = undefined;
                        if(var4) { _fun0004_ip = 35; continue _fun0004 }
 26:
                        var3 = _closure2_slot3;
                        var1 = var3.id;
 35:
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var14.bind(var17)(var4, var1);
            _closure2_slot4 = var4;
            var1 = 20;
            var1 = var11[var1];
            var14 = var16.bind(var5)(var1);
            var1 = 21;
            var1 = var11[var1];
            var1 = var16.bind(var5)(var1);
            var1 = var1.ACTIVITY_TILE;
            var1 = var14.bind(var5)(var1);
            var1 = var1.analyticsLocations;
            _closure2_slot5 = var1;
            var1 = 22;
            var1 = var11[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useAnalyticsContext;
            var1 = var1.bind(var3)();
            _closure2_slot6 = var1;
            var1 = var15 == var13;
            var21 = undefined;
            if(var1) { _fun0001_ip = 436; continue _fun0001 }
 431:
            var21 = var13.name;
 436:
            if(!(var15 == var21)) { _fun0001_ip = 497; continue _fun0001 }
 440:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 23;
            var3 = var16[var1];
            var3 = var14.bind(var5)(var3);
            var11 = var3.intl;
            var3 = var11.string;
            var1 = var16[var1];
            var1 = var14.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.WCNe7O;
            var21 = var3.bind(var11)(var1);
 497:
            var3 = _closure1_slot7;
            var1 = var3.getCurrentUser;
            var1 = var1.bind(var3)();
            var3 = var15 == var1;
            var14 = undefined;
            if(var3) { _fun0001_ip = 524; continue _fun0001 }
 519:
            var14 = var1.id;
 524:
            var1 = var15 != var2;
            if(!var1) { _fun0001_ip = 554; continue _fun0001 }
 531:
            var3 = var2.id;
            var11 = var15 == var13;
            var2 = undefined;
            if(var11) { _fun0001_ip = 550; continue _fun0001 }
 545:
            var2 = var13.id;
 550:
            var1 = var3 === var2;
 554:
            if(var1) { _fun0001_ip = 595; continue _fun0001 }
 557:
            var2 = var15 != var14;
            if(!var2) { _fun0001_ip = 592; continue _fun0001 }
 564:
            var11 = var15 == var4;
            var3 = undefined;
            if(var11) { _fun0001_ip = 589; continue _fun0001 }
 573:
            var11 = var4.userIds;
            var4 = var11.has;
            var3 = var4.bind(var11)(var14);
 589:
            var2 = var3;
 592:
            var1 = var2;
 595:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 24;
            var2 = var2[var4];
            var11 = var3.bind(var5)(var2);
            var3 = var11.useEmbeddedActivityJoinability;
            var2 = {};
            var16 = _closure1_slot7;
            var14 = var16.getCurrentUser;
            var16 = var14.bind(var16)();
            var17 = var15 == var16;
            var14 = undefined;
            if(var17) { _fun0001_ip = 650; continue _fun0001 }
 645:
            var14 = var16.id;
 650:
            var2['userId'] = var14;
            var14 = var10.id;
            var2['channelId'] = var14;
            var2['application'] = var13;
            var17 = var3.bind(var11)(var2);
            _closure2_slot7 = var17;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var3.bind(var5)(var2);
            var2 = var2.EmbeddedActivityJoinability;
            var16 = var2.CAN_JOIN;
            var2 = var26.length;
            if(!(!(var2 > var6))) { _fun0001_ip = 780; continue _fun0001 }
 714:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 23;
            var4 = var14[var2];
            var4 = var3.bind(var5)(var4);
            var11 = var4.intl;
            var4 = var11.formatToPlainString;
            var2 = var14[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.7Uuia2;
            var2 = {};
            var2['username'] = var12;
            var27 = var4.bind(var11)(var3, var2);
            _fun0001_ip = 855; continue _fun0001;
 780:
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 23;
            var4 = var14[var2];
            var4 = var3.bind(var5)(var4);
            var11 = var4.intl;
            var4 = var11.formatToPlainString;
            var2 = var14[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.t;
            var3 = var2.cpe6CA;
            var2 = {};
            var2['username'] = var12;
            var12 = var26.length;
            var12 = var12 - var6;
            var2['count'] = var12;
            var27 = var4.bind(var11)(var3, var2);
 855:
            if(var1) { _fun0001_ip = 1433; continue _fun0001 }
 861:
            var3 = _closure1_slot11;
            var19 = _closure1_slot0;
            var24 = _closure1_slot2;
            var1 = 28;
            var1 = var24[var1];
            var1 = var19.bind(var5)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var4 = 'button';
            var1['accessibilityRole'] = var4;
            var22 = 23;
            var4 = var24[var22];
            var4 = var19.bind(var5)(var4);
            var14 = var4.intl;
            var12 = var14.formatToPlainString;
            var4 = var24[var22];
            var4 = var19.bind(var5)(var4);
            var4 = var4.t;
            var11 = var4.Yw5Hr6;
            var4 = {};
            var4['applicationName'] = var21;
            var4 = var12.bind(var14)(var11, var4);
            var1['accessibilityLabel'] = var4;
            var4 = _closure1_slot13;
            var1['androidRippleConfig'] = var4;
            var1['onPress'] = var23;
            var4 = var8.pressableOpacity;
            var1['style'] = var4;
            var12 = _closure1_slot10;
            var18 = _closure1_slot1;
            var4 = 30;
            var4 = var24[var4];
            var11 = var18.bind(var5)(var4);
            var4 = {};
            var4['application'] = var13;
            var13 = 'cover';
            var4['resizeMode'] = var13;
            var11 = var12.bind(var5)(var11, var4);
            var4 = new Array(2);
            var4[0] = var11;
            var13 = _closure1_slot11;
            var12 = _closure1_slot5;
            var11 = {};
            var28 = var8.activityPreview;
            var14 = new Array(2);
            var14[0] = var28;
            var14[1] = var20;
            var11['style'] = var14;
            var20 = _closure1_slot10;
            var28 = 31;
            var14 = var24[var28];
            var18 = var18.bind(var5)(var14);
            var14 = {};
            var29 = -6;
            var14['offsetAmount'] = var29;
            var29 = var8.overflow;
            var14['overflowStyle'] = var29;
            var28 = var24[var28];
            var28 = var19.bind(var5)(var28);
            var28 = var28.OverflowText;
            var14['overflowComponent'] = var28;
            var14['items'] = var26;
            var26 = 4;
            var14['max'] = var26;
            var25 = function renderItem(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var9 = 13;
                    var1 = var1[var9];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = arg1;
                    var1['user'] = var5;
                    var5 = _closure2_slot0;
                    var6 = var5.guildId;
                    var5 = null;
                    var7 = var5 != var6;
                    var5 = undefined;
                    if(!var7) { _fun0005_ip = 64; continue _fun0005 }
 61:
                    var5 = var6;
 64:
                    var1['guildId'] = var5;
                    var5 = _closure1_slot12;
                    var1['size'] = var5;
                    var6 = arg2;
                    var5 = undefined;
                    if(var6) { _fun0005_ip = 176; continue _fun0005 }
 84:
                    var6 = {};
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var11 = var7[var9];
                    var11 = var8.bind(var3)(var11);
                    var11 = var11.AVATAR_SIZE_MAP;
                    var10 = _closure1_slot12;
                    var11 = var11[var10];
                    var10 = 2;
                    var11 = var11 / var10;
                    var10 = 3;
                    var10 = var11 + var10;
                    var6['radius'] = var10;
                    var7 = var7[var9];
                    var7 = var8.bind(var3)(var7);
                    var7 = var7.CutoutDirection;
                    var7 = var7.RIGHT;
                    var6['direction'] = var7;
                    var7 = -6;
                    var6['inset'] = var7;
                    var5 = var6;
 176:
                    var1['cutout'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var14['renderItem'] = var25;
            var18 = var20.bind(var5)(var18, var14);
            var14 = new Array(4);
            var14[0] = var18;
            var26 = _closure1_slot10;
            var18 = 32;
            var20 = var24[var18];
            var20 = var19.bind(var5)(var20);
            var25 = var20.LegacyText;
            var20 = {};
            var28 = var8.subtitleText;
            var20['style'] = var28;
            var28 = 2;
            var20['numberOfLines'] = var28;
            var20['children'] = var27;
            var20 = var26.bind(var5)(var25, var20);
            var14[1] = var20;
            var20 = _closure1_slot10;
            var18 = var24[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.LegacyText;
            var18 = {};
            var24 = var8.titleText;
            var18['style'] = var24;
            var18['children'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var14[2] = var18;
            var15 = null;
            if(!(var17 === var16)) { _fun0001_ip = 1403; continue _fun0001 }
 1272:
            var18 = _closure1_slot10;
            var20 = _closure1_slot1;
            var21 = _closure1_slot2;
            var19 = 33;
            var16 = var21[var19];
            var17 = var20.bind(var5)(var16);
            var16 = {};
            var16['onPress'] = var23;
            var23 = var8.button;
            var16['style'] = var23;
            var25 = _closure1_slot0;
            var23 = var21[var22];
            var23 = var25.bind(var5)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var21[var22];
            var22 = var25.bind(var5)(var22);
            var22 = var22.t;
            var22 = var22.4i2vj4;
            var22 = var23.bind(var24)(var22);
            var16['text'] = var22;
            var19 = var21[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.Colors;
            var19 = var19.GREY;
            var16['color'] = var19;
            var19 = 100;
            var16['cornerRadius'] = var19;
            var15 = var18.bind(var5)(var17, var16);
 1403:
            var14[3] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var4[1] = var11;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 1552; continue _fun0001;
 1433:
            var4 = _closure1_slot10;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 28;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var12 = 'box-only';
            var2['pointerEvents'] = var12;
            var8 = var8.activityViewContainer;
            var2['style'] = var8;
            var2['onPress'] = var7;
            var2['activeOpacity'] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot1;
            var6 = 29;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var10;
            var9 = _closure1_slot9;
            var9 = var9.PIP;
            var6['layoutMode'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1552:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var8 = true;
    var4['value'] = var8;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var15 = 1;
    var4 = var6[var15];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var12 = 4;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var14 = var4.Fonts;
    var4 = var4.ThemeTypes;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityLayoutMode;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.getThemedRippleConfig;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot10 = var9;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var13 = var4.XSMALL;
    var _closure1_slot12 = var13;
    var4 = {};
    var4['foreground'] = var8;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'height': '100%', 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var10 = 12;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var16;
    var4['pressableOpacity'] = var9;
    var9 = {'flex': 1, 'opacity': 0.6};
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BLACK;
    var9['backgroundColor'] = var16;
    var4['overlay'] = var9;
    var9 = {'alignItems': 'center', 'display': 'flex', 'width': '100%', 'padding': 16};
    var4['activityPreview'] = var9;
    var9 = {};
    var9['flex'] = var15;
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var15;
    var4['activityViewContainer'] = var9;
    var9 = {'fontSize': 16, 'lineHeight': 24, 'color': null, 'fontFamily': null, 'textAlign': 'center', 'marginLeft': 16, 'marginRight': 16};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_NORMAL;
    var9['color'] = var15;
    var15 = var14.DISPLAY_EXTRABOLD;
    var9['fontFamily'] = var15;
    var4['titleText'] = var9;
    var9 = {'fontSize': 14, 'lineHeight': 18, 'color': null, 'fontFamily': null, 'textAlign': 'center', 'marginLeft': 16, 'marginRight': 16};
    var15 = var6[var10];
    var15 = var11.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_NORMAL;
    var9['color'] = var15;
    var14 = var14.PRIMARY_NORMAL;
    var9['fontFamily'] = var14;
    var4['subtitleText'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var9['borderRadius'] = var14;
    var9['borderWidth'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOBILE_SECONDARY;
    var9['borderColor'] = var12;
    var4['iconWrapper'] = var9;
    var9 = {};
    var12 = 13;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.AVATAR_SIZE_MAP;
    var12 = var12[var13];
    var9['height'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var10;
    var4['overflow'] = var9;
    var9 = {'marginTop': 8, 'borderRadius': 100, 'alignSelf': 'center', 'paddingHorizontal': 24};
    var4['button'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ActivityTile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityTile(arg1) {
        var4 = _closure1_slot10;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 34;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ThemeContextProvider;
        var1 = {};
        var6 = _closure1_slot8;
        var6 = var6.DARK;
        var1['theme'] = var6;
        var7 = _closure1_slot10;
        var6 = _closure1_slot15;
        var5 = {};
        var9 = arg1;
        var10 = var5;
        var8 = copyDataProperties(var10, var9);
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
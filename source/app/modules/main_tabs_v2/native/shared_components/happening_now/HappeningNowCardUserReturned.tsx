// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUserReturned.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var11 = 2;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var4.HappeningNowCardTrackingType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var4 = var4.LARGE;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexShrink': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['content'] = var10;
    var10 = {};
    var12 = 12;
    var10['marginLeft'] = var12;
    var4['contentText'] = var10;
    var10 = {};
    var10['marginBottom'] = var11;
    var4['contentTextTitle'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function HappeningNowCardUserReturnedTsx1(){const{viewableCardKeys,cardKey}=this.__closure;return viewableCardKeys.get().find(function(key){return key===cardKey;})!=null;}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = {};
    var8 = 'function HappeningNowCardUserReturnedTsx2(isViewable,previous){const{runOnJS,setHasViewed}=this.__closure;if(!isViewable||isViewable===previous)return;runOnJS(setHasViewed)(true);}';
    var4['code'] = var8;
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.index;
            var _closure2_slot0 = var13;
            var12 = var1.userId;
            var _closure2_slot1 = var12;
            var23 = var1.guildId;
            var _closure2_slot2 = var23;
            var8 = var1.fullwidth;
            var19 = var1.cardKey;
            var _closure2_slot3 = var19;
            var6 = var1.panelVariant;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var1 = _closure1_slot13;
            var20 = var1.bind(var5)();
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 10;
            var1 = var14[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.analyticsLocations;
            _closure2_slot4 = var3;
            var24 = _closure1_slot0;
            var10 = 11;
            var1 = var14[var10];
            var16 = var24.bind(var5)(var1);
            var15 = var16.useStateFromStores;
            var1 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var1;
            var4 = new Array(1);
            var4[0] = var12;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var15.bind(var16)(var7, var1, var4);
            _closure2_slot5 = var17;
            var18 = _closure1_slot4;
            var4 = var18.useContext;
            var1 = 12;
            var1 = var14[var1];
            var1 = var24.bind(var5)(var1);
            var1 = var1.ViewableHappeningNowCardKeysContext;
            var25 = var4.bind(var18)(var1);
            _closure2_slot6 = var25;
            var1 = var18.useRef;
            var1 = var1.bind(var18)(var19);
            _closure2_slot7 = var1;
            var7 = var18.useState;
            var1 = var25.get;
            var15 = var1.bind(var25)();
            var4 = var15.find;
            var1 = function(arg1) {
                var2 = _closure2_slot3;
                var1 = arg1;
                var1 = var1 === var2;
                return var1;
            };
            var4 = var4.bind(var15)(var1);
            var1 = null;
            var4 = var1 != var4;
            var15 = var7.bind(var18)(var4);
            var7 = _closure1_slot3;
            var4 = 2;
            var15 = var7.bind(var5)(var15, var4);
            var4 = 0;
            var4 = var15[var4];
            var7 = 1;
            var21 = var15[var7];
            _closure2_slot8 = var21;
            var7 = var18.useRef;
            var7 = var7.bind(var18)(var25);
            _closure2_slot9 = var7;
            var15 = var18.useEffect;
            var7 = function() {
                var2 = _closure2_slot9;
                var1 = _closure2_slot6;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var7 = var15.bind(var18)(var7);
            var16 = var18.useEffect;
            var15 = new Array(1);
            var15[0] = var19;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot7;
                    var2 = var2.current;
                    if(!(var3 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot3;
                    var3['current'] = var2;
                    var3 = _closure2_slot8;
                    var1 = _closure2_slot9;
                    var2 = var1.current;
                    var1 = var2.get;
                    var4 = var1.bind(var2)();
                    var2 = var4.find;
                    var1 = function(arg1) {
                        var2 = _closure2_slot3;
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var2 = var2.bind(var4)(var1);
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var16.bind(var18)(var7, var15);
            var22 = 13;
            var7 = var14[var22];
            var18 = var24.bind(var5)(var7);
            var16 = var18.useAnimatedReaction;
            var15 = function T() {
                var2 = _closure2_slot6;
                var1 = var2.get;
                var3 = var1.bind(var2)();
                var2 = var3.find;
                var1 = function(arg1) {
                    var2 = _closure2_slot3;
                    var1 = arg1;
                    var1 = var1 === var2;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var7 = {};
            var7['viewableCardKeys'] = var25;
            var7['cardKey'] = var19;
            var15['__closure'] = var7;
            var7 = 2084761019690.0;
            var15['__workletHash'] = var7;
            var7 = _closure1_slot14;
            var15['__initData'] = var7;
            var7 = function N(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3;
                    if(!var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var2 = arg2;
                    var1 = var3 !== var2;
case 6:
                    if(!var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure2_slot8;
                    var2 = var2.bind(var4)(var1);
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = {};
            var22 = var14[var22];
            var22 = var24.bind(var5)(var22);
            var22 = var22.runOnJS;
            var19['runOnJS'] = var22;
            var19['setHasViewed'] = var21;
            var7['__closure'] = var19;
            var19 = 10943750422586.0;
            var7['__workletHash'] = var19;
            var19 = _closure1_slot15;
            var7['__initData'] = var19;
            var7 = var16.bind(var18)(var15, var7);
            var7 = 14;
            var7 = var14[var7];
            var7 = var9.bind(var5)(var7);
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = {};
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var9 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 15;
            var18 = var16[var14];
            var18 = var15.bind(var5)(var18);
            var18 = var18.ImpressionTypes;
            var18 = var18.VIEW;
            var9['type'] = var18;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.ImpressionNames;
            var14 = var14.USER_RETURNED_HAPPENING_NOW;
            var9['name'] = var14;
            var14 = {};
            var14['returned_user_id'] = var12;
            var9['properties'] = var14;
            var4 = var9;
case 12:
            var4 = var7.bind(var5)(var4);
            var9 = _closure1_slot4;
            var7 = var9.useCallback;
            var4 = new Array(5);
            var4[0] = var13;
            var4[1] = var23;
            var4[2] = var12;
            var4[3] = var17;
            var4[4] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot9;
                    var5 = var3.ACTIVITY_CARD_CLICKED;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var4['order'] = var8;
                    var8 = _closure2_slot2;
                    var4['guild_id'] = var8;
                    var8 = _closure1_slot8;
                    var8 = var8.USER_RETURNED_CARD;
                    var4['type'] = var8;
                    var9 = _closure2_slot1;
                    var8 = new Array(1);
                    var8[0] = var9;
                    var4['highlighted_user_ids'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 18;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 17;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.default;
                        var2 = {};
                        var4 = _closure2_slot5;
                        var4 = var4.id;
                        var2['userId'] = var4;
                        var4 = _closure2_slot5;
                        var2['localUser'] = var4;
                        var1 = _closure2_slot4;
                        var2['sourceAnalyticsLocations'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 13:
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var3, var4);
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var10];
            var13 = var4.bind(var5)(var3);
            var12 = var13.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var3;
            var4 = new Array(2);
            var4[0] = var23;
            var4[1] = var17;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var1 = {};
                    var4 = _closure1_slot6;
                    var5 = var4.getStatus;
                    var3 = _closure2_slot5;
                    var3 = var3.id;
                    var6 = _closure2_slot2;
                    var3 = var5.bind(var4)(var3, var6);
                    var1['status'] = var3;
                    var5 = var4.getActivities;
                    var3 = _closure2_slot5;
                    var3 = var3.id;
                    var3 = var5.bind(var4)(var3, var6);
                    var1['activities'] = var3;
                    var3 = var4.isMobileOnline;
                    var2 = _closure2_slot5;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1['isMobileOnline'] = var2;
                    _fun0005_ip = 17; continue _fun0005;
case 15:
                    var1 = {};
case 17:
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var10, var3, var4);
            var12 = var3.status;
            _closure2_slot10 = var12;
            var22 = var3.activities;
            var21 = var3.isMobileOnline;
            var4 = var9.useMemo;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var17;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0006_ip = 18; continue _fun0006 }
case 16:
                    var4 = _closure2_slot5;
                    var3 = var4.isSystemUser;
                    var3 = var3.bind(var4)();
                    var1 = null;
                    if(var3) { _fun0006_ip = 19; continue _fun0006 }
case 18:
                    var1 = _closure2_slot10;
case 19:
                    return var1;
                }
            };
            var18 = var4.bind(var9)(var2, var3);
            if(!(var1 != var17)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var15 = 19;
            var4 = var2[var15];
            var9 = var3.bind(var5)(var4);
            var4 = var9.getName;
            var4 = var4.bind(var9)(var17);
            var10 = new Array(2);
            var10[0] = var4;
            var9 = _closure1_slot0;
            var4 = 20;
            var4 = var2[var4];
            var9 = var9.bind(var5)(var4);
            var4 = var9.getStatusLabel;
            var4 = var4.bind(var9)(var12);
            var10[1] = var4;
            var9 = var10.join;
            var4 = ', ';
            var13 = var9.bind(var10)(var4);
            var4 = _closure1_slot10;
            var12 = 21;
            var2 = var2[var12];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['onPress'] = var7;
            var7 = 'stretchy';
            if(!var8) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = 'full';
case 22:
            var2['width'] = var7;
            var2['panelVariant'] = var6;
            var2['accessibilityLabel'] = var13;
            var8 = _closure1_slot11;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var20.content;
            var6['style'] = var9;
            var14 = _closure1_slot10;
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            var9 = 8;
            var9 = var19[var9];
            var10 = var16.bind(var5)(var9);
            var9 = {};
            var9['user'] = var17;
            var24 = var17.avatarDecoration;
            var9['avatarDecoration'] = var24;
            var9['guildId'] = var23;
            var23 = _closure1_slot12;
            var9['size'] = var23;
            var9['isMobileOnline'] = var21;
            var21 = 22;
            var21 = var19[var21];
            var21 = var16.bind(var5)(var21);
            var21 = var21.bind(var5)(var22);
            var9['streaming'] = var21;
            var9['status'] = var18;
            var9['accessibilityLabel'] = var13;
            var21 = true;
            var9['autoStatusCutout'] = var21;
            var10 = var14.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var13 = var20.contentText;
            var10['style'] = var13;
            var18 = _closure1_slot0;
            var11 = var19[var12];
            var11 = var18.bind(var5)(var11);
            var13 = var11.HappeningNowCardHeader;
            var11 = {};
            var11['noMargin'] = var21;
            var20 = var20.contentTextTitle;
            var11['style'] = var20;
            var15 = var19[var15];
            var16 = var16.bind(var5)(var15);
            var15 = var16.getName;
            var15 = var15.bind(var16)(var17);
            var11['children'] = var15;
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var19[var12];
            var12 = var18.bind(var5)(var12);
            var13 = var12.HappeningNowCardSubtitle;
            var12 = {};
            var15 = 23;
            var16 = var19[var15];
            var16 = var18.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.0/R0d0;
            var15 = var16.bind(var17)(var15);
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var10['children'] = var11;
            var10 = var8.bind(var5)(var7, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 20:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUserReturned.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
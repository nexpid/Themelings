// app/modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function ActionChannelInfo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var2 = var2.action;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var4 = undefined;
            var8 = var2.bind(var4)(var3);
            var5 = var8.useStateFromStores;
            var9 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var8)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 13;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = true;
            var10 = var3.bind(var4)(var5, var1);
            var3 = _closure1_slot12;
            var1 = 14;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {'variant': 'text-xxs/normal', 'color': 'header-secondary'};
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 15;
            var8 = var11[var5];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var7 = var5.MkzlDA;
            var5 = {};
            var5['channelName'] = var10;
            var5 = var8.bind(var9)(var7, var5);
            var1['children'] = var5;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = {'variant': 'text-xxs/normal', 'color': 'header-secondary'};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 15;
            var6 = var14[var10];
            var6 = var13.bind(var4)(var6);
            var9 = var6.intl;
            var8 = var9.format;
            var6 = var14[var10];
            var6 = var13.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.MkzlDA;
            var6 = {};
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.J90oLS;
            var10 = var11.bind(var12)(var10);
            var6['channelName'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var5['children'] = var6;
            var1 = var5;
case 4:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function ChannelActionEmoji(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var2 = var2.emoji;
            var5 = undefined;
            var _closure2_slot0 = var5;
            var3 = _closure1_slot15;
            var6 = var3.bind(var5)();
            var7 = _closure1_slot12;
            var4 = _closure1_slot5;
            var3 = {};
            var8 = var6.emojiPlaceholder;
            var3['style'] = var8;
            var11 = _closure1_slot12;
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 16;
            var8 = var14[var12];
            var9 = var13.bind(var5)(var8);
            var8 = {};
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.Sizes;
            var12 = var12.REFRESH_SMALL_16;
            var8['size'] = var12;
            var12 = 17;
            var12 = var14[var12];
            var12 = var13.bind(var5)(var12);
            var8['source'] = var12;
            var8 = var11.bind(var5)(var9, var8);
            var3['children'] = var8;
            var4 = var7.bind(var5)(var4, var3);
            var3 = null;
            var7 = var3 == var2;
            var12 = undefined;
            if(var7) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var12 = var2.id;
case 5:
            _closure2_slot0 = var12;
            var8 = var3 == var2;
            var7 = undefined;
            if(var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = var2.name;
case 7:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 12;
            var2 = var9[var2];
            var11 = var8.bind(var5)(var2);
            var9 = var11.useStateFromStores;
            var2 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var4 = _closure1_slot7;
                    var3 = var4.getCustomEmojiById;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 9:
                    return var1;
                }
            };
            var11 = var9.bind(var11)(var8, var1, var2);
            if(!(var3 == var11)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var4;
            if(!(var3 != var7)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 20;
            var8 = var13[var2];
            var9 = var12.bind(var5)(var8);
            var8 = var9.getByName;
            var2 = var13[var2];
            var13 = var12.bind(var5)(var2);
            var12 = var13.convertSurrogateToName;
            var2 = false;
            var2 = var12.bind(var13)(var7, var2);
            var2 = var8.bind(var9)(var2);
            var1 = var4;
            if(!(var3 != var2)) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            var4 = _closure1_slot12;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 14;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var8 = var6.textEmoji;
            var2['style'] = var8;
            var8 = 'heading-lg/normal';
            var2['variant'] = var8;
            var2['children'] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            _fun0002_ip = 16; continue _fun0002;
case 11:
            var4 = _closure1_slot12;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 18;
            var2 = var9[var2];
            var3 = var8.bind(var5)(var2);
            var2 = {};
            var6 = var6.emoji;
            var2['style'] = var6;
            var6 = {};
            var7 = 19;
            var7 = var9[var7];
            var9 = var8.bind(var5)(var7);
            var8 = var9.getEmojiURL;
            var7 = {};
            var12 = var11.id;
            var7['id'] = var12;
            var11 = var11.animated;
            var7['animated'] = var11;
            var10 = _closure1_slot11;
            var7['size'] = var10;
            var7 = var8.bind(var9)(var7);
            var6['uri'] = var7;
            var2['source'] = var6;
            var6 = 'contain';
            var2['resizeMode'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function MemberActionChatInputBanner(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var5 = undefined;
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var3 = _closure1_slot15;
            var16 = var3.bind(var5)();
            var _closure2_slot1 = var16;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 21;
            var3 = var7[var4];
            var9 = var6.bind(var5)(var3);
            var8 = var9.useMemberActionsForChannel;
            var3 = var1.guild_id;
            var8 = var8.bind(var9)(var3, var1);
            var3 = var8.channelAction;
            var _closure2_slot2 = var3;
            var9 = var8.completed;
            var _closure2_slot3 = var9;
            var4 = var7[var4];
            var8 = var6.bind(var5)(var4);
            var7 = var8.useNextMemberAction;
            var6 = var1.guild_id;
            var1 = null;
            var10 = var1 == var3;
            var4 = undefined;
            if(var10) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var4 = var3.channelId;
case 17:
            var8 = var7.bind(var8)(var6, var4);
            _closure2_slot4 = var8;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var4 = var7[var4];
            var10 = var6.bind(var5)(var4);
            var7 = var10.useStateFromStores;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var23 = var7.bind(var10)(var6, var4);
            _closure2_slot5 = var23;
            var4 = var1 == var3;
            var7 = undefined;
            if(var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var7 = var3.actionType;
case 19:
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 22;
            var6 = var14[var4];
            var6 = var17.bind(var5)(var6);
            var6 = var6.NewMemberActionTypes;
            var6 = var6.VIEW;
            var10 = var7 === var6;
            _closure2_slot6 = var10;
            var11 = _closure1_slot4;
            var7 = var11.useState;
            var6 = var14[var4];
            var6 = var17.bind(var5)(var6);
            var6 = var6.CHANNEL_ACTION_BANNER_HEIGHT;
            var7 = var7.bind(var11)(var6);
            var6 = _closure1_slot3;
            var18 = 2;
            var6 = var6.bind(var5)(var7, var18);
            var13 = 0;
            var11 = var6[var13];
            _closure2_slot7 = var11;
            var15 = 1;
            var6 = var6[var15];
            _closure2_slot8 = var6;
            var19 = _closure1_slot4;
            var7 = var19.useState;
            var4 = var14[var4];
            var4 = var17.bind(var5)(var4);
            var4 = var4.CHANNEL_ACTION_BANNER_HEIGHT;
            var7 = var7.bind(var19)(var4);
            var4 = _closure1_slot3;
            var4 = var4.bind(var5)(var7, var18);
            var7 = var4[var13];
            _closure2_slot9 = var7;
            var4 = var4[var15];
            _closure2_slot10 = var4;
            var18 = 23;
            var15 = var14[var18];
            var19 = var17.bind(var5)(var15);
            var15 = var19.useSharedValue;
            var15 = var15.bind(var19)(var13);
            _closure2_slot11 = var15;
            var14 = var14[var18];
            var17 = var17.bind(var5)(var14);
            var14 = var17.useSharedValue;
            if(!var9) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var13 = var7;
case 21:
            var22 = var14.bind(var17)(var13);
            _closure2_slot12 = var22;
            var17 = _closure1_slot4;
            var14 = var17.useEffect;
            var13 = new Array(4);
            var13[0] = var15;
            var13[1] = var9;
            var13[2] = var10;
            var13[3] = var11;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0005_ip = 23; continue _fun0005 }
case 25:
                    var4 = _closure2_slot11;
                    var3 = var4.set;
                    var2 = _closure2_slot7;
                    var2 = var3.bind(var4)(var2);
                    _fun0005_ip = 26; continue _fun0005;
case 23:
                    var3 = _closure2_slot11;
                    var2 = var3.set;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var14.bind(var17)(var11, var13);
            var14 = _closure1_slot4;
            var13 = var14.useEffect;
            var11 = new Array(4);
            var11[0] = var22;
            var11[1] = var9;
            var11[2] = var8;
            var11[3] = var7;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0006_ip = 27; continue _fun0006 }
case 24:
                    var3 = _closure2_slot4;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0006_ip = 9; continue _fun0006 }
case 27:
                    var4 = _closure2_slot12;
                    var3 = var4.set;
                    var2 = 0;
                    var2 = var3.bind(var4)(var2);
                    _fun0006_ip = 28; continue _fun0006;
case 9:
                    var3 = _closure2_slot12;
                    var2 = var3.set;
                    var1 = _closure2_slot9;
                    var1 = var2.bind(var3)(var1);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var13.bind(var14)(var7, var11);
            var17 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = var19[var18];
            var13 = var17.bind(var5)(var7);
            var11 = var13.useAnimatedStyle;
            var7 = function H() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var2 = {};
                    if(var1) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 23;
                    var4 = var6[var4];
                    var12 = undefined;
                    var6 = var5.bind(var12)(var4);
                    var5 = var6.withDelay;
                    var7 = _closure2_slot3;
                    var4 = 200;
                    if(!var7) { _fun0007_ip = 31; continue _fun0007 }
case 28:
                    var4 = 800;
case 31:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 24;
                    var1 = var13[var1];
                    var9 = var11.bind(var12)(var1);
                    var8 = var9.withTiming;
                    var7 = _closure2_slot11;
                    var1 = var7.get;
                    var7 = var1.bind(var7)();
                    var1 = {};
                    var10 = 400;
                    var1['duration'] = var10;
                    var10 = 25;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.DECELERATED_EASING;
                    var1['easing'] = var10;
                    var1 = var8.bind(var9)(var7, var1);
                    var1 = var5.bind(var6)(var4, var1);
                    var2['height'] = var1;
                    var1 = var2;
                    _fun0007_ip = 32; continue _fun0007;
case 29:
                    var4 = _closure2_slot11;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2['height'] = var3;
                    var1 = var2;
case 32:
                    return var1;
                }
            };
            var14 = {};
            var14['useReducedMotion'] = var23;
            var14['height'] = var15;
            var15 = var19[var18];
            var15 = var17.bind(var5)(var15);
            var15 = var15.withDelay;
            var14['withDelay'] = var15;
            var14['completed'] = var9;
            var20 = 24;
            var15 = var19[var20];
            var15 = var17.bind(var5)(var15);
            var15 = var15.withTiming;
            var14['withTiming'] = var15;
            var15 = 25;
            var21 = var19[var15];
            var21 = var17.bind(var5)(var21);
            var21 = var21.DECELERATED_EASING;
            var14['DECELERATED_EASING'] = var21;
            var7['__closure'] = var14;
            var14 = 5585837927201.0;
            var7['__workletHash'] = var14;
            var14 = _closure1_slot16;
            var7['__initData'] = var14;
            var21 = var11.bind(var13)(var7);
            var7 = var19[var18];
            var13 = var17.bind(var5)(var7);
            var11 = var13.useAnimatedStyle;
            var7 = function B() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot5;
                    var2 = {};
                    if(var1) { _fun0008_ip = 7; continue _fun0008 }
case 30:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 23;
                    var4 = var6[var4];
                    var12 = undefined;
                    var6 = var5.bind(var12)(var4);
                    var5 = var6.withDelay;
                    var7 = _closure2_slot6;
                    var4 = 0;
                    if(var7) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                    var7 = _closure2_slot3;
                    var4 = 0;
                    if(!var7) { _fun0008_ip = 33; continue _fun0008 }
case 35:
                    var4 = 1200;
case 33:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var1 = 24;
                    var1 = var13[var1];
                    var9 = var11.bind(var12)(var1);
                    var8 = var9.withTiming;
                    var7 = _closure2_slot12;
                    var1 = var7.get;
                    var7 = var1.bind(var7)();
                    var1 = {};
                    var10 = 400;
                    var1['duration'] = var10;
                    var10 = 25;
                    var10 = var13[var10];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.DECELERATED_EASING;
                    var1['easing'] = var10;
                    var1 = var8.bind(var9)(var7, var1);
                    var1 = var5.bind(var6)(var4, var1);
                    var2['height'] = var1;
                    var1 = var2;
                    _fun0008_ip = 36; continue _fun0008;
case 7:
                    var4 = _closure2_slot12;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var2['height'] = var3;
                    var1 = var2;
case 36:
                    return var1;
                }
            };
            var14 = {};
            var14['useReducedMotion'] = var23;
            var14['nextHeight'] = var22;
            var22 = var19[var18];
            var22 = var17.bind(var5)(var22);
            var22 = var22.withDelay;
            var14['withDelay'] = var22;
            var14['isViewAction'] = var10;
            var14['completed'] = var9;
            var20 = var19[var20];
            var20 = var17.bind(var5)(var20);
            var20 = var20.withTiming;
            var14['withTiming'] = var20;
            var15 = var19[var15];
            var15 = var17.bind(var5)(var15);
            var15 = var15.DECELERATED_EASING;
            var14['DECELERATED_EASING'] = var15;
            var7['__closure'] = var14;
            var14 = 10256555667281.0;
            var7['__workletHash'] = var14;
            var14 = _closure1_slot17;
            var7['__initData'] = var14;
            var17 = var11.bind(var13)(var7);
            var13 = _closure1_slot4;
            var11 = var13.useCallback;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot8;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13 = var11.bind(var13)(var6, var7);
            var11 = _closure1_slot4;
            var7 = var11.useCallback;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = _closure2_slot10;
                var1 = var1.layout;
                var2 = var1.height;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var19 = var7.bind(var11)(var4, var6);
            if(!(var1 != var3)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var14 = function renderAction() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var16 = _closure2_slot1;
                    var1 = var16.container;
                    var2['style'] = var1;
                    var9 = _closure1_slot12;
                    var8 = _closure1_slot20;
                    var5 = {};
                    var15 = _closure2_slot2;
                    var1 = var15.emoji;
                    var5['emoji'] = var1;
                    var1 = undefined;
                    var8 = var9.bind(var1)(var8, var5);
                    var5 = new Array(3);
                    var5[0] = var8;
                    var10 = _closure1_slot13;
                    var9 = _closure1_slot5;
                    var8 = {};
                    var11 = var16.text;
                    var8['style'] = var11;
                    var14 = _closure1_slot12;
                    var18 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var12 = 14;
                    var11 = var19[var12];
                    var11 = var18.bind(var1)(var11);
                    var13 = var11.Text;
                    var11 = {'variant': 'text-sm/medium', 'color': 'header-primary'};
                    var16 = var16.wrap;
                    var11['style'] = var16;
                    var15 = var15.title;
                    var11['children'] = var15;
                    var13 = var14.bind(var1)(var13, var11);
                    var11 = new Array(2);
                    var11[0] = var13;
                    var14 = _closure1_slot12;
                    var12 = var19[var12];
                    var12 = var18.bind(var1)(var12);
                    var13 = var12.Text;
                    var12 = {'variant': 'text-xxs/normal', 'color': 'text-muted'};
                    var15 = 15;
                    var16 = var19[var15];
                    var16 = var18.bind(var1)(var16);
                    var17 = var16.intl;
                    var16 = var17.string;
                    var15 = var19[var15];
                    var15 = var18.bind(var1)(var15);
                    var15 = var15.t;
                    var15 = var15.ElGg8/;
                    var15 = var16.bind(var17)(var15);
                    var12['children'] = var15;
                    var12 = var14.bind(var1)(var13, var12);
                    var11[1] = var12;
                    var8['children'] = var11;
                    var8 = var10.bind(var1)(var9, var8);
                    var5[1] = var8;
                    var6 = _closure2_slot3;
                    if(!var6) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                    var9 = _closure1_slot12;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 16;
                    var7 = var12[var10];
                    var8 = var11.bind(var1)(var7);
                    var7 = {};
                    var13 = true;
                    var7['disableColor'] = var13;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var10 = var10.Sizes;
                    var10 = var10.MEDIUM;
                    var7['size'] = var10;
                    var10 = 26;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var7['source'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
case 39:
                    var5[2] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var15 = function renderNextAction() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var2 = var1 == var2;
                    if(var2) { _fun0010_ip = 41; continue _fun0010 }
case 42:
                    var5 = _closure1_slot13;
                    var18 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var2 = 27;
                    var2 = var15[var2];
                    var4 = undefined;
                    var2 = var18.bind(var4)(var2);
                    var3 = var2.PressableHighlight;
                    var2 = {};
                    var6 = 'button';
                    var2['accessibilityRole'] = var6;
                    var16 = 15;
                    var6 = var15[var16];
                    var6 = var18.bind(var4)(var6);
                    var8 = var6.intl;
                    var7 = var8.string;
                    var6 = var15[var16];
                    var6 = var18.bind(var4)(var6);
                    var6 = var6.t;
                    var6 = var6.PDTjLC;
                    var6 = var7.bind(var8)(var6);
                    var2['accessibilityLabel'] = var6;
                    var13 = _closure2_slot1;
                    var6 = var13.container;
                    var2['style'] = var6;
                    var6 = function onPress() {
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 28;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.transitionTo;
                        var6 = _closure1_slot10;
                        var5 = var6.CHANNEL;
                        var4 = _closure2_slot0;
                        var4 = var4.guild_id;
                        var1 = _closure2_slot4;
                        var1 = var1.channelId;
                        var1 = var5.bind(var6)(var4, var1);
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot20;
                    var6 = {};
                    var9 = _closure2_slot4;
                    var9 = var9.emoji;
                    var6['emoji'] = var9;
                    var7 = var8.bind(var4)(var7, var6);
                    var6 = new Array(3);
                    var6[0] = var7;
                    var9 = _closure1_slot13;
                    var8 = _closure1_slot5;
                    var7 = {};
                    var11 = var13.text;
                    var7['style'] = var11;
                    var14 = _closure1_slot12;
                    var11 = 14;
                    var11 = var15[var11];
                    var11 = var18.bind(var4)(var11);
                    var12 = var11.Text;
                    var11 = {'variant': 'text-sm/medium', 'color': 'header-primary'};
                    var19 = var13.wrap;
                    var11['style'] = var19;
                    var19 = var15[var16];
                    var19 = var18.bind(var4)(var19);
                    var20 = var19.intl;
                    var19 = var20.format;
                    var16 = var15[var16];
                    var16 = var18.bind(var4)(var16);
                    var16 = var16.t;
                    var18 = var16./beONz;
                    var16 = {};
                    var21 = _closure2_slot4;
                    var21 = var21.title;
                    var16['step'] = var21;
                    var16 = var19.bind(var20)(var18, var16);
                    var11['children'] = var16;
                    var12 = var14.bind(var4)(var12, var11);
                    var11 = new Array(2);
                    var11[0] = var12;
                    var16 = _closure1_slot12;
                    var14 = _closure1_slot19;
                    var12 = {};
                    var17 = _closure2_slot4;
                    var12['action'] = var17;
                    var12 = var16.bind(var4)(var14, var12);
                    var11[1] = var12;
                    var7['children'] = var11;
                    var7 = var9.bind(var4)(var8, var7);
                    var6[1] = var7;
                    var9 = _closure1_slot12;
                    var8 = _closure1_slot5;
                    var7 = {};
                    var11 = var13.circle;
                    var7['style'] = var11;
                    var12 = _closure1_slot12;
                    var14 = _closure1_slot1;
                    var16 = 16;
                    var10 = var15[var16];
                    var11 = var14.bind(var4)(var10);
                    var10 = {};
                    var16 = var15[var16];
                    var16 = var14.bind(var4)(var16);
                    var16 = var16.Sizes;
                    var16 = var16.REFRESH_SMALL_16;
                    var10['size'] = var16;
                    var13 = var13.icon;
                    var10['style'] = var13;
                    var13 = 29;
                    var13 = var15[var13];
                    var13 = var14.bind(var4)(var13);
                    var10['source'] = var13;
                    var10 = var12.bind(var4)(var11, var10);
                    var7['children'] = var10;
                    var7 = var9.bind(var4)(var8, var7);
                    var6[2] = var7;
                    var2['children'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
case 41:
                    return var1;
                }
            };
            var4 = _closure1_slot13;
            var3 = _closure1_slot14;
            var2 = {};
            var11 = _closure1_slot12;
            var7 = _closure1_slot5;
            var6 = {};
            var20 = var16.measurement;
            var6['style'] = var20;
            var6['onLayout'] = var13;
            var13 = var14.bind(var5)();
            var6['children'] = var13;
            var7 = var11.bind(var5)(var7, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var7 = !var10;
            if(var10) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var13 = _closure1_slot12;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var18];
            var10 = var11.bind(var5)(var10);
            var11 = var10.View;
            var10 = {};
            var22 = var16.animatedContainer;
            var20 = new Array(2);
            var20[0] = var22;
            var20[1] = var21;
            var10['style'] = var20;
            var14 = var14.bind(var5)();
            var10['children'] = var14;
            var7 = var13.bind(var5)(var11, var10);
case 43:
            var6[1] = var7;
            var7 = null;
            if(!var9) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var8 = var1 != var8;
            var7 = null;
            if(!var8) { _fun0004_ip = 45; continue _fun0004 }
case 47:
            var10 = _closure1_slot13;
            var9 = _closure1_slot14;
            var8 = {};
            var14 = _closure1_slot12;
            var13 = _closure1_slot5;
            var11 = {};
            var20 = var16.measurement;
            var11['style'] = var20;
            var11['onLayout'] = var19;
            var19 = var15.bind(var5)();
            var11['children'] = var19;
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot12;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var18];
            var12 = var13.bind(var5)(var12);
            var13 = var12.View;
            var12 = {};
            var18 = var16.animatedContainer;
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var12['style'] = var16;
            var15 = var15.bind(var5)();
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 45:
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 37:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot12 = var5;
    var5 = var4.jsxs;
    var _closure1_slot13 = var5;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var7[var4];
    var9 = var6.bind(var1)(var4);
    var5 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 'hidden';
    var10['overflow'] = var11;
    var4['animatedContainer'] = var10;
    var10 = {'opacity': 0, 'position': 'absolute'};
    var4['measurement'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'paddingHorizontal': 12, 'paddingVertical': 8};
    var11 = 11;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var13;
    var4['container'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_TERTIARY;
    var10['backgroundColor'] = var13;
    var4['bottomPaddingContainer'] = var10;
    var10 = {'flexGrow': 1, 'flexShrink': 1, 'marginLeft': 8};
    var4['text'] = var10;
    var10 = {'flexShrink': 1, 'flexWrap': 'wrap'};
    var4['wrap'] = var10;
    var10 = {'width': 24, 'height': 24};
    var4['emoji'] = var10;
    var10 = {'width': 24, 'textAlign': 'center'};
    var4['textEmoji'] = var10;
    var10 = {'width': 24, 'height': 24, 'backgroundColor': null, 'borderRadius': null, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var10['borderRadius'] = var13;
    var4['emojiPlaceholder'] = var10;
    var10 = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': 20, 'width': 20, 'borderRadius': 15, 'marginLeft': 8};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BRAND;
    var10['backgroundColor'] = var13;
    var4['circle'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var10['tintColor'] = var11;
    var4['icon'] = var10;
    var4 = var5.bind(var9)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var5 = 'function MemberActionChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(completed?800:200,withTiming(height.get(),{duration:400,easing:DECELERATED_EASING}))};}';
    var4['code'] = var5;
    var _closure1_slot16 = var4;
    var4 = {};
    var5 = 'function MemberActionChatInputBannerTsx2(){const{useReducedMotion,nextHeight,withDelay,isViewAction,completed,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:nextHeight.get()};}return{height:withDelay(!isViewAction&&completed?1200:0,withTiming(nextHeight.get(),{duration:400,easing:DECELERATED_EASING}))};}';
    var4['code'] = var5;
    var _closure1_slot17 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var6 = var2.channel;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 30;
            var3 = var8[var3];
            var5 = undefined;
            var9 = var4.bind(var5)(var3);
            var7 = var9.useCanSeeOnboardingHome;
            var3 = var6.guild_id;
            var3 = var7.bind(var9)(var3);
            var7 = 12;
            var7 = var8[var7];
            var10 = var4.bind(var5)(var7);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var11;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getSelfMember;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if(var3) { _fun0012_ip = 48; continue _fun0012 }
case 49:
                    var2 = var1.isPending;
case 48:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var7, var1);
            var1 = 21;
            var1 = var8[var1];
            var8 = var4.bind(var5)(var1);
            var4 = var8.useAllActionsCompleted;
            var1 = var6.guild_id;
            var8 = var4.bind(var8)(var1);
            var1 = null;
            if(var8) { _fun0011_ip = 17; continue _fun0011 }
case 50:
            var1 = null;
            if(var7) { _fun0011_ip = 17; continue _fun0011 }
case 51:
            var1 = null;
            if(!var3) { _fun0011_ip = 17; continue _fun0011 }
case 52:
            var4 = _closure1_slot12;
            var3 = _closure1_slot21;
            var2 = {};
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 17:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var5 = var8.memo;
    var2 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 21;
            var1 = var8[var3];
            var5 = undefined;
            var9 = var4.bind(var5)(var1);
            var7 = var9.useMemberActionsForChannel;
            var1 = var6.guild_id;
            var7 = var7.bind(var9)(var1, var6);
            var1 = var7.channelAction;
            var7 = var7.completed;
            var3 = var8[var3];
            var10 = var4.bind(var5)(var3);
            var9 = var10.useNextMemberAction;
            var8 = var6.guild_id;
            var4 = null;
            var11 = var4 == var1;
            var3 = undefined;
            if(var11) { _fun0013_ip = 53; continue _fun0013 }
case 54:
            var3 = var1.channelId;
case 53:
            var3 = var9.bind(var10)(var8, var3);
            var9 = var4 == var1;
            var8 = undefined;
            if(var9) { _fun0013_ip = 55; continue _fun0013 }
case 56:
            var8 = var1.actionType;
case 55:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 22;
            var1 = var10[var1];
            var1 = var9.bind(var5)(var1);
            var1 = var1.NewMemberActionTypes;
            var1 = var1.VIEW;
            if(!(var8 === var1)) { _fun0013_ip = 57; continue _fun0013 }
case 18:
            var1 = null;
            if(!var7) { _fun0013_ip = 58; continue _fun0013 }
case 17:
            var3 = var4 != var3;
            var1 = null;
            if(!var3) { _fun0013_ip = 58; continue _fun0013 }
case 57:
            var4 = _closure1_slot12;
            var3 = _closure1_slot18;
            var2 = {};
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 58:
            return var1;
        }
    };
    var2 = var5.bind(var8)(var2);
    var5 = 31;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_onboarding_home/native/MemberActionChatInputBanner.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MemberActionChatInputBannerGuarded'] = var4;
    var3['MemberActionsChatInputBannerGuardedOuter'] = var2;
    return var1;
})();
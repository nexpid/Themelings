// app/modules/user_profile/native/UserProfilePrimaryInfo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var9;
    var5 = function DisplayName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.user;
            var _closure2_slot0 = var3;
            var11 = var2.name;
            var _closure2_slot1 = var11;
            var4 = var2.themeType;
            var12 = var2.onPress;
            var10 = var2.accessibilityHint;
            var9 = var2.showChevron;
            var5 = undefined;
            if(!(var9 === var5)) { _fun0001_ip = 54; continue _fun0001 }
 52:
            var9 = false;
 54:
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot15;
            var8 = var3.bind(var5)();
            _closure2_slot2 = var8;
            var3 = _closure1_slot18;
            var3 = var3.bind(var5)(var4);
            var3 = var3.headingVariant;
            _closure2_slot3 = var3;
            var6 = function renderDisplayName() {
                var4 = _closure1_slot12;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': null, 'color': 'header-primary', 'lineClamp': 2};
                var6 = _closure2_slot3;
                var1['variant'] = var6;
                var5 = _closure2_slot1;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var7 = function renderBotTag() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = var2.isSystemUser;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0002_ip = 132; continue _fun0002 }
 20:
                    var1 = _closure2_slot0;
                    var2 = var1.bot;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 130; continue _fun0002 }
 35:
                    var5 = _closure1_slot12;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 10;
                    var2 = var9[var7];
                    var4 = undefined;
                    var3 = var8.bind(var4)(var2);
                    var2 = {};
                    var10 = _closure2_slot2;
                    var10 = var10.botTag;
                    var2['style'] = var10;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.Types;
                    var7 = var7.BOT;
                    var2['type'] = var7;
                    var8 = _closure2_slot0;
                    var7 = var8.isVerifiedBot;
                    var7 = var7.bind(var8)();
                    var2['verified'] = var7;
                    var1 = var5.bind(var4)(var3, var2);
 130:
                    _fun0002_ip = 227; continue _fun0002;
 132:
                    var5 = _closure1_slot12;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 10;
                    var2 = var9[var7];
                    var4 = undefined;
                    var3 = var8.bind(var4)(var2);
                    var2 = {};
                    var10 = _closure2_slot2;
                    var10 = var10.botTag;
                    var2['style'] = var10;
                    var7 = var9[var7];
                    var7 = var8.bind(var4)(var7);
                    var7 = var7.Types;
                    var7 = var7.SYSTEM_DM;
                    var2['type'] = var7;
                    var7 = _closure2_slot0;
                    var6 = var7.isVerifiedBot;
                    var6 = var6.bind(var7)();
                    var2['verified'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 227:
                    return var1;
                }
            };
            var1 = null;
            if(!(var1 != var12)) { _fun0001_ip = 266; continue _fun0001 }
 115:
            var4 = _closure1_slot13;
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 11;
            var1 = var13[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.PressableOpacity;
            var1 = {};
            var1['onPress'] = var12;
            var12 = 'button';
            var1['accessibilityRole'] = var12;
            var1['accessibilityLabel'] = var11;
            var1['accessibilityHint'] = var10;
            var8 = var8.displayName;
            var1['style'] = var8;
            var10 = var6.bind(var5)();
            var8 = new Array(3);
            var8[0] = var10;
            var10 = var7.bind(var5)();
            var8[1] = var10;
            if(!var9) { _fun0001_ip = 250; continue _fun0001 }
 200:
            var12 = _closure1_slot12;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 12;
            var10 = var13[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.ChevronSmallDownIcon;
            var10 = {'size': 'sm', 'color': 'icon-muted'};
            var9 = var12.bind(var5)(var11, var10);
 250:
            var8[2] = var9;
            var1['children'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 306; continue _fun0001;
 266:
            var4 = _closure1_slot13;
            var3 = _closure1_slot5;
            var2 = {};
            var8 = var6.bind(var5)();
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var7.bind(var5)();
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 306:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function UserTagAndPronouns(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var9 = var3.userTag;
            var _closure2_slot0 = var9;
            var17 = var3.pronouns;
            var _closure2_slot1 = var17;
            var5 = var3.themeType;
            var13 = var3.onPressUserTag;
            var _closure2_slot2 = var13;
            var2 = var3.userTagAccessibilityHint;
            var _closure2_slot3 = var2;
            var18 = var3.onPressPronouns;
            var16 = var3.pronounsAccessibilityHint;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot15;
            var7 = var3.bind(var4)();
            var11 = null;
            var6 = var11 != var17;
            if(!var6) { _fun0003_ip = 100; continue _fun0003 }
 89:
            var8 = var17.length;
            var3 = 0;
            var6 = var8 > var3;
 100:
            var3 = _closure1_slot18;
            var3 = var3.bind(var4)(var5);
            var20 = var3.textVariant;
            _closure2_slot4 = var20;
            var8 = _closure1_slot3;
            var5 = var8.useCallback;
            var3 = new Array(4);
            var3[0] = var13;
            var3[1] = var20;
            var3[2] = var9;
            var3[3] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 176; continue _fun0004 }
 16:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var6 = undefined;
                    var2 = var4.bind(var6)(var2);
                    var4 = var2.Text;
                    var2 = {'variant': null, 'color': 'header-primary', 'lineClamp': 2};
                    var7 = _closure2_slot4;
                    var2['variant'] = var7;
                    var7 = _closure2_slot0;
                    var2['children'] = var7;
                    var7 = var5.bind(var6)(var4, var2);
                    var4 = _closure2_slot2;
                    var2 = var7;
                    if(!(var1 != var4)) { _fun0004_ip = 174; continue _fun0004 }
 99:
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 11;
                    var3 = var9[var3];
                    var3 = var4.bind(var6)(var3);
                    var4 = var3.PressableOpacity;
                    var3 = {};
                    var9 = _closure2_slot2;
                    var3['onPress'] = var9;
                    var9 = 'button';
                    var3['accessibilityRole'] = var9;
                    var9 = _closure2_slot0;
                    var3['accessibilityLabel'] = var9;
                    var8 = _closure2_slot3;
                    var3['accessibilityHint'] = var8;
                    var3['children'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 174:
                    return var2;
 176:
                    return var1;
                }
            };
            var5 = var5.bind(var8)(var2, var3);
            var15 = function renderPronouns() {
                var4 = _closure1_slot12;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': null, 'color': 'header-primary', 'lineClamp': 1};
                var6 = _closure2_slot4;
                var1['variant'] = var6;
                var5 = _closure2_slot1;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var7.detailsText;
            var1['style'] = var7;
            var7 = var5.bind(var4)();
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0003_ip = 370; continue _fun0003 }
 202:
            var9 = _closure1_slot13;
            var8 = _closure1_slot14;
            var7 = {};
            var19 = _closure1_slot12;
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var10 = 9;
            var10 = var21[var10];
            var10 = var14.bind(var4)(var10);
            var14 = var10.Text;
            var10 = {};
            var10['variant'] = var20;
            var20 = 'header-primary';
            var10['color'] = var20;
            var20 = _closure1_slot8;
            var10['children'] = var20;
            var14 = var19.bind(var4)(var14, var10);
            var10 = new Array(2);
            var10[0] = var14;
            if(!(var11 == var13)) { _fun0003_ip = 289; continue _fun0003 }
 283:
            var11 = var15.bind(var4)();
            _fun0003_ip = 356; continue _fun0003;
 289:
            var14 = _closure1_slot12;
            var13 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 11;
            var12 = var19[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.PressableOpacity;
            var12 = {};
            var12['onPress'] = var18;
            var18 = 'button';
            var12['accessibilityRole'] = var18;
            var12['accessibilityLabel'] = var17;
            var12['accessibilityHint'] = var16;
            var15 = var15.bind(var4)();
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 356:
            var10[1] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 370:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var1 = function ProfileBadge(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var14 = var1.source;
            var _closure2_slot0 = var14;
            var7 = var1.id;
            var _closure2_slot1 = var7;
            var18 = var1.label;
            var _closure2_slot2 = var18;
            var6 = var1.badgeSize;
            var10 = var1.userId;
            var5 = var1.themeType;
            var1 = var1.showToastOnPress;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0005_ip = 63; continue _fun0005 }
 61:
            var1 = true;
 63:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot15;
            var15 = var2.bind(var4)();
            var3 = null;
            var2 = var3 != var6;
            var16 = undefined;
            if(!var2) { _fun0005_ip = 106; continue _fun0005 }
 93:
            var2 = {};
            var2['width'] = var6;
            var2['height'] = var6;
            var16 = var2;
 106:
            var6 = _closure1_slot3;
            var2 = var6.useRef;
            var12 = var2.bind(var6)(var3);
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var2 = var8[var2];
            var9 = var6.bind(var4)(var2);
            var2 = var9.useTieredTenureBadgeClickHandler;
            var2 = var2.bind(var9)(var7, var10, var5);
            _closure2_slot3 = var2;
            var2 = 14;
            var2 = var8[var2];
            var10 = var6.bind(var4)(var2);
            var9 = var10.useAdUser;
            var2 = 'profile_badge';
            var2 = var9.bind(var10)(var2);
            _closure2_slot4 = var2;
            var2 = 15;
            var2 = var8[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.getRootNavigationRef;
            var8 = var2.bind(var6)();
            var2 = var3 != var8;
            var6 = undefined;
            if(!var2) { _fun0005_ip = 246; continue _fun0005 }
 221:
            var2 = var8.isReady;
            var2 = var2.bind(var8)();
            var6 = undefined;
            if(!var2) { _fun0005_ip = 246; continue _fun0005 }
 236:
            var2 = var8.getCurrentRoute;
            var6 = var2.bind(var8)();
 246:
            var8 = var3 == var6;
            var2 = undefined;
            if(var8) { _fun0005_ip = 276; continue _fun0005 }
 255:
            var6 = var6.params;
            var8 = var3 == var6;
            var2 = undefined;
            if(var8) { _fun0005_ip = 276; continue _fun0005 }
 270:
            var2 = var6.showOrbsBadgeCoachmark;
 276:
            var17 = var3 != var2;
            if(!var17) { _fun0005_ip = 286; continue _fun0005 }
 283:
            var17 = var2;
 286:
            var8 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 16;
            var2 = var19[var9];
            var10 = var8.bind(var4)(var2);
            var6 = var10.useOrbsBadgeCoachmark;
            var2 = {};
            var17 = !var17;
            var2['disabled'] = var17;
            var6 = var6.bind(var10)(var2);
            var2 = 17;
            var10 = var19[var2];
            var10 = var8.bind(var4)(var10);
            var17 = var10.intl;
            var10 = var17.formatToPlainString;
            var2 = var19[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var8 = var2.A0LN9v;
            var2 = {};
            var2['badgeLabel'] = var18;
            var17 = var10.bind(var17)(var8, var2);
            var2 = _closure1_slot10;
            var2 = var2.YOU_SCREEN;
            var2 = var5 === var2;
            if(!var2) { _fun0005_ip = 413; continue _fun0005 }
 402:
            var10 = 'string';
            var8 = typeof var7;
            var2 = var10 === var8;
 413:
            var8 = null;
            if(!var2) { _fun0005_ip = 460; continue _fun0005 }
 418:
            var18 = _closure1_slot12;
            var10 = _closure1_slot1;
            var19 = _closure1_slot2;
            var2 = 18;
            var2 = var19[var2];
            var10 = var10.bind(var4)(var2);
            var2 = {};
            var2['targetRef'] = var12;
            var2['badgeId'] = var7;
            var8 = var18.bind(var4)(var10, var2);
 460:
            var2 = _closure1_slot10;
            var2 = var2.YOU_SCREEN;
            var2 = var5 === var2;
            if(!var2) { _fun0005_ip = 488; continue _fun0005 }
 477:
            var10 = 'string';
            var5 = typeof var7;
            var2 = var10 === var5;
 488:
            if(!var2) { _fun0005_ip = 501; continue _fun0005 }
 491:
            var5 = 'orb_profile_badge';
            var2 = var5 === var7;
 501:
            if(!var2) { _fun0005_ip = 508; continue _fun0005 }
 504:
            var2 = var3 != var6;
 508:
            var7 = null;
            if(!var2) { _fun0005_ip = 559; continue _fun0005 }
 513:
            var5 = _closure1_slot12;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['badgeRef'] = var12;
            var21 = var6.props;
            var22 = var2;
            var6 = copyDataProperties(var22, var21);
            var7 = var5.bind(var4)(var3, var2);
 559:
            var3 = _closure1_slot13;
            var2 = _closure1_slot14;
            var5 = {};
            var10 = _closure1_slot12;
            if(var1) { _fun0005_ip = 665; continue _fun0005 }
 576:
            var6 = _closure1_slot4;
            var1 = {};
            var18 = var15.badge;
            var9 = new Array(2);
            var9[0] = var18;
            var9[1] = var16;
            var1['style'] = var9;
            var1['source'] = var14;
            var9 = true;
            var1['accessible'] = var9;
            var9 = 'image';
            var1['accessibilityRole'] = var9;
            var1['accessibilityLabel'] = var17;
            var1['ref'] = var12;
            var6 = var10.bind(var4)(var6, var1);
            var1 = new Array(3);
            var1[0] = var6;
            var1[1] = var8;
            var1[2] = var7;
            var5['children'] = var1;
            var1 = var5;
            _fun0005_ip = 793; continue _fun0005;
 665:
            var9 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 11;
            var6 = var18[var6];
            var6 = var9.bind(var4)(var6);
            var9 = var6.PressableOpacity;
            var6 = {};
            var18 = 'image';
            var6['accessibilityRole'] = var18;
            var6['accessibilityLabel'] = var17;
            var13 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot3;
                    var8 = null;
                    if(!(var8 != var1)) { _fun0006_ip = 28; continue _fun0006 }
 13:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0006_ip = 390; continue _fun0006;
 28:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 19;
                    var1 = var4[var1];
                    var10 = undefined;
                    var3 = var2.bind(var10)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var6 = _closure2_slot2;
                    var9 = global;
                    var9 = var9.HermesInternal;
                    var11 = var9.concat;
                    var9 = 'PROFILE_BADGE-';
                    var9 = var11.bind(var9)(var6);
                    var1['key'] = var9;
                    var1['content'] = var6;
                    var6 = _closure2_slot0;
                    var1['icon'] = var6;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot1;
                    var3 = _closure1_slot0;
                    var1 = 20;
                    var1 = var4[var1];
                    var1 = var3.bind(var10)(var1);
                    var1 = var1.QUEST_COMPLETED_BADGE;
                    if(!(var2 === var1)) { _fun0006_ip = 390; continue _fun0006 }
 143:
                    var2 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var1 = 21;
                    var1 = var13[var1];
                    var4 = var2.bind(var10)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot11;
                    var2 = var1.QUEST_CONTENT_VIEWED;
                    var1 = {};
                    var12 = _closure1_slot0;
                    var6 = 22;
                    var6 = var13[var6];
                    var11 = var12.bind(var10)(var6);
                    var9 = var11.getContentProperties;
                    var6 = 23;
                    var6 = var13[var6];
                    var6 = var12.bind(var10)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.QUEST_BADGE;
                    var14 = var9.bind(var11)(var6);
                    var15 = var1;
                    var6 = copyDataProperties(var15, var14);
                    var6 = _closure2_slot4;
                    var6 = var8 != var6;
                    var9 = null;
                    if(!var6) { _fun0006_ip = 296; continue _fun0006 }
 251:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var6 = 24;
                    var6 = var12[var6];
                    var11 = var11.bind(var10)(var6);
                    var6 = var11.isIOS;
                    var6 = var6.bind(var11)();
                    var9 = null;
                    if(!var6) { _fun0006_ip = 296; continue _fun0006 }
 286:
                    var6 = _closure2_slot4;
                    var9 = var6.advertisingId;
 296:
                    var6 = 'apple_advertising_id';
                    var1[var6] = var9;
                    var6 = _closure2_slot4;
                    var9 = var8 != var6;
                    var6 = null;
                    if(!var9) { _fun0006_ip = 364; continue _fun0006 }
 320:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 24;
                    var7 = var11[var7];
                    var9 = var9.bind(var10)(var7);
                    var7 = var9.isAndroid;
                    var7 = var7.bind(var9)();
                    var6 = null;
                    if(!var7) { _fun0006_ip = 364; continue _fun0006 }
 354:
                    var5 = _closure2_slot4;
                    var6 = var5.advertisingId;
 364:
                    var5 = 'android_advertising_id';
                    var1[var5] = var6;
                    var6 = false;
                    var5 = 'is_targeted';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
 390:
                    var1 = undefined;
                    return var1;
                }
            };
            var6['onPress'] = var13;
            var6['ref'] = var12;
            var13 = _closure1_slot12;
            var12 = _closure1_slot4;
            var11 = {};
            var17 = var15.badge;
            var15 = new Array(2);
            var15[0] = var17;
            var15[1] = var16;
            var11['style'] = var15;
            var11['source'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var6['children'] = var11;
            var9 = var10.bind(var4)(var9, var6);
            var6 = new Array(3);
            var6[0] = var9;
            var6[1] = var8;
            var6[2] = var7;
            var5['children'] = var6;
            var1 = var5;
 793:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var2 = function ProfileBadgeRows(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var13 = var2.userId;
            var _closure2_slot0 = var13;
            var7 = var2.badges;
            var1 = var2.isTryItOut;
            var3 = var2.style;
            var _closure2_slot1 = var3;
            var3 = var2.themeType;
            var _closure2_slot2 = var3;
            var12 = var2.showToastOnPress;
            var _closure2_slot3 = var12;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot15;
            var8 = var2.bind(var4)();
            var _closure2_slot4 = var8;
            var2 = _closure1_slot18;
            var2 = var2.bind(var4)(var3);
            var9 = var2.badgeSize;
            var _closure2_slot5 = var9;
            var10 = var2.badgeRowHorizontalPadding;
            var _closure2_slot6 = var10;
            var3 = var7.map;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot12;
                    var4 = _closure1_slot21;
                    var3 = {};
                    var2 = var1.id;
                    var3['id'] = var2;
                    var6 = _closure2_slot0;
                    var3['userId'] = var6;
                    var6 = {};
                    var7 = var1.iconSrc;
                    var9 = null;
                    if(!(var9 == var7)) { _fun0008_ip = 66; continue _fun0008 }
 50:
                    var10 = _closure1_slot7;
                    var9 = var1.icon;
                    var8 = undefined;
                    var7 = var10.bind(var8)(var9);
 66:
                    var6['uri'] = var7;
                    var3['source'] = var6;
                    var6 = var1.description;
                    var3['label'] = var6;
                    var6 = _closure2_slot5;
                    var3['badgeSize'] = var6;
                    var6 = _closure2_slot2;
                    var3['themeType'] = var6;
                    var2 = _closure2_slot3;
                    var3['showToastOnPress'] = var2;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4, var3, var2);
                    return var1;
                }
            };
            var11 = var3.bind(var7)(var2);
            var _closure2_slot7 = var11;
            if(!var1) { _fun0007_ip = 148; continue _fun0007 }
 127:
            var3 = var7.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = 'premium';
                var1 = var1 === var2;
                return var1;
            };
            var3 = var3.bind(var7)(var2);
            var2 = null;
            var1 = var2 == var3;
 148:
            if(!var1) { _fun0007_ip = 317; continue _fun0007 }
 154:
            var2 = var11.push;
            var7 = _closure1_slot12;
            var3 = _closure1_slot21;
            var1 = {};
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var14 = 25;
            var14 = var17[var14];
            var14 = var15.bind(var4)(var14);
            var1['source'] = var14;
            var14 = 'premium';
            var1['id'] = var14;
            var1['userId'] = var13;
            var14 = _closure1_slot0;
            var13 = 17;
            var15 = var17[var13];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var13 = var17[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.t;
            var14 = var13.8zbGNT;
            var13 = {};
            var17 = global;
            var17 = var17.Date;
            var18 = var17.prototype;
            var18 = Object.create(var18, {constructor: {value: var17}});
            var21 = var18;
            var17 = new var21[var17](var20);
            var17 = var17 instanceof Object ? var17 : var18;
            var13['date'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var1['label'] = var13;
            var1['badgeSize'] = var9;
            var1['showToastOnPress'] = var12;
            var1 = var7.bind(var4)(var3, var1);
            var1 = var2.bind(var11)(var1);
 317:
            var1 = _closure1_slot6;
            var1 = var1.bind(var4)();
            var1 = var1.width;
            _closure2_slot8 = var1;
            var7 = _closure1_slot3;
            var3 = var7.useMemo;
            var2 = new Array(4);
            var2[0] = var11;
            var2[1] = var10;
            var2[2] = var9;
            var2[3] = var1;
            var1 = function() {
                var6 = global;
                var4 = var6.Math;
                var3 = var4.floor;
                var8 = _closure2_slot8;
                var2 = _closure1_slot9;
                var7 = 2;
                var2 = var7 * var2;
                var8 = var8 - var2;
                var2 = _closure2_slot6;
                var2 = var7 * var2;
                var9 = _closure2_slot5;
                var7 = 8;
                var7 = var9 + var7;
                var2 = var8 - var2;
                var2 = var2 / var7;
                var8 = var3.bind(var4)(var2);
                var _closure3_slot0 = var8;
                var4 = var6.Array;
                var3 = var4.from;
                var2 = {};
                var7 = var6.Math;
                var6 = var7.ceil;
                var5 = _closure2_slot7;
                var5 = var5.length;
                var5 = var5 / var8;
                var5 = var6.bind(var7)(var5);
                var2['length'] = var5;
                var1 = function(arg1, arg2) {
                    var6 = arg2;
                    var4 = _closure2_slot7;
                    var3 = var4.slice;
                    var5 = _closure3_slot0;
                    var2 = var6 * var5;
                    var1 = 1;
                    var1 = var6 + var1;
                    var1 = var1 * var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot5;
            var1 = {};
            var9 = var8.badges;
            var8 = new Array(1);
            var8[0] = var9;
            var1['style'] = var8;
            var8 = 'list';
            var1['accessibilityRole'] = var8;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 17;
            var8 = var11[var6];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.VWV0y8;
            var6 = var8.bind(var9)(var6);
            var1['accessibilityLabel'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2) {
                var5 = _closure1_slot12;
                var4 = _closure1_slot5;
                var3 = {};
                var1 = _closure2_slot4;
                var6 = var1.badgeRow;
                var1 = new Array(3);
                var1[0] = var6;
                var6 = {};
                var7 = _closure2_slot6;
                var6['paddingHorizontal'] = var7;
                var1[1] = var6;
                var2 = _closure2_slot1;
                var1[2] = var2;
                var3['style'] = var1;
                var1 = arg1;
                var3['children'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var2;
    var1 = function GuildTag(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var15 = var1.user;
            var7 = var1.themeType;
            var10 = var1.style;
            var11 = var1.showToastOnPress;
            var5 = undefined;
            if(!(var11 === var5)) { _fun0009_ip = 33; continue _fun0009 }
 31:
            var11 = false;
 33:
            var1 = _closure1_slot15;
            var8 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 26;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var3 = var6.getUserPrimaryGuild;
            var4 = null;
            var9 = var4 == var15;
            var1 = undefined;
            if(var9) { _fun0009_ip = 87; continue _fun0009 }
 81:
            var1 = var15.primaryGuild;
 87:
            var3 = var3.bind(var6)(var1);
            var1 = var3.tag;
            var3 = var3.guildId;
            var6 = _closure1_slot18;
            var6 = var6.bind(var5)(var7);
            var14 = var6.badgeSize;
            var7 = var6.guildTagBadgeSize;
            var12 = var6.guildTagHorizontalPadding;
            var6 = var6.guildTagTextVariant;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 24;
            var9 = var16[var9];
            var13 = var13.bind(var5)(var9);
            var9 = var13.isAndroid;
            var9 = var9.bind(var13)();
            var13 = 4;
            var16 = var13;
            if(!var9) { _fun0009_ip = 176; continue _fun0009 }
 173:
            var16 = 2;
 176:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 9;
            var9 = var18[var9];
            var9 = var17.bind(var5)(var9);
            var9 = var9.TextStyleSheet;
            var9 = var9[var6];
            var9 = var9.fontSize;
            var9 = var9 + var16;
            var16 = var4 == var1;
            var1 = null;
            if(var16) { _fun0009_ip = 350; continue _fun0009 }
 228:
            var3 = var4 == var3;
            var1 = null;
            if(var3) { _fun0009_ip = 350; continue _fun0009 }
 237:
            var4 = _closure1_slot12;
            var3 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 27;
            var2 = var16[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var15 = var15.id;
            var2['userId'] = var15;
            var11 = !var11;
            var2['disabledTooltip'] = var11;
            var11 = var8.guildTag;
            var8 = new Array(3);
            var8[0] = var11;
            var11 = {};
            var13 = var14 + var13;
            var11['minHeight'] = var13;
            var11['paddingHorizontal'] = var12;
            var8[1] = var11;
            var8[2] = var10;
            var2['containerStyles'] = var8;
            var8 = {};
            var8['lineHeight'] = var9;
            var2['textStyle'] = var8;
            var2['badgeSize'] = var7;
            var2['textVariant'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 350:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var10 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.Image;
    var _closure1_slot4 = var10;
    var10 = var7.View;
    var _closure1_slot5 = var10;
    var7 = var7.useWindowDimensions;
    var _closure1_slot6 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.getBadgeAssetFromCDN;
    var _closure1_slot7 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.DIVIDER_DOT;
    var _closure1_slot8 = var10;
    var10 = var7.PROFILE_SIDE_PADDING;
    var _closure1_slot9 = var10;
    var10 = var7.UserProfileThemeTypes;
    var _closure1_slot10 = var10;
    var17 = 4;
    var7 = var9[var17];
    var7 = var8.bind(var1)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot11 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var12 = var7.GuildTagBadgeSize;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var11 = var7.jsx;
    var _closure1_slot12 = var11;
    var11 = var7.jsxs;
    var _closure1_slot13 = var11;
    var7 = var7.Fragment;
    var _closure1_slot14 = var7;
    var7 = 7;
    var7 = var9[var7];
    var13 = var8.bind(var1)(var7);
    var11 = var13.createStyles;
    var7 = {};
    var14 = {};
    var15 = 'column';
    var14['flexDirection'] = var15;
    var7['container'] = var14;
    var14 = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': 4};
    var7['displayName'] = var14;
    var15 = 8;
    var14 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'gap': 8};
    var7['details'] = var14;
    var14 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'alignContent': 'center', 'paddingVertical': 2};
    var7['detailsText'] = var14;
    var14 = {};
    var14['marginLeft'] = var17;
    var7['botTag'] = var14;
    var14 = {'alignSelf': 'center', 'borderRadius': null, 'columnGap': 4};
    var17 = var9[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var14['borderRadius'] = var17;
    var7['guildTag'] = var14;
    var14 = {};
    var17 = 'contain';
    var14['resizeMode'] = var17;
    var7['badge'] = var14;
    var14 = {'alignSelf': 'center', 'flexDirection': 'column', 'justifyContent': 'flex-start', 'rowGap': 8};
    var7['badges'] = var14;
    var14 = {'borderRadius': null, 'paddingVertical': 2, 'justifyContent': 'flex-start', 'flexDirection': 'row', 'marginRight': 'auto', 'columnGap': 4};
    var15 = var9[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var14['borderRadius'] = var15;
    var7['badgeRow'] = var14;
    var7 = var11.bind(var13)(var7);
    var _closure1_slot15 = var7;
    var7 = {'headingVariant': 'heading-xl/bold', 'textVariant': 'text-md/normal', 'badgeSize': 20, 'badgeRowHorizontalPadding': 7, 'guildTagBadgeSize': null, 'guildTagTextVariant': 'text-sm/medium', 'guildTagHorizontalPadding': 8};
    var11 = var12.SIZE_16;
    var7['guildTagBadgeSize'] = var11;
    var _closure1_slot16 = var7;
    var7 = {};
    var11 = var10.PREVIEW;
    var10 = {'headingVariant': 'heading-lg/bold', 'textVariant': 'text-sm/normal', 'badgeSize': 16, 'badgeRowHorizontalPadding': 6, 'guildTagBadgeSize': null, 'guildTagTextVariant': 'text-xs/medium', 'guildTagHorizontalPadding': 6};
    var12 = var12.SIZE_12;
    var10['guildTagBadgeSize'] = var12;
    var7[var11] = var10;
    var _closure1_slot17 = var7;
    var7 = function getStyleConfig(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var1 = undefined;
            if(!var3) { _fun0010_ip = 19; continue _fun0010 }
 8:
            var2 = _closure1_slot17;
            var1 = var2[var3];
 19:
            var2 = null;
            if(!(var2 == var1)) { _fun0010_ip = 32; continue _fun0010 }
 25:
            var1 = _closure1_slot16;
 32:
            return var1;
        }
    };
    var _closure1_slot18 = var7;
    var7 = 29;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_profile/native/UserProfilePrimaryInfo.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function UserProfilePrimaryInfo(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var17 = var2.user;
            var26 = var2.displayName;
            var22 = var2.pronouns;
            var6 = var2.style;
            var16 = var2.badges;
            var1 = var2.badgeContainerBackground;
            var14 = var2.themeType;
            var12 = var2.onPressDisplayName;
            var11 = var2.displayNameAccessibilityHint;
            var21 = var2.onPressUserTag;
            var20 = var2.userTagAccessibilityHint;
            var19 = var2.onPressPronouns;
            var18 = var2.pronounsAccessibilityHint;
            var8 = var2.showChevron;
            var13 = var2.showBadgeToastOnPress;
            var2 = _closure1_slot15;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var15 = {};
            var15['backgroundColor'] = var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 28;
            var5 = var3[var1];
            var7 = var2.bind(var4)(var5);
            var5 = var7.useName;
            var25 = var5.bind(var7)(var17);
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useUserTag;
            var24 = var1.bind(var2)(var17);
            var3 = _closure1_slot13;
            var2 = _closure1_slot5;
            var1 = {};
            var7 = var9.container;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot19;
            var5 = {};
            var5['user'] = var17;
            var27 = '';
            var23 = var25;
            if(!(var27 !== var26)) { _fun0011_ip = 228; continue _fun0011 }
 216:
            var27 = null;
            if(!(var27 != var26)) { _fun0011_ip = 225; continue _fun0011 }
 222:
            var25 = var26;
 225:
            var23 = var25;
 228:
            var5['name'] = var23;
            var5['themeType'] = var14;
            var5['onPress'] = var12;
            var5['accessibilityHint'] = var11;
            var5['showChevron'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = var9.details;
            var6['style'] = var9;
            var12 = _closure1_slot12;
            var11 = _closure1_slot20;
            var9 = {};
            var25 = var17.isProvisional;
            var23 = null;
            if(var25) { _fun0011_ip = 309; continue _fun0011 }
 306:
            var23 = var24;
 309:
            var9['userTag'] = var23;
            var9['pronouns'] = var22;
            var9['themeType'] = var14;
            var9['onPressUserTag'] = var21;
            var9['userTagAccessibilityHint'] = var20;
            var9['onPressPronouns'] = var19;
            var9['pronounsAccessibilityHint'] = var18;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var18 = _closure1_slot12;
            var12 = _closure1_slot23;
            var11 = {};
            var11['user'] = var17;
            var11['themeType'] = var14;
            var11['style'] = var15;
            var11['showToastOnPress'] = var13;
            var11 = var18.bind(var4)(var12, var11);
            var9[1] = var11;
            var12 = _closure1_slot12;
            var11 = _closure1_slot22;
            var10 = {};
            var17 = var17.id;
            var10['userId'] = var17;
            var10['badges'] = var16;
            var10['style'] = var15;
            var10['themeType'] = var14;
            var10['showToastOnPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['DisplayName'] = var5;
    var3['UserTagAndPronouns'] = var4;
    var3['ProfileBadgeRows'] = var2;
    return var1;
})();
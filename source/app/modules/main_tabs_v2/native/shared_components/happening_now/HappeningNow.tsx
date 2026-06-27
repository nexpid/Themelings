// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var15 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var7;
    var1 = function shouldTrackViewedEvent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.loading;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var2.data;
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function renderCard(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var5 = arg2;
            var2 = var6.kind;
            var1 = 'placeholder';
            if(!(var1 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var5.loading;
            if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var2 = var6.kind;
            var1 = 'live-guild-stage';
            if(!(var1 !== var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = 'guild-event';
            if(!(var1 !== var2)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = 'active-channel';
            if(!(var1 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = 'user';
            if(!(var1 !== var2)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var1 = 'activity';
            if(!(var1 !== var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = 'voice';
            if(!(var1 !== var2)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var1 = 'invite';
            if(!(var1 !== var2)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var1 = 'customize-guild';
            if(!(var1 !== var2)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var1 = 'create-channel';
            if(!(var1 !== var2)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var1 = 'student-hub-add-channel';
            if(!(var1 !== var2)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var1 = 'embedded-activity';
            if(!(var1 !== var2)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var1 = 'unified-vc';
            if(!(var1 !== var2)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 36;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var6);
            return var1;
case 29:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 35;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var8 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var8 = copyDataProperties(var10, var9);
            var7 = _closure1_slot19;
            var8 = var7.bind(var3)(var6);
            var7 = 'cardKey';
            var1[6] = var8;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 27:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 34;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var8 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var8 = copyDataProperties(var10, var9);
            var7 = _closure1_slot19;
            var8 = var7.bind(var3)(var6);
            var7 = 'cardKey';
            var1[6] = var8;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 25:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowStudentHubAddServer;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 23:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowCardCreateChannel;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 21:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowCardCustomizeGuild;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 19:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 33;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowCardInvite;
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 17:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 32;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 15:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 31;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 13:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 30;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 11:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 29;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 9:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 28;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var7 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var7 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 7:
            var4 = _closure1_slot12;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 27;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var10 = var1;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var10 = var1;
            var9 = var5;
            var6 = copyDataProperties(var10, var9);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
case 4:
            var4 = _closure1_slot12;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 26;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowCardPlaceholder;
            var1 = {};
            var6 = var5.fullwidth;
            var1['fullWidth'] = var6;
            var5 = var5.panelVariant;
            var1['panelVariant'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function keyExtractor(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.kind;
            var2 = 'placeholder';
            if(!(var2 !== var3)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = 'live-guild-stage';
            if(!(var2 !== var3)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = 'guild-event';
            if(!(var2 !== var3)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var2 = 'active-channel';
            if(!(var2 !== var3)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var2 = 'user';
            if(!(var2 !== var3)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var2 = 'activity';
            if(!(var2 !== var3)) { _fun0003_ip = 39; continue _fun0003 }
case 41:
            var2 = 'voice';
            if(!(var2 !== var3)) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var2 = 'invite';
            if(!(var2 !== var3)) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var2 = 'customize-guild';
            if(!(var2 !== var3)) { _fun0003_ip = 44; continue _fun0003 }
case 46:
            var2 = 'create-channel';
            if(!(var2 !== var3)) { _fun0003_ip = 44; continue _fun0003 }
case 47:
            var2 = 'student-hub-add-channel';
            if(!(var2 !== var3)) { _fun0003_ip = 44; continue _fun0003 }
case 48:
            var2 = 'embedded-activity';
            if(!(var2 !== var3)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var2 = 'unified-vc';
            if(!(var2 !== var3)) { _fun0003_ip = 51; continue _fun0003 }
case 26:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 36;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.assertNever;
            var3 = var3.bind(var4)(var1);
            return var2;
case 51:
            var6 = var1.kind;
            var2 = var1.voiceState;
            var5 = var2.channelId;
            var2 = null;
            if(!(var2 == var5)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var5 = var1.userId;
case 52:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 49:
            var7 = var1.kind;
            var2 = var1.voiceState;
            var6 = var2.channelId;
            var2 = null;
            if(!(var2 == var6)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var6 = var1.userId;
case 54:
            var2 = var1.activity;
            var8 = var2.applicationId;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var13 = '';
            var2 = '-';
            var12 = var7;
            var11 = var2;
            var10 = var6;
            var9 = var2;
            var2 = var13[var4](var12, var11, var10, var9, var8, var7);
            return var2;
case 44:
            var2 = var1.kind;
            return var2;
case 42:
            var6 = var1.kind;
            var2 = var1.voiceState;
            var5 = var2.channelId;
            var2 = null;
            if(!(var2 == var5)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var5 = var1.userId;
case 56:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 39:
            var6 = var1.kind;
            var5 = var1.userId;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 37:
            var6 = var1.kind;
            var5 = var1.channelId;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 35:
            var6 = var1.kind;
            var2 = var1.event;
            var5 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 33:
            var6 = var1.kind;
            var2 = var1.stage;
            var5 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '-';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 31:
            var5 = var1.kind;
            var4 = var1.index;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '-';
            var1 = var3.bind(var2)(var5, var1, var4);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function overrideItemLayout(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 19;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.cardSize;
        var2 = arg2;
        var3 = var3.bind(var4)(var2);
        var2 = arg1;
        var2['size'] = var3;
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function getItemType(arg1) {
        var1 = arg1;
        var1 = var1.kind;
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var10 = true;
    var2['value'] = var10;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var15.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var13 = 1;
    var5 = var7[var13];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.ScrollView;
    var _closure1_slot5 = var5;
    var2 = var2.View;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.HAPPENING_NOW_CARD_HEIGHT;
    var _closure1_slot7 = var5;
    var5 = var2.HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN;
    var _closure1_slot8 = var5;
    var5 = var2.HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN;
    var _closure1_slot9 = var5;
    var14 = var2.HAPPENING_NOW_PANELS_CONTAINER_PADDING;
    var2 = var2.HappeningNowKindIds;
    var _closure1_slot10 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot11 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot12 = var2;
    var5 = var8.createContext;
    var2 = 6;
    var2 = var7[var2];
    var11 = var6.bind(var1)(var2);
    var9 = var11.createFakeSharedValue;
    var2 = new Array(0);
    var2 = var9.bind(var11)(var2);
    var2 = var5.bind(var8)(var2);
    var _closure1_slot13 = var2;
    var5 = 7;
    var5 = var7[var5];
    var11 = var6.bind(var1)(var5);
    var9 = var11.createStyles;
    var5 = {};
    var12 = {};
    var12['paddingLeft'] = var14;
    var12['paddingRight'] = var14;
    var5['containerInner'] = var12;
    var12 = {};
    var14 = 8;
    var14 = var7[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_8;
    var12['paddingHorizontal'] = var14;
    var12['flex'] = var13;
    var5['loading'] = var12;
    var5 = var9.bind(var11)(var5);
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.Gesture;
    var5 = var9.Native;
    var9 = var5.bind(var9)();
    var5 = var9.disallowInterruption;
    var5 = var5.bind(var9)(var10);
    var _closure1_slot15 = var5;
    var9 = var8.forwardRef;
    var5 = function(arg1, arg2) {
        var4 = _closure1_slot12;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 9;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var6 = _closure1_slot15;
        var1['gesture'] = var6;
        var7 = _closure1_slot12;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = arg2;
        var5['ref'] = var8;
        var9 = arg1;
        var10 = var5;
        var8 = copyDataProperties(var10, var9);
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var9 = var9.bind(var8)(var5);
    var _closure1_slot16 = var9;
    var5 = 'HappeningNowScrollView';
    var9['displayName'] = var5;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = var2.cards;
            var26 = var2.listRef;
            var _closure2_slot0 = var26;
            var6 = undefined;
            var _closure2_slot6 = var6;
            var _closure2_slot7 = var6;
            var _closure2_slot8 = var6;
            var2 = _closure1_slot14;
            var9 = var2.bind(var6)();
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 14;
            var2 = var15[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.useIsFocused;
            var2 = var2.bind(var3)();
            var _closure2_slot1 = var2;
            var12 = _closure1_slot1;
            var3 = 15;
            var3 = var15[var3];
            var4 = var12.bind(var6)(var3);
            var3 = {};
            var3['withoutUserCards'] = var6;
            var3['guildId'] = var6;
            var22 = true;
            var3['showMultipleActivitiesPerChannel'] = var22;
            var3['isFocused'] = var2;
            var4 = var4.bind(var6)(var5, var3);
            var3 = _closure1_slot3;
            var13 = 2;
            var3 = var3.bind(var6)(var4, var13);
            var11 = 0;
            var7 = var3[var11];
            var _closure2_slot2 = var7;
            var5 = 1;
            var10 = var3[var5];
            var _closure2_slot3 = var10;
            var4 = 16;
            var3 = var15[var4];
            var14 = var12.bind(var6)(var3);
            var3 = 17;
            var3 = var15[var3];
            var3 = var12.bind(var6)(var3);
            var3 = var3.ACTIVITIES_HAPPENING_NOW;
            var3 = var14.bind(var6)(var3);
            var14 = var3.analyticsLocations;
            var3 = 18;
            var3 = var15[var3];
            var3 = var12.bind(var6)(var3);
            var3 = var3.bind(var6)();
            var27 = var3.width;
            var15 = _closure1_slot4;
            var3 = var15.useRef;
            var16 = var3.bind(var15)(var11);
            var _closure2_slot4 = var16;
            var12 = {};
            var12['data'] = var7;
            var12['isFocused'] = var2;
            var12['loading'] = var10;
            var3 = function useTrackActivityCardsView(arg1, arg2) {
                var4 = arg1;
                var _closure3_slot0 = var4;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var9 = var4.isFocused;
                var _closure3_slot2 = var9;
                var8 = _closure1_slot4;
                var3 = var8.useRef;
                var3 = var3.bind(var8)(var4);
                var _closure3_slot3 = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 10;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = function() {
                    var1 = {};
                    var2 = 'messages';
                    var1['context'] = var2;
                    var2 = _closure3_slot3;
                    var4 = var2.current;
                    var4 = var4.data;
                    var4 = var4.length;
                    var1['num_cards'] = var4;
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.min;
                    var3 = _closure3_slot1;
                    var4 = var3.current;
                    var3 = var2.current;
                    var3 = var3.data;
                    var3 = var3.length;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['max_viewed_card_index'] = var3;
                    var3 = var2.current;
                    var5 = var3.data;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        var2 = _closure1_slot10;
                        var1 = arg1;
                        var1 = var1.kind;
                        var1 = var2[var1];
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var1['card_types'] = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getAffinityProperties;
                    var2 = var2.current;
                    var2 = var2.data;
                    var7 = var3.bind(var4)(var2);
                    var8 = var1;
                    var2 = copyDataProperties(var8, var7);
                    return var1;
                };
                var3 = var6.bind(var1)(var3);
                var _closure3_slot4 = var3;
                var7 = var8.useEffect;
                var6 = function() {
                    var2 = _closure3_slot3;
                    var1 = _closure3_slot0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
                var7 = var8.useEffect;
                var6 = new Array(2);
                var6[0] = var9;
                var6[1] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure3_slot2;
                        var2 = !var2;
                        if(!var2) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                        var5 = _closure1_slot17;
                        var3 = _closure3_slot3;
                        var4 = var3.current;
                        var3 = undefined;
                        var2 = var5.bind(var3)(var4);
case 58:
                        if(!var2) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 12;
                        var3 = var5[var3];
                        var5 = undefined;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.track;
                        var2 = _closure1_slot11;
                        var2 = var2.ACTIVITY_CARDS_VIEWED;
                        var1 = _closure3_slot4;
                        var1 = var1.bind(var5)();
                        var1 = var3.bind(var4)(var2, var1);
case 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var7.bind(var8)(var3, var6);
                var3 = 13;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var2 = function() {
                    var1 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var5 = _closure1_slot17;
                            var1 = _closure3_slot3;
                            var4 = var1.current;
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            if(!var4) { _fun0006_ip = 12; continue _fun0006 }
case 62:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 12;
                            var4 = var6[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.track;
                            var3 = _closure1_slot11;
                            var3 = var3.ACTIVITY_CARDS_VIEWED;
                            var2 = _closure3_slot4;
                            var2 = var2.bind(var1)();
                            var2 = var4.bind(var5)(var3, var2);
case 12:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var3.bind(var6)(var12, var16);
            var12 = var15.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var26;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0007_ip = 38; continue _fun0007 }
case 63:
                    var2 = _closure2_slot0;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                    var3 = var4.scrollToOffset;
                    var2 = {'offset': 0, 'animated': false};
                    var2 = var3.bind(var4)(var2);
case 64:
                    var2 = _closure2_slot4;
                    var1 = 0;
                    var2['current'] = var1;
case 38:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var15)(var2, var3);
            var3 = var7.findIndex;
            var2 = function(arg1) {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.cardSize;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var1 = _closure1_slot9;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var3.bind(var7)(var2);
            var _closure2_slot5 = var2;
            var3 = var2 >= var11;
            var15 = inf;
            if(!var3) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var3 = _closure1_slot8;
            var15 = var3 * var2;
case 66:
            _closure2_slot6 = var15;
            var16 = _closure1_slot4;
            var12 = var16.useCallback;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var15;
            var2 = function(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg2;
                    var1 = arg1;
                    var4 = var2 + var1;
                    var2 = _closure2_slot6;
                    if(!(!(var4 < var2))) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot6;
                    var5 = var4 - var2;
                    var2 = _closure1_slot9;
                    var2 = var5 / var2;
                    var2 = var2 | 0;
                    var2 = var3 + var2;
                    _fun0008_ip = 70; continue _fun0008;
case 68:
                    var3 = _closure1_slot8;
                    var3 = var4 / var3;
                    var2 = var3 | 0;
case 70:
                    var3 = _closure2_slot4;
                    var3 = var3.current;
                    if(!(var2 > var3)) { _fun0008_ip = 71; continue _fun0008 }
case 41:
                    var1 = _closure2_slot4;
                    var1['current'] = var2;
case 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var12.bind(var16)(var2, var3);
            var16 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 20;
            var3 = var3[var2];
            var3 = var16.bind(var6)(var3);
            var12 = var3.bind(var6)(var15, var12);
            var3 = _closure1_slot3;
            var3 = var3.bind(var6)(var12, var13);
            var25 = var3[var11];
            var3 = var3[var5];
            var21 = undefined;
            if(!var3) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var21 = _closure1_slot8;
case 72:
            var5 = _closure1_slot4;
            var13 = var5.useMemo;
            var12 = new Array(1);
            var12[0] = var7;
            var3 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 19;
                var3 = var5[var1];
                var2 = undefined;
                var7 = var4.bind(var2)(var3);
                var6 = var7.filterHappeningNowCards;
                var3 = _closure2_slot2;
                var3 = var6.bind(var7)(var3);
                var1 = var5[var1];
                var2 = var4.bind(var2)(var1);
                var1 = var2.sortHappeningNowCards;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var19 = var13.bind(var5)(var3, var12);
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = var12[var2];
            var13 = var3.bind(var6)(var2);
            var2 = var13.useHappeningNowScrollSnapping;
            var20 = var2.bind(var13)(var26);
            var15 = var5.useCallback;
            var13 = new Array(1);
            var13[0] = var10;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.item;
                var1 = var1.index;
                var3 = _closure1_slot18;
                var2 = {};
                var2['index'] = var1;
                var1 = _closure2_slot3;
                var2['loading'] = var1;
                var1 = true;
                var2['panelVariant'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var18 = var15.bind(var5)(var2, var13);
            var2 = 21;
            var2 = var12[var2];
            var12 = var3.bind(var6)(var2);
            var3 = var12.useSharedValue;
            var2 = new Array(0);
            var12 = var3.bind(var12)(var2);
            _closure2_slot7 = var12;
            var13 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function(arg1) {
                var1 = arg1;
                var7 = var1.viewableItems;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.updateSharedValueArrayIfChanged;
                var3 = _closure2_slot7;
                var6 = var7.map;
                var2 = function(arg1) {
                    var3 = _closure1_slot19;
                    var1 = arg1;
                    var2 = var1.item;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var6.bind(var7)(var2);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var13 = var13.bind(var5)(var2, var3);
            _closure2_slot8 = var13;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.debounce;
                var2 = _closure2_slot8;
                var1 = 130;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var17 = var3.bind(var5)(var1, var2);
            var1 = var7.length;
            if(!(var11 === var1)) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            if(var10) { _fun0004_ip = 74; continue _fun0004 }
case 76:
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var1 = var3.bind(var6)(var2, var1);
            _fun0004_ip = 77; continue _fun0004;
case 74:
            var5 = _closure1_slot12;
            if(var10) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var2 = _closure1_slot13;
            var3 = var2.Provider;
            var2 = {};
            var2['value'] = var12;
            var13 = _closure1_slot12;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var4 = var24[var4];
            var4 = var23.bind(var6)(var4);
            var12 = var4.AnalyticsLocationProvider;
            var4 = {};
            var4['value'] = var14;
            var16 = _closure1_slot12;
            var14 = 24;
            var14 = var24[var14];
            var14 = var23.bind(var6)(var14);
            var15 = var14.FlashList;
            var14 = {};
            var14['ref'] = var26;
            var14['horizontal'] = var22;
            var26 = _closure1_slot16;
            var14['renderScrollComponent'] = var26;
            var26 = {};
            var26['width'] = var27;
            var27 = _closure1_slot7;
            var26['height'] = var27;
            var14['estimatedListSize'] = var26;
            var26 = _closure1_slot8;
            var14['estimatedItemSize'] = var26;
            var26 = _closure1_slot20;
            var14['overrideItemLayout'] = var26;
            var26 = 'fast';
            var14['decelerationRate'] = var26;
            var14['onScroll'] = var25;
            var14['disableHorizontalListHeightMeasurement'] = var22;
            var14['snapToInterval'] = var21;
            var14['snapToOffsets'] = var20;
            var20 = false;
            var14['showsHorizontalScrollIndicator'] = var20;
            var20 = 25;
            var21 = var24[var20];
            var21 = var23.bind(var6)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var6)(var20);
            var20 = var20.t;
            var20 = var20["1+boPi"];
            var20 = var21.bind(var22)(var20);
            var14['accessibilityLabel'] = var20;
            var20 = var9.containerInner;
            var14['contentContainerStyle'] = var20;
            var14['data'] = var19;
            var14['renderItem'] = var18;
            var14['onViewableItemsChanged'] = var17;
            var17 = _closure1_slot19;
            var14['keyExtractor'] = var17;
            var17 = _closure1_slot21;
            var14['getItemType'] = var17;
            var14 = var16.bind(var6)(var15, var14);
            var4['children'] = var14;
            var4 = var13.bind(var6)(var12, var4);
            var2['children'] = var4;
            var2 = var5.bind(var6)(var3, var2);
            _fun0004_ip = 80; continue _fun0004;
case 78:
            var4 = _closure1_slot6;
            var3 = {};
            var9 = var9.loading;
            var3['style'] = var9;
            var9 = _closure1_slot18;
            var8 = var7.length;
            if(!(!(var8 > var11))) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var8 = {'kind': 'placeholder', 'index': 0};
            _fun0004_ip = 83; continue _fun0004;
case 81:
            var8 = var7[var11];
case 83:
            var7 = {'index': 0, 'loading': null, 'fullwidth': true, 'panelVariant': true};
            var7['loading'] = var10;
            var7 = var9.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 80:
            var1 = var2;
case 77:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 37;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ViewableHappeningNowCardKeysContext'] = var2;
    return var1;
})();
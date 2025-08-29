// app/modules/guild_sidebar/native/VoiceUsers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function AudienceItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.audienceCount;
            var7 = var1.collapsed;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var2 = var1.bind(var4)();
            var1 = _closure1_slot8;
            var12 = var1.bind(var4)(var2);
            var9 = var6;
            if(var7) { _fun0001_ip = 124; continue _fun0001 }
 59:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var3 = var8[var1];
            var3 = var2.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.+v2pNz;
            var1 = {};
            var1['count'] = var6;
            var9 = var3.bind(var5)(var2, var1);
 124:
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = var12.listeners;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var7) { _fun0001_ip = 159; continue _fun0001 }
 153:
            var6 = var12.listenersPill;
 159:
            var5[1] = var6;
            var1['style'] = var5;
            var8 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var7 = var12.listenersIconWrapper;
            var5['style'] = var7;
            var16 = _closure1_slot5;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 12;
            var10 = var13[var10];
            var10 = var7.bind(var4)(var10);
            var15 = var10.HeadphonesIcon;
            var14 = {'color': 'redesign-channel-name-muted-text', 'size': 'custom'};
            var10 = 'redesign-channel-name-muted-text';
            var17 = var12.headphonesIcon;
            var14['style'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var5['children'] = var14;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var6 = 10;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var12 = var12.listenersText;
            var6['style'] = var12;
            var11 = _closure1_slot7;
            var6['variant'] = var11;
            var6['color'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 'text-sm/medium';
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var3 = var3[var1];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.colors;
            var5 = arg1;
            if(var5) { _fun0002_ip = 44; continue _fun0002 }
 36:
            var8 = var3.BG_BASE_TERTIARY;
            _fun0002_ip = 50; continue _fun0002;
 44:
            var8 = var3.EXPRESSION_PICKER_BG;
 50:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.radii;
            var3 = var1.round;
            var1 = {};
            var7 = 4;
            var6 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'padding': 4, 'marginTop': 4, 'marginLeft': 4294967288};
            var1['listeners'] = var6;
            var6 = {};
            var6['backgroundColor'] = var8;
            var6['borderRadius'] = var3;
            var9 = -16;
            var6['marginLeft'] = var9;
            var10 = 20;
            var6['height'] = var10;
            var1['listenersPill'] = var6;
            var6 = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': null, 'marginRight': 8, 'marginLeft': 4};
            var6['backgroundColor'] = var8;
            var6['borderRadius'] = var3;
            var3 = _closure1_slot0;
            var2 = 6;
            var8 = var5[var2];
            var9 = var3.bind(var4)(var8);
            var8 = var9.makeSizeStyle;
            var11 = var8.bind(var9)(var10);
            var12 = var6;
            var8 = copyDataProperties(var12, var11);
            var1['listenersIconWrapper'] = var6;
            var6 = {};
            var6['marginRight'] = var7;
            var1['listenersText'] = var6;
            var6 = {};
            var7 = -20;
            var6['marginLeft'] = var7;
            var1['userCollapsedOverlap'] = var6;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.makeSizeStyle;
            var2 = 14;
            var2 = var3.bind(var4)(var2);
            var1['headphonesIcon'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var3 = var2.voiceState;
            var5 = var3.user;
            var _closure2_slot0 = var5;
            var14 = var3.member;
            var11 = var3.voiceState;
            var10 = var2.channel;
            var _closure2_slot1 = var10;
            var12 = var2.collapsed;
            var16 = var2.isFirst;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.bind(var4)();
            var2 = _closure1_slot8;
            var8 = var2.bind(var4)(var3);
            var3 = _closure1_slot0;
            var2 = 8;
            var2 = var7[var2];
            var9 = var3.bind(var4)(var2);
            var7 = var9.useStateFromStoresObject;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var13 = var10.guild_id;
            var2 = new Array(2);
            var2[0] = var13;
            var13 = var5.id;
            var2[1] = var13;
            var1 = function() {
                var1 = {};
                var5 = _closure1_slot4;
                var7 = var5.getMember;
                var3 = _closure2_slot1;
                var6 = var3.guild_id;
                var2 = _closure2_slot0;
                var4 = var2.id;
                var4 = var7.bind(var5)(var6, var4);
                var1['storeMember'] = var4;
                var4 = var5.isGuestOrLurker;
                var3 = var3.guild_id;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2);
                var1['isGuest'] = var2;
                return var1;
            };
            var1 = var7.bind(var9)(var3, var1, var2);
            var13 = var1.storeMember;
            var9 = var1.isGuest;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var15 = null;
            var7 = null;
            if(!var12) { _fun0003_ip = 201; continue _fun0003 }
 190:
            var7 = null;
            if(var16) { _fun0003_ip = 201; continue _fun0003 }
 195:
            var7 = var8.userCollapsedOverlap;
 201:
            var1['style'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 9;
            var6 = var16[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['user'] = var5;
            if(!(var15 != var14)) { _fun0003_ip = 242; continue _fun0003 }
 239:
            var13 = var14;
 242:
            var6['member'] = var13;
            var13 = var11.mute;
            var6['mute'] = var13;
            var13 = var11.deaf;
            var6['deaf'] = var13;
            var13 = var11.selfVideo;
            var6['selfVideo'] = var13;
            var13 = var11.selfMute;
            var6['selfMute'] = var13;
            var13 = var11.selfDeaf;
            var6['selfDeaf'] = var13;
            var13 = var11.suppress;
            var6['suppress'] = var13;
            var6['collapsed'] = var12;
            var11 = var11.sessionId;
            var6['sessionId'] = var11;
            var6['channel'] = var10;
            var6['isGuest'] = var9;
            var5 = var5.id;
            var5 = var8.bind(var4)(var7, var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/VoiceUsers.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function VoiceUsers(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var11 = var1.collapsed;
            var _closure2_slot0 = var11;
            var2 = var1.channel;
            var _closure2_slot1 = var2;
            var13 = var1.voiceStates;
            var12 = var1.audienceCount;
            var2 = var13.length;
            var7 = null;
            var9 = 0;
            var1 = null;
            if(!(var9 !== var2)) { _fun0004_ip = 166; continue _fun0004 }
 51:
            var5 = _closure1_slot6;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 13;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['collapsed'] = var11;
            var10 = var13.map;
            var6 = function(arg1, arg2) {
                var1 = arg1;
                var5 = _closure1_slot5;
                var4 = _closure1_slot9;
                var3 = {};
                var3['voiceState'] = var1;
                var6 = _closure2_slot1;
                var3['channel'] = var6;
                var2 = _closure2_slot0;
                var3['collapsed'] = var2;
                var6 = 0;
                var2 = arg2;
                var2 = var6 === var2;
                var3['isFirst'] = var2;
                var2 = var1.user;
                var8 = var2.id;
                var1 = var1.voiceState;
                var7 = var1.sessionId;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var2 = 'voice-user-item-';
                var1 = '-';
                var2 = var6.bind(var2)(var8, var1, var7);
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var10 = var10.bind(var13)(var6);
            var6 = new Array(2);
            var6[0] = var10;
            var7 = var7 != var12;
            if(!var7) { _fun0004_ip = 123; continue _fun0004 }
 119:
            var7 = var12 > var9;
 123:
            if(!var7) { _fun0004_ip = 152; continue _fun0004 }
 126:
            var10 = _closure1_slot5;
            var9 = _closure1_slot10;
            var8 = {};
            var8['audienceCount'] = var12;
            var8['collapsed'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 152:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 166:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getAudienceItemHeight(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 10;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.TextStyleSheet;
        var1 = _closure1_slot7;
        var1 = var2[var1];
        var2 = var1.lineHeight;
        var1 = arg1;
        var4 = var2 * var1;
        var1 = global;
        var3 = var1.Math;
        var2 = var3.max;
        var1 = 20;
        var2 = var2.bind(var3)(var1, var4);
        var1 = 8;
        var1 = var1 + var2;
        return var1;
    };
    var3['getAudienceItemHeight'] = var2;
    return var1;
})();
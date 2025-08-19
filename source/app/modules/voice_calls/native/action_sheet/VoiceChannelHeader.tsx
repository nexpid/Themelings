// app/modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var4 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.Permissions;
    var _closure1_slot7 = var4;
    var2 = var2.AnalyticsPages;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot9 = var4;
    var2 = var2.jsxs;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var4 = var8.createStyles;
    var2 = {};
    var10 = 'row';
    var9 = {'alignSelf': 'stretch', 'flexDirection': 'row', 'paddingVertical': 10, 'paddingHorizontal': 16, 'alignItems': 'center'};
    var2['container'] = var9;
    var9 = {'flex': 1, 'justifyContent': 'space-around', 'marginHorizontal': 16};
    var2['middle'] = var9;
    var9 = {};
    var9['flexDirection'] = var10;
    var11 = 8;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var9['tintColor'] = var13;
    var2['icons'] = var9;
    var9 = {'fontSize': 12, 'lineHeight': 16};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var9['color'] = var11;
    var2['subtitle'] = var9;
    var9 = {};
    var9['flexDirection'] = var10;
    var2['subtitleWrapper'] = var9;
    var2 = var4.bind(var8)(var2);
    var _closure1_slot11 = var2;
    var2 = function PrivateChannelSubtitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.channel;
            var1 = _closure1_slot11;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var12 = 9;
            var1 = var6[var12];
            var2 = var9.bind(var4)(var1);
            var1 = var11.id;
            var1 = var2.bind(var4)(var1);
            var8 = var1.state;
            var3 = _closure1_slot10;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var10.subtitleWrapper;
            var1['style'] = var5;
            var13 = _closure1_slot9;
            var5 = 10;
            var5 = var6[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var14 = false;
            var5['useAllAloneText'] = var14;
            var5['channel'] = var11;
            var5['voiceState'] = var8;
            var14 = var10.subtitle;
            var5['style'] = var14;
            var9 = var13.bind(var4)(var9, var5);
            var5 = new Array(3);
            var5[0] = var9;
            var9 = _closure1_slot0;
            var6 = var6[var12];
            var6 = var9.bind(var4)(var6);
            var6 = var6.CallStates;
            var6 = var6.CONNECTED;
            var6 = var8 === var6;
            if(!var6) { _fun0001_ip = 227; continue _fun0001 }
 166:
            var14 = _closure1_slot9;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 11;
            var9 = var15[var9];
            var9 = var13.bind(var4)(var9);
            var13 = var9.Text;
            var9 = {'style': null, 'variant': 'text-xs/medium', 'color': 'always-white', 'children': ' - '};
            var15 = var10.subtitle;
            var9['style'] = var15;
            var6 = var14.bind(var4)(var13, var9);
 227:
            var5[1] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var6 = var9.bind(var4)(var6);
            var6 = var6.CallStates;
            var6 = var6.CONNECTED;
            var6 = var8 === var6;
            if(!var6) { _fun0001_ip = 318; continue _fun0001 }
 267:
            var9 = _closure1_slot9;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 12;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = var11.id;
            var7['channelId'] = var11;
            var10 = var10.subtitle;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 318:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var4 = function VoiceChannelHeader(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var12 = var2.channel;
            var _closure2_slot0 = var12;
            var2 = _closure1_slot11;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 13;
            var2 = var7[var3];
            var9 = var8.bind(var4)(var2);
            var6 = var9.useStateFromStores;
            var2 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var4 = _closure2_slot0;
                var1 = var4.getGuildId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var9)(var5, var2);
            var6 = _closure1_slot1;
            var2 = 14;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)(var12);
            var3 = var7[var3];
            var14 = var8.bind(var4)(var3);
            var13 = var14.useStateFromStores;
            var3 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var3;
            var8 = new Array(1);
            var8[0] = var12;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getSelfEmbeddedActivityForChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var13.bind(var14)(var9, var3, var8);
            var _closure2_slot1 = var3;
            var3 = 15;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var12);
            var9 = null;
            var6 = var9 == var5;
            var18 = undefined;
            if(var6) { _fun0002_ip = 183; continue _fun0002 }
 178:
            var18 = var5.name;
 183:
            var7 = _closure1_slot6;
            var6 = var7.can;
            var5 = _closure1_slot7;
            var5 = var5.CREATE_INSTANT_INVITE;
            var5 = var6.bind(var7)(var5, var12);
            var13 = null;
            if(!var5) { _fun0002_ip = 226; continue _fun0002 }
 214:
            var13 = null;
            if(var2) { _fun0002_ip = 226; continue _fun0002 }
 219:
            var13 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.showInstantInviteActionSheet;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var7 = null;
                    var7 = var7 == var8;
                    if(var7) { _fun0003_ip = 62; continue _fun0003 }
 53:
                    var6 = _closure2_slot1;
                    var1 = var6.applicationId;
 62:
                    var2['targetApplicationId'] = var1;
                    var1 = 'Voice Channel';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var1;
                }
            };
 226:
            var2 = var12.isPrivate;
            var2 = var2.bind(var12)();
            var19 = var3;
            if(!var2) { _fun0002_ip = 352; continue _fun0002 }
 242:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
            var5 = var7[var2];
            var5 = var3.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.8bn8Bg;
            var2 = {};
            var7 = var12.recipients;
            var8 = var7.length;
            var7 = 1;
            var7 = var8 + var7;
            var2['count'] = var7;
            var19 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot9;
            var5 = _closure1_slot12;
            var2 = {};
            var2['channel'] = var12;
            var18 = var6.bind(var4)(var5, var2);
            var13 = function I() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.navigateToNewGroupDM;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure1_slot8;
                var1 = var1.CHANNEL_CALL;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
 352:
            var3 = _closure1_slot10;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var8 = 19;
            var5 = var15[var8];
            var6 = var14.bind(var4)(var5);
            var5 = {};
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            var8 = var8.Sizes;
            var8 = var8.MEDIUM;
            var5['size'] = var8;
            var8 = 20;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            var8 = var8.bind(var4)(var12);
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var8) { _fun0002_ip = 464; continue _fun0002 }
 450:
            var8 = 22;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            _fun0002_ip = 476; continue _fun0002;
 464:
            var12 = 21;
            var12 = var15[var12];
            var8 = var14.bind(var4)(var12);
 476:
            var5['source'] = var8;
            var8 = true;
            var5['disableColor'] = var8;
            var8 = var11.icons;
            var5['style'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot3;
            var6 = {};
            var12 = var11.middle;
            var6['style'] = var12;
            var16 = 'string';
            var12 = typeof var19;
            var14 = var19;
            if(!(var16 === var12)) { _fun0002_ip = 598; continue _fun0002 }
 545:
            var17 = _closure1_slot9;
            var15 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 11;
            var12 = var20[var12];
            var12 = var15.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {'lineClamp': 1, 'lineBreakMode': 'tail', 'variant': 'text-md/semibold', 'color': 'always-white'};
            var12['children'] = var19;
            var14 = var17.bind(var4)(var15, var12);
 598:
            var12 = new Array(2);
            var12[0] = var14;
            var15 = typeof var18;
            var14 = var18;
            if(!(var16 === var15)) { _fun0002_ip = 669; continue _fun0002 }
 616:
            var17 = _closure1_slot9;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 11;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'lineClamp': 1, 'lineBreakMode': 'tail', 'variant': 'text-xs/medium', 'color': 'always-white'};
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
 669:
            var12[1] = var14;
            var6['children'] = var12;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot3;
            var6 = {};
            var11 = var11.icons;
            var6['style'] = var11;
            var9 = var9 != var13;
            if(!var9) { _fun0002_ip = 734; continue _fun0002 }
 714:
            var12 = _closure1_slot9;
            var11 = _closure1_slot13;
            var10 = {};
            var10['onPress'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 734:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = function AddMemberButton(arg1) {
        var1 = arg1;
        var7 = var1.onPress;
        var1 = _closure1_slot11;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var2 = _closure1_slot14;
        var1 = {};
        var1['onPress'] = var7;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var7 = 23;
        var7 = var9[var7];
        var7 = var8.bind(var4)(var7);
        var1['iconSource'] = var7;
        var6 = var6.icons;
        var1['iconStyle'] = var6;
        var8 = _closure1_slot0;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.6Qgren;
        var5 = var6.bind(var7)(var5);
        var1['accessibilityLabel'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var2;
    var2 = function IconButton(arg1) {
        var1 = arg1;
        var10 = var1.onPress;
        var7 = var1.iconStyle;
        var8 = var1.iconSource;
        var11 = var1.accessibilityLabel;
        var6 = var1.style;
        var4 = _closure1_slot9;
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 24;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var12 = 'button';
        var1['accessibilityRole'] = var12;
        var1['accessibilityLabel'] = var11;
        var1['onPress'] = var10;
        var1['style'] = var6;
        var6 = _closure1_slot1;
        var5 = 19;
        var5 = var9[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var5['source'] = var8;
        var5['style'] = var7;
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var2;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['VoiceChannelHeader'] = var4;
    var3['IconButton'] = var2;
    return var1;
})();
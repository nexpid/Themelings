// app/modules/chat_input/native/accessories/ChatInputAppDMMute.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelDetailsNavigatorScreens;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'padding': 0, 'paddingBottom': 20, 'paddingTop': 20, 'marginTop': 4294967276, 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'gap': 4, 'position': 'relative'};
        var1['container'] = var2;
        var2 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center'};
        var1['textWrapper'] = var2;
        var2 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'zIndex': 4294967295};
        var1['gradient'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputAppDMMute.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.context;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot9;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var11 = var8.bind(var4)(var2);
            var9 = var11.useToken;
            var2 = _closure1_slot1;
            var7 = 7;
            var7 = var5[var7];
            var7 = var2.bind(var4)(var7);
            var7 = var7.colors;
            var7 = var7.BACKGROUND_MOBILE_PRIMARY;
            var7 = var9.bind(var11)(var7);
            var21 = 8;
            var9 = var5[var21];
            var12 = var8.bind(var4)(var9);
            var11 = var12.hexWithOpacity;
            var9 = 0;
            var11 = var11.bind(var12)(var7, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var7;
            var7 = 9;
            var7 = var5[var7];
            var12 = var8.bind(var4)(var7);
            var11 = var12.useStateFromStoresObject;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var1 = var1.id;
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var5 = null;
                    if(!(var5 != var1)) { _fun0002_ip = 77; continue _fun0002 }
 18:
                    var1 = {};
                    var4 = _closure1_slot5;
                    var6 = var4.getChannelMuteConfig;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var3 = var6.bind(var4)(var5, var3);
                    var1['channelMuteConfig'] = var3;
                    var3 = var4.isChannelMuted;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var5, var2);
                    var1['muted'] = var2;
                    _fun0002_ip = 91; continue _fun0002;
 77:
                    var1 = {'channelMuteConfig': null, 'muted': false};
 91:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var8, var1, var7);
            var1 = var7.channelMuteConfig;
            var _closure2_slot1 = var1;
            var18 = var7.muted;
            var _closure2_slot2 = var18;
            var11 = _closure1_slot3;
            var8 = var11.useMemo;
            var7 = new Array(2);
            var7[0] = var1;
            var7[1] = var18;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0003_ip = 77; continue _fun0003 }
 10:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 10;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.VeIJWl;
                    var1 = var2.bind(var3)(var1);
                    _fun0003_ip = 328; continue _fun0003;
 77:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var4 = var3 == var2;
                    var11 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 104; continue _fun0003 }
 94:
                    var4 = _closure2_slot1;
                    var2 = var4.end_time;
 104:
                    if(!(var3 == var2)) { _fun0003_ip = 173; continue _fun0003 }
 108:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 10;
                    var3 = var6[var2];
                    var3 = var5.bind(var11)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var6[var2];
                    var2 = var5.bind(var11)(var2);
                    var2 = var2.t;
                    var2 = var2.eGZFws;
                    var2 = var3.bind(var4)(var2);
                    _fun0003_ip = 325; continue _fun0003;
 173:
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 10;
                    var3 = var12[var7];
                    var3 = var8.bind(var11)(var3);
                    var6 = var3.intl;
                    var5 = var6.format;
                    var3 = var12[var7];
                    var3 = var8.bind(var11)(var3);
                    var3 = var3.t;
                    var4 = var3.7Sbhqa;
                    var3 = {};
                    var10 = global;
                    var13 = var10.Date;
                    var9 = _closure2_slot1;
                    var15 = var9.end_time;
                    var10 = var13.prototype;
                    var10 = Object.create(var10, {constructor: {value: var13}});
                    var16 = var10;
                    var9 = new var16[var13](var15, var14);
                    var10 = var9 instanceof Object ? var9 : var10;
                    var9 = var10.toLocaleString;
                    var7 = var12[var7];
                    var7 = var8.bind(var11)(var7);
                    var7 = var7.intl;
                    var8 = var7.currentLocale;
                    var7 = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
                    var7 = var9.bind(var10)(var8, var7);
                    var3['endDate'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 325:
                    var1 = var2;
 328:
                    return var1;
                }
            };
            var15 = var8.bind(var11)(var1, var7);
            var1 = 11;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['context'] = var3;
            var1 = var2.bind(var4)(var1);
            var1 = var1.application;
            var _closure2_slot3 = var1;
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            if(var18) { _fun0001_ip = 325; continue _fun0001 }
 305:
            var5 = 13;
            var5 = var12[var5];
            var5 = var11.bind(var4)(var5);
            var7 = var5.BellIcon;
            _fun0001_ip = 343; continue _fun0001;
 325:
            var5 = 12;
            var5 = var12[var5];
            var5 = var11.bind(var4)(var5);
            var7 = var5.BellSlashIcon;
 343:
            var5 = {'size': 'xxs', 'color': 'icon-muted'};
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var11 = _closure1_slot8;
            var8 = _closure1_slot4;
            var7 = {};
            var12 = var10.textWrapper;
            var7['style'] = var12;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = 14;
            var12 = var19[var16];
            var12 = var20.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var14 = new Array(2);
            var14[0] = var15;
            var15 = ' ';
            var14[1] = var15;
            var12['children'] = var14;
            var13 = var11.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot7;
            var13 = 15;
            var13 = var19[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.PressableOpacity;
            var13 = {};
            var13['hitSlop'] = var21;
            var17 = function onPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot3;
                    var7 = null;
                    if(!(var7 != var1)) { _fun0004_ip = 248; continue _fun0004 }
 16:
                    var3 = _closure2_slot2;
                    if(var3) { _fun0004_ip = 153; continue _fun0004 }
 29:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 16;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getRootNavigationRef;
                    var8 = var4.bind(var5)();
                    if(!(var7 != var8)) { _fun0004_ip = 151; continue _fun0004 }
 65:
                    var4 = var8.isReady;
                    var4 = var4.bind(var8)();
                    if(!var4) { _fun0004_ip = 151; continue _fun0004 }
 78:
                    var6 = var8.navigate;
                    var5 = {};
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var5['channelId'] = var4;
                    var4 = _closure2_slot3;
                    var4 = var4.id;
                    var5['applicationId'] = var4;
                    var4 = _closure1_slot6;
                    var4 = var4.MUTE;
                    var5['initialRouteName'] = var4;
                    var4 = 'app-dm-mute-banner';
                    var5['source'] = var4;
                    var4 = 'sidebar';
                    var4 = var6.bind(var8)(var4, var5);
                    _fun0004_ip = 248; continue _fun0004;
 151:
                    return var3;
 153:
                    var4 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 17;
                    var3 = var10[var3];
                    var9 = undefined;
                    var6 = var4.bind(var9)(var3);
                    var5 = var6.updateAppDMOverrideSettings;
                    var3 = _closure2_slot0;
                    var14 = var3.id;
                    var2 = _closure2_slot3;
                    var13 = var2.id;
                    var2 = {};
                    var8 = false;
                    var2['muted'] = var8;
                    var8 = _closure1_slot0;
                    var1 = 18;
                    var1 = var10[var1];
                    var1 = var8.bind(var9)(var1);
                    var1 = var1.NotificationLabels;
                    var11 = var1.Unmuted;
                    var16 = var6;
                    var15 = null;
                    var12 = var2;
                    var1 = var16[var5](var15, var14, var13, var12, var11, var10);
 248:
                    var1 = undefined;
                    return var1;
                }
            };
            var13['onPress'] = var17;
            var16 = var19[var16];
            var16 = var20.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-xs/bold', 'color': 'text-link'};
            var23 = 10;
            var19 = var19[var23];
            var19 = var20.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var23];
            var21 = var22.bind(var4)(var21);
            var21 = var21.t;
            if(var18) { _fun0001_ip = 589; continue _fun0001 }
 579:
            var18 = var21.GFEn8/;
            _fun0001_ip = 597; continue _fun0001;
 589:
            var18 = var21.JFu44e;
 597:
            var18 = var19.bind(var20)(var18);
            var16['children'] = var18;
            var16 = var15.bind(var4)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var7['children'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 19;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var10 = var10.gradient;
            var6['style'] = var10;
            var6['colors'] = var9;
            var9 = [0, 0.35];
            var6['locations'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ChatInputAppDMMute'] = var2;
    return var1;
})();
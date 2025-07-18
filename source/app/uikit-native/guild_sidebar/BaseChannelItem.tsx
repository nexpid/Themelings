// app/uikit-native/guild_sidebar/BaseChannelItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var14 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var10;
    var6 = function BaseChannelSubtitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.mode;
            var7 = var1.subtitle;
            var1 = _closure1_slot12;
            var5 = undefined;
            var6 = var1.bind(var5)(var3);
            var1 = null;
            var3 = var1 == var7;
            if(var3) { _fun0001_ip = 105; continue _fun0001 }
 37:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'experimental_useNativeText': true, 'lineClamp': 1};
            var10 = var2;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var6 = 'children';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 105:
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function useChannelNameTextProps(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot9;
            var3 = var3.UNREAD_IMPORTANT;
            if(!(var2 !== var3)) { _fun0002_ip = 140; continue _fun0002 }
 20:
            var3 = _closure1_slot9;
            var3 = var3.RELEVANT;
            if(!(var2 !== var3)) { _fun0002_ip = 140; continue _fun0002 }
 34:
            var3 = _closure1_slot9;
            var3 = var3.UNREAD_LESS_IMPORTANT;
            if(!(var2 !== var3)) { _fun0002_ip = 124; continue _fun0002 }
 48:
            var3 = _closure1_slot9;
            var3 = var3.MUTED;
            if(!(var2 !== var3)) { _fun0002_ip = 108; continue _fun0002 }
 62:
            var1 = _closure1_slot9;
            var1 = var1.SELECTED;
            if(!(var2 !== var1)) { _fun0002_ip = 92; continue _fun0002 }
 76:
            var1 = {'variant': 'text-md/medium', 'color': 'redesign-channel-name-muted-text'};
            _fun0002_ip = 106; continue _fun0002;
 92:
            var1 = {'variant': 'text-md/medium', 'color': 'redesign-channel-name-text'};
 106:
            _fun0002_ip = 122; continue _fun0002;
 108:
            var1 = {'variant': 'text-md/medium', 'color': 'interactive-muted'};
 122:
            _fun0002_ip = 138; continue _fun0002;
 124:
            var1 = {'variant': 'text-md/medium', 'color': 'redesign-channel-name-muted-text'};
 138:
            _fun0002_ip = 154; continue _fun0002;
 140:
            var1 = {'variant': 'text-md/semibold', 'color': 'redesign-channel-name-text'};
 154:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function getChannelSubtitleTextProps(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot9;
            var3 = var3.UNREAD_IMPORTANT;
            if(!(var2 !== var3)) { _fun0003_ip = 94; continue _fun0003 }
 20:
            var3 = _closure1_slot9;
            var3 = var3.RELEVANT;
            if(!(var2 !== var3)) { _fun0003_ip = 94; continue _fun0003 }
 34:
            var3 = _closure1_slot9;
            var3 = var3.SELECTED;
            if(!(var2 !== var3)) { _fun0003_ip = 94; continue _fun0003 }
 48:
            var1 = _closure1_slot9;
            var1 = var1.MUTED;
            if(!(var2 !== var1)) { _fun0003_ip = 78; continue _fun0003 }
 62:
            var1 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            _fun0003_ip = 92; continue _fun0003;
 78:
            var1 = {'variant': 'text-xs/medium', 'color': 'interactive-muted'};
 92:
            _fun0003_ip = 108; continue _fun0003;
 94:
            var1 = {'variant': 'text-xs/medium', 'color': 'redesign-channel-name-text'};
 108:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var7);
    var1 = 0;
    var8 = var10[var1];
    var7 = native4;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.UnreadSetting;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot6 = var8;
    var7 = var7.jsxs;
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var10[var7];
    var11 = var9.bind(var1)(var7);
    var8 = var11.createStyles;
    var7 = {};
    var12 = {};
    var13 = 6;
    var12['paddingHorizontal'] = var13;
    var7['rowPaddingNoIcon'] = var12;
    var12 = {};
    var13 = 5;
    var15 = var10[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var12['borderRadius'] = var15;
    var15 = var10[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_MOD_FAINT;
    var12['backgroundColor'] = var15;
    var7['rowSelected'] = var12;
    var12 = {};
    var15 = var10[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var12['borderRadius'] = var15;
    var7['rowSelectedThemed'] = var12;
    var12 = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'borderWidth': 1};
    var15 = var10[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_FAINT;
    var12['borderColor'] = var15;
    var15 = var10[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var12['borderRadius'] = var15;
    var7['selectedBorder'] = var12;
    var12 = {};
    var15 = var10[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var15 = -var15;
    var12['left'] = var15;
    var7['unreadIndicator'] = var12;
    var15 = 8;
    var12 = {'width': 16, 'height': 16, 'marginRight': 8};
    var7['channelIcon'] = var12;
    var12 = {};
    var12['marginRight'] = var15;
    var7['redesignedChannelIcon'] = var12;
    var12 = {};
    var15 = var10[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.CHANNEL_ICON;
    var12['tintColor'] = var15;
    var7['channelIconNormal'] = var12;
    var12 = {};
    var15 = var10[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_ACTIVE;
    var12['tintColor'] = var15;
    var7['channelIconUnread'] = var12;
    var12 = {};
    var13 = var10[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_MUTED;
    var12['tintColor'] = var13;
    var7['channelIconMuted'] = var12;
    var12 = {'paddingHorizontal': 8, 'paddingVertical': 8, 'flexDirection': 'row', 'alignItems': 'center', 'position': 'relative'};
    var7['channel'] = var12;
    var12 = {'flex': 1, 'flexDirection': 'column', 'alignItems': 'stretch', 'justifyContent': 'center'};
    var7['channelNameContainer'] = var12;
    var12 = {'flexGrow': 1, 'textAlign': 'left'};
    var7['channelName'] = var12;
    var7 = var8.bind(var11)(var7);
    var _closure1_slot8 = var7;
    var7 = {};
    var8 = 'Selected';
    var7['SELECTED'] = var8;
    var8 = 'Locked';
    var7['LOCKED'] = var8;
    var8 = 'Muted';
    var7['MUTED'] = var8;
    var8 = 'Relevant';
    var7['RELEVANT'] = var8;
    var8 = 'UnreadLessImportant';
    var7['UNREAD_LESS_IMPORTANT'] = var8;
    var8 = 'UnreadImportant';
    var7['UNREAD_IMPORTANT'] = var8;
    var8 = 'Default';
    var7['DEFAULT'] = var8;
    var _closure1_slot9 = var7;
    var8 = 11;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'uikit-native/guild_sidebar/BaseChannelItem.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function BaseChannelItem(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var13 = var7.icon;
            var11 = var7.name;
            var19 = var7.mode;
            var _closure2_slot0 = var19;
            var12 = var7.hideIcon;
            var _closure2_slot1 = var12;
            var2 = var7.disableHighlightOnPress;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0004_ip = 48; continue _fun0004 }
 46:
            var2 = false;
 48:
            var10 = var7.channelInfo;
            var5 = var7.children;
            var18 = var7.unread;
            if(!(var18 === var4)) { _fun0004_ip = 71; continue _fun0004 }
 69:
            var18 = false;
 71:
            var6 = {'icon': 0, 'name': 0, 'mode': 0, 'hideIcon': 0, 'disableHighlightOnPress': 0, 'channelInfo': 0, 'children': 0, 'unread': 0};
            var23 = null;
            var24 = var6;
            var1 = silentSetPrototypeOf(var24, var23);
            var24 = {};
            var23 = var7;
            var22 = var6;
            var6 = copyDataProperties(var24, var23, var22);
            var _closure2_slot2 = var4;
            var7 = _closure1_slot8;
            var20 = var7.bind(var4)();
            _closure2_slot2 = var20;
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var7 = new Array(3);
            var7[0] = var12;
            var7[1] = var19;
            var7[2] = var20;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot2;
                    var2 = var1.channel;
                    var1 = new Array(3);
                    var1[0] = var2;
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0005_ip = 37; continue _fun0005 }
 27:
                    var4 = _closure2_slot2;
                    var2 = var4.rowPaddingNoIcon;
 37:
                    var1[1] = var2;
                    var4 = _closure2_slot0;
                    var2 = _closure1_slot9;
                    var2 = var2.SELECTED;
                    var2 = var4 === var2;
                    if(!var2) { _fun0005_ip = 75; continue _fun0005 }
 65:
                    var3 = _closure2_slot2;
                    var2 = var3.rowSelected;
 75:
                    var1[2] = var2;
                    return var1;
                }
            };
            var9 = var8.bind(var9)(var3, var7);
            var8 = _closure1_slot7;
            var7 = _closure1_slot4;
            var3 = {};
            var3['style'] = var9;
            var9 = _closure1_slot9;
            var9 = var9.SELECTED;
            var14 = var19 === var9;
            if(!var14) { _fun0004_ip = 220; continue _fun0004 }
 194:
            var16 = _closure1_slot6;
            var15 = _closure1_slot4;
            var9 = {};
            var17 = var20.selectedBorder;
            var9['style'] = var17;
            var14 = var16.bind(var4)(var15, var9);
 220:
            var9 = new Array(5);
            var9[0] = var14;
            var14 = !var12;
            if(!var14) { _fun0004_ip = 322; continue _fun0004 }
 234:
            var17 = _closure1_slot6;
            var16 = _closure1_slot1;
            var21 = _closure1_slot2;
            var15 = 8;
            var15 = var21[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var20 = var20.unreadIndicator;
            var15['style'] = var20;
            var15['unread'] = var18;
            var18 = _closure1_slot9;
            var18 = var18.UNREAD_LESS_IMPORTANT;
            if(!(var19 !== var18)) { _fun0004_ip = 301; continue _fun0004 }
 289:
            var18 = _closure1_slot5;
            var18 = var18.ALL_MESSAGES;
            _fun0004_ip = 311; continue _fun0004;
 301:
            var19 = _closure1_slot5;
            var18 = var19.ONLY_MENTIONS;
 311:
            var15['resolvedUnreadSetting'] = var18;
            var14 = var17.bind(var4)(var16, var15);
 322:
            var9[1] = var14;
            var12 = !var12;
            if(!var12) { _fun0004_ip = 335; continue _fun0004 }
 332:
            var12 = var13;
 335:
            var9[2] = var12;
            var9[3] = var11;
            var9[4] = var10;
            var3['children'] = var9;
            var7 = var8.bind(var4)(var7, var3);
            var3 = _closure1_slot7;
            if(var2) { _fun0004_ip = 392; continue _fun0004 }
 364:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.AnimatedPressableHighlight;
            _fun0004_ip = 412; continue _fun0004;
 392:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var2 = var8.bind(var4)(var1);
 412:
            var1 = {};
            var24 = var1;
            var23 = var6;
            var6 = copyDataProperties(var24, var23);
            var6 = new Array(2);
            var6[0] = var7;
            var6[1] = var5;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var8;
    var3['ChannelModes'] = var7;
    var3['BaseChannelSubtitle'] = var6;
    var6 = function BaseChannelIcon(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var17 = var1.disableColor;
            var3 = var1.mode;
            var12 = var1.source;
            var5 = var1.IconComponent;
            var11 = var1.style;
            var7 = var1.isChannelLive;
            var1 = _closure1_slot8;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var1 = _closure1_slot9;
            var1 = var1.MUTED;
            var10 = var3 === var1;
            var1 = _closure1_slot9;
            var1 = var1.UNREAD_IMPORTANT;
            var8 = var3 === var1;
            var1 = _closure1_slot9;
            var1 = var1.SELECTED;
            var9 = var3 === var1;
            var1 = var6.channelIcon;
            var13 = new Array(1);
            var13[0] = var1;
            var1 = true;
            if(!(var1 !== var17)) { _fun0006_ip = 152; continue _fun0006 }
 111:
            var3 = var13.push;
            if(var10) { _fun0006_ip = 141; continue _fun0006 }
 119:
            if(var8) { _fun0006_ip = 133; continue _fun0006 }
 122:
            if(var9) { _fun0006_ip = 133; continue _fun0006 }
 125:
            var1 = var6.channelIconNormal;
            _fun0006_ip = 139; continue _fun0006;
 133:
            var1 = var6.channelIconUnread;
 139:
            _fun0006_ip = 147; continue _fun0006;
 141:
            var1 = var6.channelIconMuted;
 147:
            var1 = var3.bind(var13)(var1);
 152:
            var1 = null;
            if(!(var1 != var11)) { _fun0006_ip = 168; continue _fun0006 }
 158:
            var3 = var13.push;
            var3 = var3.bind(var13)(var11);
 168:
            if(!(var1 == var5)) { _fun0006_ip = 244; continue _fun0006 }
 172:
            var11 = _closure1_slot6;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 7;
            var1 = var16[var14];
            var3 = var15.bind(var4)(var1);
            var1 = {};
            var1['disableColor'] = var17;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Sizes;
            var14 = var14.CUSTOM;
            var1['size'] = var14;
            var1['style'] = var13;
            var1['source'] = var12;
            var1 = var11.bind(var4)(var3, var1);
            _fun0006_ip = 320; continue _fun0006;
 244:
            var3 = _closure1_slot6;
            var2 = {};
            var11 = 'sm';
            var2['size'] = var11;
            var6 = var6.redesignedChannelIcon;
            var2['style'] = var6;
            var6 = 'status-positive';
            if(var7) { _fun0006_ip = 310; continue _fun0006 }
 277:
            var7 = 'interactive-muted';
            if(var10) { _fun0006_ip = 307; continue _fun0006 }
 286:
            if(var8) { _fun0006_ip = 298; continue _fun0006 }
 289:
            var8 = 'channel-icon';
            if(!var9) { _fun0006_ip = 304; continue _fun0006 }
 298:
            var8 = 'interactive-active';
 304:
            var7 = var8;
 307:
            var6 = var7;
 310:
            var2['color'] = var6;
            var1 = var3.bind(var4)(var5, var2);
 320:
            return var1;
        }
    };
    var3['BaseChannelIcon'] = var6;
    var3['useChannelNameTextProps'] = var5;
    var3['getChannelSubtitleTextProps'] = var4;
    var2 = function BaseChannelName(arg1) {
        var1 = arg1;
        var10 = var1.mode;
        var12 = var1.name;
        var9 = var1.subtitle;
        var11 = var1.textStyle;
        var1 = _closure1_slot8;
        var4 = undefined;
        var13 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var13.channelNameContainer;
        var1['style'] = var5;
        var8 = _closure1_slot6;
        var7 = _closure1_slot0;
        var14 = _closure1_slot2;
        var5 = 6;
        var5 = var14[var5];
        var5 = var7.bind(var4)(var5);
        var7 = var5.Text;
        var5 = {};
        var14 = true;
        var5['experimental_useNativeText'] = var14;
        var14 = _closure1_slot11;
        var16 = var14.bind(var4)(var10);
        var17 = var5;
        var14 = copyDataProperties(var17, var16);
        var15 = 1;
        var14 = 'lineClamp';
        var5[var14] = var15;
        var14 = var13.channelName;
        var13 = new Array(2);
        var13[0] = var14;
        var13[1] = var11;
        var11 = 'style';
        var5[var11] = var13;
        var11 = 'children';
        var5[var11] = var12;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot6;
        var7 = _closure1_slot10;
        var6 = {};
        var6['mode'] = var10;
        var6['subtitle'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['BaseChannelName'] = var2;
    return var1;
})();